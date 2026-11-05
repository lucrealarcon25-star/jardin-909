/* ================================================================
   app.js — Funcionamiento del sitio del Jardín N.º 909
   Lee los textos de contenido.js y arma cada sección.
   Para cambiar textos, editá contenido.js (no hace falta tocar este archivo).
   ================================================================ */
(function () {
  "use strict";

  var C = window.CONTENIDO;
  if (!C) {
    console.error("No se encontró contenido.js o tiene un error de escritura.");
    return;
  }

  var PROPUESTA = !!(C.sitio && C.sitio.modoPropuesta);
  var SVG_NS = "http://www.w3.org/2000/svg";

  /* ---------------- Utilidades ---------------- */

  function $(sel, raiz) { return (raiz || document).querySelector(sel); }
  function $$(sel, raiz) { return Array.prototype.slice.call((raiz || document).querySelectorAll(sel)); }

  function vacio(v) { return v == null || String(v).trim() === ""; }

  function leer(ruta) {
    return ruta.split(".").reduce(function (obj, clave) {
      return obj == null ? undefined : obj[clave];
    }, C);
  }

  // Crea un elemento: h("p", {class: "x"}, "texto", otroNodo)
  function h(etiqueta, props) {
    var nodo = document.createElement(etiqueta);
    if (props) {
      Object.keys(props).forEach(function (k) {
        var v = props[k];
        if (v == null || v === false) return;
        if (k === "class") nodo.className = v;
        else if (k === "text") nodo.textContent = v;
        else if (k === "hidden") nodo.hidden = true;
        else if (k.indexOf("on") === 0) nodo.addEventListener(k.slice(2), v);
        else nodo.setAttribute(k, v === true ? "" : v);
      });
    }
    for (var i = 2; i < arguments.length; i++) agregar(nodo, arguments[i]);
    return nodo;
  }

  function agregar(nodo, hijo) {
    if (hijo == null || hijo === false) return;
    if (Array.isArray(hijo)) { hijo.forEach(function (x) { agregar(nodo, x); }); return; }
    nodo.appendChild(hijo.nodeType ? hijo : document.createTextNode(String(hijo)));
  }

  // Texto de dato pendiente (solo visible en modo propuesta)
  function pendiente(texto) {
    var t = texto || C.sitio.textoPendiente;
    if (!PROPUESTA || vacio(t)) return null; // texto vacío = no se muestra nada
    return h("span", { class: "pendiente" }, t);
  }

  // Convierte un texto largo en párrafos (separados por una línea en blanco)
  // Convierte **palabras** en resaltado azul (negrita), de forma segura
  function conResaltados(texto) {
    var partes = String(texto).split(/\*\*(.+?)\*\*/g);
    return partes.map(function (t, i) {
      return i % 2 ? h("strong", { class: "resaltado" }, t) : document.createTextNode(t);
    });
  }

  function parrafos(texto) {
    return String(texto).split(/\n\s*\n/).map(function (p) {
      return h("p", null, conResaltados(p.trim()));
    });
  }

  // Bloque de texto o aviso de pendiente
  function bloqueTexto(texto, textoPendiente) {
    if (!vacio(texto)) return parrafos(texto);
    var p = pendiente(textoPendiente);
    return p ? h("p", null, p) : null;
  }

  // Triángulo "pico de pingüino"
  function pico(clase) {
    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 10 12");
    svg.setAttribute("class", clase || "pico");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    var path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("d", "M0 0L10 6L0 12Z");
    svg.appendChild(path);
    return svg;
  }

  // Imagen con reemplazo si el archivo todavía no está en assets/
  function imagen(recurso, clase, opciones) {
    opciones = opciones || {};
    var alt = (recurso && recurso.alt) || "";
    var img = h("img", {
      class: clase,
      src: recurso.src,
      alt: alt,
      loading: opciones.prioridad ? "eager" : "lazy",
      decoding: "async"
    });
    img.addEventListener("error", function () {
      var nombre = String(recurso.src || "").split("/").pop();
      var aviso = h("span", {
        class: clase + " falta-recurso",
        role: alt ? "img" : null,
        "aria-label": alt || null,
        "aria-hidden": alt ? null : "true"
      }, PROPUESTA ? h("span", { class: "falta-recurso__texto" }, "Falta: " + nombre) : null);
      if (img.parentNode) img.parentNode.replaceChild(aviso, img);
    }, { once: true });
    return img;
  }

  // La trama de fondo se desvanece mientras hay un panel abierto en la sección visible
  function actualizarTrama() {
    var abierto = document.querySelector("main > section:not([hidden]) .solapa:not([hidden])");
    document.body.classList.toggle("panel-abierto", !!abierto);
  }

  function reducirMovimiento() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /* SOLAPA: panel que se abre debajo al tocar un enlace ("Conocer la sala",
     "Conocer más", etc.). Muestra solo la información del enlace tocado.
     items = [{ titulo, contenido }]
     Devuelve { nodo, conectar(boton, indice) } */
  var cantidadSolapas = 0;

  function crearSolapa(nombre, items) {
    var id = "solapa-" + (++cantidadSolapas);
    var disparadores = [];
    var actual = -1;
    var paneles = [];

    var cerrarBtn = h("button", { class: "solapa__cerrar", type: "button" },
      h("span", { "aria-hidden": "true" }, "×"), " Cerrar");
    var nodo = h("div", { class: "solapa", hidden: true }, cerrarBtn);

    items.forEach(function (it, i) {
      var panel = h("div", {
        class: "solapa__panel", id: id + "-panel-" + i,
        role: "region", "aria-label": it.titulo, tabindex: "-1", hidden: true
      }, it.contenido);
      nodo.appendChild(panel);
      paneles.push(panel);
    });

    function abrir(i) {
      actual = i;
      paneles.forEach(function (p, j) { p.hidden = i !== j; });
      disparadores.forEach(function (d) { d.boton.setAttribute("aria-expanded", String(d.i === i)); });
      nodo.hidden = false;
      actualizarTrama();
      paneles[i].focus({ preventScroll: true });
      nodo.scrollIntoView({ block: "nearest", behavior: reducirMovimiento() ? "auto" : "smooth" });
    }

    function cerrar() {
      var volver = null;
      disparadores.forEach(function (d) {
        if (d.i === actual) volver = d.boton;
        d.boton.setAttribute("aria-expanded", "false");
      });
      nodo.hidden = true;
      actual = -1;
      actualizarTrama();
      if (volver) volver.focus();
    }

    cerrarBtn.addEventListener("click", cerrar);
    nodo.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { e.preventDefault(); cerrar(); }
    });

    return {
      nodo: nodo,
      conectar: function (boton, i) {
        boton.setAttribute("aria-controls", id + "-panel-" + i);
        boton.setAttribute("aria-expanded", "false");
        disparadores.push({ boton: boton, i: i });
        boton.addEventListener("click", function () {
          if (!nodo.hidden && actual === i) cerrar();
          else abrir(i);
        });
      }
    };
  }

  function formatoFecha(iso) {
    if (vacio(iso)) return "";
    var f = new Date(iso + "T12:00:00");
    if (isNaN(f)) return iso;
    return f.toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });
  }

  /* ---------------- Textos simples (data-texto) ---------------- */

  function textosSimples() {
    $$("[data-texto]").forEach(function (nodo) {
      var valor = leer(nodo.getAttribute("data-texto"));
      if (vacio(valor)) nodo.hidden = true;
      else nodo.textContent = valor;
    });
  }

  /* ---------------- Aviso de propuesta ---------------- */

  function aviso() {
    var nodo = $("#aviso");
    if (PROPUESTA && !vacio(C.sitio.avisoPropuesta)) {
      nodo.textContent = C.sitio.avisoPropuesta;
      nodo.hidden = false;
    }
  }

  /* ---------------- Encabezado y menú ---------------- */

  function encabezado() {
    var marca = $("#marca");
    marca.setAttribute("aria-label", C.sitio.nombre + " – Inicio");
    marca.appendChild(imagen({ src: C.sitio.logo.src, alt: C.sitio.logo.alt }, "marca__logo", { prioridad: true }));

    var lista = $("#menu-principal");
    C.menu.forEach(function (item) {
      lista.appendChild(h("li", null,
        h("a", { class: "navegacion__enlace", href: "#" + item.destino }, item.texto)
      ));
    });

    // Menú para celulares
    var cabecera = $("#encabezado");
    var boton = $("#menu-boton");

    function cerrar(devolverFoco) {
      cabecera.classList.remove("menu-abierto");
      boton.setAttribute("aria-expanded", "false");
      if (devolverFoco) boton.focus();
    }

    boton.addEventListener("click", function () {
      var abrir = boton.getAttribute("aria-expanded") !== "true";
      cabecera.classList.toggle("menu-abierto", abrir);
      boton.setAttribute("aria-expanded", String(abrir));
      if (abrir) { var primero = $("a", lista); if (primero) primero.focus(); }
    });

    lista.addEventListener("click", function (e) {
      if (e.target.closest("a")) cerrar(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && cabecera.classList.contains("menu-abierto")) cerrar(true);
    });

    document.addEventListener("click", function (e) {
      if (cabecera.classList.contains("menu-abierto") && !cabecera.contains(e.target)) cerrar(false);
    });

    // Si se agranda la pantalla con el menú abierto, se cierra
    window.matchMedia("(min-width: 901px)").addEventListener("change", function (m) {
      if (m.matches) cerrar(false);
    });
  }

  /* NAVEGACIÓN POR SOLAPAS
     Se muestra una sola sección por vez. La portada es la primera pantalla
     y cada opción del menú abre su sección. La dirección cambia (#salas,
     #proyectos…), así funcionan el botón "Atrás" y los enlaces compartidos. */
  function navegacionPorSolapas() {
    var secciones = $$("main > section[id]");
    var ids = secciones.map(function (s) { return s.id; });
    var enlaces = $$(".navegacion__enlace");
    var tituloBase = document.title;
    var primeraVez = true;

    document.body.classList.add("modo-solapas");

    secciones.forEach(function (s) {
      var titulo = $("h1, h2", s);
      if (titulo) titulo.setAttribute("tabindex", "-1");
    });

    function mostrar() {
      var id = location.hash.slice(1);
      if (ids.indexOf(id) < 0) {
        // Anclas internas (por ejemplo "Saltar al contenido") no cambian la solapa
        if (!primeraVez && id) return;
        id = "inicio";
      }

      secciones.forEach(function (s) { s.hidden = s.id !== id; });
      document.body.classList.toggle("en-portada", id === "inicio");
      actualizarPie(id);
      actualizarTrama();
      enlaces.forEach(function (a) {
        if (a.getAttribute("href") === "#" + id) a.setAttribute("aria-current", "page");
        else a.removeAttribute("aria-current");
      });

      var seccion = document.getElementById(id);
      var titulo = $("h1, h2", seccion);
      document.title = id === "inicio" || !titulo ? tituloBase : titulo.textContent + " · " + tituloBase;

      window.scrollTo(0, 0);
      // Lleva el foco al título de la solapa (lectores de pantalla y teclado)
      if (!primeraVez && titulo) titulo.focus({ preventScroll: true });
      primeraVez = false;
    }

    window.addEventListener("hashchange", mostrar);
    mostrar();
    // El navegador salta solo al #ancla al cargar; volvemos arriba de la solapa
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.addEventListener("load", function () { window.scrollTo(0, 0); });
  }

  /* ---------------- 1. Portada ---------------- */

  function portada() {
    var p = C.portada;
    var contenedor = $("#portada-ilustracion");
    if (p.espejarIlustracion) contenedor.classList.add("portada__ilustracion--espejada");
    var V = p.video || {};
    if (!vacio(V.src)) contenedor.appendChild(videoPortada(V, function () {
      // Si el video no carga, se muestra el pingüino
      contenedor.textContent = "";
      contenedor.appendChild(imagen(p.ilustracion, "portada__img", { prioridad: true }));
    }));
    else contenedor.appendChild(imagen(p.ilustracion, "portada__img", { prioridad: true }));

  }

  // Video de la portada: el pingüino se arma una vez y queda fijo.
  // Al terminar, se funde con la imagen final (nítida). Sin sonido.
  // Si la persona prefiere "reducir movimiento", se ve directamente la imagen final.
  function videoPortada(V, alFallar) {
    var caja = h("div", { class: "portada__video-caja" });
    var final = vacio(V.imagenFinal) ? null
      : imagen({ src: V.imagenFinal, alt: "" }, "portada__video-final");

    if (reducirMovimiento() && final) {
      final.classList.add("portada__video-final--visible");
      caja.appendChild(final);
      return caja;
    }

    var video = h("video", {
      class: "portada__video", src: V.src, playsinline: true, preload: "auto",
      "aria-label": V.descripcion || ""
    });
    video.muted = true;
    video.defaultMuted = true;
    video.loop = V.repetir === true;
    video.autoplay = true;
    video.addEventListener("error", alFallar, { once: true });
    function mostrarFinal() {
      if (!final) return;
      final.classList.add("portada__video-final--visible");
      video.classList.add("portada__video--oculto");
    }
    // Se funde un poco antes del final, para que el saltito termine en la imagen quieta
    video.addEventListener("timeupdate", function () {
      if (video.duration && video.currentTime >= video.duration - 0.35) mostrarFinal();
    });
    video.addEventListener("ended", mostrarFinal);
    var intento = video.play && video.play();
    if (intento && intento.catch) intento.catch(mostrarFinal);

    caja.appendChild(video);
    if (final) caja.appendChild(final);
    return caja;
  }

  /* ---------------- Pantalla de entrada ---------------- */
  function introMarca() {
    var I = C.intro;
    if (!I || vacio(I.src)) return;
    var hash = location.hash.slice(1);
    if (hash && hash !== "inicio") return;          // solo al entrar por la portada
    if (reducirMovimiento()) return;
    var CLAVE = "jardin909-intro-vista";
    try { if (I.unaVezPorVisita && sessionStorage.getItem(CLAVE)) return; } catch (e) {}

    var cerrada = false;
    var video = h("video", {
      class: "intro__video", src: I.src, playsinline: true, preload: "auto",
      "aria-label": I.descripcion || ""
    });
    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = true;

    var saltar = h("button", { class: "intro__saltar", type: "button" },
      h("span", null, I.textoSaltar || "Saltar"), pico("pico"));

    var capa = h("div", { class: "intro", role: "dialog", "aria-modal": "true", "aria-label": "Presentación del jardín" },
      h("div", { class: "trama intro__trama", "aria-hidden": "true" }),
      video, saltar);

    function cerrar() {
      if (cerrada) return;
      cerrada = true;
      try { sessionStorage.setItem(CLAVE, "1"); } catch (e) {}
      capa.classList.add("intro--saliendo");
      document.documentElement.classList.remove("intro-activa");
      setTimeout(function () {
        if (capa.parentNode) capa.parentNode.removeChild(capa);
        var t = $("#portada-titulo"); if (t) t.focus({ preventScroll: true });
      }, 700);
    }

    saltar.addEventListener("click", cerrar);
    video.addEventListener("ended", cerrar);
    video.addEventListener("error", cerrar);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") cerrar(); });
    // Por seguridad: si el video no arranca o se traba, la página aparece igual
    setTimeout(function () { if (video.paused && video.currentTime === 0) cerrar(); }, 4000);
    setTimeout(cerrar, 20000);

    document.documentElement.classList.add("intro-activa");
    document.body.appendChild(capa);
    var intento = video.play();
    if (intento && intento.catch) intento.catch(cerrar);
  }

  /* ---------------- 2. Nuestro jardín ---------------- */

  function jardin() {
    var contenedor = $("#jardin-apartados");
    var botones = h("ul", { class: "apartados__botones" });

    var solapa = crearSolapa(C.jardin.titulo, C.jardin.apartados.map(function (a) {
      return {
        titulo: a.titulo,
        contenido: [
          h("h3", { class: "solapa__titulo" }, a.titulo),
          a.imagen ? h("figure", { class: "mapa" },
            imagen(a.imagen, "mapa__img"),
            h("figcaption", null,
              h("a", { class: "enlace-pico enlace-pico--chico", href: a.imagen.src, target: "_blank", rel: "noopener" },
                pico("pico"),
                h("span", { class: "enlace-pico__texto" }, "Ver el mapa en tamaño completo"),
                h("span", { class: "visualmente-oculto" }, " (se abre en una pestaña nueva)")))
          ) : null,
          (a.imagen && vacio(a.texto)) ? null : bloqueTexto(a.texto)
        ]
      };
    }));

    C.jardin.apartados.forEach(function (a, i) {
      var boton = h("button", { class: "enlace-indicador", type: "button" },
        pico("pico"), h("span", null, a.titulo));
      var item = h("li", null, boton);
      botones.appendChild(item);
      // En forma de lista: la información se abre justo debajo del ítem tocado
      boton.addEventListener("click", function () { item.appendChild(solapa.nodo); });
      solapa.conectar(boton, i);
    });

    contenedor.appendChild(botones);
  }

  /* ---------------- 3. Salas ---------------- */

  function salas() {
    var lista = $("#salas-lista");

    var solapa = crearSolapa(C.salas.titulo, C.salas.items.map(function (s) {
      var datos = h("dl", { class: "ficha__datos" });
      (s.datos || []).forEach(function (d) {
        if (vacio(d.valor) && !PROPUESTA) return;
        datos.appendChild(h("div", null,
          h("dt", null, d.etiqueta),
          h("dd", null, vacio(d.valor) ? pendiente() : d.valor)
        ));
      });
      return {
        titulo: s.nombre,
        contenido: h("div", { class: "ficha" },
          h("div", { class: "ficha__imagen ficha__imagen--circulo" }, imagen(s.imagen, "ficha__img")),
          h("div", { class: "ficha__texto" },
            h("h3", { class: "solapa__titulo" }, s.nombre),
            vacio(s.valor) ? null : h("p", { class: "ficha__valor" }, s.valor),
            vacio(s.animal) ? null : h("p", { class: "ficha__animal" }, s.animal),
            bloqueTexto(s.descripcion),
            datos.childNodes.length ? datos : null
          )
        )
      };
    }));

    C.salas.items.forEach(function (s, i) {
      var boton = h("button", { class: "enlace-pico", type: "button" },
        pico("pico"),
        h("span", { class: "enlace-pico__texto" }, C.salas.textoEnlace),
        h("span", { class: "visualmente-oculto" }, " – " + s.nombre));

      lista.appendChild(h("li", { class: "sala sala--" + s.id },
        h("div", { class: "sala__circulo" }, imagen(s.imagen, "sala__img")),
        h("h3", { class: "sala__nombre" }, s.nombre),
        boton
      ));
      solapa.conectar(boton, i);
    });

    lista.insertAdjacentElement("afterend", solapa.nodo);
  }

  /* ---------------- 4. Proyectos ---------------- */

  function proyectos() {
    var lista = $("#proyectos-lista");

    var solapa = crearSolapa(C.proyectos.titulo, C.proyectos.items.map(function (p) {
      return {
        titulo: p.titulo,
        contenido: h("div", { class: "ficha" },
          h("div", { class: "ficha__imagen" }, imagen(p.imagen, "ficha__img")),
          h("div", { class: "ficha__texto" },
            h("h3", { class: "solapa__titulo" }, p.titulo),
            h("p", { class: "ficha__resumen" }, p.resumen),
            bloqueTexto(p.detalle)
          )
        )
      };
    }));

    C.proyectos.items.forEach(function (p, i) {
      var boton = h("button", { class: "enlace-pico enlace-pico--chico", type: "button" },
        pico("pico"),
        h("span", { class: "enlace-pico__texto" }, C.proyectos.textoEnlace),
        h("span", { class: "visualmente-oculto" }, " – " + p.titulo));

      lista.appendChild(h("li", { class: "proyecto" },
        h("div", { class: "proyecto__icono" }, imagen(p.imagen, "proyecto__img")),
        h("div", { class: "proyecto__texto" },
          h("h3", { class: "proyecto__titulo" }, p.titulo),
          h("p", { class: "proyecto__resumen" }, p.resumen),
          boton
        )
      ));
      solapa.conectar(boton, i);
    });

    lista.insertAdjacentElement("afterend", solapa.nodo);
  }

  /* ---------------- 5. Novedades ---------------- */

  function novedades() {
    var N = C.novedades;
    var filtros = $("#novedades-filtros");
    var panelTabs = $("#novedades-panel");
    var lista = $("#novedades-lista");
    var lugarSolapa = h("div");
    lista.insertAdjacentElement("afterend", lugarSolapa);

    // Las que tienen fecha, de la más nueva a la más vieja; el resto, en su orden.
    var items = N.items.map(function (it, i) { return { it: it, i: i }; })
      .sort(function (a, b) {
        var fa = a.it.fecha || "", fb = b.it.fecha || "";
        if (fa && fb) return fb.localeCompare(fa);
        if (fa) return -1;
        if (fb) return 1;
        return a.i - b.i;
      })
      .map(function (x) { return x.it; });

    function meta(it) {
      var partes = [];
      var cat = N.filtros.filter(function (f) { return f.id === it.categoria; })[0];
      if (cat) partes.push(h("span", { class: "novedad__categoria" }, cat.texto));
      if (!vacio(it.fecha)) partes.push(h("time", { datetime: it.fecha }, (partes.length ? " · " : "") + formatoFecha(it.fecha)));
      if (it.ejemplo) partes.push(h("span", null, (partes.length ? " · " : "") + "Contenido de ejemplo"));
      return partes.length ? h("p", { class: "novedad__meta" }, partes) : null;
    }

    function pintar(categoria) {
      lista.textContent = "";
      lugarSolapa.textContent = "";
      var visibles = items.filter(function (it) {
        return categoria === "todas" || it.categoria === categoria;
      });

      if (!visibles.length) {
        lista.appendChild(h("li", { class: "novedad novedad--vacia" }, N.textoSinResultados));
        return;
      }

      var solapa = crearSolapa(N.titulo, visibles.map(function (it) {
        var enlace = (it.enlace && !vacio(it.enlace.url))
          ? h("p", null, h("a", { class: "enlace-texto", href: it.enlace.url, target: "_blank", rel: "noopener" },
              it.enlace.texto || "Ver documento", h("span", { class: "visualmente-oculto" }, " (se abre en una pestaña nueva)")))
          : null;
        return {
          titulo: it.titulo,
          contenido: [
            h("h3", { class: "solapa__titulo" }, it.titulo),
            meta(it),
            h("p", { class: "ficha__resumen" }, it.resumen),
            bloqueTexto(it.texto),
            enlace
          ]
        };
      }));

      visibles.forEach(function (it, i) {
        var boton = h("button", { class: "enlace-indicador", type: "button" },
          pico("pico"), h("span", null, (N.filtros.filter(function (f) { return f.id === it.categoria; })[0] || {}).enlace || N.textoEnlace),
          h("span", { class: "visualmente-oculto" }, ": " + it.titulo));

        lista.appendChild(h("li", { class: "novedad" },
          h("div", { class: "novedad__encabezado" },
            h("h3", { class: "novedad__titulo" }, it.titulo),
            meta(it),
            boton
          ),
          h("p", { class: "novedad__resumen" }, it.resumen)
        ));
        solapa.conectar(boton, i);
      });

      lugarSolapa.appendChild(solapa.nodo);
    }

    // Pestañas de filtro (flechas izquierda/derecha para moverse)
    var tabs = N.filtros.map(function (f, i) {
      var tab = h("button", {
        class: "filtros__tab",
        type: "button",
        role: "tab",
        id: "filtro-" + f.id,
        "aria-controls": "novedades-panel",
        "aria-selected": i === 0 ? "true" : "false",
        tabindex: i === 0 ? "0" : "-1"
      }, f.texto);
      tab.addEventListener("click", function () { activar(i, false); });
      filtros.appendChild(tab);
      return tab;
    });

    function activar(i, mover) {
      tabs.forEach(function (t, j) {
        t.setAttribute("aria-selected", String(i === j));
        t.setAttribute("tabindex", i === j ? "0" : "-1");
      });
      panelTabs.setAttribute("aria-labelledby", tabs[i].id);
      if (mover) tabs[i].focus();
      pintar(N.filtros[i].id);
    }

    filtros.addEventListener("keydown", function (e) {
      var actual = tabs.indexOf(document.activeElement);
      if (actual < 0) return;
      var destino = null;
      if (e.key === "ArrowRight") destino = (actual + 1) % tabs.length;
      else if (e.key === "ArrowLeft") destino = (actual - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") destino = 0;
      else if (e.key === "End") destino = tabs.length - 1;
      if (destino !== null) { e.preventDefault(); activar(destino, true); }
    });

    activar(0, false);
  }

  /* ---------------- 6. Contacto ---------------- */

  function contacto() {
    var D = C.contacto;
    var cont = $("#contacto-datos");

    function columna(titulo, contenido) {
      var hijos = contenido.filter(Boolean);
      if (!hijos.length) return null;
      return h("div", { class: "contacto__columna" },
        h("h3", { class: "contacto__titulo" }, titulo), hijos);
    }

    // Dirección
    var direccion = [];
    if (!vacio(D.domicilio)) {
      direccion.push(h("p", null, D.domicilio + (vacio(D.entreCalles) ? "" : ", " + D.entreCalles)));
    } else if (PROPUESTA) {
      direccion.push(h("p", null, pendiente("Domicilio a confirmar")));
    }
    var lineaLocalidad = [vacio(D.codigoPostal) ? "" : "CP " + D.codigoPostal, D.localidad || ""].filter(Boolean).join(" · ");
    if (lineaLocalidad) direccion.push(h("p", null, lineaLocalidad));
    if (!vacio(D.nivel)) direccion.push(h("p", null, D.nivel));
    if (!vacio(D.mapa)) {
      direccion.push(h("p", { class: "contacto__mapa-enlace" }, h("a", { class: "enlace-pico enlace-pico--chico", href: D.mapa, target: "_blank", rel: "noopener" },
        pico("pico"), h("span", { class: "enlace-pico__texto" }, "Ver en el mapa"),
        h("span", { class: "visualmente-oculto" }, " (se abre en una pestaña nueva)"))));
    }

    // Horarios
    var horarios = [vacio(D.horarios) ? (pendiente() ? h("p", null, pendiente()) : null) : parrafos(D.horarios)];
    horarios = [].concat.apply([], horarios);

    // Contacto institucional
    var datos = [];
    if (!vacio(D.telefono)) {
      datos.push(h("p", null, "Teléfono: ",
        h("a", { class: "enlace-texto", href: "tel:" + D.telefono.replace(/[^\d+]/g, "") }, D.telefono)));
    }
    if (!vacio(D.email)) {
      datos.push(h("p", null, "Correo: ", h("a", { class: "enlace-texto", href: "mailto:" + D.email }, D.email)));
    }
    var igContacto = enlaceInstagram();
    if (igContacto) datos.push(h("p", null, igContacto));
    if (!datos.length && PROPUESTA) datos.push(h("p", null, pendiente()));

    [columna("Dirección", direccion), columna("Horarios", horarios), columna("Contacto institucional", datos)]
      .forEach(function (c) { if (c) cont.appendChild(c); });

    // Enlaces institucionales configurables
    var enlaces = (C.enlaces || []).filter(function (e) { return e && !vacio(e.url) && !vacio(e.texto); });
    if (enlaces.length) {
      var ul = $("#contacto-enlaces");
      enlaces.forEach(function (e) {
        ul.appendChild(h("li", null,
          h("a", { class: "enlace-pico enlace-pico--chico", href: e.url, target: "_blank", rel: "noopener" },
            pico("pico"),
            h("span", { class: "enlace-pico__texto" }, e.texto),
            h("span", { class: "visualmente-oculto" }, " (se abre en una pestaña nueva)"))));
      });
      ul.hidden = false;
    }

    mapaInsertado(D);
    formulario(D);

    if (PROPUESTA && !vacio(D.nota)) {
      var nota = $("#contacto-nota");
      nota.textContent = D.nota;
      nota.hidden = false;
    }
  }

  // Mapa de Google dentro de la página ("Estamos acá")
  function mapaInsertado(D) {
    if (vacio(D.mapaInsertado)) return;
    var caja = $("#contacto-mapa");
    caja.appendChild(h("h3", { class: "contacto-sub__titulo" }, D.tituloMapa || "Estamos acá"));
    caja.appendChild(h("div", { class: "contacto-mapa__marco" },
      h("iframe", {
        src: D.mapaInsertado,
        title: "Mapa de Google con la ubicación del jardín: " + [D.domicilio, D.localidad].filter(Boolean).join(", "),
        loading: "lazy",
        referrerpolicy: "no-referrer-when-downgrade",
        allowfullscreen: true
      })));
    caja.hidden = false;
  }

  // Formulario de contacto (envía de verdad solo si hay "destino")
  function formulario(D) {
    var F = D.formulario;
    if (!F) return;
    var conectado = !vacio(F.destino);
    if (!conectado && !PROPUESTA) return; // en la versión final, sin destino no se muestra
    var caja = $("#contacto-formulario");

    function campo(id, etiqueta, tipo, obligatorio, auto) {
      var idc = "form-" + id;
      var control = tipo === "textarea"
        ? h("textarea", { id: idc, name: id, rows: "5", required: obligatorio, "aria-describedby": idc + "-error" })
        : h("input", { id: idc, name: id, type: tipo, required: obligatorio, autocomplete: auto, "aria-describedby": idc + "-error" });
      return h("div", { class: "form__campo form__campo--" + id },
        h("label", { for: idc }, etiqueta, obligatorio ? h("span", { class: "form__obligatorio", "aria-hidden": "true" }, " *") : null),
        control,
        h("p", { class: "form__error", id: idc + "-error", hidden: true }));
    }

    var estado = h("p", { class: "form__estado", role: "status", "aria-live": "polite" });
    var boton = h("button", { class: "form__boton", type: "submit" }, pico("pico"), h("span", null, F.textoBoton || "Enviar"));
    var form = h("form", { class: "form", novalidate: true, action: conectado ? F.destino : null, method: "POST" },
      h("p", { class: "form__subtitulo" }, F.subtitulo),
      h("div", { class: "form__fila" }, campo("nombre", "Nombre", "text", true, "given-name"), campo("apellido", "Apellido", "text", false, "family-name")),
      campo("email", "Correo electrónico", "email", true, "email"),
      campo("mensaje", "Escribí tu mensaje", "textarea", true),
      // Campo trampa contra spam: las personas no lo ven
      h("div", { class: "form__trampa", "aria-hidden": "true" },
        h("label", null, "No completar", h("input", { type: "text", name: "_gotcha", tabindex: "-1", autocomplete: "off" }))),
      h("p", { class: "form__aviso" }, "Los campos con * son obligatorios. ", F.aviso || ""),
      boton,
      estado);

    function marcar(control, mensaje) {
      var error = document.getElementById(control.id + "-error");
      if (mensaje) { control.setAttribute("aria-invalid", "true"); error.textContent = mensaje; error.hidden = false; }
      else { control.removeAttribute("aria-invalid"); error.textContent = ""; error.hidden = true; }
    }

    function validar() {
      var primero = null;
      [["form-nombre", "Escribí tu nombre."], ["form-email", "Escribí un correo electrónico válido."], ["form-mensaje", "Escribí tu mensaje."]]
        .forEach(function (par) {
          var c = document.getElementById(par[0]);
          var ok = c.value.trim() !== "" && c.checkValidity();
          marcar(c, ok ? "" : par[1]);
          if (!ok && !primero) primero = c;
        });
      if (primero) primero.focus();
      return !primero;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      estado.className = "form__estado";
      if (!validar()) return;
      if (!conectado) {
        estado.textContent = F.sinConectar + (vacio(D.email) ? "" : " Escribinos a " + D.email + ".");
        estado.classList.add("form__estado--aviso");
        return;
      }
      boton.disabled = true;
      estado.textContent = F.enviando || "Enviando…";
      fetch(F.destino, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) {
          if (!r.ok) throw new Error("HTTP " + r.status);
          form.reset();
          estado.textContent = F.exito;
          estado.classList.add("form__estado--ok");
        })
        .catch(function () {
          estado.textContent = F.error;
          estado.classList.add("form__estado--error");
        })
        .then(function () { boton.disabled = false; });
    });

    caja.appendChild(h("h3", { class: "contacto-sub__titulo" }, F.titulo));
    caja.appendChild(form);
    caja.hidden = false;
  }

  // Enlace a Instagram con ícono (se muestra solo si hay url)
  function enlaceInstagram(clase) {
    var ig = (C.redes && C.redes.instagram) || {};
    if (vacio(ig.url)) return null;
    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("class", "icono-instagram");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.innerHTML = '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/>' +
      '<circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/>' +
      '<circle cx="17.3" cy="6.7" r="1.3" fill="currentColor"/>';
    return h("a", { class: "enlace-instagram " + (clase || ""), href: ig.url, target: "_blank", rel: "noopener" },
      svg,
      h("span", null, vacio(ig.usuario) ? "Instagram" : ig.usuario),
      h("span", { class: "visualmente-oculto" }, " – Instagram del jardín (se abre en una pestaña nueva)"));
  }

  /* ---------------- Pie ---------------- */

  function pie() {
    $("#pie-marca").appendChild(imagen({ src: C.sitio.logo.src, alt: C.sitio.nombre + " " + C.sitio.denominacion }, "pie__logo"));
    var texto = $("#pie-texto");
    (C.pie.lineas || []).forEach(function (l, i) {
      if (i) texto.appendChild(h("br"));
      texto.appendChild(document.createTextNode(l));
    });
    if (!vacio(C.pie.leyenda)) {
      if (texto.firstChild) texto.appendChild(h("br"));
      texto.appendChild(h("span", { class: "pie__leyenda" }, C.pie.leyenda));
    }
    var ig = enlaceInstagram("pie__instagram");
    if (ig) texto.parentNode.insertBefore(h("div", { class: "pie__centro" }), texto);
    if (ig) { var centro = $(".pie__centro"); centro.appendChild(texto); centro.appendChild(ig); }
    actualizarPie("inicio");
  }

  // Enlace del pie: lleva a la página siguiente del menú.
  // En la última página (Contacto) vuelve al inicio.
  function actualizarPie(idActual) {
    var enlace = $("#pie-volver");
    var orden = C.menu.map(function (m) { return m.destino; });
    var i = orden.indexOf(idActual);
    var ultima = i === orden.length - 1;
    var destino = ultima ? orden[0] : orden[(i < 0 ? 0 : i) + 1];
    var nombre = (C.menu.filter(function (m) { return m.destino === destino; })[0] || {}).texto || "";

    enlace.textContent = "";
    enlace.setAttribute("href", "#" + destino);
    enlace.removeAttribute("title"); // la etiqueta propia reemplaza al cartel del navegador
    enlace.classList.toggle("pie__volver--arriba", ultima);
    if (ultima) {
      enlace.appendChild(pico("pico pico--arriba"));
      enlace.appendChild(h("span", { class: "visualmente-oculto" }, C.pie.volver));
      enlace.appendChild(h("span", { class: "pie__etiqueta", "aria-hidden": "true" }, C.pie.volver));
    } else {
      enlace.appendChild(pico("pico"));
      // Solo se ve el pico; el texto queda para lectores de pantalla
      enlace.appendChild(h("span", { class: "visualmente-oculto" }, (C.pie.siguiente || "Siguiente") + ": " + nombre));
      // Etiqueta que aparece al apoyar el mouse (o al llegar con Tab)
      enlace.appendChild(h("span", { class: "pie__etiqueta", "aria-hidden": "true" }, C.pie.siguiente || "Siguiente"));
    }

    // "Anterior": no se muestra en la portada
    var atras = $("#pie-anterior");
    atras.textContent = "";
    if (i <= 0) { atras.hidden = true; return; }
    var previo = orden[i - 1];
    var nombrePrevio = (C.menu.filter(function (m) { return m.destino === previo; })[0] || {}).texto || "";
    atras.setAttribute("href", "#" + previo);
    atras.removeAttribute("title");
    atras.appendChild(pico("pico pico--izquierda"));
    atras.appendChild(h("span", { class: "visualmente-oculto" }, (C.pie.anterior || "Anterior") + ": " + nombrePrevio));
    atras.appendChild(h("span", { class: "pie__etiqueta", "aria-hidden": "true" }, C.pie.anterior || "Anterior"));
    atras.hidden = false;
  }

  /* ---------------- Inicio ---------------- */

  function iniciar() {
    document.documentElement.classList.add("js");
    textosSimples();
    aviso();
    encabezado();
    portada();
    jardin();
    salas();
    proyectos();
    novedades();
    contacto();
    pie();
    navegacionPorSolapas();
    introMarca();
  }

  iniciar();
})();

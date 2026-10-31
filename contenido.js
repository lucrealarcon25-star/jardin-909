/* ================================================================
   CONTENIDO DEL SITIO — Jardín de Infantes N.º 909 "Malvinas Argentinas"
   ================================================================

   CÓMO EDITAR ESTE ARCHIVO
   - Cambiá solo el texto que está entre comillas "así".
   - No borres las comas, los dos puntos ni las llaves { } [ ].
   - Si un texto lleva comillas adentro, usá comillas tipográficas “ ”.
   - Para separar párrafos dentro de un texto largo, escribí \n\n
     Ejemplo: "Primer párrafo.\n\nSegundo párrafo."
   - Para resaltar palabras en negrita y azul institucional, escribilas
     entre dobles asteriscos. Ejemplo: "un enfoque de **derechos**"

   CAMPOS VACÍOS ("")
   - Mientras "modoPropuesta" esté en true, los campos vacíos se ven
     como "A confirmar..." para identificar lo que falta.
   - Cuando "modoPropuesta" esté en false, los campos vacíos se ocultan.

   CONTENIDO DE EJEMPLO
   - Lo que tiene  ejemplo: true  muestra la etiqueta
     "Contenido de ejemplo". Cuando cargues el texto real, cambialo a false.

   IMÁGENES
   - Las rutas apuntan a la carpeta assets/. Si tu archivo es PNG en vez
     de SVG, cambiá solo la extensión en la ruta (.svg → .png).
   ================================================================ */

window.CONTENIDO = {

  /* ---------- DATOS GENERALES ---------- */
  sitio: {
    nombre: "Jardín de Infantes N.º 909",
    denominacion: "Malvinas Argentinas",

    // true = vista de propuesta (muestra el aviso superior y lo pendiente).
    // Cambiá a false para la versión definitiva.
    modoPropuesta: true,
    avisoPropuesta: "", // Texto de la franja superior. Vacío = no se muestra.

    // Texto que se muestra en los datos pendientes (solo en modoPropuesta).
    textoPendiente: "A confirmar por la institución",

    // Logo original. No se modifica ni se redibuja.
    logo: {
      src: "assets/logo/logo-jardin-909.png",
      alt: "Jardín de Infantes N.º 909 Malvinas Argentinas · Morón · DGCyE"
    }
  },

  /* ---------- MENÚ ----------
     "destino" es el nombre de la sección. No lo cambies. */
  menu: [
    { texto: "Inicio",     destino: "inicio" },
    { texto: "El jardín",  destino: "jardin" },
    { texto: "Salas",      destino: "salas" },
    { texto: "Proyectos",  destino: "proyectos" },
    { texto: "Novedades",  destino: "novedades" },
    { texto: "Contacto",   destino: "contacto" }
  ],

  /* ---------- 1. INICIO (PORTADA) ---------- */
  portada: {
    titulo: "Un lugar para jugar, descubrir y crecer.",
    // Bajada basada en la propuesta educativa. Se puede cambiar.
    bajada: "Un jardín de infantes en Morón donde el juego, la literatura y la educación ambiental guían cada travesía.",

    ilustracion: {
      src: "assets/ilustraciones/pinguino.png",
      alt: "" // Vacío porque es decorativa (el título ya da la información).
    },
    // Como en el mockup: el pingüino va a la derecha y mira hacia el texto.
    // Es el pingüino del logo, que mira a la derecha; por eso se espeja (true).
    // Poné false si lo querés exactamente igual al logo.
    espejarIlustracion: true,

    // VIDEO ANIMADO (After Effects)
    // Si "src" tiene un archivo, la portada muestra el video en lugar del pingüino.
    // Exportalo como MP4 (H.264), sin sonido, y guardalo en assets/video/.
    // "poster" es una imagen fija (primer cuadro) que se ve mientras carga.
    // Si el archivo falta o no carga, se muestra el pingüino.
    video: {
      src: "",            // ej.: "assets/video/animacion-portada.mp4"
      poster: "",         // ej.: "assets/video/animacion-portada.jpg"
      descripcion: "Animación del pingüino del jardín",
      repetir: true       // true = se repite en bucle; false = se reproduce una vez
    }
  },

  /* ---------- 2. NUESTRO JARDÍN ---------- */
  jardin: {
    titulo: "Nuestro jardín",
    // Lema y presentación tomados del mockup y del brandboard. Confirmar con la institución.
    lema: "", // Subtítulo opcional debajo de "Nuestro jardín". Vacío = no se muestra.
    presentacion: "Una mirada inclusiva, orientada a los derechos de las infancias, que acompaña la autonomía y fortalece el lazo comunitario y la cultura del encuentro.",

    // Cada apartado se abre en una solapa al hacer clic. Completá "texto".
    apartados: [
      { id: "historia",  titulo: "Nuestra historia",    texto: "" }, // PENDIENTE
      { id: "mision",    titulo: "Misión",              texto: "" }, // PENDIENTE
      { id: "vision",    titulo: "Visión",              texto: "" }, // PENDIENTE
      {
        id: "propuesta",
        titulo: "Propuesta educativa",
        // Texto tomado del relevamiento institucional. Revisar con la institución.
        texto: "El Jardín de Infantes N.º 909 trabaja desde una **mirada integral de las infancias**, entendiendo a los niños y niñas como **sujetos de derecho** y participantes activos de la comunidad educativa. Su proyecto anual, **“Travesía de Infancias: Juego, identidad y horizontes comunes”**, toma como ejes principales **el juego, la literatura y la educación ambiental**.\n\nLa **identidad del jardín** está fuertemente relacionada con su nombre, **“Malvinas Argentinas”**, y con una **metáfora marítima** que se refleja tanto en su **propuesta pedagógica** como en sus espacios. La institución **organiza diferentes sectores** bajo esta idea, como el **Puerto Sustentable, el Faro de Historias, Mareas Creativas y el Muelle de Juegos**. De esta manera, el espacio físico también forma parte de la experiencia educativa.\n\nDesde lo **pedagógico**, la institución trabaja desde un **enfoque de derechos, constructivista y sociocrítico**, incorporando también la Educación Ambiental Integral, la interculturalidad, la Justicia Curricular y la Educación Sexual Integral. El ambiente ocupa un lugar importante dentro de la propuesta, ya que es entendido como parte del aprendizaje."
      },
      {
        id: "mapa",
        titulo: "Mapa del jardín",
        texto: "", // Opcional: un texto que acompañe al mapa
        imagen: {
          src: "assets/mapa/mapa-del-jardin.webp",
          alt: "Mapa del jardín. Planta baja: Sala Celeste, Sala Lila, patios, patio semicubierto, dirección, preceptoría, cocina y acceso al jardín. Planta alta: Sala Verde, aire y luz, terraza, zona inadmisible y sala de música."
        }
      }
    ]
  },

  /* ---------- 3. NUESTRAS SALAS ----------
     No se asignan edades ni turnos a los colores hasta que se confirmen.
     Completá "valor" en cada dato cuando la institución lo confirme. */
  salas: {
    titulo: "Nuestras salas",
    bajada: "Propuestas para niñas y niños de 3, 4 y 5 años.",
    textoEnlace: "Conocer la sala",
    items: [
      {
        id: "lila",
        nombre: "Sala Lila",
        imagen: { src: "assets/salas/sala-lila-caballito.png", alt: "Caballito de mar geométrico, símbolo de la Sala Lila" },
        // Valor y texto del animal tomados del brandboard.
        valor: "Exploración",
        animal: "Caballito de mar. Es un animal de tamaño reducido que habita la costa bonaerense y patagónica. Explora su entorno aferrándose con su cola prensil a restos de algas flotantes, viajando a nuevos micro hábitats de forma pausada y minuciosa.",
        descripcion: "", // PENDIENTE: información de la sala
        datos: [
          { etiqueta: "Edad",     valor: "" }, // PENDIENTE: confirmar
          { etiqueta: "Turno",    valor: "" }, // PENDIENTE: confirmar
          { etiqueta: "Docentes", valor: "" }  // PENDIENTE: confirmar
        ]
      },
      {
        id: "verde",
        nombre: "Sala Verde",
        imagen: { src: "assets/salas/sala-verde-delfin.png", alt: "Delfín geométrico, símbolo de la Sala Verde" },
        valor: "Curiosidad",
        animal: "Delfín. Es el cetáceo más emblemático de la costa bonaerense. De color gris azulado, suele nadar cerca de la orilla. La curiosidad es inherente a los cetáceos juveniles, que suelen asomarse y seguir la trayectoria de las olas costeras.",
        descripcion: "", // PENDIENTE
        datos: [
          { etiqueta: "Edad",     valor: "" },
          { etiqueta: "Turno",    valor: "" },
          { etiqueta: "Docentes", valor: "" }
        ]
      },
      {
        id: "celeste",
        nombre: "Sala Celeste",
        imagen: { src: "assets/salas/sala-celeste-estrella.png", alt: "Estrella de mar geométrica, símbolo de la Sala Celeste" },
        valor: "Abstracción",
        animal: "Estrella de mar. Sus formas no siguen un patrón rígido, pueden regenerar partes de su cuerpo con asimetrías orgánicas. Su capacidad de fragmentarse y reconstruirse remite a la deconstrucción y reorganización de formas propia del pensamiento abstracto.",
        descripcion: "", // PENDIENTE
        datos: [
          { etiqueta: "Edad",     valor: "" },
          { etiqueta: "Turno",    valor: "" },
          { etiqueta: "Docentes", valor: "" }
        ]
      }
    ]
  },

  /* ---------- 4. PROYECTOS Y EXPERIENCIAS ---------- */
  proyectos: {
    titulo: "Aprender jugando",
    bajada: "Proyectos que integran el juego, la exploración y la creatividad.",
    textoEnlace: "Conocer más",
    items: [
      {
        id: "puerto-sustentable",
        titulo: "Puerto sustentable",
        resumen: "Exploramos el cuidado del ambiente y nuestro entorno.",
        detalle: "", // PENDIENTE: descripción ampliada del proyecto
        imagen: { src: "assets/proyectos/puerto-sustentable-reciclaje.png", alt: "Símbolo geométrico de reciclaje en verde y celeste" }
      },
      {
        id: "mareas-creativas",
        titulo: "Mareas creativas",
        resumen: "Arte, expresión y nuevas formas de comunicar.",
        detalle: "", // PENDIENTE
        imagen: { src: "assets/proyectos/mareas-creativas-ola.png", alt: "Ola geométrica en azules y verde agua" }
      },
      {
        id: "muelle-de-juegos",
        titulo: "Muelle de juegos",
        resumen: "El juego como motor de aprendizajes compartidos.",
        detalle: "", // PENDIENTE
        imagen: { src: "assets/proyectos/muelle-de-juegos-barco.png", alt: "Muelle de madera y barco a vela geométricos" }
      },
      {
        id: "faro-de-historias",
        titulo: "Faro de historias",
        resumen: "La lectura como puente hacia nuevos mundos.",
        detalle: "", // PENDIENTE
        imagen: { src: "assets/proyectos/faro-de-historias-faro.png", alt: "Faro geométrico en amarillo y coral, con rayos de luz" }
      }
    ]
  },

  /* ---------- 5. NOVEDADES Y COMUNICACIONES ----------
     Para agregar una publicación, copiá un bloque { ... }, pegalo
     arriba de los demás y cambiá sus textos.
     - categoria: "comunicaciones" o "experiencias"
     - fecha: formato "AAAA-MM-DD" (ej.: "2026-11-05"). Puede quedar vacía.
     - enlace: opcional, para un PDF o una página. Dejá url vacía si no hay. */
  novedades: {
    titulo: "Información para las familias",
    textoEnlace: "Leer comunicación",
    textoSinResultados: "Todavía no hay publicaciones en esta categoría.",
    filtros: [
      { id: "todas",          texto: "Todas" },
      { id: "comunicaciones", texto: "Comunicaciones", enlace: "Leer comunicación" },
      { id: "experiencias",   texto: "Experiencias",   enlace: "Leer experiencia" }
    ],
    items: [
      {
        titulo: "Comunicaciones para las familias",
        categoria: "comunicaciones",
        fecha: "",
        resumen: "Un espacio para los avisos y la información institucional.",
        texto: "", // PENDIENTE
        enlace: { texto: "", url: "" },
        ejemplo: false
      },
      {
        titulo: "Experiencias en el jardín",
        categoria: "experiencias",
        fecha: "",
        resumen: "Propuestas y experiencias para compartir con las familias.",
        texto: "", // PENDIENTE
        enlace: { texto: "", url: "" },
        ejemplo: false
      }
    ]
  },

  /* ---------- 6. CONTACTO ----------
     Lo que quede vacío no se muestra en la versión definitiva. */
  contacto: {
    titulo: "Estamos cerca",
    localidad: "Morón, Provincia de Buenos Aires",
    domicilio: "Berutti 488",
    entreCalles: "entre Constituyentes y Gandora",
    codigoPostal: "1708",
    nivel: "", // Opcional: se muestra debajo de la dirección
    horarios: "",   // PENDIENTE
    telefono: "",   // PENDIENTE (ej.: "011 1234-5678")
    email: "",      // PENDIENTE
    // Enlace "Ver en el mapa" (abre Google Maps)
    mapa: "https://www.google.com/maps/search/?api=1&query=Berutti%20488%2C%20B1708%20Mor%C3%B3n%2C%20Provincia%20de%20Buenos%20Aires",

    // MAPA "ESTAMOS ACÁ" (mapa de Google dentro de la página)
    // Para cambiarlo: en Google Maps buscá el jardín → Compartir →
    // Insertar un mapa → copiá SOLO lo que está entre comillas en src="..."
    tituloMapa: "Estamos acá",
    mapaInsertado: "https://maps.google.com/maps?q=Berutti%20488%2C%20Mor%C3%B3n%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina&z=16&output=embed",

    // FORMULARIO "¿NOS EMPEZAMOS A CONOCER?"
    // Para que los mensajes lleguen al correo del jardín:
    // 1. Creá una cuenta gratis en https://formspree.io con el correo del jardín.
    // 2. Creá un formulario nuevo y copiá su dirección (https://formspree.io/f/xxxxxx).
    // 3. Pegala en "destino". Mientras esté vacío, el formulario NO envía nada
    //    y avisa que todavía no está conectado.
    formulario: {
      titulo: "¿Nos empezamos a conocer?",
      subtitulo: "Ponerse en contacto",
      destino: "", // PENDIENTE: dirección de Formspree
      textoBoton: "Enviar",
      aviso: "Usamos tus datos solo para responder tu consulta.",
      enviando: "Enviando…",
      exito: "¡Gracias! Recibimos tu mensaje y te vamos a responder a la brevedad.",
      error: "No pudimos enviar el mensaje. Probá de nuevo en unos minutos.",
      sinConectar: "El formulario todavía no está conectado, así que este mensaje no se envió."
    },

    nota: "Los datos institucionales se completarán antes de publicar."
  },

  /* ---------- ENLACES INSTITUCIONALES ----------
     Se muestran en Contacto solo los que tengan "url".
     Ejemplo: { texto: "Instagram del jardín", url: "https://..." } */
  enlaces: [
    // { texto: "", url: "" },
  ],

  /* ---------- REDES SOCIALES ----------
     Pegá el enlace completo del perfil, por ejemplo:
     url: "https://www.instagram.com/jardin909/"
     y en "usuario" el nombre como querés que se vea: "@jardin909".
     Si "url" queda vacío, no se muestra. */
  redes: {
    instagram: { usuario: "@ji909malvinasargentinas", url: "https://www.instagram.com/ji909malvinasargentinas/" }
  },

  /* ---------- PIE DE PÁGINA ---------- */
  pie: {
    lineas: ["Morón · DGCyE"],
    anterior: "Anterior",        // lleva a la página anterior (no aparece en la portada)
    siguiente: "Siguiente",      // lleva a la página siguiente del menú
    volver: "Volver al inicio"   // solo en la última página (Contacto)
  }
};

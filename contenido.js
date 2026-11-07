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
    // Vacío = no se muestra nada donde falta información.
    // Para volver a verlo: "A confirmar por la institución"
    textoPendiente: "",

    // Logo original. No se modifica ni se redibuja.
    logo: {
      src: "assets/logo/logo-jardin-909.png",
      alt: "Jardín de Infantes N.º 909 Malvinas Argentinas · Morón · Provincia de Buenos Aires · DGCyE"
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
    bajada: "Un jardín de infantes en Morón donde **el juego, la literatura y la educación ambiental** guían cada **travesía**.",

    ilustracion: {
      src: "assets/ilustraciones/pinguino.png",
      alt: "" // Vacío porque es decorativa (el título ya da la información).
    },
    // Como en el mockup: el pingüino va a la derecha y mira hacia el texto.
    // Es el pingüino del logo, que mira a la derecha; por eso se espeja (true).
    // Poné false si lo querés exactamente igual al logo.
    espejarIlustracion: false, // false: el pingüino va a la izquierda y mira hacia el texto (a la derecha)

    // VIDEO ANIMADO (After Effects)
    // Si "src" tiene un archivo, la portada muestra la animación en lugar del pingüino:
    // se arma una sola vez al abrir la página y queda fija en el último cuadro
    // (la marca completa). Después aparece un botón para volver a verla.
    // - src: el video MP4 (H.264), sin sonido, con FONDO BLANCO.
    // - imagenFinal: PNG del último cuadro (la marca armada). Se usa si la persona
    //   tiene activado "reducir movimiento" en su dispositivo.
    // Si el video falta o no carga, se muestra el pingüino.
    video: {
      src: "assets/video/pinguino-armado.mp4",
      imagenFinal: "assets/video/pinguino-final.png",
      descripcion: "El pingüino del jardín se arma pieza por pieza",
      repetir: false      // false = se arma una vez y queda fijo (recomendado)
    }
  },

  /* ---------- PANTALLA DE ENTRADA (animación de la marca) ----------
     Al abrir la página en Inicio, la marca se arma a pantalla completa
     sobre el fondo con la trama y luego se desvanece mostrando la portada.
     - Se ve una vez por visita (si se recarga en otra pestaña, vuelve a verse).
     - Tiene botón "Saltar". También se salta con la tecla Esc.
     - Si la persona tiene activado "reducir movimiento", no se muestra.
     Para desactivarla, dejá "src" vacío: "" */
  intro: {
    src: "", // Desactivada: el pingüino se arma en la portada. Para activarla: "assets/video/intro-marca.mp4"
    descripcion: "Animación: las piezas geométricas forman el pingüino y el logo del Jardín de Infantes N.º 909 Malvinas Argentinas",
    textoSaltar: "Saltar",
    unaVezPorVisita: true
  },

  /* ---------- 2. NUESTRO JARDÍN ---------- */
  jardin: {
    titulo: "Nuestro jardín",
    // Lema y presentación tomados del mockup y del brandboard. Confirmar con la institución.
    lema: "", // Subtítulo opcional debajo de "Nuestro jardín". Vacío = no se muestra.
    presentacion: "Una **mirada inclusiva**, orientada a los **derechos de las infancias**, que acompaña la **autonomía** y fortalece el **lazo comunitario** y la **cultura del encuentro**.",

    // Cada apartado se abre en una solapa al hacer clic. Completá "texto".
    apartados: [
      {
        id: "historia",
        titulo: "Nuestra historia",
        // Texto tomado del Informe de Establecimiento. Revisar con la institución.
        texto: "El jardín fue **creado en 1972** con el número 913, junto a la **Escuela Primaria N.º 99 “José Hernández”**. Nació de la necesidad de ofrecer a los futuros alumnos y alumnas de esa escuela los años de escolaridad inicial, tan importantes para su formación.\n\n**En 1996**, cuando el partido de Morón se dividió en Morón, Hurlingham e Ituzaingó, pasó a ser el **Jardín de Infantes N.º 909 de Morón**. **En 2011**, durante la dirección de la Sra. Diana Nari, recibió el nombre **“Malvinas Argentinas”**, elegido con una **amplia participación de la comunidad educativa**. En 2022 **cumplió 50 años**.\n\nMuchas de las familias que hoy nos acompañan tienen padres, madres, hermanos u otros parientes que también pasaron por el jardín. Desde 2024 las primeras secciones reciben también a **niñas y niños de 2 años, en salas multiciclo**."
      },
      {
        id: "mision",
        titulo: "Misión",
        // BORRADOR armado con los textos del cuestionario institucional. Lo tiene que aprobar el jardín.
        texto: "Somos un jardín de infantes de Morón que recibe a **niñas y niños de 2 a 5 años** y los reconoce como **sujetos de derecho** y **ciudadanos activos** desde la primera infancia.\n\nNuestra misión es brindarles una **educación integral** en la que **el juego, la literatura y la educación ambiental** se entrelazan cada día para construir **identidad, pertenencia y cuidado mutuo**. Reconocemos a cada niña, niño y familia en su singularidad, valoramos la **diversidad cultural** de nuestra comunidad y trabajamos para que todos puedan aprender y participar."
      },
      {
        id: "vision",
        titulo: "Visión",
        // BORRADOR armado con los textos del cuestionario institucional. Lo tiene que aprobar el jardín.
        texto: "Soñamos con un jardín que sea una **comunidad de vida y de sostén**, donde niñas, niños, familias y docentes construyan juntos un **horizonte común**, y donde **cada espacio enseñe**, invite a explorar y permita moverse con **autonomía y confianza**.\n\nQueremos que nuestro nombre, “Malvinas Argentinas”, siga siendo una invitación a la **memoria colectiva, la soberanía y la cultura de la paz y del encuentro**, y que toda la comunidad reconozca el **valor del juego y del arte** como formas de aprender y de ejercer la ciudadanía."
      },
      {
        id: "propuesta",
        titulo: "Propuesta educativa",
        // Texto tomado del relevamiento institucional. Revisar con la institución.
        texto: "Nuestra propuesta se organiza alrededor del proyecto anual **“Travesías de infancias: juego, identidad y horizontes comunes”**. Concebimos a las niñas y los niños como **sujetos de derecho** y **ciudadanos activos** desde la primera infancia, y hacemos del **juego, la literatura y la educación ambiental** los ejes que atraviesan la tarea de todos los días.\n\nEl nombre del jardín, “Malvinas Argentinas”, se trabaja desde la memoria, la soberanía y la cultura de la paz, y da origen a una **metáfora marítima** que recorre la propuesta y los espacios. Por eso el jardín se organiza en cuatro territorios pedagógicos con nombre propio, **el Puerto Sustentable, el Faro de Historias, las Mareas Creativas y el Muelle de Juegos**. El edificio, de más de 50 años, con sus rampas, barandas, desniveles y galerías, acompaña esa idea y se recorre como si fuera **un barco o un muelle**.\n\nTrabajamos desde un **enfoque de derechos, constructivista y sociocrítico**, en diálogo con el **Diseño Curricular de la Provincia de Buenos Aires**. Entendemos **el ambiente como parte del aprendizaje** e incorporamos de manera transversal la **Educación Ambiental Integral, la interculturalidad, la Justicia Curricular y la Educación Sexual Integral**."
      },
      {
        id: "mapa",
        titulo: "Mapa del jardín",
        texto: "", // Opcional: un texto que acompañe al mapa
        imagen: {
          src: "assets/mapa/mapa-del-jardin-2026.webp",
          alt: "Mapa del jardín. Planta baja: Sala Celeste, patio, Sala Lila, rampa, pasillo, patio semicubierto, escaleras, acceso al jardín, dirección, preceptoría y cocina. Planta alta: Sala Verde, aire y luz, terraza, rampa, escalera y sala de música."
        }
      }
    ]
  },

  /* ---------- 3. NUESTRAS SALAS ----------
     Edades y turnos confirmados por la institución.
     Completá "valor" en cada dato que falte cuando la institución lo confirme. */
  salas: {
    titulo: "Nuestras salas",
    bajada: "", // Texto opcional debajo de "Nuestras salas". Vacío = no se muestra.
    textoEnlace: "Conocer la sala",
    items: [
      {
        id: "lila",
        nombre: "Sala Lila",
        imagen: { src: "assets/salas/sala-lila-caballito.png", alt: "Caballito de mar geométrico, símbolo de la Sala Lila" },
        // Valor y texto del animal tomados del brandboard.
        valor: "Exploración",
        animal: "**Caballito de mar.** Es un animal de tamaño reducido que habita la **costa bonaerense y patagónica**. **Explora su entorno** aferrándose con su cola a restos de algas y viaja a nuevos microhábitats de forma **pausada y minuciosa**. Así aprenden las niñas y los niños de esta sala: **explorando, tocando y manipulando** materiales concretos.",
        descripcion: "", // PENDIENTE: información de la sala
        datos: [
          { etiqueta: "Edad",     valor: "Multiedad, 2 y 3 años" },
          { etiqueta: "Turno",    valor: "Mañana y tarde" }
        ]
      },
      {
        id: "celeste",
        nombre: "Sala Celeste",
        imagen: { src: "assets/salas/sala-celeste-estrella.png", alt: "Estrella de mar geométrica, símbolo de la Sala Celeste" },
        valor: "Abstracción",
        animal: "**Estrella de mar.** Puede **fragmentarse y regenerarse**, lo que remite a la deconstrucción y reorganización de formas del **pensamiento abstracto**. A esta edad, las niñas y los niños comienzan a **hacer asociaciones** sin necesidad de tener el objeto presente.",
        descripcion: "", // PENDIENTE
        datos: [
          { etiqueta: "Edad",     valor: "4 años" },
          { etiqueta: "Turno",    valor: "Mañana y tarde" }
        ]
      },
      {
        id: "verde",
        nombre: "Sala Verde",
        imagen: { src: "assets/salas/sala-verde-delfin.png", alt: "Delfín geométrico, símbolo de la Sala Verde" },
        valor: "Curiosidad",
        animal: "**Delfín.** Es uno de los cetáceos característicos de la **costa bonaerense**. Los ejemplares jóvenes suelen **asomarse y seguir la trayectoria de las olas** costeras. Así son las niñas y los niños de esta sala: **preguntan “¿por qué?”** y **relacionan lo que descubren** con lo que ya conocen.",
        descripcion: "", // PENDIENTE
        datos: [
          { etiqueta: "Edad",     valor: "5 años" },
          { etiqueta: "Turno",    valor: "Mañana y tarde" }
        ]
      }
    ]
  },

  /* ---------- 4. PROYECTOS Y EXPERIENCIAS ---------- */
  proyectos: {
    titulo: "Aprender jugando",
    bajada: "Nuestros cuatro territorios pedagógicos, inspirados en la **travesía** que recorre todo el jardín.",
    textoEnlace: "Conocer más",
    items: [
      {
        id: "puerto-sustentable",
        titulo: "Puerto Sustentable",
        resumen: "Exploramos el cuidado del ambiente y nuestro entorno.",
        detalle: "El Puerto Sustentable es el territorio del **ambiente y el cuidado**. Desde la **Educación Ambiental Integral**, las niñas y los niños exploran la tierra y sus texturas, observan, preguntan y construyen junto a sus docentes **hábitos de cuidado** del entorno y de los demás. Aunque el jardín cuenta con poco espacio verde, el ambiente ocupa un **lugar central** en nuestra propuesta.",
        imagen: { src: "assets/proyectos/puerto-sustentable-reciclaje.png", alt: "Símbolo geométrico de reciclaje en verde y celeste" }
      },
      {
        id: "mareas-creativas",
        titulo: "Mareas Creativas",
        resumen: "Arte, expresión y nuevas formas de comunicar.",
        detalle: "Mareas Creativas reúne **la expresión artística, la música, el cuerpo y el movimiento** como **lenguajes para expresarse y comunicarse**. **Valoramos el proceso tanto como el resultado**, porque una experiencia artística no siempre termina en un trabajo para la carpeta y muchas veces deja **una huella en toda la sala**.",
        imagen: { src: "assets/proyectos/mareas-creativas-ola.png", alt: "Ola geométrica en azules y verde agua" }
      },
      {
        id: "muelle-de-juegos",
        titulo: "Muelle de Juegos",
        resumen: "El juego como motor de aprendizajes compartidos.",
        detalle: "El Muelle de Juegos es **el patio, el espacio del juego**. Sus rampas y desniveles lo convierten en un **verdadero muelle** donde las niñas y los niños suben, bajan, miran desde lo alto y recorren distintos planos, lo que enriquece tanto el **juego simbólico** como el **juego corporal y de movimiento**. Allí se proponen **juegos dramáticos, de construcción y con reglas**, en los que aprenden a negociar, ponerse de acuerdo y **convivir con otros**.",
        imagen: { src: "assets/proyectos/muelle-de-juegos.png", alt: "Muelle de madera geométrico en lila y verde" }
      },
      {
        id: "faro-de-historias",
        titulo: "Faro de Historias",
        resumen: "La lectura como puente hacia nuevos mundos.",
        detalle: "El Faro de Historias es la **biblioteca del jardín**, el lugar de la **literatura**. Allí compartimos cuentos, relatos y poesías y disfrutamos de la **lectura en voz alta**. Con los cuadernos y las **bolsas viajeras literarias**, los libros también llegan a las casas para que la lectura se comparta **en familia**.",
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
    // true = muestra las pestañas Todas / Comunicaciones / Experiencias
    // y la categoría debajo de cada título. false = solo la lista.
    mostrarFiltros: true,
    textoSinResultados: "Todavía no hay publicaciones en esta categoría.",
    filtros: [
      { id: "todas",          texto: "Todas" },
      { id: "comunicaciones", texto: "Comunicaciones", enlace: "Leer comunicación" },
      { id: "experiencias",   texto: "Experiencias",   enlace: "Leer experiencia" }
    ],
    items: [
      {
        titulo: "Inscripciones 2027",
        categoria: "comunicaciones",
        fecha: "",
        resumen: "Fechas, requisitos y documentación para el **ciclo lectivo 2027**.",
        texto: "Recibimos a niñas y niños de **2 a 5 años**, en **turno mañana** (de 8:00 a 12:00) y **turno tarde** (de 13:00 a 17:00).\n\n**Del 12 al 23 de octubre.** Ratificación de matrícula 2027 y preinscripción de hermanas y hermanos.\n\n**Del 9 al 20 de noviembre.** Inscripción por ingreso general y pases.\n\n**Del 27 de noviembre al 4 de diciembre.** Confirmación de las vacantes asignadas y exhibición de los listados oficiales.\n\n**Documentación.** DNI, partida de nacimiento y carnet de vacunación al día. Las planillas de inscripción se adquieren en la cooperadora ($3.000) y se presentan en folio.\n\nPor consultas, acercate al jardín en **Beruti 488** o llamanos al **(011) 3758-1782**.",
        enlace: { texto: "", url: "" },
        ejemplo: false
      },
      {
        titulo: "Cooperadora",
        categoria: "comunicaciones",
        fecha: "",
        resumen: "La cooperadora sostiene, junto a las familias, muchas de las propuestas del jardín.",
        texto: "La información sobre la **cuota social** y los **materiales** se comunica por el **cuaderno de comunicados** y la **cartelera del hall**.\n\n¡Gracias por acompañar!",
        enlace: { texto: "", url: "" },
        ejemplo: false
      },
      {
        titulo: "¿Por dónde llega cada información?",
        categoria: "comunicaciones",
        fecha: "",
        resumen: "Los canales del jardín y para qué sirve cada uno.",
        texto: "El **cuaderno de comunicados** y la **cartelera del hall** son los canales oficiales. **WhatsApp** refuerza los avisos, **Instagram** comparte lo que vivimos en las salas y **esta web** reúne la información permanente.",
        enlace: { texto: "", url: "" },
        ejemplo: false
      },
      {
        titulo: "¿Por qué aprendemos jugando?",
        categoria: "experiencias",
        fecha: "",
        resumen: "Jugar es una forma de aprender y de ejercer la ciudadanía.",
        texto: "Cuando las niñas y los niños **juegan, exploran la tierra o construyen con cajas**, están aprendiendo nociones sobre **el espacio, el lenguaje y la convivencia**. Por eso, en el jardín, jugar no es “no hacer nada”.",
        enlace: { texto: "", url: "" },
        ejemplo: false
      },
      {
        titulo: "Día del Respeto a la Diversidad Cultural",
        categoria: "experiencias",
        fecha: "",
        resumen: "Las diferencias nos enriquecen y el respeto nos une.",
        texto: "**12 de octubre.** Exploramos nuestras **raíces** y aprendemos juntos de las **culturas** que forman nuestra comunidad.",
        enlace: { texto: "", url: "" },
        ejemplo: false
      },
      {
        titulo: "Las 3 R en el Puerto Sustentable",
        categoria: "experiencias",
        fecha: "",
        resumen: "Reducir, reutilizar y reciclar para cuidar el ambiente.",
        texto: "En el **Puerto Sustentable** aprendemos, con gestos de todos los días, a cuidar lo que usamos. **Entre todos cuidamos nuestro mundo.**",
        enlace: { texto: "", url: "" },
        ejemplo: false
      },
      {
        titulo: "Lecturas que viajan",
        categoria: "experiencias",
        fecha: "",
        resumen: "Los libros del Faro de Historias llegan a las casas.",
        texto: "Viajan en los cuadernos y las **bolsas viajeras literarias**, para que la lectura se **comparta en familia**.",
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
    domicilio: "Beruti 488",
    entreCalles: "entre Constituyentes y Gándara",
    codigoPostal: "1708",
    nivel: "**Nivel Inicial** · Región Educativa 8 · DGCyE", // Opcional: se muestra debajo de la dirección
    horarios: "**Turno mañana**, de 8:00 a 12:00\n\n**Turno tarde**, de 13:00 a 17:00",
    telefono: "(011) 3758-1782",
    email: "jardin909moron@abc.gob.ar",
    // Enlace "Ver en el mapa" (abre Google Maps)
    mapa: "https://www.google.com/maps/search/?api=1&query=Beruti%20488%2C%20B1708%20Mor%C3%B3n%2C%20Provincia%20de%20Buenos%20Aires",

    // MAPA "ESTAMOS ACÁ" (mapa de Google dentro de la página)
    // Para cambiarlo: en Google Maps buscá el jardín → Compartir →
    // Insertar un mapa → copiá SOLO lo que está entre comillas en src="..."
    tituloMapa: "Estamos acá",
    mapaInsertado: "https://maps.google.com/maps?q=Beruti%20488%2C%20Mor%C3%B3n%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina&z=16&output=embed",

    // MAPA CON EL PINGÜINO como punto de ubicación (DESACTIVADO: ahora se usa el de Google).
    // Para que el pingüino quede exacto: en Google Maps hacé clic derecho sobre
    // el jardín y tocá los números (se copian las coordenadas). Pegá el primero
    // en "lat" y el segundo en "lng". Si quedan vacíos, la dirección se busca sola.
    // Si este mapa no carga, se muestra el de Google ("mapaInsertado").
    mapaPinguino: {
      leaflet: "", // Vacío = se usa el mapa de Google (mapaInsertado). Para el mapa con el pingüino: "assets/vendor/leaflet/"
      marcador: "assets/ilustraciones/pinguino.png",
      lat: "", // PENDIENTE: ej. -34.65
      lng: "", // PENDIENTE: ej. -58.62
      zoom: 16
    },

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

    nota: "" // Texto opcional al final de Contacto
  },

  /* ---------- ENLACES INSTITUCIONALES ----------
     Se muestran en Contacto solo los que tengan "url".
     Ejemplo: { texto: "Instagram del jardín", url: "https://..." } */
  enlaces: [
    // { texto: "", url: "" }
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
    // Los cuatro pingüinos (la comunidad) a la izquierda del pie, en lugar del logo.
    pinguino: "assets/ilustraciones/pinguino.png",
    lineas: ["Morón · Provincia de Buenos Aires · DGCyE"],
    leyenda: "Página desarrollada como proyecto de tesis", // Leyenda debajo, en gris. Vacío = no se muestra.
    anterior: "Anterior",        // lleva a la página anterior (no aparece en la portada)
    siguiente: "Siguiente",      // lleva a la página siguiente del menú
    volver: "Volver al inicio"   // solo en la última página (Contacto)
  }
};

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
    presentacion: "Una mirada inclusiva, orientada a los derechos de las infancias, que acompaña la autonomía y fortalece el lazo comunitario y la cultura del encuentro.",

    // Cada apartado se abre en una solapa al hacer clic. Completá "texto".
    apartados: [
      {
        id: "historia",
        titulo: "Nuestra historia",
        // Texto tomado del Informe de Establecimiento. Revisar con la institución.
        texto: "El jardín fue **creado en 1972** con el número 913. Lindero a la **Escuela Primaria N.º 99 “José Hernández”**, su creación está estrechamente vinculada a esa escuela: nació de la necesidad de ofrecer a sus futuros alumnos y alumnas los años de escolaridad inicial, tan necesarios para su formación.\n\nEn **1996**, al dividirse el partido de Morón en Morón, Hurlingham e Ituzaingó, cambió de número y pasó a ser el **Jardín de Infantes N.º 909 de Morón**. En **2011**, bajo la dirección de la Sra. Diana Nari, se le impuso el nombre **“Malvinas Argentinas”**, con una amplia participación de la comunidad educativa en su elección. En **2022** el jardín cumplió **50 años**.\n\nMuchas de las familias que hoy nos acompañan tienen padres, madres, hermanos, hermanas u otros parientes que también fueron alumnos y alumnas del jardín. Desde el ciclo lectivo 2024, las primeras secciones reciben también a niñas y niños de **2 años**, en **salas multiciclo**."
      },
      {
        id: "mision",
        titulo: "Misión",
        // BORRADOR armado con los textos del cuestionario institucional. Lo tiene que aprobar el jardín.
        texto: "Somos un jardín de infantes de Morón que recibe a niñas y niños de 2 a 5 años como **sujetos plenos de derecho** y **ciudadanos activos** desde la primera infancia.\n\nNuestra misión es ofrecerles una **educación integral y transformadora**, en la que **el juego, la literatura y la educación ambiental** se entraman todos los días para construir **identidad, pertenencia y cuidado mutuo**.\n\nLo hacemos desde una **pedagogía de la hospitalidad, la ternura y el cuidado**. Alojamos a cada niña, niño y familia en su singularidad, valoramos la **diversidad cultural** de nuestra comunidad y trabajamos para eliminar las barreras que impiden aprender y participar."
      },
      {
        id: "vision",
        titulo: "Visión",
        // BORRADOR armado con los textos del cuestionario institucional. Lo tiene que aprobar el jardín.
        texto: "Soñamos con un jardín que sea una **comunidad de vida y de sostén**, donde niñas, niños, familias y docentes construyan juntos **un horizonte común**.\n\nUn jardín donde **cada espacio enseñe**: un Puerto, un Faro, unas Mareas y un Muelle que las infancias puedan leer y recorrer con autonomía, en una **travesía** compartida.\n\nQueremos que nuestro nombre, **“Malvinas Argentinas”**, siga invitando a la **memoria colectiva, la soberanía y la cultura de la paz y del encuentro**. Y que toda la comunidad reconozca **el valor del juego y del arte** como formas de aprender y de ejercer la ciudadanía."
      },
      {
        id: "propuesta",
        titulo: "Propuesta educativa",
        // Texto tomado del relevamiento institucional. Revisar con la institución.
        texto: "Nuestra propuesta es **integral y transformadora**. Se organiza alrededor del proyecto anual **“Travesía de Infancias: Juego, identidad y horizontes comunes”** y concibe a las niñas y los niños como **sujetos plenos de derecho** y ciudadanos activos desde la primera infancia. **El juego, la literatura y la educación ambiental** son sus ejes. No funcionan por separado: se entraman todos los días para construir identidad, pertenencia y cuidado mutuo.\n\nNuestro nombre, **“Malvinas Argentinas”**, se resignifica desde una **pedagogía de la paz, la soberanía, la memoria colectiva y la cultura del encuentro**. Inspirados en esa identidad, organizamos el jardín en **cuatro territorios pedagógicos con nombres marítimos**: el **Puerto Sustentable**, el **Faro de Historias**, las **Mareas Creativas** y el **Muelle de Juegos**.\n\nNuestro edificio tiene más de 50 años. Sus rampas, barandas, desniveles, alturas y galerías semicubiertas le dan una identidad propia: el jardín se recorre como **un barco, una cubierta o un muelle**, y la metáfora de la travesía se vive con el cuerpo.\n\nTrabajamos desde un **enfoque de derechos, constructivista y sociocrítico**, en diálogo con el Diseño Curricular de la Provincia de Buenos Aires. Entendemos **el ambiente como educador**: el espacio también enseña e invita a explorar. La **Educación Ambiental Integral**, la **interculturalidad**, la **Justicia Curricular** y la **Educación Sexual Integral** atraviesan toda la propuesta.\n\nMás que un engranaje administrativo, el jardín es **una comunidad de vida y de sostén**. Cada niña, niño, docente y familia es nombrado, alojado y reconocido en su singularidad, desde una **pedagogía de la hospitalidad, la ternura y el cuidado mutuo**."
      },
      {
        id: "juego",
        titulo: "¿Por qué jugamos?",
        // Texto tomado del relevamiento institucional. Revisar con la institución.
        texto: "En el jardín, **el juego no es un pasatiempo**: es un **principio didáctico**, un **derecho** de las infancias y un contenido de gran valor cultural. Proponemos juego dramático, juegos de construcción y juegos con reglas, en las salas y en el patio.\n\nCuando negocian un rol en el **Muelle de Juegos**, exploran las texturas de la tierra en el **Puerto Sustentable** o disfrutan juntos de un relato en el **Faro de Historias**, las niñas y los niños aprenden **nociones complejas** sobre el espacio, el lenguaje, la convivencia democrática y la construcción de ciudadanía.\n\nPor eso, no todos los días vuelven a casa con una hoja pintada. **Una experiencia artística valiosa no siempre termina en un trabajito para la carpeta**: muchas veces deja una vivencia estética y una huella colectiva que transforma a toda la sala."
      },
      {
        id: "diversidad",
        titulo: "Diversidad e inclusión",
        // Texto tomado del relevamiento institucional. Revisar con la institución.
        texto: "Nuestra comunidad reúne familias nacidas en Morón y familias que llegaron de **Perú, Bolivia, Venezuela** y de distintas provincias del país. El jardín trabaja la diversidad **en clave intercultural y comunitaria**: aloja las distintas configuraciones familiares, los ritmos singulares de crianza, las identidades migrantes, las lenguas de origen y las historias de vida que conviven en el barrio.\n\nEntendemos la discapacidad como algo **relacional y no individual**. Por eso, el foco no está en “cambiar al niño”, sino en **modificar el ambiente, el dispositivo escolar y las propuestas** para eliminar las barreras de acceso, aprendizaje y participación.\n\nEl jardín participa del **Proyecto Regional “Memorias e Infancias”**, que invita a conocer las plazas como espacios de memoria, identidad y lucha, y del **Proyecto Distrital “Sabores, saberes y sentires”**, desde los lenguajes artísticos. Además, articula con instituciones cercanas como el Museo de Morón, la Plaza de la Cultura, la Escuela Municipal de Danzas, el Club Social y Deportivo Saavedra y las escuelas de la zona."
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
    bajada: "Propuestas para niñas y niños de 2 a 5 años, en turno mañana y turno tarde.",
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
        detalle: "El **Puerto Sustentable** es el territorio del **ambiente y el cuidado**. Desde la **Educación Ambiental Integral**, entendemos el ambiente como parte del aprendizaje: exploramos la tierra y sus texturas, observamos, indagamos y construimos juntos hábitos de cuidado del entorno y de los demás.\n\nNuestro jardín tiene poco espacio verde, y por eso mismo la educación ambiental ocupa un lugar central en la propuesta.",
        imagen: { src: "assets/proyectos/puerto-sustentable-reciclaje.png", alt: "Símbolo geométrico de reciclaje en verde y celeste" }
      },
      {
        id: "mareas-creativas",
        titulo: "Mareas creativas",
        resumen: "Arte, expresión y nuevas formas de comunicar.",
        detalle: "Las **Mareas Creativas** son el territorio de la **expresión artística multimodal**: plástica, música, cuerpo, movimiento y otros lenguajes para expresarse y comunicarse.\n\nUna experiencia artística valiosa no siempre termina en un trabajito para la carpeta: muchas veces deja una **vivencia estética** y una **huella colectiva** que transforma a toda la sala. Las producciones de las niñas y los niños son protagonistas y se exhiben en las salas y pasillos.",
        imagen: { src: "assets/proyectos/mareas-creativas-ola.png", alt: "Ola geométrica en azules y verde agua" }
      },
      {
        id: "muelle-de-juegos",
        titulo: "Muelle de juegos",
        resumen: "El juego como motor de aprendizajes compartidos.",
        detalle: "El **Muelle de Juegos** es el **espacio lúdico y el patio**. Con sus rampas y desniveles, el patio se convierte en un verdadero muelle: las niñas y los niños suben, bajan, miran desde lo alto y recorren distintos planos, y así se enriquecen el **juego simbólico** y el **juego motor**.\n\nProponemos **juego dramático**, **juegos de construcción** y **juegos con reglas**. Al negociar un rol o acordar una regla, aprenden sobre el espacio, el lenguaje y la convivencia democrática.",
        imagen: { src: "assets/proyectos/muelle-de-juegos-barco.png", alt: "Muelle de madera y barco a vela geométricos" }
      },
      {
        id: "faro-de-historias",
        titulo: "Faro de historias",
        resumen: "La lectura como puente hacia nuevos mundos.",
        detalle: "El **Faro de Historias** es la **biblioteca** y el territorio de la **literatura**. Allí compartimos relatos, cuentos y poesías, y disfrutamos juntos de la lectura en voz alta.\n\nLos **cuadernos y bolsas viajeras literarias** llevan los libros a las casas, para que la lectura también se comparta en familia.",
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
        texto: "Acá vas a encontrar la información importante del jardín: convocatorias a actos y talleres, el cronograma de actividades de la **“Travesía de Infancias”**, acuerdos de convivencia, pautas de cuidado ambiental y de salud, novedades de la Asociación Cooperadora y pedidos de colaboración.\n\nAdemás, nos comunicamos por el **cuaderno de comunicaciones**, las **carteleras** de la entrada, los **grupos de WhatsApp** de cada sala y nuestro **Instagram**. También nos encontramos en la entrada y la salida, en entrevistas, reuniones de sala, talleres y muestras abiertas.",
        enlace: { texto: "", url: "" },
        ejemplo: false
      },
      {
        titulo: "Experiencias en el jardín",
        categoria: "experiencias",
        fecha: "",
        resumen: "Propuestas y experiencias para compartir con las familias.",
        texto: "En el jardín **documentamos los procesos de aprendizaje**, no solo los resultados: bitácoras, fotografías, videos breves, podcasts, las voces de las niñas y los niños, y sus producciones gráficas y tridimensionales.\n\nEsos registros nos permiten **mirar e interpretar lo que aprenden** y planificar juntos a partir de ellos. En el marco de la ESI y la Educación Digital, les enseñamos el **derecho a la intimidad** y **les pedimos su consentimiento** antes de fotografiarlos.",
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
    entreCalles: "entre Constituyentes y Gandora",
    codigoPostal: "1708",
    nivel: "Nivel Inicial · Región Educativa 8 · DGCyE", // Opcional: se muestra debajo de la dirección
    horarios: "Turno mañana y turno tarde",   // PENDIENTE: agregar el horario exacto de cada turno
    telefono: "(011) 3758-1782",
    email: "jardin909moron@abc.gob.ar",
    // Enlace "Ver en el mapa" (abre Google Maps)
    mapa: "https://www.google.com/maps/search/?api=1&query=Beruti%20488%2C%20B1708%20Mor%C3%B3n%2C%20Provincia%20de%20Buenos%20Aires",

    // MAPA "ESTAMOS ACÁ" (mapa de Google dentro de la página)
    // Para cambiarlo: en Google Maps buscá el jardín → Compartir →
    // Insertar un mapa → copiá SOLO lo que está entre comillas en src="..."
    tituloMapa: "Estamos acá",
    mapaInsertado: "https://maps.google.com/maps?q=Beruti%20488%2C%20Mor%C3%B3n%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina&z=16&output=embed",

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
    leyenda: "Página para proyecto institucional", // Leyenda debajo. Vacío = no se muestra.
    anterior: "Anterior",        // lleva a la página anterior (no aparece en la portada)
    siguiente: "Siguiente",      // lleva a la página siguiente del menú
    volver: "Volver al inicio"   // solo en la última página (Contacto)
  }
};

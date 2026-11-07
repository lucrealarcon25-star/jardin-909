# Jardín de Infantes N.º 909 "Malvinas Argentinas" — Sitio institucional

Sitio estático hecho con HTML, CSS y JavaScript, sin frameworks ni dependencias.

## Estructura

```
jardin-909/
├── index.html      Estructura de la página
├── styles.css      Diseño (colores y medidas en :root, al principio)
├── app.js          Funcionamiento (menú, solapas y filtros)
├── contenido.js    TODOS los textos y datos editables
├── assets/         Logo, ilustraciones e imágenes (ver assets/LEEME.md)
└── README.md
```

## Editar textos y datos

Todo se edita en **`contenido.js`**. Cada bloque tiene comentarios.

- Campo vacío `""` → no se muestra. (Si en `sitio.textoPendiente` escribís "A confirmar por la institución", en modo propuesta se ve ese aviso donde falta información.)
- `ejemplo: true` → muestra la etiqueta "Contenido de ejemplo".
- `modoPropuesta: true` → muestra el aviso superior y lo pendiente. **Antes de publicar la versión definitiva, cambialo a `false`.**
- Para agregar una novedad, copiá un bloque `{ … }` dentro de `novedades.items`.
- Los enlaces institucionales (redes, sitio de la DGCyE, etc.) van en `enlaces` y solo aparecen si tienen `url`.

### Pendientes de la institución

Aprobar el borrador de Misión y Visión, descripción de cada sala y nuevas novedades si hacen falta.

Ya cargados: edad y turno de cada sala (Lila multiedad 2 y 3 años, Celeste 4 años, Verde 5 años; mañana de 8:00 a 12:00 y tarde de 13:00 a 17:00), dirección (Beruti 488, entre Constituyentes y Gándara, CP 1708, Morón), nivel educativo, teléfono, correo, historia, Propuesta educativa y el detalle de los cuatro proyectos (tomados del relevamiento, del cuestionario institucional y del Informe de Establecimiento: revisarlos con la institución).

La presentación de "El jardín" se tomó del mockup: confirmarla.

**Instagram:** en `contenido.js` → `redes.instagram`, completá `url` (enlace al perfil) y `usuario` (ej.: `@jardin909`). Aparece en el pie y en Contacto.

## Recursos gráficos

Ya están incluidos el logo, el pingüino, los animales de las salas, los íconos de los proyectos y el favicon. Ver `assets/LEEME.md`.

El logo (`assets/logo/logo-jardin-909.png`) y el pingüino de la portada salen del archivo de marca: el pingüino es el mismo del logo. Si tenés el logo en SVG, reemplazalo y cambiá la ruta en `contenido.js`.

Salas según las piezas y el brandboard: **Lila → caballito de mar · Verde → delfín · Celeste → estrella de mar**.

Como en el mockup, el pingüino va a la derecha y mira hacia el texto (`espejarIlustracion: true`, porque en el logo mira hacia la derecha; poné `false` si lo preferís igual al logo).

## Tipografías y colores

- Títulos y resaltes: **IvySoft Variable**. Textos: **Nunito Sans**. Los archivos van en `assets/fuentes/` (instrucciones en `assets/fuentes/LEEME.md`). IvySoft necesita licencia web para usarse en el sitio publicado.
- Colores del brandboard en `styles.css`, al principio (`:root`).

## Solapas

- **Solapas del menú:** la primera pantalla muestra solo la portada. Cada opción del menú (Inicio, El jardín, Salas, Proyectos, Novedades, Contacto) abre su sección, de a una por vez. El logo o la solapa "Inicio" regresan a la portada. En el pie, al apoyar el mouse (o llegar con Tab) sobre los picos amarillos aparece la etiqueta "Anterior" o "Siguiente"; el pico "Siguiente" lleva a la página siguiente; en Contacto, la última, lleva de vuelta al inicio. La dirección cambia (`#salas`, `#proyectos`…), así funcionan el botón Atrás del navegador y los enlaces directos.
- **Mapa del jardín:** está en "El jardín", junto a Historia, Misión, Visión y Propuesta educativa. Se puede abrir en tamaño completo.
- **Solapas internas:** dentro de cada sección, "Nuestra historia", "Conocer la sala", "Conocer más" o "Leer comunicación" abren debajo **solo la información de ese ítem**. Se cierran con "Cerrar", con Esc o tocando de nuevo el mismo enlace.

## Pingüinos del pie

En el pie, a la izquierda, van cuatro pingüinos de distintos tamaños como imagen de la comunidad del jardín (en lugar del logo, que ya está en el encabezado). Se configura en `contenido.js` → `pie.pinguino`; si lo dejás vacío vuelve el logo. Entran caminando cada vez que se elige una solapa del menú (y quedan quietos si la persona tiene activado "reducir movimiento").

## Leyenda del pie

Debajo de "Morón · Provincia de Buenos Aires · DGCyE" se lee, en gris, "Página desarrollada como proyecto de tesis". Se cambia en `contenido.js` → `pie.leyenda` (vacío = no se muestra).

## Portada

Texto a la izquierda (título y bajada) alineado con el logo y el menú. A la derecha, el pingüino del logo o la animación de After Effects.

### Pingüino animado de la portada
Al abrir la página, el pingüino se arma pieza por pieza (`assets/video/pinguino-armado.mp4`, 7 s, 115 KB) y al terminar se funde con la imagen quieta (`assets/video/pinguino-final.png`), que queda fija. El video original (4K, fondo crema) se espejó para que mire hacia el texto, se recortó alrededor del pingüino y se pasó a fondo blanco para que se funda con la trama. Si la persona tiene activado "reducir movimiento", se ve directamente la imagen quieta. Se configura en `contenido.js` → `portada.video`.

## Pantalla de entrada

**Desactivada por ahora** (el pingüino se arma en la portada). Si se activa: al abrir la página en Inicio, la marca se arma a pantalla completa sobre el fondo con la trama (`assets/video/intro-marca.mp4`, 13 s, 316 KB) y al terminar se desvanece mostrando la portada con el pingüino. Se ve una vez por visita, tiene botón "Saltar" (o tecla Esc) y no aparece si la persona tiene activado "reducir movimiento" ni si se entra directo a otra sección. Se configura en `contenido.js` → `intro` (dejá `src` vacío para desactivarla).

El video original (4K, fondo crema) se convirtió a 1280 px con fondo blanco para que se funda con la trama.

## Trama de fondo

La trama de la marca (`assets/tramas/trama-marina.png`) se repite de fondo en todas las páginas, muy suave para que no compita con el contenido. Cuando se abre un panel, se desvanece para que el texto se lea mejor, y vuelve al cerrarlo. La intensidad se cambia en `styles.css`: `--trama-portada` y `--trama-secciones` (0 = invisible, 1 = plena).

## Contacto: mapa y formulario

- **Mapa "Estamos acá":** mapa de OpenStreetMap con **el pingüino como punto de ubicación** (biblioteca Leaflet, incluida en `assets/vendor/leaflet/`). Al tocar el pingüino aparece la dirección y "Cómo llegar". Para que el pingüino quede exacto, cargá las coordenadas en `contenido.js` → `contacto.mapaPinguino` (`lat` y `lng`; en Google Maps, clic derecho sobre el jardín → se copian los números). Sin coordenadas, la dirección se busca sola. Si el mapa no carga, se muestra el mapa de Google de `mapaInsertado`.
- **Formulario "¿Nos empezamos a conocer?":** para que los mensajes lleguen al correo del jardín:
  1. Creá una cuenta gratis en https://formspree.io con el correo del jardín.
  2. Creá un formulario nuevo y copiá su dirección (`https://formspree.io/f/xxxxxx`).
  3. Pegala en `contacto.formulario.destino` en `contenido.js`.
  4. Mandá un mensaje de prueba desde la página publicada y confirmá el correo que te envía Formspree.

  Mientras `destino` esté vacío, el formulario **no envía nada**: avisa que todavía no está conectado. Con `modoPropuesta: false` y sin destino, el formulario no se muestra.

## Probar en la computadora

**Opción rápida:** doble clic en `index.html`.

**Opción recomendada (servidor local, igual que en Vercel):**

- Con Python instalado, abrí una terminal dentro de la carpeta y ejecutá
  `python3 -m http.server 8000` (en Windows: `py -m http.server 8000`).
  Después abrí <http://localhost:8000>.
- O con Visual Studio Code: extensión **Live Server** → clic derecho en `index.html` → *Open with Live Server*.

Probá también: tecla Tab para recorrer la página, el menú achicando la ventana, abrir y cerrar las solapas (botón "Cerrar" o Esc).

## Subir a GitHub

Subí **toda la carpeta**: `index.html`, `styles.css`, `app.js`, `contenido.js`, `README.md`, `.gitignore` y `assets/` con sus archivos.

Desde la web (sin terminal):
1. En github.com → **New repository** → nombre, por ejemplo `jardin-909` → *Create repository*.
2. **uploading an existing file** → arrastrá el contenido de la carpeta (no la carpeta contenedora) → *Commit changes*.

Desde la terminal:
```bash
git init
git add .
git commit -m "Sitio Jardín N.º 909"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/jardin-909.git
git push -u origin main
```

## Publicar en Vercel

1. Entrá a vercel.com con tu cuenta de GitHub.
2. **Add New… → Project** → elegí el repositorio `jardin-909` → *Import*.
3. Configuración:
   - **Framework Preset:** Other
   - **Root Directory:** `./`
   - **Build Command:** vacío
   - **Output Directory:** vacío
4. **Deploy**. Vercel da una dirección del tipo `jardin-909.vercel.app`.

Cada cambio que subas a GitHub (por ejemplo, editar `contenido.js`) se publica solo en un minuto.

## Accesibilidad incluida

Enlace "Saltar al contenido", foco visible, menú y solapas operables con teclado, filtros con flechas, cierre con Esc y retorno del foco, textos alternativos configurables, contraste AA y respeto de la preferencia "reducir movimiento".

# Tipografías

El sitio usa las tipografías del brandboard:

| Uso | Familia | Archivo que va en esta carpeta |
|---|---|---|
| Títulos y resaltes | IvySoft Variable | `IvySoft-Variable.woff2` |
| Textos | Nunito Sans | `NunitoSans-Variable.woff2` **o** `NunitoSans-Variable.ttf` |

Mientras falten, el sitio usa una fuente de respaldo (Nunito Sans si está, o Helvetica/Arial).

## Nunito Sans (gratuita, licencia OFL)
1. Entrá a https://fonts.google.com/specimen/Nunito+Sans y tocá **Get font → Download all**.
2. En el ZIP, buscá el archivo `NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf`.
3. Copialo acá y cambiale el nombre a `NunitoSans-Variable.ttf`.

## IvySoft Variable (comercial, de Ivy Foundry)
Para usarla en una web publicada hace falta **licencia web**. Tener la fuente
instalada en la computadora no alcanza: quien visite el sitio no la tiene.
- Si la compraste con licencia web: copiá el archivo `.woff2` acá con el nombre `IvySoft-Variable.woff2`.
- Si la usás desde Adobe Fonts: creá un "proyecto web" con la familia y
  pegá el `<link>` que te da Adobe en `index.html` (hay un comentario que indica dónde).
  Luego, en `styles.css`, en `--fuente-titulos` agregá el nombre que indique Adobe al principio de la lista.

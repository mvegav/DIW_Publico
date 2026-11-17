# Guía de Estilos: San Martiño e o Magosto (Vilanova de Arousa)

Esta guía documenta los fundamentos visuales, tipográficos, de diseño y componentes de interfaz utilizados en la web temática sobre la tradición gallega del Magosto en Vilanova de Arousa.

---

## 1. Paleta de Colores

La paleta cromática está inspirada en el otoño gallego, las castañas asadas, la madera y el calor del fuego, utilizando tonos tierra, cremas cálidos y acentos anaranjados.

### Colores Principales y de Marca

| Token / Variable CSS        | Muestra / Hex | Uso Principal                                                                            |
| :-------------------------- | :------------ | :--------------------------------------------------------------------------------------- |
| `--bg-cabecera-pie`         | `#37271E`     | Fondo de cabecera (`<header>`) y pie de página (`<footer>`).                             |
| `--color-secundario`        | `#633b25`     | Títulos principales (`h2`, `h3`), barra de navegación, botones y tarjeta de fecha.       |
| `--color-sobretitulos`      | `#b65b2c`     | Etiquetas superiores (`.etiqueta`, `.sobretitulo`) y estado _hover_ en datos destacados. |
| `.sobretitulo` Cabecera     | `#ffd79a`     | Sobretítulo en cabecera oscura                                                           |
| Línea inferior enlaces menu | `#ffd18a`     | Línea inferior que aparece al tener enlaces activos/hover del menú y del pie de página.  |

### Fondos y Superficies

| Token / Variable CSS | Muestra / Hex | Uso Principal                                                      |
| :------------------- | :------------ | :----------------------------------------------------------------- |
| `--bg-color`         | `#f4ede2`     | Fondo general de la página (`<body>`).                             |
| `--bd-panel`         | `#fffdf9`     | Fondo de contenedores principales (`.panel`) y tarjetas (`.card`). |
| _Fondo Lendas_       | `#ead9c3`     | Fondo diferenciado para la sección de leyendas (`.lendas`).        |
| _Fondo Inputs_       | `#ffffff`     | Fondo de campos de formulario.                                     |

### Textos y Bordes

| Token / Variable CSS             | Muestra / Hex | Uso Principal                                                       |
| :------------------------------- | :------------ | :------------------------------------------------------------------ |
| `--color-texto`                  | `#38271e`     | Texto general del cuerpo de la página.                              |
| `--color-texto-cabecera`         | `#fff8ed`     | Texto claro sobre fondos oscuros (cabecera, pie y bloque de fecha). |
| _Texto Secundario / Pie de foto_ | `#76675b`     | Textos de `<figcaption>`.                                           |
| _Borde Inputs_                   | `#b9aa9b`     | Contorno por defecto de los campos de formulario.                   |

### Estados de Validación (Formularios)

| Estado                    | Muestra / Hex                      | Uso Principal                                                             |
| :------------------------ | :--------------------------------- | :------------------------------------------------------------------------ |
| **Foco (`:focus`)**       | Contorno `#a65d2b` / Fondo `wheat` | Resaltado activo al escribir en un campo.                                 |
| **Válido (`:valid`)**     | `#39834b`                          | Contorno de confirmación cuando el dato cumple los requisitos.            |
| **Inválido (`:invalid`)** | `#bd4035`                          | Contorno de error cuando el dato no es válido o falta un campo requerido. |

---

## 2. Tipografía

El sistema tipográfico combina una fuente _serif_ robusta con remates cuadrados para los encabezados (evocando tradición y cartelería clásica) y una _sans-serif_ humanista para garantizar una lectura cómoda en textos largos.

### Familias Tipográficas

- **Títulos (`--fuente-titulos`):** `'Arvo', Verdana, Geneva, Tahoma, sans-serif`
  - Pesos disponibles: Regular (`400`), Italic (`400`), Bold (`700`), Bold Italic (`700`).
- **Cuerpo (`--fuente-cuerpo`):** `'Lato', Georgia, 'Times New Roman', serif`
  - Pesos disponibles: Regular (`400`), Italic (`400`), Bold (`700`), Bold Italic (`700`).

### Escala Tipográfica y Jerarquía

- **Base:** `14px` con interlineado de `1.6` (`14px/1.6`).
- **Título Principal (`h1`):** Fluido mediante `clamp(2.2rem, 1.5rem + 4vw, 4.5rem)`, interlineado `1.08` y sombra paralela (`2px 3px 8px #24130d`).
- **Subtítulos de Sección (`h2`):** Fluido mediante `clamp(1.8rem, 1.2rem + 2vw, 3rem)` en color `--color-secundario`.
- **Títulos de Tarjeta / Artículo (`h3`):** `1.4rem` en color `--color-secundario`.
- **Etiquetas y Sobretítulos (`.etiqueta`, `.sobretitulo`):** `0.78rem`, mayúsculas (`uppercase`), espaciado entre letras de `0.13em` y peso `700`.
- **Dato Numérico Destacado (`.dato-numero`):** `4rem`, negrita, interlineado `1`, tipografía `Georgia, serif`.

---

## 3. Estructura y Layout (Grid y Responsive)

La maquetación utiliza **CSS Grid** tanto para la estructura global como para la organización del contenido principal.

### Estructura Global (`body`)

- **Distribución:** 1 columna y 4 filas (`cabecera`, `menu`, `contenido`, `pie`).
- **Contenedor Principal (`.contenido`):** Ancho máximo de `1120px` (o `92%` en pantallas menores), centrado con margen vertical de `2.5rem` y separación (`gap`) de `1.8rem`.

### Puntos de Ruptura (_Breakpoints_)

1. **Móvil (`< 768px`):**
   - Todas las secciones apiladas en una única columna.
   - Cabecera centrada.
2. **Tableta (`≥ 768px`):**
   - La cuadrícula de tarjetas (`.cards`) pasa a ser multi-columna automática: `repeat(auto-fit, minmax(280px, auto))`.
3. **Escritorio (`≥ 1024px`):**
   - La cabecera distribuye el logotipo y el título en los extremos (`justify-content: space-between`).
   - La sección `.introduccion` divide el texto y el bloque de fecha en 2 columnas (`1fr auto`).
   - Las secciones `.lendas` y `.contacto` se posicionan lado a lado en dos columnas iguales.

---

## 4. Componentes de Interfaz

### Paneles Contenedores (`.panel`)

- **Fondo:** `--bd-panel` (`#fffdf9`).
- **Bordes:** Redondeados a `14px`.
- **Relleno interno:** Fluido (`clamp(1.2rem, 3vw, 2rem)`).
- **Sombra:** `0 5px 18px rgba(65, 39, 22, 0.09)`.

### Menú principal (`.menu`)

- **Fuente:** 1.4rem negrita.
- **Efecto hover y focus-visible:** se crea en el pseudoelemento posterior del enlace una linea con borde redondeado 20 y alto 3rem de color `#ffd18a` (crea una variable con ese color). (`transition: all 0.5s ease-out`)

### Tarjetas de Tradiciones (`.card`)

- **Estilo:** Fondo `--bd-panel`, bordes de `12px`, relleno `1.5rem` y sombra suave.
- **Imágenes:** Altura fija de `190px`, `object-fit: cover`, bordes de `8px`. Comienzan con `filter: brightness(85%)` y pasan al `100%` al hacer _hover_.
- **Interacción:** Elevación vertical de `-4px` (`translateY(-4px)`) con transición de `0.2s`.

### Cartel Ilustrativo (`.cartel`)

- **Efecto visual:** Aplica un filtro vintage en reposo (`sepia(40%) contrast(110%) brightness(95%)`) que se restaura a sus colores originales al pasar el cursor (`transition: filter 0.5s ease`).

### Botones (`.btn`)

- **Apariencia:** Fondo `--color-secundario`, texto blanco, mayúsculas, peso `700`, tamaño `1.2rem`, relleno `1rem` y bordes redondeados a `6px`.
- **Interacción (`:hover`):** Añade un contorno exterior (`outline: 3px solid var(--color-secundario)`) separado `4px` (`outline-offset: 4px`).

### Formularios (`.contacto`)

- **Campos de texto, selectores y áreas de texto:** Ancho del `100%`, relleno de `0.75rem`, bordes redondeados a `6px` y contorno de `1px`.
- **Accesibilidad visual:** Cuando un campo recibe el foco, su `<label>` asociado aumenta automáticamente su grosor a negrita (`font-weight: 700`) mediante el selector `:has()`.
- **Casilla de verificación (`checkbox`):** Escalada a `1.2` con `accent-color` ajustado al color secundario de la marca.

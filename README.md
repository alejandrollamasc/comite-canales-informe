# Comité de Canales — Informe de Canales Digitales

Informe de estatus (KPIs, iniciativas y roadmap) para el Comité de Canales.
Publicado como sitio estático en GitHub Pages. Contiene únicamente el informe.

- Portada: `home.html`
- Informe: `Canales_Digitales.html`

## Contenido publicado

Todos los archivos se referencian con rutas relativas, sin espacios en los nombres.

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Punto de entrada. Redirige a `home.html`. |
| `home.html` | Portada. Genera una tarjeta por cada informe de la lista `window.INFORMES_LIST`; si la lista no existe o está vacía, muestra un mensaje de que no hay informes disponibles. |
| `Canales_Digitales.html` | Informe único del Comité de Canales, con dos secciones independientes (ver abajo). |
| `hubnav.css` | Estilos de la barra de navegación entre informes. |
| `informes.js` | Lista central de informes (`window.INFORMES_LIST`). Es el único punto de mantenimiento de los enlaces de la portada y del menú. |
| `README.md` | Este documento. |

## Secciones del informe (`Canales_Digitales.html`)

El informe contiene dos secciones. Cada una funciona como un reporte independiente: tiene sus propios datos, su propio encabezado desplegable y no depende de la otra.

### 1. Negocios digitales · Tienda seguros

Sección `#ventas-digitales` dentro de `Canales_Digitales.html`.

- **KPIs:** indicadores de negocio, experiencia (UX) y confiabilidad de la Tienda de seguros, con valor actual, meta y tendencia mensual 2026.
- **Iniciativas:** iniciativas en curso, planeadas y con carry over a 2027, con su avance.
- **Roadmap:** diagrama de Gantt con el cierre de 2026 y las iniciativas que pasan a 2027.

### 2. Pagos digitales

Sección `#pagos-digitales` dentro de `Canales_Digitales.html`.

- **KPIs:** indicadores de la pasarela de pagos (recaudo y pagos en línea) con valor actual, % de cumplimiento frente a la meta y tendencia.
- **Iniciativas:** iniciativas de Pagos digitales con su estado y pendientes.
- **Roadmap / Gantt:** cronograma de las iniciativas de Pagos digitales.
- **Fuentes:** Jira GD938 y GD1160.

## Fuentes de datos

- Excel "KPIs Canales para Comité de Canales" (series mensuales 2026).
- Jira GD917 (iniciativas y roadmap de Negocios digitales · Tienda seguros).
- Jira GD938 y GD1160 (Pagos digitales).

## Cómo agregar o cambiar informes

Editar únicamente `informes.js`: la portada y el menú de navegación se actualizan a partir de esa lista.

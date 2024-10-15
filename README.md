# Proyecto de Presupuestos de Servicios

Este proyecto consiste en una página web que permite a los usuarios calcular presupuestos personalizados para servicios de SEO, Ads y desarrollo web. Los usuarios también pueden agregar servicios adicionales, como la creación de más páginas y la inclusión de varios idiomas.

## Descripción del Proyecto

El objetivo del proyecto es proporcionar una plataforma interactiva donde los clientes puedan seleccionar distintos servicios de marketing digital y desarrollo web, ajustando su presupuesto en tiempo real según los servicios adicionales que contraten. Además puede ver los clientes con sus servicios interesados para el presupuesto. Las tecnologías utilizadas garantizan una experiencia de usuario fluida y rápida.

### Servicios Ofrecidos:
1. **SEO**: Optimización de motores de búsqueda.
2. **Ads**: Publicidad en plataformas digitales.
3. **Web**: Desarrollo de sitios web.
4. **Extras**: Opciones para añadir más páginas y soportar múltiples idiomas.

## Interacción entre Componentes y Servicios

El proyecto se divide en componentes que se comunican entre sí utilizando un servicio compartido para gestionar los datos y las interacciones:

- **HomeComponent**: Es el componente principal que orquesta la interacción entre los subcomponentes.
- **PanelComponent**: Contiene los formularios de selección para servicios adicionales (número de páginas e idiomas).
- **ModalComponent**: Muestra un resumen del presupuesto calculado y las opciones seleccionadas.
- **BudgetListComponent**: Lista los presupuestos anteriores y permite su edición.
- **Servicio de Presupuesto**: Maneja el estado global del presupuesto, asegurando la persistencia de los datos a medida que los componentes interactúan.

La lógica de negocio principal (cálculo del presupuesto) se implementa en el **servicio**, que se comunica con los componentes para compartir y actualizar la información de manera reactiva.

## Características Principales

- **Cálculo en tiempo real**: Los precios de los servicios se actualizan dinámicamente a medida que el usuario ajusta las opciones.
- **Interfaz amigable**: Usabilidad mejorada gracias al uso de Bootstrap para el diseño responsivo.
- **Componentes modulares**: El código está dividido en componentes reutilizables y fáciles de mantener.
- **Formulario reactivo**: Implementación de formularios reactivos para la gestión eficiente de datos de entrada.
- **Validación de datos**: Validaciones integradas para entradas de nombre, correo electrónico y teléfono.
- **URL personalizable**: Las opciones de presupuesto seleccionadas se reflejan en la URL para que puedan ser compartidas.

## Estructura del Proyecto

src/
├── app/
│   ├── components/
│   │   ├── welcome/
│   │   ├── home/
│   │   ├── panel/
│   │   ├── modal/
│   │   └── budget-list/
│   ├── services/
│   │   └── budget.service.ts
│   ├── interfaces/
│   │   └── budget.interface.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
├── assets/
├── styles/
│   └── styles.scss
├── index.html
└── main.ts

## Tecnologías Utilizadas
Angular: Framework principal para la creación de la SPA (Single Page Application).
TypeScript: Lenguaje de programación usado para agregar tipado estático.
Bootstrap: Utilizado para la maquetación y diseño responsivo.
Sass: Preprocesador CSS para estilos más estructurados y reutilizables.
JavaScript: Para funcionalidades adicionales y manipulaciones del DOM.
HTML: Para la estructura de la interfaz de usuario.

## Instalación

-git clone.
-npms install. 

## Conclusiones

Este proyecto permite gestionar presupuestos de servicios de una manera intuitiva y flexible, aprovechando las capacidades avanzadas de Angular para formularios reactivos y la modularidad de los componentes. La integración con Bootstrap asegura una experiencia de usuario moderna y adaptable en diferentes dispositivos, mientras que el uso de TypeScript facilita la escalabilidad y mantenibilidad del código.
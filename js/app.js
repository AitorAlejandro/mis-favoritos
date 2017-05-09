var objLinkList = [
            { href: "#blogs", linkText: "Blogs" },
            { href: "#herramientas", linkText: "Herramientas" },
            { href: "#recursos", linkText: "Recursos" }
        ];
var objBlogs =  [
    {
        url: "https://css-tricks.com/",
        linkText: "css-tricks",
        text: "Indudablemente una de las webs número uno de consulta para un frontend. Artículos y tutoriales de calidad y un buen número de snippets."
    },
    {
        url: "https://www.smashingmagazine.com/",
        linkText: "Smashing Magazine",
        text: "Todo un referente en el mundo de la web. Código, diseño, mobile, UX ... etc. Publican libros con colecciones de sus artículos más interesantes."
    },
    {
        url: "https://www.sitepoint.com/",
        linkText: "Site Point",
        text: "Artículos meticulosos de gran calidad, podcast, libros y cursos (a veces gratis). También imprescindible."
    },
    {
        url: "https://scotch.io/",
        linkText: "Scotch.io",
        text: "Tutoriales excelentes sobre el mundo frontend y backend javascript. Disponen de <a href=\"https://school.scotch.io/courses\" target=\"_blank\">cursos</a> free y premium. ¡¡No perdérselo!!"
    },
    {
        url: "https://davidwalsh.name/",
        linkText: "David Walsh Blog",
        text: "Blog del gurú JavaScript David Walsh. Nos mantiene al día con sus interesantes artículos. No solo habla de JavaScript, también aborda otras tecnologías web."
    },
    {
        url: "http://alistapart.com/articles",
        linkText: "A List Apart",
        text: "Artículos de todo lo relacionado con la web. Son artículos de una calidad tan extraordinaria que algunos son un referente."
    },
    {
        url: "https://webmasters.googleblog.com/",
        linkText: "Google Webmaster Blog",
        text: "No puede faltar el blog oficial de Google para webmasters."
    },
    {
        url: "http://lea.verou.me/",
        linkText: "Lea Verou",
        text: "La gran Lea Verou. Proyectos, charlas, artículos. Una eminencia en el CSS."
    },
    {
        url: "http://wesbos.com/blog/",
        linkText: "Web Bos",
        text: "Artículos, videos y tutoriales"
    },
    {
        url: "http://www.developerdrive.com/",
        linkText: "Developer Drive",
        text: "Artículos sobre todo tipo de tecnología de desarrollo web."
    },
    {
        url: "http://www.cssportal.com/",
        linkText: "CSS Portal",
        text: "Snippets, generadores y herramientas para desarrollar en CSS."
    },
    {
        url: "http://www.elmaquetadorweb.com/",
        linkText: "El maquetador web",
        text: "Excelente blog mantenido por Javi Luna y Pedro Marín donde nos cuentan muchos trucos en esto del CSS. Me encanta el nombre de maquetador, término en desuso hoy en día.  ;D"
    },
    {
        url: "https://toddmotto.com/",
        linkText: "Todd Motto",
        text: "Artículos y tutoriales sobre JavaScript, Angular y Typescript. Dispone de muy buenos cursos en premium."
    },
    {
        url: "http://valhead.com/blog/",
        linkText: "Val Head Blog",
        text: "Artículos y tutoriales de una especialista en animaciones CSS web."
    },
    {
        url: "https://codyhouse.co/",
        linkText: "Cody House",
        text: "Colecciones gratuitas de snippets de HTML, CSS y JavaScript. También disponen de cursos premium."
    },
    {
        url: "http://www.kylejlarson.com/blog/ ",
        linkText: "kyle J. Larson",
        text: "Buenos consejos para el diseño web."
    },  
    {
        url: "http://mrbool.com/",
        linkText: "Mr. Bool",
        text: "Tutoriales y cursos. ES6, Node+NPM, Ionic, Angular, NoSQL."
    },
    {
        url: "http://www.marketingenredes.com/",
        linkText: "Marketing en redes",
        text: "Sin unos buenos consejos como estos de marketing digital, no somos nadie."
    }    
];

var objHerramientas =  [
    {
        url: "https://github.com/",
        linkText: "github",
        text: "Web que permite tener subidos tus repositorios git y así poder trabajar de forma colaborativa. Tiene versión Premiun con muchas mejoras. Dispone de las github-pages que te permiten desplegar webs estáticas incluso en la versión gratuita."
    },
    {
        url: "http://codepen.io/",
        linkText: "Codepen.io",
        text: "Web app en la que poder realizar demos en HTML, CSS, y JavaScript en vivo. Admite usar cualquier preprocesador de CSS y transpilador JS. Puedes guardar tus trabajos."
    },
    {
        url: "http://plnkr.co/",
        linkText: "Plukr",
        text: "Plunkr permite realizar pruebas de concepto rápidas y se pueden compartir. Contiene plantillas para Angular, React, Kendo UI."
    },
    {
        url: "https://jsfiddle.net/",
        linkText: "jsfiddle",
        text: "Otro editor de código online muy al estilo de plunkr. También puedes compartir tus trabajos y/p ejemplos."
    },
    {
        url: "https://www.gitignore.io/",
        linkText: "gitignore",
        text: "Tras git init suele ser habitual crear un gitignore para configurar qué se debe ignorar en el historial. Esta aplicación nos ayudará mucho en esa tarea. Hay que indicarle qué tecnologías estamos usando y gitignore hace el resto."
    },
    {
        url: "http://web-dev.tools/",
        linkText: "Web Dev Tools",
        text: "Tres herramientas que te permiten generar tu propio framework CSS. Son, como si se tratase de los 3 mosqueteros, Gridifier, Typographier y Modulifier. Ideales para proyectos donde quieras ir con el menor peso posible."
    },   
    {
        url: "https://www.draw.io/",
        linkText: "draw.io",
        text: "Para realizar todo tipo de diagramas, incluidos los de flujo de software que cada vez es más raro verlos  ;)"
    },
    {
        url: "http://www.regexr.com/",
        linkText: "Regexr",
        text: "Nos permite crear y probar en tiempo real expresiones regulares. Muy útil cuando ya estamos desesperados de buscar algo en stackoverflow y no damos con ello."
    },
   {
        url: "http://caniuse.com/",
        linkText: "Can I use ... ?",
        text: "Antes de utilizar features de vanguardia conviene asegurarse de la compatibilidad en los navegadores. Tanto para CSS como para JavaScript. No puede faltar."
    },
    {
        url: "http://pxtoem.com/",
        linkText: "pxtoem",
        text: "Conversor de pixel a em y de em a pixel. Muy útil cuando recibimos diseños gráficos hechos en pixeles."
    },
    {
        url: "http://currentmillis.com/",
        linkText: "currentmillis",
        text: "¿Problemas con UTC time, local time, Epoch, Unix timestamp? Esta web te ayudará con ello."
    },
    {
        url: "http://bradfrost.github.io/this-is-responsive/patterns.html",
        linkText: "Plantillas responsive",
        text: "Sirven como boilerplates de una página, proyecto o landing page. No hay que redescubrir la rueda todos los días."
    },
    {
        url: "https://www.w3schools.com/colors/colors_converter.asp",
        linkText: "Convertidor códigos color",
        text: "Convierte todo tipo de códigos: RGB, Hex, HSL, CMYK y por nombre."
    },
    {
        url: "http://www.colorzilla.com/gradient-editor/",
        linkText: "ColorZilla Gradient Generator",
        text: "Herramienta para generar gradientes CSS. Se incluye soporte para IE9."
    },
    {
        url: "http://jeremyckahn.github.io/stylie/",
        linkText: "Stylie",
        text: "Una forma de ajustar tus animaciones CSS de forma visual sencilla."
    },
    {
        url: "http://www.tablesgenerator.com/",
        linkText: "Table generator",
        text: "Generador de tablas LaTex, HTML, Text tables, Markdown tables."
    },
    {
        url: "http://www.cssarrowplease.com/",
        linkText: "CSS arrow please",
        text: "Puedes configurar paneles con flecha, variando el tamaño y la posición de esta. Te da el código CSS para que llevártelo."
    },
    {
        url: "https://pixlr.com/",
        linkText: "Pixlr",
        text: "Una versión light y free de Photoshop online."
    },
    {
        url: "https://icomoon.io/",
        linkText: "Icomoon",
        text: "De las mejores herramientas para generar glifos para tu proyecto. Es modo freemium. Para cuando necesites algo más personalizado de <a href=\"http://fontawesome.io/\" target=\"_blank\">Awesomefont</a>."
    },
    {
        url: "http://lorempixel.com/",
        linkText: "Lorempixel",
        text: "Mientras recibimos las imágenes definitivas y estamos realizando ya la demo en paralelo, esta herramienta nos coloca una imagen al azar cada vez que la llamamos. Se pueden ajustar distintos parámetros como el tamaño y el tema. Creo que el nombre de lorempixel es bastante descriptivo ;)"
    },
    {
        url: "http://www.patternify.com/",
        linkText: "Patternify",
        text: "Generador para patrones de  CSS, ideal para lo que se conoce como grecas. Nos da la imagen en código Base 64."
    },
    {
        url: "https://coolors.co/",
        linkText: "Coolors",
        text: "Generador de paletas, 5 colores. Presenta un apartado para ver cómo se distingue tu paleta con distintas discapacidades."
    },
    {
        url: "https://gravit.io",
        linkText: "Gravit.io",
        text: "Herramienta de diseño gráfico. Una especie de Sketch online y gratuito."
    },
    {
        url: "https://developers.google.com/speed/pagespeed",
        linkText: "Google PageSpeed Insights",
        text: "Herramienta de Google que nos proporciona un informe de mejora rendimiento de nuestra web. Hay que introducir la URL pública y PageSpeed se encarga del resto."
    },
    {
        url: "https://mailchimp.com/",
        linkText: "Mailchimp",
        text: "Te permite realizar envios de email para comprobar tus propios diseños en los distintos clientes web. Puedes realizar incluso campañas, simplemente crea tu diseño o elige uno de sus plantillas y haz el envio."
    },
    {
        url: "http://makeappicon.com/",
        linkText: "MakeAppIcon",
        text: "Web que te genera a partir de una imagen toda la batería necesaria de iconos para incluir en una App Android e iOS."
    },
    {
        url: "https://www.mockaroo.com/",
        linkText: "Mockaroo",
        text: "Mockaroo nos permite generar nuestros JSONs mocks. También admite otros formatos como CSV, SQL, XML, Excel, y más."
    },
    {
        url: "https://www.getpostman.com/",
        linkText: "Postman",
        text: "Pocas cosas habrá mejor para realizar pruebas sobre una API RESTFul que esta app que se puede instalar como extensión de Chrome."
    }
];

var objRecursos =  [
    {
        url: "https://fonts.google.com/",
        linkText: "Google Fonts",
        text: "Google Font nos permite utilizar web fonts de forma sencilla."
    },
    {
        url: "http://cssreference.io/",
        linkText: "CSS reference",
        text: "Excelente guía de referencia general CSS. La mejor hasta el momento que haya visto !!!"
    },      
    {
        url: "https://wordpress.org/themes/",
        linkText: "Wordpress themes",
        text: "Site oficial para los themes de Wordpress."
    },
    {
        url: "https://github.com/mzabriskie/axios",
        linkText: "axios",
        text: "Cliente HTTP basado en promesas para el navegador y para node.js, si solo te hace falta hacer llamadas ajax no te lies con otras cosas más pesadas."
    }
];

var siteNavigation = new Vue({
    el: "#site-navigation",
    data: {
        linkList: objLinkList
    }
});
var blogs = new Vue({
    el: '#blogs',
    data: {
        sectionTitle: "Blogs",
        aryBlogs: objBlogs
    },
    mounted: function () {
       console.log("blogs is now rendered");
    }
});
var herramientas = new Vue({
    el: '#herramientas',
    data: {
        sectionTitle: "Herramientas",
        aryHerramientas: objHerramientas
    },
    mounted: function () {
       console.log("herramientas is now rendered");
    }
});
var recursos = new Vue({
    el: '#recursos',
    data: {
        sectionTitle: "Recursos",
        aryRecursos: objRecursos
    },
    mounted: function () {
       console.log("recursos is now rendered");
    }
});
var footer = new Vue({
  el: '#footer',
  data: {
    copyright: 'Copyright &copy; ' + new Date().getFullYear() + ' Aitor Alejandro Herrera. MIT License'
  }
});

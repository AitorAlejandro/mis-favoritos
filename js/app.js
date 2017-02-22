var objLinkList = [
            { href: "#blogs", linkText: "Blogs" },
            { href: "#herramientas", linkText: "Herramientas" }
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
        text: "log del gurú JavaScript David Walsh. Conviene seguirle y leer sus interesantes artículos. No solo habla de JavaScript, también aborda otras tecnologías web."
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
        url: "http://www.naderdabit.me/#/",
        linkText: "Nader Dabit",
        text: "Tutoriales sobre ReactJS, Angular, NPM ."
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
        url: "http://www.regexr.com/",
        linkText: "Regexr",
        text: "Nos permite crear y probar en tiempo real expresiones regulares. Muy útil cuando ya estamos desesperados de buscar algo en stackoverflow y no damos con ello."
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
    }
});
var herramientas = new Vue({
    el: '#herramientas',
    data: {
        sectionTitle: "Herramientas",
        aryHerramientas: objHerramientas
    }
});
var footer = new Vue({
  el: '#footer',
  data: {
    copyright: 'Copyright &copy; ' + new Date().getFullYear() + ' Aitor Alejandro Herrera. MIT License'
  }
});

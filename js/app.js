var siteNavigation = new Vue({
    el: "#site-navigation",
    data: {
        linkList: [
            { href: "#blogs", linkText: "Blogs" },
            { href: "#herramientas", linkText: "Herramientas" },
            { href: "#frameworks", linkText: "Frameworks" }
        ]
    }
});
var blogs = new Vue({
    el: '#blogs',
    data: {
        sectionTitle: "Blogs",
        aryBlogs: [
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
                url: "http://wesbos.com/blog/",
                linkText: "Web Bos",
                text: "Artículos, videos y tutoriales"
            },
            {
                url: "http://www.developerdrive.com/",
                linkText: "Developer Drive",
                text: "Artículos sobre todo tipo de tecnología de desarrollo web."
            }
        ]
    }
});

var footer = new Vue({
  el: '#footer',
  data: {
    copyright: 'Aitor Alejandro &copy; ' + new Date().getFullYear() + ' Reservados todos los derechos.'
  }
});

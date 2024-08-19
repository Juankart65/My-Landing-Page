import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Instagram, Facebook, Github } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/juanes-cardona/",
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/Juankart65",
    },
    {
        id: 4,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "https://www.facebook.com/juanes.cardona3062",
    },
    {
        id: 5,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/iamjuaness",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer",
        subtitle: "TechSolutions",
        description: "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "Nov 2023 ",
    },
    {
        id: 2,
        title: "Creador de Experiencias Digitales",
        subtitle: "PixelCrafters",
        description: "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
        date: "May 2021",
    },
    {
        id: 3,
        title: "Especialista en Desarrollo Frontend",
        subtitle: "CodeForge Solutions",
        description: "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
        date: "Ago 2019",
    },
    {
        id: 4,
        title: "Prácticas Grado",
        subtitle: "WebWizards Inc.",
        description: "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
        date: "Mar 2018",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 10,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 10,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 0,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },

];

export const dataPortfolio = [
    {
        id: 1,
        title: "UniLocal",
        image: "/image-1.png",
        urlGithub: "https://github.com/Juankart65/ProyectoFinalAvanzada.git",
        urlDemo: "https://unilocal-f9e1f.web.app/home",
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];
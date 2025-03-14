document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los botones de tema e idioma
    const themeToggles = document.querySelectorAll(".theme-toggle");
    const langToggles = document.querySelectorAll(".lang-toggle");
    const body = document.body;

    // Función para actualizar las imágenes de tema
    function updateThemeImages(theme) {
        document.querySelectorAll('.icon').forEach(img => {
            if (img.dataset.original && img.dataset.dark) {
                img.src = theme === "dark" ? img.dataset.dark : img.dataset.original;
            }
        });
    }

    // Función para actualizar el icono de tema en todos los botones
    function updateThemeIcon(theme) {
        const imgSrc = theme === "dark" ? "./assets/light-mode-white.png" : "./assets/light-mode.png";
        themeToggles.forEach(btn => {
            btn.innerHTML = `<img class="icon" 
                                data-original="./assets/light-mode.png" 
                                data-dark="./assets/light-mode-white.png" 
                                src="${imgSrc}" 
                                alt="Theme Icon" 
                                width="24" height="24">`;
        });
    }

    // Función para actualizar textos según el idioma
    function updateLanguage(lang) {
        const translations = {
            en: {
                about: "About",
                experience: "Experience",
                experienceTwo: "Experience",
                projects: "Projects",
                contact: "Contact",
                contact2: "Contact",
                learnMore: "Get To Know More",
                learnMore2: "About Me",
                learnMoreTitle: "About Me",
                hello: "Hello, I'm",
                backend: "Backend Developer",
                downloadCV: "Download CV",
                getInTouch: "Erik M Ovejero",
                HTresExperiencia: "Experience",
                HTresEducacion: "Education",
                masDosAnios: "2+ years Backend Development",
                TercerAnioEstudiante:"3rd year student Computer Science",
                pAboutMe:"I have been programming in Java for over two years. I can build MySQL databases, I enjoy working with the Spring Boot framework, and I usually perform testing using JUnit. Lately, I've been developing Java applications for Android.",
                exploreMy:"Explore My",
                browseMy:"Browse My Recent",
                projects:"Projects",
                getInTouch:"Get in Touch",
                contactMe:"Contact Me",
            },
            es: {
                about: "Sobre mí",
                experience: "Experiencia",
                experienceTwo: "Experiencia",
                projects: "Proyectos",
                contact: "Contacto",
                contact2: "Contacto",
                learnMore: "Aprende más",
                learnMore2: "Sobre mí",
                learnMoreTitle: "Sobre mí",
                hello: "Hola, soy",
                backend: "Desarrollador Backend",
                downloadCV: "Descargar CV",
                getInTouch: "Erik M Ovejero",
                HTresExperiencia: "Experiencia",
                HTresEducacion: "Educación",
                masDosAnios: "2+ años Backend Development",
                TercerAnioEstudiante:"Estudiante de Tercer año en Licenciatura en Informática",
                pAboutMe:"Programo en Java desde hace más de dos años, puedo armar bases de datos Mysql, me gusta el Framework SpringBoot y suelo hacer testeo con JUnit, ultimamente estuve programando aplicaciones en Java para Android.",
                exploreMy: "Explora Mi",
                browseMy:"Navega por mis",
                projectsTwo:"Proyectos",
                getInTouch:"Para más información",
                contactMe:"Contáctame",
                
            }
        };

        const elements = {
            about: document.querySelectorAll("a[href='#about']"),
            experience: document.querySelectorAll("a[href='#experience']"),
            experienceTwo: document.querySelector(".title-experience"),
            projects: document.querySelectorAll("a[href='#projects']"),
            contact: document.querySelectorAll("a[href='#contact']"),
            contact2: document.querySelector(".btn-container .btn-color-1"),
            learnMoreTitle: document.querySelector(".title-about"),
            learnMore: document.querySelector(".section__text__p1_gettoknow "),
            hello: document.querySelector(".section__text__p1"),
            backend: document.querySelector(".section__text__p2"),
            downloadCV: document.querySelector(".btn-container .btn-color-2"),
            getInTouch: document.querySelector(".title"),
            HTresExperiencia: document.querySelector(".htres-experiencia"),
            HTresEducacion: document.querySelector(".htres-educacion"),
            masDosAnios: document.querySelector(".masDosAnios"),
            TercerAnioEstudiante:document.querySelector(".TercerAnioEstudiante"),
            pAboutMe:document.querySelector(".p-about-me"),
            exploreMy:document.querySelector(".section__text__p1_exploremy"),
            browseMy:document.querySelector(".section__text__p1_browse"),
            projectsTwo:document.querySelector(".title-projects"),
            getInTouch:document.querySelector(".section__text__p1_get_in_touch"),
            contactMe:document.querySelector(".title-contact"),
        };

        for (const key in elements) {
            const element = elements[key];
            if (element) {
                if (element instanceof NodeList) {
                    element.forEach(el => {
                        el.textContent = translations[lang][key];
                    });
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        }

        // Actualizar el texto de cada botón de idioma
        langToggles.forEach(btn => {
            btn.textContent = lang === "en" ? "ES" : "EN";
        });
    }

    // Cargar el tema guardado
    let savedTheme = localStorage.getItem("theme") || "light";
    body.classList.toggle("dark-mode", savedTheme === "dark");
    updateThemeIcon(savedTheme);
    updateThemeImages(savedTheme);

    // Cargar el idioma guardado
    let currentLang = localStorage.getItem("lang") || "en";
    updateLanguage(currentLang);

    // Agregar listener a cada botón de tema
    themeToggles.forEach(btn => {
        btn.addEventListener("click", () => {
            let isDark = body.classList.toggle("dark-mode");
            let theme = isDark ? "dark" : "light";
            localStorage.setItem("theme", theme);
            updateThemeIcon(theme);
            updateThemeImages(theme);
        });
    });

    // Agregar listener a cada botón de idioma
    langToggles.forEach(btn => {
        btn.addEventListener("click", () => {
            currentLang = currentLang === "en" ? "es" : "en";
            localStorage.setItem("lang", currentLang);
            updateLanguage(currentLang);
        });
    });

    // Función para el menú hamburguesa
    window.toggleMenu = function() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
});

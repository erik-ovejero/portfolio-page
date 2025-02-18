// Al inicio del script.js
let savedTheme = localStorage.getItem("theme") || "light";
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const langToggle = document.getElementById("lang-toggle");
    const body = document.body;
    


// Función para actualizar imágenes
function updateThemeImages(theme) {
    document.querySelectorAll('.icon').forEach(img => {
        if (img.dataset.original && img.dataset.dark) {
            img.src = theme === "dark" ? img.dataset.dark : img.dataset.original;
        }
    });
}

    // Cargar el tema guardado
    let savedTheme = localStorage.getItem("theme") || "light";
    body.classList.toggle("dark-mode", savedTheme === "dark");
    if (themeToggle) updateThemeIcon(savedTheme);
    updateThemeImages(savedTheme);

    // Cargar el idioma guardado
    let currentLang = localStorage.getItem("lang") || "en";
    updateLanguage(currentLang);

// En el evento click del themeToggle
themeToggle.addEventListener("click", () => {
    let isDark = body.classList.toggle("dark-mode");
    let theme = isDark ? "dark" : "light";
    localStorage.setItem("theme", theme);
    updateThemeIcon(theme);
    updateThemeImages(theme);
});

    // Toggle Language
    if (langToggle) {
        langToggle.addEventListener("click", () => {
            currentLang = currentLang === "en" ? "es" : "en";
            localStorage.setItem("lang", currentLang);
            updateLanguage(currentLang);
        });
    }

    function updateThemeIcon(theme) {
        const imgSrc = theme === "dark" ? "./assets/light-mode-white.png" : "./assets/light-mode.png"; // Rutas de imágenes
        themeToggle.innerHTML = `<img src="${imgSrc}" alt="Theme Icon" width="24" height="24">`;


        
    }

    function updateLanguage(lang) {
        const translations = {
            en: {
                about: "About",
                experience: "Experience",
                projects: "Projects",
                contact: "Contact",
                hello: "Hello, I'm",
                backend: "Backend Developer",
                downloadCV: "Download CV",
                getInTouch: "Erik M Ovejero",
            },
            es: {
                about: "Sobre mí",
                experience: "Experiencia",
                projects: "Proyectos",
                contact: "Contacto",
                hello: "Hola, soy",
                backend: "Desarrollador Backend",
                downloadCV: "Descargar CV",
                getInTouch: "Erik M Ovejero",
            }
        };

        const elements = {
            about: document.querySelector("a[href='#about']"),
            experience: document.querySelector("a[href='#experience']"),
            projects: document.querySelector("a[href='#projects']"),
            contact: document.querySelector("a[href='#contact']"),
            hello: document.querySelector(".section__text__p1"),
            backend: document.querySelector(".section__text__p2"),
            downloadCV: document.querySelector(".btn-container .btn-color-2"),
            getInTouch: document.querySelector(".title"),
        };

        for (const key in elements) {
            if (elements[key]) elements[key].textContent = translations[lang][key];
        }

        if (langToggle) langToggle.textContent = lang === "en" ? "ES" : "EN";
    }
});

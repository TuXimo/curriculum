const translations = {
    es: {
        'profession-title': 'Desarrollador de Videojuegos',
        'age': 'años',
        'profile': 'Perfil',
        'profile-text': 'Como técnico profesional en desarrollo de videojuegos, poseo habilidades especializadas en el diseño, programación y producción de videojuegos. Tengo conocimientos profundos en las tecnologías y herramientas utilizadas para crear videojuegos de alta calidad, especialmente en Unity.',
        'skills-title': 'Habilidades',
        'englishlevel': 'Nivel de Inglés: intermedio',
        'programmingpractices': 'Sólidos conocimientos de buenas prácticas de programación como SOLID, Clean Code y refactorización.',
        'education-title': 'Educación',
        'education-degree': 'Técnico en Desarrollo de Videojuegos',
        'education-university': 'Universidad de Mendoza',
        'education-duration': ' (Marzo 2020 - Marzo 2023)',
        'experience-title': 'Experiencia',
        'firtsjob-title': 'Programador de videojuegos',
        'firtsjob-work': 'Mi responsabilidad en este trabajo fue programar las acciones principales del videojuego. ',
        'firtsjob-name': 'GAMAN BIT - Contrato Temporal',
        'firtsjob-duration': '(Diciembre 2022 - Febrero 2023)',
        'university-projects': 'Proyectos de Universidad:',
        'university-thesis': 'Proyectos Tesis Universidad:',
        'contact-title': 'Contactame',
        'contact-name': 'Nombre',
        'contact-message': 'Mensaje',
        'contact-send': 'Enviar',
    },
    en: {
        'profession-title': 'Game Developer',
        'age': 'years',
        'profile': 'Profile',
        'profile-text': 'As a professional game developer, I possess specialized skills in the design, programming, and production of video games. I have in-depth knowledge of technologies and tools used to create high-quality games, especially in Unity.',
        'skills-title': 'Skills',
        'englishlevel': 'English Proficiency: Intermediate',
        'programmingpractices': 'Solid knowledge of programming best practices such as SOLID, Clean Code, and refactoring.',
        'education-title': 'Education',
        'education-degree': 'Technical Degree in Game Development',
        'education-university': 'University of Mendoza',
        'education-duration': ' (March 2020 - March 2023)',
        'experience-title': 'Experience',
        'firtsjob-title': 'Game Programmer',
        'firtsjob-work': 'My responsibility in this role was to program the main actions of the video game.',
        'firtsjob-name': 'GAMAN BIT - Temporary Contract',
        'firtsjob-duration': '(December 2022 - February 2023)',
        'university-projects': 'University Projects:',
        'university-thesis': 'University Thesis:',
        'contact-title': 'Contact Me',
        'contact-name': 'Name',
        'contact-message': 'Message',
        'contact-send': 'Send',
    }
};

const lang = new URLSearchParams(window.location.search).get("lang") || "en";

if(lang === 'es' || lang ==='en')
{
    currentLanguage = lang;
}

else
{
    currentLanguage = 'en';
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    updateLanguageTexts();
    document.documentElement.lang = currentLanguage;
}

function updateLanguageTexts() {
    const languageTranslations = translations[currentLanguage];
    
    // Actualiza los textos en la página según los atributos de datos
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(element => {
        const translationKey = element.dataset.translate;
        element.innerText = languageTranslations[translationKey];
    });

    // Actualiza el texto del botón
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.innerText = currentLanguage === 'es' ? 'Es' : 'En';
}

document.addEventListener("DOMContentLoaded", function() {
    
    document.documentElement.lang = currentLanguage;
    updateLanguageTexts();
    
    document.addEventListener("DOMContentLoaded", function() {
        var url = window.location.href;
    
        if (url.includes("/es")) {
            document.documentElement.lang = "es";
        } else if (url.includes("/en")) {
            document.documentElement.lang = "en";
        } else {
            document.documentElement.lang = "es";
        }
    });
    
});


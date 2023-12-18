document.addEventListener("DOMContentLoaded", function() {
    // Cambiar el color de fondo al pasar el mouse sobre los enlaces
    const links = document.querySelectorAll('a');


    links.forEach(link => {
        let originalColor = link.style.color;

        link.addEventListener('mouseenter', () => {
            link.style.color = '#ffffff';
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = originalColor;
        });
    });
});

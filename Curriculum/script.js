document.addEventListener("DOMContentLoaded", function() {
    // Cambiar el color de fondo al pasar el mouse sobre los enlaces
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.backgroundColor = '#ecf0f1';
        });

        link.addEventListener('mouseleave', () => {
            link.style.backgroundColor = 'transparent';
        });
    });

    // Agregar un efecto de resaltado al hacer clic en los títulos
    const titles = document.querySelectorAll('h1, h2, h3');

    titles.forEach(title => {
        title.addEventListener('click', () => {
            title.style.color = '#e74c3c';
            setTimeout(() => {
                title.style.color = ''; // Restablecer el color original después de 500 ms
            }, 500);
        });
    });
});

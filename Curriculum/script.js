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


    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
    
        // Recopila los datos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
    
        // Envía los datos a Formspree
        const form = document.getElementById('contact-form');
        form.action = 'https://formspree.io/f/xbjnrode';
        form.method = 'POST';
    
        // Puedes agregar lógica de validación aquí antes de enviar el formulario
    
        // Envía el formulario
        this.submit();
    });
    
});

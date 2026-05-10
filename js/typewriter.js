/**
 * Typewriter effect for the hero section.
 * Extracted from inline script for security and maintainability.
 */
(function() {
    const texts = [
        "Bienvenido a nuestro espacio creativo.",
        "Humano e Inteligencia Artificial.",
        "Construyendo el futuro de la web.",
        "Aún en fase de desarrollo..."
    ];

    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    let isDeleting = false;

    /**
     * Core typewriter function that handles typing and deleting logic.
     */
    function type() {
        const typewriterElement = document.getElementById('typewriter');
        if (!typewriterElement) return;

        if (count === texts.length) {
            count = 0;
        }

        currentText = texts[count];

        if (isDeleting) {
            letter = currentText.slice(0, --index);
        } else {
            letter = currentText.slice(0, ++index);
        }

        typewriterElement.textContent = letter;

        let typeSpeed = 100;

        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && letter.length === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && letter.length === 0) {
            isDeleting = false;
            count++;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing effect after initial animation delay (1.5s)
    // to synchronize with the CSS fadeInUp animations.
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(type, 1500));
    } else {
        setTimeout(type, 1500);
    }
})();

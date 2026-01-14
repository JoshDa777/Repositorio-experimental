
document.addEventListener("DOMContentLoaded", function() {
    const typedText = document.getElementById('typed-text');
    let letterIndex = 0;
    
    const textToType = "Prueba API X modo programación";
    
    function typeWriter() {
        if(letterIndex < textToType.length) {
            typedText.textContent += textToType.charAt(letterIndex);
            letterIndex++;
            setTimeout(typeWriter, 150); // Tiempo entre cada letra (ms)
        }
    }

    typeWriter();
});


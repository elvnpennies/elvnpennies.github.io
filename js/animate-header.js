function animateHeader() {
    const title = document.getElementById('animated-title');
    
    // Split text into individual characters
    const text = title.textContent;
    title.innerHTML = '';
    [...text].forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        title.appendChild(span);
    });

    function updateWidth() {
        const allSpans = Array.from(title.querySelectorAll('span'));
        allSpans.forEach(span => {
            // Random width between 100 and 1200
            const width = Math.floor(Math.random() * 1200);
            span.style.fontVariationSettings = `"wdth" ${width}`;
        });
    }

    // Initial update and set interval
    updateWidth();
    setInterval(updateWidth, 1500); // Update every second
}

// Start the animation when the page loads
window.addEventListener('load', animateHeader);

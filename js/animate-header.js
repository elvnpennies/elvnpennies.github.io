function animateHeader() {
    const title = document.getElementById('animated-title');
    const titleLink = title.querySelector('a');
    
    // Split text into individual characters
    const text = titleLink.textContent.trim();
    titleLink.innerHTML = '';
    [...text].forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.fontVariationSettings = `"wdth" 100`;
        titleLink.appendChild(span);
    });

    const allSpans = Array.from(titleLink.querySelectorAll('span'));
    let index = 0;
    let increasing = true;

    function animateOneByOne() {
        const currentSpan = allSpans[index];
        const targetWidth = increasing ? 900 : 100;
        
        currentSpan.style.fontVariationSettings = `"wdth" ${targetWidth}`;
        
        if (increasing) {
            if (index < allSpans.length - 1) {
                index++;
            } else {
                increasing = false;
            }
        } else {
            if (index > 0) {
                index--;
            } else {
                increasing = true;
            }
        }
        
        setTimeout(animateOneByOne, 900);
    }

    animateOneByOne();
}

// Start the animation when the page loads
window.addEventListener('load', animateHeader);

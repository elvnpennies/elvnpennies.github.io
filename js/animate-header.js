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

    const allSpans = Array.from(title.querySelectorAll('span'));
    let index = 0; // Start with the first character
    let increasing = true; // Tracks the direction of the ping pong

    function animateOneByOne() {
        // Reset all spans to default width
        allSpans.forEach(span => {
            span.style.fontVariationSettings = `"wdth" 100`;
        });

        // Animate the current span
        const currentSpan = allSpans[index];
        currentSpan.style.fontVariationSettings = `"wdth" 1200`;

        // Determine the next index
        if (increasing) {
            index++;
            if (index >= allSpans.length) {
                index = allSpans.length - 1; // Stay at the last span
                increasing = false; // Reverse direction
            }
        } else {
            index--;
            if (index < 0) {
                index = 0; // Stay at the first span
                increasing = true; // Reverse direction
            }
        }
    }

    // Start the interval for one-by-one animation
    setInterval(animateOneByOne, 2400); // Adjust interval time for animation speed
}

// Start the animation when the page loads
window.addEventListener('load', animateHeader);

// random function...

// function animateHeader() {
//     const title = document.getElementById('animated-title');
    
//     // Split text into individual characters
//     const text = title.textContent;
//     title.innerHTML = '';
//     [...text].forEach(char => {
//         const span = document.createElement('span');
//         span.textContent = char;
//         title.appendChild(span);
//     });

//     function updateWidth() {
//         const allSpans = Array.from(title.querySelectorAll('span'));
//         allSpans.forEach(span => {
//             // Random width between 100 and 1200
//             const width = Math.floor(Math.random() * 1200);
//             span.style.fontVariationSettings = `"wdth" ${width}`;
//         });
//     }

//     // Initial update and set interval
//     updateWidth();
//     setInterval(updateWidth, 1500); // Update every second
// }

// // Start the animation when the page loads
// window.addEventListener('load', animateHeader);

function animateHeader() {
    const title = document.getElementById('animated-title');
    const titleLink = title.querySelector('a');
    
    // Split text into individual characters
    const text = titleLink.textContent;
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
        // Smoothly reset previous span
        if (index > 0 && increasing) {
            allSpans[index - 1].style.fontVariationSettings = `"wdth" 100`;
        } else if (index < allSpans.length - 1 && !increasing) {
            allSpans[index + 1].style.fontVariationSettings = `"wdth" 100`;
        }

        // Animate the current span
        const currentSpan = allSpans[index];
        currentSpan.style.fontVariationSettings = `"wdth" 1200`;

        // Determine the next index
        if (increasing) {
            index++;
            if (index >= allSpans.length) {
                index = allSpans.length - 1;
                increasing = false;
            }
        } else {
            index--;
            if (index < 0) {
                index = 0;
                increasing = true;
            }
        }
    }

    // Start the interval for one-by-one animation
    setInterval(animateOneByOne, 900); // Faster interval for smoother animation
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

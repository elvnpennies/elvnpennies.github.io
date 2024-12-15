function animateTitle() {
    const baseTitle = 'elvnpennies';
    let direction = 1;  // 1 for forward, -1 for backward
    let currentIndex = 0;
    
    function updateTitle() {
        let chars = baseTitle.split('');
        chars[currentIndex] = chars[currentIndex].toUpperCase();
        document.title = chars.join('');
        
        // Update index with ping-pong effect
        if (direction === 1 && currentIndex === baseTitle.length - 1) {
            direction = -1;
        } else if (direction === -1 && currentIndex === 0) {
            direction = 1;
        } else {
            currentIndex += direction;
        }
    }
    
    // Update every 200ms
    setInterval(updateTitle, 900);
}

// Start animation when page loads
window.addEventListener('load', animateTitle);

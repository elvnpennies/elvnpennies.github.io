document.addEventListener('DOMContentLoaded', function() {
    // Use relative path from root
    fetch('/elvnpennies.github.io/components/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });
});

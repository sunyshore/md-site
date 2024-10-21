document.addEventListener("DOMContentLoaded", () => {
    fetch('./components/sidebar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('sidebar').innerHTML = data;
            // var parser = new DOMParser();
            // var doc = parser.parseFromString(html, "text/html");
        })
        .catch(error => console.error('Error loading sidebar:', error));
});
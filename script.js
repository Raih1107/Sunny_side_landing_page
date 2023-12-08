document.addEventListener("DOMContentLoaded", function() {
    var scrollIcon = document.getElementById("scrollIcon");

    // Check if it's the first page
    if (window.location.hash === "") {
        // Show the SVG icon
        scrollIcon.style.display = "block";

        // Add a click event listener to scroll down when the SVG icon is clicked
        scrollIcon.addEventListener("click", function() {
            // You can adjust the duration and behavior as needed
            window.scrollBy({
                top: window.innerHeight,
                behavior: "smooth"
            });
        });
    } else {
        // Hide the SVG icon on pages other than the first one
        scrollIcon.style.display = "none";
    }

    // Add a scroll event listener to hide the SVG icon when scrolling down
    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            scrollIcon.style.display = "none";
        }
    });
});



// Add this JavaScript code to toggle the menu
document.getElementById('ham-menu').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'flex' ? 'none' : 'flex');
});

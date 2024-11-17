document.getElementById("user-icon").addEventListener("click", function() {
    let dropdown = document.getElementById("user-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

window.onclick = function(event) {
    if (!event.target.matches('#user-icon')) {
        document.getElementById("user-dropdown").style.display = "none";
    }
};

document.getElementById("search-bar").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        alert("Buscando: " + this.value);
    }
});

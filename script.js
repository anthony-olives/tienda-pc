document.querySelectorAll(".producto button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Producto agregado al carrito");
    });
});

// Filtrar por categorías
document.querySelectorAll(".categoria").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        let categoria = e.target.dataset.categoria;
        filtrarProductos(categoria);
    });
});

function filtrarProductos(categoria) {
    let productos = document.querySelectorAll(".producto");
    productos.forEach(producto => {
        if (categoria === "todos" || producto.classList.contains(categoria)) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }
    });
}

// Filtrar por búsqueda
document.getElementById("buscar").addEventListener("keyup", () => {
    let filtro = document.getElementById("buscar").value.toLowerCase();
    let productos = document.querySelectorAll(".producto");

    productos.forEach(producto => {
        let nombre = producto.querySelector("h2").textContent.toLowerCase();
        if (nombre.includes(filtro)) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }
    });
});

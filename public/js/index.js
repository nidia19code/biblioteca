
document
  .getElementById("clienteForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    fetch("/clientes/registrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: e.target.nombre.value,
        direccion: e.target.direccion.value,
        telefono: e.target.telefono.value,
        email: e.target.email.value,
      }),
    })
      .then((response) => response.text())
      .then((data) => alert(data));
  });

document
  .getElementById("libroForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    fetch("/libros/registrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo: e.target.titulo.value,
        autor: e.target.autor.value,
        isbn: e.target.isbn.value,
        categoria: e.target.categoria.value,
        cantidad: e.target.cantidad.value,
      }),
    })
      .then((response) => response.text())
      .then((data) => alert(data));
  });

document
  .getElementById("prestamoForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    fetch("/prestamos/registrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cliente_id: e.target.cliente_id.value,
        libro_id: e.target.libro_id.value,
        fecha_prestamo: e.target.fecha_prestamo.value,
      }),
    })
      .then((response) => response.text())
      .then((data) => alert(data));
  });

document
  .getElementById("devolucionForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    fetch("/prestamos/devolver", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prestamo_id: e.target.prestamo_id.value,
        fecha_devolucion: e.target.fecha_devolucion.value,
      }),
    })
      .then((response) => response.text())
      .then((data) => alert(data));
  });

function fetchClientes() {
  fetch("/clientes")
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.querySelector("#clientesTable tbody");
      tableBody.innerHTML = "";
      data.forEach((cliente) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${cliente.id}</td><td>${cliente.nombre}</td><td>${cliente.direccion}</td><td>${cliente.telefono}</td><td>${cliente.email}</td>`;
        tableBody.appendChild(row);
      });
    });
}

function fetchLibros() {
  fetch("/libros")
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.querySelector("#librosTable tbody");
      tableBody.innerHTML = "";
      data.forEach((libro) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${libro.id}</td><td>${libro.titulo}</td><td>${libro.autor}</td><td>${libro.isbn}</td><td>${libro.categoria}</td><td>${libro.cantidad}</td>`;
        tableBody.appendChild(row);
      });
    });
}

function fetchPrestamos() {
  fetch("/prestamos")
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.querySelector("#prestamosTable tbody");
      tableBody.innerHTML = "";
      data.forEach((prestamo) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${prestamo.id}</td><td>${prestamo.cliente_nombre}</td><td>${prestamo.libro_titulo}</td><td>${new Date(prestamo.fecha_prestamo).toLocaleDateString()}</td><td>${prestamo.fecha_devolucion ? new Date(prestamo.fecha_devolucion).toLocaleDateString() : ''}</td>`;
        tableBody.appendChild(row);
      });
    });
}

fetchClientes();
fetchLibros();
fetchPrestamos();

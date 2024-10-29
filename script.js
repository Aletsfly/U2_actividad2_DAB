document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const edad = parseInt(document.getElementById('edad').value.trim(), 10);

    if (nombre === '' || apellidos === '' || isNaN(edad) || edad <= 0) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }

    const infoDiv = document.getElementById('info');
    infoDiv.innerHTML = `<p>Nombre: ${nombre}</p><p>Apellidos: ${apellidos}</p><p>Edad: ${edad}</p>`;

    document.getElementById('resultado').style.display = 'block';
});

document.getElementById('cerrar').addEventListener('click', function () {
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('formulario').reset();
    document.getElementById('nombre').focus();
});

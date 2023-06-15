const accounts = [
    { nombre: "mali", saldo: 900, password: "123456" },
    { nombre: "joss", saldo: 500, password: "password" },
    { nombre: "alex", saldo: 700, password: "jkhkl" },
    { nombre: "andrea", saldo: 700, password: "123456" },
];

const form = document.querySelector('#loginForm');

/* FORMULARIO */

form.addEventListener('submit', event => {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente

    if (form.checkValidity()) {
        if (validateCredentials(form)) {
            saveToLocalStorage(form);

            /* REDIRECCIONAR */
            showLoaderAndRedirect({ url: './pages/inicio.html' }); // Muestra el loader y redirige a la página de inicio
        } else {
            showAlert({ message: 'Usuario o contraseña incorrectos' });
        }
    } else {
        event.stopPropagation(); // Evita que se propague el evento de validación
    }
});

function showLoaderAndRedirect({ url }) {
    showLoader(); // Muestra el loader al cargar la página

    setTimeout(() => {
        hideLoader(); // Oculta el loader
        form.submit(); // Envía el formulario si las credenciales son válidas
        window.location.href = url; // Redirige a la página de inicio
    }, 3000);
}


function validateCredentials({ userName, userPassword }) {
    const { value: user } = userName;
    const { value: pass } = userPassword;

    // Verifica si las credenciales coinciden con alguna cuenta del arreglo
    return accounts.some(acc => acc.nombre === user && acc.password === pass);
}

function saveToLocalStorage({ userName, userPassword }) {
    const { value: user } = userName;
    const { value: pass } = userPassword;
    const acc = accounts.find(acc => acc.nombre === user && acc.password === pass);

    // Guarda los valores en el almacenamiento local
    for (prop in acc) {
        localStorage.setItem(prop, acc[prop]);
    }
}


function showAlert({ message }) {
    alert(message);
}

/* LOADER */

function showLoader() {
    document.querySelector('#loader').classList.remove('d-none');
    document.querySelector('#loader').classList.add('overlay');
}

function hideLoader() {
    document.querySelector('#loader').classList.add('d-none');
}


function guardarInfo() {
    //guardar la información en base de datos
}

//1. Yo pueda validar un usuario y contraseña.
//2. Ingresar un monto hasta el limite que me marca y no mas sumando
//3. Retirar un monto hasta el límite y no mas. (saldo mínimo) restando
//4. Imprimir o mostrar el saldo actual


function validateCredentials(userName, userPassword) {

    // Verifica si las credenciales coinciden con alguna cuenta del arreglo
    return accounts.some(acc => acc.nombre === userName && acc.password === userPassword);

    /* for (let i=0; i<accounts.length; i++) {
        const bandera = accounts[i].nombre===userName && accounts[i].password===userPassword;
    }
    return bandera; */
}
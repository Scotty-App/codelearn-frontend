// ===========================
// Scotty App - JavaScript
// ===========================


// ── Menú hamburguesa ────────────────────────────

var btnMenu     = document.getElementById("btnMenu");
var menuMovil   = document.getElementById("menuMovil");
var iconoAbrir  = document.getElementById("iconoAbrir");
var iconoCerrar = document.getElementById("iconoCerrar");

btnMenu.addEventListener("click", function () {
  if (menuMovil.classList.contains("hidden")) {
    menuMovil.classList.remove("hidden");
    iconoAbrir.classList.add("hidden");
    iconoCerrar.classList.remove("hidden");
  } else {
    cerrarMenu();
  }
});

function cerrarMenu() {
  menuMovil.classList.add("hidden");
  iconoAbrir.classList.remove("hidden");
  iconoCerrar.classList.add("hidden");
}

// Cerrar menú al hacer scroll
window.addEventListener("scroll", cerrarMenu);


// ── Mini juegos / Quiz ──────────────────────────

// Llevamos la cuenta de respuestas correctas
var aciertos = 0;
var respuestas = 0;
var totalPreguntas = 6; // HTML, CSS, JS, Python, PHP, SQL

function responder(botonPulsado, idJuego, resultado) {

  // Deshabilitar todos los botones de esa carta
  var carta = document.getElementById("quiz-" + idJuego);
  var botones = carta.querySelectorAll(".quiz-btn");

  botones.forEach(function (btn) {
    btn.disabled = true;
  });

  // Marcar el botón pulsado
  if (resultado === "correcta") {
    botonPulsado.classList.add("correcta");
  } else {
    botonPulsado.classList.add("incorrecta-marcada");
    // Resaltar la correcta para que el usuario la vea
    botones.forEach(function (btn) {
      if (btn.getAttribute("onclick").includes("'correcta'")) {
        btn.classList.add("correcta");
      }
    });
  }

  // Mostrar mensaje de feedback
  var feedback = document.getElementById("feedback-" + idJuego);
  feedback.classList.remove("hidden");
  feedback.classList.add("aparecer");

  if (resultado === "correcta") {
    feedback.textContent = "Correcto. Bien hecho.";
    feedback.classList.add("bien");
    aciertos++;
  } else {
    feedback.textContent = "Incorrecto. La respuesta correcta está marcada en verde.";
    feedback.classList.add("mal");
  }

  respuestas++;

  // Cuando el usuario haya respondido todas las preguntas
  if (respuestas === totalPreguntas) {
    mostrarPuntuacion();
  }
}

function mostrarPuntuacion() {
  var div = document.getElementById("puntuacion-total");
  var texto = document.getElementById("texto-puntuacion");
  var sub = document.getElementById("sub-puntuacion");

  div.classList.remove("hidden");
  div.classList.add("aparecer");

  if (aciertos === 6) {
    texto.textContent = "Puntuacion perfecta!";
    sub.textContent = "6 de 6 correctas. Eres un crack.";
  } else if (aciertos >= 4) {
    texto.textContent = "Muy bien hecho!";
    sub.textContent = aciertos + " de 6 correctas. Sigue asi.";
  } else if (aciertos >= 2) {
    texto.textContent = "Vas por buen camino.";
    sub.textContent = aciertos + " de 6 correctas. Aun queda por aprender.";
  } else {
    texto.textContent = "Toca estudiar.";
    sub.textContent = aciertos + " de 6 correctas. Scotty te ensenara todo.";
  }
}


// ── Validación del formulario ───────────────────

var formulario = document.getElementById("formularioRegistro");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  var nombre   = document.getElementById("nombre");
  var email    = document.getElementById("email");
  var password = document.getElementById("password");

  var errorNombre   = document.getElementById("errorNombre");
  var errorEmail    = document.getElementById("errorEmail");
  var errorPassword = document.getElementById("errorPassword");

  var hayErrores = false;

  // Validar nombre
  if (nombre.value.trim().length < 3) {
    errorNombre.classList.remove("hidden");
    nombre.classList.add("error");
    nombre.classList.remove("valido");
    hayErrores = true;
  } else {
    errorNombre.classList.add("hidden");
    nombre.classList.remove("error");
    nombre.classList.add("valido");
  }

  // Validar email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    errorEmail.classList.remove("hidden");
    email.classList.add("error");
    email.classList.remove("valido");
    hayErrores = true;
  } else {
    errorEmail.classList.add("hidden");
    email.classList.remove("error");
    email.classList.add("valido");
  }

  // Validar contraseña
  if (password.value.length < 8) {
    errorPassword.classList.remove("hidden");
    password.classList.add("error");
    password.classList.remove("valido");
    hayErrores = true;
  } else {
    errorPassword.classList.add("hidden");
    password.classList.remove("error");
    password.classList.add("valido");
  }

  // Si todo está bien, mostrar éxito
  if (!hayErrores) {
    document.getElementById("mensajeExito").classList.remove("hidden");
    document.getElementById("mensajeExito").classList.add("aparecer");
    formulario.reset();
    nombre.classList.remove("valido");
    email.classList.remove("valido");
    password.classList.remove("valido");
  }
});

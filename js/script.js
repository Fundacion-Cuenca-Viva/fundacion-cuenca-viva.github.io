// Fundación Cuenca Viva — interacciones básicas

document.addEventListener('DOMContentLoaded', () => {
  // Menú móvil
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('abierto');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => nav.classList.remove('abierto'));
    });
  }

  // Selección de monto de donación
  const opciones = document.querySelectorAll('.monto-opcion');
  const montoInput = document.querySelector('#monto-personalizado');

  opciones.forEach((btn) => {
    btn.addEventListener('click', () => {
      opciones.forEach((b) => b.classList.remove('activo'));
      btn.classList.add('activo');
      if (montoInput) montoInput.value = btn.dataset.monto || '';
    });
  });

  // Formulario de contacto (demo: no hay backend conectado todavía)
  const form = document.querySelector('#form-contacto');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Gracias por escribirnos! Este formulario es una demostración: conéctalo a tu correo o a un servicio como Formspree para recibir los mensajes.');
      form.reset();
    });
  }

  // Header con sombra al hacer scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 6px 20px rgba(15,46,40,0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  // Año dinámico en el footer
  const anio = document.querySelector('#anio-actual');
  if (anio) anio.textContent = new Date().getFullYear();
});

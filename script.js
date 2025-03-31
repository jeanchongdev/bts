// Inicializar AOS (Animate On Scroll)
AOS.init({
  duration: 1000, // Duración de las animaciones
  once: false,    // Permite que las animaciones se repitan
  offset: 200     // Distancia desde la parte superior para activar la animación
});

// Función para manejar la visibilidad de la información del integrante
document.querySelectorAll('.member-card').forEach(card => {
  card.addEventListener('click', () => {
    const info = card.querySelector('.member-info');
    // Cerrar cualquier otro info abierto
    document.querySelectorAll('.member-info').forEach(otherInfo => {
      if (otherInfo !== info) {
        otherInfo.style.display = 'none';
        otherInfo.classList.remove('animate__fadeInUp');
      }
    });

    // Alternar la visibilidad del info actual
    if (info.style.display === 'block') {
      info.style.display = 'none';
      info.classList.remove('animate__fadeInUp');
    } else {
      info.style.display = 'block';
      info.classList.add('animate__fadeInUp');
    }
  });
});

// Cerrar la descripción al hacer clic fuera de las tarjetas
document.addEventListener('click', (e) => {
  if (!e.target.closest('.member-card')) {
    document.querySelectorAll('.member-info').forEach(info => {
      info.style.display = 'none';
      info.classList.remove('animate__fadeInUp');
    });
  }
});


// Actualizar las animaciones manualmente en caso de que AOS no se dispare automáticamente
window.addEventListener('scroll', () => {
  AOS.refresh();
});

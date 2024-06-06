$(document).ready(function() {
    // Seleccionar todos los botones que controlan colapsables
    const toggleButtons = $('[data-toggle="collapse"]');

    toggleButtons.each(function() {
        const button = $(this);
        const targetId = button.data("target");
        const targetElement = $(targetId);

        // Inicialmente establece el texto del botón según el estado colapsable
        if (targetElement.hasClass("show")) {
            button.html('Ver menos <i class="fas fa-chevron-up"></i>');
        } else {
            button.html('Ver más <i class="fas fa-chevron-down"></i>');
        }

        // Evento de colapso abierto
        targetElement.on('shown.bs.collapse', function () {
            button.html('Ver menos <i class="fas fa-chevron-up"></i>');
        });

        // Evento de colapso cerrado
        targetElement.on('hidden.bs.collapse', function () {
            button.html('Ver más <i class="fas fa-chevron-down"></i>');
        });
    });
});

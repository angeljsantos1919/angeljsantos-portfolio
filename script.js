document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    // Asignar imágenes de fondo al cargar y aplicar animación de entrada
    projectItems.forEach((item, index) => { // Añadimos 'index' para el retardo escalonado
        const imageUrl = item.getAttribute('data-image');
        if (imageUrl) {
            item.style.backgroundImage = `url('${imageUrl}')`;
        }

        // NUEVO: Añadir la clase 'visible' con un retardo escalonado
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 100); // Retardo de 100ms entre cada item
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // NUEVO: Al filtrar, re-aplicar la animación si es necesario
            let visibleCount = 0; // Para el retardo escalonado al filtrar
            projectItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');

                if (filterValue === 'all' || categories.includes(filterValue)) {
                    item.style.display = 'flex';
                    // NUEVO: Quitar y volver a añadir la clase para que la animación se repita al mostrarse
                    item.classList.remove('visible'); // Primero la quitamos
                    // Forzar un "reflow" para que el navegador "vea" el cambio antes de volver a añadirla
                    void item.offsetWidth; // Truco para forzar reflow (lee la propiedad offsetWidth)
                    setTimeout(() => {
                        item.classList.add('visible'); // Luego la añadimos con un retardo
                    }, visibleCount * 100); // Retardo para efecto cascada al filtrar
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                    item.classList.remove('visible'); // Ocultar y remover la clase visible
                }
            });
        });
    });
});
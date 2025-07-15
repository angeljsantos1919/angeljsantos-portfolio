document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    // **NUEVA FUNCIÓN: Asignar imágenes de fondo al cargar**
    projectItems.forEach(item => {
        const imageUrl = item.getAttribute('data-image');
        if (imageUrl) {
            item.style.backgroundImage = `url('${imageUrl}')`;
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' '); // Get all categories for an item

                if (filterValue === 'all' || categories.includes(filterValue)) {
                    item.style.display = 'flex'; // Cambiado de 'block' a 'flex' para mantener el centrado
                } else {
                    item.style.display = 'none'; // Hide the item
                }
            });
        });
    });
});
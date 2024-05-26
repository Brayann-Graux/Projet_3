// scripts.js
document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementsByClassName('close-btn')[0];

    // Ouvrir la fenêtre modale
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Fermer la fenêtre modale
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fermer la fenêtre modale en cliquant en dehors du contenu
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// 1. CIBLER
const themeButton = document.querySelector('#theme-toggle');

// On vérifie si le bouton existe sur la page actuelle
if (themeButton) {
  // 2. ÉCOUTER
  themeButton.addEventListener('click', () => {
    // 3. MANIPULER
    // On ajoute/retire la classe 'dark-mode' sur le body
    document.body.classList.toggle('dark-mode');
  });
}
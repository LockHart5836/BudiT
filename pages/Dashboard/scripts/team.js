// team.js
document.getElementById('goBackBtn').addEventListener('click', function() {
    // Navigate back to the previous page
    window.location.href = '/index.html';
});

// ==== LOADING SCREEN
let spinner = document.querySelector('.loader-overlay');

window.addEventListener('load', () => {
  spinner.parentElement.removeChild(spinner);
});

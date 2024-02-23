    
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const icon = document.querySelector('.icon');
    const toggleMode = document.querySelector('.toggle-mode');

    icon.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        toggleMode.innerHTML = body.classList.contains('dark-mode') ? '🌙' : '☀️';
    });
});

function openVideo(videoId) {
    var url = 'https://youtu.be/6i723ZKdPio?si=hpW3RjKRL9mrnMmQ' + videoId;
    window.open(url, '_blank');
}
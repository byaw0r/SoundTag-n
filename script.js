document.getElementById('soundButton').addEventListener('click', function() {
    var audio = document.getElementById('sound');
    var button = this;

    // Добавляем класс для анимации
    button.classList.add('clicked');

    // Удаляем класс после завершения анимации
    button.addEventListener('animationend', function() {
        button.classList.remove('clicked');
    }, { once: true });

    // Если звук ещё не воспроизводится, запускаем его
    if (audio.paused) {
        audio.loop = true; // Включаем бесконечное воспроизведение
        audio.play(); // Запускаем звук
    }
});
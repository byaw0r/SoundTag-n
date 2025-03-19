// Получаем элементы
const soundButton = document.getElementById('soundButton');
const imageWrapper = document.getElementById('imageWrapper');
const audio = document.getElementById('sound');

// Флаг для отслеживания воспроизведения звука
let isPlaying = false;

// Функция для воспроизведения звука и анимации
function playSoundAndAnimate() {
    // Добавляем класс для анимации фото
    soundButton.classList.add('clicked');

    // Добавляем класс для анимации рамки
    imageWrapper.classList.add('clicked');

    // Удаляем классы после завершения анимации
    soundButton.addEventListener('animationend', function () {
        soundButton.classList.remove('clicked');
    }, { once: true });

    imageWrapper.addEventListener('animationend', function () {
        imageWrapper.classList.remove('clicked');
    }, { once: true });

    // Если звук уже воспроизводится, ничего не делаем
    if (isPlaying) return;

    // Воспроизводим звук
    audio.currentTime = 0; // Сбрасываем время воспроизведения
    audio.loop = true; // Включаем бесконечное воспроизведение
    audio.play(); // Запускаем звук

    // Устанавливаем флаг, что звук воспроизводится
    isPlaying = true;

    // Сбрасываем флаг после завершения звука (если loop отключён)
    audio.addEventListener('ended', function () {
        isPlaying = false;
    }, { once: true });
}

// Обработчик клика на фото
soundButton.addEventListener('click', playSoundAndAnimate);

// Обработчик клика на рамку
imageWrapper.addEventListener('click', playSoundAndAnimate);

// Сброс флага, если звук остановлен вручную
audio.addEventListener('pause', function () {
    isPlaying = false;
});
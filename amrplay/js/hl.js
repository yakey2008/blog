window.onload = function () {
    var button = document.getElementById('js-play');
    var amr = document.getElementById('js-amr');

    var sound = new Howl({
        src: ['./src/SleepAway.mp3']
    });

    button.addEventListener('click', function () {
        sound.play();
    });

}
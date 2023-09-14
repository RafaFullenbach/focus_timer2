import * as sounds from './sounds.js';
import state from './state.js';
import * as timer from './timer.js'

export function toogleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');

    timer.countdown();

    sounds.buttonPress.play();
}

export function reset() {
    state.isRunning = false;

    state.isRunning = document.documentElement.classList.remove('running');

    timer.updateDisplay();

    sounds.buttonPress.play();
}

export function set(action) {
    if (action === 'Incrementar 5 minutos') {
        timer.incrementOrDecrement("+")
    } else {
        timer.incrementOrDecrement("-")
    }

    sounds.buttonPress.play();
}

export function toogleMusic(path) {
    let words = path.split(' ');
    let words2 = path;

    if (words.length > 1) {
        words.splice(1, 1);
    }

    const card = document.querySelector(`.${words}`);

    card.classList.toggle('selected');

    switch (words2) {
        case 'forest-path1':
            sounds.forestAudio.play();
            break;
        case 'forest-path1 selected':
            sounds.forestAudio.pause();
            break;
        case 'rain-path1':
            sounds.rainAudio.play();
            break;
        case 'rain-path1 selected':
            sounds.rainAudio.pause();
            break;
        case 'coffee-path1':
            sounds.coffeeAudio.play();
            break;
        case 'coffee-path1 selected':
            sounds.coffeeAudio.pause();
            break;
        case 'fireplace-path1':
            sounds.firePlaceAudio.play();
            break;
        case 'fireplace-path1 selected':
            sounds.firePlaceAudio.pause();
            break;
    }

}


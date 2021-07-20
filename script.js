import { playSound } from './componentes/playSound.js';
import { playComposition } from './componentes/playComposition.js';

document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if (song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

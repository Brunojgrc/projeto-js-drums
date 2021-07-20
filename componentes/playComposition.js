import { playSound } from "./playSound.js";

export function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`)
        }, wait);

        wait += 250;
    }
};


export function playSound(sound) { //Função tocar o som
    let audioElement = document.querySelector(`#s_${sound}`); // pegar o som 
    let keyElement = document.querySelector(`div[data-key=${sound}]`); // pegar a tecla

    if (audioElement) { // aplicando o if para checar as tecla válidas
        audioElement.currentTime = 0; // zerando o som a cada keyup
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active'); // aplica as caracteristicas do CSS da classe active
    }

    setTimeout(() => {
        keyElement.classList.remove('active'); // remove as caracteristicas do CSS da classe active após 300ms.
    }, 300);
};
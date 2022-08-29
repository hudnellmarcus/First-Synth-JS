// Initializing Audio Context in WebAudio API//////

let AudioContext = window.AudioContext || window.webkitAudioContext;

const context = new AudioContext; 

/////// MASTER VOLUME CONTROL ////////////////////
const masterVolume = context.createGain();
masterVolume.connect(context.destination);

/////// OSCILLATOR SOUND SOURCE ///////////////////
const oscillator = context.createOscillator(); 
oscillator.frequency.setValueAtTime(220, 0);
oscillator.connect(masterVolume); 


///// ELEMENT SELECTIONS /////////////
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const volumeControl = document.querySelector('#volume-control');
masterVolume.gain.value = .1; 
const waveforms = document.getElementsByName('waveform'); 

let waveform;

//// EVENT LISTENERS ///////////////////
volumeControl.addEventListener('input', changeVolume); 


function changeVolume() {
    masterVolume.gain.value = this.value; 
}

function setWaveform() {
    for (let i = 0; i < waveforms.length; i++) {
        if(waveforms[i].checked){
            waveform = waveforms[i].value;
        }
    }
}
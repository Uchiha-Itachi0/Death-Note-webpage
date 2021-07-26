let audio_boku = document.querySelector("audio.boku");
let audio_laugh = document.querySelector("audio.laugh")
let card = document.querySelector(".card");
let btn = document.querySelector(".button-container .btn");
let slider1 = document.querySelector('.slider-1');
let slider2 = document.querySelector('.slider-2');

card.addEventListener("mouseenter", Play);
card.addEventListener("mouseleave", Stop);
btn.addEventListener("click", Slide);

function Play(){
    audio_boku.currentTime = 0;
    audio_boku.play();
}

function Stop(){
    audio_boku.pause();
}

function Slide(){
    slider1.classList.toggle("active");
    slider2.classList.toggle("active");
    audio_laugh.play();
}
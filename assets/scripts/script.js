const bar = document.querySelector('#bar');
const menu = document.querySelector('.menu');
let menuOpen = 0; //Variável para controlar se o menu já está aberto ou não

let imgs = []; // Vetor que armazena as imagens precarregadas
let imgTotal;
let img;
let slider = document.querySelector(".slide");

bar.addEventListener('click', function () {
    if (!menuOpen) {
        menu.style.display = "inline";
        menuOpen = 1;
    }else {
        menu.style.display = "none";
        menuOpen = 0;
    }
});


//Menu slider
function preLoad() {
    let total = 3;
    let contador = 1;
    for (let i = 0; i < total; i++) {
        imgs[i] = new Image();
        imgs[i].src = "assets/images/capa"+contador+".jpg";
        contador++;
    }
}

function loadImg(img) {
    slider.style.backgroundImage = "url('"+imgs[img].src+"')";
}

function startSlider() {
    preLoad();
    img = 0;
    imgTotal = imgs.length - 1;
    loadImg(img);

    let tmp = setInterval(switchImg, 3000);
}

function switchImg() {
    img++;
    if(img>imgTotal) {
        img = 0;
    }
    loadImg(img);
}

window.addEventListener('load', startSlider);

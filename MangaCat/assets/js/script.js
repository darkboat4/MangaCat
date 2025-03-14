var carrosel_imgs = document.querySelectorAll(".container-carrosel");

let cont = 0;

function carrosel(){
    var imgs= ["assets/img/banner-jujutsu-kaisen.png","assets/img/banner-haikyu.png","assets/img/wallpaper-cat.png","assets/img/banner-soloLevel.png"];
    cont++
    if(cont<imgs.length){
        cont = 0;
    }
    carrosel_imgs.forEach(function(img) {
        img.style.backgroundImage = `url(${imgs[cont]})`;
    });
}

setInterval(carrosel, 500);
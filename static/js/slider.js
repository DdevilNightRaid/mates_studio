var slideImg = document.getElementById('slideImg');

var images = new Array(
    "../static/imgs/imgs_for_webDev/screenshots/project1.png",
    "../static/imgs/imgs_for_webDev/screenshots/project2.png",
    "../static/imgs/imgs_for_webDev/screenshots/project3.png",
    "../static/imgs/imgs_for_webDev/screenshots/project4.png"
)
var len = images.length;
var i = 0;
function slider(){
    if (i > len-1) {
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}
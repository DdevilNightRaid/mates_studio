// Constants
var hamburger = document.getElementById('hame');
var mainCon = document.getElementById('mainContainer');
var modata = document.getElementById('mdata');
var foot = document.getElementById('foot')
function showHide() {
    if (mainCon.style.display === "flex") {
        mainCon.style.display = 'none';
        modata.style.display = "flex";
        hamburger.src ='../static/imgs/close-icon.svg';
        foot.style.display = 'none';
    } else {
        mainCon.style.display = "flex";
        modata.style.display = "none";
        hamburger.src ='../static/imgs/hamburger.svg'
        foot.style.display = 'flex';
    }
}
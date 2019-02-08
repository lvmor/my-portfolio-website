let projectImg = ["images/img1.png", "images/img2.png", "images/img3.png"];
const time = 3000;
let i = 0

function imgChange(){
  document.slide.src = projectImg[i];
  if(i < projectImg.length - 1){
    i++;
  } else {
    i = 0;
  }
  setTimeout("imgChange()", time);
}

window.onload = imgChange;
//https://www.youtube.com/watch?v=4YQ4svkETS0&t=211s
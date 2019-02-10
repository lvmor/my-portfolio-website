let projectImg = ["images/sample-img1.jpg", "images/sample-img2.jpg", "images/sample-img3.jpg"];
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


//carousel image to enlarge in a lightbox when the user clicks on it

$(".projImg").on("click", function (){
  if($(this).width() == 500) {
    $(this).width(214);
  } else {
    $(this).width(500); //asign variable for emsize
  }
});


//clicking anywhere on the screen when the lightbox is open should close the lightbox.
function handlePrevious(){
  i--;
  if(i == -1) {
    i = projectImg.length - 1;
  }
  console.log('previous clicked', i);
  showImage();
}
$("#previous").on("click", handlePrevious);

$("#next").on("click", function (){
  i++;
  if(i == projectImg.length){
    i =  0;
  }
  console.log('next clicked', i);
  showImage();
});

function showImage() {
  document.slide.src = projectImg[i];
}

// Navigation Bar
var toggleStatus = 1;
function toggleMenu() {
  if (toggleStatus === 1) {
    document.getElementById("menu").style.top = "-27em";
    toggleStatus = 0;
  } else if (toggleStatus === 0) {
    document.getElementById("menu").style.top = "0";
    toggleStatus = 1;
  }
}
// https://www.youtube.com/watch?v=gMRYEPmZf7g&t=737s

// Make images change at an interval
// let projectImg = ["images/img1.jpeg", "images/img2.jpeg", "images/img3.jpeg"];
let projectImg = ["images/highlight1.jpg", "images/highlight2.jpg", "images/highlight3.jpg"];
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

// //https://www.youtube.com/watch?v=4YQ4svkETS0&t=211s

//user can click next or prev to navigate to a particular project

$("#previous").on("click", function(){
  i--;
  if(i === -1) {
    i = projectImg.length - 1;
  }
  console.log('previous clicked', i);
  showImage();
});

$("#next").on("click", function(){
  i++;
  if(i === projectImg.length){
    i =  0;
  }
  console.log('next clicked', i);
  showImage();
});

function showImage(){
  document.slide.src = projectImg[i];
}

//testimonials
let quoteOne = `"Lourdes is a creative and open-minded individual with strong research skills that make her a dynamic team leader and team player. She can make people’s ideas feel important while also staying focused on the end goal. Working with and for Lourdes has been a humbling and unique experience.” - M. Dueñas Mary Dueñas, M.S. in Counseling, Ph.D. Student in Educational Leadership & Policy Analysis`
let quoteTwo = `"It's a rarity to find people who not only encompass true work ethic and a yearning to problem solve. Lourdes surpasses that as she produces outcomes by understanding that her work will impact those she serves. Lourdes is a multi-talented person. Her knowledge and implementation of technology interwoven with a yearning to positively impact people's lives is a rare sight." - V. Castañeda, MA Ed. Education Consultant.`;
let quoteThree = `"I’ve known Lourdes for the past 6 years. I’ve had the opportunity to work with her on a very personal level and as a part of an organization at the University of California in Irvine. She is someone that has shown great strength in being a leader, as well as a creative force when it comes to art and problem solving. Lourdes uses lateral thinking to come up with solutions to problems and situations that arise in multiple areas of her life. It has always been my pleasure to work with her and I would highly recommend anybody to work with her." - R. Aceves`;

let quotesList = [quoteOne, quoteTwo, quoteThree];
let p = 0;
const quoteTime = 5000;

function quoteChange(){
$("#mytext").html(quotesList[p]);
  if(p < quotesList.length - 1){
    p++;
  } else {
    p = 0;
  }
  setTimeout("quoteChange()", quoteTime);
}

window.onload = function() {
  imgChange();
  quoteChange();

//carousel image to enlarge in a lightbox when the user clicks on it
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var slideImage = document.getElementById("slideImage");

  // Get the <span> element that closes the modal
  var spanClose = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  slideImage.onclick = function() {
    document.slideModal.src = document.slide.src; // assigns image
    modal.style.display = "block"; // displays modal

  }

  // When the user clicks on <span> (x), close the modal
  spanClose.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
//clicking anywhere on the screen when the lightbox is open should close the lightbox.
};








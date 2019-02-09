// let projectImg = ["images/img1.png", "images/img2.png", "images/img3.png"];
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

let quoteOne = "Bonbon icing tiramisu ice cream candy cupcake pastry chocolate bar. Candy gummies marshmallow cake dessert candy tart chocolate. Ice cream danish macaroon carrot cake topping chocolate bar jujubes. Fruitcake toffee sweet roll gummi bears cupcake icing chupa chups."
let quoteTwo = "Carrot cake gingerbread jujubes sweet roll. Liquorice sugar plum cookie cake cheesecake oat cake sweet lollipop. Biscuit sesame snaps donut jujubes tiramisu halvah soufflé carrot cake."
let quoteThree = "Ricotta everyone loves bavarian bergkase. Boursin red leicester cheese on toast hard cheese goat pecorino lancashire feta. Fromage dolcelatte cheese on toast cheddar croque monsieur hard cheese cut the cheese squirty cheese. Dolcelatte roquefort."
let quotes = [quoteOne, quoteTwo, quoteThree];

// const timequote = 4000;
// let i = 0


// function quoteChange(){
//   document.quoteslide = quotes[i];
//   if(i < quotes.length - 1){
//     i++;
//   } else {
//     i = 0;
//   }
//   setTimeout("quoteChange()", timequote);
// }



// window.onload = quoteChange;

// $('#elvis button').on('mouseenter', function() {
//   $('#elvis p').html('Elvis has entered the building!');
//   $('#elvis img').fadeIn(350);
// });

// $()

// $(".quoteslide").html(quoteOne);
// $(".quoteslide").fadeOut(350);

// function quoteChange(){
//   if(i < quotes.length - 1){
//     i++;
//   } else {
//     i = 0;
//   }

// }

// window.onload = imgChange;
// //https://www.youtube.com/watch?v=4YQ4svkETS0&t=211s


// $("#someId").html("hello").slideDown('slow');
// $('#someID').html("hello").animate({
//   left: '+=50',
// }, 1000, function() {
//   // Animation complete.
// })

// var project = ["images/sample-img1.jpg", "images/sample-img2.jpg", "images/sample-img3.jpg"];
// var currentTimerID = null;

// $(document).ready(function(){
// $(".projImg").attr("src", "images/sample-img1.jpg");
//   $(".btn-1").on("click", function(){
//     $(".projImg").attr("src", "images/sample-img1.jpg");
//   })//end of button 1 func
//   $(".btn-2").on("click", function(){
//     $(".projImg").attr("src", "images/sample-img2.jpg");
//   })//end of button 2 func
//   $(".btn-3").on("click", function(){
//     $(".projImg").attr("src", "images/sample-img3.jpg");
//   })//end of button 3 func
// })//end of ready func


    // for(let i=0; i < project.length; i++){
    //   console.log(project[i]);
    //   console.log("loop works");
    //   // document.write(project[i] + "</br>");
    //   $("")
    // };
// $(".content").append(`<div>${project[0]}</div>`);



// function sayHi(){
//   console.log("test");
// }  if(currentTimerID === null){
//   currentTimerID = setInterval(sayHi, 1000);
// }
// $("#start").click(function(){
//   if(currentTimerID === null){
//     currentTimerID = setInterval(sayHi, 1000);
//   }
// });
// $("#stop").click(function(){
//   clearInterval(currentTimerID);
//   currentTimerID = null;
// });




// for (let i=0; i < project.length; i++){
//     if(i=0){
//         $(".testimonial-box").append(quotes[0]);
//     }
//     else if (i = 1){
//         $(".testimonial-box").append(quotes[1]);
//     }
//     else {
//         $(".testimonial-box").append(quotes[2]);
//     }
// }

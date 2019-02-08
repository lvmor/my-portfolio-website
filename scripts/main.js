var project = ["images/sample-img1.jpg", "images/sample-img2.jpg", "images/sample-img3.jpg"];
var currentTimerID = null;

$(document).ready(function(){
$(".projImg").attr("src", "images/sample-img1.jpg");
	$(".btn-1").on("click", function(){
		$(".projImg").attr("src", "images/sample-img1.jpg");
	})//end of button 1 func
	$(".btn-2").on("click", function(){
		$(".projImg").attr("src", "images/sample-img2.jpg");
	})//end of button 2 func
	$(".btn-3").on("click", function(){
		$(".projImg").attr("src", "images/sample-img3.jpg");
	})//end of button 3 func
})//end of ready func


    // for(let i=0; i < project.length; i++){
    //   console.log(project[i]);
    //   console.log("loop works");
    //   // document.write(project[i] + "</br>");
    //   $("")
    // };
// $(".content").append(`<div>${project[0]}</div>`);



function sayHi(){
  console.log("test");
}  if(currentTimerID === null){
  currentTimerID = setInterval(sayHi, 1000);
}
$("#start").click(function(){
  if(currentTimerID === null){
    currentTimerID = setInterval(sayHi, 1000);
  }
});
$("#stop").click(function(){
  clearInterval(currentTimerID);
  currentTimerID = null;
});

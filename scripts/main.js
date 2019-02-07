var project = [1, 2, 3];

$(document).ready(function() {
  // console.log('test')
  $("button").on("click", function(){
    console.log("it works");
    console.log(project[0]);
    $(".content").html(`<div>${project[0]}</div>`);
    $(".projImg").attr("src", "images/sample-img.jpg");

    for(let i=0; i < project.length; i++){
      console.log(project[i]);
      console.log("loop works");
      // document.write(project[i] + "</br>");
      $("")
    };
});

});

// $("#box1").on("click", function () {
// 	$(".moto").attr("src", "images/moto.jpg");


// $(".content").append(`<div>${project[0]}</div>`);

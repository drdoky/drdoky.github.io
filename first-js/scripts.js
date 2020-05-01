// Third part:

$(".elso").text("This is done by <em>JavaScript!</em>");
$(".masodik").html("This is done by <em>JavaScript!</em>");
$("h2").toggleClass("blue");

function AddPara(ftext) {
  if ($("p").length < 5) {
    if ((typeof ftext) != "string") {
      ftext = "A p is append in the main.";
    }
    $("main").append("<p>" + ftext + "</p>");
  } else {
    console.log("We reached the max (5) paragraph number!");
  }
  $("p").css("border", "1px solid red");
  $("p").css("padding", "10px");
}

function AddLike () {
  $("#numberOfLikes").text(parseInt($("#numberOfLikes").text()) + 1);
}

AddPara("Első szöveg");
AddPara("Második szöveg");

$("#add").click(AddPara);
$("#remove").click(function () {
  $("p:last-child").remove();
});

$("#like").click(AddLike);

let colors = ["orange", "yellow", "blue", "lime", "magenta", "limegreen"];

// $("#box-container").append("<div class='box'></div>");
// $(".box:last-child").css("background", colors[0]);
colors.forEach(function (ccolor) {
  $("#box-container").append("<div class='box'></div>");
  $(".box:last-child").css("background", ccolor);
});

for (let i = 0; i < 100; i++) {
  console.log("(" + (i + 1) + ") Nem fogok csalni a vizsgán!");
}

console.log("Script file is loaded.");

// Single line comment

/*
  Multiple
  lines
  of comments
*/
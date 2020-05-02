let names = ["Béla", "Jóska", "Elemér", "Anita", "Györgyi", "Krisztina", "Gábor", "Viktória"];

names.forEach(function(name) {
  $("ul").append("<li>" + name + "</li>");
  if (name === "Gábor") {
    $("li:last-child").css("font-weight", "bold");
  }
});

let addBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!"
}

$("body").append("<div></div>");
$("div:last-child").toggleClass("last");
$(".last").append("<h1>" + addBlock.title + "</h1>");
$(".last").append("<p>" + addBlock.text + "</p>");

$("#first").click(() => {
  console.log("Igen, rámklikkeltél!");
});

$("#second").click(() => {
  $("#first").text("Első gomb - " + (0|Math.random()*6.04e7).toString(36));
});

$("#third").one("click" ,() => {
  $("button").css("background", $("#color").val());
  $("#color").hide();
  $("#third").hide();
});

let add;

$("#inc, #dec").click((event) => {
  switch ($(event.target).attr("id")) {
    case "inc":
      add = 1;
      break;
    case "dec":
      add = -1;
      break;
  }
  $("#cValue").text(parseInt($("#cValue").text()) + add);
});
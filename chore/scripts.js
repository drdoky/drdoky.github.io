const doorPaths = [
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg",
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg",
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg",
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"
];

var numClosedDoors = 3;
var numDoors = 3;
var inGame = false;
var doors = doorPaths.slice(0, 4);

$('.door-row').hide();

$("#start").on("click", function(event) {
  inGame = true;
  $('.door-row').show(700);
  $(event.target).hide(200);
});

$(".door-frame").on("click", function(event) {
  $self = $(event.target);
  if ($self.hasClass("opened")) { return; }
  $self.attr("src", getRandDoor());
  numClosedDoors--;
  $self.addClass("opened");
  if ($self.attr("src") === doorPaths[2]) {
    gameOver("lose");
  }
  if (numClosedDoors == 1) {
    gameOver("win");
  }
});

var getRandDoor = function () {
  let doorIdx = -1;
  do {
    let temp = Math.floor(Math.random() * numDoors);
    if (doors[temp] !== "") {
      doorIdx = temp;
    }
  } while (doorIdx === -1);
  let path = doors[doorIdx];
  doors[doorIdx] = "";
  return path;
};

function gameOver(status) {
  switch (status) {
    case "win":
      $("#start").text("You win! Play again?");
      break;
    case "lose":
      $("#start").text("Game Over! Play again?");
      break;
    default:
      break;
  }
  resetGame();
  $('.door-row').delay(1500).toggle(850);
  $("#start").show();
};

function resetGame() {
  $(".opened").removeClass("opened");
  setTimeout(function () {
    $(".door-frame").attr("src", doorPaths[3]);
  }, 1500);
  doors = doorPaths.slice(0, 4);
  inGame = false;
  numClosedDoors = 3;
};
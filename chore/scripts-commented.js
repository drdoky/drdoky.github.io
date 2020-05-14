const doorPaths = [
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg",
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg",
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg",
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"
];

var numClosedDoors = 3;  // ahány zárt ajtó van
var numDoors = 3;  // ahány ajtó van
var inGame = false;  // játékban vagyunk-e
var doors = doorPaths.slice(0, 4);  // az ajtók tömbjének másolata

$('.door-row').hide();  // elrejtjük

// kezdés:
$("#start").on("click", function(event) {
  inGame = true;  // játékban
  $('.door-row').show(700);  // ajtók megjelennek
  $(event.target).hide(200); // gomb eltűnik
});

// ajtókattintás:
$(".door-frame").on("click", function(event) {
  $self = $(event.target);  // saját element változóba, hogy egyszerűbben elérhessük
  if ($self.hasClass("opened")) { return; }  // ha tartalmazza az "opened" classt, kilépünk
  $self.attr("src", getRandDoor());  // véletlenszerű ajtó képének betöltése a kattintott ajtóba
  numClosedDoors--;  // zárt ajtók száma csökkentve
  $self.addClass("opened");  // hozzáadjuk az "opened" classt
  //ellenőrzés
  if ($self.attr("src") === doorPaths[2]) {  // ha a betöltött kép azonos a bot képével...
    gameOver("lose");  // ...vesztett
  }
  if (numClosedDoors == 1) {  // ha a nyitott ajtók száma 1...
    gameOver("win");  // ...nyert
  }
});

var getRandDoor = function () {
  let doorIdx = -1;  // doorIdx alaphelyzetbe

  // Hátultesztelő ciklus lényege: először végrehajtja a ciklusmagot
  // (tehát az _mindenképp_ lefut, _legalább_ egyszer), majd
  // ellenőrzi, hogy kiléphet-e. Ha nem, akkor visszamegy, ismételni.
  // Egyszerűen megfogalmazva:
  // Csináld/ismételd amíg... {ciklusmag} ...a feltétel nem teljesül!
  do {  // csináld/ismételd amíg...
    let temp = Math.floor(Math.random() * numDoors);  // véletlenszám
    if (doors[temp] !== "") {  // ha az ajtó még nincs törölve (azaz nincs nyitva)...
      doorIdx = temp;  // ...doorIdx beáll
    }
  } while (doorIdx === -1);  // ...a feltétel nem teljesül
  let path = doors[doorIdx];  // kimásoljuk az elérési utat
  doors[doorIdx] = "";  // töröljük a tömbben lévőt (nyitva)
  return path;  // visszatérünk a betöltendő útvonallal
};

// játék vége kezelése
function gameOver(status) {
  switch (status) {  // több elágazást lehetővé tevő szerkezet
    case "win":  // nyer opció
      $("#start").text("You win! Play again?");  // nyerő szöveg a gombra
      break;  // switch megszakítása (fontos, különben továbbmegy, és végrehajtja a következő feltétel kódját is)
    case "lose":  // veszít opció
      $("#start").text("Game Over! Play again?");  // vesztő szöveg a gombra
      break;  // switch megszakítása
    default:  // alapértelmezett opció (ha egyik változat sem valósult meg)
      break;
  }
  resetGame();  // játék alapbeállításra
  $('.door-row').delay(1500).toggle(850);  // ajtók elrejtése
  $("#start").show();  // gomb megjelenítése
};

// játék alaphelyzetbe
function resetGame() {
  $(".opened").removeClass("opened");  // az összes "opened" jelző eltávolítása
  setTimeout(function () {  // időzítő...
    $(".door-frame").attr("src", doorPaths[3]);  // ...ajtók képe alaphelyzetbe...
  }, 1500);  // ...1500 ms múlva
  doors = doorPaths.slice(0, 4);  // ajtók útvonalai alaphelyzetbe
  inGame = false;  // játékon kívül
  numClosedDoors = 3;  // zárt ajtók száma 3
};
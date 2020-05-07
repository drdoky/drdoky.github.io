var appData = {
  prevImgIdx: -1,
  actImgIdx: -1,
  nextImgIdx: -1,
  imgData: [],
  imgLocation: "",
  thumbPrefix: "",
  setImgLocation: function(fpath) {
    this.imgLocation = fpath;
  },
  getImgLocation: function() {
    return this.imgLocation;
  },
  setThumbPrefix: function(tpref) {
    this.thumbPrefix = tpref;
  },
  getThumbPrefix: function() {
    return this.thumbPrefix;
  },
  nextImg: function() {
    let Idx = this.actImgIdx + 1;
    if (Idx === (this.imgData.length)) {
      Idx = 0;
    }
    this.setActImgIdx(Idx);
  },
  prevImg: function() {
    let Idx = this.actImgIdx - 1;
    if (Idx < 0) {
      Idx = this.imgData.length - 1;
    }
    this.setActImgIdx(Idx);
  },
  setActImgIdx: function(Idx) {
    this.actImgIdx = Idx;
    this.setPrevImgIdx(Idx);
    this.setNextImgIdx(Idx);
    // adatok betöltése az UI-ba:
    this.sendImgDataToUI(Idx);
  },
  setPrevImgIdx: function(Idx) {
    Idx--;
    if (Idx < 0) {
      Idx = this.imgData.length - 1;
    }
    this.prevImgIdx = Idx;
  },
  setNextImgIdx: function(Idx) {
    Idx++;
    if (Idx === (this.imgData.length)) {
      Idx = 0;
    }
    this.nextImgIdx = Idx;
  },
  getLastIdx: function() {
    return (this.imgData.length - 1);
  },
  addImg: function(fname, ititle, idesc, ioname, iforras, ilicence) {
    // adatok betöltése a tömbbe, az első tömbelem fókuszba állítása,
    // és az érvényes előző-következő indexek beállítása
    this.imgData.push({
      fileName: fname,
      title: ititle,
      description: idesc,
      originalName: ioname,
      forras: iforras,
      licence: ilicence
    });
    $(".imgContainer").append(`<img id="img${this.getLastIdx()}" src="${this.getLastFileName()}" alt="" class="actImg inaktiv">`);
  },
  getLastFileName: function() {
    // a legutolsó kép fájlnevét adja vissza elérési úttal
    return this.getImgLocation() + this.imgData[this.imgData.length - 1].fileName;
  },
  getImgFileName: function(Idx) {
    // az Idx indexű kép fájlnevét adja vissza elérési úttal
    return this.getImgLocation() + this.imgData[Idx].fileName;
  },
  getLastThumbFName: function() {
    // a legutolsó kép thumbnail fájlnevét adja vissza elérési úttal
    return this.getImgLocation() + this.getThumbPrefix() + this.imgData[this.imgData.length() - 1].fileName;
  },
  getImgThumbFName: function(Idx) {
    // az Idx indexű kép thumbnail fájlnevét adja vissza elérési úttal
    let fname = this.getImgLocation() + this.getThumbPrefix() + this.imgData[Idx].fileName;
    fname = fname.replace("jpg", "png");
    return fname;
  },
  getImgTitle: function(Idx) {
    // az Idx indexű kép címét adja vissza
    return this.imgData[Idx].title;
  },
  getImgDescription: function(Idx) {
    // az Idx indexű kép leírását adja vissza
    return this.imgData[Idx].description;
  },
  getImgOriginalName: function(Idx) {
    // az Idx indexű kép eredeti fájlnevét adja vissza
    return `Original filename: ${this.imgData[Idx].originalName}`;
  },
  getImgSource: function(Idx) {
    // az Idx indexű kép forrását adja vissza
    return `Source: ${this.imgData[Idx].forras}`;
  },
  getImgLicense: function(Idx) {
    // az Idx indexű kép licencét adja vissza
    return `Licence: ${this.imgData[Idx].licence}`;
  },
  sendImgDataToUI: function(Idx) {
    // az aktuális képadatok betöltése a felhasználói felületbe...
    $(".imgTitle").text(appData.getImgTitle(Idx));
    $(".imgDescription").text(appData.getImgDescription(Idx));
    $(".licence").text(appData.getImgLicense(Idx));
    $(".forras").text(appData.getImgSource(Idx));
    // ...majd a feliratsáv átméretezése és képváltás:
    $(".imgInfo").width($(`#img${Idx}`).width());
    $(".imgInfo").css("bottom", $(`#img${Idx}`).css("bottom"));
    $(".aktiv").toggleClass("aktiv inaktiv");
    $(`#img${Idx}`).toggleClass("aktiv inaktiv");
  }
};

appData.setImgLocation("images/");
appData.setThumbPrefix("thumb-");
//appData.addImg("pic01.jpg", "", "", "", "https://www.pexels.com/", "Free");
appData.addImg("pic01.jpg", "Archer in the woods", "Beautiful archer girl in the woods.", "adult-archery-beautiful-beauty-413879.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic02.jpg", "Beach", "Aerial view of nice beach.", "aerial-view-of-beach-4033578.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic03.jpg", "Young woman", "Beautiful young woman making ponytail.", "beautiful-young-woman-making-ponytail-raising-arms-up-3830864.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic04.jpg", "Tiger in water", "Bengal tiger bathes during the daytime.", "bengal-tiger-half-soak-body-on-water-during-daytime-145939.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic05.jpg", "Rocks in the sea", "Rock formations in azure sea from a bird's eye view.", "bird-s-eye-photography-of-rock-formations-3569757.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic06.jpg", "Lake house", "Wooden house on a lake, near snow covered mountain.", "brown-wooden-house-on-lake-near-snow-covered-mountain-3892273.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic07.jpg", "Cascade creek", "Forest waterfall surrounded by natural green life.", "cascade-creek-environment-fern-460621.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic08.jpg", "City by night", "Urban skyline from the river at night.", "city-skyline-across-body-of-water-during-night-time-3586966.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic09.jpg", "Cat eye", "Close up photo of cat's eye.", "close-up-photo-of-cat-s-eye-3324591.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic10.jpg", "Clownfish", "Clownfish underwater with friends.", "clownfish-under-water-1125979.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic11.jpg", "River", "Beautiful landscape with sunset.", "dawn-landscape-nature-sunset-605.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic12.jpg", "Mountain lake 1", "Glossy mountain lake with forest.", "daylight-forest-glossy-lake-443446.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic13.jpg", "Charming eye", "Girl's face with charming eye.", "girls-face-in-close-up-4079215.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic14.jpg", "Underwater", "A simple underwater scene.", "gray-fish-889929.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic15.jpg", "Polar lights", "Landscape with mountains and polar lights.", "landscape-photo-of-mountain-with-polar-lights-1434608.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic16.jpg", "Mountain lake 2", "Another glossy mountain lake with forest.", "mountains-near-body-of-water-panoramic-photo-1062249.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic17.jpg", "Green depth", "Green eye close-up.", "people-face-child-eye-32267.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic18.jpg", "Turtle", "Turtle underwater.", "photo-of-a-turtle-underwater-847393.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic19.jpg", "Sky at night", "Sky in the woods at nighttime.", "photo-of-trees-during-night-3675083.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic20.jpg", "Sea at sunset", "Royal blue sky and sea shore at sunset.", "seashore-under-white-and-blue-sky-during-sunset-210205.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic21.jpg", "Forest waterfall", "Forest waterfall with small lake.", "time-lapse-photo-of-water-falls-in-the-forest-3715436.jpg", "https://www.pexels.com/", "Free");
appData.addImg("pic22.jpg", "The Sign", "Woman making conventional hand sign.", "woman-making-hand-sign-998850.jpg", "https://www.pexels.com/", "Free");

appData.setActImgIdx(0);

$(".green").on("click", (event) => {
  switch ($(event.target).parents(".green").attr("id")) {
    case "btnPrevImg":
      appData.prevImg();
      break;
    case "btnNextImg":
      appData.nextImg();
      break;
  }
});


/*
$(".actImgCont").mousemove(function(event) {
  let pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  let clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
  
  //console.log(`pX, pY: ${pageCoords} / cX, cX: ${clientCoords}`);
  
  $(".imgTitle").text(`pX, pY: ${pageCoords} / cX, cX: ${clientCoords} `);
});
*/
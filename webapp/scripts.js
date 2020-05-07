var appData = {
  prevImgIdx: -1,
  actImgIdx: -1,
  nextImgIdx: -1,
  imgData: [],
  imgLocation: "",
  setImgLocation: function(fpath) {
    this.imgLocation = fpath;
  },
  getImgLocation: function() {
    return this.imgLocation;
  },
  nextImg: function() {
    let Idx = this.actImgIdx + 1;
    if (Idx === (this.imgData.length)) {
      Idx = 0;
    }
    setActImgIdx(Idx);
  },
  prevImg: function() {
    let Idx = this.actImgIdx - 1;
    if (Idx < 0) {
      Idx = this.imgData.length - 1;
    }
    setActImgIdx(Idx);
  },
  setActImgIdx: function(Idx) {
    this.actImgIdx = Idx;
    this.setNextImgIdx(Idx);
    this.setPrevImgIdx(Idx);
    // adatok betöltése az UI-ba:
  },
  setPrevImgIdx: function(Idx) {
    if (Idx === 0) {
      this.prevImgIdx = this.imgData.length - 1;
      return;
    }
    this.prevImgIdx = Idx--;
  },
  setNextImgIdx: function(Idx) {
    if (Idx === (this.imgData.length - 1)) {
      this.prevImgIdx = 0;
      return;
    }
    this.prevImgIdx = Idx++;
  },
  addImg: function(fname, ititle, idesc, ioname, iforras, ilicence) {
    this.imgData.push({
      fileName: fname,
      title: ititle,
      desc: idesc,
      originalName: ioname,
      forras: iforras,
      licence: ilicence
    });
    this.setActImgIdx[0];
  }
};

appData.setImgLocation("images/");
appData.addImg();

$(".green").on("click", () => {
  $(".actImg").toggleClass("aktiv inaktiv");
  $(".imgInfo").width($(".aktiv").width());
});

$(".imgInfo").width($(".aktiv").width());  // ideiglenes szélességállítás
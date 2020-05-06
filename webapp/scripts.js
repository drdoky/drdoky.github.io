$(".green").on("click", () => {
  $(".actImg").toggleClass("aktiv inaktiv");
  console.log($(".aktiv").width());
  $(".imgInfo").width($(".aktiv").width());
});

$(".imgInfo").width($(".aktiv").width());  // ideiglenes szélességállítás
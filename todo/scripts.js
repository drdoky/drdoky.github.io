let strtodo;

$("#btnTodo").on('click', () => {
  strtodo = $("#inTodo").val();
  if ((typeof strtodo === "string") && (strtodo != "")) {
    //$("#todoList").append("<li class='todoItem'>" + strtodo + "</li>");
    $("#todoList").append("<li>" + strtodo + "</li>");
    $("li:last-child").toggleClass("todoItem");
    //$("li:last-child").click();
    $("#inTodo").val("");
  }
});

$("#todoList").on("click", "li", (event) => {
  $(event.target).toggleClass("checked");
});
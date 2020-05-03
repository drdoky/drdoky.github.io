 function addTodo (strtodo) {
  if (typeof strtodo !== "string") {
    strtodo = $("#inTodo").val();
  }
  if ((typeof strtodo === "string") && (strtodo != "")) {
    $("#todoList").append("<li>" + strtodo + "</li>");
    $("li:last-child").toggleClass("todoItem");
    $("#inTodo").val("");
    $("#inTodo").focus();
  }
}

$("#btnTodo").on('click', addTodo);

$("#todoList").on("click", "li", (event) => {
  $(event.target).toggleClass("checked");
});

addTodo("Buy milk");
var inputRes = $("#result");
function insertNumber(number) {
  var existNum = inputRes.val();
  inputRes.val(existNum + number);
}
function clearInput() {
  inputRes.val("");
}

function calculate() {
  var result = eval(inputRes.val());
  inputRes.val(result);
}

function delLastNum() {
  var presentValue = inputRes.val();
  if (presentValue != "") {
    inputRes.val(presentValue.slice(0, -1));
  }
}

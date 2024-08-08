function calculate() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var result = parseInt(x) + parseInt(y);
    document.getElementById("result").value = result;
} 
function reverse() {
    var num1 = document.getElementById("num1").value;
    document.getElementById("p1").innerHTML +=  "Reversed String: " +(num1.split("").reverse().join(""));
}

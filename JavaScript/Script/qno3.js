function process() {
  console.log("burgir");
  var num1 = parseInt(document.getElementById("num-1").value);
  var num2 = parseInt(document.getElementById("num-2").value);

  if (checkEven(num1) && checkEven(num2)) {
    var sum = add(num1, num2);
    document.getElementById("result").innerText = sum;
    document.getElementById("result-title").innerText = "The Sum is";
    document.getElementById("result-title").style.display = "block";
    console.log(sum);
  } else {
    var diff = subt(num1, num2);
    document.getElementById("result").innerText = diff;
    document.getElementById("result-title").innerText = "The Difference is";
    document.getElementById("result-title").style.display = "block";

    console.log(diff);
  }
}

function checkEven(num) {
  console.log("in fn");
  var iseven = false;
  if (num % 2 == 0) {
    iseven = true;
  }
  return iseven;
}

function add(num1, num2) {
  return num1 + num2;
}

function subt(num1, num2) {
  return num1 - num2;
}

function add() {
  console.log("burgir");
  var num1 = document.getElementById("num-1").value;
  var num2 = document.getElementById("num-2").value;
  console.log(checkPrime(num1));
  console.log(checkPrime(num2));

  if (checkPrime(num1) && checkPrime(num2)) {
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById("result-title").style.display = "block";
    document.getElementById("result").innerText = sum;
    document.getElementById("error").innerText = "";
    console.log(sum);
  } else {
    document.getElementById("result-title").style.display = "none";
    document.getElementById("result").innerText = "";
    document.getElementById("error").innerText = "The numbers are not prime";
    document.getElementById("error").style.color = "red";
  }
}

function checkPrime(num) {
  console.log("in fn");
  var isprime = false;
  if (num === 1) {
    isprime = false;
  } else if (num == 2) {
    isprime = true;
  } else if (num % 2 == 0) {
    isprime = false;
  } else {
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        isprime = false;
        break;
      } else {
        isprime = true;
      }
    }
  }
  return isprime;
}

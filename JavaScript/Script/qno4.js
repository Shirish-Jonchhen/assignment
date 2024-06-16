function process() {
  var str1 = document.getElementById("str-1").value;
  var str2 = document.getElementById("str-2").value;

  //case not checked
  if (str1 === str2) {
    console.log("same");
    document.getElementById("result").innerText =
      "The first string is in uppercase";
    document.getElementById("result-title").innerText = "Message";
    document.getElementById("result-title").style.display = "block";
  } else {
    console.log("not same");
    document.getElementById("result").innerText = "The strings are not equal";
    document.getElementById("result-title").innerText = "Message";
    document.getElementById("result-title").style.display = "block";
  }
}

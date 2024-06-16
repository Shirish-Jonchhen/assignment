function reverseStr() {
  var inputString = document.getElementById("string").value;

  var reversedString = "";

  inputString.split("").forEach((char) => {
    reversedString = char + reversedString;
  });

  document.getElementById("result").innerText = reversedString;
  document.getElementById("result-title").style.display = "block";
}

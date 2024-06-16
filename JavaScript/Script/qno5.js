let assarray = {
  name: "Pushpa Kaju",
  gender: "Female",
  age: 21,
  address: "Bhaktapur",
};

let output = "";
for (let key in assarray) {
  console.log(key);
  output += `${key}: ${assarray[key]}<br>`;
}

document.getElementById("result").innerHTML = output;

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.setLastName = (newLastName) => {
    this.lastName = newLastName;
  };
}

let reshma = new User("Reshma", "Kaju");
document.getElementById("beforeFname").innerText = reshma.firstName;
document.getElementById("beforeLname").innerText = reshma.lastName;

reshma.setLastName("Rai");
document.getElementById("afterFname").innerText = reshma.firstName;
document.getElementById("afterLname").innerText = reshma.lastName;

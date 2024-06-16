function setCookies() {
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  const date = new Date();
  date.setTime(date.getTime() + 10 * 24 * 60 * 60 * 1000);
  expires = `; expires=${date.toUTCString()}`;

  document.cookie = `name=${name}${expires}; path=/`;
  document.cookie = `password=${password}${expires}; path=/`;
}

function getCookie(cookieName) {
  const name = cookieName + "=";

  const decodedCookie = decodeURIComponent(document.cookie);
  console.log(decodedCookie, "decodedCookie");

  const cookieArray = decodedCookie.split(";");
  console.log(cookieArray, "cookieArray");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    console.log("Cookie", cookie);
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

function fetchCookies() {
  const name = getCookie("name");
  const password = getCookie("password");

  if (name) {
    console.log("Name: " + name);
    document.getElementById("namecook").innerHTML = `Name: ${name}`;
  } else {
    console.log("Name cookie not found");
  }

  if (password) {
    console.log("Password: " + password);
    document.getElementById("passcook").innerHTML = `Password: ${password}`;
  } else {
    console.log("Password cookie not found");
  }
}

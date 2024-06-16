setInterval(() => {
  const now = new Date();
  const hr = now.getHours().toString().padStart(2, "0");
  const min = now.getMinutes().toString().padStart(2, "0");
  const sec = now.getSeconds().toString().padStart(2, "0");
  console.log(`${hr}:${min}:${sec}`);
  document.getElementById("clock").innerHTML = `${hr}:${min}:${sec}`;
}, 1000);

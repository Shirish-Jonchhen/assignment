const date = new Date("2015-02-12");

const currentDate = new Date();

if (currentDate > date) {
  const diff = currentDate.getTime() - date.getTime(); //in milliseconds
  console.log(
    Math.floor(diff / (1000 * 60 * 60 * 24)),
    "Days after 12th Feb, 2015"
  );

  alert(
    `Today is ${Math.floor(
      diff / (1000 * 60 * 60 * 24)
    )} Days after 12th Feb, 2015`
  );
} else {
  const diff = date.getTime() - currentDate.getTime(); //in milliseconds
  console.log(
    Math.floor(diff / (1000 * 60 * 60 * 24)),
    "Days Before 12th Feb, 2015"
  );

  alert(
    `Today is ${Math.floor(
      diff / (1000 * 60 * 60 * 24)
    )} Days before 12th Feb, 2015`
  );
}

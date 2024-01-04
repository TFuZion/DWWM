let temp = +prompt("Température de l'eau :")

if (temp < 0){
  console.log("l'eau est à l'état solide");
} else if (temp > 100) {
  console.log("l'eau est à l'état gazeux");
} else {
  console.log("l'eau est à l'état liquide");
}

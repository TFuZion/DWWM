let liste = document.querySelector(".liste")

function myButtonClick() {
  alert(liste)
}

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if(event.key == "Enter") {
      let message = inputText.value
      alert("Vous avez appuyé sur Enter \nMessage : " + message)
  }
})

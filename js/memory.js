let cards = document.querySelector(".cards")
let colors = ["#F16C6C", "#F16C6C", "#75A1E3", "#75A1E3", "#E172C9", "#E172C9", "#65DC6A", "#65DC6A", "#E4AA73", "#E4AA73", "#AF94EA", "#AF94EA"]
for (let i = 0; i < colors.length; i++) {
  let card = document.createElement("div")
  let fronte = document.createElement("div")
  let retro = document.createElement("div")
  let questionMark = document.createElement("img")
  card.classList.add("card")
  questionMark.src = "./img/questionMark.png"
  fronte.style.backgroundImage = "url('./img/questionMark.png')";
  cards.appendChild(card)
  card.appendChild(retro)
  card.appendChild(fronte)
  retro.appendChild(questionMark)
  fronte.classList.add("fronte")
  retro.classList.add("retro")
  retro.style.backgroundColor = colors[i]
}

let card = document.querySelectorAll(".card")
card.forEach(carta => {
  carta.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle("selected")
    let delectedCards = document.querySelectorAll(".card.selected")
    console.log(carta);
  })
});

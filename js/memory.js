let cards = document.querySelector(".cards")
let colors = ["#F16C6C", "#F16C6C", "#75A1E3", "#75A1E3", "#E172C9", "#E172C9", "#65DC6A", "#65DC6A", "#E4AA73", "#E4AA73", "#AF94EA", "#AF94EA"]
for (let i = 0; i < colors.length; i++) {
  let card = document.createElement("div")
  let questionMark = document.createElement("img")
  card.classList.add("card")
  questionMark.src = "./img/questionMark.png"
  cards.appendChild(card)
  card.appendChild(questionMark)
  card.style.backgroundColor = colors[i]
}

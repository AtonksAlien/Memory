let cards = document.querySelector(".cards")
let colors = ["#F16C6C", "#F16C6C", "#75A1E3", "#75A1E3", "#E172C9", "#E172C9", "#65DC6A", "#65DC6A", "#E4AA73", "#E4AA73", "#AF94EA", "#AF94EA"]
let images = ["./img/dante.png", "./img/figo.png", "./img/jenny.png", "./img/reggino.png", "./img/sacchetti.png", "./img/sasuke.png", "./img/dante.png", "./img/figo.png", "./img/jenny.png", "./img/reggino.png", "./img/sacchetti.png", "./img/sasuke.png"]


function creaBimbi() {
  images = shuffle(images)

  for (let i = 0; i < colors.length; i++) {
    let card = document.createElement("div")
    let fronte = document.createElement("div")
    let retro = document.createElement("div")
    let questionMark = document.createElement("img")
    card.classList.add("card")
    questionMark.src = "./img/questionMark.png"
    fronte.style.backgroundImage = `url("${images[i]}")`
    cards.appendChild(card)
    card.appendChild(retro)
    card.appendChild(fronte)
    retro.appendChild(questionMark)
    fronte.classList.add("fronte")
    retro.classList.add("retro")
    retro.style.backgroundColor = colors[i]
    card.dataset.value = images[i]
  }
}
creaBimbi()

//shuffle
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
//End-shuffle

//Timer
let time = document.querySelector("#time")
let s = 0
let m = 0
const record = setInterval(function () {
    s++;
    if (s == 60) {
        m++;
        s = 0;
    }
    time.innerText = `${m < 10 ? "0" + m : m}:${
        s < 10 ? "0" + s : s
    }`;
}, 1000);
//End-Timer


//Moves
let moves = document.querySelector("#moves")
let mosse = 0
//End-Moves

//Score
let score = document.querySelector("#score")
let punti = 0
//End-Score

let check = []
let card = document.querySelectorAll(".card")
card.forEach(carta => {
  carta.addEventListener('click', function (e) {
    if (!e.currentTarget.classList.contains("blocca") && !e.currentTarget.classList.contains("selected")) {
      e.currentTarget.classList.add("selected")
      let x = e.currentTarget.getAttribute("data-value")
      check.push(x)

      let selectedCards = document.querySelectorAll(".card.selected")

      if (selectedCards.length === 2) {
        mosse++
        moves.innerText = mosse
        for (let i = 0; i < card.length; i++) {
          card[i].classList.add("avoid-clicks")
        }


        if (check[0] === check[1]) {
          punti++
          score.innerText = punti
          for (let i = 0; i < selectedCards.length; i++) {
            selectedCards[i].classList.add("blocca")
            selectedCards[i].classList.remove("selected")
          }
        } else {
          setTimeout(function(){
            for (let j = 0; j < selectedCards.length; j++) {
              selectedCards[j].classList.remove("selected")
            }
          }, 1000)
        }
        check.length = 0
        setTimeout(function() {
          for (let i = 0; i < card.length; i++) {
            card[i].classList.remove("avoid-clicks")
          }
        },1000)
      }
    }
    if (punti == card.length/2) {
      win()
    }
  })
})

let restart = document.querySelector(".restart")

restart.addEventListener('click', function(e) {

  title.style.color = "black"
  title.innerText = "Memory Card"
  infoes.style.color = "black"
  mosse = 0
  punti = 0
  s = 0
  m = 0
  time.innerText = "00:00"
  score.innerText = "0"
  moves.innerText = "0"
  for (let i = 0; i < card.length; i++) {
    card[i].classList.remove("selected")
    card[i].classList.remove("blocca")
  }
  cards.innerHTML = ""
  creaBimbi()
  check = []
  card = document.querySelectorAll(".card")
  card.forEach(carta => {
    carta.addEventListener('click', function (e) {
      if (!e.currentTarget.classList.contains("blocca") && !e.currentTarget.classList.contains("selected")) {
        e.currentTarget.classList.add("selected")
        let x = e.currentTarget.getAttribute("data-value")
        check.push(x)

        let selectedCards = document.querySelectorAll(".card.selected")

        if (selectedCards.length === 2) {
          mosse++
          moves.innerText = mosse
          for (let i = 0; i < card.length; i++) {
            card[i].classList.add("avoid-clicks")
          }


          if (check[0] === check[1]) {
            punti++
            score.innerText = punti
            for (let i = 0; i < selectedCards.length; i++) {
              selectedCards[i].classList.add("blocca")
              selectedCards[i].classList.remove("selected")
            }
          } else {
            setTimeout(function(){
              for (let j = 0; j < selectedCards.length; j++) {
                selectedCards[j].classList.remove("selected")
              }
            }, 1000)
          }
          check.length = 0
          setTimeout(function() {
            for (let i = 0; i < card.length; i++) {
              card[i].classList.remove("avoid-clicks")
            }
          },1000)
        }
      }
      if (punti == card.length/2) {
        win()
      }
    })
  })
  const record = setInterval(function () {
      s++;
      if (s == 60) {
          m++;
          s = 0;
      }
      time.innerText = `${m < 10 ? "0" + m : m}:${
          s < 10 ? "0" + s : s
      }`;
  }, 1000);

})


let title = document.querySelector(".title")
let infoes = document.querySelector(".info")
let all = document.querySelector(".block")

function win() {
  clearInterval(record)
  setTimeout(function() {
    title.style.color = "red"
    title.innerText = "Hai Vinto"
    infoes.style.color = "red"
    all.classList.add("jello-horizontal")
  },1200)
  setTimeout(function() {
    all.classList.remove("jello-horizontal")
  },1000)
}

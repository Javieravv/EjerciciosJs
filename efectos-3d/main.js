const box = document.querySelector('.box')
const card = document.querySelector('.card')
const babyYoda = document.querySelector('.card-character-img');
const title = document.querySelector('.card-info-title');
const subtitle = document.querySelector('.card-info-subtitle');
const seasons = document.querySelector('.card-info-seasons');
const watchButton = document.querySelector('.card-button');


box.addEventListener ('mousemove', (event) => {
  let xAxis = (event.pageX - window.innerWidth / 2) / 25
  let yAxis = (window.innerHeight /2 - event.pageY) / 25
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

box.addEventListener('mouseenter', (event) => {
  card.style.transition = 'all 0.2s ease'
  setTimeout((e) => {
    card.style.transition = 'none'
  }, 400);
  addTranslateZToElements ([babyYoda, title, subtitle, seasons, watchButton])
})


box.addEventListener('mouseleave', (event) => {
  card.style.transition = 'transform 0.5s ease'
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
  removeTranslateZToElements ([babyYoda, title, subtitle, seasons, watchButton])
})

const addTranslateZToElements = (elements) => {
  elements.forEach(element => element.style.transform = 'translateZ(150px)')
}


const removeTranslateZToElements = (elements) => {
  elements.forEach(element => element.style.transform = 'translateZ(0)')
}


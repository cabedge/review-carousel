"use strict";

// parameters

const gilfoyle = {
    name: "Gilfoyle Bertram",
    image: "img/Gilfoyle.jpg",
    title: "Software Developer",
    quote: "I may not have emotions, but my programming is superior. I am the epitome of efficiency and logic.",
}
const sheldon = {
    name: "Sheldon Cooper",
    image: "img/Jim_parsons.jpg",
    title: "senior theoretical physicist",
    quote: "I may have some quirks and peculiarities, but I assure you, I am not insane. My mother had me tested. And the results were clear, I am just a highly advanced intellect with a particular set of skills and interests.",
}
const michael = {
    name: "Michael Scott",
    image: "img/steve_carell.jpg",
    title: "Regional Manager",
    quote: "I may not be fully superstitious, but I do have my own set of little rituals and beliefs that I follow. You know just to be safe. It's like a security blanket, It makes me feel better, like I have some kind of control.",
}

// button
const backBtnEl = document.querySelector(".backBtn")
const frontBtnEl = document.querySelector(".frontBtn")
const randomBtnEl = document.querySelector(".randomBtn")
// quotes Elements
const imageEl = document.querySelector(".imageContainer")
const nameEl = document.querySelector(".nameContainer")
const titleEl = document.querySelector(".titleContainer")
const quoteEl = document.querySelector(".quotecontainer")
let statePerson = 0

function mutateStatePersonForward(){
    if(statePerson == 2){
        statePerson = 0
    }else 
        return statePerson ++
}

function mutateStatePersonBackward(){
    if(statePerson == 0){
        statePerson = 2
    }else 
        return statePerson --
}
function randomizestatePerson(){
    return statePerson = Math.floor(Math.random()*3)
}

function personInView(){
    if(statePerson == 0){
        gilfoyleParameter()
    }
    if(statePerson == 1){
        sheldonParameter()
    }
    if(statePerson == 2){
        michaelParameter()
    }
}

// starting parameter
gilfoyleParameter()

frontBtnEl.addEventListener("click",function(){
    mutateStatePersonForward()
    personInView()
    console.log(statePerson)
})

backBtnEl.addEventListener("click",function(){
    mutateStatePersonBackward()
    personInView()
    console.log(statePerson)
})

randomBtnEl.addEventListener("click",function(){
    randomizestatePerson()
    personInView()
    console.log(statePerson)
})

function gilfoyleParameter(){
    imageEl.style.width = "200px"
    imageEl.src = gilfoyle.image
    nameEl.textContent = gilfoyle.name
    titleEl.textContent = gilfoyle.title
    quoteEl.textContent = gilfoyle.quote
}
function sheldonParameter(){
    imageEl.style.width = "160px"
    imageEl.src = sheldon.image
    nameEl.textContent = sheldon.name
    titleEl.textContent = sheldon.title
    quoteEl.textContent = sheldon.quote
}
function michaelParameter(){
    imageEl.style.width = "160px"
    imageEl.src = michael.image
    nameEl.textContent = michael.name
    titleEl.textContent = michael.title
    quoteEl.textContent = michael.quote
}





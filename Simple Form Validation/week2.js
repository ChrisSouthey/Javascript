// JavaScript Document

var input = Array.from(document.querySelectorAll(`form input[type="text"]`))
var p = Array.from(document.querySelectorAll(`form p`))
var text = Array.from(document.querySelectorAll(`span`))
var btn = document.querySelector(`input[type="button"]`)
var rxName = /^[a-z ,.'-]+$/i

btn.addEventListener(`click`, e=>{
    for (var i=0;i<input.length;i++){
        if(input[i].value == ""){
            text[i].innerHTML = `*`
            text[i].style.color = `red`
            p[i].style.color = `red`
        }
        else{
            text[i].innerHTML = ``
            p[i].style.color = `black`
        }

    }
})




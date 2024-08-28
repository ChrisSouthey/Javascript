// JavaScript Document

var input = Array.from(document.querySelectorAll(`form input[type="text"]`))
var p = Array.from(document.querySelectorAll(`form p`))
var text = Array.from(document.querySelectorAll(`span`))
var btn = document.querySelector(`input[type="button"]`)
var rxName = /^[a-zA-Z-]+$/

btn.addEventListener(`click`, e=>{
    for (var i=0;i<input.length;i++){
        /*if(input[i].value == ""){
            text[i].innerHTML = `*`
            text[i].style.color = `red`
            p[i].style.color = `red`
        }*/
        if(rxName.test(input[0]) && input[0].value != ""){
            text[i].innerHTML = ``
            text[i].style.color = `black`
            p[i].style.color = `black`
        }
        else{
            text[i].innerHTML = `*`
            p[i].style.color = `red`
        }

    }
})




/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
var h2 = document.querySelector(`#options h2`)

h2.addEventListener(`click`, e=>{
    document.querySelector(`.sides`).classList.toggle(`hidden`)
    })

/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
var input = Array.from(document.querySelectorAll(`input[class="fill"]`))

input.forEach((i, index)=>{
    i.addEventListener(`input`, e=>{
        o[index].fill = input[index].value
        }) 
})


/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
var up = Array.from(document.querySelectorAll(`input[class="u"]`))
var down = Array.from(document.querySelectorAll(`input[class="d"]`))
var side = Array.from(document.querySelectorAll(`input[class="s"]`))
//Up input
up.forEach((i, index)=>{
    i.addEventListener(`keydown`, e=>{
        player[index].keys.u = up[index].value
    })
    i.addEventListener(`click`, e=>{
        currentState = `pause`
    })
})
//Down input
down.forEach((i, index)=>{
    i.addEventListener(`keydown`, e=>{
        player[index].keys.d = down[index].value
    })
    i.addEventListener(`click`, e=>{
        currentState = `pause`
    })
})
//Side input
side.forEach((i, index)=>{
    i.addEventListener(`keydown`, e=>{
        player[index].keys.s = side[index].value
    })
    i.addEventListener(`click`, e=>{
        currentState = `pause`
    })
})




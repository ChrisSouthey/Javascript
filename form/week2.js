// JavaScript Document


var input = document.querySelectorAll(`form input[type="text"]`);
var p = document.querySelectorAll(`form p`);
var text = document.querySelectorAll(`span`);
var btn = document.querySelector(`input[type="button"]`);
var form = document.querySelector(`form`);
var div = document.querySelector(`#confirmation`);
var pCon = document.querySelector(`p#info`);

var rxFName = /^[a-zA-Z-]+$/
var rxLName = /^[a-zA-Z-]+$/
var rxEmail = /(?:[a-z0-9!#$%&'[+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
var rxPhone = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/

btn.addEventListener(`click`, e => {
    let isValid = true;

    // Validate First Name
    if (rxFName.test(input[0].value) && input[0].value != ``) {
        text[0].innerHTML = ``;
        text[0].style.color = `black`;
        p[0].style.color = `black`;
        isFNameValid = true;
    } else {
        text[0].innerHTML = `*`;
        text[0].style.color = `red`;
        p[0].style.color = `red`;
        isFNameValid = false;
    }

    // Validate Last Name
    if (rxLName.test(input[1].value) && input[1].value != ``) {
        text[1].innerHTML = ``;
        text[1].style.color = `black`;
        p[1].style.color = `black`;
        isLNameValid = true;
    } else {
        text[1].innerHTML = `*`;
        text[1].style.color = `red`;
        p[1].style.color = `red`;
        isLNameValid = false;
    }

    // Validate Email
    if (rxEmail.test(input[2].value) && input[2].value != ``) {
        text[2].innerHTML = ``;
        text[2].style.color = `black`;
        p[2].style.color = `black`;
        isEmailValid = true;
    } else {
        text[2].innerHTML = `*`;
        text[2].style.color = `red`;
        p[2].style.color = `red`;
        isEmailValid = false;
    }

    // Confirm Email
    if (rxEmail.test(input[3].value) && input[3].value != `` && input[3].value == input[2].value){
        text[3].innerHTML = ``;
        text[3].style.color = `black`;
        p[3].style.color = `black`;
        isEmailConValid = true;
    } else {
        text[3].innerHTML = `*`;
        text[3].style.color = `red`;
        p[3].style.color = `red`;
        isEmailConValid = false;
    }

    // Validate Phone
    if (rxPhone.test(input[4].value) && input[4].value != ``) {
        text[4].innerHTML = ``;
        text[4].style.color = `black`;
        p[4].style.color = `black`;
        isPhoneValid = true;
    } else {
        text[4].innerHTML = `*`;
        text[4].style.color = `red`;
        p[4].style.color = `red`;
        isPhoneValid = false;
    }

    if(isFNameValid == true && isLNameValid == true && isEmailValid == true && isEmailConValid == true && isPhoneValid == true){
        form.style.display = `none`
        var person = {
            name:[input[0].value + ` ` + input[1].value],
            email:input[2].value,
            phone:input[4].value,
        }
        //console.log(person)
        
        div.style.display = `block`;
        for(let[key,value] of Object.entries(person)){
            pCon.innerHTML += (`<br>${key}: ${value}`);
        }
        
        //console.log(pCon)
    }

    


        
});




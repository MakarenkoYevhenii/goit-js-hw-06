const textHolder = document.querySelector('#validation-input')

textHolder.addEventListener("blur",() =>
{
     if(textHolder.value === `6 symbols`)
    {
        textHolder.classList.add("valid")
    }
    else if(textHolder.value.length === Number(textHolder.dataset.length)){   
        textHolder.classList.remove("invalid")
        textHolder.classList.add("valid")
    }
   
    else{textHolder.classList.add("invalid")
    textHolder.classList.remove("valid")
}
})

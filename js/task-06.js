const textHolder = document.querySelector('#validation-input')

textHolder.addEventListener("blur",() =>
{
     if(textHolder.value === `6 symbols` || textHolder.value.length === Number(textHolder.dataset.length))
    {
        textHolder.classList.remove("invalid")
        textHolder.classList.add("valid")
    }
    textHolder.classList.add("invalid")
    textHolder.classList.remove("valid")

})

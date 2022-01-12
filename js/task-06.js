const textHolder = document.querySelector('#validation-input')

textHolder.addEventListener("blur",()=>
{
     if(textHolder.value===`6 symbols`)
    {
        textHolder.classList.add("valid")
    }
    else if(textHolder.value.length===Number(textHolder.dataset.length)){   
        textHolder.classList.add("valid")
        textHolder.classList.remove("invalid")
    }
   
    else{textHolder.classList.add("invalid")
}
})
textHolder.addEventListener("input",()=>{
    console.dir(textHolder);
    if(!textHolder.value)
    {
        textHolder.classList.remove("invalid")
    }
})

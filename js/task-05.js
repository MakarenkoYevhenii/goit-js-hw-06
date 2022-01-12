const textPlaceholderEl = document.querySelector("#name-input")
const textOutput=document.querySelector("#name-output")
textPlaceholderEl.addEventListener("input",()=>{
    if(textPlaceholderEl.value === "")
    {
        return textOutput.textContent = "Anonymous"
    }
    textOutput.textContent = textPlaceholderEl.value
})
console.dir(textPlaceholderEl);
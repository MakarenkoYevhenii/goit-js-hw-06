const miksherEl = document.querySelector("#font-size-control")
const textOnPage = document.querySelector("#text")
console.dir(textOnPage);
console.dir(miksherEl);
miksherEl.addEventListener("input",() =>
{
    textOnPage.style.fontSize = `${miksherEl.value}px`
})
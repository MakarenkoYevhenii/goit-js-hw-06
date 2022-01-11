function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyPages=document.querySelector("body")
console.dir(bodyPages);
const buttonChangeColor=document.querySelector(".change-color")
const text=document.querySelector(".color")
buttonChangeColor.addEventListener("click",()=>
{
  bodyPages.style.backgroundColor=getRandomHexColor()
  text.textContent=bodyPages.style.backgroundColor
})
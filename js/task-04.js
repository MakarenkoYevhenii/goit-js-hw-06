
let counterValue =0;
const buttonNegativeEl = document.querySelector("[data-action=decrement]");
const buttonPositiveEl = document.querySelector("[data-action=increment]");

const posetiv = () => {
    counterValue=counterValue+1
    document.querySelector("#value").textContent=counterValue
};

const negativ = () => {
    counterValue=counterValue-1
    document.querySelector("#value").textContent=counterValue
};
buttonPositive.addEventListener("click", posetiv);
buttonNegative.addEventListener("click", negativ);
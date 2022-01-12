const listOfIt = categories.children
console.log("Number of categories:" ,listOfIt.length);
const catrgoryItems=document.querySelectorAll('.item')
for (const item of catrgoryItems) {
    console.log("Category:",item.querySelector("h2").textContent)
    console.log("Elements:",item.querySelectorAll("li").length)
}
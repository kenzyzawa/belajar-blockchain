const button = document.getElementById("btn");
const title = document.getElementById("title");
const desc = document.getElementById("desc");

button.addEventListener("click", function() {
    title.textContent = "Welcome to Web3 🔥";
    desc.textContent = "I am learning step by step to become a blockchain developer.";
    title.style.color = "#ab21ce";
});
console.log("Script jalan")
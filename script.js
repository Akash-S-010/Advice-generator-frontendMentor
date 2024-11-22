let countVal = document.querySelector(".count");
let btn = document.querySelector(".dice-button");
let adviseText = document.querySelector(".advice-text");
let loader = document.querySelector(".loader")
let count = 1;
const URL = "https://api.adviceslip.com/advice";


btn.addEventListener("click", async () => {
    try {
        loader.style.display = "block";
        adviseText.innerHTML = "";
        let response = await fetch(URL);
        let data = await response.json();
        loader.style.display = "none"
        let advice = data.slip.advice;
        adviseText.innerHTML = advice;
        count++;
        countVal.innerHTML = `#${count}`;
    } catch (error) {
        adviseText.textContent = "Something went wrong. Please try again!";
        console.error("Error fetching advice:", error);
    }

})
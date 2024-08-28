const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');


function telephoneCheck(str) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return (regex.test(str))
}

checkBtn.addEventListener("click", () => {
    

    userInput.value === "" ? alert("Please provide a phone number") 
    : telephoneCheck(userInput.value) 
    ? resultsDiv.innerText = `Valid US number: ${userInput.value}` 
    : resultsDiv.innerText = `Invalid US number: ${userInput.value}`

})

clearBtn.addEventListener("click", () => {
    resultsDiv.innerText = "" 
})



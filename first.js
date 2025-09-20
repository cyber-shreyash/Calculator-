let input = document.querySelector(".input");  
let buttons = document.querySelectorAll("#button"); 
buttons.forEach(button => {
button.addEventListener("click", () => {
    let value = button.textContent;
    if (value === "AC") {
    input.value = "";               
    } 
    else if (value === "=") {
    try {
        input.value = eval(input.value);  
    } catch {
        input.value = "Error";            
    }
    } 
    else {
    input.value += value;          }
});
});

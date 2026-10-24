
const button = document.getElementById("checkBtn");

button.addEventListener("click", function() {
    const name = document.getElementById("agentName").value;
    const result = document.getElementById("result");

    if (name === "") {
        result.innerText = "Please enter agent name!";
        result.style.color = "red";
    } else {
        result.innerText = name + " is Active!";
        result.style.color = "green";
    }
});

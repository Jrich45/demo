/* function smelly(name) {
    alert(prompt("What is your name"))

}

function calculate(num, num2) {
    return num + num2;
}
function multiply(num, num2) {
    return num * num2;
} */


/* function smell() {

    let name = prompt("What is your name")
    if ((name === "Mason") || (name === "mason")) {
        

    }
    return ("Very very smelly");
}

smell() */

const invite = document.querySelector("#max-invite");
const output = document.querySelector(".invite-output");

output.textContent = invite.value;

invite.addEventListener("input", () => {
    output.textContent = invite.value;
});

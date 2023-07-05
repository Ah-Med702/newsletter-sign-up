let container = document.querySelector(".container");
let thanksMsg = document.querySelector(".thanks-msg");

let email = document.getElementById("email");
let submitBtn = document.querySelector(".main .submit-btn");
let dismissBtn = document.querySelector(".thanks-msg .dismiss-btn");
let emailSpan = document.querySelector(".thanks-msg p span");

let emailAfter = document.querySelector(".container .email-cont span");

let validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

submitBtn.addEventListener("click", () => {
    if (email.value.match(validEmail)) {
        container.style.display = "none";
        thanksMsg.style.display = "flex";
        emailSpan.innerHTML = email.value;
        return true;
    } else {
        emailAfter.style.display = "block";
        email.style.border = "1px solid var(--primary)";
        email.style.backgroundColor = "#ff625718";
        email.style.color = "var(--primary)";
        return false;
    }
});

dismissBtn.addEventListener("click", () => {
    container.style.display = "flex";
    thanksMsg.style.display = "none";

    email.value = "";
    emailAfter.style.display = "none";
    email.style.border = "1px solid var(--Grey)";
    email.style.backgroundColor = "var(--white)";
    email.style.color = "var(--Dark-Slate-Grey)";
});

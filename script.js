const form = document.querySelector('form');
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const msg = document.getElementById("message");

function checkInputs() {

    const items = document.querySelectorAll(".item");
    for (const item of items) {
        //validation of null value input

        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs()
});

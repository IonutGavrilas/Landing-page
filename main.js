const submitBtn = document.getElementById("call-to-action-btn");
const inputField = document.getElementById("name");
const error = document.getElementById("hint");


submitBtn.addEventListener('click',function (event) {
    event.preventDefault();
    const user = inputField.value;
    const button = submitBtn;
    
    if (user === '') {
        error.style.display = 'block';
        error.style.color = "orange";
    } else {
        alert("You're all set, I will get back to you shortly!");
    }
    });
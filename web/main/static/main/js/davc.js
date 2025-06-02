let isBlack = false;

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", function() {
    if(themeToggle.checked) {
        document.body.style.backgroundColor = '#1E1E1E'; // колір body
        isBlack = true;
        themeLabel.textContent = 'Темна версія';
    } else {
        document.body.style.backgroundColor = '#fff'; // колір body
        themeLabel.textContent = 'Світла версія';
        isBlack = false;
    }
})

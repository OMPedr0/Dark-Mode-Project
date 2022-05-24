function myfunction(e) {
    console.log("you clicked");
    document.documentElement.classList.toggle("dark-mode");
    document.querySelectorAll(".inverted").forEach((result) => {
        result.classList.toggle("invert");
    });
}
const btn = document.querySelector('.btn')
btn.addEventListener('click', myfunction);
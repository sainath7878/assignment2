const btnSnackbar = document.querySelector(".btn-snackbar");
const snackbarDiv = document.querySelector(".snackbar");
const tabPill = document.querySelectorAll(".tab-pill");

btnSnackbar.addEventListener("click", function(){
    console.log("clicked");
    snackbarDiv.classList.add("snackbar-transition");
    snackbarDiv
});


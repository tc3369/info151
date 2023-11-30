Fancybox.bind()


var mainnav = document.querySelector("#mainnav");

console.log(mainnav);

var burgerBtn = document.querySelector("#burger-container button");
// console.log(burgerBtn);
var burgerBars = document.querySelector("#burger-bars");
var burgerX = document.querySelector("#burger-x");


var canYouSeeMainNav = false;

// console.log("hello");

function showNav(){
    // console.log("button clicked")

    if(canYouSeeMainNav === false){
        mainnav.classList.add("showMainNav");
        canYouSeeMainNav = true;

        burgerBars.classList.add("hide-burger-bars");
        burgerX.classList.remove("hide-burger-x");

    }else{
        mainnav.classList.remove("showMainNav");
        canYouSeeMainNav = false;

        burgerBars.classList.remove("hide-burger-bars");
        burgerX.classList.add("hide-burger-x");
    }
}
burgerBtn.addEventListener("click", showNav)

// ----------------------
//      Sign In
// ----------------------

var signInBtn = document.querySelector(".signin");
var signInContainer = document.querySelector("#signin-container");
var closeSignInModalButton = document.querySelector("#close-sign-in-modal-button");



function showSignInModal() {
    signInContainer.classList.add("show-signin-container")
    mainnav.classList.remove("showMainNav");

}

function hideSignInModal(){
    signInContainer.classList.remove("show-signin-container")
    
}


signInBtn.addEventListener("click", showSignInModal);
closeSignInModalButton.addEventListener("click", hideSignInModal);

// ----------------------
//      Sign Up
// ----------------------

var signUpBtn = document.querySelector(".signup");
var signUpContainer = document.querySelector("#signup-container");
var closeSignUpModalButton = document.querySelector("#close-sign-up-modal-button");
var closeSignUpModalButtontwo = document.querySelector("#cancel-btn");


function showSignUpModal() {
    signUpContainer.classList.add("show-signup-container")
    mainnav.classList.remove("showMainNav");

}

function hideSignUpModal(){
    signUpContainer.classList.remove("show-signup-container")
    
}


signUpBtn.addEventListener("click", showSignUpModal);
closeSignUpModalButton.addEventListener("click", hideSignUpModal);
closeSignUpModalButtontwo.addEventListener("click", hideSignUpModal);
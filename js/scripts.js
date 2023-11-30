Fancybox.bind()


var mainnav = document.querySelector("#mainnav");

const container = document.querySelector("#myCarousel");
const options = { infinite: true };

new Carousel(container, options);

document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
  });
  
  document.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
  });


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

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
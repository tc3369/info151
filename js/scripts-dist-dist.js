Fancybox.bind();var mainnav=document.querySelector("#mainnav");const container=document.querySelector("#myCarousel"),options={infinite:!0};new Carousel(container,options),document.addEventListener("aos:in",(({detail:n})=>{console.log("animated in",n)})),document.addEventListener("aos:out",(({detail:n})=>{console.log("animated out",n)})),console.log(mainnav);var burgerBtn=document.querySelector("#burger-container button"),burgerBars=document.querySelector("#burger-bars"),burgerX=document.querySelector("#burger-x"),canYouSeeMainNav=!1;function showNav(){!1===canYouSeeMainNav?(mainnav.classList.add("showMainNav"),canYouSeeMainNav=!0,burgerBars.classList.add("hide-burger-bars"),burgerX.classList.remove("hide-burger-x")):(mainnav.classList.remove("showMainNav"),canYouSeeMainNav=!1,burgerBars.classList.remove("hide-burger-bars"),burgerX.classList.add("hide-burger-x"))}burgerBtn.addEventListener("click",showNav);var signInBtn=document.querySelector(".signin"),signInContainer=document.querySelector("#signin-container"),closeSignInModalButton=document.querySelector("#close-sign-in-modal-button");function showSignInModal(){signInContainer.classList.add("show-signin-container"),mainnav.classList.remove("showMainNav")}function hideSignInModal(){signInContainer.classList.remove("show-signin-container")}signInBtn.addEventListener("click",showSignInModal),closeSignInModalButton.addEventListener("click",hideSignInModal);var signUpBtn=document.querySelector(".signup"),signUpContainer=document.querySelector("#signup-container"),closeSignUpModalButton=document.querySelector("#close-sign-up-modal-button"),closeSignUpModalButtontwo=document.querySelector("#cancel-btn");function showSignUpModal(){signUpContainer.classList.add("show-signup-container"),mainnav.classList.remove("showMainNav")}function hideSignUpModal(){signUpContainer.classList.remove("show-signup-container")}signUpBtn.addEventListener("click",showSignUpModal),closeSignUpModalButton.addEventListener("click",hideSignUpModal),closeSignUpModalButtontwo.addEventListener("click",hideSignUpModal),AOS.init(),AOS.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:0,duration:400,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-bottom"});
// alert("hello!")

var mainnav = document.querySelector("#mainnav");
// mainnav.classList.add("showMainNav");

console.log(mainnav);

var burgerBtn = document.querySelector("#burger-container button");
console.log(burgerBtn);

var canYouSeeMainNav = false;

// console.log("hello");

function showNav(){
    console.log("button clicked")
    if(canYouSeeMainNav === false){
        mainnav.classList.remove("showMainNav");
        canYouSeeMainNav = true;
    }else{
        mainnav.classList.add("showMainNav");
        canYouSeeMainNav = false;
    }
}
burgerBtn.addEventListener("click", showNav)


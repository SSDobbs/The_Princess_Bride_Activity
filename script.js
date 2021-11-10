/* Hamburger Navigation Menu*/
function toggleMenu() {
    let getMenu = document.querySelector(".mainMenu");
    getMenu.classList.toggle("hamburger");
}
let getHamburger = document.querySelector("#toggle-bar");

getHamburger.addEventListener("click", toggleMenu);

/*End HB Nav Menu*/

/* Q1 onClick Check My Answer */
function pirateFunction() {
    document.getElementById("pirate").innerHTML = "Dread Pirate Roberts";
}

/* Q2 onClick Check My Answer */
function humperdinkFunction() {
    document.getElementById("humperdink").innerHTML = "Prince Humperdink";
}

/* Q3 onClick Check My Answer */
function guilderFunction() {
    document.getElementById("guilder").innerHTML = "Guilder, The sworn enemy of Florin";
}
/* Q4 RHYME */

/* Q5 onClick Answers */
document.getElementById("eel").
addEventListener("click", eelFunction);

function eelFunction() {
    document.getElementById("eel").
    innerHTML = "I suppose you think you're brave, don't ya";
}

document.getElementById("sit-and-wait").
addEventListener("click", sitFunction);

function sitFunction() {
    document.getElementById("sit-and-wait").
    innerHTML = "AS YOU WISH--we will sit and wait";
}

document.getElementById("fight").
addEventListener("click", fightFunction);

function fightFunction() {
    document.getElementById("fight").
    innerHTML = "INCONCEIVABLE--You are but a small stature woman with no weapons BUT Fezzik wishes to do no harm";
} /*End Q5 */
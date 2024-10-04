let ratingEements = document.querySelectorAll(".rating-number");
let submitButton = document.getElementById("sebmit");
let ratingChoice = document.getElementById("ratingID");
let activeState = "active";
let currentId = "";
// for (const element of ratingEements) {
//     element.addEventListener("click",(e) => {
//         removeAllActiveSate();
//         element.classList.add(activeState)
//     })
//    //console.log(element.classList)
// }
let elementArr = Array.from(ratingEements);
elementArr.forEach((element) => {
    element.addEventListener("click", (e) => {
        removeAllActiveSate();
        element.classList.add(activeState);
        currentId = element.id;
        console.log(currentId);
    })
})
function removeAllActiveSate(){
    elementArr.forEach((element) => {
        element.classList.remove(activeState);
    })
}

submitButton.addEventListener("click", (e) => {
    ratingChoice.innerText = currentId;
    hideRatingAndShowThankYou()
})
function hideRatingAndShowThankYou(){
    let ratingContainer =  document.querySelector(".rating-container");
    ratingContainer.style.display = "none";

    let thankYouContainer = document.querySelector(".thankyou-State");
    thankYouContainer.style.display = "block";
}
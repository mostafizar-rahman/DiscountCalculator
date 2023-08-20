let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
    navBar.classList.toggle("active");
    hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click", () => {
        navBar.classList.remove("active");
        hamMenuIcon.classList.toggle("fa-times");
    });
});

// ------ Calculator
function calculatePercentage() {
    const originalPrice = parseFloat(document.getElementById("originalPrice").value);
    const discountPercentage = parseFloat(document.getElementById("discountPercentage").value);

    // Calculate the discounted price
    const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));

    // Display the result in the 'discountedPrice' input field
    document.getElementById("discountedPrice").innerHTML = discountedPrice;
    document.getElementById("originalPriceResult").innerHTML = originalPrice;

    // Clear input filed
    if (discountedPrice) {
        document.getElementById("originalPrice").value = ""
        document.getElementById("discountPercentage").value = ""
    }
}


// ------- About Popup
function handleAboutPopup() {
    document.querySelector(".about").style.display = "block"
}
function handleCloseAbout() {
    document.querySelector(".about").style.display = "none"
}
function handlePrivacyPolicyPopup() {
    document.querySelector(".privacy_policy").style.display = "block"
}
function handleClosePrivacyPolicyPopup() {
    document.querySelector(".privacy_policy").style.display = "none"
}







// ------ Icon change

const selectTrigger = document.querySelector(".select-trigger");
const optionsList = document.querySelector(".options");

optionsList.style.display = "none"
selectTrigger.addEventListener("click", function () {
    optionsList.style.display = optionsList.style.display === "none" ? "block" : "none";
});

optionsList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        const selectedValue = event.target.getAttribute("data-value");
        if (selectedValue === "tk") {
            selectTrigger.querySelector("span").className = "fa-solid fa-bangladeshi-taka-sign";
            tk_icon.classList.remove("tk_icon")
            doller_icon.classList.add("tk_icon")
        }
        else if (selectedValue === "doller") {
            selectTrigger.querySelector("span").className = "fa-solid fa-dollar-sign";
            tk_icon.classList.add("tk_icon")
            doller_icon.classList.remove("tk_icon")
        }
        optionsList.style.display = "none";
    }
});


const selectPosition = document.querySelector(".select-position");
const positionOptionsList = document.querySelector(".position-options");

positionOptionsList.style.display = "none"
selectPosition.addEventListener("click", function () {
    positionOptionsList.style.display = positionOptionsList.style.display === "none" ? "block" : "none";
});

positionOptionsList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        const selectedValue = event.target.getAttribute("data-value");
        selectPosition.querySelector("span").textContent = event.target.textContent;
        positionOptionsList.style.display = "none";
    }
});





// Close the options list when clicking outside
document.addEventListener("click", function (event) {
    if (!selectTrigger.contains(event.target) && !optionsList.contains(event.target)) {
        optionsList.style.display = "none";
    }
});


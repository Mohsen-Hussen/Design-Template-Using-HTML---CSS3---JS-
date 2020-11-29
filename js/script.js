// ckeck if there is local storage color option
let mainColors = localStorage.getItem("color_option");
if (mainColors !== null) {
    // console.log("local storge is not empty");
    document.documentElement.style.setProperty("--main-color", mainColors);
    // remove active class from all list items
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
    // add active class on element with data color === local storage item
        if (element.dataset.colorLi === mainColors) {
            // add active class
            this.classList.add("active");
        }
    });
}

//random background option
let backGroundOption = true;
//variable to control the intrval
let backGroundInterval;
//check if ther is a local storage random background item
let backGroundLocalItem = localStorage.getItem("background_option");
//check if local storage random background is not empty
if (backGroundLocalItem !== null) {
    if (backGroundLocalItem === true) {
        backGroundOption = true;
    } else {
        backGroundOption = false;
    };
    // remove active class from all spans
    document.querySelectorAll(".random-backgrounds span").forEach(element => {
        element.classList.remove("active");
    });
    if (backGroundLocalItem === 'true') {
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    } else {
        document.querySelector(".random-backgrounds .no").classList.add("active");
    };
};

// toggel spin class on icon
document.querySelector(".toggel-settings .fa-gear").onclick = function () {
    //toggel class fa-spin for rotation at gear shape
    this.classList.toggle("fa-spin");
    //toggel class open on main settings box
    document.querySelector(".settings-box").classList.toggle("open");
};

// switch colors
const colorLi = document.querySelectorAll(".colors-list li");
// loop on all list ietms
colorLi.forEach(li => {
    // click on evry list ietm
    li.addEventListener("click", (e) => {
        // click on evry list ietm
        console.log(e.target.dataset.color);
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color);
        // set color on local storage
        localStorage.setItem("color_option", e.target.dataset.color);
        // remove active class from all childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        // add active class on another li
        e.target.classList.add("active");
    });
});

// switch random backgrounds option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");
// loop on all list spans
randomBackEl.forEach(span => {
    // click on evry span
    span.addEventListener("click", (e) => {
        // remove active class from all childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        // add active class on another span
        e.target.classList.add("active");
        if (e.target.dataset.background === "yes") {
            backGroundOption = true;
            randomizeImgs();
            localStorage.setItem("background_option", true);
        } else {
            backGroundOption = false;
            clearInterval(backGroundInterval);
            localStorage.setItem("background_option", false);
        };
    });
});

// select landing page element
let landingPage = document.querySelector(".landing-page");
// get array of imgs
let imgsArray = ["img-1.jpg","img-2.jpg","img-3.jpg","img-4.jpg","img-5.jpg"];
// function to randomize the imgs
function randomizeImgs() {
    if (backGroundOption === true) {
        backGroundInterval = setInterval(() => {
            // get random number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            // change background image url
            landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
        } , 2000);
    };
};
randomizeImgs();

// select skills selector
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
    // skills offset top
    let skillsOffsetTop = ourSkills.offsetTop;
    // skills outer height
    let skilsOuterHeight = ourSkills.offsetHeight;
    // window height
    let windowHeight = this.innerHeight;
    //window scroll top
    let windowScrollTop = this.pageYOffset;
    if (windowScrollTop > (skillsOffsetTop + skilsOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll(".skills .skill-box .skill-progres span");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progres;
        });
    };
};

// creat pop up for the image
let ourGallrey = document.querySelectorAll(".gallrey img");
ourGallrey.forEach(img => {
    img.addEventListener('click', (e) => {
        // creat overlay div
        let overlay = document.createElement('div');
        // add class to overlay div
        overlay.className = 'popup-overlay';
        // append overlay to body
        document.body.appendChild(overlay);
        // creat popup div box
        let popupBox = document.createElement('div');
        // add class to popup div
        popupBox.className = 'popup-box';
        if (img.alt !== null) {
            // create heading
            let imageHeading = document.createElement("h3");
            // create text for heading
            let imageText = document.createTextNode(img.alt);
            // append the text to the heading
            imageHeading.appendChild(imageText);
            // append the heading to the popup box
            popupBox.appendChild(imageHeading);
        };
        // create the img that will show
        let popupImage = document.createElement('img');
        // set image source
        popupImage.src = img.src;
        //add image to popup box
        popupBox.appendChild(popupImage);
        //append the popup box to body
        document.body.appendChild(popupBox);
        // creat close span
        let closeButton = document.createElement("span");
        // create the close button text
        let closeButtonText = document.createTextNode("X");
        // append text X to close span
        closeButton.appendChild(closeButtonText);
        // add class to close button
        closeButton.className = 'close-button';
        //add close button to popup box
        popupBox.appendChild(closeButton);
    });
});
// close popup box
document.addEventListener('click', (e) => {
    if (e.target.className == 'close-button') {
        // remove the current popup
        e.target.parentNode.remove();
        // remove overlay
        document.querySelector(".popup-overlay").remove();
    };
});


// بايظة و مش راضية تشتغل و زهقتنى بصراحة
// select all bullets
const allBullets = document.querySelector(".nav-bull .bullet")
allBullets.forEach(bullet => {
    bullet.addEventListener("click", (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// handle active function
function handleActive(ev) {
    // remove active class from all childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });
    // add active class on another li
    ev.target.classList.add("active");
}

/*
let bulletSpan = document.querySelector(".bullets-option span");
let bulletContainer = document.querySelector(".nav-bull");
bulletSpan.forEach(span => {
    span.addEventListener("click", (e) => {
        if (span.dataset.display === "show") {
            bulletContainer.css.display = "block";
        } else {
            bulletContainer.css.display = "none";
        }
        handleActive(e);
    });
});
*/

// toggle menu
let toggleBtn = document.querySelector(".toogle-menu");
let tLinks = document.querySelector(".links");
toggleBtn.onclick = function () {
    // toogle arrow above the menu
    this.classList.toggle("menu-active");
    // toogle menu it self
    tLinks.classList.toggle("open");
};
function display (el) {
    el.classList.toggle('display');
}

function removeDisplay (el) {
    el.classList.remove('display');
}

function slidein (el) {
    el.classList.toggle('slidein');
}

function removeSlidein () {
    var allElements = document.querySelectorAll(".slidein");
    for (i=0; i<allElements.length; i++) {
        allElements[i].classList.remove('slidein');
    }
}

function activeIconsOff() {
    var allElements = document.querySelectorAll(".iconActive");
    for (i=0; i<allElements.length; i++) {
        allElements[i].classList.remove('display');
    }
}

function sideMenusOff() {
    activeIconsOff();
    removeSlidein(); 
}

// Hamburger menu icon

const menuDropdown = document.getElementById("menuDropdown");
const menuDropBtn = document.getElementById("menuDropBtn");

menuDropBtn.addEventListener("click", function hamburgerMenu() {
    display(menuDropdown);
    menuDropBtn.classList.toggle('cross');
    sideMenusOff();
})

// Dropdown menu

const gamesMenu = document.getElementById("gamesMenu");
const hardwareMenu = document.getElementById("hardwareMenu");
const servicesMenu = document.getElementById("servicesMenu");
const newsMenu = document.getElementById("newsMenu");
const shopMenu = document.getElementById("shopMenu");
const supportMenu = document.getElementById("supportMenu");

// Dropdown menu icons

const gamesIconActive = document.getElementById("gamesIconActive");
const hardwareIconActive = document.getElementById("hardwareIconActive");
const servicesIconActive = document.getElementById("servicesIconActive");
const newsIconActive = document.getElementById("newsIconActive");
const shopIconActive = document.getElementById("shopIconActive");
const supportIconActive = document.getElementById("supportIconActive");

games.addEventListener("click", function gamesSideMenu() {
    sideMenusOff();
    slidein(gamesMenu);
    display(gamesIconActive);
})

hardware.addEventListener("click", function hardwareSideMenu() {
    sideMenusOff();
    slidein(hardwareMenu);
    display(hardwareIconActive);
})

services.addEventListener("click", function servicesSideMenu() {
    sideMenusOff();
    slidein(servicesMenu);
    display(servicesIconActive);
})

news.addEventListener("click", function newsSideMenu() {
    sideMenusOff();
    slidein(newsMenu);
    display(newsIconActive);
})

shop.addEventListener("click", function shopSideMenu() {
    sideMenusOff();
    slidein(shopMenu);
    display(shopIconActive);
})

support.addEventListener("click", function supportSideMenu() {
    sideMenusOff();
    slidein(supportMenu);
    display(supportIconActive);
})

// Titles 

document.querySelectorAll('.title').forEach(item => {
    item.addEventListener('click', event => {
      sideMenusOff();
    })
})

// Site search dropdown & overlay

const searchDropdown = document.getElementById("searchDropdown");
const overlay = document.getElementById("overlay");
const siteDropdown = document.getElementById("siteDropdown");

function searchDropdownMenu() {
    searchDropdown.classList.toggle('show');
    display(overlay);
    siteSelectorOff();
}

function siteSelector() {
    display(siteDropdown);
}

function siteSelectorOff() {
    removeDisplay(siteDropdown);
}

const playStationCom = document.getElementById("playStationCom");
const playStationStore = document.getElementById("playStationStore");
const searchField = document.getElementById("searchField");

playStationCom.addEventListener("click", function siteFocusCom() {
    siteSelector();
    playStationCom.classList.toggle('focus');
    playStationStore.classList.remove('focus');
    searchField.placeholder = "Search PlayStation.com";
})

playStationStore.addEventListener("click", function siteFocusStore() {
    siteSelector();
    playStationStore.classList.toggle('focus');
    playStationCom.classList.remove('focus');
    searchField.placeholder = "Search PS Store";
})

document.getElementById("searchDropBtn").addEventListener("click", searchDropdownMenu);
document.getElementById("searchBackBtn").addEventListener("click", searchDropdownMenu);
document.getElementById("siteDropBtn").addEventListener("click", siteSelector);
document.getElementById("siteBackBtn").addEventListener("click", siteSelector);

overlay.addEventListener("click", searchDropdownMenu);
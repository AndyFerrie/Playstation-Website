function display (el) {
    el.classList.toggle('display');
}

function removeDisplay (el) {
    el.classList.remove('display');
}

function slidein(el) {
    el.classList.toggle('slidein');
}

function removeSlidein() {
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

function getEl(id) {
    return document.getElementById(id);
}

// Hamburger menu icon

const menuDropdown = getEl("menuDropdown");
const menuDropBtn = getEl("menuDropBtn");

menuDropBtn.addEventListener("click", function hamburgerMenu() {
    display(menuDropdown);
    menuDropBtn.classList.toggle('cross');
    sideMenusOff();
})

// Dropdown menu

const gamesMenu = getEl("gamesMenu");
const hardwareMenu = getEl("hardwareMenu");
const servicesMenu = getEl("servicesMenu");
const newsMenu = getEl("newsMenu");
const shopMenu = getEl("shopMenu");
const supportMenu = getEl("supportMenu");

// Dropdown menu icons

const gamesIconActive = getEl("gamesIconActive");
const hardwareIconActive = getEl("hardwareIconActive");
const servicesIconActive = getEl("servicesIconActive");
const newsIconActive = getEl("newsIconActive");
const shopIconActive = getEl("shopIconActive");
const supportIconActive = getEl("supportIconActive");

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

const searchDropdown = getEl("searchDropdown");
const overlay = getEl("overlay");
const siteDropdown = getEl("siteDropdown");

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

const playStationCom = getEl("playStationCom");
const playStationStore = getEl("playStationStore");
const searchField = getEl("searchField");

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

getEl("searchDropBtn").addEventListener("click", searchDropdownMenu);
getEl("searchBackBtn").addEventListener("click", searchDropdownMenu);
getEl("siteDropBtn").addEventListener("click", siteSelector);
getEl("siteBackBtn").addEventListener("click", siteSelector);

overlay.addEventListener("click", searchDropdownMenu);
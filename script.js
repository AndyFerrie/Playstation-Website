function display (el) {
    el.classList.toggle('display');
}

function removeDisplay (el) {
    el.classList.remove('display');
}

function slidein (el) {
    el.classList.toggle('slidein');
}

function removeSlidein (el) {
    el.classList.remove('slidein');
}

// Hamburger menu icon

const menuDropdown = document.getElementById("menuDropdown");
const menuDropBtn = document.getElementById("menuDropBtn");

function hamburgerMenu() {
    display(menuDropdown);
    menuDropBtn.classList.toggle('cross');
}

menuDropBtn.addEventListener("click", hamburgerMenu);
menuDropBtn.addEventListener("click", sideMenusOff);

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

function gamesSideMenu() {
    sideMenusOff();
    slidein(gamesMenu);
    display(gamesIconActive);
}

function hardwareSideMenu() {
    sideMenusOff();
    slidein(hardwareMenu);
    display(hardwareIconActive);
}

function servicesSideMenu() {
    sideMenusOff();
    slidein(servicesMenu);
    display(servicesIconActive);
}

function newsSideMenu() {
    sideMenusOff();
    slidein(newsMenu);
    display(newsIconActive);
}

function shopSideMenu() {
    sideMenusOff();
    slidein(shopMenu);
    display(shopIconActive);
}

function supportSideMenu() {
    sideMenusOff();
    slidein(supportMenu);
    display(supportIconActive);
}

function sideMenusOff() {
    activeIconsOff();
    removeSlidein(gamesMenu);
    removeSlidein(hardwareMenu);
    removeSlidein(servicesMenu);
    removeSlidein(newsMenu);
    removeSlidein(shopMenu);
    removeSlidein(supportMenu); 
}

function activeIconsOff() {
    removeDisplay(gamesIconActive);
    removeDisplay(hardwareIconActive);
    removeDisplay(servicesIconActive);
    removeDisplay(newsIconActive);
    removeDisplay(shopIconActive);
    removeDisplay(supportIconActive);
}

games.addEventListener("click", gamesSideMenu);
hardware.addEventListener("click", hardwareSideMenu);
services.addEventListener("click", servicesSideMenu);
news.addEventListener("click", newsSideMenu);
shop.addEventListener("click", shopSideMenu);
support.addEventListener("click", supportSideMenu);

document.getElementById("gamesMenuTitle").addEventListener("click", sideMenusOff);
document.getElementById("hardwareMenuTitle").addEventListener("click", sideMenusOff);
document.getElementById("servicesMenuTitle").addEventListener("click", sideMenusOff);
document.getElementById("newsMenuTitle").addEventListener("click", sideMenusOff);
document.getElementById("shopMenuTitle").addEventListener("click", sideMenusOff);
document.getElementById("supportMenuTitle").addEventListener("click", sideMenusOff);

// Site search dropdown & overlay

const searchDropdown = document.getElementById("searchDropdown");
const overlay = document.getElementById("overlay");
const siteDropdown = document.getElementById("siteDropdown");

function searchDropdownMenu() {
    searchDropdown.classList.toggle('show');
}

function displayOverlay() {
    display(overlay);
}

function siteSelector() {
    display(siteDropdown);
}

function siteSelectorOff() {
    removeDisplay(siteDropdown);
}

function siteFocusCom() {
    document.getElementById("playStationCom").classList.toggle('focus');
    document.getElementById("playStationStore").classList.remove('focus');
    document.getElementById("searchField").placeholder = "Search PlayStation.com";
}

function siteFocusStore() {
    document.getElementById("playStationStore").classList.toggle('focus');
    document.getElementById("playStationCom").classList.remove('focus');
    document.getElementById("searchField").placeholder = "Search PS Store";
}

document.getElementById("searchDropBtn").addEventListener("click", searchDropdownMenu);
document.getElementById("searchDropBtn").addEventListener("click", displayOverlay);

document.getElementById("searchBackBtn").addEventListener("click", searchDropdownMenu);
document.getElementById("searchBackBtn").addEventListener("click", displayOverlay);
document.getElementById("searchBackBtn").addEventListener("click", siteSelectorOff);

document.getElementById("siteDropBtn").addEventListener("click", siteSelector);

document.getElementById("siteBackBtn").addEventListener("click", siteSelector);

document.getElementById("playStationCom").addEventListener("click", siteSelector);
document.getElementById("playStationCom").addEventListener("click", siteFocusCom);

document.getElementById("playStationStore").addEventListener("click", siteSelector);
document.getElementById("playStationStore").addEventListener("click", siteFocusStore);

overlay.addEventListener("click", displayOverlay);
overlay.addEventListener("click", searchDropdownMenu);
overlay.addEventListener("click", siteSelectorOff);
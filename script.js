function menuDropdown() {
    document.getElementById("menuDropdown").classList.toggle('display');
}

function gamesSideMenu() {
    document.getElementById("gamesMenu").classList.toggle('slidein');
}

function hardwareSideMenu() {
    document.getElementById("hardwareMenu").classList.toggle('slidein');
}

function servicesSideMenu() {
    document.getElementById("servicesMenu").classList.toggle('slidein');
}

function newsSideMenu() {
    document.getElementById("newsMenu").classList.toggle('slidein');
}

function shopSideMenu() {
    document.getElementById("shopMenu").classList.toggle('slidein');
}

function supportSideMenu() {
    document.getElementById("supportMenu").classList.toggle('slidein');
}

function gamesSideMenuOff() {
    document.getElementById("gamesMenu").classList.remove('slidein');
}

function searchDropdown() {
    document.getElementById("searchDropdown").classList.toggle('show');
}

function overlay() {
    document.getElementById("overlay").classList.toggle('onoff');
}

function siteDropdown() {
    document.getElementById("siteDropdown").classList.toggle('display');
}

function siteDropdownOff() {
    document.getElementById("siteDropdown").classList.remove('display');
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

document.getElementById("menuDropBtn").addEventListener("click", menuDropdown);
document.getElementById("menuDropBtn").addEventListener("click", gamesSideMenuOff)

document.getElementById("games").addEventListener("click", gamesSideMenu);

document.getElementById("hardware").addEventListener("click", hardwareSideMenu);

document.getElementById("services").addEventListener("click", servicesSideMenu);

document.getElementById("news").addEventListener("click", newsSideMenu);

document.getElementById("shop").addEventListener("click", shopSideMenu);

document.getElementById("support").addEventListener("click", supportSideMenu);

document.getElementById("gamesMenuTitle").addEventListener("click", gamesSideMenuOff);

document.getElementById("searchDropBtn").addEventListener("click", searchDropdown);
document.getElementById("searchDropBtn").addEventListener("click", overlay);

document.getElementById("searchBackBtn").addEventListener("click", searchDropdown);
document.getElementById("searchBackBtn").addEventListener("click", overlay);
document.getElementById("searchBackBtn").addEventListener("click", siteDropdownOff);

document.getElementById("siteDropBtn").addEventListener("click", siteDropdown);

document.getElementById("siteBackBtn").addEventListener("click", siteDropdown);

document.getElementById("playStationCom").addEventListener("click", siteDropdown);
document.getElementById("playStationCom").addEventListener("click", siteFocusCom);

document.getElementById("playStationStore").addEventListener("click", siteDropdown);
document.getElementById("playStationStore").addEventListener("click", siteFocusStore);

document.getElementById("overlay").addEventListener("click", overlay);
document.getElementById("overlay").addEventListener("click", searchDropdown);
document.getElementById("overlay").addEventListener("click", siteDropdownOff);



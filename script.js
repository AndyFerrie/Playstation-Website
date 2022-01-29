function menuDropdown() {
    document.getElementById("menuDropdown").classList.toggle('display');
}

function gamesSideMenu() {
    sideMenusOff();
    document.getElementById("gamesMenu").classList.toggle('slidein');
    document.getElementById("gamesIconActive").classList.toggle('display');
}

function hardwareSideMenu() {
    sideMenusOff();
    document.getElementById("hardwareMenu").classList.toggle('slidein');
    document.getElementById("hardwareIconActive").classList.toggle('display');
}

function servicesSideMenu() {
    sideMenusOff();
    document.getElementById("servicesMenu").classList.toggle('slidein');
    document.getElementById("servicesIconActive").classList.toggle('display');
}

function newsSideMenu() {
    sideMenusOff();
    document.getElementById("newsMenu").classList.toggle('slidein');
    document.getElementById("newsIconActive").classList.toggle('display');
}

function shopSideMenu() {
    sideMenusOff();
    document.getElementById("shopMenu").classList.toggle('slidein');
    document.getElementById("shopIconActive").classList.toggle('display');
}

function supportSideMenu() {
    sideMenusOff();
    document.getElementById("supportMenu").classList.toggle('slidein');
    document.getElementById("supportIconActive").classList.toggle('display');
}

function sideMenusOff() {
    activeIconsOff();
    document.getElementById("gamesMenu").classList.remove('slidein');
    document.getElementById("hardwareMenu").classList.remove('slidein');
    document.getElementById("servicesMenu").classList.remove('slidein');
    document.getElementById("newsMenu").classList.remove('slidein');
    document.getElementById("shopMenu").classList.remove('slidein');
    document.getElementById("supportMenu").classList.remove('slidein');
}

function activeIconsOff() {
    document.getElementById("gamesIconActive").classList.remove('display');
    document.getElementById("hardwareIconActive").classList.remove('display');
    document.getElementById("servicesIconActive").classList.remove('display');
    document.getElementById("newsIconActive").classList.remove('display');
    document.getElementById("shopIconActive").classList.remove('display');
    document.getElementById("supportIconActive").classList.remove('display');
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
document.getElementById("menuDropBtn").addEventListener("click", sideMenusOff)

document.getElementById("games").addEventListener("click", gamesSideMenu);
document.getElementById("hardware").addEventListener("click", hardwareSideMenu);
document.getElementById("services").addEventListener("click", servicesSideMenu);
document.getElementById("news").addEventListener("click", newsSideMenu);
document.getElementById("shop").addEventListener("click", shopSideMenu);
document.getElementById("support").addEventListener("click", supportSideMenu);

document.getElementById("gamesMenuTitle").addEventListener("click", sideMenusOff);
document.getElementById("hardwareMenuTitle").addEventListener("click", sideMenusOff);
document.getElementById("servicesMenuTitle").addEventListener("click", sideMenusOff);
document.getElementById("newsMenuTitle").addEventListener("click", sideMenusOff);
document.getElementById("shopMenuTitle").addEventListener("click", sideMenusOff);
document.getElementById("supportMenuTitle").addEventListener("click", sideMenusOff);

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



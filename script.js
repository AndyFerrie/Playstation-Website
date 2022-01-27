// https://www.w3schools.com/howto/howto_js_dropdown.asp
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function menuDropdown() {
    document.getElementById("menuDropdown").classList.toggle('show');
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
document.getElementById("menuDropBtn").addEventListener("click", overlay);

document.getElementById("searchDropBtn").addEventListener("click", searchDropdown);
document.getElementById("searchDropBtn").addEventListener("click", overlay);

document.getElementById("searchBackBtn").addEventListener("click", searchDropdown);
document.getElementById("searchBackBtn").addEventListener("click", overlay);

document.getElementById("siteDropBtn").addEventListener("click", siteDropdown);

document.getElementById("siteBackBtn").addEventListener("click", siteDropdown);

document.getElementById("playStationCom").addEventListener("click", siteDropdown);
document.getElementById("playStationCom").addEventListener("click", siteFocusCom);

document.getElementById("playStationStore").addEventListener("click", siteDropdown);
document.getElementById("playStationStore").addEventListener("click", siteFocusStore);
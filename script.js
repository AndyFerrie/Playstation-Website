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
document.getElementById("games").addEventListener("swiped-right", gamesSideMenu);
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


/*!
 * swiped-events.js - v1.1.6
 * Pure JavaScript swipe events
 * https://github.com/john-doherty/swiped-events
 * @inspiration https://stackoverflow.com/questions/16348031/disable-scrolling-when-touch-moving-certain-element
 * @author John Doherty <www.johndoherty.info>
 * @license MIT
 */
!function(t,e){"use strict";"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var a=e.createEvent("CustomEvent");return a.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),a},t.CustomEvent.prototype=t.Event.prototype),e.addEventListener("touchstart",function(t){if("true"===t.target.getAttribute("data-swipe-ignore"))return;s=t.target,r=Date.now(),n=t.touches[0].clientX,a=t.touches[0].clientY,u=0,i=0},!1),e.addEventListener("touchmove",function(t){if(!n||!a)return;var e=t.touches[0].clientX,r=t.touches[0].clientY;u=n-e,i=a-r},!1),e.addEventListener("touchend",function(t){if(s!==t.target)return;var e=parseInt(l(s,"data-swipe-threshold","20"),10),o=parseInt(l(s,"data-swipe-timeout","500"),10),c=Date.now()-r,d="",p=t.changedTouches||t.touches||[];Math.abs(u)>Math.abs(i)?Math.abs(u)>e&&c<o&&(d=u>0?"swiped-left":"swiped-right"):Math.abs(i)>e&&c<o&&(d=i>0?"swiped-up":"swiped-down");if(""!==d){var b={dir:d.replace(/swiped-/,""),touchType:(p[0]||{}).touchType||"direct",xStart:parseInt(n,10),xEnd:parseInt((p[0]||{}).clientX||-1,10),yStart:parseInt(a,10),yEnd:parseInt((p[0]||{}).clientY||-1,10)};s.dispatchEvent(new CustomEvent("swiped",{bubbles:!0,cancelable:!0,detail:b})),s.dispatchEvent(new CustomEvent(d,{bubbles:!0,cancelable:!0,detail:b}))}n=null,a=null,r=null},!1);var n=null,a=null,u=null,i=null,r=null,s=null;function l(t,n,a){for(;t&&t!==e.documentElement;){var u=t.getAttribute(n);if(u)return u;t=t.parentNode}return a}}(window,document);



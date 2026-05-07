/* Search params */
const ptParam = (new URL(window.location)).searchParams.get('pt');

// Embedded links
if (ptParam != null) {
  document.getElementById('portfoliolink').href = './portfolio/index.html?pt=1'
}

/* Main Navigation Links */
const mainNavLinks = document.getElementById("mainnavlinks");

const homeLink = document.getElementById("home");
const aboutLink = document.getElementById("about");
const arLink = document.getElementById("ar");
const gamesLink = document.getElementById("games");
const webLink = document.getElementById("web");
const houdiniLink = document.getElementById("houdini");

// Mobile nav links
const mobileNavMenu = document.getElementById("mobilenavmenu");

const aboutLinkMobile = document.getElementById("aboutmobile");
const arLinkMobile = document.getElementById("armobile");
const gamesLinkMobile = document.getElementById("gamesmobile");
const webLinkMobile = document.getElementById("webmobile");
const houdiniLinkMobile = document.getElementById("houdinimobile");

const mobileNavLinksButton = document.getElementById("mobilenavlinksbutton");
const mobileNavLinksButtonTop = document.getElementById("mobilenavlinksbuttontop");
const mobileNavLinksButtonMiddle = document.getElementById("mobilenavlinksbuttonmiddle");
const mobileNavLinksButtonBottom = document.getElementById("mobilenavlinksbuttonbottom");

// Update nav links layout
function updateMainNavLinksLayout() {

  if (window.innerWidth > window.innerHeight) {

    if (mobileNavMenuVisible) showMobileNavMenu();

    mainNavLinks.style.visibility = 'visible';

    mobileNavLinksButton.style.visibility = 'hidden';

  }

  else {

    mainNavLinks.style.visibility = 'hidden';

    mobileNavLinksButton.style.visibility = 'visible';

  }

}
updateMainNavLinksLayout();

window.onresize = function () {

  updateMainNavLinksLayout();

}

// Mobile nav links button
var mobileNavLinksButtonMouseDown = false;

mobileNavLinksButton.onmouseover = function() {
  body.style.setProperty('cursor', 'pointer');
}

mobileNavLinksButton.onmouseout = function() {
  mobileNavLinksButtonMouseDown = false;
  body.style.setProperty('cursor', 'default');
}

mobileNavLinksButton.onmousedown = function() {
  mobileNavLinksButtonMouseDown = true;
}

mobileNavLinksButton.onmouseup = function() {
  if (mobileNavLinksButtonMouseDown) {
    showMobileNavMenu();
  }
}

var mobileNavMenuVisible = false;
function showMobileNavMenu() {

  if (mobileNavMenuVisible) {

    mobileNavMenu.style.setProperty('animation', 'mobileNavOut 0.15s forwards');

    body.style.setProperty('overflow-y', 'scroll');

    mobileNavLinksButtonTop.style.setProperty('animation', 'mobileNavButtonTopOut 0.15s forwards');
    mobileNavLinksButtonMiddle.style.setProperty('animation', 'mobileNavButtonMiddleOut 0.15s forwards');
    mobileNavLinksButtonBottom.style.setProperty('animation', 'mobileNavButtonBottomOut 0.15s forwards');

    mobileNavMenuVisible = false;

    setTimeout(function() { 
      
      mobileNavMenu.style.visibility = 'hidden';
    
    }, 150);

  }

  else {

    mobileNavMenu.style.setProperty('animation', 'mobileNavIn 0.35s forwards');

    body.style.setProperty('overflow-y', 'hidden');

    mobileNavLinksButtonTop.style.setProperty('animation', 'mobileNavButtonTopIn 0.35s forwards');
    mobileNavLinksButtonMiddle.style.setProperty('animation', 'mobileNavButtonMiddleIn 0.35s forwards');
    mobileNavLinksButtonBottom.style.setProperty('animation', 'mobileNavButtonBottomIn 0.35s forwards');

    mobileNavMenu.style.visibility = 'visible';

    mobileNavMenuVisible = true;

  }
  
}

// Links
var currentTarget = 'web';
webLink.style.setProperty('border-color', 'rgb(255, 227, 100, 1.0)');
webLinkMobile.style.setProperty('border-color', 'rgb(255, 227, 100, 1.0)');

var homeLinkMouseDown = false;

homeLink.onmouseover = function() {
  homeLinkMouseOver();
}

homeLink.onmouseout = function() {
  homeLinkMouseDown = false;
  homeLinkMouseOut();
}

homeLink.onmousedown = function() {
  homeLinkMouseDown = true;
}

homeLink.onmouseup = function() {
  if (homeLinkMouseDown) {
    homeLinkClicked();
  }
}

// About
var aboutLinkMouseDown = false;

aboutLink.onmouseover = function() {
  if (currentTarget != 'about') {
    aboutLinkMouseOver();
  }
}

aboutLink.onmouseout = function() {
  if (currentTarget != 'about') {
    aboutLinkMouseOut();
    aboutLinkMouseDown = false;
  }
}

aboutLink.onmousedown = function() {
  aboutLinkMouseDown = true;
}

aboutLink.onmouseup = function() {
  if (aboutLinkMouseDown && currentTarget != 'about') {
    aboutLinkClicked();
  }
}

aboutLinkMobile.onmouseover = function() {
  if (currentTarget != 'about') {
    aboutLinkMouseOver();
  }
}

aboutLinkMobile.onmouseout = function() {
  if (currentTarget != 'about') {
    aboutLinkMouseOut();
    aboutLinkMouseDown = false;
  }
}

aboutLinkMobile.onmousedown = function() {
  aboutLinkMouseDown = true;
}

aboutLinkMobile.onmouseup = function() {
  if (aboutLinkMouseDown && currentTarget != 'about') {
    aboutLinkClicked();
  }
}

// AR
var arLinkMouseDown = false;

arLink.onmouseover = function() {
  if (currentTarget != 'ar') {
    arLinkMouseOver();
  }
}

arLink.onmouseout = function() {
  if (currentTarget != 'ar') {
    arLinkMouseOut();
  }
  arLinkMouseDown = false;
}

arLink.onmousedown = function() {
  arLinkMouseDown = true;
}

arLink.onmouseup = function() {
  if (arLinkMouseDown && currentTarget != 'ar') {
    arLinkClicked();
  }
}

arLinkMobile.onmouseover = function() {
  if (currentTarget != 'ar') {
    arLinkMouseOver();
  }
}

arLinkMobile.onmouseout = function() {
  if (currentTarget != 'ar') {
    arLinkMouseOut();
  }
  arLinkMouseDown = false;
}

arLinkMobile.onmousedown = function() {
  arLinkMouseDown = true;
}

arLinkMobile.onmouseup = function() {
  if (arLinkMouseDown && currentTarget != 'ar') {
    arLinkClicked();
  }
}

// Games
var gamesLinkMouseDown = false;

gamesLink.onmouseover = function() {
  if (currentTarget != 'games') {
    gamesLinkMouseOver();
  }
}

gamesLink.onmouseout = function() {
  if (currentTarget != 'games') {
    gamesLinkMouseOut();
  }
  gamesLinkMouseDown = false;
}

gamesLink.onmousedown = function() {
  gamesLinkMouseDown = true;
}

gamesLink.onmouseup = function() {
  if (gamesLinkMouseDown && currentTarget != 'games') {
    gamesLinkClicked();
  }
}

gamesLinkMobile.onmouseover = function() {
  if (currentTarget != 'games') {
    gamesLinkMouseOver();
  }
}

gamesLinkMobile.onmouseout = function() {
  if (currentTarget != 'games') {
    gamesLinkMouseOut();
  }
  gamesLinkMouseDown = false;
}

gamesLinkMobile.onmousedown = function() {
  gamesLinkMouseDown = true;
}

gamesLinkMobile.onmouseup = function() {
  if (gamesLinkMouseDown && currentTarget != 'games') {
    gamesLinkClicked();
  }
}

// Web

var webLinkMouseDown = false;

webLink.onmouseover = function() {
  if (currentTarget != 'web') {
    webLinkMouseOver();
  }
}

webLink.onmouseout = function() {
  if (currentTarget != 'web') {
    webLinkMouseOut();
  }
  webLinkMouseDown = false;
}

webLink.onmousedown = function() {
  webLinkMouseDown = true;
}

webLink.onclick = function() {
  if (webLinkMouseDown && currentTarget != 'web') {
    webLinkClicked();
  }
}

webLinkMobile.onmouseover = function() {
  if (currentTarget != 'web') {
    webLinkMouseOver();
  }
}

webLinkMobile.onmouseout = function() {
  if (currentTarget != 'web') {
    webLinkMouseOut();
  }
  webLinkMouseDown = false;
}

webLinkMobile.onmousedown = function() {
  webLinkMouseDown = true;
}

webLinkMobile.onclick = function() {
  if (currentTarget != 'web' && webLinkMouseDown) {
    webLinkClicked();
  }
}

// Houdini

var houdiniLinkMouseDown = false;

houdiniLink.onmouseover = function() {
  if (currentTarget != 'houdini') {
    houdiniLinkMouseOver();
  }
}

houdiniLink.onmouseout = function() {
  if (currentTarget != 'houdini') {
    houdiniLinkMouseOut();
  }
  houdiniLinkMouseDown = false;
}

houdiniLink.onmousedown = function() {
  houdiniLinkMouseDown = true;
}

houdiniLink.onclick = function() {
  if (currentTarget != 'houdini' && houdiniLinkMouseDown) {
    houdiniLinkClicked();
  }
}

houdiniLinkMobile.onmouseover = function() {
  if (currentTarget != 'houdini') {
    houdiniLinkMouseOver();
  }
}

houdiniLinkMobile.onmouseout = function() {
  if (currentTarget != 'houdini') {
    houdiniLinkMouseOut();
  }
  houdiniLinkMouseDown = false;
}

houdiniLinkMobile.onmousedown = function() {
  houdiniLinkMouseDown = true;
}

houdiniLinkMobile.onclick = function() {
  if (currentTarget != 'houdini' && houdiniLinkMouseDown) {
    houdiniLinkClicked();
  }
}

// Navigation link interaction functions //
function homeLinkMouseOver() {

  homeLink.style.setProperty('animation', 'grow 0.25s forwards');
  body.style.setProperty('cursor', 'pointer');

}

function homeLinkMouseOut() {

  homeLink.style.setProperty('animation', 'shrink 0.25s forwards');
  body.style.setProperty('cursor', 'default');

}

function homeLinkClicked() {

  homeLink.style.setProperty('animation', 'bounce 0.5s forwards');

  if (mobileNavMenuVisible) showMobileNavMenu();
  
  if (ptParam == null) {
    location.href = "https://noahgunther.com";
  }
  else {
    location.href = "https://noahgunther.com/about";
  }

}

function aboutLinkMouseOver() {

  if (currentTarget != "about") {

    aboutLink.style.setProperty('animation', 'grow 0.25s forwards');
    aboutLinkMobile.style.setProperty('animation', 'grow 0.25s forwards');
    body.style.setProperty('cursor', 'pointer');

  }

}

function aboutLinkMouseOut() {

  aboutLink.style.setProperty('animation', 'shrink 0.25s forwards');
  aboutLinkMobile.style.setProperty('animation', 'shrink 0.25s forwards');
  body.style.setProperty('cursor', 'default');

}

function aboutLinkClicked() {

  if (mobileNavMenuVisible) showMobileNavMenu();

  aboutLink.style.setProperty('animation', 'bounceChangeBorder 0.5s forwards');
  aboutLinkMobile.style.setProperty('animation', 'bounceChangeBorder 0.5s forwards');
  body.style.setProperty('cursor', 'default');

  if (ptParam == null) {
    location.href = "https://noahgunther.com/?context=about"
  }
  else {
    location.href = "https://noahgunther.com/about";
  }

}

function arLinkMouseOver() {

  if (currentTarget != "ar") {

    arLink.style.setProperty('animation', 'grow 0.25s forwards');
    arLinkMobile.style.setProperty('animation', 'grow 0.25s forwards');
    body.style.setProperty('cursor', 'pointer');

  }

}

function arLinkMouseOut() {

  arLink.style.setProperty('animation', 'shrink 0.25s forwards');
  arLinkMobile.style.setProperty('animation', 'shrink 0.25s forwards');
  body.style.setProperty('cursor', 'default');

}

function arLinkClicked() {

  if (mobileNavMenuVisible) showMobileNavMenu();

  arLink.style.setProperty('animation', 'bounceChangeBorder 0.5s forwards');
  arLinkMobile.style.setProperty('animation', 'bounceChangeBorder 0.5s forwards');
  body.style.setProperty('cursor', 'default');
  
  if (ptParam == null) {
    location.href = "https://noahgunther.com/?context=ar"
  }
  else {
    location.href = "https://noahgunther.com/ar";
  }

}

function gamesLinkMouseOver() {

  if (currentTarget != "games") {

    gamesLink.style.setProperty('animation', 'grow 0.25s forwards');
    gamesLinkMobile.style.setProperty('animation', 'grow 0.25s forwards');
    body.style.setProperty('cursor', 'pointer');

  }

}

function gamesLinkMouseOut() {

  gamesLink.style.setProperty('animation', 'shrink 0.25s forwards');
  gamesLinkMobile.style.setProperty('animation', 'shrink 0.25s forwards');
  body.style.setProperty('cursor', 'default');

}

function gamesLinkClicked() {

  if (mobileNavMenuVisible) showMobileNavMenu();

  gamesLink.style.setProperty('animation', 'bounce 0.5s forwards');
  gamesLinkMobile.style.setProperty('animation', 'bounce 0.5s forwards');
  body.style.setProperty('cursor', 'default');

  if (ptParam == null) {
    location.href = "https://noahgunther.com/games"
  }
  else {
    location.href = "https://noahgunther.com/games/?pt=1";
  }

}

function webLinkMouseOver() {

  webLink.style.setProperty('animation', 'grow 0.25s forwards');
  webLinkMobile.style.setProperty('animation', 'grow 0.25s forwards');
  body.style.setProperty('cursor', 'pointer');

}

function webLinkMouseOut() {

  webLink.style.setProperty('animation', 'shrink 0.25s forwards');
  webLinkMobile.style.setProperty('animation', 'shrink 0.25s forwards');
  body.style.setProperty('cursor', 'default');

}

function webLinkClicked() {

  if (mobileNavMenuVisible) showMobileNavMenu();
  
  webLink.style.setProperty('animation', 'bounce 0.5s forwards');
  webLinkMobile.style.setProperty('animation', 'bounce 0.5s forwards');
  body.style.setProperty('cursor', 'default');
  
  if (ptParam == null) {
    location.href = "https://noahgunther.com/web"
  }
  else {
    location.href = "https://noahgunther.com/web/?pt=1";
  }

}

function houdiniLinkMouseOver() {

  houdiniLink.style.setProperty('animation', 'grow 0.25s forwards');
  houdiniLinkMobile.style.setProperty('animation', 'grow 0.25s forwards');
  body.style.setProperty('cursor', 'pointer');

}

function houdiniLinkMouseOut() {

  houdiniLink.style.setProperty('animation', 'shrink 0.25s forwards');
  houdiniLinkMobile.style.setProperty('animation', 'shrink 0.25s forwards');
  body.style.setProperty('cursor', 'default');

}

function houdiniLinkClicked() {

  if (mobileNavMenuVisible) showMobileNavMenu();
  
  houdiniLink.style.setProperty('animation', 'bounce 0.5s forwards');
  houdiniLinkMobile.style.setProperty('animation', 'bounce 0.5s forwards');
  body.style.setProperty('cursor', 'default');

  if (ptParam == null) {
    location.href = "https://noahgunther.com/houdini"
  }
  else {
    location.href = "https://noahgunther.com/houdini/?pt=1";
  }

}
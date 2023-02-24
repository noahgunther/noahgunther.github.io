/* Main Navigation Links */
const mainNavLinks = document.getElementById("mainnavlinks");

const homeLink = document.getElementById("home");
const aboutLink = document.getElementById("about");
const arLink = document.getElementById("ar");
const vrLink = document.getElementById("vr");
const webLink = document.getElementById("web");
const houdiniLink = document.getElementById("houdini");
const otherLink = document.getElementById("other");

// Mobile nav links
const mobileNavMenu = document.getElementById("mobilenavmenu");

const aboutLinkMobile = document.getElementById("aboutmobile");
const arLinkMobile = document.getElementById("armobile");
const vrLinkMobile = document.getElementById("vrmobile");
const webLinkMobile = document.getElementById("webmobile");
const houdiniLinkMobile = document.getElementById("houdinimobile");
const otherLinkMobile = document.getElementById("othermobile");

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
var currentTarget = 'ar';
arLink.style.setProperty('border-color', 'rgb(255, 227, 100, 1.0)');
arLinkMobile.style.setProperty('border-color', 'rgb(255, 227, 100, 1.0)');

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

// VR
var vrLinkMouseDown = false;

vrLink.onmouseover = function() {
  if (currentTarget != 'vr') {
    vrLinkMouseOver();
  }
}

vrLink.onmouseout = function() {
  if (currentTarget != 'vr') {
    vrLinkMouseOut();
  }
  vrLinkMouseDown = false;
}

vrLink.onmousedown = function() {
  vrLinkMouseDown = true;
}

vrLink.onmouseup = function() {
  if (vrLinkMouseDown && currentTarget != 'vr') {
    vrLinkClicked();
  }
}

vrLinkMobile.onmouseover = function() {
  if (currentTarget != 'vr') {
    vrLinkMouseOver();
  }
}

vrLinkMobile.onmouseout = function() {
  if (currentTarget != 'vr') {
    vrLinkMouseOut();
  }
  vrLinkMouseDown = false;
}

vrLinkMobile.onmousedown = function() {
  vrLinkMouseDown = true;
}

vrLinkMobile.onmouseup = function() {
  if (vrLinkMouseDown && currentTarget != 'vr') {
    vrLinkClicked();
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

// Other
var otherLinkMouseDown = false;

otherLink.onmouseover = function() {
  if (currentTarget != 'gallery') {
    otherLinkMouseOver();
  }
}

otherLink.onmouseout = function() {
  if (currentTarget != 'gallery') {
    otherLinkMouseOut();
  }
  otherLinkMouseDown = false;
}

otherLink.onmousedown = function() {
  otherLinkMouseDown = true;
}

otherLink.onmouseup = function() {
  if (currentTarget != 'gallery' && otherLinkMouseDown) {
    otherLinkClicked();
  }
}

otherLinkMobile.onmouseover = function() {
  if (currentTarget != 'gallery') {
    otherLinkMouseOver();
  }
}

otherLinkMobile.onmouseout = function() {
  if (currentTarget != 'gallery') {
    otherLinkMouseOut();
  }
  otherLinkMouseDown = false;
}

otherLinkMobile.onmousedown = function() {
  otherLinkMouseDown = true;
}

otherLinkMobile.onmouseup = function() {
  if (currentTarget != 'gallery' && otherLinkMouseDown) {
    otherLinkClicked();
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

  location.href = "https://noahgunther.com"

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

  location.href = "https://noahgunther.com/?context=about"

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

  location.href = "https://noahgunther.com/?context=ar"

}

function vrLinkMouseOver() {

  if (currentTarget != "vr") {

    vrLink.style.setProperty('animation', 'grow 0.25s forwards');
    vrLinkMobile.style.setProperty('animation', 'grow 0.25s forwards');
    body.style.setProperty('cursor', 'pointer');

  }

}

function vrLinkMouseOut() {

  vrLink.style.setProperty('animation', 'shrink 0.25s forwards');
  vrLinkMobile.style.setProperty('animation', 'shrink 0.25s forwards');
  body.style.setProperty('cursor', 'default');

}

function vrLinkClicked() {

  if (mobileNavMenuVisible) showMobileNavMenu();

  vrLink.style.setProperty('animation', 'bounce 0.5s forwards');
  vrLinkMobile.style.setProperty('animation', 'bounce 0.5s forwards');
  body.style.setProperty('cursor', 'default');

  location.href = "https://noahgunther.com/vr/vrjam"

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
  
  location.href = "https://noahgunther.com/web"

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

  location.href = "https://noahgunther.com/houdini"


}

function otherLinkMouseOver() {
  
  otherLink.style.setProperty('animation', 'grow 0.25s forwards');
  otherLinkMobile.style.setProperty('animation', 'grow 0.25s forwards');
  body.style.setProperty('cursor', 'pointer');

}

function otherLinkMouseOut() {

  otherLink.style.setProperty('animation', 'shrink 0.25s forwards');
  otherLinkMobile.style.setProperty('animation', 'shrink 0.25s forwards');
  body.style.setProperty('cursor', 'default');

}

function otherLinkClicked() {

  if (mobileNavMenuVisible) showMobileNavMenu();

  otherLink.style.setProperty('animation', 'bounce 0.5s forwards');
  otherLinkMobile.style.setProperty('animation', 'bounce 0.5s forwards');
  body.style.setProperty('cursor', 'default');

  // Gallery //

  location.href = "https://noahgunther.wordpress.com"

}
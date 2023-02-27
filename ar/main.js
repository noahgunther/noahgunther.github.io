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

// AR content controls
const arGamesLastButton = document.getElementById('lastbuttongames');
const arGamesNextButton = document.getElementById('nextbuttongames');

const socialArLastButton = document.getElementById('lastbuttonsocial');
const socialArNextButton = document.getElementById('nextbuttonsocial');

arGamesLastButton.onmouseover = function() {
  body.style.setProperty('cursor', 'pointer');
}

arGamesLastButton.onmouseout = function() {
  body.style.setProperty('cursor', 'default');
}

arGamesLastButton.onclick = function() {

  arGames[arGamesIndex].pause();
  arGames[arGamesIndex].currentTime = 0;

  arGames[arGamesIndex].style.visibility = 'hidden';
  
  arGamesIndex--;
  arGamesIndex = ((arGamesIndex % arGames.length) + arGames.length) % arGames.length;
  
  arGames[arGamesIndex].currentTime = 0;
  arGames[arGamesIndex].load();

  arGames[arGamesIndex].style.visibility = 'visible';

  arGamesCaptionText.innerHTML = arGamesCaptions[arGamesIndex];

}

arGamesNextButton.onmouseover = function() {
  body.style.setProperty('cursor', 'pointer');
}

arGamesNextButton.onmouseout = function() {
  body.style.setProperty('cursor', 'default');
}

arGamesNextButton.onclick = function() {
  
  arGames[arGamesIndex].pause();
  arGames[arGamesIndex].currentTime = 0;

  arGames[arGamesIndex].style.visibility = 'hidden';
  
  arGamesIndex++;
  arGamesIndex %= arGames.length;
  
  arGames[arGamesIndex].currentTime = 0;
  arGames[arGamesIndex].load();

  arGames[arGamesIndex].style.visibility = 'visible';

  arGamesCaptionText.innerHTML = arGamesCaptions[arGamesIndex];

}

socialArLastButton.onmouseover = function() {
  body.style.setProperty('cursor', 'pointer');
}

socialArLastButton.onmouseout = function() {
  body.style.setProperty('cursor', 'default');
}

socialArLastButton.onclick = function() {

  socialAr[socialArIndex].pause();
  socialAr[socialArIndex].currentTime = 0;

  socialAr[socialArIndex].style.visibility = 'hidden';
  
  socialArIndex--;
  socialArIndex = ((socialArIndex % socialAr.length) + socialAr.length) % socialAr.length;

  socialAr[socialArIndex].currentTime = 0;
  socialAr[socialArIndex].load();

  socialAr[socialArIndex].style.visibility = 'visible';

  socialArCaptionText.innerHTML = socialArCaptions[socialArIndex];

}

socialArNextButton.onmouseover = function() {
  body.style.setProperty('cursor', 'pointer');
}

socialArNextButton.onmouseout = function() {
  body.style.setProperty('cursor', 'default');
}

socialArNextButton.onclick = function() {

  socialAr[socialArIndex].pause();
  socialAr[socialArIndex].currentTime = 0;

  socialAr[socialArIndex].style.visibility = 'hidden';
  
  socialArIndex++;
  socialArIndex %= socialAr.length;

  socialAr[socialArIndex].currentTime = 0;
  socialAr[socialArIndex].load();

  socialAr[socialArIndex].style.visibility = 'visible';

  socialArCaptionText.innerHTML = socialArCaptions[socialArIndex];

}

// AR videos and descriptions
var arGamesIndex = 0;
var arGames = [];
arGames.push(document.getElementById('alienattack'));
arGames.push(document.getElementById('bumperroyale'));
arGames.push(document.getElementById('charades'));
arGames.push(document.getElementById('desertofdoom'));
arGames.push(document.getElementById('dontfall'));
arGames.push(document.getElementById('haveyouever'));
arGames.push(document.getElementById('hotpotato'));
arGames.push(document.getElementById('jumpwave'));
arGames.push(document.getElementById('kawaiisushi'));
arGames.push(document.getElementById('mazeofmystery'));
arGames.push(document.getElementById('pestcontrol'));
arGames.push(document.getElementById('sk8erz'));
arGames.push(document.getElementById('snackup'));
arGames.push(document.getElementById('snapnsnack'));
arGames.push(document.getElementById('speedrush'));
arGames.push(document.getElementById('trivia'));

var socialArIndex = 0;
var socialAr = [];
socialAr.push(document.getElementById('friendsspacewalk'));
socialAr.push(document.getElementById('groupselfie'));
socialAr.push(document.getElementById('costumeselector'));
socialAr.push(document.getElementById('reshape'));
socialAr.push(document.getElementById('wintercoaster'));
socialAr.push(document.getElementById('abstractlove'));
socialAr.push(document.getElementById('angelsanddemons'));
socialAr.push(document.getElementById('poolfloaty'));
socialAr.push(document.getElementById('candycottage'));

var arGamesCaptions = [];
arGamesCaptions.push("Alien Attack: In this AR Game, callers work together to defend their fort from aliens by firing laser beams at them. As time goes on, stronger aliens arrive, making it harder and harder to keep them at bay. Callers are composed into the area at the bottom of the screen and each given a laser cannon, controlled by tapping on the screen.");
arGamesCaptions.push("Bumper royale: A thrilling battle royale, this time with bumper cars! Using Cannon.js for physics, callers are each given a car to drive by tapping on the screen to build momentum. As time goes on, the stage shrinks, giving players less and less room to maneuver. All car positions and events are synchronized over the network.");
arGamesCaptions.push("Charades: classic charades, with prompts only visible to the player taking their turn. Score points by guessing what the active player is acting out, and laugh as everyone tries to figure out how to act things out while holding their phone.");
arGamesCaptions.push("Desert of Doom: a turn-based cooperative game, where one player tries to navigate a field of dangerous cacti during sandstorm that prevents them from seeing in front of them. The other participants in the call CAN see the cacti, however, and yell at the player to go left or right based on what\'s ahead.");
arGamesCaptions.push("Don't Fall: players navigate a tightrope way up high, where fans suspended by balloons create gusty winds that threaten to blow players away if they don\'t lean in just right. The last player left walking the tightrope wins!");
arGamesCaptions.push("Have You Ever: participants are asked a series of yes or no questions, such as \"Have you ever seen a ghost?\" If they answer yes, they get a badge corresponding to that answer. Build up a halo of badges to impress your friends with all your experiences!");
arGamesCaptions.push("Hot potato! But this time it\'s alive, and clinging to your face! Shake it off to send it to someone else, and be ever wary of the heat - it might just pop into a delicious potato-based treat at any second.");
arGamesCaptions.push("Jump Wave: jump up and up and up, as high as you can go, in this endless platform jumping game. Watch your friends above or below you with off-screen indicators showing their position - if you fall, you can spectate the current leader until everyone has fallen and the players are ranked.");
arGamesCaptions.push("Kawaii Sushi: catch as much sushi as you can in the limited amount of time available, competing with the other players in the call. Whoever catches the most sushi wins - just be careful that you don\'t swallow the wasabi, which will subtract a point!");
arGamesCaptions.push("Maze of Mystery: this AR game procedurally generates a random haunted house maze each time it\'s played. Avoid ghosts, dead ends, and arguments with your friends as you take turns steering the characters to try and find the hidden magic goal in this mysterious maze.");
arGamesCaptions.push("Pest Control: just like whack-a-mole, but with a sly twist - in this game, players take turns trying to hit as many moles as they can with their mallets. However, they need to be careful that they don\'t accidentally whack one of their friends by mistake; you never know whose head is going to pop up next.");
arGamesCaptions.push("Sk8erz: skate forever down this city street, if you can, but be careful of the many hazards that you\'ll encounter, including manholes, garbage cans, street signs and even pizza delivery drones. Kickflip and duck your way past more obstacles than your friends to win this game.");
arGamesCaptions.push("Snack Up: match the snack on your face with one floating down through the air in this object matching game, but be careful of nabbing the wrong one, especially as things move faster and faster. Get the most matches without being knocked out to score a victory and also be the fullest.");
arGamesCaptions.push("Snack 'N' Snap: guide your hungry pet turtle to catch leaves, fruit, or, even better, falling stars that triple the points you receive from catching any of these. The most satisfied turtle when time runs out wins, and you and your turtle both get a leaf crown to celebrate.");
arGamesCaptions.push("Speed Rush: a good old classic racing game, compete with your friends to be the first to the finish. Steer your car by tilting your phone, and be careful that you don\'t crash, slowing you down and giving your competition a chance to pull ahead.");
arGamesCaptions.push("Trivia: who knows more stuff? A classic question for a group of people on a video call, answered by playing a round of AR trivia! That\'s trivia in AR, not about AR. Try and answer as many of these obscure questions correctly to win and be officially recognized as the smartest person on the video call.");

const arGamesCaptionText = document.getElementById("argamescaption");
arGamesCaptionText.innerHTML = arGamesCaptions[0];

var socialArCaptions = [];
socialArCaptions.push("Multihead Alien: composing the faces of all the present callers into the heads of a many-headed alien enjoying a stroll on its tiny planet, this AR experience takes over the whole phone screen and is consistent for each caller, using networking technology to allow callers to see others moving their heads around in space.");
socialArCaptions.push("Group Selfie: this AR experience is simple, but one of my favorites - callers are layered together using background segmentation into the same screen space, as if they were all in the same room. Ideal for taking virtual selfies together, callers can move to the front of the stack by shaking their phone. The possibilities for making funny scenes together are endless.");
socialArCaptions.push("Costume Selector: all callers remain in the standard video calling grid format, taking turns choosing between two ridiculous costume options. Whichever they pick, that costume element will be applied to all callers. If the callers choose all four options in a matching set (pirate, rockstar, cyborg, or princess), a special secret costume element is revealed.");
socialArCaptions.push("Reshape Face: no one is safe from having their face morphed into various shapes in this experience, in which callers can select shapes to morph the faces of everyone on the call.");
socialArCaptions.push("Winter Coaster: all callers faces are composed into a winter wonderland riding a sleigh-themed roller coaster. The experience uses the full phone screen, and sends the extracted faces of the other callers over the video call using a custom shader packing and unpacking system, and the rotation of the heads is possible using networking technology to send a rotational vector between callers.");
socialArCaptions.push("Abstract Love: callers are composed into a lovely scene full of hearts and pastel pinks. Want to capture a moment of love from far away, or create a valentines day AR photo? This is the experience for you!");
socialArCaptions.push("Angels and Demons: the Devil on one shoulder and the Angel on the other in this AR experience will be randomly selected from the other participants in the call - be careful who you listen to! This effect uses a variety of custom screen space shader effects to give each character their unique glow.");
socialArCaptions.push("Pool Floaty: enjoy a relaxing trip to the pool on a hot summer day with this AR experience, which composes all callers into a scene complete with floaties, headwear, and a custom water shader. Each caller is given a unique set of accessories, synchronized over the network so everyone has a consistent experience.");
socialArCaptions.push("Candy Cottage: each caller is placed in a window of a lovely gingerbread home in this holiday themed AR experience. Tilt your phone around to see more of the scene and watch out for the gingerbread homeowner peeking out of the door.");

const socialArCaptionText = document.getElementById("socialarcaption");
socialArCaptionText.innerHTML = socialArCaptions[0];
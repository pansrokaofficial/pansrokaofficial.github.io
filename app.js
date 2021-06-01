const title = document.querySelector('#title');
const playToSelector = document.querySelector('#playTo');
const p1Element = document.querySelector('#p1');
const p1NameInput = document.querySelector('#p1Name');
const p1ScoreElement = document.querySelector('#p1Score');
const p1Button = document.querySelector('#p1Button');
const p2Element = document.querySelector('#p2');
const p2NameInput = document.querySelector('#p2Name');
const p2ScoreElement = document.querySelector('#p2Score');
const p2Button = document.querySelector('#p2Button');
const resetLink = document.querySelector('#reset');
const resetLinkMobile = document.querySelector('#resetMobile');
const widgetSubt = document.querySelector('#widgetSubt');
const closePopupLink = document.querySelector("#closePopup");
const dropdown = document.querySelector('#playTo');

const dimm = document.querySelector('#dimm');
const iconElement = document.querySelector('#icon');
const iconElement1 = document.querySelector('#icon1');
const iconElement2 = document.querySelector('#icon2');
const iconElement3 = document.querySelector('#icon3');
const emoji = document.querySelector('#emoji');
const emoji1 = document.querySelector('#emoji1');
const emoji2 = document.querySelector('#emoji2');
const emoji3 = document.querySelector('#emoji3');

// Catching initial field values
const initialTitle = title.innerText;
const initialP1Name = p1NameInput.defaultValue;
const initialP2Name = p2NameInput.defaultValue;
const initialScoreColor = p1ScoreElement.style.color;
const initialTitleColor = title.style.color;
const initialPlayersBg = p1Element.style.backgroundColor;

// Editable variables
let initialEmoji = emoji.innerText;

let p1Name = initialP1Name;
let p2Name = initialP2Name;

let p1Score = 0;
let p2Score = 0;
let playToValue = 3;

let isCtrlPressed = false;

let os = "undefined";

let mobileScreen = window.matchMedia('(min-width: 480px)');

// Player name inputs
p1NameInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        p1NameInput.blur();
    }
})

p1NameInput.addEventListener('change', (e) => {
    console.log(e.target.value);
    p1Name = e.target.value;
})

p2NameInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        p2NameInput.blur();
    }
})

p2NameInput.addEventListener('change', (e) => {
    console.log(e.target.value);
    p2Name = e.target.value;
})

// Rounds count selector
playToSelector.addEventListener('change', (e) => {
    console.log(e.target.value);
    playToValue = e.target.value;
})

// Adding up points
p1Button.addEventListener('click', (e) => {
    p1Score = p1Score +1;
    p1ScoreElement.innerText = `${p1Score}`;
    if (p1Score >= playToValue) {
        party.confetti(iconElement);
        p1Button.disabled = true;
        p2Button.disabled = true;
        title.innerText = `${p1Name} wins!`;
        title.style.color = "#35D491";
        p1ScoreElement.style.color = "#35D491";
        p1Element.style.backgroundColor = "rgba(53,212,145,0.16)";
        p2ScoreElement.style.color = "#F05050";
        p2Element.style.backgroundColor = "rgba(240,80,80,0.16)";
    }
})

p1Button.addEventListener('mousedown', (e) => {
    p1Element.style.backgroundColor = "rgba(41,51,114,0.16)";
})

p1Button.addEventListener('mouseup', (e) => {
    p1Element.style.backgroundColor = "rgba(41,51,114,0.04)";
})

p2Button.addEventListener('click', (e) => {
    p2Score = p2Score +1;
    p2ScoreElement.innerText = `${p2Score}`;
    if (p2Score >= playToValue) {
        party.confetti(iconElement);
        p2Button.disabled = true;
        p1Button.disabled = true;
        title.innerText = `${p2Name} wins!`;
        title.style.color = "#35D491";
        p2ScoreElement.style.color = "#35D491";
        p2Element.style.backgroundColor = "rgba(53,212,145,0.16)";
        p1ScoreElement.style.color = "#F05050";
        p1Element.style.backgroundColor = "rgba(240,80,80,0.16)";
    }
})

p2Button.addEventListener('mousedown', (e) => {
    p2Element.style.backgroundColor = "rgba(41,51,114,0.16)";
})

p2Button.addEventListener('mouseup', (e) => {
    p2Element.style.backgroundColor = "rgba(41,51,114,0.04)";
})

// Resetting the state
window.addEventListener('keydown', (e) => {
    if (e.keyCode === 17 || e.keyCode === 91) {
        e.preventDefault();
        isCtrlPressed = true;
        resetLink.innerText = "Reset everything";
    }
})

window.addEventListener('keyup', (e) => {
    if (e.keyCode === 17 || e.keyCode === 91) {
        e.preventDefault();
        isCtrlPressed = false;
        resetLink.innerText = "Reset score";
    }
})

resetLink.addEventListener('click', (e) => {
    if (isCtrlPressed === false) {
        e.preventDefault();
        p1Score = 0;
        p2Score = 0;
        p1ScoreElement.innerText = "0";
        p2ScoreElement.innerText = "0";
        p1ScoreElement.style.color = initialScoreColor;
        p2ScoreElement.style.color = initialScoreColor;
        p1Button.disabled = false;
        p2Button.disabled = false;
        title.innerText = initialTitle;
        title.style.color = initialTitleColor;
        p1Element.style.backgroundColor = initialPlayersBg;
        p2Element.style.backgroundColor = initialPlayersBg;
    }
    else {
        e.preventDefault();
        p1NameInput.value = initialP1Name;
        p1Name = initialP1Name;
        p2NameInput.value = initialP2Name;
        p2Name = initialP2Name;
        p1Score = 0;
        p2Score = 0;
        p1ScoreElement.innerText = "0";
        p2ScoreElement.innerText = "0";
        p1ScoreElement.style.color = initialScoreColor;
        p2ScoreElement.style.color = initialScoreColor;
        p1Button.disabled = false;
        p2Button.disabled = false;
        title.innerText = initialTitle;
        emoji.innerText = emoji1.innerText;
        iconElement.style.backgroundColor = "#FCDFDF";
        title.style.color = initialTitleColor;
        p1Element.style.backgroundColor = initialPlayersBg;
        p2Element.style.backgroundColor = initialPlayersBg;
    }
})

resetLinkMobile.addEventListener('click', (e) => {
    e.preventDefault();
    p1NameInput.value = initialP1Name;
    p1Name = initialP1Name;
    p2NameInput.value = initialP2Name;
    p2Name = initialP2Name;
    p1Score = 0;
    p2Score = 0;
    p1ScoreElement.innerText = "0";
    p2ScoreElement.innerText = "0";
    p1ScoreElement.style.color = initialScoreColor;
    p2ScoreElement.style.color = initialScoreColor;
    p1Button.disabled = false;
    p2Button.disabled = false;
    title.innerText = initialTitle;
    emoji.innerText = emoji1.innerText;
    iconElement.style.backgroundColor = "#FCDFDF";
    title.style.color = initialTitleColor;
    p1Element.style.backgroundColor = initialPlayersBg;
    p2Element.style.backgroundColor = initialPlayersBg;
})

// Main icon hover effect
iconElement.addEventListener('mouseover', () => {
    initialEmoji = emoji.innerText;
    emoji.innerText = "edit";
    emoji.classList.toggle("edit");
})

iconElement.addEventListener('mouseout', () => {
    emoji.innerText = initialEmoji;
    emoji.classList.toggle("edit");
})

//Popup icons hover effects
iconElement1.addEventListener('mouseover', () => {
    emoji1.classList.toggle("emojiHover");
})

iconElement1.addEventListener('mouseout', () => {
    emoji1.classList.toggle("emojiHover");
})

iconElement2.addEventListener('mouseover', () => {
    emoji2.classList.toggle("emojiHover");
})

iconElement2.addEventListener('mouseout', () => {
    emoji2.classList.toggle("emojiHover");
})

iconElement3.addEventListener('mouseover', () => {
    emoji3.classList.toggle("emojiHover");
})

iconElement3.addEventListener('mouseout', () => {
    emoji3.classList.toggle("emojiHover");
})

// Popup window
iconElement.addEventListener('click', () => {
    dimm.style.display = "unset";
})

window.addEventListener('click', (e) => {
    if (e.target == dimm) {
        dimm.style.display = "none";
    }
})

iconElement1.addEventListener('click', () => {
    emoji.innerText = emoji1.innerText;
    iconElement.style.backgroundColor = "#FCDFDF";
    dimm.style.display = "none";
})

iconElement2.addEventListener('click', () => {
    emoji.innerText = emoji2.innerText;
    iconElement.style.backgroundColor = "#D6D6D6";
    dimm.style.display = "none";
})

iconElement3.addEventListener('click', () => {
    emoji.innerText = emoji3.innerText;
    iconElement.style.backgroundColor = "#C2EDF3";
    dimm.style.display = "none";
})

closePopupLink.addEventListener('click', (e) => {
    e.preventDefault();
    dimm.style.display = "none";
})

// OS Detection
if (navigator.userAgent.indexOf("Win") != -1) {
    os = "Win";}
if (navigator.userAgent.indexOf("Mac") != -1) {
    os = "Mac";}
if (navigator.userAgent.indexOf("Linux") != -1) {
    os = "Linux";}
if (navigator.userAgent.indexOf("Android") != -1) {
    os = "Android";}
if (navigator.userAgent.indexOf("like Mac") != -1) {
    Name = "iOS";}

// 2nd reset link on iOS and Android
if (os === "Android" || os === "iOS") {
    resetLinkMobile.style.display = "inline";
    widgetSubt.style.display = "none";
};

// Command symbol in subtitle on MacOS
if (os === "Mac") {
    widgetSubt.innerText = "⌘ + click to reset everything";
};

// Shorter dropdown contents on mobile
function shorterOptions(mobileScreen) {
    if (!mobileScreen.matches) {
        dropdown.options[0].innerText = "to 3 pts";
        dropdown.options[1].innerText = "to 5 pts";
        dropdown.options[2].innerText = "to 7 pts";
        dropdown.options[3].innerText = "to 10 pts";
    }
}

shorterOptions(mobileScreen);
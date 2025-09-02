// ======================
// Step 1: Alerts, Confirm, Prompt
// ======================

document.getElementById("alert-btn").addEventListener("click", function() {
  alert("Hello! This is an alert message.");
});

document.getElementById("confirm-btn").addEventListener("click", function() {
  const userConfirmed = confirm("Do you like JavaScript?");
  const result = document.getElementById("result");
  if(userConfirmed) {
    result.textContent = "You clicked OK!";
  } else {
    result.textContent = "You clicked Cancel!";
  }
});

document.getElementById("prompt-btn").addEventListener("click", function() {
  const userName = prompt("What is your name?");
  const result = document.getElementById("result");
  if(userName) {
    result.textContent = `Hello, ${userName}!`;
  } else {
    result.textContent = "You didn't enter your name.";
  }
});

// ======================
// Step 2: DOM Manipulation
// ======================

document.getElementById("dom-btn").addEventListener("click", function() {
  const message = document.getElementById("dom-message");
  message.textContent = "🎉 The text has changed and the style too!";
  message.style.color = "purple";
  message.style.fontWeight = "bold";
});


// ======================
// Step 3: Mouse and Keyboard Events
// ======================

const mouseBox = document.getElementById("mouse-box");
const eventResult = document.getElementById("event-result");
const keyInput = document.getElementById("key-input");

// Mouse events
mouseBox.addEventListener("mouseover", function() {
  mouseBox.style.backgroundColor = "orange";
  eventResult.textContent = "Mouse is over the box!";
});

mouseBox.addEventListener("mouseout", function() {
  mouseBox.style.backgroundColor = "lightblue";
  eventResult.textContent = "Mouse left the box.";
});

// Keyboard events
keyInput.addEventListener("keydown", function(event) {
  eventResult.textContent = `You pressed: ${event.key}`;
});

keyInput.addEventListener("keyup", function(event) {
  eventResult.textContent += " (key released)";
});



// ======================
// Step 4: Timers
// ======================

const timeoutBtn = document.getElementById("timeout-btn");
const intervalBtn = document.getElementById("interval-btn");
const stopIntervalBtn = document.getElementById("stop-interval-btn");
const timerResult = document.getElementById("timer-result");

let intervalId; // store interval reference

// setTimeout example: runs once after 3 seconds
timeoutBtn.addEventListener("click", function() {
  timerResult.textContent = "Wait for it...";
  setTimeout(function() {
    timerResult.textContent = "⏰ 3 seconds have passed!";
  }, 3000); // 3000ms = 3 seconds
});

// setInterval example: runs every 1 second
intervalBtn.addEventListener("click", function() {
  let count = 0;
  intervalId = setInterval(function() {
    count++;
    timerResult.textContent = `Interval count: ${count}`;
  }, 1000);
});

// Stop the interval
stopIntervalBtn.addEventListener("click", function() {
  clearInterval(intervalId);
  timerResult.textContent = "Interval stopped.";
});



// ======================
// Step 5: Creating and Removing Elements
// ======================

const addItemBtn = document.getElementById("add-item-btn");
const removeItemBtn = document.getElementById("remove-item-btn");
const itemList = document.getElementById("item-list");

let itemCount = 2; // Start with 2 items already in the list

// Add new item
addItemBtn.addEventListener("click", function() {
  itemCount++;
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${itemCount}`;
  itemList.appendChild(newItem);
});

// Remove last item
removeItemBtn.addEventListener("click", function() {
  if(itemList.lastChild) {
    itemList.removeChild(itemList.lastChild);
    itemCount--;
  }
});


// ======================
// Step 6: CSS Manipulation with JavaScript
// ======================

const styleMessage = document.getElementById("style-message");
const changeStyleBtn = document.getElementById("change-style-btn");
const toggleClassBtn = document.getElementById("toggle-class-btn");

// Change individual styles
changeStyleBtn.addEventListener("click", function() {
  styleMessage.style.color = "red";
  styleMessage.style.fontSize = "22px";
  styleMessage.style.fontWeight = "bold";
});

// Toggle a CSS class
toggleClassBtn.addEventListener("click", function() {
  styleMessage.classList.toggle("highlight");
});



// ======================
// Step 7: Changing HTML Attributes
// ======================
const demoImg = document.getElementById("demo-img");
const demoLink = document.getElementById("demo-link");
const attrResult = document.getElementById("attr-result");

document.getElementById("swap-img-btn").addEventListener("click", () => {
  const small = "https://via.placeholder.com/150";
  const large = "https://via.placeholder.com/200";
  demoImg.src = demoImg.src.includes("/150") ? large : small;
  attrResult.textContent = `Image src is now: ${demoImg.src}`;
});

document.getElementById("toggle-alt-btn").addEventListener("click", () => {
  const current = demoImg.getAttribute("alt");
  const next = current === "Placeholder image" ? "Bigger placeholder image" : "Placeholder image";
  demoImg.setAttribute("alt", next);
  attrResult.textContent = `Alt text: "${demoImg.getAttribute("alt")}"`;
});

document.getElementById("update-link-btn").addEventListener("click", () => {
  if (demoLink.href.includes("example.com")) {
    demoLink.href = "https://developer.mozilla.org/";
    demoLink.textContent = "Visit MDN Web Docs";
  } else {
    demoLink.href = "https://example.com";
    demoLink.textContent = "Visit Example";
  }
  attrResult.textContent = `Link now points to: ${demoLink.href}`;
});


// Section 8: Toggle Show/Hide Content
document.getElementById("toggleBtn").addEventListener("click", function () {
  // Getting the content element
  let content = document.getElementById("toggleContent");

  // Checking current display state and toggling
  if (content.style.display === "none") {
    content.style.display = "block"; // showing content
  } else {
    content.style.display = "none"; // hiding content
  }
});



// Section 9: Double Click Event Example
document.getElementById("dblclickBtn").ondblclick = function() {
  document.getElementById("dblclickMessage").textContent =
    "You double-clicked the button! 🎉";
};

// Section 10: Mouse Over & Mouse Out Events Example
document.getElementById("hoverBtn").addEventListener("mouseover", function () {
  document.getElementById("hoverMessage").innerText = "Mouse is over the button!";
});

document.getElementById("hoverBtn").addEventListener("mouseout", function () {
  document.getElementById("hoverMessage").innerText = "Mouse left the button!";
});




// Section 11: Mouse Move Event Example
const mouseBox11 = document.getElementById("mouseBox11");
const mouseCoords11 = document.getElementById("mouseCoords11");

mouseBox11.addEventListener("mousemove", function(event) {
  mouseCoords11.textContent = `X: ${event.offsetX}, Y: ${event.offsetY}`;
});


// Section 12: Input Field Events (focus, blur, change)
const nameInput = document.getElementById("nameInput");
const inputMessage = document.getElementById("inputMessage");

// Focus event: triggers when input gets selected
nameInput.addEventListener("focus", function() {
  inputMessage.textContent = "Input is focused. Start typing!";
});

// Blur event: triggers when input loses focus
nameInput.addEventListener("blur", function() {
  inputMessage.textContent = "Input lost focus.";
});

// Change event: triggers when input value changes and loses focus
nameInput.addEventListener("change", function() {
  inputMessage.textContent = `You entered: ${nameInput.value}`;
});



// Section 13: Form Submit Event
const demoForm = document.getElementById("demoForm");
const formMessage = document.getElementById("formMessage");

demoForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent actual form submission
  const emailValue = document.getElementById("emailInput").value;

  if (emailValue) {
    formMessage.textContent = `Form submitted successfully! Your email: ${emailValue}`;
    formMessage.style.color = "green";
    demoForm.reset(); // clears the form
  } else {
    formMessage.textContent = "Please enter your email before submitting.";
    formMessage.style.color = "red";
  }
});


// Section 14: Timer Events

// setTimeout Example
const timeoutBtn14 = document.getElementById("timeoutBtn");
const timeoutMessage14 = document.getElementById("timeoutMessage");

timeoutBtn14.addEventListener("click", function() {
  timeoutMessage14.textContent = "Waiting for 3 seconds...";
  setTimeout(function() {
    timeoutMessage14.textContent = "Hello! 3 seconds have passed.";
  }, 3000); // 3000 milliseconds = 3 seconds
});

// setInterval Example
const intervalBtn14 = document.getElementById("intervalBtn");
const stopIntervalBtn14 = document.getElementById("stopIntervalBtn");
const counterDisplay14 = document.getElementById("counter");

let count14 = 0;
let intervalId14;

intervalBtn14.addEventListener("click", function() {
  if (!intervalId14) { // prevent multiple intervals
    intervalId14 = setInterval(function() {
      count14++;
      counterDisplay14.textContent = count14;
    }, 1000); // every 1 second
  }
});

stopIntervalBtn14.addEventListener("click", function() {
  clearInterval(intervalId14);
  intervalId14 = null; // reset intervalId
});



// Section 15: Window Events (resize & scroll)
const windowSize15 = document.getElementById("windowSize");
const scrollPos15 = document.getElementById("scrollPos");

// Resize event: triggers when window is resized
window.addEventListener("resize", function() {
  windowSize15.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
});

// Scroll event: triggers when page is scrolled
window.addEventListener("scroll", function() {
  scrollPos15.textContent = `Scroll Y: ${window.scrollY}`;
});

// Initialize display
windowSize15.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
scrollPos15.textContent = `Scroll Y: ${window.scrollY}`;


// Section 16: Drag & Drop Events
const dragItem16 = document.getElementById("dragItem");
const dropZone16 = document.getElementById("dropZone");
const dragMessage16 = document.getElementById("dragMessage");

// When dragging starts
dragItem16.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  dragMessage16.textContent = "Dragging started!";
});

// Allow dropping on drop zone
dropZone16.addEventListener("dragover", function(event) {
  event.preventDefault(); // necessary to allow drop
});

// When item is dropped
dropZone16.addEventListener("drop", function(event) {
  event.preventDefault();
  const draggedId = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(draggedId);
  dropZone16.appendChild(draggedElement);
  dragMessage16.textContent = "Dropped successfully!";
});


// Section 17: Clipboard Events
const clipboardInput17 = document.getElementById("clipboardInput");
const clipboardMessage17 = document.getElementById("clipboardMessage");

// Copy event
clipboardInput17.addEventListener("copy", function() {
  clipboardMessage17.textContent = "Text copied!";
});

// Cut event
clipboardInput17.addEventListener("cut", function() {
  clipboardMessage17.textContent = "Text cut!";
});

// Paste event
clipboardInput17.addEventListener("paste", function() {
  clipboardMessage17.textContent = "Text pasted!";
});


// Section 18: Media Events (YouTube video)
const youtubeLink18 = document.getElementById("youtubeLink");
const loadVideoBtn18 = document.getElementById("loadVideoBtn");
const videoContainer18 = document.getElementById("videoContainer");
const videoMessage18 = document.getElementById("videoMessage");

loadVideoBtn18.addEventListener("click", function() {
  const url = youtubeLink18.value.trim();

  if (!url) {
    videoMessage18.textContent = "Please enter a YouTube link.";
    return;
  }

  // Extract YouTube video ID
  const videoIdMatch = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
  if (!videoIdMatch) {
    videoMessage18.textContent = "Invalid YouTube link.";
    return;
  }

  const videoId = videoIdMatch[1];
  const iframeHTML = `<iframe id="youtubeIframe18" src="https://www.youtube.com/embed/${videoId}?enablejsapi=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

  videoContainer18.innerHTML = iframeHTML;
  videoMessage18.textContent = "Video loaded! Use YouTube controls to play/pause.";
});


// Section 18b: YouTube Video with Media Event Detection
let playerB;
const youtubeLinkB = document.getElementById("youtubeLinkB");
const loadVideoBtnB = document.getElementById("loadVideoBtnB");
const videoContainerB = document.getElementById("videoContainerB");
const videoMessageB = document.getElementById("videoMessageB");

// Load video
loadVideoBtnB.addEventListener("click", function() {
  const url = youtubeLinkB.value.trim();

  if (!url) {
    videoMessageB.textContent = "Please enter a YouTube link.";
    return;
  }

  const videoIdMatch = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
  if (!videoIdMatch) {
    videoMessageB.textContent = "Invalid YouTube link.";
    return;
  }

  const videoId = videoIdMatch[1];

  // Create iframe with API
  videoContainerB.innerHTML = `<div id="playerB"></div>`;

  playerB = new YT.Player('playerB', {
    height: '315',
    width: '560',
    videoId: videoId,
    events: {
      'onStateChange': onPlayerStateChangeB
    }
  });

  videoMessageB.textContent = "Video loaded! Watch the console or messages for play/pause/ended events.";
});

// Detect play, pause, ended states
function onPlayerStateChangeB(event) {
  switch(event.data) {
    case YT.PlayerState.PLAYING:
        videoMessageB.textContent = "Video is playing!";
        break;
    case YT.PlayerState.PAUSED:
        videoMessageB.textContent = "Video is paused!";
        break;
    case YT.PlayerState.ENDED:
        videoMessageB.textContent = "Video ended!";
        break;
    default:
        break;
  }
}


// Section 19: Keyboard Events
const keyboardInput19 = document.getElementById("keyboardInput");
const keyMessage19 = document.getElementById("keyMessage");

// keydown event: triggers when a key is pressed down
keyboardInput19.addEventListener("keydown", function(event) {
  keyMessage19.textContent = `Key down: ${event.key} (code: ${event.code})`;
});

// keyup event: triggers when a key is released
keyboardInput19.addEventListener("keyup", function(event) {
  keyMessage19.textContent = `Key up: ${event.key} (code: ${event.code})`;
});

// keypress event: triggers when a key is pressed and results in a character input
keyboardInput19.addEventListener("keypress", function(event) {
  keyMessage19.textContent = `Key pressed: ${event.key}`;
});


// Section 20: Form Events (Improved)
const demoForm20 = document.getElementById("demoForm");
const formMessage20 = document.getElementById("formMessage");

// Get all focusable form elements
const formInputs20 = demoForm20.querySelectorAll("input, select");

// Add focus and blur events to all inputs
formInputs20.forEach(input => {
  // Focus event
  input.addEventListener("focus", function() {
    formMessage20.textContent = `${input.id} field is focused!`;
  });

  // Blur event
  input.addEventListener("blur", function() {
    formMessage20.textContent = `${input.id} field lost focus.`;
  });

  // Change event for inputs and select
  input.addEventListener("change", function() {
    if (input.type === "checkbox") {
      const status = input.checked ? "checked" : "unchecked";
      formMessage20.textContent = `${input.id} is ${status}`;
    } else {
      formMessage20.textContent = `${input.id} changed to: ${input.value}`;
    }
  });
});

// Submit event
demoForm20.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent actual submission
  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;
  const gender = document.getElementById("genderSelect").value || "Not selected";
  const subscribed = document.getElementById("subscribeCheckbox").checked ? "Yes" : "No";

  formMessage20.textContent = `
    Form Submitted! 
    Name: ${name}, 
    Email: ${email}, 
    Gender: ${gender}, 
    Subscribed: ${subscribed}
  `;
});


// Section 21: Touch Events
const touchArea21 = document.getElementById("touchArea");
const touchMessage21 = document.getElementById("touchMessage");

// touchstart: when finger touches the area
touchArea21.addEventListener("touchstart", function(event) {
  touchMessage21.textContent = `Touch started at X: ${event.touches[0].clientX}, Y: ${event.touches[0].clientY}`;
  touchArea21.style.backgroundColor = "#b2dfdb";
});

// touchmove: when finger moves within the area
touchArea21.addEventListener("touchmove", function(event) {
  touchMessage21.textContent = `Moving at X: ${event.touches[0].clientX}, Y: ${event.touches[0].clientY}`;
  event.preventDefault(); // prevent scrolling while moving
});

// touchend: when finger leaves the area
touchArea21.addEventListener("touchend", function() {
  touchMessage21.textContent = "Touch ended!";
  touchArea21.style.backgroundColor = "#e0e0e0";
});

// Section 22: Custom / Other Events

// 1. Error Event for images
const errorImage22 = document.getElementById("errorImage");
const errorMessage22 = document.getElementById("errorMessage");

errorImage22.addEventListener("error", function() {
  errorMessage22.textContent = "Oops! Image failed to load.";
});

// 2. Context Menu Event (right-click)
const contextArea22 = document.getElementById("contextArea");
const contextMessage22 = document.getElementById("contextMessage");

contextArea22.addEventListener("contextmenu", function(event) {
  event.preventDefault(); // prevent default browser menu
  contextMessage22.textContent = "Custom context menu triggered!";
});

// 3. Wheel Event (mouse scroll)
const wheelArea22 = document.getElementById("wheelArea");
const wheelMessage22 = document.getElementById("wheelMessage");

wheelArea22.addEventListener("wheel", function(event) {
  if (event.deltaY < 0) {
    wheelMessage22.textContent = "Scrolled Up!";
  } else {
    wheelMessage22.textContent = "Scrolled Down!";
  }
  event.preventDefault(); // prevent page scroll for demo
});


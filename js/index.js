// Your code goes here
const header = document.querySelector(".main-navigation");


// Number 1 ---> Scroll Event
window.onscroll = () => {
  console.log(window.scrollY);
    if(window.scrollY > 500) {
      header.classList.add("add-background-color");
    } else if(window.scrollY < 500) {
      header.classList.remove("add-background-color");
    }
};
// Number 6 ---> On Load Event
window.onload = () => {
  onClickEvents();
  doubleClickEvent();
  mouseEnter();
  mouseOut();
  eventKeyDown();
  keyUp();
  focusEvent();
  console.log("The window has no loaded up! These should not invoke untill the Window is completely loaded.");
}


// Number 2 --> Click Event
function onClickEvents() {
  const navigationLinks = document.querySelectorAll("nav a");
  navigationLinks.forEach( links => {
    links.addEventListener("click", (e) => {
      e.target.classList.toggle("test");
      e.preventDefault();
    });
  });
}
// Number 3 --> Double Click Event
function doubleClickEvent() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach( buttons => buttons.addEventListener("dblclick", (e) =>  {

    e.stopPropagation();
    window.alert("Thank you for signing up!");
  })
  );
}
// Number 4 ---> Mouse Enter Event;
function mouseEnter() {
  const destinationText = document.querySelector('.content-destination');
  destinationText.addEventListener("mouseenter", (e) => e.target.style.color = "red");
}
// Number 5 ---> Mouse Out Event
function mouseOut() {
  const destinationText = document.querySelector('.content-destination');
  destinationText.addEventListener("mouseout", (e) => e.target.style.color = "blue");
}

// Number 7 --> Window resize
window.onresize = () => {
  console.log("Here is the window width: " + window.innerWidth);
}

// Number 8 --> Keydown
function eventKeyDown() {
  document.querySelector("body").addEventListener("keydown", (event) => {
    if(event.key === 'Enter') {
      document.querySelector("footer").style.backgroundColor ="green";
    }
  });
}

// Number 9 ---> KeyUp
function keyUp() {
  document.querySelector("body").addEventListener("keyup", (event) => {
    if(event.key === 'Enter') {
      document.querySelector("footer").style.backgroundColor ="purple";
    }
  });
}

// Number 10 --> Focus Event
function focusEvent() {
  const allTheImages = document.querySelectorAll("img");
  allTheImages.forEach( images => {
    images.addEventListener("copy", () => {
      images.style.display="none";
      alert("Don't you copy my images!! Abra Kadabra!!");
    })
  });
}
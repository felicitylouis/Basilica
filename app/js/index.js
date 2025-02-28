const basilChefs = ["mama", "papa", "baby"];
const basilTexture = ["greasy", "frozen", "spicy"];
const titleElement = document.querySelector("h2")

function random(array) {
    const max = array.length;
    const randomIndex = Math.floor(Math.random() * max);
    return array[randomIndex];
}

const recipeName = `
${random(basilChefs)}'s${random(basilTexture)} pesto
`
// console.log(recipeName);
titleElement.innerText = recipeName;

// === popover ===

const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal");

var betaContent = `
<h3>Oooops!</h3>
<p>Wow! Nothing works!<p>
`;
var buttonContent = `
<h2>Coming Soon</h2>
<p>This feature coming soon.<p>
<a class="closer" href="#0">✖︎</a>
`;

function showPopover(event) {
  if (event.target.matches(".beta")) {
    modalInner.innerHTML = betaContent;
    modalOuter.classList.add("open");
  } else if (event.target.closest("nav ul")) {
    modalInner.innerHTML = buttonContent;
    modalOuter.classList.add("open");
  } else if (event.target.matches(".closer, .modal-outer")) {
    modalOuter.classList.remove("open");
  } else return;
  event.preventDefault();
}

document.addEventListener("click", showPopover);
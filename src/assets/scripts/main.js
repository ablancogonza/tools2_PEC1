/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

window.addEventListener("click", function swapMenu() {
  const navbar = this.document.getElementById("navbar__list");
  if (navbar.className === "navbar__list") {
    navbar.className += " navbar__list--visible";
  } else {
    navbar.className = "navbar__list";
  }
});
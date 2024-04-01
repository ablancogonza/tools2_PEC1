/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

var icon = document.getElementById("icon");

icon.addEventListener("click", function swapMenu() {
  const navbar = document.getElementById("navbar__list");
  if (navbar.className === "navbar__list") {
    navbar.className += " navbar__list--visible";
  } else {
    navbar.className = "navbar__list";
  }
});

var navbar_list = document.getElementById("navbar__list");
for (const child of navbar_list.children) {
  child.addEventListener("click", function() {
    const navbar = document.getElementById("navbar__list");
    navbar.classList.remove("navbar__list--visible");
  });
};
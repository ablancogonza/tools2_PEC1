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
  const navbar_list = document.getElementById("navbar__list");
  if (navbar_list.className === "navbar__list") {
    navbar_list.className += " navbar__list--visible";
  } else {
    navbar_list.className = "navbar__list";
  }
});

var navbar_list = document.getElementById("navbar__list");
for (const child of navbar_list.children) {
  child.addEventListener("click", function() {
    const navbar_list = document.getElementById("navbar__list");
    navbar_list.classList.remove("navbar__list--visible");
  });
};
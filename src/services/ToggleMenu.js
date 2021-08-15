export default function toggleMenu() {
  var x = document.querySelector(".nav-menu");
  if (x.style.display === "" || x.style.display === "none" ) {
    x.style.display = "inline";
  } else {
    x.style.display = "none";
  }
}
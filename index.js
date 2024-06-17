// Menu Hamburger
const btn = document.querySelector("#toogle_btn");
const ul = document.getElementById("ulref");

btn.onclick = () =>
  ul.style.opacity == 0 ? (ul.style.opacity = 1) : (ul.style.opacity = 0);

//Carrousell

const carroussel_content = document.querySelector(".images");
const prev = document.getElementById("gauche");
const next = document.getElementById("droite");
let translate = 0;

// prev.onclick = () => {
//   translate += 100;
//   if (translate > 0) translate = 0;
//   carroussel_content.style.transform = "translatex(" + translate + "%)";
// };
// next.onclick = () => {
//   translate -= 100;
//   if (translate < -200) translate = -200;
//   carroussel_content.style.transform = "translatex(" + translate + "%)";
// };

prev.onclick = () => {
  translate += 100;
  if (translate > 0) translate = 200;
  carroussel_content.style.transform = "translatex(" + translate + "%)";
};
next.onclick = () => {
  translate -= 100;
  if (translate < -200) translate = 0;
  carroussel_content.style.transform = "translatex(" + translate + "%)";
};

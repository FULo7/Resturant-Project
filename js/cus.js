let nav__links = document.querySelector(".nav_links");
let bars = document.querySelector("#bars");
bars.onclick = () => {
    // alert(123);
    nav__links.classList.toggle("show");
    bars.classList.toggle("fa-times");
};
window.onscroll = () => {
    nav__links.classList.remove("show");
    bars.classList.remove("fa-times");
};
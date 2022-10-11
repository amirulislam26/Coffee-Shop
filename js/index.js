let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};


$(window).scroll(function () {
  if ($(this).scrollTop() > 100) $(".gotopbtn").addClass("active");
  else $(".gotopbtn").removeClass("active");
});

$(".gotopbtn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 800);
});
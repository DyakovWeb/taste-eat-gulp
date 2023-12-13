import $ from "jquery";

function smoothScroll() {
$(".header-bottom, .welcome, .header__row-link, .mobile-nav").on("click", "a", function (event) {
   event.preventDefault();
   let id = $(this).attr('href'),
   top = $(id).offset().top;
   $('body,html').animate({ scrollTop: top }, 600);
 });
}

export default smoothScroll;
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }

  //jQuery for Dark Mode
  $(document).ready(function() {
    $('#dark-mode-toggle').click(function() {
        $('body').toggleClass('dark-mode');
    });
});
//jQuery for Scroll Up button
$(document).ready(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('.scroll-to-top').fadeIn();
      } else {
          $('.scroll-to-top').fadeOut();
      }
  });

  $("body").on("click", ".scroll-to-top", function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});

s

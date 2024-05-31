$(document).ready(function() {
  AOS.init( {

  }); // initialize animate on scroll library
});


$('a.smooth-scroll')
.click(function(event) {

  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

    if (target.length) {

      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {

        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

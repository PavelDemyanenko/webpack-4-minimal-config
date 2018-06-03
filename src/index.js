import _ from 'lodash';
import './scss/main.scss';

$(() => {
  $('body').data('skip-element', false);
  let isInViewport = function(el) {
    let elementTop = el.offset().top;
    let elementBottom = elementTop + el.outerHeight();
    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  $(window).on('scroll', function() {
    let scrollTop = $(this).scrollTop();
    $('.b-main_section').each(function() {
      let el = $(this);
      let topDistance = el.offset().top;
      if (topDistance < scrollTop) {
        if (el.innerHeight() < el[0].scrollHeight) {
          if (isInViewport(el)) {
            if (!$('body').data('skip-element')) {
              $('body').addClass('stop-scrolling');
              $('body').data('skip-element', true);
            }
          }
        }
      }
    });
  });

  $('.b-main_section').on('scroll', function() {
    let el = $(this);
    $('body').data('skip-element', true);
    if (el.scrollTop() + el.innerHeight() >= el[0].scrollHeight) {
      $('body').removeClass('stop-scrolling')
    } else if (el.scrollTop() == 0) {
      console.log('top reached');
    }
  });
});

import _ from 'lodash';
import './scss/main.scss';

$(() => {
  $(window).on('scroll', function() {
    let scrollTop = $(this).scrollTop();
    $('.b-main_section').each(function() {
      let el = $(this);
        let topDistance = el.offset().top;
        if (topDistance < scrollTop) {
          if (el.innerHeight() < el[0].scrollHeight) {
            console.log('el.innerHeight()', el.innerHeight())
            console.log('el[0].scrollHeight', el[0].scrollHeight)
            $(window).on('scroll.prevent');
          }
        }
    });
  });

  $('.b-main_section').on('scroll', function() {
    let el = $(this);
    console.log('scrolling')
    if (el.scrollTop() + el.innerHeight() >= el[0].scrollHeight) {
      $(window).off('scroll.prevent');
      console.log('end reached');
    }
  });
});

(function ($) {
  $.fn.rates = function (options) {
    const settings = $.extend({
      shadeColor: 'brightness(0) saturate(100%) invert(89%) sepia(82%) saturate(5150%) hue-rotate(9deg) brightness(105%) contrast(107%)',
      starHeight: '25px',
      starCount: 5,
      shape: 'white-star',

    }, options);

    return this.each(function () {
      let $imageStar;
      const $container = this;
      const score = {
        value: 0,
      };

      console.log(score.value);

      colorHueSetter();
      createStars($container, settings.starCount);

      $(this).find('img').hover(function () {
        const starIndex = ($('img').index(this));

        for (let i = 0; i <= starIndex; i++) {
          console.log('hover in');
          const star = ($('img').get(i));
          $(star).css('filter', settings.shadeColor);
        }
      }, () => {
        console.log('hover out');
        const starTotal = $($container).find('img').length;
        console.log(starTotal);
        console.log(score.value);
        for (let j = score.value; j < starTotal; j++) {
          console.log('hover out');
          const star = ($('img').get(j));
          $(star).css('filter', '');
        }
      });

      $(this).find('img').on('click', function () {
        console.log($('container img'));
        const starIndex = ($('img').index(this));
        console.log(starIndex);
        $('img').css('filter', '');
        for (let i = 0; i <= starIndex; i++) {
          const star = ($('img').get(i));
          $(star).css('filter', settings.shadeColor);
        }
        score.value = starIndex + 1;
      });

      function createStars(container, count) {
        console.log('Test');
        for (i = 0; i < count; i++) {
          $imageStar = $('<img class = starstyle >');
          $imageStar.attr('src', `images\\${settings.shape}.png`);
          $(container).append($imageStar);
        }
      }

      function colorHueSetter() {
        if (settings.shadeColor.toLowerCase() == 'red') {
          settings.shadeColor = 'brightness(0) saturate(100%) invert(21%) sepia(70%) saturate(4945%) hue-rotate(352deg) brightness(87%) contrast(102%)';
        } else if (settings.shadeColor.toLowerCase() == 'yellow') {
          settings.shadeColor = 'brightness(0) saturate(100%) invert(89%) sepia(82%) saturate(5150%) hue-rotate(9deg) brightness(105%) contrast(107%)';
        }
      }
    });
  };
}(jQuery));

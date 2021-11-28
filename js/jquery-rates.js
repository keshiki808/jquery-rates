(function ($) {
  $.fn.rates = function (options) {
    const settings = $.extend({
      shadeColor: 'brightness(0) saturate(100%) invert(89%) sepia(82%) saturate(5150%) hue-rotate(9deg) brightness(105%) contrast(107%)',
      starHeight: '25px',
      starCount: 5,
      shape: 'white-star',

    }, options);

    return this.each(function () {
      const $container = this;
      const $containerName = $(this).attr('id');

      const score = {
        value: 0,
      };

      colorHueSetter();
      createStars(this, settings.starCount);
      setSize();

      const $eachStar = $(this).find('img');

      $(this).find('img').hover(function () {
        const starIndex = ($('img').index(this));
        $eachStar.css('filter', '');
        for (let i = 0; i <= starIndex; i++) {
          const star = ($('img').get(i));
          $(star).css('filter', settings.shadeColor);
        }
      }, () => {
        $eachStar.css('filter', '');
        for (let j = 0; j < score.value; j++) {
          const star = ($('img').get(j));
          $(star).css('filter', settings.shadeColor);
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
        console.log($(`${$containerName}Rating`))
        $(`#${$containerName}Rating`).val(score.value)
      });

      function setSize(){
        $($container).find('img').css('height', settings.starHeight)
      }

      function createStars(container, count) {
        console.log('Test');
        const $starInput = $(`<input type="hidden" id = "${$containerName}Rating" name="${$containerName}Rating" value="0" >`);
        $(container).append($starInput);
        for (i = 0; i < count; i++) {
          const $imageStar = $('<img class = starstyle >');
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

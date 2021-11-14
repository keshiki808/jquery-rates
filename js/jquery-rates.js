(function ($) {
  $.fn.rates = function () {

      return this.each(function(){

        let $imageStar; 
        let $container = this;
        

        createStars($container);
        createStars($container);
        createStars($container);
        createStars($container);
        createStars($container);

        $(this).find('img').on('click', function(container){
          // console.log($('$container').find(img))
          console.log($('container img'))

        })

        function createStars(container){
          console.log("Test")
          $imageStar = $('<img class = starstyle >');
          $imageStar.attr('src', 'images\\white-star.png')
          $(container).append($imageStar)
          
        }



          

      });

      }

    } (jQuery));
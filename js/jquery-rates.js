(function ($) {
  $.fn.rates = function () {

      return this.each(function(){

        let $imageStar; 
        let $container = this;
        const score = {
          value: 0
        }

        console.log(score.value)


        

        createStars($container);
        createStars($container);
        createStars($container);
        createStars($container);
        createStars($container);
        $(this).find('img').hover(function(){
          
          let starIndex = ($('img').index(this));

          for (let i = 0; i<=starIndex; i++){
            console.log('hover in')
            let star = ($('img').get(i))
            $(star).addClass('colored')
          }
          }, function(){
          console.log('hover out')
          let starTotal = $($container).find('img').length
          console.log(starTotal)
          console.log(score.value)
          for (let j = score.value ; j<starTotal; j++){
            console.log('hover out')
            let star = ($('img').get(j))
            $(star).removeClass('colored')
          }
        })

        

        $(this).find('img').on('click', function(){
          // console.log($('$container').find(img))
          console.log($('container img'))
          let starIndex = ($('img').index(this));
          console.log(starIndex)
          $('img').removeClass('colored')
          for (let i = 0; i<= starIndex; i++){
            let star = ($('img').get(i))
            $(star).addClass('colored')
          }
          score.value = starIndex + 1
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
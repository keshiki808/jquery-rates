(function ($) {
  $.fn.rates = function (options) {
    const settings = $.extend({
      shadeColor: 'invert(0.18) hue-rotate(197deg) sepia(0.85)',
      starHeight: '25px',
      starCount: 5,
      
      

    

  }, options)

      return this.each(function(){

        let $imageStar; 
        let $container = this;
        const score = {
          value: 0
        }



        console.log(score.value)


        
        colorHueSetter()
        createStars($container,settings.starCount);

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

        function createStars(container, count){
          console.log("Test")
          for (i=0; i< count; i++){
          $imageStar = $('<img class = starstyle >');
          $imageStar.attr('src', 'images\\white-star.png')
          $(container).append($imageStar)
          }
          
        }

        function colorHueSetter(){
          if (settings.shadeColor.toLowerCase == "red"){
            settings.shadeColor = 'invert(24%) sepia(45%) saturate(3312%) hue-rotate(352deg) brightness(92%) contrast(93%)'
          } 
        }

      });

      }

    } (jQuery));
/*bonus-script*/
if(document.querySelector('.b-bonus-block__presents')){
  $('.b-bonus-block__link').on('click', function(){
    $(this).hide();
    $('.b-bonus-block__presents').show();
  });

  $('.b-bonus-block__presents-hide').on('click', function(){
    $('.b-bonus-block__presents').hide();
    $('.b-bonus-block__link').show();
  });
}
/*end of bonus-script*/
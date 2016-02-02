/*contacts.js*/
$(document).ready(function() {
  if (document.querySelector('.jq-selectbox-main')) {
    $('select').styler();
  }

  /*deposit message*/
  if ($('.deposit-message__wrapper').length) {

    var deposit = $('.deposit-message__wrapper');
    var depositMsg = $('.deposit-message');
    var depositBtn = $('.deposit-message__btn');

    function depositCss() {
      if (window.innerHeight >= depositMsg.outerHeight()) {
        var depositMargin = (window.innerHeight - depositMsg.outerHeight() - $('.b-static-stripe').outerHeight()) / 2;
        depositMsg.css('margin-top', depositMargin);
      }
    }

    depositCss();

    $(window).on('resize', function () {
      depositCss();
    });

    depositBtn.on('click', function () {
      deposit.css('display', 'none');
    });

    deposit.mousedown(function (e) {
      var clicked = $(e.target);
      if (clicked.is('.deposit-message') || clicked.parents().is('.deposit-message')) {
        return;
      } else {
        deposit.hide();
      }
    });
  }
});
/*end of deposit message*/
/*end of contacts.js*/


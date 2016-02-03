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
  /*end of deposit message*/

  /*disabling of starting price*/
  if ($('.disabling-block').length){
    var startingPriceBtn = $('.disabling-btn');
    var startingPriceLabel = $('.disabling-label');
    var startingPriceVal = $('.disabling-val');
    var startingPriceCurrency = $('.disabling-currency');

    function startingPriceOff(){
      if (startingPriceBtn.is(':checked')){
        startingPriceVal.prop('disabled', true);
        startingPriceCurrency.addClass('disabled');
      } else{
        startingPriceVal.prop('disabled', false);
        startingPriceCurrency.removeClass('disabled');
      }
    }

    startingPriceOff();

    startingPriceLabel.on('click', function(){
      setTimeout(function () {startingPriceOff();}, 50);
    });
  }
  /*end of disabling of starting price*/

  /*disabling of shipping address*/
  if ($('.disabling-address').length){
    var addressEnabler = $('.address-enabler');
    var addressDisabler = $('.address-disabler');
    var disAddress = $('.disabling-address');

    function shippingAssressOff(){
      if (addressEnabler.is(':checked')){
        disAddress.prop('disabled', false);
      } else{
        disAddress.prop('disabled', true);
      }
    }

    shippingAssressOff();

    addressEnabler.on('click', function(){
      setTimeout(function () {shippingAssressOff();}, 50);
    });

    addressDisabler.on('click', function(){
      setTimeout(function () {shippingAssressOff();}, 50);
    });
  }
  /*end of disabling of shipping address*/

  /*map in create-purchase block*/
  if($('.b-create-purchase-block__options-map').length){

    function init () {
      var myMap = new ymaps.Map("map", {
        center: [59.937314,30.315472],
        zoom: 11
      }),

      // Создаем метку с помощью вспомогательного класса.
      myPlacemark1 = new ymaps.Placemark([59.937314,30.315472], {
        hintContent: '',
        //balloonContent: ''
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'images/create-purchase-map-icon.png',
        // Размеры метки.
        iconImageSize: [39, 38],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-3, -42]
      });

      //myMap.controls.add('smallZoomControl');
      // Добавляем все метки на карту.
      myMap.geoObjects
      .add(myPlacemark1);
    }

    ymaps.ready(init);
  }
  /*end of map in create-purchase block*/
});
/*end of contacts.js*/


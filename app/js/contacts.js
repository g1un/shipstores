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

	/*map in ad-unit*/
	if($('.b-ad-unit-block__map').length){

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
	/*end of map in ad-unit*/

	/*price-offer*/
	if ($(".js-fancy--close-on").length){
		$(".js-fancy--close-on").fancybox({
			padding: 0,
			margin: 0,
			autoCenter: true,
			fitToView	: false,
			openEffect	: 'fade',
			helpers: {
				overlay: {
					locked: false,
					css: {
						'background': 'rgba(0,0,0,.24)',
					}
				}
			},
			tpl: {
				closeBtn: '<div class="form-close"></div>',
			}
		});
	}
	/*end of price-offer*/

	/*b-post-ad-block__options-notes-popup*/
	if ($('.b-post-ad-block__options-notes-popup').length){
		var noteText = $('.b-post-ad-block__options-notes-text');
		var notePopup = $('.b-post-ad-block__options-notes-popup');
		var notePopupClose = $('.b-post-ad-block__options-notes-popup-close');

		noteText.on('focus', function(){
			notePopup.css('display', 'block');
		});

		notePopupClose.on('click', function(){
			notePopup.css('display', 'none');
		});
	}
	/*end of b-post-ad-block__options-notes-popup*/

	/*b-ad-unit-block messages*/
	if ($('.b-ad-unit-block__respond-opened').length){
		var adUnitMessage = $('.b-ad-unit-block__respond-opened');
		var adUnitMessageButton = $('.b-ad-unit-block__respond-messages');

		for(var i=0; i<adUnitMessageButton.length; i++){
			adUnitMessageButton[i].addEventListener('click', function(){
				$(this).toggleClass('opened');
				if($(this).hasClass('opened')){
					$(this).next().css('display','block');
				}else{
					$(this).next().css('display','none');
				}
			});
		}

	}
	/*end of b-ad-unit-block messages*/

	/*purchase-confirm*/
	if ($('.purchase-confirm__wrapper').length) {

		var purchaseConfirm = $('.purchase-confirm__wrapper');
		var purchaseConfirmMsg = $('.purchase-confirm');
		var purchaseConfirmBtn = $('.purchase-confirm__close');

		function purchaseConfirmCss() {
			if (window.innerHeight >= purchaseConfirmMsg.outerHeight()) {
				var purchaseConfirmMargin = (window.innerHeight - purchaseConfirmMsg.outerHeight()) / 2;
				purchaseConfirmMsg.css('margin-top', purchaseConfirmMargin);
			}
		}

		purchaseConfirmCss();

		$(window).on('resize', function () {
			purchaseConfirmCss();
		});

		purchaseConfirmBtn.on('click', function () {
			purchaseConfirm.css('display', 'none');
		});

		purchaseConfirm.mousedown(function (e) {
			var clicked = $(e.target);
			if (clicked.is('.purchase-confirm') || clicked.parents().is('.purchase-confirm')) {
				return;
			} else {
				purchaseConfirm.hide();
			}
		});
	}
	/*end of purchase-confirm*/

	/*currency*/
	if($('.b-head__currency-lang').length){
		var currencyBtn = $('.b-head__currency');
		var currencyList = $('.b-head__currency-list');
		var currencyListBtn = $('.b-head__currency-list li');

		currencyBtn.on('click', function(){
			currencyList.toggleClass('show');
		});

		$(window).mousedown(function (e) {
			var clicked = $(e.target);
			if (clicked.is('.b-head__currency-list') || clicked.parents().is('.b-head__currency-list') || clicked.is('.b-head__currency') || clicked.parents().is('.b-head__currency')) {
				return;
			} else {
				currencyList.removeClass('show');
			}
		});

		for(var i=0; i<currencyListBtn.length; i++){
			currencyListBtn[i].addEventListener('click', function() {
				for(var j=0; j<currencyListBtn.length; j++){
					currencyListBtn[j].classList.remove('active');
				};
				$(this).addClass('active');
				var activeCurrency = this.className.substr(0,2);

				for(var i=0; i<$('.b-head__currency li').length; i++){
					$('.b-head__currency li')[i].classList.remove('show');
				}

				for(var i=0; i<$('.b-head__currency li').length; i++){
					if($('.b-head__currency li')[i].className.substr(0,2) == activeCurrency){
						$('.b-head__currency li')[i].classList.add('show');
					}
				}
			});
		}
	}
	/*end of currency*/

	/*lang*/
	if($('.b-head__lang').length){
		var langBtn = $('.b-head__lang');
		var langList = $('.b-head__lang-list');
		var langListBtn = $('.b-head__lang-list li');

		langBtn.on('click', function(){
			langList.toggleClass('show');
		});

		$(window).mousedown(function (e) {
			var clicked = $(e.target);
			if (clicked.is('.b-head__lang-list') || clicked.parents().is('.b-head__lang-list') || clicked.is('.b-head__lang') || clicked.parents().is('.b-head__lang')) {
				return;
			} else {
				langList.removeClass('show');
			}
		});

		for(var i=0; i<langListBtn.length; i++){
			langListBtn[i].addEventListener('click', function() {
				for(var j=0; j<langListBtn.length; j++){
					langListBtn[j].classList.remove('active');
				};
				$(this).addClass('active');
				var activelang = this.className.substr(0,2);

				for(var i=0; i<$('.b-head__lang li').length; i++){
					//console.log($('.b-head__lang li')[i]);
					$('.b-head__lang li')[i].classList.remove('show');
				}

				for(var i=0; i<$('.b-head__lang li').length; i++){
					if($('.b-head__lang li')[i].className.substr(0,2) == activelang){
						$('.b-head__lang li')[i].classList.add('show');
					}
				}
			});
		}
	}
	/*end of lang*/

	/*disabling of b-auction-public-block__send-claim*/
	if ($('.b-auction-public-block__send-claim').length){
		var claimSendCheck = $('.b-auction-public-block__send-claim-check');
		var claimSendCheckLabel = $('.b-auction-public-block__send-claim-check-label');
		var claimSendSubmit = $('.b-auction-public-block__send-claim-submit');
		var claimSendBlock = $('.b-auction-public-block__send-claim-block');

		function claimSendOff(){
			if (claimSendCheck.is(':checked')){
				claimSendSubmit.prop('disabled', false);
				claimSendBlock.addClass('show');
			} else{
				claimSendSubmit.prop('disabled', true);
				claimSendBlock.removeClass('show');
			}
		}

		claimSendOff();

		claimSendCheckLabel.on('click', function(){
			setTimeout(function () {claimSendOff();}, 50);
		});
	}
	/*end of disabling of b-auction-public-block__send-claim*/

	/*map in b-auction-public-block__purchase-shipping-address-map*/
	if($('.b-auction-public-block__purchase-shipping-address-map').length){

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
	/*end of map in b-auction-public-block__purchase-shipping-address-map*/

	/*close/open map in b-auction-public-block__purchase-shipping-address-map*/
	if($('.b-auction-public-block__purchase-shipping-address-map').length){
		var shippingAddressMapBtn = $('.b-auction-public-block__purchase-shipping-address-val');
		var shippingAddress = $('.b-auction-public-block__purchase-shipping-address');

		shippingAddressMapBtn.on('click', function(){
			shippingAddress.toggleClass('opened');
		});
	}
	/*end of close/open map in b-auction-public-block__purchase-shipping-address-map*/

	/*show/hide b-orders-list-block__orders-story-block*/
	if($('.b-orders-list-block__orders-story-block').length){
		var ordersStoryBlockBtn = $('.b-orders-list-block__orders-story');
		var ordersStoryBlock = $('.b-orders-list-block__orders-story-block');
		var ordersStoryBlockClose = $('.b-orders-list-block__orders-story-block-close');

		ordersStoryBlockBtn.on('click', function(){
			ordersStoryBlock.addClass('show');
		});

		ordersStoryBlockClose.on('click', function(){
			ordersStoryBlock.removeClass('show');
		});

		$(window).mousedown(function (e) {
			var clicked = $(e.target);
			if (clicked.is('.b-orders-list-block__orders-story-block')||clicked.closest('.b-orders-list-block__orders-story-block').length){
				console.log('closest');
				return;
			} else {
				ordersStoryBlock.removeClass('show');
			}
		});
	}
	/*end of show/hide b-orders-list-block__orders-story-block*/

	/*b-cabinet-block__activities-form*/
	if($('.b-cabinet-block__activities-form').length){
		var activitiesForm = $('.b-cabinet-block__activities-form');
		var activitiesBtn = $('.b-cabinet-block__activities-all');
		var activitiesInput = $('.b-cabinet-block__activities-item input');
		var activitiesRemove = $('.b-cabinet-block__activities-chosen-remove');
		var activitiesList = $('.b-cabinet-block__activities-list');

		activitiesBtn.on('click', function(){
			activitiesBtn.toggleClass('opened');
			activitiesForm.toggleClass('show');
		});

		$(window).mousedown(function (e) {
			var clicked = $(e.target);
			if (clicked.is('.b-cabinet-block__activities-form')||clicked.closest('.b-cabinet-block__activities-form').length||clicked.closest('.b-cabinet-block__activities-all').length){
				return;
			} else {
				activitiesBtn.removeClass('opened');
				activitiesForm.removeClass('show');
			}
		});

		function activitiesListing(){
			for(var i=0; i<activitiesInput.length; i++){
				if ($(activitiesInput[i]).is(':checked')){
					$( ".b-cabinet-block__activities-chosen" ).append('<li class="b-cabinet-block__activities-chosen-item clearfix"><div class="b-cabinet-block__activities-chosen-title select-text">'+ $(activitiesInput[i]).next().text() + '</div><div class="b-cabinet-block__activities-chosen-remove"></div></li>');
					$('.b-cabinet-block__activities-chosen').find('div:contains('+ $(activitiesInput[i]).next().text() + ')').next().on('click', function(){
						$(this).parent().remove();
						activitiesList.find('label:contains('+$(this).prev().text()+')').prev().prop('checked', false);
					});
				}

				$(activitiesInput[i]).on('click', function () {
					if($(this).is(':checked')){
						$( ".b-cabinet-block__activities-chosen" ).append('<li class="b-cabinet-block__activities-chosen-item clearfix"><div class="b-cabinet-block__activities-chosen-title select-text">'+ $(this).next().text() + '</div><div class="b-cabinet-block__activities-chosen-remove"></div></li>');
						$('.b-cabinet-block__activities-chosen').find('div:contains('+$(this).next().text()+')').next().on('click',
						function(){
							$(this).parent().remove();
							activitiesList.find('label:contains('+$(this).prev().text()+')').prev().prop('checked', false);
						});
					} else{
						$('.b-cabinet-block__activities-chosen').find('div:contains('+$(this).next().text()+')').parent().remove();
					}
				});
			}
		}

		activitiesListing();

	}
	/*end of b-cabinet-block__activities-form*/
});
/*end of contacts.js*/


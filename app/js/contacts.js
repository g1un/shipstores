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

	/*b-cabinet-block__purchase*/
	if($('.b-cabinet-block__purchase-item-header--history').length){
		var link = $('.b-cabinet-block__purchase-title--link');
		var close = $('.b-cabinet-block__purchase-close');

		for(var i=0; i<link.length; i++){
			$(link[i]).on('click', function(){
				$(this).toggleClass('opened');
				$(this).next().toggle();
				$(this).next().next().toggle();
			});
		}

		for(var i=0; i<close.length; i++){
			$(close[i]).on('click', function(){
				$(this).prev().toggleClass('opened');
				$(this).toggle();
				$(this).next().toggle();
			});
		}

		var history = $('.b-cabinet-block__purchase-item-header--history');

		for(var i=0; i<history.length; i++){
			$(history[i]).on('click', function(){
				$(this).toggleClass('opened');
				$(this).next().toggle();
			});
		}

	}
	/*end of b-cabinet-block__purchase*/

	/*bill window*/
	if ($('.bill').length) {
		var billLink = $('.b-orders-list-block__purchase-deal-table--deals tr');
		var bill = $('.bill');
		var billCancel = $('.bill .form-close');
		var billBg = $('.bill__background');

		for(var i=0; i<billLink.length; i++){
			$(billLink[i]).on('click', function(e){
				billBg.addClass('show');
				bill.addClass('show');
				setTimeout(function(){
					billBg.css('opacity', '1');
					bill.css('opacity', '1');
				}, 50);
				billCss();
			});
		}

		function billCss() {
			if (window.innerHeight >= bill.outerHeight()) {
				var billTop = (window.innerHeight - bill.outerHeight()) / 2;
				var billLeft = ($(window).width() - bill.outerWidth()) / 2;
				bill.css({
					'top': billTop,
					'position': 'fixed',
					'left': billLeft
				});
			}else{
				billLeft = ($('body').width() - bill.outerWidth()) / 2;
				bill.css({
					'position': 'absolute',
					'top': 0,
					'left': billLeft
				});
			}
		}

		billCss();

		$(window).on('resize', function () {
			billCss();
		});

		billCancel.on('click', function () {
			billBg.css('opacity', '0');
			bill.css('opacity', '0');
			setTimeout(function(){
				billBg.removeClass('show');
				bill.removeClass('show');
			}, 500);

		});

		billBg.mousedown(function (e) {
			var clicked = $(e.target);
			if (clicked.is('.bill') || clicked.closest('.bill').length) {
				return;
			} else {
				billBg.css('opacity', '0');
				bill.css('opacity', '0');
				setTimeout(function(){
					billBg.removeClass('show');
					bill.removeClass('show');
				}, 500);
			}
		});
	}
	/*end of bill window*/

	/*multiselect__form*/
	if($('.multiselect__form').length){
		var multiselect = $('.multiselect');
		var multiselectForm = $('.multiselect__form');
		var multiselectBtn = $('.multiselect__placeholder');

		multiselectBtn.on('click', function(){
			multiselect.toggleClass('opened');
			multiselectBtn.toggleClass('opened');
			multiselectForm.toggleClass('show');
		});

		$(window).mousedown(function (e) {
			var clicked = $(e.target);
			if (clicked.is('.multiselect__form')||clicked.closest('.multiselect__form').length||clicked.closest('.multiselect__placeholder').length){
				return;
			} else {
				multiselect.removeClass('opened');
				multiselectBtn.removeClass('opened');
				multiselectForm.removeClass('show');
			}
		});
	}
	/*end of multiselect__form*/

	/*cabinet-services__mailing-category*/
	if($('.cabinet-services__mailing-category').length){
		var mailingBtn = $('.cabinet-services__mailing-category .multiselect__section');

		for(var i=0; i<mailingBtn.length; i++){
			$(mailingBtn[i]).on('click', function(){
				$(this).toggleClass('opened');
				$(this).next().toggleClass('show');
			});
		}
	}
	/*end of cabinet-services__mailing-category*/

	/*cabinet-services__store-ads tables*/
	if($('.cabinet-services__store-ads-categories--table').length){
		var button = $('.cabinet-services__store-ads-categories--table h4');

		for(var i=0; i<button.length; i++){
			$(button[i]).on('click', function(){
				$(this).toggleClass('opened');
				$(this).next().toggleClass('show');
				$(this).next().next().toggleClass('show');
			});
		}
	}
	/*end of cabinet-services__store-ads tables*/

	/*b-ad-unit-block__gallery*/
	if($('.b-ad-unit-block__gallery').length){
		var thumb = $('.b-ad-unit-block__gallery-img');
		var imageBig = $('.b-ad-unit-block__gallery-img-big img');
		var loupe = $('.b-ad-unit-block__gallery-loupe');

		for(var i=0; i<thumb.length; i++){
			$(thumb[i]).on('click', function(){
				var attribute = $(this).children().attr('src');
				imageBig.attr('src', attribute);
			});
		}

		$('.b-ad-unit-block__gallery-loupe, .b-ad-unit-block__gallery-img-big img').on('click', function(){
			$('body').append('<div class="b-ad-unit-block__background"></div>');
			$('body').append('<img class="b-ad-unit-block__image" src="'+imageBig.attr('src')+'">');
			if($('.b-ad-unit-block__image').outerWidth() >= 640 && $('.b-ad-unit-block__image').outerHeight() >= 480){
				$('body').append('<div class="b-ad-unit-block__cancel form-close"></div>');
			}

			$('.b-ad-unit-block__background').addClass('show');
			$('.b-ad-unit-block__image').addClass('show');
			$('.b-ad-unit-block__cancel').addClass('show');
			setTimeout(function(){
				$('.b-ad-unit-block__background').css('opacity', '1');
				$('.b-ad-unit-block__image').css('opacity', '1');
				$('.b-ad-unit-block__cancel').css('opacity', '1');
			}, 50);
			imageCss();
			mouseDown();
			cancel();
		});

		function imageCss() {
			if (window.innerHeight >= $('.b-ad-unit-block__image').outerHeight()) {
				var imageTop = (window.innerHeight - $('.b-ad-unit-block__image').outerHeight()) / 2;
				var imageLeft = ($(window).width() - $('.b-ad-unit-block__image').outerWidth()) / 2;
				$('.b-ad-unit-block__image').css({
					'top': imageTop,
					'position': 'fixed',
					'left': imageLeft
				});

				$('.b-ad-unit-block__cancel').css({
					'top': imageTop,
					'position': 'fixed',
					'left': imageLeft + $('.b-ad-unit-block__image').outerWidth() - $('.b-ad-unit-block__cancel').outerWidth()
				});
			}else{
				imageLeft = ($('body').width() - $('.b-ad-unit-block__image').outerWidth()) / 2;
				$('.b-ad-unit-block__image').css({
					'position': 'absolute',
					'top': 0,
					'left': imageLeft
				});
				$('.b-ad-unit-block__cancel').css({
					'position': 'absolute',
					'top': 0,
					'left': imageLeft + $('.b-ad-unit-block__image').outerWidth() - $('.b-ad-unit-block__cancel').outerWidth()
				});
			}
		}

		imageCss();

		$(window).on('resize', function () {
			imageCss();
		});

		function cancel(){
			$('.b-ad-unit-block__cancel').on('click', function () {
				$('.b-ad-unit-block__background').css('opacity', '0');
				$('.b-ad-unit-block__image').css('opacity', '0');
				$('.b-ad-unit-block__cancel').css('opacity', '0');
				setTimeout(function(){
					$('.b-ad-unit-block__background').removeClass('show').remove();
					$('.b-ad-unit-block__image').removeClass('show').remove();
					$('.b-ad-unit-block__cancel').removeClass('show').remove();
				}, 500);
			});
		}


		function mouseDown(){
			$('.b-ad-unit-block__background').mousedown(function (e) {
				console.log('down');
				var clicked = $(e.target);
				if (clicked.is('.b-ad-unit-block__image') || clicked.closest('.b-ad-unit-block__image').length) {
					return;
				} else {
					$('.b-ad-unit-block__background').css('opacity', '0');
					$('.b-ad-unit-block__image').css('opacity', '0');
					$('.b-ad-unit-block__cancel').css('opacity', '0');
					setTimeout(function(){
						$('.b-ad-unit-block__background').removeClass('show').remove();
						$('.b-ad-unit-block__image').removeClass('show').remove();
						$('.b-ad-unit-block__cancel').removeClass('show').remove();
					}, 500);
				}
			});
		}
	}
	/*end of b-ad-unit-block__gallery*/

	/*map everywhere*/
	if($('.map').length){

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
						iconImageHref: 'images/placemarker.png',
						// Размеры метки.
						iconImageSize: [24, 32],
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
	/*end of map everywhere*/

	/*b-orders-list-block__archive*/
	if($('.b-orders-list-block__archive').length){
		var archiveButton = $('.b-orders-list-block__archive h3');
		var archiveTable = $('.b-orders-list-block__archive table');

		archiveButton.on('click', function(){
			$(this).toggleClass('opened');
			archiveTable.toggleClass('show');
		});
	}
	/*end of b-orders-list-block__archive*/

	/*b-orders-list-block__table-favourite*/
	if($('.b-orders-list-block__table-favourite').length){
		var favButton = $('.b-orders-list-block__selector-item');
		var favTable = $('.b-orders-list-block__table-favourite');

		for(var i=0; i<favButton.length; i++){
			$(favButton[i]).on('click', function () {
				for(var j=0; j<favButton.length; j++){
					$(favButton[j]).removeClass('active');
					$(favTable[j]).removeClass('show');
				}
				$(this).addClass('active');
				$(favTable[$(this).index()]).addClass('show');
			});
		}
	}
	/*end of b-orders-list-block__table-favourite*/

	/*b-head__controls*/
	if ($('.b-head__controls').length) {
		var headControls = $('.b-head__controls');
		var headUser = $('.b-head__user');

		headUser.on('click', function(e){
			e.preventDefault();
			headControls.fadeToggle('fast');
		});

		$(window).mousedown(function (e) {
			var clicked = $(e.target);
			if (clicked.is('.b-head__controls') || clicked.closest('.b-head__controls').length || clicked.is('.b-head__user') || clicked.closest('.b-head__user').length) {
				return;
			} else {
				headControls.fadeOut('fast');
			}
		});
	}
	/*end of b-head__controls*/

	/*b-ad-order-block__options-scheme*/
	if ($('.b-ad-order-block__options-scheme').length) {
		var adLocationSelect = $('.b-ad-order-block__options-location select');
		var adLocationOption = $('.b-ad-order-block__options-location option:selected');
		var adNumberSelect = $('.b-ad-order-block__options-block-num select');
		var adNumberOption = $('.b-ad-order-block__options-block-num option:selected');
		var adBlock = $('.b-ad-order-block__options-scheme-block');
		var adBlockInfo = $('.b-ad-order-block__options-scheme-info');

		function indicate(){
			var adNumberOption = $('.b-ad-order-block__options-block-num option:selected');
			for(var j=0; j<adBlock.length; j++){
				$(adBlock[j]).removeClass('active');
			}
			for(var i=0; i<adBlock.length; i++){
				if(adNumberOption.text() == $(adBlock[i]).children('span').text()){
					$(adBlock[i]).addClass('active');
					blockSize();
				}
			}
		};

		function scheme(){
			var adLocationOption = $('.b-ad-order-block__options-location option:selected');
			if(adLocationOption.text() != 'Магазин'){
				$(adBlock[2]).css('display', 'none');
				$(adBlock[0]).css('margin-bottom', '206px');
				if($('.b-ad-order-block__options-block-num option').length == 5){
					$('.b-ad-order-block__options-block-num option:last-child').remove();
					$('.b-ad-order-block__options-block-num option:first-child').prop('selected','true');
					$('.jq-selectbox-main select').trigger('refresh');
					indicate();
				}

			}else{
				$(adBlock[2]).css('display', 'block');
				$(adBlock[0]).css('margin-bottom', '75px');
				if($('.b-ad-order-block__options-block-num option').length < 5){
					$('.b-ad-order-block__options-block-num select').append('<option value="5">05</option>');
					$('.jq-selectbox-main select').trigger('refresh');
				}
			}
		};

		function blockClick(){
			for(var i=0; i<adBlock.length; i++){
				$(adBlock[i]).on('click', function(){
					for(var j=0; j<adBlock.length; j++){
						$(adBlock[j]).removeClass('active');
					}
					$(this).addClass('active');
					blockSize();
					var position = parseInt($(this).children('span').text().substr(1,1)) - 1;
					$('.b-ad-order-block__options-block-num option').eq(position).prop('selected','true');
					$('.jq-selectbox-main select').trigger('refresh');
				});
			}
		};

		function blockSize(){
			for(var i=0; i<adBlock.length; i++){
				if($(adBlock[i]).hasClass('active')){
					if(i<2){
						adBlockInfo.css({
							'top': '15px',
							'bottom': 'auto',
						})
						.text('400px × 70px');
					}else if(i==2){
						adBlockInfo.css({
							'top': '143px',
							'bottom': 'auto',
						})
						.text('240px × 400px');
					}else if(i>2){
						adBlockInfo.css({
							'top': 'auto',
							'bottom': '50px',
						})
						.text('400px × 120px');
					}
				}
			}
		};

		blockClick();
		indicate();
		scheme();
		blockSize();

		adNumberSelect.change(function () {
			indicate();
		});

		adLocationSelect.change(function () {
			scheme();
		});


	}
	/*end of b-ad-order-block__options-scheme*/

	/*favourite tables*/
	if($('.favourite').length){
		var favBtn = $('.favourite__nav li');
		var favTable = $('.favourite__tables table');

		favBtn.each(function(){
			$(this).on('click', function(){
				favBtn.each(function(){
					$(this).removeClass('active');
				});
				favTable.each(function(){
					$(this).removeClass('show');
				});
				$(this).addClass('active');
				var number = $(this).index();
				favTable.eq(number).addClass('show');
			});
		});
	}
	/*end of favourite tables*/

	/*reminder*/
	if($('.reminder').length){
		var reminder = $('.reminder');
		var reminderCancel = $('.reminder__close');

		$('body').append('<div class="reminder__background"></div>');
		var reminderBg = $('.reminder__background');

		reminderBg.fadeToggle('500');
		reminder.fadeToggle('500');

		function reminderCss() {
			var reminderLeft = ($(window).width() - reminder.outerWidth()) / 2;

			if (window.innerHeight >= reminder.outerHeight()) {
				var reminderTop = (window.innerHeight - reminder.outerHeight()) / 2;
				reminder.css({
					'position': 'fixed',
					'top': reminderTop,
					'left': reminderLeft
				});
			}else{
				reminderTop = $(window).scrollTop();
				reminder.css({
					'position': 'absolute',
					'top': reminderTop,
					'left': reminderLeft
				});
			}

			if($(window).width() <= reminder.outerWidth()){
				reminder.css({
					'position': 'absolute',
					'left': 0
				});

				if(window.innerHeight >= reminder.outerHeight()){
					var top = $(window).scrollTop() + ((window.innerHeight - reminder.outerHeight()) / 2);
					console.log(top);
					reminder.css({
						'top': top
					});
				}
			}
		}

		reminderCss();

		$(window).on('resize', function () {
			reminderCss();
		});

		reminderCancel.on('click', function () {
			reminderBg.fadeOut('500').remove();
			reminder.fadeOut('500');
		});

		reminderBg.mousedown(function (e) {
			var clicked = $(e.target);
			if (clicked.is('.reminder') || clicked.closest('.reminder').length) {
				return;
			} else {
				reminderBg.fadeOut('500').remove();
				reminder.fadeOut('500');
			}
		});
	}
	/*end of reminder*/
});
/*end of contacts.js*/


/*script-fancy.js*/
$(document).ready(function() {
  $(".g-button.b-topbuttons_button.g-white_bg").fancybox({
    padding: 0,
    margin: 0,
    closeBtn: false,
    autoCenter: true,
    fitToView	: false,
    openEffect	: 'none',
    closeEffect	: 'none',
    helpers: {
      overlay: {
        css: {
          'overflow-y': 'auto',
          'background': 'rgba(0,0,0,.24)',
        }
      }
    }
  });


  $(".g-button.b-topbuttons_button.g-blue_bg").fancybox({
    padding: 0,
    margin: 0,
    closeBtn: false,
    autoCenter: true,
    fitToView	: false,
    openEffect	: 'none',
    closeEffect	: 'none',
    helpers: {
      overlay: {
        css: {
          'overflow-y': 'auto',
          'background': 'rgba(0,0,0,.24)',
        }
      }
    }
  });

  $(".b-needhelp__body a").fancybox({
    padding: 0,
    margin: 0,
    autoCenter: true,
    fitToView	: false,
    openEffect	: 'none',
    closeEffect	: 'none',
    helpers: {
      overlay: {
        css: {
          'overflow-y': 'auto',
          'background': 'rgba(0,0,0,.24)',
        }
      }
    },
    tpl: {
      closeBtn: '<div class="b-feedback-block__box-close"></div>',
    }
  });

  $(".form-button.js-call-form").fancybox({
    padding: 0,
    margin: 0,
    autoCenter: true,
    fitToView	: false,
    openEffect	: 'none',
    closeEffect	: 'none',
    helpers: {
      overlay: {
        css: {
          'overflow-y': 'auto',
          'background': 'rgba(0,0,0,.24)',
        }
      }
    },
    tpl: {
      closeBtn: '<div class="b-feedback-block__box-close"></div>',
    }
  });
});
/*end of script-fancy.js*/
/*ilia.js*/

if(document.querySelector('.b-contacts-block')){
  /*share*/
  var shareLink = document.querySelector('.b-contacts-block__map-share');
  var shareList = document.querySelector('.b-contacts-block__map-share-list');

  shareLink.addEventListener('click', function(event) {
    event.preventDefault();
    shareList.classList.toggle('show');
    shareLink.classList.toggle('opened');
  });
}


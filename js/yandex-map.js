/*map*/
ymaps.ready(init);

function init () {
  var myMap = new ymaps.Map("map", {
    center: [59.918153, 30.305577],
    zoom: 11
  }),

  // Создаем метку с помощью вспомогательного класса.
  myPlacemark1 = new ymaps.Placemark([59.964241,30.300560], {
    hintContent: 'Собственный значок метки',
    balloonContent: 'Это красивая метка'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'images/map-hint.png',
    // Размеры метки.
    iconImageSize: [42, 48],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-3, -42]
  });

  //myMap.controls.add('smallZoomControl');
  // Добавляем все метки на карту.
  myMap.geoObjects
  .add(myPlacemark1);
}


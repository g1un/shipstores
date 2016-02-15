/*help.js*/
if(document.querySelector('.b-help-block__nav-title')){
  var helpLink = document.querySelectorAll('.b-help-block__nav-title');

  //console.log(workflowLink.length);

  for (var i=0; i<helpLink.length; i++){
    helpLink[i].addEventListener('click', function(event){
      event.preventDefault();
      $(this).toggleClass('opened');
      $(this).parent().find('label').toggleClass('opened');
    })
  }
}
/*end of help.js*/


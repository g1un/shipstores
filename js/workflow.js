/*workflow.js*/
if(document.querySelector('.b-workflow-block__list-article')){
  var workflowLink = document.querySelectorAll('.b-workflow-block__list-link');
  var workflowBlock = document.querySelectorAll('.b-workflow-block__list-article');

  console.log(workflowLink.length);

  for (var i=0; i<workflowLink.length; i++){
    workflowLink[i].addEventListener('click', function(event){
      event.preventDefault();
      $(this).next().toggleClass('opened');
    })
  }
}
/*end of workflow.js*/


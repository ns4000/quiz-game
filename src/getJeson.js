$(document).ready(function(){
$.getJASON('https://opentdb.com/api.php?amount=10&type=boolean')
  .done(function(resoponse){
    console.log(resoponse);
  });
});

$(document).ready(function() {
 dataBinding(); 
}); 

function dataBinding(){
 $('#textArea').on('keyup',function (key) {
 	if(key.which == 8){
 	var txt = $('#myDiv').text($('#textArea').val());
 		return txt.slice(0, -1);

     }
 		 else if (key.which == 13){
      $('#myDiv').append('</br>');}

      else {
 	
  $('#myDiv').text("");
   $('#myDiv').text($('#textArea').val()); } 
});}
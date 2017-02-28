$(document).ready(function() {
  dataBinding();
});

function dataBinding() {
	document.getElementById("textArea").addEventListener("keyup", bindValues)
 
  //$('#myDiv').append($('textarea').val());
//document.getElementById("myDiv").append($('textarea').val());


}

function bindValues() {
 
  //$('#myDiv').append($('textarea').val());
document.getElementById("myDiv").append($('textarea').val());

}
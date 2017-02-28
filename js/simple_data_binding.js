$(document).ready(function() {
  dataBinding();
});

function dataBinding() {
	document.getElementById("textArea").addEventListener("keypress", bindValues());
}

function bindValues() {
 
  //$('#myDiv').append($('textarea').val());
document.getElementById("myDiv").append($('textarea').val());

}





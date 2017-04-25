//results section is where values are printed
$('form').on('submit', function(event) {
	event.preventDefault( );
	var input = $('#user-text').val( );
	$('.total').html(totalWordCount(input));
    $('.unique').html(uniqueWordCount(input));
    $('.average').html(averageWordLength(input));
   });
//Total word count of the submitted text
function totalWordCount(string){
return string.trim('').split(' ').length
}
//Unique word count of the submitted text
function uniqueWordCount(string){
	var uniqueWords = { }	
	var words = string.split(' ')
	for(var i = 0; i < words.length; i ++){
	var currentWord = words[i]
	uniqueWords[currentWord] = true
  }
   return Object.keys(uniqueWords).length
}	
/*Average word length in characters of the
   submitted text */
function averageWordLength(string){
	var words = string.split(' ')
	var total = 0
	for(var i = 0; i < words.length; i++){
		var currentWord = words[i]
       total += currentWord.length
	}
	return total / words.length
}
$('.hidden.text-report').removeClass('hidden');


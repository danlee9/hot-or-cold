
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var num, count, guess, guessDif;

  	count = 0;

  	var $guess = $('#userGuess'),
  		$feedback = $('#feedback'),
  		$count = $('#count'),
  		$guessList = $('#guessList');

  	newGame();

  	$(".new").click(function(event) {
  		event.preventDefault();
  		newGame();
  	});

  	$("form").submit(function(event) {
  		event.preventDefault();
  		addCount();
  		addList();
  		feedback();
  	});

  	function newGame() {
  		$guess.val('');
  		count = 0;
  		$count.text(count);
  		$guessList.empty();
  		num = Math.floor(Math.random() * 100) + 1;
  		console.log(num);
  	}

  	function addCount() {
  		count++;
  		$count.text(count);
  	}

  	function addList() {
  		guess = $guess.val();
  		$guessList.append('<li>' + guess + '</li>');
  	}

  	function feedback() {
  		guessDif = Math.abs(guess-num);
  		if (guessDif >= 50) {
  			$feedback.text("Ice Cold");
  		} else if (guessDif >= 30) {
  			$feedback.text('Cold');
  		} else if (guessDif >= 20) {
  			$feedback.text("Warm");
  		} else if (guessDif >= 10) {
  			$feedback.text('Hot');
  		} else if (guessDif > 0) {
  			$feedback.text("Very Hot");
  		} else {
  			$feedback.text('You got it!');
  		}
  		$guess.val('');
  	}


});



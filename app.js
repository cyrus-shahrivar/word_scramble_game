
    //library of words
    var words = ["jquery","trello", "ruby", "rails", "javascript", "programming", "function", "apple", "microsoft"];

    //choses word from library of words
    var currentWord = function(){
        return words[Math.floor(Math.random()*words.length)];
    };

    //console.log(currentWord())

    // scrambles letters in word
    var scrambleWord = function(word){
        var wordArray = word.split("");
        var scrambledWordArray = [];
        for(var i = 0; i<word.length; i++){
            var letter = wordArray.pop(wordArray[Math.floor(Math.random(wordArray.length))]);
            scrambledWordArray.push(letter);
        }
        return scrambledWordArray.join("");
    };

    //console.log(scrambleWord(currentWord()));

    //initial word setting
    //not scrambled
    var word = currentWord();
    //scrambled
    $(".scrambled").text(scrambleWord(word));

    $("#new-game").on("submit", function(event){
        event.preventDefault();
        //change background color
        $("body").css("background-color", "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255)  + "," + Math.floor(Math.random()*255) + ")");
        console.log("rgba(" + Math.random()*255 + "," + Math.random()*255  + "," + Math.random()*255 + ",0.2)");
        $("#win-lose-message").text("");
        //not scrambled
        word = currentWord();
        //scrambled
        $(".scrambled").text(scrambleWord(word));
    });

    // when the user submits the form
    $("#game-form").on("submit", function(event){
        event.preventDefault();
        var answer = $(this).find("input").val();
        $("#win-lose-message").css("display", "block");
        //   check that their answer is correct
        //   and show them appropriate message
        if(answer.toLowerCase() === word.toLowerCase()) {
            $("#win-lose-message").text("CORRECT!");
            $("#win-lose-message").css("color", "green");
        } else {
           $("#win-lose-message").text("Try Again!");
           $("#win-lose-message").css("color", "red");
           $("#win-lose-message").fadeOut(2000);
        }
    });

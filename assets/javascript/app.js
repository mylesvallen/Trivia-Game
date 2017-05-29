var correct = 0;

var incorrect = 0;

var score = 0;

var questions = [

    {
        question: "The lowest scoring game in NBA history took place on Nov. 22, 1950. The Fort Wayne Pistons took down the Minneapolis Lakers. What was the final score?",
        choices: ["19-18", "54-52", "25-19", "30-29"],
        answer: 0
    },

    {
        question: "What is the most points scored in a game by a single player?",
        choices: ["81", "74", "63", "100"],
        answer: 3
    },


    {
        question: "Which team holds the record for the most wins in a season?",
        choices: ["Chicago Bulls", "Golden State Warriors", "Los Angeles Lakers", "Oklahoma City Thunder"],
        answer: 1
    },


    {
        question: "Which player has recorded the most triple-doubles in a regular season?",
        choices: ["Russell Westbrook", "Lebron James", "Michael Jordan", "Oscar Robertson"],
        answer: 0
    },


    {
        question: "Which franchise holds the most NBA titles?",
        choices: ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Houston Rockets"],
        answer: 1
    },

    {
        question: "The 3-point line was introduced in what year?",
        choices: ["1976", "1950", "1980", "1995", ],
        answer: 2
    },

    {
        question: "Which player is featured on the NBA logo?",
        choices: ["Scottie Pippen", "Magic Johnson", "Jerry West", "Bob Cousy"],
        answer: 2
    },

    {
        question: "What year was the dunk constest introduced?",
        choices: ["1976", "1990", "1975", "1983"],
        answer: 0
    },


    {
        question: "What shoe did Michael Jordan wear in his rookie season?",
        choices: ["Converse", "Adidas", "Reebok", "Nike"],
        answer: 0
    },

    {
        question: "NBA was founded in what year?",
        choices: ["1960", "1938", "1950", "1946"],
        answer: 3
    }

];

var randomQuestion = questions[Math.floor(Math.random() * questions.length)];


// Countrdown for each question 
function triviaCountDown() {
var timeLeft = 15;
var ticker = setInterval(function() { 
        timeLeft -1;
        $('#countDown').css('color', 'lime');
        $('#countDown').html(timeLeft);
        
        if (timeLeft === 0) {
        clearInterval(ticker);
        }
        
        else {
         timeLeft--;   
        }
    }, 1000); 
}


function getReady() {
    $('#game').hide();
    $('#currentScore').hide();
var timeRemain = 5;
var fiveSec = setInterval(function() { 
        timeRemain -1;
        $('#setGo').html("GAME STARTS IN " + timeRemain);
        if (timeRemain === 0) {
        clearInterval(fiveSec);
        $('#setGo').remove();
        $('#game').show();
        triviaCountDown();
        }
        
        else {
         timeRemain--;   
        }
    }, 1000); 
}

//When page loads...
$(document).ready(function() {
    getReady();


    //there is when the actual game starts/ first question!
        $('#game').css('color','white');
        $('li').css('color','white');
        $('#randomQue').css({"color":"red","font-size":"24px", "margin-top": "15px"});
        $('#randomQue').text(randomQuestion.question);
        $('#a').append("  " + randomQuestion.choices[0]);
        $('#b').append("  " + randomQuestion.choices[1]);
        $('#c').append("  " + randomQuestion.choices[2]);
        $('#d').append("  " + randomQuestion.choices[3]);
        $('li').hover(function() {
            $(this).css({"background-color":"orange", "border-radius":"15%", "opacity": "0.90"})
            }, function(){
                $(this).css("background-color", "black");
            });
            
        $('li').click(function() {
        alert("final answer?");
        });





    });















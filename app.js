
let currentPuzzle = 0;
let puzzlesSolved = 0;
let letter = 0

const puzzles = [
    { question: "Solve for x: 2x + 3 = 11", answer: "4" , letter: "E"},
    { question: "What is the capital of France?", answer: "paris", letter: "D" },
    { question: "What state of matter is steam?", answer: "gas", letter: "U" },
    { question: "What is the largest planet in our solar system?", answer: "jupiter", letter:"C" },
    { question: "What is the chemical symbol for water?", answer: "h2o", letter: "A" },
    { question: "What is the square root of 64?", answer: "8", letter: "T"},
    { question: "What is the capital of Japan?", answer: "tokyo", letter: "I" },
    { question: "What is the largest mammal?", answer: "blue whale", letter: "O" },
    { question: "What is the boiling point of water in Celsius?", answer: "100", letter: "N" },
];


function play() {
    const input = document.getElementById('answer');
    const result = document.getElementById('result');
    const answer = input.value.trim().toLowerCase();
    const letter = document.getElementById('letter');

    if (answer === puzzles[currentPuzzle].answer) {
        result.textContent = "Correct!";
        result.style.color = "green";
        letter.textContent += ` ${puzzles[currentPuzzle].letter}`; 
        puzzlesSolved++;
        
        if (puzzlesSolved === puzzles.length) {
            setTimeout(() => {
                
               
                document.getElementById('result').style.display = 'none';
                document.getElementById('end-Game').style.display = 'block'; 
                document.getElementById('answer').style.display = 'none';
                document.getElementById('submit').style.display = 'none';
                document.getElementById('question').style.display = 'none';
                document.getElementById('letter').style.display = 'none'; 
                 
              
            }, 400);
        } else {
            setTimeout(() => {
                currentPuzzle++;
                showPuzzle();
                result.textContent = "";
            }, 1000);
        }
    } else {
        result.textContent = "Try again!";
        result.style.color = "red";
    }
    
    input.value = "";
}


function showPuzzle() {
    document.getElementById('question').textContent = puzzles[currentPuzzle].question;
}


function startGame() {
    
    document.querySelector('.game-interface').style.display = 'block';
    document.querySelector('.reset-container').style.display = 'block';
    
    document.querySelector('.start-container').style.display = 'none';
    document.querySelector('.startMenu-container').style.display = 'none';
    document.querySelector('.nextPage-container').style.display = 'none';
    
    
    currentPuzzle = 0;
    puzzlesSolved = 0;
    
    
    showPuzzle();
    document.getElementById('result').textContent = "";
    document.getElementById('answer').value = "";
    document.getElementById('answer').style.display = 'block';
    document.getElementById('submit').style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function() {
   
    document.getElementById('question').textContent = "Click Start Game to begin!";
    
    
    document.querySelectorAll('.clickable-object').forEach(obj => {
        obj.addEventListener('click', startGame);
    });
    
  
    document.getElementById('start').addEventListener('click', startGame);
    
   
    document.getElementById('reset').addEventListener('click', function() {
        
        currentPuzzle = 0;
        puzzlesSolved = 0;
        puzzles.letter = 0
       
        document.querySelector('.game-interface').style.display = 'none';
        document.querySelector('.reset-container').style.display = 'none';
        document.getElementById('end-Game').style.display = 'none'; 
        
        document.querySelector('.start-container').style.display = 'block';
        document.querySelector('.startMenu-container').style.display = 'block';
        
        document.getElementById('question').textContent = "Click Start Game to begin!";
        document.getElementById('result').textContent = "";
        document.getElementById('result').style.fontSize = ""; 
        document.getElementById('answer').value = "";
        document.getElementById('answer').style.display = 'block';
        document.getElementById('submit').style.display = 'block';
        document.getElementById('question').style.display = 'block';
        document.getElementById('letter').textContent = ""; 
        document.getElementById('letter').style.display = 'block'; 
    });
    
    
    document.querySelectorAll('button#submit').forEach(btn => btn.addEventListener('click', play));
});


document.body.style.height = "10vh";


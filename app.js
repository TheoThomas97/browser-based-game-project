// Game variables
let currentPuzzle = 0;
let puzzlesSolved = 0;
let letter = 0
// Simplified puzzle data
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

// Main game function
function play() {
    const input = document.getElementById('answer');
    const result = document.getElementById('result');
    const answer = input.value.trim().toLowerCase();
    const letter = document.getElementById('letter');

    if (answer === puzzles[currentPuzzle].answer) {
        result.textContent = "Correct!";
        result.style.color = "green";
        letter.textContent += ` ${puzzles[currentPuzzle].letter}`; // Use += to append instead of replace
        puzzlesSolved++;
        
        if (puzzlesSolved === puzzles.length) {
            setTimeout(() => {
                
                // Hide the input and submit button since game is over
                document.getElementById('result').style.display = 'none';
                document.getElementById('end-Game').style.display = 'block'; // Show end game message
                document.getElementById('answer').style.display = 'none';
                document.getElementById('submit').style.display = 'none';
                document.getElementById('question').style.display = 'none';
                document.getElementById('letter').style.display = 'none'; // Show letter display
                 
               // Hide game interface
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

// Display current puzzle
function showPuzzle() {
    document.getElementById('question').textContent = puzzles[currentPuzzle].question;
}

// Function to start the game when an object is clicked
function startGame() {
    // Show the game interface and reset button
    document.querySelector('.game-interface').style.display = 'block';
    document.querySelector('.reset-container').style.display = 'block';
    // Hide all start/menu containers
    document.querySelector('.start-container').style.display = 'none';
    document.querySelector('.startMenu-container').style.display = 'none';
    document.querySelector('.nextPage-container').style.display = 'none';
    
    // Reset game variables and start the first puzzle
    currentPuzzle = 0;
    puzzlesSolved = 0;
    
    // Show the first puzzle and enable game controls
    showPuzzle();
    document.getElementById('result').textContent = "";
    document.getElementById('answer').value = "";
    document.getElementById('answer').style.display = 'block';
    document.getElementById('submit').style.display = 'block';
}

// Initialize game
document.addEventListener('DOMContentLoaded', function() {
    // Set initial message
    document.getElementById('question').textContent = "Click Start Game to begin!";
    
    // Add click listeners to any objects that should start the game
    document.querySelectorAll('.clickable-object').forEach(obj => {
        obj.addEventListener('click', startGame);
    });
    
    // Add start button functionality
    document.getElementById('start').addEventListener('click', startGame);
    
    // Add reset button functionality
    document.getElementById('reset').addEventListener('click', function() {
        // Reset game variables
        currentPuzzle = 0;
        puzzlesSolved = 0;
        puzzles.letter = 0
        // Hide game interface and reset button
        document.querySelector('.game-interface').style.display = 'none';
        document.querySelector('.reset-container').style.display = 'none';
        document.getElementById('end-Game').style.display = 'none'; // Hide end game message
        // Show start button again
        document.querySelector('.start-container').style.display = 'block';
        document.querySelector('.startMenu-container').style.display = 'block';
        // Reset display
        document.getElementById('question').textContent = "Click Start Game to begin!";
        document.getElementById('result').textContent = "";
        document.getElementById('result').style.fontSize = ""; // Reset font size
        document.getElementById('answer').value = "";
        document.getElementById('answer').style.display = 'block';
        document.getElementById('submit').style.display = 'block';
        document.getElementById('question').style.display = 'block';
        document.getElementById('letter').textContent = ""; // Clear letter display
        document.getElementById('letter').style.display = 'block'; // Show letter display
    });
    
    // Keep button functionality for submitting answers
    document.querySelectorAll('button#submit').forEach(btn => btn.addEventListener('click', play));
});

//display
document.body.style.height = "10vh";


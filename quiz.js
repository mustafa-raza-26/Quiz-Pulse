let questions = [
    {
        question: 'What does HTML stand for?',
        Option: [
            'Hyper Text Markup Language',
            'High Tech Modern Language',
            'Hyperlink and Text Markup Language',
            'Home Tool Markup Language'
        ],
        answer: 'Hyper Text Markup Language'
    },
    {
        question: 'Which HTML tag is used to define an internal style sheet?',
        Option: ['<script>', '<css>', '<style>', '<design>'],
        answer: '<style>'
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        Option: ['<javascript>', '<js>', '<script>', '<scripting>'],
        answer: '<script>'
    },
    {
        question: 'Which syntax is correct for referring to an external script called "app.js"?',
        Option: [
            "<script href='app.js'>",
            "<script name='app.js'>",
            "<script src='app.js'>",
            "<script file='app.js'>"
        ],
        answer: "<script src='app.js'>"
    },
    {
        question: 'How do you write "Hello World" in an alert box in JavaScript?',
        Option: [
            "msg('Hello World');",
            "alertBox('Hello World');",
            "alert('Hello World');",
            "msgBox('Hello World');"
        ],
        answer: "alert('Hello World');"
    },
    {
        question: 'Which HTML attribute is used to specify inline styles?',
        Option: ['class', 'font', 'styles', 'style'],
        answer: 'style'
    },
    {
        question: 'How do you create a function in JavaScript?',
        Option: [
            'function:myFunction()',
            'function myFunction()',
            'create myFunction()',
            'def myFunction()'
        ],
        answer: 'function myFunction()'
    },
    {
        question: 'Which HTML element represents the largest heading?',
        Option: ['<h6>', '<head>', '<h1>', '<heading>'],
        answer: '<h1>'
    },
    {
        question: 'How can you add a single-line comment in JavaScript?',
        Option: [
            '<!-- This is a comment -->',
            '/* This is a comment */',
            '// This is a comment',
            '** This is a comment'
        ],
        answer: '// This is a comment'
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        Option: ['<lb>', '<break>', '<br>', '<hr>'],
        answer: '<br>'
    },
    {
        question: 'What is the correct way to write a JavaScript array?',
        Option: [
            "const colors = 'red', 'green', 'blue'",
            "const colors = (1:'red', 2:'green', 3:'blue')",
            "const colors = ['red', 'green', 'blue']",
            "const colors = {1: 'red', 2: 'green'}"
        ],
        answer: "const colors = ['red', 'green', 'blue']"
    },
    {
        question: 'Which HTML attribute provides a unique identifier for an element?',
        Option: ['class', 'id', 'uuid', 'key'],
        answer: 'id'
    },
    {
        question: 'How does a for loop start in JavaScript?',
        Option: [
            'for (i = 0; i <= 5; i++)',
            'for (i <= 5; i++)',
            'for i = 1 to 5',
            'for (i = 0; i <= 5)'
        ],
        answer: 'for (i = 0; i <= 5; i++)'
    },
    {
        question: 'Which HTML tag is used to create an unordered list?',
        Option: ['<ol>', '<list>', '<ul>', '<li>'],
        answer: '<ul>'
    },
    {
        question: 'How do you declare a variable in modern JavaScript (ES6+)?',
        Option: ['v', 'variable', 'let / const', 'var only'],
        answer: 'let / const'
    },
    {
        question: 'Which property is used to return the length of a string in JavaScript?',
        Option: ['size', 'length', 'index', 'count'],
        answer: 'length'
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        Option: [
            "<a href='http://www.example.com'>Example</a>",
            "<url>http://www.example.com</url>",
            "<a url='http://www.example.com'>Example</a>",
            "<hyperlink>http://www.example.com</hyperlink>"
        ],
        answer: "<a href='http://www.example.com'>Example</a>"
    },
    {
        question: 'Which operator is used to assign a value to a variable in JavaScript?',
        Option: ['*', '-', '=', 'x'],
        answer: '='
    },
    {
        question: 'Which HTML5 element is used to specify footer content for a section or page?',
        Option: ['<bottom>', '<section>', '<footer>', '<end>'],
        answer: '<footer>'
    },
    {
        question: 'What is the result of typeof NaN in JavaScript?',
        Option: ["'number'", "'NaN'", "'undefined'", "'object'"],
        answer: "'number'"
    }
];

let qno = document.getElementById('qno');
let disQuestion = document.getElementById('question');
let display = document.getElementById('display');
let option = document.querySelectorAll('input');
let label = document.querySelectorAll('label');
let nextButton = document.getElementById('nextButton');
let timer = document.getElementById('timer');

let time = 30; // Increased default time per question (e.g., 15 seconds)
let startInterval;

let index = 0;
let score = 0;

function startTimer() {
    time = 600; // Reset timer value on start/question change
    clearInterval(startInterval); // Clear any existing intervals

    startInterval = setInterval(function () {
        let min = Math.floor(time / 60);
        let second = time % 60;

        // Format seconds to always show two digits (e.g., 05 instead of 5)
        timer.innerText = `Time: ${min}:${second < 10 ? '0' : ''}${second}`;

        if (time <= 0) {
            clearInterval(startInterval);
            let percentage = Math.round((score / questions.length) * 100);
            alert("Time's up! Quiz submitted.");
            document.getElementById("container").innerHTML = `
    <div id="display" class="text-center py-4">
        <div class="mb-3">
            <i class="fa-solid fa-trophy text-warning display-4"></i>
        </div>
        
        <h2 id="qno" class="mb-1">Quiz Completed!</h2>
        <h1 class="fw-bold mb-4">Your Results</h1>

        <div class="row g-3 mb-4">
            <div class="col-6">
                <div class="p-3 rounded-4 bg-light border">
                    <span class="d-block text-muted small fw-bold text-uppercase">Score</span>
                    <span class="fs-3 fw-bold text-dark">${score} / ${questions.length}</span>
                </div>
            </div>
            <div class="col-6">
                <div class="p-3 rounded-4 bg-light border">
                    <span class="d-block text-muted small fw-bold text-uppercase">Percentage</span>
                    <span class="fs-3 fw-bold ${percentage >= 50 ? 'text-success' : 'text-danger'}">${percentage}%</span>
                </div>
            </div>
        </div>

        <button id="nextButton" onclick="window.location.reload()">
            <i class="fa-solid fa-rotate-right me-2"></i> Try Again
        </button>
    </div>
`;
            return;
        }

        time -= 1;
    }, 1000);
}

nextButton.addEventListener('click', () => {
    nextQuestion();
});

function showQuestion() {
    qno.innerText = `Question ${index + 1} of ${questions.length}`;
    disQuestion.innerText = questions[index].question;

    for (let i = 0; i < 4; i++) {
        option[i].value = questions[index].Option[i];
        label[i].innerText = questions[index].Option[i];
        option[i].checked = false;
    }

    if (index === questions.length - 1) {
        nextButton.innerText = "Submit";
    }

    // Optional: Restart timer per question, or remove this if you want a global timer for the whole quiz
    startTimer();
}

function CheckAnswer() {
    let selectedOption;

    for (let i = 0; i < option.length; i++) {
        if (option[i].checked) {
            selectedOption = option[i].value;
            break;
        }
    }

    if (selectedOption === undefined) {
        alert('Please select any one option.');
        return false;
    }

    if (selectedOption === questions[index].answer) {
        score += 1;
    }
    return true;
}

function nextQuestion() {
    let status = CheckAnswer();
    if (status === true) {
        index += 1;
        if (index === questions.length) {
            clearInterval(startInterval);
            let percentage = Math.round((score / questions.length) * 100);
            alert('Quiz Submitted');
            document.getElementById('container').innerHTML = `
                <h1>Quiz Submitted</h1>
                <h2>Score: ${score}/${questions.length}</h2>
                <h2>Percentage: ${percentage}%</h2>
                <button onclick='window.location.reload()'>Try Again</button>
            `;
        } else {
            showQuestion();
        }
    }
}

// Initial call to load the first question
showQuestion();

document.getElementById('logout').addEventListener('click', async () => {
    const { error } = await client.auth.signOut({ scope: 'global' });
    if (error) {
        console.log('logout error', error.message);
    } else {
        window.location.replace('./index.html');
    }
});

window.onload = async () => {
    let status = localStorage.getItem('loginStatus');
    if (status === 'false' || !status) {
        window.location.replace('./index.html');
    }
};
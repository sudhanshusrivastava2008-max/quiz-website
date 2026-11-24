const quizData = [
    {
        question: " What does HTML stand for?",
        options: [  "High Text Markup Language", "Hyper Tabular Markup Language","Hyper Text Markup Language", "None of these"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What does css stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which css property is used to change the background color?",
        options: ["color", "background-color", "bgcolor", "background"],
        answer: "background-color"
    },
    {
        question: " What is Javascript function used to select an element by its ID?",
        options: [  "querySelector", "getElementById", "getElementsByClassName", "querySelectorAll"],
        answer: "getElementById"
    },
    {
        question: "In React.js , which hook is used to perform side effects in a function component?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        answer: "useEffect"
    },
    {
        question: "In React.js , which hook is used to manage state in a function component?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        answer: "useState"
    },
    {
        question: "Which HTML tag is used to create a hyperlink? ",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "Which HTML tag is used to insert an image?",
        options: ["<image>", "<img>", "<picture>", "<src>"],
        answer: "<img>"
    },
    {
        question: "Which CSS property changes the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: "font-size"
    },
    {
        question: "Which symbol is used for comments in Javascript (single Line)?",
        options: ["//", "#", "/*", "<!--"],
        answer: "//"
    },
    {
    question: "Which keyword declares a variable that can be reassigned?",
    options: [
      "const",
      "let",
      "static",
      "fixed"
    ],
    answer: "let"
  },
  {
    question: "Which JavaScript method displays a message in the console?",
    options: [
      "console.log()",
      "document.write()",
      "alert()",
      "print()"
    ],
    answer: "console.log()"
  },
  {
    question: "Which HTML attribute specifies an image path?",
    options: [
      "href",
      "alt",
      "src",
      "link"
    ],
    answer: "src"
  },
  {
    question: "Which CSS property makes text bold?",
    options: [
      "font-weight",
      "font-style",
      "text-decoration",
      "text-transform"
    ],
    answer: "font-weight"
  },
  {
    question: "What is JSX in React?",
    options: [
      "A JavaScript extension syntax",
      "A CSS framework",
      "A database",
      "A programming language separate from JavaScript"
    ],
    answer: "A JavaScript extension syntax"
  }
 
];
 const quiz = document.querySelector("#quiz");
const answerElements = document.querySelectorAll(".answer");
 const [questionElm, option_1, option_2, option_3, option_4] = [
    document.querySelector("#question"),
    document.querySelector("#option_1"),
    document.querySelector("#option_2"),
    document.querySelector("#option_3"),
    document.querySelector("#option_4")
];
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
     console.log(question, options); 
     questionElm.innerText = question;
    //  options.forEach((curoption,index) =>(option_1.innerText = curoption));
     options.forEach((curOption, index) => {
    [option_1, option_2, option_3, option_4][index].innerText = curOption;
});
};


loadQuiz();


// submit button click

const getSelectedOption = () => {
    let  ans_index;

    answerElements.forEach(( curOption, index) => {
        if (curOption.checked) {
            ans_index = index;
        }
    });
    return  ans_index;
};
const deselectesAnswer = () => {
   return answerElements.forEach((curElm)=>curElm.checked=false);
};
 

submitBtn.addEventListener("click", () => {
    const selectedOptionIndex=getSelectedOption();
    console.log(selectedOptionIndex);

     if (
    quizData[currentQuiz].options[selectedOptionIndex] ===
    quizData[currentQuiz].answer
) {
    score += 1;
}
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        deselectesAnswer();
        loadQuiz();
}else{
    quiz.innerHTML = `
        <div class="result">
            <h2>Your Score: ${score}/${quizData.length} Correct Answers</h2>
            <p>Congratulations! You have completed the quiz.</p>
            <button class="reload-button" onclick="location.reload()">Play Again</button>
        </div>
    `;
}
});
const questionsForQuiz = [
    {
        question: "What isn't JavaScript Data Types?",
        answers: [
            { text: "Char", correct: true },
            { text: "Number", correct: false },
            { text: "Undefined", correct: false },
            { text: "Object", correct: false },
        ]
    }, {
        question: "Which variable is a function scope?",
        answers: [
            { text: "const", correct: false },
            { text: "var", correct: true },
            { text: "let", correct: false },
            { text: "none of them", correct: false },
        ]
    }, {
        question: "Which variable name in invalid in JavaScript?",
        answers: [
            { text: "Test", correct: false },
            { text: "_name123", correct: false },
            { text: "c", correct: false },
            { text: "123name", correct: true },
        ]
    }, {
        question: "With which function I can't access an HTML element?",
        answers: [
            { text: "getElementById(‘idname’)", correct: false },
            { text: "querySelector()", correct: false },
            { text: "getElementsByTagName(‘tagname’)", correct: false },
            { text: "getQueryByClass(‘classname’)", correct: true },
        ]
    }, {
        question: "Which framework isn't written in JS?",
        answers: [
            { text: "Angular", correct: false },
            { text: "Vue", correct: false },
            { text: "Java", correct: true },
            { text: "React", correct: false },
        ]
    }, {
        question: "What is NaN short for?",
        answers: [
            { text: "Not a None", correct: false },
            { text: "Not a Number", correct: true },
            { text: "Not a Null", correct: false },
            { text: "Near a Number", correct: false },
        ]
    }, {
        question: "What is the output? console.log(0.1 + 0.2 === 0.3)",
        answers: [
            { text: "false", correct: true },
            { text: "true", correct: false },
            { text: "undefined", correct: false },
            { text: "0.1 + 0.2 === 0.3", correct: false },
        ]
    }, {
        question: "What is ECMAScript?",
        answers: [
            { text: "It is a JavaScript standard", correct: true },
            { text: "It a script using ECMA variables", correct: false },
            { text: "A Javascript framework", correct: false },
            { text: "A backend library for Node.JS", correct: false },
        ]
    }, {
        question: "What's the output? console.log(1+ '2')",
        answers: [
            { text: "NaN", correct: false },
            { text: "3", correct: false },
            { text: `"12"`, correct: true },
            { text: "undefined", correct: false },
        ]
    }
];
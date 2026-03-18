// JavaScript Learning Path
const MODULES = [
    {
        "id": 1,
        "title": "Pengenalan JavaScript",
        "icon": "fas fa-play-circle"
    },
    {
        "id": 2,
        "title": "Dasar-Dasar",
        "icon": "fas fa-cube"
    },
    {
        "id": 3,
        "title": "Fungsi & Scope",
        "icon": "fas fa-code"
    },
    {
        "id": 4,
        "title": "Struktur Data",
        "icon": "fas fa-database"
    },
    {
        "id": 5,
        "title": "OOP",
        "icon": "fas fa-object-group"
    },
    {
        "id": 6,
        "title": "Async & Web",
        "icon": "fas fa-globe"
    },
    {
        "id": 7,
        "title": "Tools & Best Practices",
        "icon": "fas fa-tools"
    },
    {
        "id": 8,
        "title": "Proyek",
        "icon": "fas fa-laptop-code"
    }
];

const lessons = [
    {
        "id": 1,
        "title": "1. Array Dasar Dan Metode",
        "module": "Pengenalan JavaScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/array-dasar-dan-metode.html",
        "description": "<p><strong>Array Dasar Dan Metode</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Array Dasar Dan Metode?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 2,
        "title": "2. Array Higher Order Functions",
        "module": "Pengenalan JavaScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/array-higher-order-functions.html",
        "description": "<p><strong>Array Higher Order Functions</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Array Higher Order Functions?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 3,
        "title": "3. Arrow Functions Perilaku This",
        "module": "Pengenalan JavaScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/arrow-functions-perilaku-this.html",
        "description": "<p><strong>Arrow Functions Perilaku This</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Arrow Functions Perilaku This?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 4,
        "title": "4. Async Await Asynchronous",
        "module": "Pengenalan JavaScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/async-await-asynchronous.html",
        "description": "<p><strong>Async Await Asynchronous</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Async Await Asynchronous?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 5,
        "title": "5. Babel Transpiling",
        "module": "Pengenalan JavaScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/babel-transpiling.html",
        "description": "<p><strong>Babel Transpiling</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Babel Transpiling?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 6,
        "title": "6. Class Dan Object",
        "module": "Pengenalan JavaScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/class-dan-object.html",
        "description": "<p><strong>Class Dan Object</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Class Dan Object?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 7,
        "title": "7. Clean Code Principles",
        "module": "Pengenalan JavaScript",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/clean-code-principles.html",
        "description": "<p><strong>Clean Code Principles</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Clean Code Principles?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 8,
        "title": "8. Closure Dan Lexical Scoping",
        "module": "Dasar-Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/closure-dan-lexical-scoping.html",
        "description": "<p><strong>Closure Dan Lexical Scoping</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Closure Dan Lexical Scoping?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 9,
        "title": "9. Code Review Checklist",
        "module": "Dasar-Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/code-review-checklist.html",
        "description": "<p><strong>Code Review Checklist</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Code Review Checklist?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 10,
        "title": "10. Constructor Dan Methods",
        "module": "Dasar-Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/constructor-dan-methods.html",
        "description": "<p><strong>Constructor Dan Methods</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Constructor Dan Methods?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 11,
        "title": "11. Date Dan Time",
        "module": "Dasar-Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/date-dan-time.html",
        "description": "<p><strong>Date Dan Time</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Date Dan Time?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 12,
        "title": "12. Debugging Chrome Devtools",
        "module": "Dasar-Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/debugging-chrome-devtools.html",
        "description": "<p><strong>Debugging Chrome Devtools</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Debugging Chrome Devtools?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 13,
        "title": "13. Design Patterns Javascript",
        "module": "Dasar-Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/design-patterns-javascript.html",
        "description": "<p><strong>Design Patterns Javascript</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Design Patterns Javascript?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 14,
        "title": "14. Dom Manipulation Dasar",
        "module": "Dasar-Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/dom-manipulation-dasar.html",
        "description": "<p><strong>Dom Manipulation Dasar</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Dom Manipulation Dasar?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 15,
        "title": "15. Encapsulation Getter Setter",
        "module": "Fungsi & Scope",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/encapsulation-getter-setter.html",
        "description": "<p><strong>Encapsulation Getter Setter</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Encapsulation Getter Setter?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 16,
        "title": "16. Error Handling Try Catch",
        "module": "Fungsi & Scope",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/error-handling-try-catch.html",
        "description": "<p><strong>Error Handling Try Catch</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Error Handling Try Catch?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 17,
        "title": "17. Es6 Modules Import Export",
        "module": "Fungsi & Scope",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/es6-modules-import-export.html",
        "description": "<p><strong>Es6 Modules Import Export</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Es6 Modules Import Export?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 18,
        "title": "18. Eslint Dan Prettier",
        "module": "Fungsi & Scope",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/eslint-dan-prettier.html",
        "description": "<p><strong>Eslint Dan Prettier</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Eslint Dan Prettier?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 19,
        "title": "19. Events Handling Delegasi",
        "module": "Fungsi & Scope",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/events-handling-delegasi.html",
        "description": "<p><strong>Events Handling Delegasi</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Events Handling Delegasi?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 20,
        "title": "20. Fetch Api Http Requests",
        "module": "Fungsi & Scope",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/fetch-api-http-requests.html",
        "description": "<p><strong>Fetch Api Http Requests</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Fetch Api Http Requests?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 21,
        "title": "21. Final Project Fullstack",
        "module": "Fungsi & Scope",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/final-project-fullstack.html",
        "description": "<p><strong>Final Project Fullstack</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Final Project Fullstack?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 22,
        "title": "22. Generators Dan Iterators",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/generators-dan-iterators.html",
        "description": "<p><strong>Generators Dan Iterators</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Generators Dan Iterators?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 23,
        "title": "23. Iife Dan Module Pattern",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/iife-dan-module-pattern.html",
        "description": "<p><strong>Iife Dan Module Pattern</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Iife Dan Module Pattern?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 24,
        "title": "24. Inheritance Dengan Extends",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/inheritance-dengan-extends.html",
        "description": "<p><strong>Inheritance Dengan Extends</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Inheritance Dengan Extends?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 25,
        "title": "25. Javascript Security",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/javascript-security.html",
        "description": "<p><strong>Javascript Security</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Javascript Security?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 26,
        "title": "26. Jest Testing Framework",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/jest-testing-framework.html",
        "description": "<p><strong>Jest Testing Framework</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Jest Testing Framework?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 27,
        "title": "27. Json Serialisasi Dan Parsing",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/json-serialisasi-dan-parsing.html",
        "description": "<p><strong>Json Serialisasi Dan Parsing</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Json Serialisasi Dan Parsing?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 28,
        "title": "28. Kontrol Alur If Else",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/kontrol-alur-if-else.html",
        "description": "<p><strong>Kontrol Alur If Else</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Kontrol Alur If Else?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 29,
        "title": "29. Map Dan Weakmap",
        "module": "OOP",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/map-dan-weakmap.html",
        "description": "<p><strong>Map Dan Weakmap</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Map Dan Weakmap?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 30,
        "title": "30. Math Object",
        "module": "OOP",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/math-object.html",
        "description": "<p><strong>Math Object</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Math Object?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 31,
        "title": "31. Npm Dan Package Json",
        "module": "OOP",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/npm-dan-package-json.html",
        "description": "<p><strong>Npm Dan Package Json</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Npm Dan Package Json?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 32,
        "title": "32. Number Dan Bigint",
        "module": "OOP",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/number-dan-bigint.html",
        "description": "<p><strong>Number Dan Bigint</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Number Dan Bigint?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 33,
        "title": "33. Object Properti Dan Metode",
        "module": "OOP",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/object-properti-dan-metode.html",
        "description": "<p><strong>Object Properti Dan Metode</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Object Properti Dan Metode?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 34,
        "title": "34. Operator Dan Ekspresi",
        "module": "OOP",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/operator-dan-ekspresi.html",
        "description": "<p><strong>Operator Dan Ekspresi</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Operator Dan Ekspresi?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 35,
        "title": "35. Pengenalan Dan Sejarah",
        "module": "OOP",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/pengenalan-dan-sejarah.html",
        "description": "<p><strong>Pengenalan Dan Sejarah</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Pengenalan Dan Sejarah?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 36,
        "title": "36. Performance Optimization",
        "module": "Async & Web",
        "moduleId": 6,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/performance-optimization.html",
        "description": "<p><strong>Performance Optimization</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Performance Optimization?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 37,
        "title": "37. Perulangan",
        "module": "Async & Web",
        "moduleId": 6,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/perulangan.html",
        "description": "<p><strong>Perulangan</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Perulangan?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 38,
        "title": "38. Polymorphism Dan Method Overriding",
        "module": "Async & Web",
        "moduleId": 6,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/polymorphism-dan-method-overriding.html",
        "description": "<p><strong>Polymorphism Dan Method Overriding</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Polymorphism Dan Method Overriding?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 39,
        "title": "39. Project Ecommerce Filter",
        "module": "Async & Web",
        "moduleId": 6,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/project-ecommerce-filter.html",
        "description": "<p><strong>Project Ecommerce Filter</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Project Ecommerce Filter?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 40,
        "title": "40. Project Expense Tracker",
        "module": "Async & Web",
        "moduleId": 6,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/project-expense-tracker.html",
        "description": "<p><strong>Project Expense Tracker</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Project Expense Tracker?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 41,
        "title": "41. Project Interactive Quiz App",
        "module": "Async & Web",
        "moduleId": 6,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/project-interactive-quiz-app.html",
        "description": "<p><strong>Project Interactive Quiz App</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Project Interactive Quiz App?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 42,
        "title": "42. Project Realtime Chat App",
        "module": "Async & Web",
        "moduleId": 6,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/project-realtime-chat-app.html",
        "description": "<p><strong>Project Realtime Chat App</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Project Realtime Chat App?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 43,
        "title": "43. Project Todo List App",
        "module": "Tools & Best Practices",
        "moduleId": 7,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/project-todo-list-app.html",
        "description": "<p><strong>Project Todo List App</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Project Todo List App?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 44,
        "title": "44. Project Weather Dashboard",
        "module": "Tools & Best Practices",
        "moduleId": 7,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/project-weather-dashboard.html",
        "description": "<p><strong>Project Weather Dashboard</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Project Weather Dashboard?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 45,
        "title": "45. Prototype Dan Prototype Chain",
        "module": "Tools & Best Practices",
        "moduleId": 7,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/prototype-dan-prototype-chain.html",
        "description": "<p><strong>Prototype Dan Prototype Chain</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Prototype Dan Prototype Chain?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 46,
        "title": "46. Proxy Dan Reflection Api",
        "module": "Tools & Best Practices",
        "moduleId": 7,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/proxy-dan-reflection-api.html",
        "description": "<p><strong>Proxy Dan Reflection Api</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Proxy Dan Reflection Api?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 47,
        "title": "47. Regexp Regular Expressions",
        "module": "Tools & Best Practices",
        "moduleId": 7,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/regexp-regular-expressions.html",
        "description": "<p><strong>Regexp Regular Expressions</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Regexp Regular Expressions?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 48,
        "title": "48. Set Dan Weakset",
        "module": "Tools & Best Practices",
        "moduleId": 7,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/set-dan-weakset.html",
        "description": "<p><strong>Set Dan Weakset</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Set Dan Weakset?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 49,
        "title": "49. Setup Environment",
        "module": "Tools & Best Practices",
        "moduleId": 7,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/setup-environment.html",
        "description": "<p><strong>Setup Environment</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Setup Environment?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 50,
        "title": "50. String Methods Lengkap",
        "module": "Proyek",
        "moduleId": 8,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/string-methods-lengkap.html",
        "description": "<p><strong>String Methods Lengkap</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di String Methods Lengkap?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 51,
        "title": "51. This Keyword Binding",
        "module": "Proyek",
        "moduleId": 8,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/this-keyword-binding.html",
        "description": "<p><strong>This Keyword Binding</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di This Keyword Binding?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 52,
        "title": "52. Variabel Dan Tipe Data",
        "module": "Proyek",
        "moduleId": 8,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/variabel-dan-tipe-data.html",
        "description": "<p><strong>Variabel Dan Tipe Data</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Variabel Dan Tipe Data?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 53,
        "title": "53. Web Workers Multi Threading",
        "module": "Proyek",
        "moduleId": 8,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/web-workers-multi-threading.html",
        "description": "<p><strong>Web Workers Multi Threading</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Web Workers Multi Threading?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    },
    {
        "id": 54,
        "title": "54. Webpack Bundling Assets",
        "module": "Proyek",
        "moduleId": 8,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/javascript-learning-path/main/lessons/webpack-bundling-assets.html",
        "description": "<p><strong>Webpack Bundling Assets</strong></p>",
        "defaultCode": "// Write JavaScript here\nconsole.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Pelajari materi dan coba kode.",
        "quiz": {
            "question": "Apa yang dipelajari di Webpack Bundling Assets?",
            "options": [
                "Opsi A",
                "Opsi B",
                "Opsi C",
                "Opsi D"
            ],
            "answer": 0
        }
    }
];

// State & Runtime
let currentLesson = 0;
let progress = JSON.parse(localStorage.getItem('javascript_progress') || '{}');

function renderNav() {
    const nav = document.getElementById('lessons-nav');
    nav.innerHTML = MODULES.map(mod => {
        const modLessons = lessons.filter(l => l.moduleId === mod.id);
        const completed = modLessons.filter(l => progress[l.id]).length;
        const isExpanded = mod.id === (Math.floor(currentLesson / 10) + 1);
        return `
            <div class="mb-3">
                <div class="flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-gray-300 cursor-pointer hover:text-white rounded hover:bg-gray-700/50" onclick="toggleModule(${mod.id})">
                    <span><i class="${mod.icon} mr-2 text-blue-400"></i>${mod.title}</span>
                    <span class="text-xs text-gray-500">${completed}/${modLessons.length}</span>
                </div>
                <div id="module-${mod.id}" class="space-y-0.5 mt-1 ${isExpanded ? '' : 'hidden'}">
                    ${modLessons.map(l => {
                        const idx = lessons.indexOf(l);
                        return `<button onclick="loadLesson(${idx})" 
                            class="w-full text-left px-3 py-1.5 rounded text-xs hover:bg-gray-700 transition 
                            ${idx === currentLesson ? 'lesson-active' : ''} 
                            ${progress[l.id] ? 'text-green-400' : 'text-gray-400'}">
                            <span class="mr-1">${progress[l.id] ? '✅' : '○'}</span>${l.title}
                        </button>`;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function toggleModule(modId) {
    const el = document.getElementById('module-' + modId);
    if (el) el.classList.toggle('hidden');
}

async function loadLesson(index) {
    currentLesson = index;
    const lesson = lessons[index];
    
    // Show loading
    document.getElementById('lesson-content').innerHTML = `<h2 class="text-xl font-bold mb-4">${lesson.title}</h2><div class="text-gray-400"><i class="fas fa-spinner fa-spin mr-2"></i>Loading...</div>`;
    
    // Fetch and render markdown from lessons folder
    let contentHtml = lesson.description || '';
    if (lesson.mdFile && typeof marked !== 'undefined') {
        try {
            const response = await fetch(lesson.mdFile);
            if (response.ok) {
                const mdText = await response.text();
                contentHtml = marked.parse(mdText);
            }
        } catch (e) {
            console.error('Error loading:', lesson.mdFile, e);
        }
    }
    
    document.getElementById('lesson-content').innerHTML = `
        <div class="text-xs text-gray-500 mb-2">${lesson.module || ''}</div>
        <h2 class="text-xl font-bold mb-4 text-white">${lesson.title}</h2>
        <div class="prose prose-invert prose-sm max-w-none leading-relaxed
            prose-headings:text-blue-300 prose-h2:text-lg prose-h2:mt-6 prose-h2:mb-3
            prose-h3:text-base prose-h3:mt-4 prose-h3:mb-2
            prose-p:text-gray-300 prose-p:mb-3
            prose-code:text-green-400 prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700
            prose-ul:text-gray-300 prose-li:mb-1
            prose-strong:text-white prose-a:text-blue-400">
            ${contentHtml}
        </div>`;
    document.getElementById('code-editor').value = (lesson.defaultCode || '').replace(/\\n/g, '\n');
    document.getElementById('output').innerHTML = '<span class="text-gray-500">// Output akan muncul di sini</span>';
    document.getElementById('validation-msg').className = 'mt-4 p-3 rounded hidden';
    if (lesson.quiz) {
        document.getElementById('quiz-section').classList.remove('hidden');
        document.getElementById('quiz-content').innerHTML = `<p class="font-medium">${lesson.quiz.question}</p><div class="space-y-2">${lesson.quiz.options.map((opt, i) => `<label class="flex items-center space-x-2 cursor-pointer"><input type="radio" name="quiz" value="${i}" class="text-blue-500"><span>${opt}</span></label>`).join('')}</div>`;
    } else { document.getElementById('quiz-section').classList.add('hidden'); }
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === lessons.length - 1;
    // Update complete button
    const completeBtn = document.getElementById('complete-btn');
    const completedBtn = document.getElementById('completed-btn');
    if (progress[lesson.id]) {
        completeBtn.style.display = 'none';
        completedBtn.style.display = 'block';
    } else {
        completeBtn.style.display = 'block';
        completedBtn.style.display = 'none';
    }
    
    // Update breadcrumb
    const mod = MODULES.find(m => m.id === lesson.moduleId);
    document.getElementById('breadcrumb').textContent = mod ? mod.title : '';
    
    // Update nav buttons
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === lessons.length - 1;
    
    renderNav();
    window.scrollTo(0, 0);
}

// Overridden by Pyodide in index.html
// // runCode is overridden by Pyodide in index.html
async function runCode() {
    const code = document.getElementById('code-editor').value;
    const output = document.getElementById('output');
    const validation = document.getElementById('validation-msg');
    let logs = [];
    const origLog = console.log;
    console.log = (...args) => {
        logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
    };
    try {
        eval(code);
        const result = logs.join('\n');
        output.innerHTML = '<span class="text-green-400">' + escapeHtml(result) + '</span>';
        
        // Validate against expected output
        const expected = lessons[currentLesson]?.expectedOutput;
        if (expected && result.trim() === expected.trim()) {
            validation.className = 'mt-4 p-3 rounded bg-green-900/50 border border-green-500 text-green-300';
            validation.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Benar! ✅';
            if (lessons[currentLesson].id) {
                progress[lessons[currentLesson].id] = true;
                localStorage.setItem('javascript_progress', JSON.stringify(progress));
                updateProgress();
                renderNav();
            }
        } else if (expected) {
            validation.className = 'mt-4 p-3 rounded bg-yellow-900/50 border border-yellow-500 text-yellow-300';
            validation.innerHTML = '<i class="fas fa-lightbulb mr-2"></i>' + (lessons[currentLesson]?.hint || '');
        }
    } catch (e) {
        output.innerHTML = '<span class="text-red-400">❌ ' + escapeHtml(e.message) + '</span>';
    }
    console.log = origLog;
} else if (expected) {
            validation.className = 'mt-4 p-3 rounded bg-yellow-900/50 border border-yellow-500 text-yellow-300';
            validation.innerHTML = '💡 ' + (lessons[currentLesson].hint || '');
        }
    } catch(e) {
        output.innerHTML = '<span class="text-red-400">❌ ' + escapeHtml(e.message) + '</span>';
    }
    console.log = orig;
}

function resetCode() { document.getElementById('code-editor').value = lessons[currentLesson].defaultCode; }
function checkQuiz() {
    const selected = document.querySelector('input[name="quiz"]:checked');
    if (!selected) return alert('Pilih jawaban dulu!');
    const msg = document.createElement('div');
    msg.className = parseInt(selected.value) === lessons[currentLesson].quiz.answer ? 'mt-3 p-3 rounded bg-green-900/50 border border-green-500 text-green-300' : 'mt-3 p-3 rounded bg-red-900/50 border border-red-500 text-red-300';
    msg.innerHTML = parseInt(selected.value) === lessons[currentLesson].quiz.answer ? '<i class="fas fa-check-circle mr-2"></i>Benar!' : '<i class="fas fa-times-circle mr-2"></i>Salah!';
    document.getElementById('quiz-content').appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}
function nextLesson() { if (currentLesson < lessons.length - 1) loadLesson(currentLesson + 1); }
function prevLesson() { if (currentLesson > 0) loadLesson(currentLesson - 1); }

function markComplete() {
    const lesson = lessons[currentLesson];
    progress[lesson.id] = true;
    localStorage.setItem('javascript_progress', JSON.stringify(progress));
    
    const completeBtn = document.getElementById('complete-btn');
    const completedBtn = document.getElementById('completed-btn');
    completeBtn.style.display = 'none';
    completedBtn.style.display = 'block';
    
    renderNav();
    
    // Auto-advance to next lesson
    if (currentLesson < lessons.length - 1) {
        setTimeout(() => loadLesson(currentLesson + 1), 500);
    }
}

function updateProgress() { const done = Object.keys(progress).length; const pct = Math.round((done / lessons.length) * 100); document.getElementById('course-progress').textContent = pct + '%'; document.getElementById('progress-fill').style.width = pct + '%'; }
function resetProgress() { if (!confirm('Reset semua progress?')) return; progress = {}; localStorage.removeItem('javascript_progress'); renderNav(); updateProgress(); }
function escapeHtml(str) { return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load progress from localStorage
    progress = JSON.parse(localStorage.getItem('javascript_progress') || '{}');
    
    // Render sidebar
    renderNav();
    
    // Load first lesson
    if (lessons.length > 0) {
        loadLesson(0);
    }
});


// Init
document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    if (lessons.length > 0) loadLesson(0);
    updateProgress();
});

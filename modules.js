// Module definitions for JavaScript Learning Path
const MODULES = [
    {
        id: 1,
        title: "Dasar-Dasar JavaScript",
        description: "Pelajari fundamental JavaScript: variabel, tipe data, operator, dan kontrol alur.",
        lessons: [
            { id: 1, title: "Pengenalan dan Sejarah JavaScript", slug: "pengenalan-dan-sejarah", duration: "15 min" },
            { id: 2, title: "Setup Environment: Browser vs Node.js", slug: "setup-environment", duration: "10 min" },
            { id: 3, title: "Variabel dan Tipe Data", slug: "variabel-dan-tipe-data", duration: "20 min" },
            { id: 4, title: "Operator dan Ekspresi", slug: "operator-dan-ekspresi", duration: "15 min" },
            { id: 5, title: "Kontrol Alur: if/else dan switch", slug: "kontrol-alur-if-else", duration: "20 min" },
            { id: 6, title: "Perulangan: for, while, do-while", slug: "perulangan", duration: "20 min" }
        ],
        quiz: {
            questionCount: 10,
            passingScore: 70
        }
    },
    {
        id: 2,
        title: "Struktur Data",
        description: "Array, object, set, map, dan manipulasi data dalam JavaScript.",
        lessons: [
            { id: 1, title: "Array: Dasar dan Metode", slug: "array-dasar-dan-metode", duration: "20 min" },
            { id: 2, title: "Object: Properti dan Metode", slug: "object-properti-dan-metode", duration: "20 min" },
            { id: 3, title: "Set dan WeakSet", slug: "set-dan-weakset", duration: "15 min" },
            { id: 4, title: "Map dan WeakMap", slug: "map-dan-weakmap", duration: "15 min" },
            { id: 5, title: "JSON: Serialisasi dan Parsing", slug: "json-serialisasi-dan-parsing", duration: "15 min" }
        ],
        quiz: {
            questionCount: 10,
            passingScore: 70
        }
    },
    {
        id: 3,
        title: "Object-Oriented Programming",
        description: "Konsep OOP di JavaScript: class, inheritance, encapsulation, polymorphism.",
        lessons: [
            { id: 1, title: "Class dan Object", slug: "class-dan-object", duration: "20 min" },
            { id: 2, title: "Constructor dan Methods", slug: "constructor-dan-methods", duration: "15 min" },
            { id: 3, title: "Inheritance dengan extends", slug: "inheritance-dengan-extends", duration: "20 min" },
            { id: 4, title: "Encapsulation: getter/setter", slug: "encapsulation-getter-setter", duration: "15 min" },
            { id: 5, title: "Polymorphism dan Method Overriding", slug: "polymorphism-dan-method-overriding", duration: "20 min" }
        ],
        quiz: {
            questionCount: 10,
            passingScore: 70
        }
    },
    {
        id: 4,
        title: "Konsep Lanjut",
        description: "Closure, prototype, this keyword, dan arrow functions.",
        lessons: [
            { id: 1, title: "Closure dan Lexical Scoping", slug: "closure-dan-lexical-scoping", duration: "25 min" },
            { id: 2, title: "Prototype dan Prototype Chain", slug: "prototype-dan-prototype-chain", duration: "25 min" },
            { id: 3, title: "this Keyword: Binding dan Context", slug: "this-keyword-binding", duration: "20 min" },
            { id: 4, title: "Arrow Functions: Perilaku this", slug: "arrow-functions-perilaku-this", duration: "15 min" },
            { id: 5, title: "IIFE dan Module Pattern", slug: "iife-dan-module-pattern", duration: "20 min" }
        ],
        quiz: {
            questionCount: 10,
            passingScore: 70
        }
    },
    {
        id: 5,
        title: "Standard Library",
        description: "Built-in objects: Math, Date, String, Array, dan utility functions.",
        lessons: [
            { id: 1, title: "Math Object: Operasi Matematika", slug: "math-object", duration: "15 min" },
            { id: 2, title: "Date dan Time Manipulation", slug: "date-dan-time", duration: "20 min" },
            { id: 3, title: "String Methods Lengkap", slug: "string-methods-lengkap", duration: "20 min" },
            { id: 4, title: "Array Higher-Order Functions", slug: "array-higher-order-functions", duration: "25 min" },
            { id: 5, title: "Number dan BigInt", slug: "number-dan-bigint", duration: "15 min" },
            { id: 6, title: "RegExp: Regular Expressions", slug: "regexp-regular-expressions", duration: "25 min" }
        ],
        quiz: {
            questionCount: 10,
            passingScore: 70
        }
    },
    {
        id: 6,
        title: "Web Development",
        description: "DOM manipulation, events, fetch API, dan async JavaScript.",
        lessons: [
            { id: 1, title: "DOM Manipulation Dasar", slug: "dom-manipulation-dasar", duration: "25 min" },
            { id: 2, title: "Events: Handling dan Delegasi", slug: "events-handling-delegasi", duration: "25 min" },
            { id: 3, title: "Fetch API: HTTP Requests", slug: "fetch-api-http-requests", duration: "20 min" },
            { id: 4, title: "Async/Await: Asynchronous Programming", slug: "async-await-asynchronous", duration: "30 min" },
            { id: 5, title: "Project: To-Do List App", slug: "project-todo-list-app", duration: "45 min", project: true }
        ],
        quiz: {
            questionCount: 10,
            passingScore: 70
        }
    },
    {
        id: 7,
        title: "Tooling & Ecosystem",
        description: "npm, yarn, bundlers, transpilers, dan development tools.",
        lessons: [
            { id: 1, title: "npm dan package.json", slug: "npm-dan-package-json", duration: "20 min" },
            { id: 2, title: "ES6 Modules: import/export", slug: "es6-modules-import-export", duration: "15 min" },
            { id: 3, title: "Babel: Transpiling ES6+", slug: "babel-transpiling", duration: "20 min" },
            { id: 4, title: "Webpack: Bundling Assets", slug: "webpack-bundling-assets", duration: "30 min" },
            { id: 5, title: "ESLint dan Prettier: Code Quality", slug: "eslint-dan-prettier", duration: "20 min" },
            { id: 6, title: "Jest: Testing Framework", slug: "jest-testing-framework", duration: "25 min" }
        ],
        quiz: {
            questionCount: 10,
            passingScore: 70
        }
    },
    {
        id: 8,
        title: "Best Practices",
        description: "Coding standards, performance optimization, security, dan debugging.",
        lessons: [
            { id: 1, title: "Clean Code Principles", slug: "clean-code-principles", duration: "25 min" },
            { id: 2, title: "Performance Optimization", slug: "performance-optimization", duration: "30 min" },
            { id: 3, title: "JavaScript Security Best Practices", slug: "javascript-security", duration: "25 min" },
            { id: 4, title: "Debugging dengan Chrome DevTools", slug: "debugging-chrome-devtools", duration: "25 min" },
            { id: 5, title: "Error Handling dan Try-Catch", slug: "error-handling-try-catch", duration: "20 min" },
            { id: 6, title: "Code Review Checklist", slug: "code-review-checklist", duration: "20 min" }
        ],
        quiz: {
            questionCount: 10,
            passingScore: 70
        }
    },
    {
        id: 9,
        title: "Advanced Topics",
        description: "Generators, proxies, reflection, Web Workers, dan design patterns.",
        lessons: [
            { id: 1, title: "Generators dan Iterators", slug: "generators-dan-iterators", duration: "25 min" },
            { id: 2, title: "Proxy dan Reflection API", slug: "proxy-dan-reflection-api", duration: "25 min" },
            { id: 3, title: "Web Workers: Multi-threading", slug: "web-workers-multi-threading", duration: "30 min" },
            { id: 4, title: "Design Patterns di JavaScript", slug: "design-patterns-javascript", duration: "35 min" },
            { id: 5, title: "Project: Weather Dashboard", slug: "project-weather-dashboard", duration: "45 min", project: true }
        ],
        quiz: {
            questionCount: 10,
            passingScore: 70
        }
    },
    {
        id: 10,
        title: "Real-World Projects",
        description: "5 proyek lengkap untuk menguji技能 dan portofolio.",
        lessons: [
            { id: 1, title: "Project 1: Interactive Quiz App", slug: "project-interactive-quiz-app", duration: "2 jam", project: true },
            { id: 2, title: "Project 2: Expense Tracker", slug: "project-expense-tracker", duration: "2.5 jam", project: true },
            { id: 3, title: "Project 3: Real-time Chat App", slug: "project-realtime-chat-app", duration: "3 jam", project: true },
            { id: 4, title: "Project 4: E-commerce Product Filter", slug: "project-ecommerce-filter", duration: "2.5 jam", project: true },
            { id: 5, title: "Final Project: Full-Stack JavaScript App", slug: "final-project-fullstack", duration: "4 jam", project: true, final: true }
        ],
        quiz: {
            questionCount: 0,
            passingScore: 0
        }
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MODULES;
}
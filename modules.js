// Module definitions for JavaScript Learning Path — 54 lessons, 10 modules (ES2024 modern)
const MODULES = [
    {
        id: 1,
        title: "Dasar-Dasar JavaScript",
        description: "Pelajari fundamental JavaScript modern: variabel, tipe data, operator, dan kontrol alur dengan ES2024.",
        icon: "fas fa-play-circle",
        lessons: [
            { id: 1, title: "Pengenalan dan Sejarah JavaScript", slug: "pengenalan-dan-sejarah", duration: "15 min", color: "blue" },
            { id: 2, title: "Setup Environment: Browser vs Node.js vs Bun/Deno", slug: "setup-environment", duration: "15 min", color: "blue" },
            { id: 3, title: "Variabel dan Tipe Data (let/const, BigInt, ??, ?.)", slug: "variabel-dan-tipe-data", duration: "20 min", color: "green" },
            { id: 4, title: "Operator dan Ekspresi Modern (??, ??=, ||=", slug: "operator-dan-ekspresi", duration: "15 min", color: "green" },
            { id: 5, title: "Kontrol Alur: if/else dan switch", slug: "kontrol-alur-if-else", duration: "20 min", color: "green" },
            { id: 6, title: "Perulangan: for, while, for...of, for await...of", slug: "perulangan", duration: "20 min", color: "green" }
        ],
        quiz: { questionCount: 10, passingScore: 70 }
    },
    {
        id: 2,
        title: "Struktur Data",
        description: "Array, object, set, map, JSON — dengan API modern (at, findLast, groupBy, structuredClone).",
        icon: "fas fa-database",
        lessons: [
            { id: 7, title: "Array: Dasar dan Metode Modern (at, findLast, toSorted)", slug: "array-dasar-dan-metode", duration: "20 min", color: "blue" },
            { id: 8, title: "Object: Properti dan Metode (groupBy, entries)", slug: "object-properti-dan-metode", duration: "20 min", color: "blue" },
            { id: 9, title: "Set dan WeakSet", slug: "set-dan-weakset", duration: "15 min", color: "blue" },
            { id: 10, title: "Map dan WeakMap", slug: "map-dan-weakmap", duration: "15 min", color: "blue" },
            { id: 11, title: "JSON: Serialisasi dan structuredClone", slug: "json-serialisasi-dan-parsing", duration: "15 min", color: "blue" }
        ],
        quiz: { questionCount: 10, passingScore: 70 }
    },
    {
        id: 3,
        title: "Object-Oriented Programming",
        description: "Konsep OOP di JavaScript: class, private fields (#), inheritance, encapsulation.",
        icon: "fas fa-object-group",
        lessons: [
            { id: 12, title: "Class dan Object (private #fields)", slug: "class-dan-object", duration: "20 min", color: "green" },
            { id: 13, title: "Constructor dan Methods", slug: "constructor-dan-methods", duration: "15 min", color: "green" },
            { id: 14, title: "Inheritance dengan extends", slug: "inheritance-dengan-extends", duration: "20 min", color: "green" },
            { id: 15, title: "Encapsulation: getter/setter & #private", slug: "encapsulation-getter-setter", duration: "15 min", color: "green" },
            { id: 16, title: "Polymorphism dan Method Overriding", slug: "polymorphism-dan-method-overriding", duration: "20 min", color: "green" }
        ],
        quiz: { questionCount: 10, passingScore: 70 }
    },
    {
        id: 4,
        title: "Fungsi dan Scope",
        description: "Arrow functions, closures, this, IIFE → ESM, prototype chain.",
        icon: "fas fa-code",
        lessons: [
            { id: 17, title: "Closure dan Lexical Scoping", slug: "closure-dan-lexical-scoping", duration: "25 min", color: "blue" },
            { id: 18, title: "this Keyword: Binding dan Context", slug: "this-keyword-binding", duration: "20 min", color: "blue" },
            { id: 19, title: "Arrow Functions: Perilaku this", slug: "arrow-functions-perilaku-this", duration: "15 min", color: "blue" },
            { id: 20, title: "IIFE dan Module Pattern → ESM & Top-Level Await", slug: "iife-dan-module-pattern", duration: "20 min", color: "blue" },
            { id: 21, title: "Prototype dan Prototype Chain", slug: "prototype-dan-prototype-chain", duration: "20 min", color: "green" }
        ],
        quiz: { questionCount: 10, passingScore: 70 }
    },
    {
        id: 5,
        title: "Standard Library & Built-in Objects",
        description: "Math, Date/Temporal, String, Array, Number/BigInt, RegExp modern.",
        icon: "fas fa-cube",
        lessons: [
            { id: 22, title: "Math Object: Operasi Matematika", slug: "math-object", duration: "15 min", color: "blue" },
            { id: 23, title: "Date dan Temporal API", slug: "date-dan-time", duration: "20 min", color: "blue" },
            { id: 24, title: "String Methods (replaceAll, at)", slug: "string-methods-lengkap", duration: "20 min", color: "blue" },
            { id: 25, title: "Array Higher-Order Functions", slug: "array-higher-order-functions", duration: "25 min", color: "green" },
            { id: 26, title: "Number dan BigInt", slug: "number-dan-bigint", duration: "15 min", color: "green" },
            { id: 27, title: "RegExp: Named Groups, matchAll, Lookbehind", slug: "regexp-regular-expressions", duration: "25 min", color: "green" }
        ],
        quiz: { questionCount: 10, passingScore: 70 }
    },
    {
        id: 6,
        title: "Web Development Fundamentals",
        description: "DOM, events, fetch + AbortController, async/await, debugging, error handling.",
        icon: "fas fa-globe",
        lessons: [
            { id: 28, title: "DOM Manipulation Dasar", slug: "dom-manipulation-dasar", duration: "25 min", color: "blue" },
            { id: 29, title: "Events: Handling dan Delegasi", slug: "events-handling-delegasi", duration: "25 min", color: "blue" },
            { id: 30, title: "Fetch API: HTTP Requests + AbortController", slug: "fetch-api-http-requests", duration: "20 min", color: "blue" },
            { id: 31, title: "Async/Await: Promise.allSettled, any", slug: "async-await-asynchronous", duration: "30 min", color: "green" },
            { id: 32, title: "Debugging: Chrome DevTools", slug: "debugging-chrome-devtools", duration: "25 min", color: "green" },
            { id: 33, title: "Error Handling: Try-Catch + Cause", slug: "error-handling-try-catch", duration: "20 min", color: "green" },
            { id: 34, title: "Project: To-Do List App", slug: "project-todo-list-app", duration: "45 min", color: "purple", project: true },
            { id: 35, title: "Project: Weather Dashboard", slug: "project-weather-dashboard", duration: "45 min", color: "purple", project: true }
        ],
        quiz: { questionCount: 10, passingScore: 70 }
    },
    {
        id: 7,
        title: "Tooling & Ecosystem",
        description: "npm/pnpm/bun, ESM, Babel/SWC, Vite/esbuild, ESLint, Vitest + Node test runner.",
        icon: "fas fa-tools",
        lessons: [
            { id: 36, title: "npm, pnpm, dan Bun", slug: "npm-dan-package-json", duration: "20 min", color: "blue" },
            { id: 37, title: "ES Modules: import/export + Top-Level Await", slug: "es6-modules-import-export", duration: "15 min", color: "blue" },
            { id: 38, title: "Babel, SWC, dan esbuild", slug: "babel-transpiling", duration: "20 min", color: "blue" },
            { id: 39, title: "Vite, Webpack & Turbopack", slug: "webpack-bundling-assets", duration: "30 min", color: "green" },
            { id: 40, title: "ESLint, Prettier & Biome", slug: "eslint-dan-prettier", duration: "20 min", color: "green" },
            { id: 41, title: "Testing: Vitest, Jest & Node Test Runner", slug: "jest-testing-framework", duration: "25 min", color: "green" }
        ],
        quiz: { questionCount: 10, passingScore: 70 }
    },
    {
        id: 8,
        title: "Best Practices & Performance",
        description: "Coding standards, performance, security, code review, Web Workers.",
        icon: "fas fa-star",
        lessons: [
            { id: 42, title: "Clean Code Principles", slug: "clean-code-principles", duration: "25 min", color: "blue" },
            { id: 43, title: "Performance Optimization", slug: "performance-optimization", duration: "30 min", color: "blue" },
            { id: 44, title: "JavaScript Security Best Practices", slug: "javascript-security", duration: "25 min", color: "green" },
            { id: 45, title: "Code Review Checklist", slug: "code-review-checklist", duration: "20 min", color: "green" },
            { id: 46, title: "Web Workers: Multi-threading", slug: "web-workers-multi-threading", duration: "30 min", color: "purple" }
        ],
        quiz: { questionCount: 10, passingScore: 70 }
    },
    {
        id: 9,
        title: "Advanced Topics",
        description: "Generators, proxies, reflection, design patterns — modern ES2024+.",
        icon: "fas fa-rocket",
        lessons: [
            { id: 47, title: "Generators dan Iterators", slug: "generators-dan-iterators", duration: "25 min", color: "blue" },
            { id: 48, title: "Proxy dan Reflection API", slug: "proxy-dan-reflection-api", duration: "25 min", color: "blue" },
            { id: 49, title: "Design Patterns di JavaScript", slug: "design-patterns-javascript", duration: "35 min", color: "green" }
        ],
        quiz: { questionCount: 10, passingScore: 70 }
    },
    {
        id: 10,
        title: "Real-World Projects",
        description: "5 proyek lengkap untuk portofolio.",
        icon: "fas fa-laptop-code",
        lessons: [
            { id: 50, title: "Project 1: Interactive Quiz App", slug: "project-interactive-quiz-app", duration: "2 jam", color: "purple", project: true },
            { id: 51, title: "Project 2: Expense Tracker", slug: "project-expense-tracker", duration: "2.5 jam", color: "purple", project: true },
            { id: 52, title: "Project 3: Real-time Chat App", slug: "project-realtime-chat-app", duration: "3 jam", color: "purple", project: true },
            { id: 53, title: "Project 4: E-commerce Product Filter", slug: "project-ecommerce-filter", duration: "2.5 jam", color: "purple", project: true },
            { id: 54, title: "Final Project: Full-Stack JavaScript App", slug: "final-project-fullstack", duration: "4 jam", color: "purple", project: true, final: true }
        ],
        quiz: { questionCount: 0, passingScore: 0 }
    }
];

// Export for use in other modules
window.MODULES = MODULES;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MODULES;
}

#!/usr/bin/env node

// Generate placeholder lessons for all modules
const fs = require('fs');
const path = require('path');

const lessons = [
    // Module 2
    { slug: 'set-dan-weakset', title: 'Set dan WeakSet', module: 2 },
    { slug: 'map-dan-weakmap', title: 'Map dan WeakMap', module: 2 },
    { slug: 'json-serialisasi-dan-parsing', title: 'JSON: Serialisasi dan Parsing', module: 2 },
    // Module 4
    { slug: 'prototype-dan-prototype-chain', title: 'Prototype dan Prototype Chain', module: 4 },
    { slug: 'this-keyword-binding', title: 'this Keyword: Binding dan Context', module: 4 },
    { slug: 'arrow-functions-perilaku-this', title: 'Arrow Functions: Perilaku this', module: 4 },
    { slug: 'iife-dan-module-pattern', title: 'IIFE dan Module Pattern', module: 4 },
    // Module 5
    { slug: 'math-object', title: 'Math Object: Operasi Matematika', module: 5 },
    { slug: 'date-dan-time', title: 'Date dan Time Manipulation', module: 5 },
    { slug: 'string-methods-lengkap', title: 'String Methods Lengkap', module: 5 },
    { slug: 'array-higher-order-functions', title: 'Array Higher-Order Functions', module: 5 },
    { slug: 'number-dan-bigint', title: 'Number dan BigInt', module: 5 },
    { slug: 'regexp-regular-expressions', title: 'RegExp: Regular Expressions', module: 5 },
    // Module 6
    { slug: 'dom-manipulation-dasar', title: 'DOM Manipulation Dasar', module: 6 },
    { slug: 'events-handling-delegasi', title: 'Events: Handling dan Delegasi', module: 6 },
    { slug: 'fetch-api-http-requests', title: 'Fetch API: HTTP Requests', module: 6 },
    { slug: 'async-await-asynchronous', title: 'Async/Await: Asynchronous Programming', module: 6 },
    { slug: 'project-todo-list-app', title: 'Project: To-Do List App', module: 6, project: true },
    // Module 7
    { slug: 'npm-dan-package-json', title: 'npm dan package.json', module: 7 },
    { slug: 'es6-modules-import-export', title: 'ES6 Modules: import/export', module: 7 },
    { slug: 'babel-transpiling', title: 'Babel: Transpiling ES6+', module: 7 },
    { slug: 'webpack-bundling-assets', title: 'Webpack: Bundling Assets', module: 7 },
    { slug: 'eslint-dan-prettier', title: 'ESLint dan Prettier: Code Quality', module: 7 },
    { slug: 'jest-testing-framework', title: 'Jest: Testing Framework', module: 7 },
    // Module 8
    { slug: 'clean-code-principles', title: 'Clean Code Principles', module: 8 },
    { slug: 'performance-optimization', title: 'Performance Optimization', module: 8 },
    { slug: 'javascript-security', title: 'JavaScript Security Best Practices', module: 8 },
    { slug: 'debugging-chrome-devtools', title: 'Debugging dengan Chrome DevTools', module: 8 },
    { slug: 'error-handling-try-catch', title: 'Error Handling dan Try-Catch', module: 8 },
    { slug: 'code-review-checklist', title: 'Code Review Checklist', module: 8 },
    // Module 9
    { slug: 'generators-dan-iterators', title: 'Generators dan Iterators', module: 9 },
    { slug: 'proxy-dan-reflection-api', title: 'Proxy dan Reflection API', module: 9 },
    { slug: 'web-workers-multi-threading', title: 'Web Workers: Multi-threading', module: 9 },
    { slug: 'design-patterns-javascript', title: 'Design Patterns di JavaScript', module: 9 },
    { slug: 'project-weather-dashboard', title: 'Project: Weather Dashboard', module: 9, project: true },
    // Module 10
    { slug: 'project-interactive-quiz-app', title: 'Project 1: Interactive Quiz App', module: 10, project: true },
    { slug: 'project-expense-tracker', title: 'Project 2: Expense Tracker', module: 10, project: true },
    { slug: 'project-realtime-chat-app', title: 'Project 3: Real-time Chat App', module: 10, project: true },
    { slug: 'project-ecommerce-filter', title: 'Project 4: E-commerce Product Filter', module: 10, project: true },
    { slug: 'final-project-fullstack', title: 'Final Project: Full-Stack JavaScript App', module: 10, project: true, final: true }
];

const lessonsDir = path.join(__dirname, 'lessons');

lessons.forEach(lesson => {
    const filename = `${lesson.slug}.html`;
    const filepath = path.join(lessonsDir, filename);
    
    const content = `<!DOCTYPE html>
<html>
<head><title>${lesson.title}</title></head>
<body>
<div class="bg-gray-900 p-6 rounded-lg mb-6">
    <h2 class="text-2xl font-semibold mb-4 text-blue-300">Modul ${lesson.module}: ${lesson.title}</h2>
    <p class="text-gray-300">Konten lengkap untuk lesson ini sedang dalam pengembangan di Phase 2.</p>
    <p class="text-gray-400 mt-4">Topik yang akan dibahas:</p>
    <ul class="list-disc pl-6 text-gray-300">
        <li>Penjelasan konsep utama</li>
        <li>Contoh kode interaktif</li>
        <li>Latihan dan quiz</li>
        <li>Best practices</li>
    </ul>
</div>
<div class="bg-yellow-900 border border-yellow-700 p-6 rounded-lg">
    <p class="text-yellow-200"><i class="fas fa-tools mr-2"></i>Konten lengkap akan tersedia di Phase 2: Content Development.</p>
</div>
</body>
</html>`;
    
    fs.writeFileSync(filepath, content);
    console.log(`Created: ${filename}`);
});

console.log('All placeholders generated!');
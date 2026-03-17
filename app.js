// JavaScript Learning Path - Application Logic
const lessons = [
    {
        "id": 1,
        "title": "1. Array Dasar",
        "description": "<p><strong>Array Dasar</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "const arr = [1, 2, 3];\narr.push(4);\narr.unshift(0);\nconsole.log(arr);\nconsole.log(\"Length:\", arr.length);\nconsole.log(\"Slice:\", arr.slice(1, 3));",
        "expectedOutput": "[0, 1, 2, 3, 4]\nLength: 5\nSlice: [1, 2]",
        "hint": "push/pop = akhir, shift/unshift = awal.",
        "quiz": {
            "question": "Apa yang dipelajari di Array Dasar?",
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
        "title": "2. Array HOF",
        "description": "<p><strong>Array HOF</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "const angka = [1, 2, 3, 4, 5];\nconsole.log(\"Map:\", angka.map(x => x * x));\nconsole.log(\"Filter:\", angka.filter(x => x > 2));\nconsole.log(\"Reduce:\", angka.reduce((a, b) => a + b, 0));",
        "expectedOutput": "Map: [1, 4, 9, 16, 25]\nFilter: [3, 4, 5]\nReduce: 15",
        "hint": "map = transform, filter = saring, reduce = akumulasi.",
        "quiz": {
            "question": "Apa yang dipelajari di Array HOF?",
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
        "title": "3. Arrow Functions",
        "description": "<p><strong>Arrow Functions</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "const tambah = (a, b) => a + b;\nconst sapa = nama => `Halo, ${nama}!`;\nconsole.log(tambah(3, 5));\nconsole.log(sapa(\"Archon\"));\n// Arrow: this dari lexical scope\nconst obj = {\n    nama: \"Test\",\n    // method: () => this.nama ❌ (undefined)\n    method() { return this.nama; } // ✅\n};\nconsole.log(obj.method());",
        "expectedOutput": "8\nHalo, Archon!\nTest",
        "hint": "Arrow: (params) => expr. this = lexical.",
        "quiz": {
            "question": "Apa yang dipelajari di Arrow Functions?",
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
        "title": "4. Async/Await",
        "description": "<p><strong>Async/Await</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "async function main() {\n    console.log(\"Start\");\n    await new Promise(r => setTimeout(r, 100));\n    console.log(\"After await\");\n}\nmain();\nconsole.log(\"Sync\");",
        "expectedOutput": "Start\nSync\nAfter await",
        "hint": "async function, await Promise. Non-blocking!",
        "quiz": {
            "question": "Apa yang dipelajari di Async/Await?",
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
        "description": "<p><strong>Babel Transpiling</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Babel Transpiling\nconsole.log(\"Belajar Babel Transpiling!\");",
        "expectedOutput": "Belajar Babel Transpiling!",
        "hint": "Pelajari Babel Transpiling.",
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
        "title": "6. Class dan Object",
        "description": "<p><strong>Class dan Object</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "class User {\n    constructor(nama) {\n        this.nama = nama;\n    }\n    sapa() {\n        return `Halo, ${this.nama}!`;\n    }\n}\nconst u = new User(\"Archon\");\nconsole.log(u.sapa());",
        "expectedOutput": "Halo, Archon!",
        "hint": "class = blueprint. constructor = init.",
        "quiz": {
            "question": "Apa yang dipelajari di Class dan Object?",
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
        "description": "<p><strong>Clean Code Principles</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Clean Code Principles\nconsole.log(\"Belajar Clean Code Principles!\");",
        "expectedOutput": "Belajar Clean Code Principles!",
        "hint": "Pelajari Clean Code Principles.",
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
        "title": "8. Closure",
        "description": "<p><strong>Closure</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "function counter() {\n    let count = 0;\n    return () => ++count;\n}\nconst hitung = counter();\nconsole.log(hitung());\nconsole.log(hitung());\nconsole.log(hitung());",
        "expectedOutput": "1\n2\n3",
        "hint": "Closure = function + lexical environment.",
        "quiz": {
            "question": "Apa yang dipelajari di Closure?",
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
        "description": "<p><strong>Code Review Checklist</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Code Review Checklist\nconsole.log(\"Belajar Code Review Checklist!\");",
        "expectedOutput": "Belajar Code Review Checklist!",
        "hint": "Pelajari Code Review Checklist.",
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
        "description": "<p><strong>Constructor Dan Methods</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Constructor Dan Methods\nconsole.log(\"Belajar Constructor Dan Methods!\");",
        "expectedOutput": "Belajar Constructor Dan Methods!",
        "hint": "Pelajari Constructor Dan Methods.",
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
        "description": "<p><strong>Date Dan Time</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Date Dan Time\nconsole.log(\"Belajar Date Dan Time!\");",
        "expectedOutput": "Belajar Date Dan Time!",
        "hint": "Pelajari Date Dan Time.",
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
        "description": "<p><strong>Debugging Chrome Devtools</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Debugging Chrome Devtools\nconsole.log(\"Belajar Debugging Chrome Devtools!\");",
        "expectedOutput": "Belajar Debugging Chrome Devtools!",
        "hint": "Pelajari Debugging Chrome Devtools.",
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
        "description": "<p><strong>Design Patterns Javascript</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Design Patterns Javascript\nconsole.log(\"Belajar Design Patterns Javascript!\");",
        "expectedOutput": "Belajar Design Patterns Javascript!",
        "hint": "Pelajari Design Patterns Javascript.",
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
        "title": "14. DOM Manipulation",
        "description": "<p><strong>DOM Manipulation</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Browser only\nconst el = document.createElement(\"div\");\nel.textContent = \"Hello DOM!\";\nel.classList.add(\"box\");\nconsole.log(el.outerHTML);",
        "expectedOutput": "<div class=\"box\">Hello DOM!</div>",
        "hint": "document.createElement, querySelector, classList.",
        "quiz": {
            "question": "Apa yang dipelajari di DOM Manipulation?",
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
        "title": "15. Encapsulation",
        "description": "<p><strong>Encapsulation</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "class Counter {\n    #count = 0;\n    get value() { return this.#count; }\n    increment() { this.#count++; }\n}\nconst c = new Counter();\nc.increment();\nc.increment();\nconsole.log(c.value);",
        "expectedOutput": "2",
        "hint": "# = private field. get/set = property.",
        "quiz": {
            "question": "Apa yang dipelajari di Encapsulation?",
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
        "title": "16. Error Handling",
        "description": "<p><strong>Error Handling</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "try {\n    JSON.parse(\"invalid\");\n} catch (e) {\n    console.log(\"Error:\", e.name);\n} finally {\n    console.log(\"Finally!\");\n}\nfunction bagi(a, b) {\n    if (b === 0) throw new Error(\"Div by zero!\");\n    return a / b;\n}\nconsole.log(bagi(10, 3).toFixed(2));",
        "expectedOutput": "Error: SyntaxError\nFinally!\n3.33",
        "hint": "try/catch/finally. throw = custom error.",
        "quiz": {
            "question": "Apa yang dipelajari di Error Handling?",
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
        "description": "<p><strong>Es6 Modules Import Export</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Es6 Modules Import Export\nconsole.log(\"Belajar Es6 Modules Import Export!\");",
        "expectedOutput": "Belajar Es6 Modules Import Export!",
        "hint": "Pelajari Es6 Modules Import Export.",
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
        "description": "<p><strong>Eslint Dan Prettier</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Eslint Dan Prettier\nconsole.log(\"Belajar Eslint Dan Prettier!\");",
        "expectedOutput": "Belajar Eslint Dan Prettier!",
        "hint": "Pelajari Eslint Dan Prettier.",
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
        "title": "19. Events",
        "description": "<p><strong>Events</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Browser only\nconst btn = { addEventListener: (e, fn) => {\n    console.log(`Event ${e} registered`);\n    fn({target: btn});\n}};\nbtn.addEventListener(\"click\", (e) => {\n    console.log(\"Clicked!\");\n});",
        "expectedOutput": "Event click registered\nClicked!",
        "hint": "addEventListener, event delegation.",
        "quiz": {
            "question": "Apa yang dipelajari di Events?",
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
        "title": "20. Fetch API",
        "description": "<p><strong>Fetch API</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "async function getData() {\n    // Simulasi fetch\n    const mockFetch = () => Promise.resolve({\n        json: () => Promise.resolve({name: \"Archon\"})\n    });\n    const res = await mockFetch();\n    const data = await res.json();\n    console.log(\"Data:\", data.name);\n}\ngetData();",
        "expectedOutput": "Data: Archon",
        "hint": "fetch() untuk HTTP request. async/await + fetch.",
        "quiz": {
            "question": "Apa yang dipelajari di Fetch API?",
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
        "description": "<p><strong>Final Project Fullstack</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Final Project Fullstack\nconsole.log(\"Belajar Final Project Fullstack!\");",
        "expectedOutput": "Belajar Final Project Fullstack!",
        "hint": "Pelajari Final Project Fullstack.",
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
        "title": "22. Generators",
        "description": "<p><strong>Generators</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "function* gen() {\n    yield 1;\n    yield 2;\n    yield 3;\n}\nconst g = gen();\nconsole.log(g.next().value);\nconsole.log(g.next().value);\nfor (const val of gen()) {\n    console.log(val);\n}",
        "expectedOutput": "1\n2\n1\n2\n3",
        "hint": "function* = generator. yield = pause/resume.",
        "quiz": {
            "question": "Apa yang dipelajari di Generators?",
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
        "description": "<p><strong>Iife Dan Module Pattern</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Iife Dan Module Pattern\nconsole.log(\"Belajar Iife Dan Module Pattern!\");",
        "expectedOutput": "Belajar Iife Dan Module Pattern!",
        "hint": "Pelajari Iife Dan Module Pattern.",
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
        "title": "24. Inheritance",
        "description": "<p><strong>Inheritance</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "class Animal {\n    constructor(nama) { this.nama = nama; }\n    speak() { return `${this.nama} bersuara`; }\n}\nclass Dog extends Animal {\n    speak() { return `${this.nama} menggonggong!`; }\n}\nconsole.log(new Dog(\"Buddy\").speak());",
        "expectedOutput": "Buddy menggonggong!",
        "hint": "extends = inheritance. super() = parent.",
        "quiz": {
            "question": "Apa yang dipelajari di Inheritance?",
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
        "description": "<p><strong>Javascript Security</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Javascript Security\nconsole.log(\"Belajar Javascript Security!\");",
        "expectedOutput": "Belajar Javascript Security!",
        "hint": "Pelajari Javascript Security.",
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
        "description": "<p><strong>Jest Testing Framework</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Jest Testing Framework\nconsole.log(\"Belajar Jest Testing Framework!\");",
        "expectedOutput": "Belajar Jest Testing Framework!",
        "hint": "Pelajari Jest Testing Framework.",
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
        "title": "27. JSON",
        "description": "<p><strong>JSON</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "const obj = {nama: \"Archon\", umur: 25};\nconst json = JSON.stringify(obj, null, 2);\nconsole.log(json);\nconst parsed = JSON.parse(json);\nconsole.log(parsed.nama);",
        "expectedOutput": "{\\n  \"nama\": \"Archon\",\\n  \"umur\": 25\\n}\nArchon",
        "hint": "stringify = object→JSON. parse = JSON→object.",
        "quiz": {
            "question": "Apa yang dipelajari di JSON?",
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
        "title": "28. If/Else",
        "description": "<p><strong>If/Else</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "const umur = 20;\nif (umur >= 18) {\n    console.log(\"Dewasa\");\n} else {\n    console.log(\"Anak-anak\");\n}\nconst status = umur >= 18 ? \"Dewasa\" : \"Anak-anak\";\nconsole.log(\"Status:\", status);",
        "expectedOutput": "Dewasa\nStatus: Dewasa",
        "hint": "Ternary: condition ? true : false.",
        "quiz": {
            "question": "Apa yang dipelajari di If/Else?",
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
        "title": "29. Map dan WeakMap",
        "description": "<p><strong>Map dan WeakMap</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "const map = new Map();\nmap.set(\"nama\", \"Archon\");\nmap.set(1, \"angka\");\nconsole.log(map.get(\"nama\"));\nconsole.log(map.size);\nfor (const [k, v] of map) {\n    console.log(`${k}: ${v}`);\n}",
        "expectedOutput": "Archon\n2\nnama: Archon\n1: angka",
        "hint": "Map = key-value. Key bisa tipe apa saja.",
        "quiz": {
            "question": "Apa yang dipelajari di Map dan WeakMap?",
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
        "description": "<p><strong>Math Object</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Math Object\nconsole.log(\"Belajar Math Object!\");",
        "expectedOutput": "Belajar Math Object!",
        "hint": "Pelajari Math Object.",
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
        "description": "<p><strong>Npm Dan Package Json</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Npm Dan Package Json\nconsole.log(\"Belajar Npm Dan Package Json!\");",
        "expectedOutput": "Belajar Npm Dan Package Json!",
        "hint": "Pelajari Npm Dan Package Json.",
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
        "description": "<p><strong>Number Dan Bigint</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Number Dan Bigint\nconsole.log(\"Belajar Number Dan Bigint!\");",
        "expectedOutput": "Belajar Number Dan Bigint!",
        "hint": "Pelajari Number Dan Bigint.",
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
        "description": "<p><strong>Object Properti Dan Metode</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Object Properti Dan Metode\nconsole.log(\"Belajar Object Properti Dan Metode!\");",
        "expectedOutput": "Belajar Object Properti Dan Metode!",
        "hint": "Pelajari Object Properti Dan Metode.",
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
        "title": "34. Operator dan Ekspresi",
        "description": "<p><strong>Operator dan Ekspresi</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "const a = 10, b = 3;\nconsole.log(\"a + b =\", a + b);\nconsole.log(\"a === b:\", a === b);\nconsole.log(\"a ?? null:\", a ?? \"default\");\nconsole.log(\"5 === \\\"5\\\":\", 5 === \"5\");",
        "expectedOutput": "a + b = 13\na === b: false\na ?? null: 10\n5 === \"5\": false",
        "hint": "=== strict equality, ?? nullish coalescing.",
        "quiz": {
            "question": "Apa yang dipelajari di Operator dan Ekspresi?",
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
        "title": "35. Pengenalan JavaScript",
        "description": "<p><strong>Pengenalan JavaScript</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "console.log(\"JavaScript lahir 1995!\");\nconsole.log(\"Dibuat oleh Brendan Eich dalam 10 hari\");\nconsole.log(\"ES6 (2015) = revolusi besar\");",
        "expectedOutput": "JavaScript lahir 1995!\nDibuat oleh Brendan Eich dalam 10 hari\nES6 (2015) = revolusi besar",
        "hint": "JS = bahasa web. ES6 = modern JS.",
        "quiz": {
            "question": "Apa yang dipelajari di Pengenalan JavaScript?",
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
        "description": "<p><strong>Performance Optimization</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Performance Optimization\nconsole.log(\"Belajar Performance Optimization!\");",
        "expectedOutput": "Belajar Performance Optimization!",
        "hint": "Pelajari Performance Optimization.",
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
        "description": "<p><strong>Perulangan</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "for (let i = 0; i < 3; i++) {\n    console.log(\"i=\" + i);\n}\nconst arr = [\"a\", \"b\", \"c\"];\nfor (const item of arr) {\n    console.log(item);\n}",
        "expectedOutput": "i=0\ni=1\ni=2\na\nb\nc",
        "hint": "for...of untuk values, for...in untuk keys.",
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
        "description": "<p><strong>Polymorphism Dan Method Overriding</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Polymorphism Dan Method Overriding\nconsole.log(\"Belajar Polymorphism Dan Method Overriding!\");",
        "expectedOutput": "Belajar Polymorphism Dan Method Overriding!",
        "hint": "Pelajari Polymorphism Dan Method Overriding.",
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
        "description": "<p><strong>Project Ecommerce Filter</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Project Ecommerce Filter\nconsole.log(\"Belajar Project Ecommerce Filter!\");",
        "expectedOutput": "Belajar Project Ecommerce Filter!",
        "hint": "Pelajari Project Ecommerce Filter.",
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
        "description": "<p><strong>Project Expense Tracker</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Project Expense Tracker\nconsole.log(\"Belajar Project Expense Tracker!\");",
        "expectedOutput": "Belajar Project Expense Tracker!",
        "hint": "Pelajari Project Expense Tracker.",
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
        "description": "<p><strong>Project Interactive Quiz App</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Project Interactive Quiz App\nconsole.log(\"Belajar Project Interactive Quiz App!\");",
        "expectedOutput": "Belajar Project Interactive Quiz App!",
        "hint": "Pelajari Project Interactive Quiz App.",
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
        "description": "<p><strong>Project Realtime Chat App</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Project Realtime Chat App\nconsole.log(\"Belajar Project Realtime Chat App!\");",
        "expectedOutput": "Belajar Project Realtime Chat App!",
        "hint": "Pelajari Project Realtime Chat App.",
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
        "description": "<p><strong>Project Todo List App</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Project Todo List App\nconsole.log(\"Belajar Project Todo List App!\");",
        "expectedOutput": "Belajar Project Todo List App!",
        "hint": "Pelajari Project Todo List App.",
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
        "description": "<p><strong>Project Weather Dashboard</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Project Weather Dashboard\nconsole.log(\"Belajar Project Weather Dashboard!\");",
        "expectedOutput": "Belajar Project Weather Dashboard!",
        "hint": "Pelajari Project Weather Dashboard.",
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
        "title": "45. Prototype",
        "description": "<p><strong>Prototype</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "function User(nama) {\n    this.nama = nama;\n}\nUser.prototype.sapa = function() {\n    return `Hi ${this.nama}`;\n};\nconst u = new User(\"Archon\");\nconsole.log(u.sapa());\nconsole.log(u instanceof User);",
        "expectedOutput": "Hi Archon\ntrue",
        "hint": "Prototype = inheritance mechanism di JS.",
        "quiz": {
            "question": "Apa yang dipelajari di Prototype?",
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
        "description": "<p><strong>Proxy Dan Reflection Api</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Proxy Dan Reflection Api\nconsole.log(\"Belajar Proxy Dan Reflection Api!\");",
        "expectedOutput": "Belajar Proxy Dan Reflection Api!",
        "hint": "Pelajari Proxy Dan Reflection Api.",
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
        "title": "47. RegExp",
        "description": "<p><strong>RegExp</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "const regex = /\\d+/g;\nconsole.log(\"abc123def456\".match(regex));\nconsole.log(regex.test(\"hello\"));\nconsole.log(\"a@b.com\".match(/^[\\w.-]+@[\\w.-]+$/));",
        "expectedOutput": "[\"123\", \"456\"]\nfalse\n[\"a@b.com\"]",
        "hint": "/pattern/flags. test(), match(), replace().",
        "quiz": {
            "question": "Apa yang dipelajari di RegExp?",
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
        "title": "48. Set dan WeakSet",
        "description": "<p><strong>Set dan WeakSet</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "const set = new Set([1,2,2,3,3,3]);\nconsole.log([...set]);\nset.add(4);\nconsole.log(set.has(2));\nconsole.log(set.size);",
        "expectedOutput": "[1, 2, 3]\ntrue\n4",
        "hint": "Set = unique values. WeakSet = weak references.",
        "quiz": {
            "question": "Apa yang dipelajari di Set dan WeakSet?",
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
        "description": "<p><strong>Setup Environment</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "const node = process.version;\nconsole.log(`Node.js: ${node}`);\nconsole.log(\"JavaScript siap digunakan!\");",
        "expectedOutput": "Node.js: v20.x.x\nJavaScript siap digunakan!",
        "hint": "Install Node.js, gunakan VS Code.",
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
        "title": "50. String Methods",
        "description": "<p><strong>String Methods</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "const str = \"Hello, World!\";\nconsole.log(str.slice(0, 5));\nconsole.log(str.split(\", \"));\nconsole.log(str.replace(\"World\", \"JS\"));\nconsole.log(str.includes(\"Hello\"));",
        "expectedOutput": "Hello\n[\"Hello\", \"World!\"]\nHello, JS!\ntrue",
        "hint": "slice, split, replace, includes.",
        "quiz": {
            "question": "Apa yang dipelajari di String Methods?",
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
        "title": "51. this Keyword",
        "description": "<p><strong>this Keyword</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "const user = {\n    nama: \"Archon\",\n    sapa() { return this.nama; }\n};\nconsole.log(user.sapa());\nconst bound = user.sapa.bind({nama: \"Bound\"});\nconsole.log(bound());",
        "expectedOutput": "Archon\nBound",
        "hint": "this: default, implicit, explicit (call/apply/bind), new.",
        "quiz": {
            "question": "Apa yang dipelajari di this Keyword?",
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
        "title": "52. Variabel dan Tipe Data",
        "description": "<p><strong>Variabel dan Tipe Data</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "const nama = \"Archon\";\nlet umur = 25;\nconsole.log(`Nama: ${nama}, Umur: ${umur}`);\nconsole.log(\"Tipe nama:\", typeof nama);\nconsole.log(\"Tipe umur:\", typeof umur);",
        "expectedOutput": "Nama: Archon, Umur: 25\nTipe nama: string\nTipe umur: number",
        "hint": "const = tetap, let = berubah. typeof = cek tipe.",
        "quiz": {
            "question": "Apa yang dipelajari di Variabel dan Tipe Data?",
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
        "description": "<p><strong>Web Workers Multi Threading</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Web Workers Multi Threading\nconsole.log(\"Belajar Web Workers Multi Threading!\");",
        "expectedOutput": "Belajar Web Workers Multi Threading!",
        "hint": "Pelajari Web Workers Multi Threading.",
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
        "description": "<p><strong>Webpack Bundling Assets</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": "// Webpack Bundling Assets\nconsole.log(\"Belajar Webpack Bundling Assets!\");",
        "expectedOutput": "Belajar Webpack Bundling Assets!",
        "hint": "Pelajari Webpack Bundling Assets.",
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

// State
let currentLesson = 0;
let progress = JSON.parse(localStorage.getItem('javascript_progress') || '{}');
document.addEventListener('DOMContentLoaded', () => { renderNav(); loadLesson(0); updateProgress(); });
function renderNav() {
    const nav = document.getElementById('lessons-nav');
    nav.innerHTML = lessons.map((l, i) => `<button onclick="loadLesson(${i})" class="w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-700 transition ${i === currentLesson ? 'lesson-active' : ''} ${progress[i] ? 'text-green-400' : 'text-gray-300'}" id="nav-${i}">${l.title} ${progress[i] ? '<i class="fas fa-check ml-1"></i>' : ''}</button>`).join('');
}
function loadLesson(index) {
    currentLesson = index;
    const lesson = lessons[index];
    document.getElementById('current-lesson').innerHTML = `<h2 class="text-xl font-bold mb-4">${lesson.title}</h2><div class="prose prose-invert max-w-none">${lesson.description}</div>`;
    document.getElementById('code-editor').value = lesson.defaultCode;
    document.getElementById('terminal-output').innerHTML = '<span class="text-gray-500">// Output akan muncul di sini</span>';
    document.getElementById('validation-msg').className = 'mt-4 p-3 rounded hidden';
    if (lesson.quiz) {
        document.getElementById('quiz-section').classList.remove('hidden');
        document.getElementById('quiz-content').innerHTML = `<p class="font-medium">${lesson.quiz.question}</p><div class="space-y-2">${lesson.quiz.options.map((opt, i) => `<label class="flex items-center space-x-2 cursor-pointer"><input type="radio" name="quiz" value="${i}"><span>${opt}</span></label>`).join('')}</div>`;
    } else { document.getElementById('quiz-section').classList.add('hidden'); }
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === lessons.length - 1;
    renderNav();
}
function runCode() {
    const code = document.getElementById('code-editor').value;
    const output = document.getElementById('terminal-output');
    const validation = document.getElementById('validation-msg');
    let logs = [];
    const originalLog = console.log;
    console.log = (...args) => { logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')); };
    try {
        eval(code);
        const result = logs.join('\n');
        output.innerHTML = `<span class="text-green-400">${escapeHtml(result)}</span>`;
        const expected = lessons[currentLesson].expectedOutput;
        if (result.trim() === expected.trim()) {
            validation.className = 'mt-4 p-3 rounded bg-green-900/50 border border-green-500 text-green-300';
            validation.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Benar!';
            progress[currentLesson] = true;
            localStorage.setItem('javascript_progress', JSON.stringify(progress));
            updateProgress(); renderNav();
        } else {
            validation.className = 'mt-4 p-3 rounded bg-yellow-900/50 border border-yellow-500 text-yellow-300';
            validation.innerHTML = `<i class="fas fa-lightbulb mr-2"></i>Hint: ${lessons[currentLesson].hint}`;
        }
    } catch (e) {
        output.innerHTML = `<span class="text-red-400">Error: ${escapeHtml(e.message)}</span>`;
    }
    console.log = originalLog;
}
function resetCode() { document.getElementById('code-editor').value = lessons[currentLesson].defaultCode; }
function checkQuiz() {
    const selected = document.querySelector('input[name="quiz"]:checked');
    if (!selected) return alert('Pilih jawaban!');
    const correct = parseInt(selected.value) === lessons[currentLesson].quiz.answer;
    const msg = document.createElement('div');
    msg.className = `mt-3 p-3 rounded ${correct ? 'bg-green-900/50 border-green-500 text-green-300' : 'bg-red-900/50 border-red-500 text-red-300'}`;
    msg.innerHTML = correct ? '<i class="fas fa-check mr-2"></i>Benar!' : '<i class="fas fa-times mr-2"></i>Salah!';
    document.getElementById('quiz-content').appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}
function nextLesson() { if (currentLesson < lessons.length - 1) loadLesson(currentLesson + 1); }
function prevLesson() { if (currentLesson > 0) loadLesson(currentLesson - 1); }
function updateProgress() { const pct = Math.round((Object.keys(progress).length / lessons.length) * 100); document.getElementById('progress-text').textContent = pct + '%'; document.getElementById('progress-bar').style.width = pct + '%'; }
function resetProgress() { if (!confirm('Reset?')) return; progress = {}; localStorage.removeItem('javascript_progress'); renderNav(); updateProgress(); }
function escapeHtml(str) { return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

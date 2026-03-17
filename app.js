// JavaScript Learning Path - Interactive Application
const lessons = [
    {
        "id": 1,
        "title": "1. Hello World & Console",
        "description": "<p>Selamat datang di JavaScript! <code>console.log()</code> adalah cara utama untuk mencetak output.</p>",
        "defaultCode": "console.log(\"Hello, World!\");",
        "expectedOutput": "Hello, World!",
        "hint": "Gunakan console.log() untuk mencetak teks.",
        "quiz": {
            "question": "Fungsi mana yang digunakan untuk mencetak output di JavaScript?",
            "options": [
                "print()",
                "console.log()",
                "echo()",
                "System.out.println()"
            ],
            "answer": 1
        }
    },
    {
        "id": 2,
        "title": "2. Variabel: let, const, var",
        "description": "<p>JavaScript punya 3 cara deklarasi variabel: <code>const</code> (direkomendasikan), <code>let</code>, dan <code>var</code> (legacy).</p>",
        "defaultCode": "// Deklarasi variabel\nconst nama = \"Archon\";\nlet umur = 25;\nvar lama = \"jangan pakai ini\";\n\nconsole.log(\"Nama:\", nama);\nconsole.log(\"Umur:\", umur);",
        "expectedOutput": "Nama: Archon\nUmur: 25",
        "hint": "Gunakan const untuk nilai tetap, let untuk nilai yang berubah.",
        "quiz": {
            "question": "Keyword mana yang direkomendasikan untuk deklarasi variabel yang tidak berubah?",
            "options": [
                "var",
                "let",
                "const",
                "define"
            ],
            "answer": 2
        }
    },
    {
        "id": 3,
        "title": "3. Tipe Data Dasar",
        "description": "<p>JavaScript punya 7 tipe primitif: string, number, bigint, boolean, undefined, null, symbol.</p>",
        "defaultCode": "// Tipe primitif\nconst str = \"Halo\";\nconst num = 42;\nconst bool = true;\nconst und = undefined;\nconst nul = null;\n\nconsole.log(typeof str);   // string\nconsole.log(typeof num);   // number\nconsole.log(typeof bool);  // boolean\nconsole.log(typeof und);   // undefined\nconsole.log(typeof nul);   // object (bug!)",
        "expectedOutput": "string\nnumber\nboolean\nundefined\nobject",
        "hint": "Gunakan typeof untuk mengecek tipe data.",
        "quiz": {
            "question": "Hasil dari typeof null adalah?",
            "options": [
                "null",
                "undefined",
                "object",
                "boolean"
            ],
            "answer": 2
        }
    },
    {
        "id": 4,
        "title": "4. Operator dan Ekspresi",
        "description": "<p>JavaScript memiliki operator aritmatika standar dan perbandingan. Selalu gunakan <code>===</code>.</p>",
        "defaultCode": "// Operator aritmatika\nconst a = 10, b = 3;\nconsole.log(\"a + b =\", a + b);    // 13\nconsole.log(\"a - b =\", a - b);    // 7\nconsole.log(\"a * b =\", a * b);    // 30\nconsole.log(\"a / b =\", a / b);    // 3.33...\nconsole.log(\"a % b =\", a % b);    // 1\nconsole.log(\"a ** b =\", a ** b);  // 1000\n\n// Perbandingan\nconsole.log(\"5 === \\\"5\\\":\", 5 === \"5\");  // false\nconsole.log(\"5 == \\\"5\\\":\", 5 == \"5\");   // true (hindari!)",
        "expectedOutput": "a + b = 13\na - b = 7\na * b = 30\na / b = 3.3333333333333335\na % b = 1\na ** b = 1000\n5 === \"5\": false\n5 == \"5\": true",
        "hint": "Gunakan === (strict equality) untuk perbandingan.",
        "quiz": {
            "question": "Perbedaan antara === dan == adalah?",
            "options": [
                "Sama saja",
                "=== tanpa type coercion",
                "== lebih cepat",
                "Tidak ada"
            ],
            "answer": 1
        }
    },
    {
        "id": 5,
        "title": "5. If/Else dan Ternary",
        "description": "<p>Percabangan dengan <code>if/else</code> dan shorthand <code>ternary</code> operator.</p>",
        "defaultCode": "const umur = 20;\n\n// If/Else\nif (umur >= 18) {\n    console.log(\"Dewasa\");\n} else {\n    console.log(\"Anak-anak\");\n}\n\n// Ternary\nconst status = umur >= 18 ? \"Dewasa\" : \"Anak-anak\";\nconsole.log(\"Status:\", status);",
        "expectedOutput": "Dewasa\nStatus: Dewasa",
        "hint": "Ternary: condition ? true : false",
        "quiz": {
            "question": "Sintaks ternary operator yang benar?",
            "options": [
                "if ? true : false",
                "condition ? true : false",
                "condition ?? true",
                "ternary(true, false)"
            ],
            "answer": 1
        }
    },
    {
        "id": 6,
        "title": "6. Loop: for, while, for...of",
        "description": "<p>JavaScript punya berbagai jenis loop: <code>for</code>, <code>while</code>, <code>for...of</code>, <code>for...in</code>.</p>",
        "defaultCode": "// For loop\nfor (let i = 0; i < 3; i++) {\n    console.log(\"i =\", i);\n}\n\n// For...of\nconst buah = [\"apel\", \"jeruk\", \"mangga\"];\nfor (const item of buah) {\n    console.log(item);\n}\n\n// While\nlet count = 0;\nwhile (count < 2) {\n    console.log(\"count:\", count);\n    count++;\n}",
        "expectedOutput": "i = 0\ni = 1\ni = 2\napel\njeruk\nmangga\ncount: 0\ncount: 1",
        "hint": "for...of untuk iterasi nilai, for...in untuk iterasi key/index.",
        "quiz": {
            "question": "Loop mana yang cocok untuk iterasi array values?",
            "options": [
                "for...in",
                "for...of",
                "while...do",
                "goto"
            ],
            "answer": 1
        }
    },
    {
        "id": 7,
        "title": "7. Array Dasar",
        "description": "<p>Array adalah struktur data fundamental. Gunakan <code>push/pop</code> untuk akhir, <code>shift/unshift</code> untuk awal.</p>",
        "defaultCode": "// Membuat array\nconst arr = [1, 2, 3, 4, 5];\n\n// Metode dasar\narr.push(6);        // Tambah akhir\narr.pop();          // Hapus akhir\narr.unshift(0);     // Tambah awal\narr.shift();        // Hapus awal\n\nconsole.log(\"Array:\", arr);\nconsole.log(\"Length:\", arr.length);\nconsole.log(\"Slice [1,3]:\", arr.slice(1, 3));",
        "expectedOutput": "Array: [1, 2, 3, 4, 5]\nLength: 5\nSlice [1,3]: [2, 3]",
        "hint": "push/pop = akhir, shift/unshift = awal.",
        "quiz": {
            "question": "Metode untuk menambah elemen di akhir array?",
            "options": [
                "unshift()",
                "push()",
                "pop()",
                "shift()"
            ],
            "answer": 1
        }
    },
    {
        "id": 8,
        "title": "8. Array Higher-Order Functions",
        "description": "<p>Higher-order functions: <code>map</code>, <code>filter</code>, <code>reduce</code> untuk transformasi data.</p>",
        "defaultCode": "const angka = [1, 2, 3, 4, 5];\n\n// map - transformasi\nconst kuadrat = angka.map(x => x * x);\nconsole.log(\"Kuadrat:\", kuadrat);\n\n// filter - saring\nconst genap = angka.filter(x => x % 2 === 0);\nconsole.log(\"Genap:\", genap);\n\n// reduce - akumulasi\nconst total = angka.reduce((a, b) => a + b, 0);\nconsole.log(\"Total:\", total);\n\n// Chaining\nconst hasil = angka.filter(x => x > 2).map(x => x * 10);\nconsole.log(\"Chaining:\", hasil);",
        "expectedOutput": "Kuadrat: [1, 4, 9, 16, 25]\nGenap: [2, 4]\nTotal: 15\nChaining: [30, 40, 50]",
        "hint": "map = transform, filter = saring, reduce = akumulasi.",
        "quiz": {
            "question": "Method untuk mengubah setiap elemen array?",
            "options": [
                "filter()",
                "map()",
                "reduce()",
                "forEach()"
            ],
            "answer": 1
        }
    },
    {
        "id": 9,
        "title": "9. Arrow Functions",
        "description": "<p>Arrow function adalah sintaks ES6 yang lebih ringkas. Penting: perilaku <code>this</code> berbeda!</p>",
        "defaultCode": "// Regular function\nfunction tambah(a, b) {\n    return a + b;\n}\n\n// Arrow function\nconst kali = (a, b) => a * b;\n\n// Single parameter\nconst sapa = nama => \\`Halo, \\${nama}!\\`;\n\nconsole.log(\"Tambah:\", tambah(3, 5));\nconsole.log(\"Kali:\", kali(4, 6));\nconsole.log(sapa(\"Archon\"));",
        "expectedOutput": "Tambah: 8\nKali: 24\nHalo, Archon!",
        "hint": "Arrow function: (params) => expression. 1 param: tanpa kurung.",
        "quiz": {
            "question": "Sintaks arrow function yang benar?",
            "options": [
                "function => {}",
                "() => {}",
                "=> function()",
                "arrow() {}"
            ],
            "answer": 1
        }
    },
    {
        "id": 10,
        "title": "10. Object Dasar",
        "description": "<p>Object adalah kumpulan key-value pairs. Akses dengan dot atau bracket notation.</p>",
        "defaultCode": "// Object literal\nconst user = {\n    nama: \"Archon\",\n    umur: 25,\n    aktif: true,\n    sapa() { return \\`Halo, \\${this.nama}!\\`; }\n};\n\n// Akses\nconsole.log(user.nama);           // Dot notation\nconsole.log(user[\"umur\"]);        // Bracket notation\nconsole.log(user.sapa());         // Method\n\n// Destructuring\nconst { nama, umur } = user;\nconsole.log(\\`\\${nama}, \\${umur}\\`);",
        "expectedOutput": "Archon\n25\nHalo, Archon!\nArchon, 25",
        "hint": "Dot notation untuk key valid, bracket untuk dynamic key.",
        "quiz": {
            "question": "Cara mengakses property object dengan key berupa variabel?",
            "options": [
                "obj.key",
                "obj[key]",
                "obj->key",
                "obj::key"
            ],
            "answer": 1
        }
    }
];

// State
let currentLesson = 0;
let progress = JSON.parse(localStorage.getItem('javascript_progress') || '{}');

// Init
document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    loadLesson(0);
    updateProgress();
});

function renderNav() {
    const nav = document.getElementById('lessons-nav');
    nav.innerHTML = lessons.map((l, i) => `
        <button onclick="loadLesson(${i})" 
            class="w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-700 transition 
            ${i === currentLesson ? 'lesson-active' : ''} 
            ${progress[i] ? 'text-green-400' : 'text-gray-300'}"
            id="nav-${i}">
            ${l.title}
            ${progress[i] ? '<i class="fas fa-check ml-1"></i>' : ''}
        </button>
    `).join('');
}

function loadLesson(index) {
    currentLesson = index;
    const lesson = lessons[index];
    
    document.getElementById('current-lesson').innerHTML = `
        <h2 class="text-xl font-bold mb-4">${lesson.title}</h2>
        <div class="prose prose-invert max-w-none">${lesson.description}</div>
    `;
    
    document.getElementById('code-editor').value = lesson.defaultCode.replace(/\\n/g, '\n');
    document.getElementById('terminal-output').innerHTML = '<span class="text-gray-500">// Output akan muncul di sini</span>';
    document.getElementById('validation-msg').className = 'mt-4 p-3 rounded hidden';
    
    // Quiz
    if (lesson.quiz) {
        document.getElementById('quiz-section').classList.remove('hidden');
        document.getElementById('quiz-content').innerHTML = `
            <p class="font-medium">${lesson.quiz.question}</p>
            <div class="space-y-2">
                ${lesson.quiz.options.map((opt, i) => `
                    <label class="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="quiz" value="${i}" class="text-blue-500">
                        <span>${opt}</span>
                    </label>
                `).join('')}
            </div>
        `;
    } else {
        document.getElementById('quiz-section').classList.add('hidden');
    }
    
    // Nav buttons
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === lessons.length - 1;
    
    renderNav();
}

function runCode() {
    const code = document.getElementById('code-editor').value;
    const output = document.getElementById('terminal-output');
    const validation = document.getElementById('validation-msg');
    
    // Capture console.log
    let logs = [];
    const originalLog = console.log;
    console.log = (...args) => {
        logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
    };
    
    try {
        eval(code);
        const result = logs.join('\n');
        output.innerHTML = `<span class="text-green-400">${escapeHtml(result)}</span>`;
        
        // Validate
        const expected = lessons[currentLesson].expectedOutput.replace(/\\n/g, '\n');
        if (result.trim() === expected.trim()) {
            validation.className = 'mt-4 p-3 rounded bg-green-900/50 border border-green-500 text-green-300';
            validation.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Benar! Output sesuai.';
            progress[currentLesson] = true;
            localStorage.setItem('javascript_progress', JSON.stringify(progress));
            updateProgress();
            renderNav();
        } else {
            validation.className = 'mt-4 p-3 rounded bg-yellow-900/50 border border-yellow-500 text-yellow-300';
            validation.innerHTML = `<i class="fas fa-lightbulb mr-2"></i>Hint: ${lessons[currentLesson].hint}`;
        }
    } catch (e) {
        output.innerHTML = `<span class="text-red-400">Error: ${escapeHtml(e.message)}</span>`;
        validation.className = 'mt-4 p-3 rounded bg-red-900/50 border border-red-500 text-red-300';
        validation.innerHTML = `<i class="fas fa-times-circle mr-2"></i>${e.message}`;
    }
    
    console.log = originalLog;
}

function resetCode() {
    document.getElementById('code-editor').value = lessons[currentLesson].defaultCode.replace(/\\n/g, '\n');
    document.getElementById('terminal-output').innerHTML = '<span class="text-gray-500">// Output akan muncul di sini</span>';
}

function checkQuiz() {
    const selected = document.querySelector('input[name="quiz"]:checked');
    if (!selected) return alert('Pilih jawaban dulu!');
    
    const answer = parseInt(selected.value);
    const correct = lessons[currentLesson].quiz.answer;
    const msg = document.createElement('div');
    
    if (answer === correct) {
        msg.className = 'mt-3 p-3 rounded bg-green-900/50 border border-green-500 text-green-300';
        msg.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Benar!';
    } else {
        msg.className = 'mt-3 p-3 rounded bg-red-900/50 border border-red-500 text-red-300';
        msg.innerHTML = '<i class="fas fa-times-circle mr-2"></i>Salah, coba lagi!';
    }
    
    document.getElementById('quiz-content').appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}

function nextLesson() { if (currentLesson < lessons.length - 1) loadLesson(currentLesson + 1); }
function prevLesson() { if (currentLesson > 0) loadLesson(currentLesson - 1); }

function updateProgress() {
    const done = Object.keys(progress).length;
    const pct = Math.round((done / lessons.length) * 100);
    document.getElementById('progress-text').textContent = pct + '%';
    document.getElementById('progress-bar').style.width = pct + '%';
}

function resetProgress() {
    if (!confirm('Reset semua progress?')) return;
    progress = {};
    localStorage.removeItem('javascript_progress');
    renderNav();
    updateProgress();
}

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

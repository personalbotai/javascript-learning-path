import json, os

with open('lesson_names.txt') as f:
    files = [l.strip() for l in f if l.strip()]

# JavaScript-specific content (comprehensive)
CONTENT = {
    'pengenalan-dan-sejarah': ('Pengenalan JavaScript', 'console.log("JavaScript lahir 1995!");\nconsole.log("Dibuat oleh Brendan Eich dalam 10 hari");\nconsole.log("ES6 (2015) = revolusi besar");', 'JavaScript lahir 1995!\nDibuat oleh Brendan Eich dalam 10 hari\nES6 (2015) = revolusi besar', 'JS = bahasa web. ES6 = modern JS.'),
    'setup-environment': ('Setup Environment', 'const node = process.version;\nconsole.log(`Node.js: ${node}`);\nconsole.log("JavaScript siap digunakan!");', 'Node.js: v20.x.x\nJavaScript siap digunakan!', 'Install Node.js, gunakan VS Code.'),
    'variabel-dan-tipe-data': ('Variabel dan Tipe Data', 'const nama = "Archon";\nlet umur = 25;\nconsole.log(`Nama: ${nama}, Umur: ${umur}`);\nconsole.log("Tipe nama:", typeof nama);\nconsole.log("Tipe umur:", typeof umur);', 'Nama: Archon, Umur: 25\nTipe nama: string\nTipe umur: number', 'const = tetap, let = berubah. typeof = cek tipe.'),
    'operator-dan-ekspresi': ('Operator dan Ekspresi', 'const a = 10, b = 3;\nconsole.log("a + b =", a + b);\nconsole.log("a === b:", a === b);\nconsole.log("a ?? null:", a ?? "default");\nconsole.log("5 === \\"5\\":", 5 === "5");', 'a + b = 13\na === b: false\na ?? null: 10\n5 === "5": false', '=== strict equality, ?? nullish coalescing.'),
    'kontrol-alur-if-else': ('If/Else', 'const umur = 20;\nif (umur >= 18) {\n    console.log("Dewasa");\n} else {\n    console.log("Anak-anak");\n}\nconst status = umur >= 18 ? "Dewasa" : "Anak-anak";\nconsole.log("Status:", status);', 'Dewasa\nStatus: Dewasa', 'Ternary: condition ? true : false.'),
    'perulangan': ('Perulangan', 'for (let i = 0; i < 3; i++) {\n    console.log("i=" + i);\n}\nconst arr = ["a", "b", "c"];\nfor (const item of arr) {\n    console.log(item);\n}', 'i=0\ni=1\ni=2\na\nb\nc', 'for...of untuk values, for...in untuk keys.'),
    'array-dasar-dan-metode': ('Array Dasar', 'const arr = [1, 2, 3];\narr.push(4);\narr.unshift(0);\nconsole.log(arr);\nconsole.log("Length:", arr.length);\nconsole.log("Slice:", arr.slice(1, 3));', '[0, 1, 2, 3, 4]\nLength: 5\nSlice: [1, 2]', 'push/pop = akhir, shift/unshift = awal.'),
    'array-higher-order-functions': ('Array HOF', 'const angka = [1, 2, 3, 4, 5];\nconsole.log("Map:", angka.map(x => x * x));\nconsole.log("Filter:", angka.filter(x => x > 2));\nconsole.log("Reduce:", angka.reduce((a, b) => a + b, 0));', 'Map: [1, 4, 9, 16, 25]\nFilter: [3, 4, 5]\nReduce: 15', 'map = transform, filter = saring, reduce = akumulasi.'),
    'arrow-functions-perilaku-this': ('Arrow Functions', 'const tambah = (a, b) => a + b;\nconst sapa = nama => `Halo, ${nama}!`;\nconsole.log(tambah(3, 5));\nconsole.log(sapa("Archon"));\n// Arrow: this dari lexical scope\nconst obj = {\n    nama: "Test",\n    // method: () => this.nama ❌ (undefined)\n    method() { return this.nama; } // ✅\n};\nconsole.log(obj.method());', '8\nHalo, Archon!\nTest', 'Arrow: (params) => expr. this = lexical.'),
    'closure-dan-lexical-scoping': ('Closure', 'function counter() {\n    let count = 0;\n    return () => ++count;\n}\nconst hitung = counter();\nconsole.log(hitung());\nconsole.log(hitung());\nconsole.log(hitung());', '1\n2\n3', 'Closure = function + lexical environment.'),
    'this-keyword-binding': ('this Keyword', 'const user = {\n    nama: "Archon",\n    sapa() { return this.nama; }\n};\nconsole.log(user.sapa());\nconst bound = user.sapa.bind({nama: "Bound"});\nconsole.log(bound());', 'Archon\nBound', 'this: default, implicit, explicit (call/apply/bind), new.'),
    'error-handling-try-catch': ('Error Handling', 'try {\n    JSON.parse("invalid");\n} catch (e) {\n    console.log("Error:", e.name);\n} finally {\n    console.log("Finally!");\n}\nfunction bagi(a, b) {\n    if (b === 0) throw new Error("Div by zero!");\n    return a / b;\n}\nconsole.log(bagi(10, 3).toFixed(2));', 'Error: SyntaxError\nFinally!\n3.33', 'try/catch/finally. throw = custom error.'),
    'async-await-asynchronous': ('Async/Await', 'async function main() {\n    console.log("Start");\n    await new Promise(r => setTimeout(r, 100));\n    console.log("After await");\n}\nmain();\nconsole.log("Sync");', 'Start\nSync\nAfter await', 'async function, await Promise. Non-blocking!'),
    'fetch-api-http-requests': ('Fetch API', 'async function getData() {\n    // Simulasi fetch\n    const mockFetch = () => Promise.resolve({\n        json: () => Promise.resolve({name: "Archon"})\n    });\n    const res = await mockFetch();\n    const data = await res.json();\n    console.log("Data:", data.name);\n}\ngetData();', 'Data: Archon', 'fetch() untuk HTTP request. async/await + fetch.'),
    'dom-manipulation-dasar': ('DOM Manipulation', '// Browser only\nconst el = document.createElement("div");\nel.textContent = "Hello DOM!";\nel.classList.add("box");\nconsole.log(el.outerHTML);', '<div class="box">Hello DOM!</div>', 'document.createElement, querySelector, classList.'),
    'events-handling-delegasi': ('Events', '// Browser only\nconst btn = { addEventListener: (e, fn) => {\n    console.log(`Event ${e} registered`);\n    fn({target: btn});\n}};\nbtn.addEventListener("click", (e) => {\n    console.log("Clicked!");\n});', 'Event click registered\nClicked!', 'addEventListener, event delegation.'),
    'class-dan-object': ('Class dan Object', 'class User {\n    constructor(nama) {\n        this.nama = nama;\n    }\n    sapa() {\n        return `Halo, ${this.nama}!`;\n    }\n}\nconst u = new User("Archon");\nconsole.log(u.sapa());', 'Halo, Archon!', 'class = blueprint. constructor = init.'),
    'inheritance-dengan-extends': ('Inheritance', 'class Animal {\n    constructor(nama) { this.nama = nama; }\n    speak() { return `${this.nama} bersuara`; }\n}\nclass Dog extends Animal {\n    speak() { return `${this.nama} menggonggong!`; }\n}\nconsole.log(new Dog("Buddy").speak());', 'Buddy menggonggong!', 'extends = inheritance. super() = parent.'),
    'encapsulation-getter-setter': ('Encapsulation', 'class Counter {\n    #count = 0;\n    get value() { return this.#count; }\n    increment() { this.#count++; }\n}\nconst c = new Counter();\nc.increment();\nc.increment();\nconsole.log(c.value);', '2', '# = private field. get/set = property.'),
    'prototype-dan-prototype-chain': ('Prototype', 'function User(nama) {\n    this.nama = nama;\n}\nUser.prototype.sapa = function() {\n    return `Hi ${this.nama}`;\n};\nconst u = new User("Archon");\nconsole.log(u.sapa());\nconsole.log(u instanceof User);', 'Hi Archon\ntrue', 'Prototype = inheritance mechanism di JS.'),
    'json-serialisasi-dan-parsing': ('JSON', 'const obj = {nama: "Archon", umur: 25};\nconst json = JSON.stringify(obj, null, 2);\nconsole.log(json);\nconst parsed = JSON.parse(json);\nconsole.log(parsed.nama);', '{\\n  "nama": "Archon",\\n  "umur": 25\\n}\nArchon', 'stringify = object→JSON. parse = JSON→object.'),
    'regexp-regular-expressions': ('RegExp', 'const regex = /\\d+/g;\nconsole.log("abc123def456".match(regex));\nconsole.log(regex.test("hello"));\nconsole.log("a@b.com".match(/^[\\w.-]+@[\\w.-]+$/));', '["123", "456"]\nfalse\n["a@b.com"]', '/pattern/flags. test(), match(), replace().'),
    'string-methods-lengkap': ('String Methods', 'const str = "Hello, World!";\nconsole.log(str.slice(0, 5));\nconsole.log(str.split(", "));\nconsole.log(str.replace("World", "JS"));\nconsole.log(str.includes("Hello"));', 'Hello\n["Hello", "World!"]\nHello, JS!\ntrue', 'slice, split, replace, includes.'),
    'set-dan-weakset': ('Set dan WeakSet', 'const set = new Set([1,2,2,3,3,3]);\nconsole.log([...set]);\nset.add(4);\nconsole.log(set.has(2));\nconsole.log(set.size);', '[1, 2, 3]\ntrue\n4', 'Set = unique values. WeakSet = weak references.'),
    'map-dan-weakmap': ('Map dan WeakMap', 'const map = new Map();\nmap.set("nama", "Archon");\nmap.set(1, "angka");\nconsole.log(map.get("nama"));\nconsole.log(map.size);\nfor (const [k, v] of map) {\n    console.log(`${k}: ${v}`);\n}', 'Archon\n2\nnama: Archon\n1: angka', 'Map = key-value. Key bisa tipe apa saja.'),
    'generators-dan-iterators': ('Generators', 'function* gen() {\n    yield 1;\n    yield 2;\n    yield 3;\n}\nconst g = gen();\nconsole.log(g.next().value);\nconsole.log(g.next().value);\nfor (const val of gen()) {\n    console.log(val);\n}', '1\n2\n1\n2\n3', 'function* = generator. yield = pause/resume.'),
}

lessons = []
for i, f in enumerate(files, 1):
    if f in CONTENT:
        title, code, output, hint = CONTENT[f]
    else:
        title = f.replace('-', ' ').title()
        code = f'// {title}\nconsole.log("Belajar {title}!");'
        output = f'Belajar {title}!'
        hint = f'Pelajari {title}.'
    
    lessons.append({
        "id": i,
        "title": f"{i}. {title}",
        "description": f"<p><strong>{title}</strong> - konsep penting dalam JavaScript.</p>",
        "defaultCode": code,
        "expectedOutput": output,
        "hint": hint,
        "quiz": {
            "question": f"Apa yang dipelajari di {title}?",
            "options": ["Opsi A", "Opsi B", "Opsi C", "Opsi D"],
            "answer": 0
        }
    })

with open('app.js', 'w', encoding='utf-8') as out:
    out.write('// JavaScript Learning Path - Application Logic\n')
    out.write('const lessons = ')
    out.write(json.dumps(lessons, indent=4, ensure_ascii=False))
    out.write(';\n\n')
    out.write("""// State
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
        const result = logs.join('\\n');
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
""")

print(f"Generated {len(lessons)} JavaScript lessons!")

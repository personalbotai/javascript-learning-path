import os

slugs = sorted([f.replace('.md','') for f in os.listdir('lessons') if f.endswith('.md')])

for slug in slugs:
    title = slug.replace('-', ' ').title()
    
    # Generate specific content based on slug keywords
    if 'arrow' in slug:
        md = """# Arrow Functions: Perilaku this

**ID**: `arrow-functions-perilaku-this`
**Duration**: 20-25 menit

## Materi

Arrow function adalah sintaks ES6 yang lebih ringkas. Perbedaan utama: perilaku `this`.

### Sintaks
```javascript
const tambah = (a, b) => a + b;
const kuadrat = x => x * x;
const halo = () => console.log("Hi!");
```

### Perbedaan this
```javascript
const obj = {
    nama: "Archon",
    greet: () => { console.log(this.nama); } // undefined!
};
```

### Callback
```javascript
setInterval(() => { this.detik++; }, 1000); // this tetap!
```

## Rangkuman
- Arrow tidak punya this sendiri
- Cocok untuk callback, tidak cocok untuk object method
"""
    elif 'closure' in slug:
        md = """# Closure dan Lexical Scoping

**ID**: `closure-dan-lexical-scoping`
**Duration**: 25-30 menit

## Materi

Closure = function yang mengingat variabel dari scope parent.

### Contoh
```javascript
function counter() {
    let count = 0;
    return () => ++count;
}
const hitung = counter();
console.log(hitung()); // 1
console.log(hitung()); // 2
```

### Privacy
```javascript
function buatAkun(saldo) {
    return {
        cekSaldo: () => saldo,
        setor: (j) => saldo += j
    };
}
```

## Rangkuman
- Closure = function + lexical environment
- Variabel tetap hidup setelah parent selesai
"""
    elif 'async' in slug:
        md = """# Async/Await

**ID**: `async-await-asynchronous`
**Duration**: 25-30 menit

## Materi

### Event Loop
```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
// 1, 3, 2
```

### Promise
```javascript
const p = new Promise((resolve) => {
    setTimeout(() => resolve("OK"), 1000);
});
```

### Async/Await
```javascript
async function getData() {
    const res = await fetch("/api/data");
    return await res.json();
}
```

### Promise.all
```javascript
const [a, b] = await Promise.all([fetch("/a"), fetch("/b")]);
```

## Rangkuman
- async = function return Promise
- await = tunggu Promise selesai
"""
    elif 'dom' in slug:
        md = """# DOM Manipulation

**ID**: `dom-manipulation-dasar`
**Duration**: 25 menit

## Materi

### Pilih Elemen
```javascript
document.querySelector('#id');
document.querySelectorAll('.class');
```

### Manipulasi
```javascript
el.textContent = "Teks baru";
el.style.color = "red";
el.classList.add('active');
```

### Buat & Hapus
```javascript
const div = document.createElement('div');
div.textContent = "Hello!";
document.body.appendChild(div);
div.remove();
```

## Rangkuman
- querySelector = pilih elemen
- classList = manipulasi class
"""
    elif 'error' in slug:
        md = """# Error Handling

**ID**: `error-handling-try-catch`
**Duration**: 20 menit

## Materi

### Try/Catch
```javascript
try {
    JSON.parse("invalid");
} catch (e) {
    console.log(e.message);
}
```

### Throw
```javascript
function bagi(a, b) {
    if (b === 0) throw new Error("Div by zero!");
    return a / b;
}
```

## Rangkuman
- try/catch untuk error handling
- throw untuk custom error
"""
    else:
        md = f"""# {title}

**ID**: `{slug}`
**Duration**: 20-25 menit

## Materi

### Penjelasan
{title} dalam JavaScript digunakan untuk pengembangan aplikasi web modern.

### Contoh
```javascript
// {title}
console.log("Belajar: {title}");
```

## Rangkuman
- Praktikkan {title.lower()}
- Referensi: MDN Web Docs
"""
    
    with open(f'lessons/{slug}.md', 'w') as f:
        f.write(md)

print(f"✅ Generated {len(slugs)} lessons")

# Arrow Functions: Perilaku this

**ID**: `arrow-functions-perilaku-this`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript, functions, es6, this

## Tujuan Pembelajaran
- Memahami perbedaan sintaks antara arrow function dan regular function
- Memahami bagaimana `this` bekerja secara berbeda pada arrow vs regular function
- Mengetahui kapan harus menggunakan arrow function dan kapan tidak

## Materi

### Sintaks Arrow Function

Arrow function diperkenalkan di ES6 (2015) sebagai cara lebih ringkas untuk menulis fungsi. Perbedaan utama bukan hanya pada sintaks, tetapi juga pada bagaimana `this` di-resolve.

```javascript
// Regular function
function tambah(a, b) {
    return a + b;
}

// Arrow function - implicit return (satu expression)
const tambahArrow = (a, b) => a + b;

// Single parameter - bisa tanpa kurung
const kuadrat = x => x * x;

// Tanpa parameter - butuh kurung
const halo = () => console.log("Halo!");

// Multi-line - butuh return eksplisit
const proses = (x) => {
    const hasil = x * 2;
    console.log(\`Hasil: \${hasil}\`);
    return hasil;
};
```

### Perbedaan this (PENTING!)

Ini adalah perbedaan paling kritis antara arrow dan regular function:

```javascript
const user = {
    nama: "Archon",
    
    // Regular function: this = object yang memanggil
    greetRegular: function() {
        console.log(this.nama); // "Archon" ✅
    },
    
    // Arrow function: this = dari lexical scope (parent)
    greetArrow: () => {
        console.log(this.nama); // undefined ❌
    }
};

user.greetRegular(); // "Archon"
user.greetArrow();   // undefined
```

### Masalah di Callbacks

Masalah `this` paling sering muncul di callbacks:

```javascript
class Timer {
    constructor() {
        this.detik = 0;
    }
    
    // ❌ MASALAH: this hilang di callback
    mulaiBad() {
        setInterval(function() {
            this.detik++; // TypeError! this = undefined/global
        }, 1000);
    }
    
    // ✅ SOLUSI: Arrow function mempertahankan this
    mulaiGood() {
        setInterval(() => {
            this.detik++; // this = Timer instance ✅
        }, 1000);
    }
}
```

### Tidak Punya arguments Object

Arrow function tidak punya `arguments` object:

```javascript
function regular() {
    console.log(arguments); // Arguments object tersedia
}

const arrow = () => {
    console.log(arguments); // ReferenceError!
};

// Gunakan rest parameter sebagai gantinya
const arrowFixed = (...args) => {
    console.log(args); // Array of arguments ✅
};
```

### Kapan Menggunakan

| Gunakan Arrow | Gunakan Regular |
|---------------|-----------------|
| Callback (map, filter) | Object method |
| Promise chains | Constructor function |
| Singkat satu-liner | Butuh `this` binding |
| Closure dalam loop | Butuh arguments object |

## Latihan

### Soal 1
Buat fungsi yang menerima array of objects dan mengembalikan array of names menggunakan arrow function dengan map.

```javascript
const users = [
    {nama: "Alice", umur: 25},
    {nama: "Bob", umur: 30},
    {nama: "Charlie", umur: 35}
];

// Tulis kode di sini
const names = users.map(/* ... */);
console.log(names); // ["Alice", "Bob", "Charlie"]
```

### Soal 2
Buat class Calculator dengan method yang menggunakan arrow function untuk mempertahankan `this` context.

```javascript
class Calculator {
    constructor() {
        this.hasil = 0;
    }
    // Buat method tambah yang bisa di-chain
}
```

## Rangkuman
- Arrow function: `(params) => expression` lebih ringkas
- Arrow function tidak punya `this` sendiri - menggunakan dari parent scope
- Cocok untuk callback, tidak cocok untuk object method
- Tidak punya `arguments` object - gunakan rest parameter

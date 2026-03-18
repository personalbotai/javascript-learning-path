# Arrow Functions: Perilaku this

**ID**: `arrow-functions-perilaku-this`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript, functions, es6, this

## Tujuan Pembelajaran
- Memahami sintaks arrow function
- Perbedaan this pada arrow vs regular function
- Kapan menggunakan arrow vs regular

## Materi

### Sintaks Arrow Function
```javascript
// Regular function
function tambah(a, b) { return a + b; }

// Arrow function - implicit return
const tambahArrow = (a, b) => a + b;

// Single parameter - tanpa kurung
const kuadrat = x => x * x;

// Multi-line - butuh return
const proses = (x) => {
    const hasil = x * 2;
    return hasil;
};
```

### Perbedaan this (PENTING!)
```javascript
const user = {
    nama: "Archon",
    
    // Regular: this = object
    greetRegular: function() {
        console.log(this.nama); // "Archon" ✅
    },
    
    // Arrow: this = parent scope
    greetArrow: () => {
        console.log(this.nama); // undefined ❌
    }
};
```

### Callback Problem
```javascript
class Timer {
    detik = 0;
    
    // ❌ Regular: this hilang
    mulaiBad() {
        setInterval(function() {
            this.detik++; // undefined!
        }, 1000);
    }
    
    // ✅ Arrow: this tetap
    mulaiGood() {
        setInterval(() => {
            this.detik++; // Timer instance ✅
        }, 1000);
    }
}
```

## Latihan
Buat class Counter dengan method start() yang menggunakan arrow function untuk setInterval.

## Rangkuman
- Arrow: (params) => expression
- Arrow tidak punya this sendiri - ambil dari parent
- Cocok untuk callback, tidak cocok untuk object method

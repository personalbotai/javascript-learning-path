# Arrow Functions: Perilaku this

**ID**: `arrow-functions-perilaku-this`
**Duration**: 20-25 menit

## Materi

### Sintaks
```javascript
// Regular
function tambah(a, b) { return a + b; }

// Arrow
const tambah = (a, b) => a + b;
const kuadrat = x => x * x;
const halo = () => console.log("Hi!");
```

### Perbedaan this (PENTING!)
```javascript
const user = {
    nama: "Archon",
    greetRegular: function() { console.log(this.nama); }, // "Archon"
    greetArrow: () => { console.log(this.nama); }          // undefined!
};
```

### Callback Problem
```javascript
class Timer {
    detik = 0;
    mulai() {
        // ❌ Regular: this hilang
        // setInterval(function() { this.detik++; }, 1000);
        
        // ✅ Arrow: this tetap
        setInterval(() => { this.detik++; }, 1000);
    }
}
```

## Rangkuman
- Arrow: (params) => expression
- Arrow tidak punya this sendiri
- Cocok untuk callback, tidak cocok untuk object method

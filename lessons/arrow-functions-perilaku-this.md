# Arrow Functions: Perilaku this

**ID**: `arrow-functions-perilaku-this`
**Duration**: 20-25 menit

## Materi

### Sintaks
```javascript
const tambah = (a, b) => a + b;
const kuadrat = x => x * x;
const halo = () => console.log("Hi!");
```

### Perbedaan this
```javascript
const user = {
    nama: "Archon",
    greetRegular: function() { console.log(this.nama); },
    greetArrow: () => { console.log(this.nama); } // undefined!
};
```

### Callback
```javascript
class Timer {
    detik = 0;
    mulai() {
        setInterval(() => { this.detik++; }, 1000);
    }
}
```

## Latihan
Buat class Counter dengan method start() menggunakan arrow function untuk setInterval.

## Rangkuman
- Arrow tidak punya this sendiri
- Cocok untuk callback, tidak cocok untuk object method

## Tujuan Pembelajaran

- Memahami sintaks arrow function

- Perbedaan this pada arrow vs regular function

- Kapan menggunakan arrow vs regular

## Materi

### Sintaks Arrow Function

```
// Regular function
function tambah(a, b) { return a + b; }

// Arrow function
const tambah = (a, b) => a + b;
const sapa = nama => \`Halo \${nama}\`; // 1 param: tanpa kurung
const halo = () => console.log("Hi!");  // 0 param: butuh ()

// Dengan body (multi-line)
const proses = (x) => {
    const hasil = x * 2;
    return hasil;
};
```

### Perbedaan this (PENTING!)

```
// Regular function: 'this' bergantung cara dipanggil
const obj = {
    nama: "Archon",
    sapa: function() { console.log(this.nama); },  // "Archon"
    sapaArrow: () => { console.log(this.nama); }   // undefined!
};

// Arrow function menggunakan 'this' dari scope luar (lexical)
class Timer {
    detik = 0;
    mulai() {
        // ❌ Regular: this hilang di callback
        // setInterval(function() { this.detik++; }, 1000);
        
        // ✅ Arrow: this tetap merujuk ke Timer
        setInterval(() => { this.detik++; }, 1000);
    }
}
```

### Kapan Pakai?

- ✅ Arrow: callback, map/filter/reduce, method singkat

- ✅ Regular: object method, constructor, event handler yang butuh this

## Rangkuman

Pelajari arrow functions: perilaku this dengan praktik langsung.
← Kembali
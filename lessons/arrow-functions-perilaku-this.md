# Arrow Functions: Perilaku this

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

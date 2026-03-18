# Arrow Functions

**ID**: `arrow-functions-perilaku-this`
**Duration**: 20 menit

## Materi

### Sintaks
```javascript
const tambah = (a, b) => a + b;
const kuadrat = x => x * x;
```

### Perbedaan this
```javascript
const user = {
    greet: () => { console.log(this); } // undefined (bukan user!)
};
```

### Callback
```javascript
setInterval(() => { this.detik++; }, 1000); // this tetap!
```

## Rangkuman
- Arrow tidak punya this sendiri
- Cocok untuk callback

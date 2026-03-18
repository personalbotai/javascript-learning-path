# Array Higher-Order Functions

**ID**: `array-higher-order-functions`
**Duration**: 25-30 menit

## Materi

### map - Transformasi
```javascript
const angka = [1, 2, 3, 4, 5];
const kuadrat = angka.map(x => x * x); // [1, 4, 9, 16, 25]
const nama = users.map(u => u.nama);
```

### filter - Saring
```javascript
const genap = angka.filter(x => x % 2 === 0); // [2, 4]
const dewasa = users.filter(u => u.umur >= 18);
```

### reduce - Akumulasi
```javascript
const total = angka.reduce((acc, curr) => acc + curr, 0); // 15
const max = angka.reduce((a, b) => a > b ? a : b); // 5
```

### Chaining
```javascript
const hasil = angka
    .filter(x => x > 2)
    .map(x => x * 10)
    .reduce((a, b) => a + b, 0); // 120
```

## Rangkuman
- map = transform, filter = saring, reduce = akumulasi
- Method chaining untuk kode bersih

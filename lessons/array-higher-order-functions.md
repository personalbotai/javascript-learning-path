# Array Higher-Order Functions

**ID**: `array-higher-order-functions`
**Duration**: 25-30 menit

## Materi

### map - Transformasi
```javascript
const angka = [1, 2, 3, 4, 5];
const kuadrat = angka.map(x => x * x); // [1, 4, 9, 16, 25]
```

### filter - Saring
```javascript
const genap = angka.filter(x => x % 2 === 0); // [2, 4]
```

### reduce - Akumulasi
```javascript
const total = angka.reduce((acc, curr) => acc + curr, 0); // 15
```

### Chaining
```javascript
const hasil = angka
    .filter(x => x > 2)
    .map(x => x * 10)
    .reduce((a, b) => a + b, 0); // 120
```

## Latihan
Buat fungsi yang menghitung rata-rata dari array angka menggunakan reduce.

## Rangkuman
- map = transform, filter = saring, reduce = akumulasi

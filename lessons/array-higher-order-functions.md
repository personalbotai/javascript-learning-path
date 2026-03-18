# Array Higher-Order Functions

**ID**: `array-higher-order-functions`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami array higher-order functions dalam JavaScript
- Menerapkan best practices
- Praktik dengan contoh kode

## Materi

Higher-Order Functions menerima fungsi sebagai parameter. Modern JavaScript sangat bergantung pada pola ini.

### map - Transformasi
```javascript
const angka = [1, 2, 3, 4, 5];
const kuadrat = angka.map(x => x * x);  // [1, 4, 9, 16, 25]
const nama = users.map(u => u.nama);
```

### filter - Saring
```javascript
const genap = angka.filter(x => x % 2 === 0);  // [2, 4]
const dewasa = users.filter(u => u.umur >= 18);
```

### reduce - Akumulasi
```javascript
const total = angka.reduce((acc, curr) => acc + curr, 0);  // 15
const max = angka.reduce((a, b) => a > b ? a : b);  // 5

// Frekuensi
const freq = data.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});
```

### Chaining
```javascript
const hasil = angka
    .filter(x => x > 2)
    .map(x => x * 10)
    .reduce((a, b) => a + b, 0);  // 120
```

### find, some, every
```javascript
angka.find(x => x > 3);    // 4
angka.some(x => x > 4);    // true
angka.every(x => x > 0);   // true
```


## Latihan
Buat contoh kode yang menggunakan array higher-order functions.

## Rangkuman
- Array Higher-Order Functions adalah konsep penting dalam JavaScript
- Praktikkan dengan kode sendiri
- Referensi: MDN Web Docs

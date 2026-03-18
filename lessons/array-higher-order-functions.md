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

### Penjelasan
Array Higher-Order Functions adalah konsep penting yang digunakan dalam pengembangan JavaScript modern.

### Contoh Kode
```javascript
const angka = [1, 2, 3, 4, 5];

// map - transformasi
const kuadrat = angka.map(x => x * x); // [1, 4, 9, 16, 25]

// filter - saring
const genap = angka.filter(x => x % 2 === 0); // [2, 4]

// reduce - akumulasi
const total = angka.reduce((acc, curr) => acc + curr, 0); // 15

// Chaining
const hasil = angka
    .filter(x => x > 2)
    .map(x => x * 10)
    .reduce((a, b) => a + b, 0); // 120
```

### find, some, every
```javascript
angka.find(x => x > 3);    // 4
angka.some(x => x > 4);    // true
angka.every(x => x > 0);   // true
```

### Tips
- Praktikkan dengan kode sendiri
- Eksperimen dengan variasi berbeda
- Referensi: MDN Web Docs

## Latihan
Buat kode yang menggunakan array higher-order functions.

## Rangkuman
- Array Higher-Order Functions penting untuk JavaScript development
- Praktikkan dengan kode sendiri
- Referensi: MDN Web Docs untuk dokumentasi lengkap

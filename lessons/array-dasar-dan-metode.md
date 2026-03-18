# Array Dasar dan Metode

**ID**: `array-dasar-dan-metode`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript, array, data-structures

## Tujuan Pembelajaran
- Membuat dan memanipulasi array JavaScript
- Memahami mutasi vs non-mutasi methods
- Menggunakan slice, splice, dan searching methods

## Materi

### Membuat Array
```javascript
const buah = ["apel", "jeruk", "mangga"];
const angka = [1, 2, 3, 4, 5];
const campuran = [1, "dua", true, null, {x: 1}];
```

### Mutasi Array
```javascript
buah.push("pisang");    // Tambah akhir
buah.pop();             // Hapus akhir
buah.unshift("semangka"); // Tambah awal
buah.shift();           // Hapus awal

console.log(buah.length); // 3
console.log(buah.at(-1)); // "mangga" (ES2022)
```

### Slice vs Splice
```javascript
// slice - tidak ubah asli
const sebagian = angka.slice(1, 3); // [2, 3]

// splice - ubah asli
angka.splice(2, 1, 99); // Hapus 1 elemen di index 2, ganti 99
// angka = [1, 2, 99, 4, 5]
```

### Cari Elemen
```javascript
angka.indexOf(99);       // 2
angka.includes(99);      // true
angka.find(x => x > 3); // 99
angka.findIndex(x => x > 3); // 2
```

## Latihan
Buat fungsi `removeDuplicates(arr)` yang menghapus duplikat dari array.

## Rangkuman
- push/pop = akhir, shift/unshift = awal
- slice = tidak ubah, splice = ubah
- find/includes untuk pencarian

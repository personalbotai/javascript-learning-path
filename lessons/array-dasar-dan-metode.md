# Array Dasar dan Metode

**ID**: `array-dasar-dan-metode`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami konsep array dasar dan metode dalam JavaScript
- Menerapkan best practices
- Praktik dengan contoh kode

## Materi

Array adalah struktur data paling fundamental untuk menyimpan kumpulan nilai.

```javascript
// Membuat array
const buah = ["apel", "jeruk", "mangga"];
const angka = [1, 2, 3, 4, 5];
const campuran = [1, "dua", true, {x: 1}];

// Akses
buah[0];            // "apel"
buah[buah.length - 1]; // "mangga" (elemen terakhir)
buah.at(-1);        // "mangga" (ES2022)
```

### Mutasi Array
```javascript
// Tambah/hapus di AKHIR
buah.push("durian");   // ["apel", "jeruk", "mangga", "durian"]
buah.pop();            // "durian" → ["apel", "jeruk", "mangga"]

// Tambah/hapus di AWAL
buah.unshift("semangka"); // ["semangka", "apel", "jeruk", "mangga"]
buah.shift();             // "semangka" → ["apel", "jeruk", "mangga"]
```

### Searching
```javascript
buah.indexOf("jeruk");    // 1
buah.includes("apel");    // true
buah.find(x => x.length > 4);     // "jeruk" (first match)
buah.findIndex(x => x === "mangga"); // 2
```

### Slice vs Splice
```javascript
// slice - TIDAK ubah array asli
const sebagian = angka.slice(1, 3); // [2, 3]

// splice - UBAH array asli
angka.splice(2, 1, 99); // Hapus 1 elemen di index 2, ganti 99
```

### Sorting
```javascript
const nums = [3, 1, 4, 1, 5, 9];
nums.sort((a, b) => a - b); // Ascending: [1, 1, 3, 4, 5, 9]
nums.reverse(); // Descending
```

## Latihan
Buat kode yang menggunakan array dasar dan metode.

## Rangkuman
- Array Dasar dan Metode adalah konsep penting dalam JavaScript
- Praktikkan dengan kode sendiri
- Referensi: MDN Web Docs

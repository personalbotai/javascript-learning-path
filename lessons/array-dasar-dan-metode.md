# Array Dasar dan Metode

**ID**: `array-dasar-dan-metode`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami array dasar dan metode dalam JavaScript
- Menerapkan best practices
- Praktik dengan contoh kode

## Materi

Array adalah struktur data fundamental untuk menyimpan kumpulan nilai.

### Membuat Array
```javascript
const buah = ["apel", "jeruk", "mangga"];
const angka = [1, 2, 3, 4, 5];
const campuran = [1, "dua", true, null, {x: 1}];
```

### Akses & Modifikasi
```javascript
buah[0];              // "apel"
buah.length;          // 3
buah.at(-1);          // "mangga" (ES2022)

// Mutasi
buah.push("pisang");  // Tambah akhir
buah.pop();           // Hapus akhir
buah.unshift("mangga"); // Tambah awal
buah.shift();         // Hapus awal
```

### Slice vs Splice
```javascript
// slice - tidak ubah asli
const sebagian = angka.slice(1, 3);  // [2, 3]

// splice - ubah asli
angka.splice(2, 1, 99); // Hapus 1 elemen di index 2, ganti 99
```

### Cari Elemen
```javascript
angka.indexOf(99);       // 2
angka.includes(99);      // true
angka.find(x => x > 3); // 99
```


## Latihan
Buat contoh kode yang menggunakan array dasar dan metode.

## Rangkuman
- Array Dasar dan Metode adalah konsep penting dalam JavaScript
- Praktikkan dengan kode sendiri
- Referensi: MDN Web Docs

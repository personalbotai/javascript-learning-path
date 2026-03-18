# Array Dasar dan Metode

**ID**: `array-dasar-dan-metode`
**Duration**: 25-30 menit

## Materi

### Membuat Array
```javascript
const buah = ["apel", "jeruk", "mangga"];
const angka = [1, 2, 3, 4, 5];
const kosong = [];
```

### Mengakses Elemen
```javascript
console.log(buah[0]);        // "apel"
console.log(buah.length);    // 3
console.log(buah.at(-1));    // "mangga"
```

### Mutasi Array
```javascript
buah.push("pisang");      // Tambah akhir
buah.pop();               // Hapus akhir
buah.unshift("semangka"); // Tambah awal
buah.shift();             // Hapus awal
```

### Slice (tidak ubah asli)
```javascript
const sebagian = angka.slice(1, 3); // [2, 3]
console.log(angka); // [1, 2, 3, 4, 5] (tidak berubah)
```

### Splice (ubah asli)
```javascript
angka.splice(2, 1, 99); // Hapus 1 di index 2, ganti 99
console.log(angka); // [1, 2, 99, 4, 5]
```

### Cari Elemen
```javascript
angka.indexOf(99);       // 2
angka.includes(99);      // true
angka.find(x => x > 3); // 99
```

## Latihan
Buat fungsi `removeDuplicates(arr)` yang menghapus duplikat dari array.

## Rangkuman
- push/pop = akhir, shift/unshift = awal
- slice = tidak ubah, splice = ubah

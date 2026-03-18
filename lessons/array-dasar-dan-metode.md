## Tujuan Pembelajaran

- Membuat dan memanipulasi array
- Metode: push, pop, shift, unshift, slice, splice
- Memahami mutasi vs non-mutasi

## Materi

### Membuat Array

```
// Literal (direkomendasikan)
const angka = [1, 2, 3, 4, 5];
const campuran = [1, "dua", true, null, {x: 1}];

// Constructor
const arr = new Array(5); // [empty × 5]
const arr2 = Array.of(1, 2, 3); // [1, 2, 3]
```

### Akses dan Modifikasi

```
console.log(angka[0]); // 1
console.log(angka.length); // 5
console.log(angka.at(-1)); // 5 (elemen terakhir)

// Mutasi array
angka.push(6); // Tambah akhir → [1,2,3,4,5,6]
angka.pop(); // Hapus akhir → [1,2,3,4,5]
angka.unshift(0); // Tambah awal → [0,1,2,3,4,5]
angka.shift(); // Hapus awal → [1,2,3,4,5]
```

### Slice vs Splice

```
// slice(start, end) - TIDAK mengubah array asli
const sebagian = angka.slice(1, 3); // [2, 3]

// splice(start, deleteCount, ...items) - MENGUBAH array asli
angka.splice(2, 1, 99); // Hapus 1 elemen di index 2, ganti 99
```

## Rangkuman
Pelajari array dasar dan metode dengan praktik langsung.
← Kembali
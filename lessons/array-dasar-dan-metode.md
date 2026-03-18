# Array Dasar dan Metode

**ID**: `array-dasar-dan-metode`
**Duration**: 25 menit

## Materi

### Membuat Array
```javascript
const buah = ["apel", "jeruk", "mangga"];
const angka = [1, 2, 3, 4, 5];
```

### Mutasi
```javascript
buah.push("pisang");      // Tambah akhir
buah.pop();               // Hapus akhir
buah.unshift("semangka"); // Tambah awal
buah.shift();             // Hapus awal
```

### Slice vs Splice
```javascript
const sebagian = angka.slice(1, 3); // [2, 3] - tidak ubah asli
angka.splice(2, 1, 99); // Hapus 1 di index 2, ganti 99
```

### Cari
```javascript
angka.indexOf(99);       // 2
angka.includes(99);      // true
angka.find(x => x > 3); // 99
```

## Rangkuman
- push/pop = akhir, shift/unshift = awal
- slice = tidak ubah, splice = ubah

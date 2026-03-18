# Perulangan: Loop

**ID**: `perulangan`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami konsep perulangan: loop dalam JavaScript
- Menerapkan best practices
- Praktik dengan contoh kode

## Materi

JavaScript punya berbagai cara untuk melakukan perulangan.

```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For...of (values)
const buah = ["apel", "jeruk", "mangga"];
for (const item of buah) {
    console.log(item);
}

// For...in (keys)
const user = {nama: "Archon", umur: 25};
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}

// While
let i = 0;
while (i < 3) {
    console.log(i++);
}

// Array methods
buah.forEach(item => console.log(item));
buah.map(x => x.toUpperCase());
```

## Latihan
Buat loop yang menemukan semua angka prima dari 1-100.

## Rangkuman
- Praktikkan perulangan: loop dengan kode sendiri
- Referensi: MDN Web Docs untuk dokumentasi lengkap

# Kontrol Alur: if/else

**ID**: `kontrol-alur-if-else`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami konsep kontrol alur: if/else dalam JavaScript
- Menerapkan best practices
- Praktik dengan contoh kode

## Materi

JavaScript mendukung percabangan dengan if/else, ternary operator, dan switch.

```javascript
const nilai = 85;

if (nilai >= 90) {
    console.log("A");
} else if (nilai >= 80) {
    console.log("B");
} else {
    console.log("C");
}

// Ternary
const grade = nilai >= 70 ? "Lulus" : "Gagal";

// Switch
switch(Math.floor(nilai/10)) {
    case 10: case 9: console.log("A"); break;
    case 8: console.log("B"); break;
    default: console.log("C");
}
```

## Latihan
Buat fungsi yang menentukan kategori berat badan berdasarkan BMI.

## Rangkuman
- Praktikkan kontrol alur: if/else dengan kode sendiri
- Referensi: MDN Web Docs untuk dokumentasi lengkap

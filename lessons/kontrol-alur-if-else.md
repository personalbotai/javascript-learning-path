# Kontrol Alur: if/else

**ID**: `kontrol-alur-if-else`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami kontrol alur: if/else dalam JavaScript
- Menerapkan best practices
- Praktik dengan contoh kode

## Materi

Percabangan memungkinkan kode mengambil jalur berbeda berdasarkan kondisi.

### if/else
```javascript
const umur = 25;

if (umur >= 18) {
    console.log("Dewasa");
} else if (umur >= 13) {
    console.log("Remaja");
} else {
    console.log("Anak-anak");
}
```

### Ternary Operator
```javascript
// condition ? true : false
const status = umur >= 18 ? "Dewasa" : "Anak-anak";

// Nested (hindari, sulit dibaca)
const kategori = umur >= 18 ? "Dewasa" : umur >= 13 ? "Remaja" : "Anak";
```

### Switch
```javascript
const hari = "Senin";
switch(hari) {
    case "Senin":
        console.log("Hari kerja");
        break;  // WAJIB!
    case "Sabtu":
    case "Minggu":
        console.log("Weekend");
        break;
    default:
        console.log("Hari lain");
}
```

### Nullish Coalescing
```javascript
const nama = user.nama ?? "Guest";  // Hanya null/undefined
const alamat = user.alamat || "Default";  // Semua falsy
```


## Latihan
Buat contoh kode yang menggunakan kontrol alur: if/else.

## Rangkuman
- Kontrol Alur: if/else adalah konsep penting dalam JavaScript
- Praktikkan dengan kode sendiri
- Referensi: MDN Web Docs

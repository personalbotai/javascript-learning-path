# Variabel dan Tipe Data

**Kategori**: Dasar · **Durasi**: 15-20 Menit

## 🎯 Ringkasan
JavaScript adalah bahasa loosely typed dan dynamic. Variabel tidak terikat secara kaku pada satu tipe data.

---

## 📖 Pembahasan Mendalam

### Deklarasi: const, let, var
- `const`: untuk nilai tetap yang tidak di-reassign (rekomendasi utama)
- `let`: untuk nilai yang akan berubah (block scoped)
- `var`: gaya lama, function scoped, sebaiknya dihindari

### 7 Tipe Data Primitif
String, Number, BigInt, Boolean, Undefined, Null, Symbol. Semuanya bersifat immutable.

### Tipe Referensi (Object)
Object, Array, Function, Date, Map, Set. Disimpan berdasarkan referensi memori.

---

## 💻 Contoh Kode Interaktif

```javascript
// 1. Deklarasi modern
const nama = "Budi Santoso";
let skor = 100;
skor += 25;

// 2. Cek tipe data primitif
console.log(typeof nama);       // 'string'
console.log(typeof skor);       // 'number'
console.log(typeof null);       // 'object' (bug historis JS)
console.log(typeof undefined);  // 'undefined'

// 3. Object & Array
const user = { nama, skor };
console.log("User data:", user);
```

---

## 💡 Tips & Best Practices
- Selalu utamakan `const`. Hanya beralih ke `let` bila nilai variabel memang pasti akan diubah.
- Selalu gunakan strict equality (`===`) bukan loose equality (`==`).
- Biasakan membaca pesan error secara teliti dari stack trace DevTools.

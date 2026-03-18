# Variabel dan Tipe Data

**ID**: `variabel-dan-tipe-data`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript, variables, types, let, const

## Tujuan Pembelajaran
- Memahami perbedaan var, let, dan const
- Memahami tipe data primitif dan reference
- Memahami type coercion dan typeof operator

## Materi

### Deklarasi Variabel
```javascript
const nama = "Archon";   // Konstan, tidak bisa diubah
let umur = 25;           // Bisa diubah
var lama = "jangan dipakai"; // Legacy, hindari!
```

### Primitif vs Reference
```javascript
// Primitif (immutable, by value)
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 (tidak berubah)

// Reference (mutable, by reference)
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (berubah!)
```

### Tipe Data Primitif
```javascript
const str = "Halo";           // string
const num = 42;               // number
const big = 9007199254740991n; // bigint
const bool = true;            // boolean
const und = undefined;        // undefined
const nul = null;             // null
const sym = Symbol("id");     // symbol

// typeof
console.log(typeof str);   // "string"
console.log(typeof nul);   // "object" (bug historis!)
console.log(typeof []);    // "object"
```

### Type Coercion
```javascript
"5" + 3      // "53" (string concatenation)
"5" - 3      // 2 (numeric subtraction)
true + 1     // 2
"" == false  // true (coercion)
"" === false // false (strict - TIDAK ada coercion)
```

## Latihan
Buat script yang mendeteksi tipe data dari berbagai variabel dan menampilkan informasi lengkap.

## Rangkuman
- Gunakan `const` default, `let` jika perlu ubah, hindari `var`
- 7 tipe primitif: string, number, bigint, boolean, undefined, null, symbol
- Primitif = immutable, Reference = mutable
- Selalu gunakan `===` untuk perbandingan

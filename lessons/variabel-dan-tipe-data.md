# Variabel dan Tipe Data

**ID**: `variabel-dan-tipe-data`
**Duration**: 20-25 menit

## Materi

### Deklarasi
```javascript
const nama = "Archon";   // Konstan
let umur = 25;           // Bisa diubah
var lama = "deprecated"; // Jangan pakai
```

### Tipe Primitif
```javascript
const str = "Halo";           // string
const num = 42;               // number
const bool = true;            // boolean
const und = undefined;        // undefined
const nul = null;             // null
```

### Typeof
```javascript
typeof "Halo"      // "string"
typeof 42          // "number"
typeof null        // "object" (bug!)
```

### Perbandingan
```javascript
5 === "5"    // false (strict)
5 == "5"     // true (coercion - hindari!)
```

## Rangkuman
- const = tetap, let = berubah
- Selalu gunakan === untuk perbandingan

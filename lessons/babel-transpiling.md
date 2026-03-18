# Babel: Transpiling

**ID**: `babel-transpiling`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami babel: transpiling dalam JavaScript
- Menerapkan best practices
- Praktik dengan contoh kode

## Materi

Babel mengubah kode modern JavaScript (ES6+) menjadi kode yang kompatibel dengan browser lama.

```javascript
// ES6+ code
const fn = () => console.log('Hello');

// Babel output (ES5)
var fn = function() { console.log('Hello'); };
```

### Cara Kerja
Babel membaca kode modern → transform ke ES5 → output kompatibel.

### Konfigurasi
```json
// .babelrc
{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-transform-arrow-functions"]
}
```

### Penggunaan
```bash
npm install -D @babel/core @babel/cli @babel/preset-env
npx babel script.js --out-file output.js
```

## Latihan
Buat contoh kode yang menggunakan babel: transpiling.

## Rangkuman
- Babel: Transpiling adalah konsep penting dalam JavaScript
- Praktikkan dengan kode sendiri
- Referensi: MDN Web Docs

# ES6 Modules: Import/Export

**ID**: `es6-modules-import-export`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami es6 modules: import/export dalam JavaScript
- Menerapkan best practices
- Praktik dengan contoh kode

## Materi

Modules memungkinkan memecah kode menjadi file terpisah yang bisa saling mengimpor.

```javascript
// math.js - Export
export const PI = 3.14159;
export function tambah(a, b) { return a + b; }
export default class Calculator { }

// app.js - Import
import Calculator, { PI, tambah } from './math.js';
import * as math from './math.js';

console.log(tambah(2, 3));
console.log(math.PI);
```

### Export Types
- Named export: `export const x = 1`
- Default export: `export default class X`
- Re-export: `export { x } from './other'`

### Dynamic Import
```javascript
const module = await import('./math.js');
module.tambah(2, 3);
```

## Latihan
Buat contoh kode yang menggunakan es6 modules: import/export.

## Rangkuman
- ES6 Modules: Import/Export adalah konsep penting dalam JavaScript
- Praktikkan dengan kode sendiri
- Referensi: MDN Web Docs

# Setup Environment: Browser vs Node.js

**Kategori**: Dasar · **Durasi**: 15-20 Menit

## 🎯 Ringkasan
JavaScript dapat dijalankan di dua lingkungan utama: Browser (client-side) dan Node.js (server-side runtime). Masing-masing memiliki global object dan API yang berbeda.

---

## 📖 Pembahasan Mendalam

### Browser Environment
Menyediakan DOM API (document), BOM API (window, navigator, location), dan Web API (fetch, localStorage, setTimeout).

### Node.js Runtime
Ditenagai oleh V8 engine tanpa DOM. Menyediakan modul sistem file (fs), networking (http), dan modul utilitas OS (path, os).

### Peralatan Wajib
1. VS Code editor + ekstensi ESLint & Prettier
2. Node.js LTS dari nodejs.org
3. Browser modern dengan DevTools (Chrome/Firefox)

---

## 💻 Contoh Kode Interaktif

```javascript
// Kode yang aman dijalankan di Browser maupun Node.js:
const runtime = typeof window !== 'undefined' ? 'Browser' : 'Node.js';
console.log(`Lingkungan saat ini: ${runtime}`);

// Menghitung angka sederhana
const nums = [1, 2, 3, 4, 5];
const total = nums.reduce((acc, curr) => acc + curr, 0);
console.log(`Total: ${total}`);
```

---

## 💡 Tips & Best Practices
- Gunakan `globalThis` sebagai standar universal untuk mengakses global object di lingkungan manapun.
- Selalu gunakan strict equality (`===`) bukan loose equality (`==`).
- Biasakan membaca pesan error secara teliti dari stack trace DevTools.

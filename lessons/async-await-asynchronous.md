# Async/Await

**ID**: `async-await-asynchronous`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami async/await dalam JavaScript
- Menerapkan best practices
- Praktik dengan contoh kode

## Materi

### Penjelasan
Async/Await adalah konsep penting yang digunakan dalam pengembangan JavaScript modern.

### Contoh Kode
```javascript
// Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Berhasil!"), 1000);
});

// Async/Await
async function getData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Promise.all (parallel)
const [users, posts] = await Promise.all([
    fetch("/api/users").then(r => r.json()),
    fetch("/api/posts").then(r => r.json())
]);
```

### Tips
- Praktikkan dengan kode sendiri
- Eksperimen dengan variasi berbeda
- Referensi: MDN Web Docs

## Latihan
Buat kode yang menggunakan async/await.

## Rangkuman
- Async/Await penting untuk JavaScript development
- Praktikkan dengan kode sendiri
- Referensi: MDN Web Docs untuk dokumentasi lengkap

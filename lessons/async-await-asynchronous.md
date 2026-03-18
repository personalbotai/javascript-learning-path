# Async/Await: Asynchronous Programming

**ID**: `async-await-asynchronous`
**Type**: lesson
**Duration**: 25-30 menit
**Tags**: javascript, async, promises, es2017

## Tujuan Pembelajaran
- Memahami JavaScript single-threaded dan event loop
- Menggunakan Promise dan async/await
- Error handling di asynchronous code

## Materi

### JavaScript Single-Threaded

JavaScript punya **1 thread** tapi bisa handle banyak tugas dengan event loop:
```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
// Output: 1, 3, 2 (setTimeout di-queue)
```

### Promise
```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Berhasil!"), 1000);
});

promise
    .then(result => console.log(result))
    .catch(err => console.log(err))
    .finally(() => console.log("Selesai"));
```

### Async/Await
```javascript
async function getData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error:", error.message);
    }
}
```

### Promise.all (Parallel)
```javascript
const [users, posts] = await Promise.all([
    fetch("/api/users").then(r => r.json()),
    fetch("/api/posts").then(r => r.json())
]);
```

## Latihan
Buat fungsi async yang fetch data dari 3 API endpoints secara parallel dan gabungkan hasilnya.

## Rangkuman
- async function mengembalikan Promise
- await menunggu Promise selesai
- Promise.all untuk parallel execution
- Selalu gunakan try/catch untuk error handling

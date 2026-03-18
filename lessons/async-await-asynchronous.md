## Tujuan Pembelajaran

- Memahami JavaScript single-threaded dan event loop
- Menggunakan Promise dan async/await
- Error handling di asynchronous code

## Materi

### JavaScript: Single-Threaded Non-Blocking

```
// JavaScript punya 1 thread tapi bisa handle banyak tugas
// dengan event loop dan async operations

console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
// Output: 1, 3, 2
```

### Promise

```
const promise = new Promise((resolve, reject) => {
 setTimeout(() => resolve("Berhasil!"), 1000);
});

promise.then(result => console.log(result))
 .catch(err => console.log(err))
 .finally(() => console.log("Selesai"));
```

### Async/Await (Lebih Bersih)

```
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

### Promise.all - Parallel Execution

```
// Jalankan beberapa promise bersamaan
const [users, posts] = await Promise.all([
 fetch("/api/users").then(r => r.json()),
 fetch("/api/posts").then(r => r.json())
]);
```

## Rangkuman
Pelajari async/await: asynchronous programming dengan praktik langsung.
← Kembali
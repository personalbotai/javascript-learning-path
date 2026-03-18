# Async/Await: Asynchronous Programming

**ID**: `async-await-asynchronous`
**Duration**: 25-30 menit

## Materi

### JavaScript Single-Threaded
JavaScript punya 1 thread tapi bisa handle banyak tugas dengan event loop:
```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
// Output: 1, 3, 2
```

### Promise
```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Berhasil!"), 1000);
});
promise.then(r => console.log(r)).catch(e => console.log(e));
```

### Async/Await
```javascript
async function getData() {
    try {
        const res = await fetch("https://api.example.com/data");
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error:", error.message);
    }
}
```

### Promise.all
```javascript
const [users, posts] = await Promise.all([
    fetch("/api/users").then(r => r.json()),
    fetch("/api/posts").then(r => r.json())
]);
```

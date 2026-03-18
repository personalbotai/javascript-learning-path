# Async/Await

**ID**: `async-await-asynchronous`
**Duration**: 25-30 menit

## Materi

### Event Loop
```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
// 1, 3, 2
```

### Promise
```javascript
const p = new Promise((resolve) => {
    setTimeout(() => resolve("OK"), 1000);
});
```

### Async/Await
```javascript
async function getData() {
    const res = await fetch("/api/data");
    return await res.json();
}
```

### Promise.all
```javascript
const [a, b] = await Promise.all([fetch("/a"), fetch("/b")]);
```

## Rangkuman
- async = function return Promise
- await = tunggu Promise selesai

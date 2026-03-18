# Async/Await

**ID**: `async-await-asynchronous`
**Duration**: 25 menit

## Materi

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

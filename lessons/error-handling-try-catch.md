## Tujuan Pembelajaran

- Menggunakan try/catch/finally
- Membuat custom error
- Error handling di async/await

## Materi

### Try/Catch/Finally

```
try {
 const data = JSON.parse(invalidJSON);
} catch (error) {
 console.log(error.name); // "SyntaxError"
 console.log(error.message); // "Unexpected token..."
} finally {
 console.log("Selalu jalan");
}
```

### Throw Error

```
function bagi(a, b) {
 if (b === 0) throw new Error("Pembagi tidak boleh nol");
 return a / b;
}

try {
 bagi(10, 0);
} catch (e) {
 console.log(e.message); // "Pembagi tidak boleh nol"
}
```

### Custom Error Class

```
class ValidationError extends Error {
 constructor(message) {
 super(message);
 this.name = "ValidationError";
 }
}

// Async error handling
async function fetchData() {
 try {
 const res = await fetch("/api/data");
 if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
 return await res.json();
 } catch (e) {
 console.log("Fetch failed:", e.message);
 }
}
```

## Rangkuman
Pelajari error handling: try/catch/finally dengan praktik langsung.
← Kembali
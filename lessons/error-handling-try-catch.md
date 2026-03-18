# Error Handling: try/catch/finally

**ID**: `error-handling-try-catch`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami konsep error handling: try/catch/finally dalam JavaScript
- Menerapkan best practices
- Praktik dengan contoh kode

## Materi

JavaScript menggunakan try/catch/finally untuk menangani error tanpa crash program.

### Basic try/catch
```javascript
try {
    const data = JSON.parse(invalidJSON);
} catch (error) {
    console.log(error.name);    // "SyntaxError"
    console.log(error.message); // "Unexpected token..."
} finally {
    console.log("Selalu jalan");
}
```

### Throw Custom Error
```javascript
function bagi(a, b) {
    if (b === 0) throw new Error("Pembagi tidak boleh nol!");
    return a / b;
}

try {
    console.log(bagi(10, 0));
} catch (e) {
    console.log("Error:", e.message);
}
```

### Custom Error Class
```javascript
class ValidationError extends Error {
    constructor(field, message) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

function validateAge(age) {
    if (age < 0) throw new ValidationError("age", "Age cannot be negative");
    if (age > 150) throw new ValidationError("age", "Age too high");
    return true;
}

try {
    validateAge(-5);
} catch (e) {
    if (e instanceof ValidationError) {
        console.log(`Field ${e.field}: ${e.message}`);
    }
}
```

### Async Error Handling
```javascript
async function fetchData() {
    try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json();
    } catch (e) {
        console.error("Fetch failed:", e.message);
        return null;
    }
}
```

## Latihan
Buat kode yang menggunakan error handling: try/catch/finally.

## Rangkuman
- Error Handling: try/catch/finally adalah konsep penting dalam JavaScript
- Praktikkan dengan kode sendiri
- Referensi: MDN Web Docs

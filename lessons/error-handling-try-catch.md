# Error Handling

**ID**: `error-handling-try-catch`
**Duration**: 20-25 menit

## Materi

### Try/Catch/Finally
```javascript
try {
    const data = JSON.parse(invalidJSON);
} catch (error) {
    console.log(error.name);    // "SyntaxError"
    console.log(error.message);
} finally {
    console.log("Selalu jalan");
}
```

### Throw
```javascript
function bagi(a, b) {
    if (b === 0) throw new Error("Div by zero!");
    return a / b;
}
```

### Custom Error
```javascript
class ValidationError extends Error {
    constructor(msg) {
        super(msg);
        this.name = "ValidationError";
    }
}
```

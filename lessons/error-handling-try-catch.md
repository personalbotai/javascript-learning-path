# Error Handling

**ID**: `error-handling-try-catch`
**Duration**: 20 menit

## Materi

### Try/Catch
```javascript
try {
    JSON.parse("invalid");
} catch (e) {
    console.log(e.message);
}
```

### Throw
```javascript
function bagi(a, b) {
    if (b === 0) throw new Error("Div by zero!");
    return a / b;
}
```

## Rangkuman
- try/catch untuk error handling
- throw untuk custom error

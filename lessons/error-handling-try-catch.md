# Error Handling Try Catch

**ID**: `error-handling-try-catch`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Error Handling dalam JavaScript adalah fitur penting dalam JavaScript modern.

### Contoh Kode
```javascript
try {
    const data = JSON.parse(invalidJSON);
} catch (error) {
    console.log("Error:", error.name);
    console.log("Message:", error.message);
} finally {
    console.log("Selalu jalan");
}
```

### Tips
- Praktikkan kode ini
- Eksperimen dengan variasi
- Referensi: MDN Web Docs

## Rangkuman
- Error Handling Try Catch adalah fitur JavaScript yang berguna
- Praktikkan dengan kode sendiri

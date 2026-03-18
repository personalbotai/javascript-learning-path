# Regexp Regular Expressions

**ID**: `regexp-regular-expressions`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Regular Expressions dalam JavaScript adalah fitur penting dalam JavaScript modern.

### Contoh Kode
```javascript
const regex = /\d+/g;
console.log("abc123def".match(regex)); // ["123"]
console.log(regex.test("hello123"));   // true

const emailRegex = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;
console.log(emailRegex.test("user@mail.com")); // true
```

### Tips
- Praktikkan kode ini
- Eksperimen dengan variasi
- Referensi: MDN Web Docs

## Rangkuman
- Regexp Regular Expressions adalah fitur JavaScript yang berguna
- Praktikkan dengan kode sendiri

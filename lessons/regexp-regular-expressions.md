# Regular Expressions

**ID**: `regexp-regular-expressions`
**Duration**: 25 menit

## Materi

### Dasar
```javascript
const regex = /\d+/g;
"abc123".match(regex); // ["123"]
regex.test("hello");   // false
```

### Pattern
```javascript
/^[a-z]+$/i  // Hanya huruf
/^\d{4}$/    // 4 digit
```

## Rangkuman
- /pattern/flags untuk regex
- test() untuk validasi, match() untuk cari

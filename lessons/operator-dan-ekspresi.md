# Operator dan Ekspresi

**ID**: `operator-dan-ekspresi`
**Duration**: 15-20 menit

## Materi

### Aritmatika
```javascript
10 + 3   // 13
10 - 3   // 7
10 * 3   // 30
10 / 3   // 3.333...
10 % 3   // 1
10 ** 3  // 1000
```

### Perbandingan
```javascript
5 === 5      // true
5 === "5"    // false (beda tipe)
5 == "5"     // true (hindari!)
```

### Logical
```javascript
true && false   // false
true || false   // true
!true           // false
null ?? "default"  // "default"
user?.name     // undefined (safe)
```

## Rangkuman
- Selalu gunakan ===
- ?? untuk nullish coalescing
- ?. untuk optional chaining

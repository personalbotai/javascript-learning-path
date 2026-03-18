## Tujuan Pembelajaran

- Menggunakan operator aritmatika, perbandingan, dan logika
- Memahami strict equality (===) vs loose equality (==)
- Optional chaining dan nullish coalescing

## Materi

### Operator Aritmatika

```
const a = 10, b = 3;
a + b // 13
a - b // 7
a * b // 30
a / b // 3.333...
a % b // 1 (sisa bagi)
a ** b // 1000 (pangkat)
```

### Perbandingan

```
// Strict equality (===) - TANPA type coercion (direkomendasikan)
5 === "5" // false
null === undefined // false

// Loose equality (==) - DENGAN type coercion (hindari)
5 == "5" // true (bingung!)
0 == false // true
```

### Modern Operators

```
// Optional Chaining (?.)
const user = { profile: { name: "Archon" } };
user?.profile?.name // "Archon"
user?.address?.city // undefined (tidak error!)

// Nullish Coalescing (??)
const val = null ?? "default"; // "default"
const zero = 0 ?? 100; // 0 (bukan 100)
```

## Rangkuman
Pelajari operator dan ekspresi dengan praktik langsung.
← Kembali
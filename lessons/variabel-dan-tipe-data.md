## Tujuan Pembelajaran

- Memahami perbedaan var, let, dan const

- Mengenal tipe data primitif dan reference

- Memahami type coercion dan typeof

## Materi

### Deklarasi Variabel

```
// const - tidak bisa diubah (direkomendasikan)
const PI = 3.14;

// let - bisa diubah, block-scoped
let nama = "Archon";
nama = "Builder"; // OK

// var - jangan gunakan (function-scoped, hoisting aneh)
var lama = "deprecated";
```

### Tipe Data Primitif

```
// 7 primitif: string, number, bigint, boolean, undefined, null, symbol
const str = "Halo";
const num = 42;
const big = 100n;
const bool = true;
const und = undefined;
const nul = null;
const sym = Symbol("id");
```

### Typeof

```
typeof "Halo"     // "string"
typeof 42         // "number"
typeof undefined  // "undefined"
typeof null       // "object" (bug historis!)
typeof []         // "object"
typeof {}         // "object"
```

## Rangkuman

Pelajari variabel dan tipe data dengan praktik langsung.
← Kembali
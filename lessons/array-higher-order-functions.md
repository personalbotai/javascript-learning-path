## Tujuan Pembelajaran

- Menggunakan map, filter, reduce
- Menggunakan find, some, every
- Method chaining untuk transformasi data

## Materi

### Map - Transformasi setiap elemen

```
const angka = [1, 2, 3, 4, 5];
const kuadrat = angka.map(x => x * x); // [1, 4, 9, 16, 25]

const users = [{nama: "Alice"}, {nama: "Bob"}];
const names = users.map(u => u.nama); // ["Alice", "Bob"]
```

### Filter - Saring elemen

```
const genap = angka.filter(x => x % 2 === 0); // [2, 4]
const dewasa = users.filter(u => u.umur >= 18);
```

### Reduce - Akumulasi

```
const total = angka.reduce((acc, curr) => acc + curr, 0); // 15
const max = angka.reduce((a, b) => a > b ? a : b); // 5
```

### Chaining

```
const hasil = angka
 .filter(x => x % 2 === 0) // [2, 4]
 .map(x => x * 10) // [20, 40]
 .reduce((a, b) => a + b, 0); // 60
```

### Find, Some, Every

```
angka.find(x => x > 3); // 4 (elemen pertama)
angka.some(x => x > 4); // true (ada yang > 4)
angka.every(x => x > 0); // true (semua > 0)
```

## Rangkuman
Pelajari array higher-order functions dengan praktik langsung.
← Kembali
## Tujuan Pembelajaran

- Menggunakan Map untuk key-value pairs
- Perbedaan Map dan Object
- WeakMap untuk memory-efficient storage

## Materi

### Map

```
const map = new Map();

// Set & Get
map.set("nama", "Archon");
map.set(1, "angka"); // Key bisa tipe apa saja
map.set({id: 1}, "object");
console.log(map.get("nama")); // "Archon"

// Properties
map.size; // 3
map.has("nama"); // true
map.delete(1); // true
map.clear(); // Hapus semua
```

### Map vs Object

```
// Map: any key type, ordered, iterable, .size
// Object: string/symbol keys only, tidak guaranteed order

// Iterasi Map (dijamin urutan insert)
for (const [key, value] of map) {
 console.log(key, value);
}
```

### WeakMap

```
// Key harus object, tidak mencegah garbage collection
const cache = new WeakMap();

function process(obj) {
 if (!cache.has(obj)) {
 cache.set(obj, expensiveCalculation(obj));
 }
 return cache.get(obj);
}
```

## Rangkuman
Pelajari map dan weakmap dengan praktik langsung.
← Kembali
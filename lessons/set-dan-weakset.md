## Tujuan Pembelajaran

- Menggunakan Set untuk unique values
- Operasi set: union, intersection, difference
- WeakSet untuk object tracking

## Materi

### Set

```
const set = new Set([1, 2, 3, 3, 3]);
console.log(set); // Set {1, 2, 3}
console.log(set.size); // 3 (duplikat dihapus!)

// Tambah/hapus/cek
set.add(4);
set.delete(2);
set.has(1); // true
set.clear();

// Hapus duplikat dari array
const unique = [...new Set([1,2,2,3,3,3])]; // [1,2,3]
```

### Operasi Set

```
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

// Union
const union = new Set([...a, ...b]); // {1,2,3,4}

// Intersection
const intersection = new Set([...a].filter(x => b.has(x))); // {2,3}

// Difference
const diff = new Set([...a].filter(x => !b.has(x))); // {1}
```

### WeakSet

```
// Hanya object, tidak mencegah garbage collection
const visited = new WeakSet();
const obj = {x: 1};
visited.add(obj);
visited.has(obj); // true
// Jika obj tidak direferensikan lagi, dihapus dari WeakSet otomatis
```

## Rangkuman
Pelajari set dan weakset dengan praktik langsung.
← Kembali
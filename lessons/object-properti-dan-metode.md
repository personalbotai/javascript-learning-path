## Tujuan Pembelajaran

- Membuat dan memanipulasi object

- Object.keys, values, entries

- Destructuring dan spread

## Materi

### Object Literal

```
const user = {
    nama: "Archon",
    umur: 25,
    "is-active": true,  // Key dengan dash perlu quotes
    alamat: { kota: "Jakarta", kode: "10220" }
};
```

### Akses dan Modifikasi

```
// Dot notation
console.log(user.nama); // "Archon"

// Bracket notation
console.log(user["is-active"]); // true

// Dynamic key
const key = "nama";
console.log(user[key]); // "Archon"

// Tambah/hapus
user.email = "a@mail.com";
delete user.umur;
```

### Object Methods

```
Object.keys(user);    // ["nama", "is-active", ...]
Object.values(user);  // ["Archon", true, ...]
Object.entries(user); // [["nama","Archon"], ...]

// Destructuring
const { nama, umur = 0 } = user;
const { alamat: { kota } } = user; // Nested

// Spread
const updated = { ...user, umur: 26 };
const merged = { ...defaults, ...userSettings };
```

## Rangkuman

Pelajari object: properti dan metode dengan praktik langsung.
← Kembali
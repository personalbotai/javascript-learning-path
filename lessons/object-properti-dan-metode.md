# Object: Properti dan Metode

**ID**: `object-properti-dan-metode`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript, object, oop, destructuring

## Tujuan Pembelajaran
- Membuat dan memanipulasi object JavaScript
- Memahami destructuring dan spread operator
- Object methods: keys, values, entries, assign

## Materi

### Membuat Object
```javascript
const user = {
    nama: "Archon",
    umur: 25,
    email: "archon@mail.com",
    sapa() {
        return `Halo, ${this.nama}!`;
    }
};

// Akses
console.log(user.nama);        // "Archon"
console.log(user["email"]);    // "archon@mail.com"
console.log(user.sapa());      // "Halo, Archon!"
```

### Destructuring
```javascript
const { nama, umur, kota = "Jakarta" } = user;
console.log(nama); // "Archon"
console.log(kota); // "Jakarta" (default value)

// Nested destructuring
const config = { db: { host: "localhost", port: 5432 } };
const { db: { host, port } } = config;
```

### Spread & Rest
```javascript
// Spread - copy/merge
const updated = { ...user, umur: 26 };
const merged = { ...defaults, ...userSettings };

// Rest - collect remaining
const { nama, ...rest } = user;
console.log(rest); // {umur: 25, email: "..."}
```

### Object Methods
```javascript
Object.keys(user);    // ["nama", "umur", "email", "sapa"]
Object.values(user);  // ["Archon", 25, "archon@mail.com", ƒ]
Object.entries(user); // [["nama","Archon"], ...]
Object.assign(target, source); // Merge objects
Object.freeze(user);  // Prevent changes
Object.seal(user);    // Prevent add/delete
```

## Latihan
Buat fungsi yang merge dua object dengan deep merge (nested objects juga merge).

## Rangkuman
- Object = kumpulan key-value pairs
- Destructuring untuk ekstraksi
- Spread untuk copy/merge
- Object methods untuk manipulasi

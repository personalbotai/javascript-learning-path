# Prototype dan Prototype Chain

**ID**: `prototype-dan-prototype-chain`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami prototype dan prototype chain dalam JavaScript
- Menerapkan konsep dalam kode
- Best practices dan common pitfalls

## Materi

### Pengantar
JavaScript menggunakan prototypal inheritance - setiap object punya prototype yang jadi 'parent' untuk property lookup.

```javascript
// Setiap function punya prototype property
function User(nama) {
    this.nama = nama;
}

User.prototype.sapa = function() {
    return `Hi ${this.nama}`;
};

const alice = new User("Alice");
alice.sapa(); // "Hi Alice"
// alice.__proto__ === User.prototype
```

### Prototype Chain
```javascript
// Property lookup: alice → User.prototype → Object.prototype → null
alice.toString();   // Found di Object.prototype
alice.xyz;          // undefined (not found in chain)
```

### Object.create
```javascript
const animal = {
    speak() { return `${this.name} bersuara`; }
};

const dog = Object.create(animal);
dog.name = "Buddy";
dog.speak(); // "Buddy bersuara" (prototype chain → animal)
```

### Class vs Prototype
```javascript
// Class = syntactic sugar
class User { sapa() {} }

// Sama dengan:
function User() {}
User.prototype.sapa = function() {};
```


## Latihan
Buat contoh kode yang menerapkan prototype dan prototype chain.

## Rangkuman
- Prototype dan Prototype Chain adalah konsep penting dalam JavaScript
- Praktikkan dengan kode sendiri
- Referensi: MDN Web Docs

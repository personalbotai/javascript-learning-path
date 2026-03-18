## Tujuan Pembelajaran

- Memahami prototypal inheritance

- Prototype chain lookup

- Object.create dan __proto__

## Materi

### Prototype

```
// Setiap function punya prototype property
function User(nama) { this.nama = nama; }
User.prototype.sapa = function() { return \`Hi \${this.nama}\`; };

const alice = new User("Alice");
alice.sapa(); // "Hi Alice"

// alice.__proto__ === User.prototype
```

### Prototype Chain

```
// Lookup: alice → User.prototype → Object.prototype → null
alice.hasOwnProperty("nama");  // Found di Object.prototype
alice.toString();              // Found di Object.prototype
alice.xyz;                     // undefined (not found in chain)
```

### Object.create

```
const animal = {
    speak() { return \`\${this.name} bersuara\`; }
};

const dog = Object.create(animal);
dog.name = "Buddy";
dog.speak(); // "Buddy bersuara" (prototype chain ke animal)
```

### Class vs Prototype

```
// Class = syntactic sugar over prototypes
class User { sapa() {} }
// Sama dengan:
function User() {}
User.prototype.sapa = function() {};
```

## Rangkuman

Pelajari prototype dan prototype chain dengan praktik langsung.
← Kembali
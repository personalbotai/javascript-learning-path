## Tujuan Pembelajaran

- Memahami 4 aturan binding this
- call, apply, bind untuk mengubah konteks
- Best practice penggunaan this

## Materi

### 4 Aturan this Binding

```
// 1. Default Binding (strict: undefined, non-strict: global)
function greet() { console.log(this); }
greet(); // Window/undefined

// 2. Implicit Binding (obj.method())
const user = {
 nama: "Alice",
 greet() { console.log(this.nama); }
};
user.greet(); // "Alice"

// 3. Explicit Binding (call, apply, bind)
function sapa(greeting) { console.log(\`\${greeting}, \${this.nama}\`); }
sapa.call({nama: "Bob"}, "Halo"); // "Halo, Bob"
sapa.apply({nama: "Bob"}, ["Halo"]); // "Halo, Bob"
const bound = sapa.bind({nama: "Bob"});
bound("Halo"); // "Halo, Bob"

// 4. New Binding
function User(nama) { this.nama = nama; }
const alice = new User("Alice");
```

### Arrow Function: No Binding

```
const obj = {
 nama: "Test",
 regular: function() { return this.nama; }, // "Test"
 arrow: () => this.nama // undefined
};
```

## Rangkuman
Pelajari this keyword dan binding dengan praktik langsung.
← Kembali
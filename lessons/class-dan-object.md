## Tujuan Pembelajaran

- Membuat class dan object
- Constructor dan method
- Static method dan property

## Materi

### Object Literal

```
const user = {
 nama: "Archon",
 umur: 25,
 sapa() { return \`Halo, \${this.nama}!\`; }
};
console.log(user.sapa()); // "Halo, Archon!"
```

### Class Syntax

```
class User {
 // Constructor
 constructor(nama, email) {
 this.nama = nama;
 this.email = email;
 this.createdAt = new Date();
 }
 
 // Method
 sapa() {
 return \`Halo, \${this.nama}!\`;
 }
 
 // Static method (dipanggil tanpa instance)
 static createGuest() {
 return new User("Guest", "guest@example.com");
 }
}

const alice = new User("Alice", "alice@mail.com");
console.log(alice.sapa()); // "Halo, Alice!"

const guest = User.createGuest();
```

### Private Fields (ES2022)

```
class BankAccount {
 #saldo = 0; // Private field
 
 setor(jumlah) { this.#saldo += jumlah; }
 cekSaldo() { return this.#saldo; }
}
```

## Rangkuman
Pelajari class dan object dengan praktik langsung.
← Kembali
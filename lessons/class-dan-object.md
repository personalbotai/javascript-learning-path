# Class dan Object

**ID**: `class-dan-object`
**Duration**: 20-25 menit

## Materi

### Object Literal
```javascript
const user = {
    nama: "Archon",
    umur: 25,
    sapa() { return `Halo, ${this.nama}!`; }
};
console.log(user.sapa());
```

### Class
```javascript
class User {
    constructor(nama, email) {
        this.nama = nama;
        this.email = email;
    }
    sapa() {
        return `Halo, ${this.nama}!`;
    }
    static createGuest() {
        return new User("Guest", "guest@mail.com");
    }
}

const user = new User("Archon", "a@mail.com");
console.log(user.sapa());
```

### Private Fields
```javascript
class BankAccount {
    #saldo = 0;
    setor(j) { this.#saldo += j; }
    cekSaldo() { return this.#saldo; }
}
```

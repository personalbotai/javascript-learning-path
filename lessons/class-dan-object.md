# Class dan Object

**ID**: `class-dan-object`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami konsep class dan object dalam JavaScript
- Menerapkan best practices
- Praktik dengan contoh kode

## Materi

Class adalah blueprint untuk membuat object. JavaScript menggunakan prototypal inheritance di balik class syntax.

```javascript
class User {
    constructor(nama, email) {
        this.nama = nama;
        this.email = email;
        this.createdAt = new Date();
    }
    
    sapa() {
        return `Halo, ${this.nama}!`;
    }
    
    static createGuest() {
        return new User("Guest", "guest@mail.com");
    }
}

const user = new User("Archon", "archon@mail.com");
console.log(user.sapa()); // "Halo, Archon!"
const guest = User.createGuest();
```

### Private Fields (ES2022)
```javascript
class BankAccount {
    #saldo = 0;
    
    setor(jumlah) { this.#saldo += jumlah; }
    cekSaldo() { return this.#saldo; }
}

const akun = new BankAccount();
akun.setor(100000);
console.log(akun.cekSaldo()); // 100000
akun.#saldo; // SyntaxError!
```

## Latihan
Buat class Product dengan name, price, dan method untuk menghitung diskon.

## Rangkuman
- Praktikkan class dan object dengan kode sendiri
- Referensi: MDN Web Docs untuk dokumentasi lengkap

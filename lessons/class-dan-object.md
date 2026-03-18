# Class dan Object

**ID**: `class-dan-object`
**Duration**: 20 menit

## Materi

### Class
```javascript
class User {
    constructor(nama) {
        this.nama = nama;
    }
    sapa() {
        return `Halo, ${this.nama}!`;
    }
}
```

### Private Field
```javascript
class Bank {
    #saldo = 0;
    setor(j) { this.#saldo += j; }
}
```

## Rangkuman
- Class = blueprint untuk object
- # = private field

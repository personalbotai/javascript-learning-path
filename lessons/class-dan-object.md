# Class Dan Object

**ID**: `class-dan-object`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Class dan Object dalam JavaScript adalah fitur penting dalam JavaScript modern.

### Contoh Kode
```javascript
class User {
    constructor(nama, email) {
        this.nama = nama;
        this.email = email;
    }
    sapa() {
        return `Halo, ${this.nama}!`;
    }
}

const user = new User("Archon", "a@mail.com");
console.log(user.sapa()); // "Halo, Archon!"
```

### Tips
- Praktikkan kode ini
- Eksperimen dengan variasi
- Referensi: MDN Web Docs

## Rangkuman
- Class Dan Object adalah fitur JavaScript yang berguna
- Praktikkan dengan kode sendiri

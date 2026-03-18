# Class dan Object

**ID**: `class-dan-object`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami class dan object dalam JavaScript
- Menerapkan best practices
- Praktik dengan contoh kode

## Materi

### Penjelasan
Class dan Object adalah konsep penting yang digunakan dalam pengembangan JavaScript modern.

### Contoh Kode
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
```

### Tips
- Praktikkan dengan kode sendiri
- Eksperimen dengan variasi berbeda
- Referensi: MDN Web Docs

## Latihan
Buat kode yang menggunakan class dan object.

## Rangkuman
- Class dan Object penting untuk JavaScript development
- Praktikkan dengan kode sendiri
- Referensi: MDN Web Docs untuk dokumentasi lengkap

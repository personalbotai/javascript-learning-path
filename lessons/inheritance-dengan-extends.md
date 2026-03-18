# Inheritance Dengan Extends

**ID**: `inheritance-dengan-extends`
**Duration**: 20-25 menit

## Materi

### Penjelasan
Inheritance dalam JavaScript adalah fitur penting dalam JavaScript modern.

### Contoh Kode
```javascript
class Animal {
    constructor(nama) { this.nama = nama; }
    speak() { return `${this.nama} bersuara`; }
}

class Dog extends Animal {
    speak() { return `${this.nama} menggonggong!`; }
}

const dog = new Dog("Buddy");
console.log(dog.speak()); // "Buddy menggonggong!"
```

### Tips
- Praktikkan kode ini
- Eksperimen dengan variasi
- Referensi: MDN Web Docs

## Rangkuman
- Inheritance Dengan Extends adalah fitur JavaScript yang berguna
- Praktikkan dengan kode sendiri

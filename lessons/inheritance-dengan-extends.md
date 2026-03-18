## Tujuan Pembelajaran

- Menggunakan extends untuk inheritance
- super() untuk parent constructor
- Method overriding

## Materi

### Basic Inheritance

```
class Animal {
 constructor(nama) {
 this.nama = nama;
 }
 speak() { return \`\${this.nama} bersuara\`; }
}

class Dog extends Animal {
 constructor(nama, breed) {
 super(nama); // Call parent constructor
 this.breed = breed;
 }
 
 // Override method
 speak() { return \`\${this.nama} menggonggong!\`; }
 
 // New method
 fetch() { return \`\${this.nama} mengambil bola\`; }
}

const dog = new Dog("Buddy", "Golden");
dog.speak(); // "Buddy menggonggong!"
dog.fetch(); // "Buddy mengambil bola"
```

### Checking Inheritance

```
dog instanceof Dog; // true
dog instanceof Animal; // true
dog instanceof Object; // true
```

## Rangkuman
Pelajari inheritance dengan extends dengan praktik langsung.
← Kembali
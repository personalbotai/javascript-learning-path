# Inheritance dengan extends

**ID**: `inheritance-dengan-extends`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami inheritance dengan extends dalam JavaScript
- Menerapkan konsep dalam kode
- Best practices dan common pitfalls

## Materi

### Pengantar
Inheritance (pewarisan) memungkinkan class mewarisi property dan method dari class lain.

```javascript
class Animal {
    constructor(nama) { this.nama = nama; }
    speak() { return `${this.nama} bersuara`; }
}

class Dog extends Animal {
    constructor(nama, breed) {
        super(nama);  // Call parent constructor
        this.breed = breed;
    }
    
    // Override method
    speak() { return `${this.nama} menggonggong!`; }
    
    // New method
    fetch() { return `${this.nama} mengambil bola`; }
}

const dog = new Dog("Buddy", "Golden");
console.log(dog.speak()); // "Buddy menggonggong!"
console.log(dog.fetch()); // "Buddy mengambil bola"
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true
```

### Polymorphism
```javascript
class Shape {
    area() { return 0; }
}

class Circle extends Shape {
    constructor(r) { super(); this.r = r; }
    area() { return Math.PI * this.r ** 2; }
}

class Square extends Shape {
    constructor(s) { super(); this.s = s; }
    area() { return this.s * this.s; }
}

const shapes = [new Circle(5), new Square(4)];
shapes.forEach(s => console.log(s.area())); // Different implementations
```


## Latihan
Buat contoh kode yang menerapkan inheritance dengan extends.

## Rangkuman
- Inheritance dengan extends adalah konsep penting dalam JavaScript
- Praktikkan dengan kode sendiri
- Referensi: MDN Web Docs

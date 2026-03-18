## Tujuan Pembelajaran

- Memahami polymorphism
- Method overriding di subclass
- Aplikasi praktis polymorphism

## Materi

### Polymorphism

```
class Shape {
 area() { return 0; }
 describe() { return \`Luas: \${this.area()}\`; }
}

class Circle extends Shape {
 constructor(r) { super(); this.r = r; }
 area() { return Math.PI * this.r ** 2; }
}

class Square extends Shape {
 constructor(s) { super(); this.s = s; }
 area() { return this.s * this.s; }
}

// Polymorphic behavior
const shapes = [new Circle(5), new Square(4)];
shapes.forEach(s => console.log(s.describe()));
// "Luas: 78.5..." dan "Luas: 16"
```

### Super untuk Extended Logic

```
class Employee extends User {
 constructor(nama, jabatan) {
 super(nama);
 this.jabatan = jabatan;
 }
 
 sapa() {
 return super.sapa() + \` Saya \${this.jabatan}\`;
 }
}
```

## Rangkuman
Pelajari polymorphism dan method overriding dengan praktik langsung.
← Kembali
# Inheritance

**ID**: `inheritance-dengan-extends`
**Duration**: 25 menit

## Materi

### Extends
```javascript
class Animal {
    constructor(nama) { this.nama = nama; }
    speak() { return `${this.nama} bersuara`; }
}
class Dog extends Animal {
    speak() { return `${this.nama} menggonggong!`; }
}
```

### Super
```javascript
class Dog extends Animal {
    constructor(nama) { super(nama); }
}
```

## Rangkuman
- extends = inheritance
- super() = panggil parent

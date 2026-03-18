## Tujuan Pembelajaran

- Memahami constructor function

- Method definition dan shorthand

- Getters dan setters

## Materi

### Constructor Function (Legacy)

```
// Sebelum ES6 class
function User(nama, email) {
    this.nama = nama;
    this.email = email;
    this.sapa = function() {
        return \`Halo, \${this.nama}\`;
    };
}

const user = new User("Alice", "alice@mail.com");
```

### Class dengan Method

```
class Calculator {
    constructor() {
        this.result = 0;
    }
    
    // Method shorthand
    tambah(n) { this.result += n; return this; }
    kali(n) { this.result *= n; return this; }
    
    // Getter
    get hasil() { return this.result; }
    
    // Setter
    set hasil(val) { this.result = val; }
}

const calc = new Calculator();
calc.tambah(5).kali(2);
console.log(calc.hasil); // 10
```

## Rangkuman

Pelajari constructor dan methods dengan praktik langsung.
← Kembali
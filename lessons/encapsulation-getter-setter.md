## Tujuan Pembelajaran

- Menggunakan get dan set keywords

- Private fields dengan #

- Validasi data dengan setter

## Materi

### Getter dan Setter

```
class Temperature {
    constructor(celsius) {
        this._celsius = celsius;  // Convention: _ = private
    }
    
    get fahrenheit() {
        return this._celsius * 9/5 + 32;
    }
    
    set fahrenheit(f) {
        this._celsius = (f - 32) * 5/9;
    }
    
    get celsius() { return this._celsius; }
    set celsius(c) {
        if (c < -273.15) throw new Error("Below absolute zero!");
        this._celsius = c;
    }
}

const temp = new Temperature(0);
console.log(temp.fahrenheit); // 32
temp.fahrenheit = 212;
console.log(temp.celsius);    // 100
```

### Private Fields (ES2022)

```
class Counter {
    #count = 0;  // Truly private
    
    get value() { return this.#count; }
    increment() { this.#count++; }
}

const c = new Counter();
c.increment();
console.log(c.value);     // 1
console.log(c.#count);    // SyntaxError!
```

## Rangkuman

Pelajari encapsulation: getter dan setter dengan praktik langsung.
← Kembali
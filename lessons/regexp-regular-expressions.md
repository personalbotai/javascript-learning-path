## Tujuan Pembelajaran

- Membuat dan menggunakan regex
- Common patterns dan metode
- Regex untuk validasi input

## Materi

### Membuat Regex

```
// Literal
const regex = /pattern/flags;

// Constructor
const regex = new RegExp("pattern", "flags");

// Flags: g (global), i (case-insensitive), m (multiline)
```

### String Methods dengan Regex

```
"Hello 123 World".match(/\d+/g); // ["123"]
"Hello 123".search(/\d+/); // 6
"a,b,c".split(/,/); // ["a","b","c"]
"text".replace(/t/gi, "X"); // "XexX"
```

### Common Patterns

```
// Email
/^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i

// Phone (Indonesia)
/^\+?62[0-9]{9,12}$/

// URL
/^https?:\/\/[^\s]+$/

// Numbers only
/^\d+$/

// Test
const emailRegex = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;
emailRegex.test("user@mail.com"); // true
emailRegex.test("invalid"); // false
```

### Groups dan Captures

```
const str = "2024-01-15";
const match = str.match(/(\d{4})-(\d{2})-(\d{2})/);
// match[1]="2024", match[2]="01", match[3]="15"
```

## Rangkuman
Pelajari regexp: regular expressions dengan praktik langsung.
← Kembali
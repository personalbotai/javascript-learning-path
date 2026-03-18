# Regular Expressions

**ID**: `regexp-regular-expressions`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami regular expressions dalam JavaScript
- Menerapkan konsep dalam kode
- Best practices dan common pitfalls

## Materi

### Pengantar
Regular expressions (regex) adalah pola pencocokan string yang powerful untuk validasi, parsing, dan manipulasi teks.

```javascript
// Membuat regex
const regex1 = /pattern/flags;  // Literal
const regex2 = new RegExp("pattern", "flags"); // Constructor

// Flags: g (global), i (case-insensitive), m (multiline)
```

### String Methods dengan Regex
```javascript
const text = "Hello 123 World 456";

text.match(/\d+/g);        // ["123", "456"]
text.search(/World/);       // 10 (index)
text.replace(/\d+/g, "#");  // "Hello # World #"
text.split(/\s+/);         // ["Hello", "123", "World", "456"]
```

### Common Patterns
```javascript
// Email
const emailRegex = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;
emailRegex.test("user@mail.com"); // true

// Phone (Indonesia)
const phoneRegex = /^\+?62[0-9]{9,12}$/;
phoneRegex.test("+6281234567890"); // true

// URL
const urlRegex = /^https?:\/\/[^\s]+$/;
urlRegex.test("https://example.com"); // true
```

### Capture Groups
```javascript
const dateStr = "2024-01-15";
const match = dateStr.match(/(\d{4})-(\d{2})-(\d{2})/);
// match[1]="2024", match[2]="01", match[3]="15"
```

### Practical: Form Validation
```javascript
function validateForm(input) {
    const rules = {
        email: /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i,
        phone: /^\+?62[0-9]{9,12}$/,
        password: /^(?=.*[A-Z])(?=.*\d).{8,}$/
    };
    
    for (const [field, regex] of Object.entries(rules)) {
        if (!regex.test(input[field])) {
            return { valid: false, field, message: `Invalid ${field}` };
        }
    }
    return { valid: true };
}
```

## Latihan
Buat contoh kode yang menerapkan regular expressions.

## Rangkuman
- Regular Expressions adalah konsep penting dalam JavaScript
- Praktikkan dengan kode sendiri
- Referensi: MDN Web Docs

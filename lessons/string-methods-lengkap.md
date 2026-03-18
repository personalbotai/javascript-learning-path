# String Methods Lengkap

**ID**: `string-methods-lengkap`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript, string, methods, text

## Tujuan Pembelajaran
- Menguasai string methods utama di JavaScript
- Template literals dan string interpolation
- Regular expressions dengan string

## Materi

### Dasar String
```javascript
const str = "Hello, World!";
str.length;            // 13
str[0];                // "H"
str.charAt(0);         // "H"
str.indexOf("World");  // 7
str.includes("Hello"); // true
str.startsWith("He");  // true
str.endsWith("!");     // true
```

### Transformasi
```javascript
str.toUpperCase();     // "HELLO, WORLD!"
str.toLowerCase();     // "hello, world!"
str.trim();            // Remove whitespace
str.padStart(20, "-"); // "-------Hello, World!"
str.repeat(3);         // "Hello, World!Hello, World!Hello, World!"
```

### Extract & Split
```javascript
str.slice(0, 5);       // "Hello"
str.substring(0, 5);   // "Hello"
"a,b,c".split(",");    // ["a", "b", "c"]
```

### Replace
```javascript
str.replace("World", "JavaScript");    // "Hello, JavaScript!"
str.replaceAll("l", "L");              // "HeLLo, WorLD!"
"  trim me  ".trim();                  // "trim me"
```

### Template Literals
```javascript
const nama = "Archon";
const pesan = `Halo, ${nama}!
Nilai: ${2 + 3}`;
// Multiline + expression support
```

## Latihan
Buat fungsi `formatName(first, last)` yang mengubah "john doe" menjadi "John Doe".

## Rangkuman
- String methods: slice, split, replace, trim, includes
- Template literals: backtick untuk interpolation
- String immutable: methods return new string

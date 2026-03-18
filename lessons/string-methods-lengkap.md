## Tujuan Pembelajaran

- String methods: slice, split, join, replace
- Template literals dan tagged templates
- Regular expressions dengan string

## Materi

### Common String Methods

```
const str = "Hello, World!";

str.length; // 13
str.charAt(0); // "H"
str.indexOf("World"); // 7
str.includes("Hello"); // true
str.startsWith("He"); // true
str.endsWith("!"); // true

// Transformasi
str.toUpperCase(); // "HELLO, WORLD!"
str.toLowerCase(); // "hello, world!"
str.trim(); // Remove whitespace
str.padStart(20, "-"); // "-------Hello, World!"

// Extract
str.slice(0, 5); // "Hello"
str.substring(0, 5); // "Hello"

// Replace
str.replace("World", "Archon"); // "Hello, Archon!"
str.replaceAll("l", "L"); // "HeLLo, WorLD!"

// Split
"a,b,c".split(","); // ["a", "b", "c"]
```

### Template Literals

```
const nama = "Archon";
const pesan = \`Halo \${nama}!
Nilai: \${2 + 3}\`;
// Multiline dan expression support!
```

## Rangkuman
Pelajari string methods lengkap dengan praktik langsung.
← Kembali
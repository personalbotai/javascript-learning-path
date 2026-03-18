# NPM dan package.json

**ID**: `npm-dan-package-json`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami npm dan package.json dalam JavaScript
- Menerapkan best practices
- Praktik dengan contoh kode

## Materi

NPM (Node Package Manager) mengelola dependency JavaScript project.

```json
// package.json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "jest": "^29.0.0"
  }
}
```

### Commands
```bash
npm init -y           # Inisialisasi project
npm install express   # Install dependency
npm install -D jest   # Install dev dependency
npm run start         # Jalankan script
npm update            # Update dependencies
```

## Latihan
Buat contoh kode yang menggunakan npm dan package.json.

## Rangkuman
- NPM dan package.json adalah konsep penting dalam JavaScript
- Praktikkan dengan kode sendiri
- Referensi: MDN Web Docs

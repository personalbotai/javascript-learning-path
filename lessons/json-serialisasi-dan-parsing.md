# Json Serialisasi Dan Parsing

**ID**: `json-serialisasi-dan-parsing`
**Duration**: 20-25 menit

## Materi

### Penjelasan
JSON dalam JavaScript adalah fitur penting dalam JavaScript modern.

### Contoh Kode
```javascript
const user = {nama: "Archon", umur: 25};
const json = JSON.stringify(user, null, 2);
console.log(json);

const parsed = JSON.parse(json);
console.log(parsed.nama); // "Archon"
```

### Tips
- Praktikkan kode ini
- Eksperimen dengan variasi
- Referensi: MDN Web Docs

## Rangkuman
- Json Serialisasi Dan Parsing adalah fitur JavaScript yang berguna
- Praktikkan dengan kode sendiri

# JSON: Serialisasi dan Parsing

**ID**: `json-serialisasi-dan-parsing`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript, json, data

## Tujuan Pembelajaran
- Mengkonversi object ke JSON dan sebaliknya
- JSON.stringify dengan replacer
- JSON.parse dengan reviver

## Materi

### stringify
```javascript
const user = {nama: "Archon", umur: 25};
const json = JSON.stringify(user);
// '{"nama":"Archon","umur":25}'

// Pretty print
const pretty = JSON.stringify(user, null, 2);
```

### parse
```javascript
const parsed = JSON.parse(json);
console.log(parsed.nama); // "Archon"

// Dengan reviver
const data = JSON.parse(json, (key, value) => {
    if (typeof value === 'string') return value.toUpperCase();
    return value;
});
```

### Fetch + JSON
```javascript
const res = await fetch("/api/user");
const user = await res.json();
```

## Latihan
Buat fungsi yang simpan dan load data dari localStorage dengan JSON.

## Rangkuman
- stringify = object → JSON string
- parse = JSON string → object
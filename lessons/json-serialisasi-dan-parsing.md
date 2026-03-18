## Tujuan Pembelajaran

- Mengkonversi object ke JSON dan sebaliknya
- JSON.stringify dengan replacer
- JSON.parse dengan reviver

## Materi

### JSON.stringify

```
const user = {nama: "Archon", umur: 25, aktif: true};

// Object → JSON string
const json = JSON.stringify(user);
// '{"nama":"Archon","umur":25,"aktif":true}'

// Pretty print
const pretty = JSON.stringify(user, null, 2);
// {\n "nama": "Archon",\n ...\n}

// Replacer (filter fields)
JSON.stringify(user, ["nama", "umur"]);
// '{"nama":"Archon","umur":25}'
```

### JSON.parse

```
// JSON string → Object
const parsed = JSON.parse(json);
console.log(parsed.nama); // "Archon"

// Dengan reviver
const data = JSON.parse(json, (key, value) => {
 if (key === "umur") return Number(value);
 return value;
});
```

### Fetch + JSON

```
const res = await fetch("/api/user");
const user = await res.json(); // parse JSON

// Kirim JSON
await fetch("/api/user", {
 method: "POST",
 headers: {"Content-Type": "application/json"},
 body: JSON.stringify(user)
});
```

## Rangkuman
Pelajari json: serialisasi dan parsing dengan praktik langsung.
← Kembali
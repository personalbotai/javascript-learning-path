# Fetch API dan HTTP Requests

**ID**: `fetch-api-http-requests`
**Type**: lesson
**Duration**: 25-30 menit
**Tags**: javascript, fetch, api, http

## Tujuan Pembelajaran
- Menggunakan fetch() untuk HTTP requests
- Handling response dan error
- CRUD operations dengan REST API

## Materi

### GET Request
```javascript
async function getUsers() {
    const res = await fetch("https://api.example.com/users");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const users = await res.json();
    return users;
}
```

### POST Request
```javascript
async function createUser(userData) {
    const res = await fetch("https://api.example.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    });
    return await res.json();
}
```

### Error Handling
```javascript
try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
} catch (err) {
    if (err.name === "TypeError") console.log("Network error");
    else console.log(err.message);
}
```

## Latihan
Buat fungsi yang fetch data dari JSONPlaceholder API dan tampilkan hasilnya.

## Rangkuman
- fetch() mengembalikan Promise
- response.json() untuk parse JSON
- Selalu cek response.ok
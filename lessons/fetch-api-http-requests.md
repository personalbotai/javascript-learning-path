## Tujuan Pembelajaran

- Menggunakan fetch() untuk HTTP requests

- Handling response dan error

- CRUD operations dengan REST API

## Materi

### GET Request

```
async function getUsers() {
    const res = await fetch("https://api.example.com/users");
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    const users = await res.json();
    return users;
}
```

### POST Request

```
async function createUser(userData) {
    const res = await fetch("https://api.example.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    });
    return await res.json();
}
```

### PUT dan DELETE

```
// PUT (update)
await fetch(\`/users/\${id}\`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({nama: "Baru"})
});

// DELETE
await fetch(\`/users/\${id}\`, { method: "DELETE" });
```

### Error Handling

```
try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    const data = await res.json();
} catch (err) {
    if (err.name === "TypeError") console.log("Network error");
    else console.log(err.message);
}
```

## Rangkuman

Pelajari fetch api dan http requests dengan praktik langsung.
← Kembali
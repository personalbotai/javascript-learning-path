# Fetch Api Http Requests

**ID**: `fetch-api-http-requests`
**Duration**: 20-25 menit

## Materi

### Penjelasan
HTTP Requests dalam JavaScript adalah fitur penting dalam JavaScript modern.

### Contoh Kode
```javascript
async function getData() {
    try {
        const res = await fetch("https://api.example.com/data");
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error.message);
    }
}
getData();
```

### Tips
- Praktikkan kode ini
- Eksperimen dengan variasi
- Referensi: MDN Web Docs

## Rangkuman
- Fetch Api Http Requests adalah fitur JavaScript yang berguna
- Praktikkan dengan kode sendiri

# Kontrol Alur: if/else

**ID**: `kontrol-alur-if-else`
**Duration**: 20-25 menit

## Materi

### If/Else
```javascript
const nilai = 85;

if (nilai >= 90) {
    console.log("A");
} else if (nilai >= 80) {
    console.log("B");
} else {
    console.log("C");
}
```

### Ternary
```javascript
const status = nilai >= 70 ? "Lulus" : "Gagal";
```

### Switch
```javascript
const hari = "Senin";
switch(hari) {
    case "Senin": console.log("Kerja"); break;
    case "Minggu": console.log("Libur"); break;
    default: console.log("Biasa");
}
```

### Nullish
```javascript
const nama = user.nama ?? "Guest";
```

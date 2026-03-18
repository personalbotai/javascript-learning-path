# Object: Properti dan Metode

**ID**: `object-properti-dan-metode`
**Duration**: 20 menit

## Materi

### Object Literal
```javascript
const user = {
    nama: "Archon",
    umur: 25,
    sapa() { return `Halo, ${this.nama}!`; }
};
```

### Destructuring
```javascript
const { nama, umur } = user;
```

### Spread
```javascript
const updated = { ...user, umur: 26 };
```

## Rangkuman
- Object = kumpulan key-value
- Destructuring untuk ekstraksi

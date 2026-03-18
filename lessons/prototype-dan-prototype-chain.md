# Prototype

**ID**: `prototype-dan-prototype-chain`
**Duration**: 25 menit

## Materi

### Prototype
```javascript
function User(nama) { this.nama = nama; }
User.prototype.sapa = function() { return `Hi ${this.nama}`; };
```

### Chain
```javascript
user.sapa(); // Found di prototype
user.toString(); // Found di Object.prototype
```

## Rangkuman
- Prototype = inheritance mechanism
- Lookup: instance → prototype → Object.prototype → null

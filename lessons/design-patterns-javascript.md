# Design Patterns dalam JavaScript

**ID**: `design-patterns-javascript`
**Type**: lesson
**Duration**: 30-35 menit
**Tags**: javascript, patterns, architecture

## Tujuan Pembelajaran
- Memahami dan menerapkan design patterns umum
- Singleton, Observer, Factory patterns
- Best practices untuk arsitektur JavaScript

## Materi

### Singleton Pattern
```javascript
class Database {
    constructor() {
        if (Database.instance) return Database.instance;
        this.connection = this.connect();
        Database.instance = this;
    }
    connect() { return "Connected"; }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true (sama instance)
```

### Observer Pattern
```javascript
class EventEmitter {
    constructor() { this.events = {}; }
    
    on(event, callback) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(callback);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(cb => cb(data));
        }
    }
}

const emitter = new EventEmitter();
emitter.on('data', (d) => console.log('Received:', d));
emitter.emit('data', {msg: 'Hello!'});
```

### Factory Pattern
```javascript
class Vehicle {
    constructor(type, wheels) {
        this.type = type;
        this.wheels = wheels;
    }
}

class VehicleFactory {
    static create(type) {
        switch(type) {
            case 'car': return new Vehicle('car', 4);
            case 'bike': return new Vehicle('bike', 2);
            case 'truck': return new Vehicle('truck', 6);
        }
    }
}

const car = VehicleFactory.create('car');
```

## Latihan
Buat Observer pattern untuk sistem notifikasi.

## Rangkuman
- Singleton: satu instance untuk semua
- Observer: publish-subscribe model
- Factory: centralized object creation

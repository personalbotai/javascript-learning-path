# Performance Optimization

**ID**: `performance-optimization`
**Type**: lesson
**Duration**: 25-30 menit
**Tags**: javascript, performance, optimization

## Tujuan Pembelajaran
- Memahami teknik optimasi JavaScript
- Debouncing dan throttling
- Lazy loading dan code splitting

## Materi

### Debouncing
```javascript
// Tunggu user berhenti mengetik sebelum search
function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

const search = debounce((query) => {
    console.log('Searching:', query);
}, 300);

input.addEventListener('input', (e) => search(e.target.value));
```

### Throttling
```javascript
// Batasi frekuensi eksekusi
function throttle(fn, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

window.addEventListener('scroll', throttle(() => {
    console.log('Scroll position:', window.scrollY);
}, 100));
```

### Lazy Loading
```javascript
// Load module hanya saat dibutuhkan
button.addEventListener('click', async () => {
    const module = await import('./heavy-module.js');
    module.doWork();
});
```

### Virtual Scrolling
Untuk list besar, render hanya elemen yang visible.

## Latihan
Implementasikan debounce untuk search input dengan API call.

## Rangkuman
- Debounce: tunggu user selesai
- Throttle: batasi frekuensi
- Lazy loading: load saat dibutuhkan

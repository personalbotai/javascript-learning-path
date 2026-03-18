## Tujuan Pembelajaran

- Menggunakan get dan set keywords
- Private fields dengan #
- Validasi data dengan setter

## Materi

### Getter dan Setter

```
class Temperature {
 constructor(celsius) {
 this._celsius = celsius; // Convention: _ = private
 }
 
 get fahrenheit() {
 return this._celsius * 9/5 + 32;
 }
 
 set fahrenheit(f) {
 this._celsius = (f - 32) * 5/9;
 }
 
 get celsius() { return this._celsius; }
 set celsius(c) {
 if (c 
## Rangkuman
Pelajari encapsulation: getter dan setter dengan praktik langsung.
← Kembali
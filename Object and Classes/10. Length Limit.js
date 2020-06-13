class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.length = 0;
        this.increase(length);
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
    }

    get innerLength() {
        return this.length
    }

    set innerLength(value) {
        this.length = value < 0 ? 0 : value;
    }

    toString() {
        return this.length < this.innerString.length ? 
        this.innerString.substring(0, this.length) + '...' : this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...
console.log(test.innerString); // ...
console.log(test.innerLength); // ...
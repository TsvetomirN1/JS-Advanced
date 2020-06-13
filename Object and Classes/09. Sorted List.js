class SortedList {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.size++;
        this.list.sort((a, b) => a - b);
    }

    remove(index) {
        if (this.size > index && index >= 0) {
            this.size--;
            this.list.splice(index, 1);
        }
    }

    get(index) {
        if (this.size > index && index >= 0) {
            return this.list[index];
        }
    }
}

const sorted = new SortedList();
sorted.add(7);
sorted.add(-1);
sorted.add(23);
console.log(sorted.list);
console.log(sorted.size);
console.log(sorted.get(2));
sorted.remove(1);
console.log(sorted.list);
const counter = {
    count: 0,

    up() {
        this.count++;
        return this.count;
    },
};
console.log(counter.up());
console.log(counter.up());
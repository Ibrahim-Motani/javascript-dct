const person = {
    name: 'Rahul',
    city: 'Bangalore',
    profession: 'Developer',
    details() {
        return `${this.name} is working as a ${this.profession} in ${this.city}`;
    },
}
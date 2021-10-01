function User(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    this.isAdmin = false;

    this.fulllName = function () {
        return `${this.firstName} ${this.lastName}`;
    }

    this.details = function () {
        return `Admin : ${this.isAdmin}`;
    }
}

const user1 = new User('Steve', 'Sins');
console.log(user1);
console.log(user1.details());

const user2 = new User('Sam', 'Rae');
console.log(user2);
console.log(user2.details());
class person {
    firstName;
    lastName;
    age;
    email;

    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
}

const moshe = new person('moshe', 'cohen', 30, 'moshe@mail.com');
console.log(moshe);

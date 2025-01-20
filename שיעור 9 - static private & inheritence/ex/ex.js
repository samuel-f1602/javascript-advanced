class Zoo {
    static count = 0;
    static animalCount = [];

    constructor(name, location, age, type) {
        this.name = name;
        this.location = location;
        this.age = age;
        this.type = type;
        Zoo.count++;
        this.id = Zoo.count;
        Zoo.animalCount.push(this.name);
    }

    static printAnimals() {
        console.log(`There are ${Zoo.count} animals in the zoo`);
        console.log(`There are all the animals in the zoo ${Zoo.animalCount}`);

    }
}

const lion = new Zoo(`Lion`, `Cage`, 5, `Mammal`);
const tiger = new Zoo(`Tiger`, `Cage`, 5, `Mammal`);
const elephant = new Zoo(`Elephant`, `Cage`, 5, `Mammal`);
const giraffe = new Zoo(`Giraffe`, `Cage`, 5, `Mammal`);
const monkey = new Zoo(`Monkey`, `Cage`, 5, `Mammal`);
const snake = new Zoo(`Snake`, `Cage`, 5, `Reptile`);
const crocodile = new Zoo(`Crocodile`, `Cage`, 5, `Reptile`);
const panguin = new Zoo(`Panguin`, `Cage`, 5, `Bird`);


console.log(lion);
console.log(tiger);
console.log(elephant);
console.log(giraffe);
console.log(monkey);
console.log(snake);
console.log(crocodile);
console.log(panguin);

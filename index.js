/**
 * @param {string} name
 * @param {number} age
 * @constructor
 * @property {string} name
 * @property {number} age
 * @property {cars[]} cars
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.outputInformationAboutPerson = function (Person) {
        console.log(`Name: ${this.name}, Age:  ${this.age}`)
        console.log('/-------------------------------------/')
    }
}

/**
 * @param {string} brand
 * @param {string} model
 * @param {number} year
 * @param {string} number
 * @constructor
 * @property {string} brand
 * @property {string} model
 * @property {number} year
 * @property {string} number
 * @property {Person} owner
 */
function Car(brand, model, year, number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.number = number;
    this.owner = null;
    this.setOwner = function (person) {
        if (person.age >= 18) {
            this.owner = person
        } else {
            console.log(`The ${person.name}is under 18 years old`);
            console.log('/-------------------------------------/')
        }

    };

        this.outputInformationAboutCar = function (Car) {
            console.log(`Brand:  ${brand}, Model: ${model}, Year: ${year}, Number: ${number}`);
            if (this.owner !== null) {
                console.log('Owner')
                this.owner.outputInformationAboutPerson();
            }
        };
}

const vika = new Person('Vika', 29);
const oleksii = new Person('Oleksii', 30)
const kira = new Person('Kira', 16)
const car1 = new Car('BMW', 'X6', 2020, 'AE3060AC')
const car2 = new Car('KIA', 'Sportage', 2018, 'AE2032CA')
const car3 = new Car('volkswagen', 'Jetta', 2015, 'AE0350AT')

vika.outputInformationAboutPerson();
oleksii.outputInformationAboutPerson();
kira.outputInformationAboutPerson();

car1.setOwner(vika);
car2.setOwner(oleksii);
car3.setOwner(kira);


car1.outputInformationAboutCar();
car2.outputInformationAboutCar();
car3.outputInformationAboutCar();

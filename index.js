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
    this.cars = [];
    /**
     *
     * @param {Person} Person
     */
    this.outputInformationAboutPerson = function (Person) {
        console.log(this.name, this.age)
    }
}

/**
 * @param {string} brand
 * @param {string} model
 * @param {number} year
 * @param {string} number
 * @param {Person} owner
 * @constructor
 * @property {string} brand
 * @property {string} model
 * @property {number} year
 * @property {string} number
 * @property {Person} owner
 */
function Car(brand, model, year, number, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.number = number;
    this.owner = owner;
    owner.cars.push(this)
    this.outputInformationAboutCar = function (Car) {
        if (owner.age > 18) {
            console.log(brand, model, year, number, owner)
        }
        else if (owner.age < 18) {
            console.log("The owner is under 18 years old")
        }
    }
}

const vika = new Person('Vika', 29);
const oleksii = new Person('Oleksii', 30)
const kira = new Person('Kira', 16)
vika.outputInformationAboutPerson();
oleksii.outputInformationAboutPerson();
kira.outputInformationAboutPerson();
const car1 = new Car('BMW', 'X6', 2020, 'AE3060AC', vika)
const car2 = new Car('KIA', 'Sportage', 2018, 'AE2032CA', oleksii)
const car3 = new Car('volkswagen', 'Jetta', 2015, 'AE0350AT', kira)
car1.outputInformationAboutCar()
car2.outputInformationAboutCar()
car3.outputInformationAboutCar()
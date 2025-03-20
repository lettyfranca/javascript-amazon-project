class Car {
    #brand;
    #model;
    speed;
    isTrunkOpen = false;
    
    constructor(carDetails) {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
        this.speed = carDetails.speed || 0;
    }

    displayInfo() {
        const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';

        console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk: ${trunkStatus}`);
    }

    go() {
        if (!this.isTrunkOpen) {
            this.speed += 5;
          }

        if (this.speed > 200) {
            this.speed = 200;
        }
    }

    brake() {
        this.speed -= 5;

        if (this.speed < 0) {
            this.speed = 0;
        }
    }

    openTrunk() {
        if (this.speed === 0) {
            this.isTrunkOpen = true;
        }
    }

    closeTrunk() {
        this.isTrunkOpen = false;
    }
}

class RaceCar extends Car {
    acceleration;

    constructor(carDetails) {
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go() {
        this.speed += this.acceleration;
    
        if (this.speed > 300) {
          this.speed = 300;
        }
    }
    
    openTrunk() {
        console.log('Race cars do not have a trunk.');
    }
    
    closeTrunk() {
        console.log('Race cars do not have a trunk.');
    }
}

const carLets = [
{
    brand: 'Toyota',
    model: 'Corolla',

},{
    brand: 'Tesla',
    model: 'Model 3',
    speed: 190,
}
].map((carDetails) => {
    return new Car(carDetails);
})

const carf1 = new RaceCar ({
    brand: 'McLaren',
    model: 'F1',
    acceleration: 20
})

console.log(carLets);
console.log(carf1);

carLets.forEach(carItem => {
    carItem.brake();
    carItem.displayInfo();

    carItem.openTrunk();
    carItem.displayInfo();

    carItem.displayInfo();
    carItem.go();
    carItem.brake();
    carItem.brake();
    carItem.displayInfo();

    carItem.openTrunk();
    carItem.go();
    carItem.displayInfo();
});


carf1.go();
carf1.go();
carf1.go();
carf1.displayInfo();
carf1.openTrunk();
carf1.displayInfo();
carf1.brake();
carf1.displayInfo();




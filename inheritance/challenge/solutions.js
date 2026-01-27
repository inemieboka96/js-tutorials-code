// Inheritance Problems Solutions

const titleLog = (message) => {
  const line = "=".repeat(message.length + 8); // adjusts length dynamically
  console.log(`\n${line} ${message.toUpperCase()} ${line}\n`);
};

// Beginner

// Problem 1 - Space Vessel Base Class

class SpaceVessel {
  constructor(name, speed) {
    this.name = name;
    this.fuelLevel = 100; // 100%
    this.speed = speed; // km/s
  }
  // Instance Methods
  travel() {
    if (this.fuelLevel >= 10) {
      this.fuelLevel -= 10;
      console.log(
        `${this.name} traveling at ${this.speed} km/s. Fuel: ${this.fuelLevel}%`,
      );
    } else {
      console.log(`${this.name} cannot travel. Insufficient Fuel`);
    }
  }
}

class CargoShip extends SpaceVessel {
  constructor(name, speed, cargoCapacity) {
    super(name, speed);
    this.cargoCapacity = cargoCapacity;
  }

  // Unique Methods
  loadCargo(weight) {
    if (weight <= this.cargoCapacity) {
      // Weight within range
      console.log(`Loading ${weight} tons of cargo...`);
    } else {
      // Edge Case: Exceeds max capacity
      console.log(
        `Cannot load ${weight} tons onto ${this.name}. Max Capacity: ${this.cargoCapacity} tons.`,
      );
    }
  }
}

// Space Vessel Console Logs
titleLog("Space Vessel Logs");
const uss = new SpaceVessel("USS Enterprise", 5000);
const cargo = new CargoShip("Cargo USS", 3000, 1000);

uss.travel();
cargo.loadCargo(500);

//Problem 2 - Alien Species
class Alien {
  constructor(species, planet, intelligence) {
    this.species = species;
    this.planet = planet;
    this.intelligence = intelligence;
  }

  communicate(name, greeting) {
    console.log(`${name} (${this.species}): "${greeting}"`);
  }
}

class Vulcan extends Alien {
  constructor(planet, intelligence) {
    super(planet, intelligence);
  }
  // Override
  communicate(name, greeting) {
    console.log(`${name} (Vulcan): "${greeting}"`);
  }
}

class Klington extends Alien {
  constructor(planet, intelligence) {
    super(planet, intelligence);
  }
  // Override
  communicate(name, greeting) {
    console.log(`${name} (Klington): "${greeting}"`);
  }
}
// Console Logs
titleLog("Alien Console Logs");
const spok = new Vulcan("T'Khasi", 8);
const worf = new Klington("Qo'noS", 4);

spok.communicate("Spok", "Live long and prosper. Logic dictates cooperation.");
worf.communicate("Worf", "Qapla'! Today is a good day to code!");

// Problem 3 - Robot Hierarchy
class Robot {
  constructor(model) {
    this.model = model;
    this.batteryLife = 100; // 100%
  }

  recharge() {
    if (this.batteryLife === 100)
      console.log(`${this.model} is Already Fully Charged!!`);

    while (this.batteryLife <= 100) {
      this.batteryLife++;
    }
    console.log(`${this.model} is Fully Charged!!`);
  }
}

class CombatRobot extends Robot {
  constructor(model, weaponType) {
    super(model);
    this.weaponType = weaponType;
  }

  attack() {
    console.log(`${this.model} attacking with ${this.weaponType}!`);
  }
}

class MedicalRobot extends Robot {
  constructor(model, medkits) {
    super(model);
    this.medkits = medkits;
  }

  heal() {
    // Edge Case: Invalid no. of medkits
    if (this.medkits <= 0)
      console.log(
        `${this.model} cannot heal patient. Insufficient number of Medkits`
      );

    this.medkits--;
    console.log(
      `${this.model} healing patient. Medkits remaining: ${this.medkits}`
    );
  }
}

// Console Logs
titleLog("Robot Logs");
const t800 = new CombatRobot("T-800","Plasma Sword");
const med9 = new MedicalRobot("MED-9",5);

t800.attack();
med9.heal();

// Intermediate

// Problem 4 - Spaceship Upgrades System

class Spaceship {
  constructor(name,hull,shield) {
    this.name = name;
    this.hull = hull;
    this.shield = shield;
    this.weapons = [];
  }
}

// Advanced

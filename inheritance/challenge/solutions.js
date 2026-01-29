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

// Problem 2 - Alien Species
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
        `${this.model} cannot heal patient. Insufficient number of Medkits`,
      );

    this.medkits--;
    console.log(
      `${this.model} healing patient. Medkits remaining: ${this.medkits}`,
    );
  }
}

// Console Logs
titleLog("Robot Logs");
const t800 = new CombatRobot("T-800", "Plasma Sword");
const med9 = new MedicalRobot("MED-9", 5);

t800.attack();
med9.heal();

// Intermediate

// Problem 4 - Spaceship Upgrades System

class Spaceship {
  // Static Properties
  static repairRange = [];

  constructor(name, hull, shield, weapons) {
    // Basic validation
    if (typeof name !== "string" || name.trim() === "") {
      throw new TypeError("Ship name must be a non-empty string");
    }

    if (typeof hull !== "number" || hull < 0) {
      throw new RangeError("Hull must be a number >= 0");
    }

    if (typeof shield !== "number" || shield < 0 || shield > 100) {
      throw new RangeError("Shield must be between 0 and 100");
    }

    if (!Array.isArray(weapons)) {
      throw new TypeError("Weapons must be an array");
    }

    this.name = name;
    this.hull = hull; // 50 - 2,000HP
    this.shield = shield; // 0–100 (percentage)
    this.weapons = weapons; // Array
    this.maxSpeed = 5000; // 2,000 - 10,000km/s
    this.isUnderRepair = false;
  }

  // Helper Methods
  static isRepairing(spaceship) {
    return spaceship.isUnderRepair;
  }

  takeDamage(amount) {
    // Validate damage input
    if (typeof amount !== "number" || Number.isNaN(amount)) {
      throw new TypeError("Damage amount must be a valid number");
    }

    if (amount < 0) {
      throw new RangeError("Damage amount cannot be negative");
    }

    // Optional: keep your original "0-100" rule
    if (amount > 100) {
      throw new RangeError("Damage amount has to be between 0-100");
    }

    // If ship is already destroyed
    if (this.hull <= 0) {
      return `[ ${this.name} is already destroyed ]`;
    }

    // Shields takes damage first
    const shieldAbsorbed = Math.min(this.shield, amount);
    this.shield -= shieldAbsorbed;

    // Remaining damage destroys hull
    const remainingDamage = amount - shieldAbsorbed;
    this.hull = Math.max(0, this.hull - remainingDamage);

    return `[ ${this.name} takes ${amount} damage  (Shield: ${this.shield}, Hull: ${this.hull}) ]`;
  }

  repair() {
    this.isUnderRepair = true; // Update repair status

    const shieldRepairTime = 25 * 1000;
    const hullRepairTime = 25 * 1000;

    setTimeout(() => this.shield = 100,shieldRepairTime);
    setTimeout(() => this.hull = 100,shieldRepairTime);

    this.isUnderRepair = false; // Update repair status
  }
}

class Fighter extends Spaceship {
  // High speed, Low Hull
}

class Cruiser extends Spaceship {
  // Balanced
}

class Battleship extends Spaceship {
  // High Hull, Slow
}

// Advanced

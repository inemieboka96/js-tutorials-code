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
  // Point Ranges
  static HULL_POINTS = {
    // HP
    BASE: { min: 50, max: 75 },
    FIGHTER: { min: 50, max: 100 },
    CRUISER: { min: 200, max: 500 },
    BATTLESHIP: { min: 800, max: 2000 },
  };

  static MAX_SPEED_RANGE = {
    // km/s
    BASE: { min: 1250, max: 5000 },
    FIGHTER: { min: 7000, max: 10000 },
    CRUISER: { min: 3000, max: 6000 },
    BATTLESHIP: { min: 1000, max: 2000 },
  };

  static REPAIR_RANGE = {
    // seconds
    BASE: { shield: 30, hull: 60 },
    FIGHTER: { shield: 15, hull: 15 },
    CRUISER: { shield: 20, hull: 30 },
    BATTLESHIP: { shield: 30, hull: 45 },
  };

  constructor(name, hull, shield, weapons) {
    validateShipConstructor({ name, hull, shield, weapons, type: "BASE" });

    this.name = name;
    this.hull = hull;
    this.shield = shield;
    this.weapons = weapons;

    const { min, max } = Spaceship.MAX_SPEED_RANGE.BASE;
    this.maxSpeed = Math.round(Math.random() * (max - min) + min);

    this.isUnderRepair = false;
  }

  // Helper Methods
  static isRepairing(spaceship) {
    return spaceship.isUnderRepair;
  }
  // Constructor Validation
  static validateShipConstructor({
    name,
    hull,
    shield,
    weapons,
    type = "BASE",
  }) {
    // Validate type exists in your ranges
    if (!Spaceship.HULL_POINTS[type] || !Spaceship.MAX_SPEED_RANGE[type]) {
      throw new Error(`Invalid ship type "${type}"`);
    }

    // Name
    if (typeof name !== "string" || name.trim() === "") {
      throw new TypeError("Ship name must be a non-empty string");
    }

    // Hull
    if (typeof hull !== "number" || Number.isNaN(hull)) {
      throw new TypeError("Hull must be a valid number");
    }

    const { min: hullMin, max: hullMax } = Spaceship.HULL_POINTS[type];
    if (hull < hullMin || hull > hullMax) {
      throw new RangeError(
        `${type} hull must be between ${hullMin} and ${hullMax}`,
      );
    }

    // Shield
    if (typeof shield !== "number" || Number.isNaN(shield)) {
      throw new TypeError("Shield must be a valid number");
    }

    if (shield < 0 || shield > 100) {
      throw new RangeError("Shield must be between 0 and 100");
    }

    // Weapons
    if (!Array.isArray(weapons)) {
      throw new TypeError("Weapons must be an array");
    }

    return true;
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
    // Edge Case: Already under repair
    if (this.isUnderRepair) {
      throw new Error(`[ ${this.name} is already under repair ]`);
    }
    // Edge Case: Completely destroyed ship
    if (this.hull <= 0) {
      throw new Error(`[ ${this.name} is destroyed!! ]`);
    }

    const { min, max } = Spaceship.HULL_POINTS.BASE; // Get appropriate range
    this.isUnderRepair = true; // Update repair status

    const shieldRepairTime = Spaceship.REPAIR_RANGE.BASE.shield * 1000;
    const hullRepairTime = Spaceship.REPAIR_RANGE.BASE.hull * 1000;

    let shieldDone = false;
    let hullDone = false;

    // Helper Function
    const finishRepair = () => {
      if (shieldDone && hullDone) {
        this.isUnderRepair = false;
        console.log(
          `${this.name} has been repaired. Shield: ${this.shield}%. Hull: ${this.hull}HP`,
        );
      }
    };
    // Shield Repair
    setTimeout(() => {
      this.shield = 100;
      shieldDone = true;
      finishRepair();
    }, shieldRepairTime);

    // Hull Repair
    setTimeout(() => {
      const repairedHull = Math.round(Math.random() * (max - min) + min);
      // Ensured hull points aren't lower than the OG value before repair
      this.hull = Math.max(this.hull, repairedHull);
      hullDone = true;
      finishRepair();
    }, hullRepairTime);

    console.log(`[ ${this.name} repair started ]`);
  }
}

class Fighter extends Spaceship {
  constructor(name, hull, shield, weapons) {
    validateShipConstructor({ name, hull, shield, weapons, type: "FIGHTER" });
    super(name, hull, shield, weapons);

    const { min, max } = Spaceship.MAX_SPEED_RANGE.FIGHTER;
    this.maxSpeed = Math.round(Math.random() * (max - min) + min);
  }
}

class Cruiser extends Spaceship {
  constructor(name, hull, shield, weapons) {
    validateShipConstructor({ name, hull, shield, weapons, type: "CRUISER" });
    super(name, hull, shield, weapons);

    const { min, max } = Spaceship.MAX_SPEED_RANGE.CRUISER;
    this.maxSpeed = Math.round(Math.random() * (max - min) + min);
  }
}

class Battleship extends Spaceship {
  constructor(name, hull, shield, weapons) {
    validateShipConstructor({ name, hull, shield, weapons, type: "BATTLESHIP" });
    super(name, hull, shield, weapons);

    const { min, max } = Spaceship.MAX_SPEED_RANGE.BATTLESHIP;
    this.maxSpeed = Math.round(Math.random() * (max - min) + min);
  }
}

// Advanced

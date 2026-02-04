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
  static SHIP_TYPES = ["BASE", "FIGHTER", "CRUISER", "BATTLESHIP"];
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
  // Base Constructor
  constructor(name, hull, shield, weapons, type = Spaceship.SHIP_TYPES[0]) {
    Spaceship.validateShipConstructor({
      name,
      hull,
      shield,
      weapons,
      type,
    });

    this.name = name;
    this.hull = hull;
    this.shield = shield;
    this.weapons = weapons;

    const { min, max } = Spaceship.MAX_SPEED_RANGE[type];
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

  static damageLog(attacker, target, specialMove) {
    console.log(`[${attacker} attacks ${target} with ${specialMove}]`);
  }

  static calculateBaseDamage(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  // Combat Simulator ⚔️
  static simulateCombat(ship1, ship2) {
    console.log(
      `--- ⚔️ COMBAT INITIATED: ${ship1.name} VS ${ship2.name} ⚔️ ---`,
    );

    let round = 1; // Start at Round 1

    // Combat loop: continues until one ship is destroyed
    while (ship1.hull > 0 && ship2.hull > 0) {
      console.log(`\n--- ROUND ${round} ---`);

      // Helper to execute a random special attack from a ship's available methods
      const executeTurn = (attacker, target) => {
        // Edge Case: Attacker is under repair and skips turn
        if (attacker.isUnderRepair) {
          console.log(
            `[ ${attacker.name} is busy repairing and skips the attack! ]`,
          );
          return;
        }

        // Get all special attack methods (excluding standard class methods/properties)
        const specialAttacks = Object.getOwnPropertyNames(
          Object.getPrototypeOf(attacker),
        ).filter(
          (prop) =>
            typeof attacker[prop] === "function" &&
            prop !== "constructor" &&
            prop !== "takeDamage" &&
            prop !== "repair" &&
            prop !== "getStatus",
        );

        // Edge Case: Ship has no special attacks (Base Spaceship)
        if (specialAttacks.length === 0) {
          console.log(`[ ${attacker.name} has no weapons systems online! ]`);
          return;
        }

        // Pick a random attack and fire
        const randomAttack =
          specialAttacks[Math.floor(Math.random() * specialAttacks.length)];

        // Nova Cannon returns a string, others log internally
        const battleReport = attacker[randomAttack](target); // i.e. attacker.randomAttack(target)
        if (battleReport) console.log(battleReport);
      };

      // Ship 1 Attacks
      executeTurn(ship1, ship2);

      // Check if Ship 2 was destroyed before it can retaliate
      if (ship2.hull <= 0) break;

      // Ship 2 Attacks
      executeTurn(ship2, ship1);

      round++;

      // Edge Case: Infinite loop prevention (Safety)
      if (round > 50) {
        console.log("--- ⚠️ COMBAT STALEMATE: Fuel Exhausted ---");
        break;
      }
    }

    // Final Results
    console.log("\n==============================");
    if (ship1.hull > 0 && ship2.hull <= 0) {
      console.log(`🏆 VICTOR: ${ship1.name} wins the battle!`);
    } else if (ship2.hull > 0 && ship1.hull <= 0) {
      console.log(`🏆 VICTOR: ${ship2.name} wins the battle!`);
    } else {
      console.log("💀 MUTUAL DESTRUCTION: No survivors.");
    }
    console.log("==============================");
  }

  // Instance Methods
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

  getStatus() {
    const healthPercent =
      this.hull > 0
        ? ((this.hull / Spaceship.HULL_POINTS.BATTLESHIP.max) * 100).toFixed(1)
        : 0;

    const statusEmoji =
      this.hull <= 0
        ? "☠️ DESTROYED"
        : this.isUnderRepair
          ? "🛠️ REPAIRING"
          : "🚀 ACTIVE";

    return `
--- SHIP STATUS: ${this.name} ---
Status:  ${statusEmoji}
Hull:    ${this.hull} HP
Shield:  ${this.shield}%
Speed:   ${this.maxSpeed} km/s
Repair:  ${this.isUnderRepair ? "In Progress..." : "Ready"}
----------------------------`.trim();
  }
}

class Fighter extends Spaceship {
  constructor(name, hull, shield, weapons) {
    super(name, hull, shield, weapons, Spaceship.SHIP_TYPES[1]);

    const { min, max } = Spaceship.MAX_SPEED_RANGE.FIGHTER;
    this.maxSpeed = Math.round(Math.random() * (max - min) + min);
  }

  // --- FIGHTER SPECIAL ATTACKS ---
  // Formula: Damage = (Random 15-25) + (maxSpeed / 1000)
  afterburnBlitz(target) {
    // Edge Case: Attacker is destroyed
    if (this.hull <= 0) return;
    // Edge Case: Target is already destroyed
    if (target.hull <= 0)
      return console.log(`[ ${target.name} is already stardust ]`);

    const damage = Spaceship.calculateBaseDamage(15, 25) + this.maxSpeed / 1000;

    const result = target.takeDamage(damage);
    Spaceship.damageLog(this.name, target.name, "Afterburn Blitz");
    console.log(result);
  }

  // Formula: Damage = 20 (Multiplier: 1.5x if target shield >= 50)
  piercingThrust(target) {
    // Edge Case: Attacker is destroyed
    if (this.hull <= 0) return;

    let damage = 20;
    // Edge Case: High shield penetration logic
    if (target.shield >= 50) {
      damage *= 1.5;
    }

    const result = target.takeDamage(damage);
    Spaceship.damageLog(this.name, target.name, "Piercing Thrust");
    console.log(result);
  }
}

class Cruiser extends Spaceship {
  constructor(name, hull, shield, weapons) {
    super(name, hull, shield, weapons, Spaceship.SHIP_TYPES[2]);

    const { min, max } = Spaceship.MAX_SPEED_RANGE.CRUISER;
    this.maxSpeed = Math.round(Math.random() * (max - min) + min);
  }
  // --- CRUISER SPECIAL ATTACKS ---
  // Formula: Damage = Random 30-45 (Effect: Disrupts target repair status)
  ionPulseWave(target) {
    // Edge Case: Target is already disabled/repairing
    const wasRepairing = target.isUnderRepair;

    const damage = Spaceship.calculateBaseDamage(30, 45);
    const result = target.takeDamage(damage);

    // Disrupt repair systems
    target.isUnderRepair = false;

    Spaceship.damageLog(this.name, target.name, "Ion Pulse Wave");
    if (wasRepairing)
      console.log(`[ Alert: ${target.name}'s repair sequence interrupted! ]`);
    console.log(result);
  }

  // Formula: Damage = (10 * missilesLanded[1-5]) - (targetShield / 20)
  missileBarrage(target) {
    // Edge Case: Attacker low on hull (accuracy penalty)
    const accuracyMod = this.hull < 50 ? 0.5 : 1;
    const missilesLanded = Math.round(
      Spaceship.calculateBaseDamage(1, 5) * accuracyMod,
    );

    // Edge Case: Zero missiles land
    if (missilesLanded === 0)
      return console.log(`[ ${this.name}'s missiles missed target! ]`);

    const damage = 10 * missilesLanded - target.shield / 20;
    const result = target.takeDamage(Math.max(0, damage));

    Spaceship.damageLog(
      this.name,
      target.name,
      `Missile Barrage (${missilesLanded} hits)`,
    );
    console.log(result);
  }
}

class Battleship extends Spaceship {
  constructor(name, hull, shield, weapons) {
    super(name, hull, shield, weapons, Spaceship.SHIP_TYPES[3]);

    const { min, max } = Spaceship.MAX_SPEED_RANGE.BATTLESHIP;
    this.maxSpeed = Math.round(Math.random() * (max - min) + min);
  }

  // --- BATTLESHIP SPECIAL ATTACKS ---
  // Formula: Damage = (Random 40-60) + (currentHull / 100) (Effect: Bypasses shields)
  orbitalRailgun(target) {
    // Edge Case: Target has no hull left
    if (target.hull <= 0) return;

    const damage = Spaceship.calculateBaseDamage(40, 60) + this.hull / 100;

    // Edge Case: Shield Bypass Logic
    // Directly subtracting from hull as per original intent
    target.hull = Math.max(0, target.hull - damage);

    Spaceship.damageLog(
      this.name,
      target.name,
      "Orbital Railgun (Shields Bypassed)",
    );
    console.log(
      `[ ${target.name} Hull directly impacted: ${target.hull} HP remaining ]`,
    );
  }

  // Formula: Damage = (50 * (currentHull / maxBattleshipHull)) + (consumedShield * 1.5)
  novaCannon(target) {
    // Edge Case: Ship destroyed
    if (this.hull <= 0) return "🚨 Cannot fire: Ship destroyed!";
    // Edge Case: Insufficient shields to fire
    if (this.shield <= 10)
      return "🚨 Nova Cannon requires at least 10% shield to prime!";

    const basePower = 50;
    const integrity = this.hull / Spaceship.HULL_POINTS.BATTLESHIP.max;
    const shieldFuel = this.shield;

    this.shield = 0; // Drain fuel

    const totalDamage = Math.round(basePower * integrity + shieldFuel * 1.5);
    const result = target.takeDamage(totalDamage);

    Spaceship.damageLog(this.name, target.name, "NOVA CANNON");
    return `
--- 🛰️ NOVA CANNON ACTIVATED ---
[ Energy compression: ${(integrity * 100).toFixed(0)}% ]
[ Shield fuel consumed: ${shieldFuel} units ]
[ TOTAL BLAST RADIUS: ${totalDamage} DMG ]
${result}
-------------------------------`.trim();
  }
}
// Console Logs
titleLog("Spaceship Logs");

// 1. The Speedy Fighter 🏎️💨
const interceptor = new Fighter(
  "Star-Slayer",
  70, // Hull (Range: 50-100)
  100, // Shield (Range: 0-100)
  ["Laser Cannons", "Afterburners"],
);

// 2. The Tactical Cruiser 🛰️📡
const vanguard = new Cruiser(
  "Nebula-Guard",
  350, // Hull (Range: 200-500)
  80, // Shield (Range: 0-100)
  ["Ion Pulse", "Missile Pods"],
);

// 3. The Heavy Battleship 🏢💥
const titan = new Battleship(
  "Galactic-Behemoth",
  1500, // Hull (Range: 800-2000)
  90, // Shield (Range: 0-100)
  ["Orbital Railgun", "Nova Cannon"],
);

// --- Quick Status Check ---
console.log(interceptor.getStatus());
console.log(vanguard.getStatus());
console.log(titan.getStatus());

// Battle
Spaceship.simulateCombat(vanguard, titan);

// Problem 5 - Planetary Colony Management

class Colony {
  // Static Properties
  static MAX_RESOURCES = {
    // Total allocated points = 75
    BASE_COLONY: { food: 25, minerals: 25, technology: 25 },
    MINING_COLONY: { food: 5, minerals: 40, technology: 30 },
    RESEARCH_COLONY: { food: 25, minerals: 10, technology: 35 },
    AGRICULTURAL_COLONY: { food: 50, minerals: 10, technology: 15 },
  };

  static MAX_CONSUMPTION = Object.fromEntries(
    Object.entries(Colony.MAX_RESOURCES).map(([colonyType, resources]) => [
      colonyType,
      {
        food: Math.ceil(resources.food * 0.5), // consume up to 50% of max per cycle
        minerals: Math.ceil(resources.minerals * 0.3), // 30% of max
        technology: Math.ceil(resources.technology * 0.2), // 20% of max
      },
    ]),
  );

  static THRESHOLDS = Object.fromEntries(
    Object.entries(Colony.MAX_RESOURCES).map(([colonyType, resources]) => [
      colonyType,
      {
        foodThreshold: Math.floor(resources.food / 2),
        mineralsThreshold: Math.floor(resources.minerals / 2),
        technologyThreshold: Math.floor(resources.technology / 2),
      },
    ]),
  );
  // Parent Constructor
  constructor(population = 0, resources = {}, morale = 0) {
    this.population = population; // 1,000 - 50,000
    this.resources = {
      // Default properties
      food: resources.food ?? 0,
      minerals: resources.minerals ?? 0,
      technology: resources.technology ?? 0,
    };
    this.morale = morale; // Max 10
  }
  // Methods
  produce() {
    // Edge Case: No resources
    if (!this.resources || Object.keys(this.resources).length === 0) {
      this.resources = { food: 0, minerals: 0, technology: 0 };
    }

    // Determine Colony Type
    const colonyType = this.constructor.name
      .replace(/COLONY$/i, "_COLONY")
      .toUpperCase(); // e.g. "BASE_COLONY";

    // Get the specific maxValues for the colony type
    const maxResources = Colony.MAX_RESOURCES[colonyType];

    // Assign corresponding points
    const {
      food: maxFood,
      minerals: maxMinerals,
      technology: maxTech,
    } = maxResources;

    // Generate resource Points
    const foodPoints = Math.floor(Math.random() * (maxFood + 1));
    const mineralPoints = Math.floor(Math.random() * (maxMinerals + 1));
    const techPoints = Math.floor(Math.random() * (maxTech + 1));

    // Add to current
    this.resources.food += foodPoints;
    this.resources.minerals += mineralPoints;
    this.resources.technology += techPoints;

    // Log to Console
    console.log(
      `🚀 ${colonyType} Production Report:
   🍎 Food      : +${foodPoints}
   ⛏ Minerals  : +${mineralPoints}
   💡 Technology: +${techPoints}`,
    );
  }

  consume() {
    // Ensure resources exist
    if (!this.resources) {
      this.resources = { food: 0, minerals: 0, technology: 0 };
    }

    // Determine colony type
    const colonyType = this.constructor.name
      .replace(/COLONY$/i, "_COLONY")
      .toUpperCase();

    // Get max consumption values
    const maxConsumptionPoints = Colony.MAX_CONSUMPTION[colonyType];

    // Subtract resources safely
    this.resources.food = Math.max(
      0,
      this.resources.food - maxConsumptionPoints.food,
    );
    this.resources.minerals = Math.max(
      0,
      this.resources.minerals - maxConsumptionPoints.minerals,
    );
    this.resources.technology = Math.max(
      0,
      this.resources.technology - maxConsumptionPoints.technology,
    );

    // Reduce morale if food runs out
    if (this.resources.food === 0) {
      this.morale = Math.max(0, this.morale - 1);
    }

    // Log consumption with emojis
    console.log(
      `🛡 ${colonyType} Consumption Report:
   🍎 Food      : -${maxConsumptionPoints.food}
   ⛏ Minerals  : -${maxConsumptionPoints.minerals}
   💡 Technology: -${maxConsumptionPoints.technology}
   😟 Morale    : ${this.morale}`,
    );
  }

  grow() {
    // Get Colony Type & Format it
    const colonyType = this.constructor.name
      .replace(/COLONY$/i, "_COLONY")
      .toUpperCase();

    // Edge Case: No resources
    if (!this.resources) {
      this.resources = { food: 0, minerals: 0, technology: 0 };
    }

    // Keep track of starting population & morale
    const startPopulation = this.population;
    const startMorale = this.morale;

    // Threshold used to decide if food is "enough"
    const foodThreshold = Colony.THRESHOLDS[colonyType].foodThreshold;

    // Track Population Changes
    let foodDeltaPop = 0; // population change due to food
    let moraleDeltaPop = 0; // population change due to morale
    let colonyDeltaPop = 0; // population change due to colony type bonus/penalty

    // Track Morale Changes
    let moraleDelta = 0;

    // 10% of current population
    const foodPeopleChange = (this.resources.food / 10) * 1000;

    if (this.resources.food >= foodThreshold) {
      // Food is sufficient: increase population
      this.population += foodPeopleChange;
      foodDeltaPop = foodPeopleChange; // positive delta
    } else {
      // Food is insufficient: decrease population
      this.population -= foodPeopleChange;
      foodDeltaPop = -foodPeopleChange; // -500 (negative delta)
    }

    // Morale Modifier
    if (this.morale >= 5) {
      // Morale boost
      this.morale += 0.5;
      moraleDelta += 0.5;

      // Population bonus (10% increase)
      const bonus = this.population * 0.1;
      this.population += bonus;

      // Positive delta because this adds population
      moraleDeltaPop = bonus;
    } else {
      // Morale penalty
      this.morale -= 1;
      moraleDelta -= 1;

      // Population penalty (25% decrease)
      const penalty = this.population * 0.25;
      this.population -= penalty;

      // Negative delta because this removes population
      // Unary minus converts a positive number into a negative number
      moraleDeltaPop = -penalty;
    }

    // Colony Type Modifier
    if (colonyType === "BASE_COLONY") {
      // Base population boost
      const bonus = this.population * 0.05;
      this.population += bonus;
      colonyDeltaPop = bonus;
      // Morale increase
      this.morale += 0.25;
      moraleDelta += 0.25;
    } else if (colonyType === "MINING_COLONY") {
      // Mining colonies lose a bit of population (harsh conditions)
      const penalty = this.population * 0.05;
      this.population -= penalty;

      // Store negative delta for reporting
      colonyDeltaPop = -penalty;

      this.morale += 0.1;
      moraleDelta += 0.1;
    } else if (colonyType === "RESEARCH_COLONY") {
      // Research colonies gain population moderately
      const bonus = this.population * 0.1;
      this.population += bonus;
      colonyDeltaPop = bonus;

      this.morale += 0.5;
      moraleDelta += 0.5;
    } else if (colonyType === "AGRICULTURAL_COLONY") {
      // Agricultural colonies gain population heavily (food-driven growth)
      const bonus = this.population * 0.3;
      this.population += bonus;
      colonyDeltaPop = bonus;

      this.morale += 1;
      moraleDelta += 1;
    }

    // Safeguards
    this.population = Math.max(0, Math.floor(this.population));
    this.morale = Math.min(10, Math.max(0, Number(this.morale.toFixed(2))));

    // Store final values
    const endPopulation = this.population;
    const endMorale = this.morale;

    const netPopChange = endPopulation - startPopulation;
    const netMoraleChange = endMorale - startMorale;

    // Growth Report Console Log
    console.log(
      `📈 ${colonyType} Growth Report:
👥 Population: ${startPopulation.toLocaleString()} → ${endPopulation.toLocaleString()} (${netPopChange >= 0 ? "+" : ""}${netPopChange.toLocaleString()})
🙂 Morale    : ${startMorale} → ${endMorale} (${netMoraleChange >= 0 ? "+" : ""}${netMoraleChange})

🍎 Food: ${this.resources.food} (Threshold: ${foodThreshold})
   Food Impact     : ${foodDeltaPop >= 0 ? "+" : ""}${Math.floor(foodDeltaPop).toLocaleString()} people
   Morale Impact   : ${moraleDeltaPop >= 0 ? "+" : ""}${Math.floor(moraleDeltaPop).toLocaleString()} people
   Colony Modifier : ${colonyDeltaPop >= 0 ? "+" : ""}${Math.floor(colonyDeltaPop).toLocaleString()} people`,
    ); // If deltas are positive, add a "+" sign
  }

  // Resource Sharing System
  shareResources(colony, resource, points) {}
}

// Child Classes
class MiningColony extends Colony {
  constructor(population = 0, morale = 0) {
    super(population, {}, morale);
  }
}

class ResearchColony extends Colony {
  constructor(population = 0, morale = 0) {
    super(population, {}, morale);
  }
}

class AgriculturalColony extends Colony {
  constructor(population = 0, morale = 0) {
    super(population, {}, morale);
  }
}

// Console Logs

// Advanced

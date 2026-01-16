// Fantasy RPG - Static Keyword Practice Problems Solutions

//  Console Log Title
const titleLog = (message) => {
  const line = "=".repeat(message.length + 8); // adjusts length dynamically
  console.log(`\n${line} ${message.toUpperCase()} ${line}\n`);
};

// Beginner Level
//Problem 1: Spell Registry
class Spell {
  static spellCount = 0;

  constructor(name, manaCost) {
    this.id = Spell.spellCount++; // Increment spell count
    this.name = name;
    this.manaCost = manaCost;
  }

  // Static Methods
  static getTotalSpells() {
    return this.spellCount;
  }
}

titleLog("Spell Registry Details");
const spells = [
  new Spell("Fireball", 50),
  new Spell("Ice Blast", 40),
  new Spell("Heal", 30),
];

console.log(`Total Spells in grimoire: ${Spell.getTotalSpells()}`);

spells.forEach((s) => {
  console.log(`Spell created: ${s.name} (Cost: ${s.manaCost} mana)`);
});

// Problem 2: Potion Factory
class Potion {
  constructor(name, type, power) {
    this.name = name;
    this.type = type;
    this.power = power;
  }
  //   Static Methods
  static createHealthPotion(name) {
    return new Potion(name, "health", 50);
  }

  static createManaPotion(name) {
    return new Potion(name, "mana", 30);
  }

  // Instance Method
  use() {
    if (this.type === "health") {
      return `Restores ${this.power} health`;
    }
    if (this.type === "mana") {
      return `Restores ${this.power} mana`;
    }
  }
}

titleLog("Potion Factory Details");

const potions = [
  Potion.createHealthPotion("Minor Health Potion"),
  Potion.createManaPotion("Mana Elixir"),
];

potions.forEach((potion) =>
  console.log(`Used ${potion.name}: ${potion.use()}`)
);

// Problem 4: Damage Calculator
class Weapon {
  // Static Methods
  static calculatePhysicalDamage(attackPower, defense) {
    return attackPower - defense;
  }

  static calculateMagicalDamage(spellPower, resistance) {
    // Edge Case: Minimum 0
    return resistance > spellPower ? 0 : spellPower - resistance;
  }
}

titleLog("Damage Calculator Details");

const weaponLogs = [
  {
    label: "Physical damage dealt",
    value: Weapon.calculatePhysicalDamage(80, 45),
  },
  {
    label: "Magical damage dealt",
    value: Weapon.calculateMagicalDamage(100, 55),
  },
  {
    label: "Magical damage dealt",
    value: Weapon.calculateMagicalDamage(20, 100),
  },
];

weaponLogs.forEach(({ label, value }) => {
  console.log(`${label}: ${value}`);
});

// Intermediate Level
// Problem 4: Hero ID Generator
class Hero {
  static nextId = 1;

  constructor(name, rpgClass) {
    // Each new hero gets a unique sequential ID
    this.id = Hero.nextId++;
    this.name = name;
    this.rpgClass = rpgClass;
  }

  static resetIdCounter() {
    Hero.nextId = 1;
    console.log("IDs reset!");
  }

  displayInfo() {
    console.log(
      `Hero Created: ${this.name} (ID: ${this.id}) - ${this.rpgClass}`
    );
  }
}

titleLog("Heroes Details");
const heroes = [
  new Hero("Aragorn", "Warrior"),
  new Hero("Gandalf", "Mage"),
  new Hero("Legolas", "Archer"),
];

heroes.forEach((hero) => hero.displayInfo());
Hero.resetIdCounter();
const frodo = new Hero("Frodo", "Rogue");
frodo.displayInfo();

// Problem 5: Monster Bestiary
class Monster {
  static bestiary = [];
  constructor(name, type, health, level) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;

    Monster.bestiary.push(this); // Add monsters to arr after creation
  }
  // Static Methods
  static getTotalMonsters() {
    return this.bestiary.length;
  }

  static findByName(name) {
    const found = this.bestiary.find((beast) => beast.name === name);

    if (found) {
      console.log(
        `Found monster: ${found.name} (Type: ${found.type}, Level: ${found.level})`
      );
    } else {
      console.log(`${name} not found`);
    }
  }

  static findByType(type) {
    const specificType = this.bestiary.filter((beast) => beast.type === type);
    // Edge Case: empty arr
    if (specificType.length === 0) {
      console.log(`No ${type}-type monsters found`);
      return;
    }
    console.log(`${type}-type monsters: ${specificType.length}`);
    specificType.forEach((s) => {
      console.log(` -${s.name} (Level: ${s.level})`);
    });
  }
}

titleLog("Monster Details");
const monsters = [
  new Monster("Dwarf", "Humanoid", 50, 6),
  new Monster("Goblin", "Humanoid", 35, 3),
  new Monster("Fire Drake", "Fire", 200, 10),
  new Monster("Phoenix", "Fire", 30, 15),
];

console.log(`Total monsters in bestiary: ${Monster.getTotalMonsters()}`);
Monster.findByName("Goblin");
Monster.findByType("Fire");

// Problem 6: Guild Validator
class Guild {
  constructor(name, leaderLevel, treasury) {
    // Validations
    if (!Guild.isValidGuildName(name))
      throw new Error("Guild name must be at 3-20 characters");
    if (!Guild.meetsLevelRequirements(leaderLevel))
      throw new Error("Leader must be level 10 or higher");
    if (!Guild.hasRequiredGold(treasury))
      throw new Error("Need at least 1000 gold to form a guild");

    this.name = name;
    this.leaderLevel = leaderLevel;
    this.treasury = treasury;
  }
  // Static Helper Methods
  static isValidGuildName(name) {
    return name.length >= 3 && name.length <= 20 && !/\d/.test(name);
  }

  static meetsLevelRequirements(level) {
    return level >= 10;
  }

  static hasRequiredGold(gold) {
    return gold >= 1000;
  }
}

titleLog("Guild Details");
const dragonSlayers = new Guild("Dragon Slayers", 12, 10001);

console.log(`Guild Created: ${dragonSlayers.name}`);

const rejectedGuildData = [
  ["D", 11, 2000],
  ["Valadon", 6, 1200],
  ["Happy Monsters", 16, 800],
];

rejectedGuildData.forEach(([name, level, gold]) => {
  try {
    new Guild(name, level, gold);
  } catch (error) {
    console.error("Error:", error.message);
  }
});

// Advanced Level
// TODO: Complete tomorrow. got tired :(
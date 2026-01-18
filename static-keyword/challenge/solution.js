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

titleLog("Spell Registry Console Logs");
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

titleLog("Potion Factory Console Logs");

const potions = [
  Potion.createHealthPotion("Minor Health Potion"),
  Potion.createManaPotion("Mana Elixir"),
];

potions.forEach((potion) =>
  console.log(`Used ${potion.name}: ${potion.use()}`),
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

titleLog("Damage Calculator Console Logs");

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
      `Hero Created: ${this.name} (ID: ${this.id}) - ${this.rpgClass}`,
    );
  }
}

titleLog("Heroes Console Logs");
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
        `Found monster: ${found.name} (Type: ${found.type}, Level: ${found.level})`,
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

titleLog("Monster Console Logs");
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
    // Validation
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

titleLog("Guild Console Logs");
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
// Problem 7: Element Effectiveness System

class Element {
  static ELEMENTS = ["Fire", "Ice", "Lightning", "Earth"];
  // Static Method
  static isValidElement(element) {
    return this.ELEMENTS.includes(element);
  }

  static getEffectiveness(attackElement, defenseElement) {
    // Element Validation
    if (!Element.isValidElement(attackElement))
      throw new Error("Invalid Attack Element");
    if (!Element.isValidElement(defenseElement))
      throw new Error("Invalid Defense Element");
    if (
      !Element.isValidElement(attackElement) &&
      !Element.isValidElement(defenseElement)
    )
      throw new Error("Invalid Attack & Defense Element");
    // Edge Case: Same element
    if (attackElement === defenseElement) {
      return "0.5x";
    }
    if (attackElement === "Fire" && defenseElement === "Ice") {
      return "2x";
    }
    if (attackElement === "Ice" && defenseElement === "Earth") {
      return "2x";
    }
    if (attackElement === "Earth" && defenseElement === "Lightning") {
      return "2x";
    }
    if (attackElement === "Lightning" && defenseElement === "Fire") {
      return "2x";
    }
    return "1x";
  }
}

titleLog("Element Console Logs");
// Element Match Ups
const matchups = [
  ["Fire", "Ice"],
  ["Ice", "Fire"],
  ["Fire", "Fire"],
  ["Lightning", "Earth"],
  ["Fire", "Earth"],
];

matchups.forEach(([att, def]) => {
  console.log(`${att} vs ${def}: ${Element.getEffectiveness(att, def)} damage`);
});

// Problem 8: Dungeon Instance Manager
class Dungeon {
  static activeDungeons = [];
  static maxDungeons = 5;
  static nextId = 1;

  constructor(name, difficulty) {
    this.id = Dungeon.nextId++;
    this.name = name;
    this.difficulty = difficulty;
    this.createdAt = new Date();

    Dungeon.activeDungeons.push(this); // Add to active list
  }

  // Static Methods
  static createInstance(name, difficulty) {
    // Edge Case: MAX DUNGEONS
    if (this.activeDungeons.length >= this.maxDungeons) {
      throw new RangeError("Max no. of dungeons reached!!");
    }
    const newDungeon = new Dungeon(name, difficulty);
    console.log(
      `Dungeon created: ${newDungeon.name} (${newDungeon.difficulty}) - ID: ${newDungeon.id}`,
    );
  }

  static closeInstance(dungeonId) {
    const foundIdx = this.activeDungeons.findIndex((d) => d.id === dungeonId);

    // Edge Case: Not Found
    if (foundIdx === -1) {
      throw new Error("Dungeon ID not found");
    }

    const foundDungeon = this.activeDungeons[foundIdx];
    console.log(`Dungeon closed: ${foundDungeon.name}`);
    this.activeDungeons.splice(foundIdx, 1); // Remove from arr
  }

  static getActiveCount() {
    return this.activeDungeons.length;
  }

  static findByDifficulty(difficulty) {
    const filteredDiff = this.activeDungeons.filter(
      (d) => d.difficulty === difficulty,
    );

    if (filteredDiff.length === 0) {
      throw new Error(`No ${difficulty} dungeons present`);
    }
    return filteredDiff;
  }
}
titleLog("Dungeon Console Logs");
// Difficulty Enums
const difficulty = Object.freeze({
  EASY: "Easy",
  NORMAL: "Normal",
  HARD: "Hard",
});

const dungeonDetails = [
  ["Shadow Crypt", difficulty.EASY],
  ["Dragon's Lair", difficulty.HARD],
];

dungeonDetails.forEach(([name, diff]) => {
  Dungeon.createInstance(name, diff);
});

console.log(`Active Dungeons: ${Dungeon.getActiveCount()}`);
console.log(
  `Hard Dungeon: ${Dungeon.findByDifficulty(difficulty.HARD).length}`,
);
Dungeon.closeInstance(1);
console.log(`Active Dungeons: ${Dungeon.getActiveCount()}`);

// TODO: Implement better solution
// Problem 9: Loot Rarity System
class Item {
  static RARITY_NAMES = {
    COMMON: 1,
    UNCOMMON: 2,
    RARE: 3,
    LEGENDARY: 4,
  };

  static ITEM_NAMES = {
    commonItems: [
      "Rusty Key",
      "Cloth Cap",
      "Old Boot",
      "Stone Pebble",
      "Iron Bolt",
      "Stick",
    ],
    uncommonItems: [
      "Steel Blade",
      "Oak Shield",
      "Silk Tunic",
      "Iron Ring",
      "Boar Hide",
      "Bronze Cup",
    ],
    rareItems: [
      "Jade Idol",
      "Soul Gem",
      "Frost Bow",
      "Rune Plate",
      "Void Pearl",
      "Fire Wand",
    ],
    legendaryItems: [
      "Excalibur",
      "Dragon Eye",
      "Star Forge",
      "Aegis Wing",
      "Sun Scepter",
      "Titan Belt",
    ],
  };
  constructor(name, rarity, value) {
    this.name = name;
    this.rarity = rarity;
    this.value = value;
  }

  // Static Methods
  static genRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static generateLoot(rarityLevel) {
    const dropNum = this.genRandomInt(0, 100);
    switch (rarityLevel) {
      case 1: // COMMON
        console.log(
          `Attempting ${Object.keys(this.RARITY_NAMES)[rarityLevel - 1]} Loot`,
        );
        if (dropNum < 50) {
          // 50% Drop Rate
          const randItemName = this.genRandomInt(
            0,
            this.ITEM_NAMES.commonItems.length - 1,
          );
          const randGold = this.genRandomInt(10, 20); // 10-20 gold
          console.log(
            `Dropped: ${this.ITEM_NAMES.commonItems[randItemName]} (Common) - ${randGold} gold`,
          );
          return new Item(
            this.ITEM_NAMES.commonItems[randItemName],
            "Common",
            randGold,
          );
        } else {
          console.log("No drop!");
        }
        break;

      case 2: // UNCOMMON
        console.log(
          `Attempting ${Object.keys(this.RARITY_NAMES)[rarityLevel - 1]} Loot`,
        );
        if (dropNum < 30) {
          // 30% Drop Rate
          const randItemName = this.genRandomInt(
            0,
            this.ITEM_NAMES.uncommonItems.length - 1,
          );
          const randGold = this.genRandomInt(50, 100); // 50-100 gold
          console.log(
            `Dropped: ${this.ITEM_NAMES.uncommonItems[randItemName]} (Uncommon) - ${randGold} gold`,
          );
          return new Item(
            this.ITEM_NAMES.uncommonItems[randItemName],
            "Uncommon",
            randGold,
          );
        } else {
          console.log("No drop!");
        }
        break;

      case 3: // RARE
        console.log(
          `Attempting ${Object.keys(this.RARITY_NAMES)[rarityLevel - 1]} Loot`,
        );
        if (dropNum < 15) {
          // 15% Drop Rate
          const randItemName = this.genRandomInt(
            0,
            this.ITEM_NAMES.rareItems.length - 1,
          );
          const randGold = this.genRandomInt(200, 500); // 200-500 gold
          console.log(
            `Dropped: ${this.ITEM_NAMES.rareItems[randItemName]} (Rare) - ${randGold} gold`,
          );
          return new Item(
            this.ITEM_NAMES.rareItems[randItemName],
            "Rare",
            randGold,
          );
        } else {
          console.log("No drop!");
        }
        break;

      case 4: // LEGENDARY
        console.log(
          `Attempting ${Object.keys(this.RARITY_NAMES)[rarityLevel - 1]} Loot`,
        );
        if (dropNum < 5) {
          // 5% Drop Rate
          const randItemName = this.genRandomInt(
            0,
            this.ITEM_NAMES.legendaryItems.length - 1,
          );
          const randGold = this.genRandomInt(1000, 5000); // 1,000 - 5,000 gold
          console.log(
            `Dropped: ${this.ITEM_NAMES.legendaryItems[randItemName]} (Legendary) - ${randGold} gold`,
          );
        } else {
          console.log("No drop!");
        }
        break;

      default:
        console.log("Invalid Rarity Level");
    }
  }
}

titleLog("Generated Loot Details");
Item.generateLoot(Item.RARITY_NAMES.COMMON);
Item.generateLoot(Item.RARITY_NAMES.LEGENDARY);
Item.generateLoot(Item.RARITY_NAMES.RARE);

// Problem 10: Party Composition Analyzer
class Member {
  constructor(name, role, powerLevel) {
    this.name = name;
    this.role = role;
    this.powerLevel = powerLevel;
  }
}

class Party {
  // Static properties
  static MAX_PARTY_SIZE = 4;
  static REQUIRED_ROLES = ["Tank", "Healer", "DPS"];

  constructor(name, members) {
    //Party size validation
    if (members.length > Party.MAX_PARTY_SIZE)
      throw new Error("Too Many Members in the party");
    this.name = name; // Party Name
    this.members = members; // Arr of Member objects
  }

  // Static Methods
  static isBalanced(members) {
    // Create an arr of just the member's roles
    const currentPartyRoles = members.map(member => member.role);
    // Checks if all required roles are present in the party
    const hasAllRequiredRoles = this.REQUIRED_ROLES.every(requiredRole => currentPartyRoles.includes(requiredRole));
    return hasAllRequiredRoles ? "Yes" : "No";
  }

  static calculateAveragePower(members) {
    // Edge Case: No Members
    if (members.length === 0) return 0;

    const totalPower = members.reduce(
      (total, member) => total + member.powerLevel,
      0,
    );
    return totalPower / members.length;
  }

  static recommendRole(members) {
    const currentPartyRoles = members.map(member => member.role);
    for(const requiredRole of this.REQUIRED_ROLES) {
      if(!currentPartyRoles.includes(requiredRole)) {
        return `Party needs: ${requiredRole}`;
      }
    }
    return "Party is Balanced";
  }
}
titleLog("Party Details");

// A high-level, balanced party
const fellowshipMembers = [
  new Member("Aragorn", "Tank", 95),
  new Member("Gandalf", "Healer", 80),
  new Member("Legolas", "DPS", 75),
  new Member("Gimli", "DPS", 90)
];

// A lower-level party that is currently missing a Tank
const newbieSquadMembers = [
  new Member("Pippin", "DPS", 40),
  new Member("Sam", "Tank", 50)
];

const fellowship = new Party("The Fellowship",fellowshipMembers);
const newbieSquad = new Party("Newbie Squad",newbieSquadMembers);
// Fellowship Party Stats
console.log(`Party analysis for "${fellowship.name}"`);
console.log(`Size: ${fellowship.members.length}/${Party.MAX_PARTY_SIZE}`);
console.log(`Average Power: ${Party.calculateAveragePower(fellowshipMembers)}`);
console.log(`Recommendation: ${Party.recommendRole(fellowshipMembers)}`);

console.log(``);

// Newbie Squad Party Stats
console.log(`Party analysis for "${newbieSquad.name}"`);
console.log(`Size: ${newbieSquad.members.length}/${Party.MAX_PARTY_SIZE}`);
console.log(`Average Power: ${Party.calculateAveragePower(newbieSquadMembers)}`);
console.log(`Recommendation: ${Party.recommendRole(newbieSquadMembers)}`);
# Fantasy RPG - Static Keyword Practice Problems

## Beginner Level

### Problem 1: Spell Registry
Create a `Spell` class with a static property `spellCount` that tracks how many spells have been created. Each spell has a `name` and `manaCost`. Add a static method `getTotalSpells()` that returns the count.

**Expected Output:**
```
Total spells in grimoire: 3
Spell created: Fireball (Cost: 50 mana)
Spell created: Ice Blast (Cost: 40 mana)
Spell created: Heal (Cost: 30 mana)
```

---

### Problem 2: Potion Factory
Create a `Potion` class with static factory methods:
- `createHealthPotion(name)` - creates a potion with type "health" and healing power of 50
- `createManaPotion(name)` - creates a potion with type "mana" and restoration power of 30

Each potion should have `name`, `type`, and `power` properties. Add an instance method `use()` that displays the potion's effect.

**Expected Output:**
```
Used Minor Health Potion: Restores 50 health
Used Mana Elixir: Restores 30 mana
```

---

### Problem 3: Damage Calculator
Create a `Weapon` class with static methods:
- `calculatePhysicalDamage(attackPower, defense)` - returns attack minus defense
- `calculateMagicalDamage(spellPower, resistance)` - returns spell power minus resistance, minimum 0

**Expected Output:**
```
Physical damage dealt: 35
Magical damage dealt: 45
Magical damage dealt: 0
```

---

## Intermediate Level

### Problem 4: Hero ID Generator
Create a `Hero` class where each hero gets a unique ID starting from 1. Use a static property `nextId` and increment it for each new hero. Add a static method `resetIdCounter()` to reset IDs back to 1. Each hero has `name`, `class`, and `id` properties.

**Expected Output:**
```
Hero created: Aragorn (ID: 1) - Warrior
Hero created: Gandalf (ID: 2) - Mage
Hero created: Legolas (ID: 3) - Archer
IDs reset!
Hero created: Frodo (ID: 1) - Rogue
```

---

### Problem 5: Monster Bestiary
Create a `Monster` class that stores all created monsters in a static array `bestiary`. Add these static methods:
- `findByName(name)` - returns the monster with that name
- `findByType(type)` - returns all monsters of that type
- `getTotalMonsters()` - returns count of all monsters

Each monster has `name`, `type`, `health`, and `level` properties.

**Expected Output:**
```
Total monsters in bestiary: 4
Found monster: Goblin (Type: Humanoid, Level: 3)
Fire-type monsters: 2
  - Fire Drake (Level: 10)
  - Phoenix (Level: 15)
```

---

### Problem 6: Guild Validator
Create a `Guild` class with static validation methods:
- `isValidGuildName(name)` - name must be 3-20 characters and not contain numbers
- `meetsLevelRequirement(level)` - level must be 10 or higher
- `hasRequiredGold(gold)` - gold must be at least 1000

If validation fails during construction, throw an error. Each guild has `name`, `leaderLevel`, and `treasury` properties.

**Expected Output:**
```
Guild created: Dragon Slayers
Error: Guild name must be 3-20 characters
Error: Leader must be level 10 or higher
Error: Need at least 1000 gold to form a guild
```

---

## Advanced Level

### Problem 7: Element Effectiveness System
Create an `Element` class with a static method `getEffectiveness(attackElement, defenseElement)` that returns damage multipliers based on this chart:
- Fire beats Ice (2x damage)
- Ice beats Earth (2x damage)  
- Earth beats Lightning (2x damage)
- Lightning beats Fire (2x damage)
- Same element (0.5x damage)
- Other combinations (1x damage)

Add a static property `ELEMENTS` array containing all valid elements. Add a static method `isValidElement(element)`.

**Expected Output:**
```
Fire vs Ice: 2x damage
Ice vs Fire: 0.5x damage  
Fire vs Fire: 0.5x damage
Lightning vs Earth: 0.5x damage
Fire vs Earth: 1x damage
```

---

### Problem 8: Dungeon Instance Manager
Create a `Dungeon` class that tracks all active dungeon instances. Use static properties:
- `activeDungeons` - array of all dungeons
- `maxDungeons` - maximum of 5 concurrent dungeons

Add static methods:
- `createInstance(name, difficulty)` - creates a new dungeon if under the limit
- `closeInstance(dungeonId)` - removes a dungeon from active list
- `getActiveCount()` - returns number of active dungeons
- `findByDifficulty(difficulty)` - returns all dungeons of that difficulty

Each dungeon has `id`, `name`, `difficulty`, and `createdAt` properties.

**Expected Output:**
```
Dungeon created: Shadow Crypt (Easy) - ID: 1
Dungeon created: Dragon's Lair (Hard) - ID: 2
Active dungeons: 2
Hard dungeons: 1
Dungeon closed: Shadow Crypt
Active dungeons: 1
```

---

### Problem 9: Loot Rarity System
Create an `Item` class with a static method `generateLoot(rarityLevel)` that returns items based on rarity:
- Level 1: Common (50% drop rate, 10-20 gold value)
- Level 2: Uncommon (30% drop rate, 50-100 gold value)
- Level 3: Rare (15% drop rate, 200-500 gold value)
- Level 4: Legendary (5% drop rate, 1000-5000 gold value)

Use `Math.random()` for drop chance and value ranges. Add a static property `RARITY_NAMES` that maps levels to names. The method should return `null` if the item doesn't drop, or an object with `name`, `rarity`, and `value`.

**Expected Output:**
```
Attempting Common loot...
Dropped: Rusty Sword (Common) - 15 gold

Attempting Legendary loot...
No drop!

Attempting Rare loot...
Dropped: Enchanted Amulet (Rare) - 347 gold
```

---

### Problem 10: Party Composition Analyzer
Create a `Party` class that manages adventuring parties. Use static methods and properties:
- `MAX_PARTY_SIZE` = 4 (static property)
- `REQUIRED_ROLES` = ['Tank', 'Healer', 'DPS'] (static property)
- `isBalanced(members)` - checks if party has at least one of each required role
- `calculateAveragePower(members)` - returns average power level
- `recommendRole(members)` - returns which role is missing or "Party is balanced"

Each member object should have: `name`, `role`, and `powerLevel`.

**Expected Output:**
```
Party analysis for "The Fellowship":
  Size: 4/4
  Balanced: Yes
  Average Power: 85
  Recommendation: Party is balanced

Party analysis for "Newbie Squad":
  Size: 2/4
  Balanced: No
  Average Power: 45
  Recommendation: Party needs: Healer
```

---

## Bonus Challenge

Create a complete **Quest Board System** that combines multiple static concepts:
- `Quest` class with static quest tracking, difficulty validation, and reward calculation
- `QuestBoard` class with static methods to post quests, find available quests, and track completion statistics
- Implement a quest requirement system (minimum level, required class, etc.)

Make it handle edge cases like duplicate quests, invalid difficulty levels, and quest capacity limits!
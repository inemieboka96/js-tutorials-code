# JavaScript Inheritance Practice Problems - Sci-Fi Edition 🚀

## Beginner Level

### 1. Space Vessel Base Class
Create a `SpaceVessel` class with properties `name`, `fuelLevel` (starts at 100), and `speed`. Add a method `travel()` that reduces fuel by 10 and logs the journey. Then create a `CargoShip` class that extends `SpaceVessel` and adds a `cargoCapacity` property and a `loadCargo()` method.

**Expected Output:**
```
USS Enterprise traveling at 5000 km/s. Fuel: 90%
Loading 500 tons of cargo...
```

---

### 2. Alien Species
Create an `Alien` base class with `species`, `planet`, and `intelligence` properties. Add a `communicate()` method. Create two child classes: `Vulcan` (logical species) and `Klingon` (warrior species), each overriding the `communicate()` method with species-specific greetings.

**Expected Output:**
```
Spock (Vulcan): "Live long and prosper. Logic dictates cooperation."
Worf (Klingon): "Qapla'! Today is a good day to code!"
```

---

### 3. Robot Hierarchy
Build a `Robot` class with `model`, `batteryLife`, and a `recharge()` method. Create a `CombatRobot` child class that adds `weaponType` and an `attack()` method, and a `MedicalRobot` child class with `medkits` and a `heal()` method.

**Expected Output:**
```
T-800 attacking with Plasma Rifle!
MED-9 healing patient. Medkits remaining: 4
```

---

## Intermediate Level

### 4. Spaceship Upgrades System
Create a `Spaceship` class with `name`, `hull`, `shield`, and `weapons` array. Add methods `takeDamage(amount)` and `repair()`. Create three child classes: `Fighter` (high speed, low hull), `Cruiser` (balanced), and `Battleship` (high hull, slow). Each should have unique special abilities. Implement a battle simulation between two ships.

**Challenge:** Shields should absorb damage before hull takes damage.

---

### 5. Planetary Colony Management
Create a `Colony` base class with `population`, `resources`, and `morale`. Add methods `produce()`, `consume()`, and `grow()`. Create specialized colonies: `MiningColony` (produces minerals), `ResearchColony` (produces technology), and `AgriculturalColony` (produces food). Each colony type should have different resource production rates and growth patterns.

**Challenge:** Implement a resource sharing system between colonies.

---

### 6. Time Travel Devices
Create a `TimeMachine` class with `currentYear`, `maxJumpYears`, and `fuelCells`. Create child classes: `PersonalTimeBelt` (short jumps, unlimited uses), `TARDISClass` (long jumps, regenerates fuel), and `QuantumLeap` (random destination). Implement a method to track timeline changes and prevent paradoxes.

**Challenge:** Throw a custom `TemporalParadoxError` if someone tries to meet themselves.

---

### 7. AI Neural Network Evolution
Create an `AI` base class with `name`, `learningRate`, `memory`, and methods `learn()`, `forget()`, and `process()`. Create child classes representing AI evolution: `NarrowAI` (single task), `GeneralAI` (multiple tasks), and `SuperAI` (self-improving). Each should override learning methods with increasing complexity.

**Challenge:** SuperAI should be able to create instances of itself with improved parameters.

---

## Advanced Level

### 8. Multi-Species Crew Management System
Design an inheritance hierarchy for a space station crew. Create a `CrewMember` base class, then `Human`, `Android`, and `Cyborg` child classes. Humans need oxygen and food, Androids need power, Cyborgs need both. Implement a `Station` class that manages different crew types and their specific needs. Handle life support systems that must adapt to crew composition.

**Challenge:** Implement a mutation system where crew members can upgrade/change their type (Human → Cyborg, etc.) and manage the transition of their requirements.

---

### 9. Dimensional Portal Network
Create a complex inheritance system for interdimensional portals. Base class `Portal` with `dimension`, `stability`, and `energyRequired`. Create `StablePortal`, `UnstablePortal`, and `QuantumPortal` classes. Implement a `PortalNetwork` that connects multiple portals. Handle different portal behaviors: stable portals always work, unstable ones have random failures, quantum portals exist in superposition (multiple destinations simultaneously).

**Challenge:** Implement portal chaining where traveling through one portal can automatically redirect you through connected portals. Track travelers and prevent them from being lost in dimensional rifts.

---

### 10. Galactic Empire Evolution Simulator
Build a comprehensive inheritance system simulating galactic civilizations. Create a `Civilization` base class with `technology`, `military`, `economy`, and `ethics`. Create government types (`Democracy`, `Autocracy`, `HiveMind`) as child classes. Each government type should extend further into specific empires with unique traits. Implement:
- Technology research trees (different paths for different civilizations)
- Diplomatic relations (alliances, wars, trade)
- Evolution system (civilizations can change government types)
- Event system (random events affect civilizations differently based on their type)

**Challenge:** Implement a `FallenEmpire` class that can be created from any civilization type, preserving some traits while adding new ones. Create a combat system where different civilization types have advantages/disadvantages against each other. Bonus: Make civilizations able to merge or split based on certain conditions.

---

## Bonus Challenge 🌟

### 11. Universal Constructor Pattern
Create a meta-inheritance system where an `EntityFactory` class can dynamically generate new species/ship/technology classes at runtime based on JSON configuration. The factory should create proper inheritance chains and methods programmatically.

**Example:**
```javascript
const factory = new EntityFactory();
const DragonRace = factory.createSpecies({
  basedOn: 'Alien',
  traits: { breathesFire: true, canFly: true },
  methods: { roar: function() { /* ... */ } }
});
```

---

**Tips for Success:**
- Start with beginner problems to build confidence
- Use `super()` correctly in constructors
- Practice method overriding and calling parent methods
- Test your code with multiple instances
- Think about real inheritance relationships (is-a vs has-a)

Good luck, space cadet! 🛸
/* ============================
   QUEST CLASS
============================ */

class Quest {
  /* ---------- Static State ---------- */
  static AVAILABLE_QUEST_MAX_CAPACITY = 8;
  static MAX_PARTY_SIZE = 10;

  static AvailableQuests = [];
  static CompletedQuests = [];
  static questID = 1;

  static DIFFICULTIES = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Expert",
    "Legendary",
  ];

  static DIFFICULTY_REWARD_RANGES = {
    Beginner: { min: 100, max: 200 },
    Intermediate: { min: 200, max: 300 },
    Advanced: { min: 500, max: 750 },
    Expert: { min: 900, max: 1500 },
    Legendary: { min: 5000, max: 15000 },
  };

  static IMPORTANT_ROLES = ["Tank", "Healer"];
  static PARTY_CLASSES = [
    "Fighter",
    "Mage",
    "Assassin",
    "Tank",
    "Ranger",
    "Healer",
  ];

  /* ---------- Constructor ---------- */
  constructor({
    name,
    difficulty,
    minLevel = 1,
    requiredClasses = [],
    maxPartySize = 4,
  }) {
    /* ---- Validations ---- */
    if (!Quest.DIFFICULTIES.includes(difficulty))
      throw new Error("Invalid difficulty level");

    if (Quest.AvailableQuests.length >= Quest.AVAILABLE_QUEST_MAX_CAPACITY)
      throw new Error("Quest board capacity reached");

    if (Quest.isDuplicateQuest(name, difficulty))
      throw new Error("Duplicate quest detected");

    this.id = Quest.questID++;
    this.name = name;
    this.difficulty = difficulty;
    this.minLevel = minLevel;
    this.requiredClasses = new Set(requiredClasses);
    this.maxPartySize = Math.min(maxPartySize, Quest.MAX_PARTY_SIZE);

    this.isAvailable = true;
    this.completedAt = null;
    this.partyMembers = [];

    Quest.AvailableQuests.push(this);
  }

  /* ---------- Static Helpers ---------- */
  static isDuplicateQuest(name, difficulty) {
    return Quest.AvailableQuests.some(
      (q) => q.name === name && q.difficulty === difficulty,
    );
  }

  static completeQuest(quest) {
    quest.isAvailable = false;
    Quest.AvailableQuests = Quest.AvailableQuests.filter((q) => q !== quest);
    Quest.CompletedQuests.push(quest);
  }

  /* ---------- Reward Calculation ---------- */
  static calculateReward(difficulty, partyMembers) {
    const { min, max } = Quest.DIFFICULTY_REWARD_RANGES[difficulty];
    const partySize = partyMembers.length;

    // Diminishing returns
    const partyScale = Math.min((1 + Math.log2(partySize)) / 4, 1);
    let reward = min + (max - min) * partyScale;

    // Role bonus
    const roles = new Set(partyMembers.map((p) => p.role));
    let roleBonus = 1;
    Quest.IMPORTANT_ROLES.forEach((role) => {
      if (roles.has(role)) roleBonus += 0.15;
    });

    // Class diversity
    const uniqueClasses = new Set(partyMembers.map((p) => p.class)).size;
    const diversityBonus =
      1 + 0.2 * ((uniqueClasses - 1) / (Quest.PARTY_CLASSES.length - 1));

    reward *= roleBonus * diversityBonus;
    return Math.floor(Math.min(reward, max));
  }

  /* ---------- Instance Validation ---------- */
  validateParty(partyMembers) {
    if (partyMembers.length < 2)
      throw new Error("Party must have at least 2 members");

    if (partyMembers.length > this.maxPartySize)
      throw new Error("Party exceeds quest party limit");

    if (partyMembers.some((p) => p.level < this.minLevel))
      throw new Error("Party does not meet minimum level requirement");

    const partyClasses = new Set(partyMembers.map((p) => p.class));
    for (const req of this.requiredClasses) {
      if (!partyClasses.has(req))
        throw new Error(`Required class missing: ${req}`);
    }
  }
}

/* ============================
   QUEST BOARD
============================ */

class QuestBoard {
  /* ---------- Static Methods ---------- */
  static postQuest(quest, partyMembers) {
    if (!quest.isAvailable) throw new Error("Quest is already completed");

    quest.validateParty(partyMembers);

    quest.partyMembers = partyMembers;
    quest.completedAt = new Date();
    quest.reward = Quest.calculateReward(quest.difficulty, partyMembers);

    Quest.completeQuest(quest);

    console.log(`Quest "${quest.name}" completed for ${quest.reward} gold`);
  }

  static findAvailableQuests() {
    return Quest.AvailableQuests;
  }

  static trackCompletion() {
    console.log("===== QUEST STATISTICS =====");
    console.log(`Available: ${Quest.AvailableQuests.length}`);
    console.log(`Completed: ${Quest.CompletedQuests.length}`);

    Quest.CompletedQuests.forEach((q) =>
      console.log(`#${q.id} ${q.name} (${q.difficulty}) - Reward: ${q.reward}`),
    );
  }
}

/* ============================
   EXAMPLE USAGE
============================ */

// Party members sample
const party = [
  { name: "Arin", class: "Tank", role: "Tank", level: 10 },
  { name: "Lyra", class: "Mage", role: "DPS", level: 9 },
  { name: "Seren", class: "Healer", role: "Healer", level: 10 },
];

// Create quest
const dragonQuest = new Quest({
  name: "Slay the Dragon",
  difficulty: "Expert",
  minLevel: 8,
  requiredClasses: ["Tank", "Healer"],
  maxPartySize: 5,
});

// Post quest
QuestBoard.postQuest(dragonQuest, party);
QuestBoard.trackCompletion();

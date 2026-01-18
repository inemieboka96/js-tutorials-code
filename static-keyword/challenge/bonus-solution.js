// BONUS CHALLENGE: QUEST BOARD SYSTEM
class Quest {
  static AvailableQuests = []; // Arr of Available Quest Objects
  static AVAILABLE_QUEST_MAX_CAPACITY = 8;
  static CompletedQuests = [];
  static MAX_PARTY_SIZE = 10;

  static questID = 1;

  static DIFFICULTIES = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Expert",
    "Legendary",
  ];
  constructor(name, difficulty, partySize) {
    // Validations
    if (!this.DIFFICULTIES.includes(difficulty))
      throw new Error("Invalid Difficulty");
    if (partySize > MAX_PARTY_SIZE)
      throw new RangeError("Party size exceeds max party size");
    if (partySize < 2)
      throw new Error("Parties must have a minimum of 2 members");
    if (this.AvailableQuests.length > this.AVAILABLE_QUEST_MAX_CAPACITY)
      throw new Error(
        `Available Quests cannot exceed ${this.AVAILABLE_QUEST_MAX_CAPACITY}`,
      );

    this.id = Quest.questID++; // Unique quest IDs
    this.name = name;
    this.difficulty = difficulty;
    this.partySize = partySize;
    this.reward = Quest.calculateReward(this.difficulty, this.partySize);
    this.isAvailable = true;

    Quest.AvailableQuests.push(this); // Add to Available Quests
  }

  // Static Methods
  static isDuplicateQuest(quest) {
    // Helper function
  }

  static markAsCompleted(quest) {
    quest.isAvailable = false; // Set Availability to false
    this.CompletedQuests.push(quest); // Add to completed quests list
  }

  static trackingQuest() {
    // Display all available & completed quests
    console.log("========== AVAILABLE QUESTS ==========");
    console.log(`No. of Available Quests: ${this.AvailableQuests.length}`);
    this.AvailableQuests.forEach((availableQuest) =>
      console.log(
        `Quest ${availableQuest.id}:\nName: ${availableQuest.name} \nDifficulty: ${availableQuest.difficulty} \nReward: ${Quest.calculateReward(availableQuest)}`,
      ),
    );
    console.log("========== COMPLETED QUESTS ==========");
    console.log(`No. of Completed Quests: ${this.CompletedQuests.length}`);
    this.CompletedQuests.forEach((completedQuest) =>
      console.log(
        `Quest ${completedQuest.id}:\nName: ${completedQuest.name} \nDifficulty: ${completedQuest.difficulty} \nReward: ${Quest.calculateReward(completedQuest)}`,
      ),
    );
  }

  static calculateQuestReward(difficulty, partyMembers) {
    // Reward Ranges
    const DIFFICULTY_REWARD_RANGES = {
      Beginner: { min: 100, max: 200 },
      Intermediate: { min: 200, max: 300 },
      Advanced: { min: 500, max: 750 },
      Expert: { min: 900, max: 1500 },
      Legendary: { min: 5000, max: 15000 },
    };

    const IMPORTANT_ROLES = ["Tank", "Healer"];
    const PARTY_CLASSES = [
      "Fighter",
      "Mage",
      "Assassin",
      "Tanker",
      "Ranger",
      "Healer",
    ];

    const { min, max } = DIFFICULTY_REWARD_RANGES[difficulty];

    const partySize = partyMembers.length;

    // ---- Party size scaling (diminishing returns)
    const partyScale = Math.min((1 + Math.log2(partySize)) / 4, 1);
    let reward = min + (max - min) * partyScale;

    // ---- Important role bonus
    const rolesPresent = new Set(partyMembers.map((p) => p.role));
    let roleBonus = 1;

    IMPORTANT_ROLES.forEach((role) => {
      if (rolesPresent.has(role)) roleBonus += 0.15;
    });

    // ---- Class diversity bonus
    const uniqueClasses = new Set(partyMembers.map((p) => p.class)).size;
    const diversityBonus =
      1 + 0.2 * ((uniqueClasses - 1) / (PARTY_CLASSES.length - 1));

    // ---- Apply composition bonuses
    reward *= roleBonus * diversityBonus;

    // ---- Cap reward
    return Math.floor(Math.min(reward, max));
  }

  // Instance Methods
}

class QuestBoard {
  constructor(quests) {
    this.quests = new Set(quests); // List of Quest Objects (Used sets to remove duplicates)
  }

  // Static Methods
  static postQuest(quest, partyMembers) {
    // Give members a quest
    if (quest.isAvailable === false || Quest.CompletedQuests.includes(quest))
      throw new Error("Quest is already completed");

    console.log(`Quest ${quest.id} has been assigned`);
    quest.partyMembers = partyMembers;
    quest.completedAt = new Date();
    quest.isAvailable = false;
    Quest.CompletedQuests.push(quest);
  }

  static findAvailableQuests() {
    console.log(`${Quest.AvailableQuests.length} are currently available`);
    // const
  }

  static trackCompletion() {
    console.log(`${Quest.CompletedQuests.length} have been completed`);
    Quest.CompletedQuests.forEach((completedQuest) =>
      console.log(
        `Quest ${completedQuest.id}:\nName: ${completedQuest.name} \nDifficulty: ${completedQuest.difficulty} \nReward: ${Quest.calculateReward(completedQuest)}`,
      ),
    );
  }
}

// Testing Logs
console.log("========== Quest Board System ==========");

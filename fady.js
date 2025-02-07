// Define the character object constructor
function Character(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;

    // Method to attack an enemy
    this.attackEnemy = function(enemy) {
        // Decrease the enemy's health by the attack power
        enemy.health -= this.attack;
        console.log(`${this.name} attacks ${enemy.name} for ${this.attack} damage!`);
        console.log(`${enemy.name} now has ${enemy.health} health.`);
    };
}

// Create two instances of characters: a warrior and a monster
let warrior = new Character("Warrior", 100, 20);
let monster = new Character("Monster", 80, 15);

// Display initial health of both characters
console.log(`${warrior.name} starts with ${warrior.health} health.`);
console.log(`${monster.name} starts with ${monster.health} health.`);

// Battle sequence: Warrior attacks Monster, and Monster attacks Warrior
warrior.attackEnemy(monster); // Warrior attacks Monster
monster.attackEnemy(warrior); // Monster attacks Warrior

// Continue the battle until one character's health reaches 0 or below
while (warrior.health > 0 && monster.health > 0) {
    warrior.attackEnemy(monster);
    if (monster.health > 0) {
        monster.attackEnemy(warrior);
    }
}

// Determine the winner
if (warrior.health <= 0) {
    console.log(`${warrior.name} has been defeated!`);
} else if (monster.health <= 0) {
    console.log(`${monster.name} has been defeated!`);
}
//  map type 
const triangle = {
    type: 'polygon',
    sides: 3,
    sumOfAngles: 180,
    equilateral: true,
    equiangular: true
  };
  
  const keys = Object.keys(triangle);
  console.log(keys); 
  // Output: ['type', 'sides', 'sumOfAngles', 'equilateral', 'equiangular']
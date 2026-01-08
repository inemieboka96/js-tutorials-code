// DIce Roller Program JS

// DOM Variables
const diceInput = document.getElementById("dice-input");
const diceOutput = document.getElementById("dice-output");
const diceImagesContainer = document.getElementById("dice-images");
const btnRoll = document.getElementById("roll-button");

const dice_images = [
  "./images/dice-six-faces-one.png",
  "./images/dice-six-faces-two.png",
  "./images/dice-six-faces-three.png",
  "./images/dice-six-faces-four.png",
  "./images/dice-six-faces-five.png",
  "./images/dice-six-faces-six.png",
];

// Function for displaying the images
/**
 * The function `displayDiceImage` creates an image element with specified source, alt text, height,
 * and width, and appends it to a container.
 * @param imageSrc - The `imageSrc` parameter is a string that represents the URL or path to the image
 * that you want to display in the `img` element.
 */
function displayDiceImage(imageSrc,n) {
  const img = document.createElement("img"); // Create an img element

  img.src = imageSrc;
  img.alt = `Dice ${n} Image`;
  img.height = "100";
  img.width = "100";

  diceImagesContainer.appendChild(img);
}

function generateRandomNum(min, max) {
  // Returns random no. between min & max
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Roll Functionality
btnRoll.addEventListener("click", () => {
  diceOutput.textContent =
    diceInput.value === 1
      ? `Rolling ${diceInput.value} die`
      : `Rolling ${diceInput.value} dice`;

  setTimeout(() => {
    let diceNum = Number(diceInput.value);

    if (!Number.isInteger(diceNum) || diceNum <= 0) {
      alert("Please enter a valid number of dice");
      return;
    }

    let diceArr = []; // Init empty arr

    for (let i = 0; i < diceNum; i++) {
      // Loop n times
      // Generate random no. between 1-6
      let randomNo = generateRandomNum(1, 6);
      diceArr.push(randomNo); // Add to arr
    }

    diceOutput.textContent = diceArr.toString();
    diceImagesContainer.textContent = "";

    // For each die in the arr
    diceArr.forEach((die) => {
      // Display the corresponding image
      displayDiceImage(dice_images[die - 1],die);
    });
  }, 1200); // Delay for 1.2s
});
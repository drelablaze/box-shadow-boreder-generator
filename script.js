"use strict";

const userInput = document.getElementById("user-input-js");
const submitBtn = document.getElementById("submit-btn-js");
const modalAlert = document.querySelectorAll("#modal-alert-js");
const closeBtn = document.querySelectorAll("#close-btn-js");
const nameDisplay = document.getElementById("name-js");
const overlay = document.getElementById("overlay-js");
const hamburgerImage = document.getElementById("hamburger-img");
const hamburger = document.getElementById("bar");
const formContainer = document.getElementById("container");
const allInput = document.querySelectorAll(".image-slider input");
const horizontalOffSetValue = document.querySelector(
  ".box-shadow-horizontal-offset"
);
const verticalOffSetValue = document.querySelector(
  ".box-shadow-vertical-offset"
);
const spreadValue = document.querySelector(".box-shadow-spread");
const colorValue = document.querySelector(".box-shadow-color");
const borderWidth = document.querySelector(".border-width");
const borderType = document.querySelector(".border-type");
const borderColor = document.querySelector(".border-color");
const resetBtn = document.querySelector(".reset-btn");

hamburger.addEventListener("click", () => {
  const closeImageButton = "close.png";
  const burgerImageButton = "burger-bar.png";
  if (hamburgerImage.src.includes(burgerImageButton)) {
    hamburgerImage.src = closeImageButton;
    formContainer.classList.add("active");
  } else {
    hamburgerImage.src = burgerImageButton;
    formContainer.classList.remove("active");
  }
});

function UserNameReduced() {
  console.log(this);
  if (!userInput.value) {
    modalAlert[0].style.top = "55px";
    overlay.classList.add("overlay");
  } else if (userInput.value.length < 4) {
    modalAlert[1].style.top = "55px";
    overlay.classList.add("overlay");
  } else {
    const slicedUserName = userInput.value.slice(0, 4);
    nameDisplay.textContent = slicedUserName;
  }
  console.log(nameDisplay.textContent);

  if (nameDisplay.textContent) {
    for (let i = 0; i < nameDisplay.textContent.length; i++) {
      console.log(i);
    }
  }
  if (nameDisplay.textContent) {
    const newName = nameDisplay.textContent;
    for (const letter of newName) {
      console.log([letter]);
    }
  }
}

// submitBtn.addEventListener("click", UserNameReduced);

closeBtn.forEach(function (eachCloseBtn, index) {
  eachCloseBtn.addEventListener("click", function (e) {
    modalAlert[index].style.top = "-1000px";
    overlay.classList.remove("overlay");
    console.log(this);
    if (this.name) {
      console.log(`you have entered ${this.name}`);
    }
  });
});

// console.log(allInput);

function updateChanges() {
  // console.log(this.name);
  // console.log(this.value);
  const pixel = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + pixel
  );
  // let shadowBlurValue;
  if (this.name === "shadow-blur") {
    spreadValue.textContent = this.value + "px";
  } else if (this.name === "shadowOffSet-right") {
    horizontalOffSetValue.textContent = this.value + "px";
  } else if (this.name === "shadowOffSet-down") {
    verticalOffSetValue.textContent = this.value + "px";
  } else if (this.name === "body-color") {
    colorValue.textContent = this.value;
    borderColor.textContent = this.value;
  } else if (this.name === "border") {
    borderWidth.textContent = this.value + "px";
    borderType.textContent = "Solid";
  }
}

allInput.forEach(function (input) {
  input.addEventListener("change", updateChanges);
  if (input.name === "body-color") {
    input.addEventListener("mousemove", updateChanges);
  }
});

function resetAllValue() {
  spreadValue.textContent = this.value + "px";
  horizontalOffSetValue.textContent = this.value + "px";
  verticalOffSetValue.textContent = this.value + "px";
  colorValue.textContent = "Color-Value";
  borderColor.textContent = "Color-Value";
  borderWidth.textContent = this.value + "px";
  borderType.textContent = "None";
}
resetBtn.addEventListener("click", resetAllValue);

// updateChanges();

// other stuffs .........
// other stuffs .........
// other stuffs .........
// other stuffs .........
// other stuffs .........
// other stuffs .........
// other stuffs .........
// other stuffs .........
// other stuffs .........
// other stuffs .........

// Access the children of the body element
// const bodyChildren = document.querySelectorAll(".item");
// console.log(bodyChildren);
// const arrayBodyChildren = [...bodyChildren];
// console.log(arrayBodyChildren);
// const [div1, div2, div3, div4] = arrayBodyChildren;
// // console.log(div1.textContent);

// // Function to log details about the children
// function logChildDetails() {
//   for (let i = 0; i < bodyChildren.length; i++) {
//     const child = bodyChildren.item(i);
//     console.log(`Child ${i}: ${child.textContent}`);
//   }

//   const iterator = arrayBodyChildren.entries();
//   for (const [index, item] of iterator) {
//     const child = bodyChildren.item(index);
//     child.style.color = "red";
//     console.log(item, child);
//     div2.style.color = "green";

//     // for (const key of item) {
//     //   console.log(key);
//     // }
//   }
// }

// // Call the function to log details about each child element
// logChildDetails();

// const airline = "Turkish AIR Turkey";

// console.log(airline.slice(airline.lastIndexOf(" ")));
// const start = airline.indexOf("AIR");
// const end = start + "AIR".length;
// console.log(end);

// const announcement = "come and eat this meal and eat the rest";
// console.log(announcement.replaceAll("eat", "take"));

// console.log(announcement.includes("eat"));
// console.log(announcement.split(" "));

// const capitalName = function (name) {
//   const names = name.split(" ");
//   const nameFirstLetterCapitalized = [];
//   const name2Capitalized = [];
//   for (const eachName of names) {
//     nameFirstLetterCapitalized.push(
//       eachName[0].toUpperCase() + eachName.slice(1)
//     );

//     name2Capitalized.push(
//       eachName.replace(eachName[0], eachName[0].toUpperCase())
//     );
//   }
//   console.log(nameFirstLetterCapitalized.join(" "));
//   console.log(name2Capitalized.join(" "));
//   // const [firstName, secondName, thirdName] = name.split(" ");
//   // console.log(firstName, secondName, thirdName);
//   // console.log(firstName[0].toUpperCase() + firstName.slice(1));
// };

// capitalName("oluwadamilare dare oseni");
// capitalName("sofia osasumwen imasuen");
// capitalName("henry realtime felix success golden");

// console.log([1, 3, 5, 6, 7, 9, 7, 56, 3, 9, 0, 5].join(""));

// let printSplittedText = function (text, delimiter) {
//   const arrayOfWord = text.toLowerCase().split(delimiter);
//   console.log(arrayOfWord);
//   for (const eachWord of arrayOfWord) {
//     // console.log(eachWord[0].toUpperCase() + eachWord.slice(1));
//     console.log(eachWord.replace(eachWord[0], eachWord[0].toUpperCase()));
//   }
// };

// printSplittedText("One-Two-Three-Four-Five", "-");

// const splittedText = function (str) {
//   const slicedStr = str.slice(str.indexOf(" ") * 5, str.lastIndexOf(" ") + 1);
//   console.log(slicedStr);
//   console.log(str.lastIndexOf(" "));
//   console.log(str.indexOf(" ") + 1);
// };
// splittedText("my name is oluwdamilare dare oseni");

// let isStartingWith = (str, key) => str.startsWith(key);

// console.log(isStartingWith("How have you been?", "How"));

// let isEndingWith = (str, key) => str.endsWith(key);

// console.log(isEndingWith("How have you been?", "been?"));

// const userSentence = document.getElementById("user-sentence");
// const btnSend = document.getElementById("send-btn-js");
// const sentenceDisplay = document.querySelector(".sentence-display");

// function nameSentence() {
//   const str = userSentence.value;
//   if (!str) {
//     alert("Enter any sentence");
//   } else {
//     const matches = str.match(/\b\w+\b/g);
//     // const that = this;
//     const show = () => {
//       const sente = matches.join(" ");
//       const words = [];
//       this.disabled = "true";
//       // the this is the lexical this from the enclosing function which is refering to the button that calls the function nameSetence

//       for (const [index, word] of matches.entries()) {
//         words.push(word);
//       }
//       const joinedWords = words.join("--").toLowerCase();
//       const padSente = sente
//         .replace(sente[0], sente[0].toUpperCase())
//         .padStart(str.length + 1, "'")
//         .padEnd(str.length + 2, "'");
//       return `${padSente} is a sentence with ${matches.length} words which are: ${joinedWords}`;
//     };
//     sentenceDisplay.textContent = show();
//   }
// }

// btnSend.addEventListener("click", nameSentence);

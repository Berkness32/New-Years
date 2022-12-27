document.querySelector("button").addEventListener("click", function() {
  document.getElementById("button").style.textAlign = "justify";
  document.getElementById("button").style.paddingTop = "5px";
  document.getElementById("button").style.paddingLeft = "10px";
  document.getElementById("button").style.paddingRight = "10px";

  // list of answers
  const answers = [
  "The stars align in your favor this year, granting you the opportunity to learn a new skill or hobby. Embrace this chance to try something new and challenge yourself.", 
  "Finances may be a focus for you this year. By setting goals for saving money and reducing debt, you can create a stronger financial foundation for the future.", 
  "Adventure awaits in the coming year! Consider setting a resolution to travel to new and exciting destinations.", 
  "Allow yourself the opportunity to expand your mind by setting a goal to read more books. The knowledge and insights gained will be invaluable.",
  "This year, prioritize the relationships that matter most to you. Make time to spend with friends and family, strengthening the bonds that bring joy to your life.",
  "The start of a new year is a great time to get organized and declutter your home or workspace. Set a resolution to create a more organized and efficient environment.",
  "This year, make a resolution to watch a wider range of films, including those from different countries and time periods. Broaden your cinematic horizons and discover new favorites.",
  "Consider making a resolution to support independent and lesser-known filmmakers by attending film festivals and supporting their work. You never know what hidden gems you might find.",
  "This year, make a resolution to step outside of your comfort zone and try new things at the bar. Try a new type of cocktail or order a drink you've never had before.",
  "Consider making a resolution to attend more live performances and concerts, whether they be at a bar or elsewhere. The energy of a live performance can't be beat.",
  "Consider making a resolution to set aside dedicated time for your art, whether it be daily, weekly, or monthly. Consistency is key to honing your skills and making progress.",
  "Make a resolution to seek out opportunities to showcase your work and share it with a wider audience. Attend art shows, submit your work to galleries or online platforms, or find other ways to share your art with the world."
];
const randomIndex = Math.floor(Math.random() * answers.length);
const answer = answers[randomIndex];

const pElement = document.getElementById("button");
let index = 0;

// clear the p element's text
pElement.innerHTML = "";

// type out the text one character at a time
const interval = setInterval(function() {
  pElement.innerHTML += answer.charAt(index);
  index++;

  // stop typing when we reach the end of the text
  if (index >= answer.length) {
    clearInterval(interval);

    // create a span element to hold the blinking line
    const blinkingLine = document.createElement("span");
    blinkingLine.innerHTML = "|";
    blinkingLine.style.visibility = "hidden";
    pElement.appendChild(blinkingLine);

    // start the blinking line
    setInterval(function() {
      if (blinkingLine.style.visibility === "hidden") {
        blinkingLine.style.visibility = "visible";
      } else {
        blinkingLine.style.visibility = "hidden";
      }
    }, 500); // change the 500 to adjust the blinking speed
  }
}, 50);
});

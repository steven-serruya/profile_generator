const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {};

const questions = [
  "What's your name? Nicknames are also acceptable : ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];


const askQuestions = (index) => {
  rl.question(questions[index], (answer) => {
    answers[index] = answer.trim();
    if (index === questions.length - 1) {
      rl.close();
      displayOutput();
    } else {
      askQuestions(index + 1);
    }
  });
};

const displayOutput = () => {
  console.log("Thank you for your answers. Here's what you shared: ");
  console.log(`Name: ${answers[0]}`);
  console.log(`Activity: ${answers[1]}`);
  console.log(`Music while doing the activity: ${answers[2]}`);
  console.log(`Favorite meal: ${answers[3]}`);
  console.log(`Favorite food for that meal: ${answers[4]}`);
  console.log(`Favorite sport: ${answers[5]}`);
  console.log(`Superpower: ${answers[6]}`);
};

askQuestions(0);
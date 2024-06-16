const express = require("express");
const fetch = require("node-fetch");
global.fetch = fetch;
const readline = require("node:readline");
const app = express();
const port = 8082;

const driverNumber = process.argv[2];

async function getDriverDetails(driverNumber) {
  try {
    const response = await fetch(
      `https://api.openf1.org/v1/drivers?driver_number=${driverNumber}&session_key=9158`
    );
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

app.listen(port, () => {
  //   console.log(`Example app listening at http://localhost:${port}`);
  console.log(`\x1b[36md88b        d88b
                   _______________|8888|_______________
                  |_____________ ,~~~~~~. _____________|
_________         |_____________: mmmmmm :_____________|         _________
/ _______ \\  ,----|~~~~~~~~~~~,'\\ _...._ /'.~~~~~~~~~~~|----,   / _______ \\
| /       \\ |  |    |       |____|,d~    ~b.|____|       |    |  | /       \\ |
||         |-------------------\\-d.-~~~~~~-.b-/-------------------|         ||
||         | |8888 ....... _,===~/......... \\~===._         8888| |         ||
||         |=========_,===~~======._.=~~=._.======~~===._=========|         ||
||         | |888===~~ ...... //,, .\`~~~~'. .,\\        ~~===888| |         ||
||        |===================,P'.::::::::.. \`?,===================|        ||
||        |_________________,P'_::----------.._\`?,_________________|        ||
\`|        |-------------------~~~~~~~~~~~~~~~~~~-------------------|        |'
\\_______/                                                          \\_______/   \x1b[0m`);
  console.log("Please Enter A drier number to get the details:");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });




  const prompt = () => {
    rl.question("Enter a driver number or 'quit': ", (input) => {
      if (input.toLowerCase() === 'quit') {
        rl.close();
      } else {
        console.log(`Fetching details for driver number: ${input}`);
        getDriverDetails(input);
        prompt(); 
      }
    });
  };

  prompt();9
});

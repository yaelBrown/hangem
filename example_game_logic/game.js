import readline from "readline"
import fs from "fs"
import path from "path"
import MOTD from "./utils/motd.js"
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WORDLIST_FILE = path.join(__dirname, "./words/filtered_words.txt");

const exit = () => process.exit(0)

const app_state = {
  avail_games: [],
  users: [],
  words: []
}

const prompt = (query = "> ") => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    const promptStr = query ? `${query} ` : "> ";

    rl.question(promptStr, (answer) => {
      const value = answer.trim();

      if (["q", "quit", "exit"].includes(value.toLowerCase())) {
        console.log("Exiting game...");
        rl.close();
        process.exit(0);
      }

      rl.close();
      resolve(value);
    });
  });
}

const selectRandomWord = () => {
  if (Array.isArray(app_state.words) && app_state.words.length > 0) {
    return app_state.words[
      Math.floor(Math.random() * app_state.words.length)
    ];
  } else {
    try {
      const data = fs.readFileSync(WORDLIST_FILE, "utf8")
      app_state.words = data
        .split(/\r?\n/)
        .map(w => w.trim())
        .filter(Boolean); // just remove empty lines
    
      return app_state.words[
        Math.floor(Math.random() * app_state.words.length)
      ];
    } catch (err) {
      console.error("Failed to select random word:", err.message);
     
      return null;
    }
  }
}

const app = async () => {
  console.log("... running app");
  MOTD()

  console.log("Random Word: ", selectRandomWord())

  const q1 = await prompt("Is this working")
  const q2 = await prompt("This is working right?")
  
  console.log({q1, q2})


  // setup user (name, money)
  // display main menu (create game, view games, user settings, exit)

  // create game (configure game settings, wait for real players) (when 1 player connects 10 second countdown to game start)
  // start game




  exit()
}




app()
const fs = require("fs");
const path = require("path");

// change this if your input file has a different name
const INPUT_FILE = path.join(__dirname, "./words/raw_wordlist.txt");
const OUTPUT_FILE = path.join(__dirname, "./words/filtered_words.txt");

try {
  const data = fs.readFileSync(INPUT_FILE, "utf8");

  const filteredWords = data
    .split(/\r?\n/)               // split by line
    .map(w => w.trim())           // trim whitespace
    .filter(w =>
      w.length >= 6 &&            // 6 letters or more
      /^[a-z]+$/.test(w) &&       // only lowercase letters (and words without numbers)
      w[0] === w[0].toLowerCase() // starts lowercase (extra safety)
    );

  fs.writeFileSync(
    OUTPUT_FILE,
    filteredWords.join("\n"),
    "utf8"
  );

  console.log(`✅ Done. ${filteredWords.length} words written to filtered_words.txt`);
} catch (err) {
  console.error("❌ Error:", err.message);
}

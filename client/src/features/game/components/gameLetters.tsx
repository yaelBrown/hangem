import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

type GameLettersProps = {
  onLetterGuess: (letter: string) => void;
};

export default function GameLetters({ onLetterGuess }: GameLettersProps) {
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());

  // Layout: 3 rows of 7, 1 row of 5
  const letterRows = [
    ["A", "B", "C", "D", "E", "F", "G"], // 7 letters
    ["H", "I", "J", "K", "L", "M", "N"], // 7 letters
    ["O", "P", "Q", "R", "S", "T", "U"], // 7 letters
    ["V", "W", "X", "Y", "Z"], // 5 letters
  ];

  const handleLetterClick = (letter: string) => {
    if (guessedLetters.has(letter)) {
      return; // Already guessed
    }

    setGuessedLetters((prev) => new Set(prev).add(letter));
    onLetterGuess(letter);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      
      // Check if it's a letter (A-Z)
      if (key.length === 1 && key >= "A" && key <= "Z") {
        // Only process if the letter hasn't been guessed
        setGuessedLetters((prev) => {
          if (prev.has(key)) {
            return prev; // Already guessed
          }
          const newSet = new Set(prev).add(key);
          onLetterGuess(key);
          return newSet;
        });
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [onLetterGuess]);

  return (
    <div className="space-y-2">
      {/* <h2 className="text-lg font-semibold mb-4">Select a Letter</h2> */}
      <div className="flex flex-col items-center gap-2">

        {letterRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2 justify-center">
            {row.map((letter) => {
              const isGuessed = guessedLetters.has(letter);
              return (
                <Button
                  key={letter}
                  variant="outline"
                  size="sm"
                  onClick={() => handleLetterClick(letter)}
                  disabled={isGuessed}
                  className="min-w-[2.5rem]"
                >
                  {letter}
                </Button>
              );
            })}
          </div>
        ))}
        
      </div>
    </div>
  );
}

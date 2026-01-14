type lettersProps = {
  numOfLetters  : number;
}

export default function GameGuessedLetters({ numOfLetters }: lettersProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-col items-center gap-2">
        <h1>_ A _</h1>
      </div>
    </div>
  );
}
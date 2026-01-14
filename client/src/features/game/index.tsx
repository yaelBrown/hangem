import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { ThemeSwitch } from "@/components/theme-switch";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Lock, Globe, CheckCircle2, XCircle, Play } from "lucide-react";
import GameConsole from "./components/gameConsole";
import GameGuessedLetters from "./components/gameGuessedLetters";
import GameHangman from "./components/gameHangman";
import GameLetters from "./components/gameLetters";
import GamePlayers from "./components/gamePlayers";

export function Game() {

  const initialState = {
    gameId: "T3ST1N",
    gameName: "Test Game",
    gamePlayers: 0,
    gameMaxPlayers: 19,
    gameRegion: "NA-East",
    gamePassword: false,
    gameStatus: "active",
    gameStarted: false,
    gameEnded: false,
    playerNames: ["Player1", "Player2", "Player3"]
  }

  const [state] = useState(initialState);
  const [gameIdPopoverOpen, setGameIdPopoverOpen] = useState(false);

  const handleLetterGuess = (letter: string) => {
    console.log("Letter guessed:", letter);
    // TODO: Implement letter guess logic
  };

  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <div className='ms-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>
            Game - {state.gameName} -{" "}
            <Popover open={gameIdPopoverOpen} onOpenChange={setGameIdPopoverOpen}>
              <PopoverTrigger asChild>
                <span 
                  className="cursor-pointer hover:underline"
                  onMouseEnter={() => setGameIdPopoverOpen(true)}
                  onMouseLeave={() => setGameIdPopoverOpen(false)}
                >
                  {state.gameId}
                </span>
              </PopoverTrigger>
              <PopoverContent 
                className="w-80"
                onMouseEnter={() => setGameIdPopoverOpen(true)}
                onMouseLeave={() => setGameIdPopoverOpen(false)}
              >
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Game Information</h4>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Game ID:</span>
                      <span className="font-medium">{state.gameId}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Game Name:</span>
                      <span className="font-medium">{state.gameName}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Players:</span>
                      <span className="font-medium">{state.gamePlayers} / {state.gameMaxPlayers}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Region:</span>
                      <span className="font-medium">{state.gameRegion}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Password Protected:</span>
                      {state.gamePassword ? (
                        <div className="flex items-center text-amber-600">
                          <Lock className="h-4 w-4 mr-1" />
                          <span>Yes</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-green-600">
                          <Globe className="h-4 w-4 mr-1" />
                          <span>No</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Status:</span>
                      {state.gameStatus === "active" ? (
                        <div className="flex items-center text-green-600">
                          <CheckCircle2 className="h-4 w-4 mr-1" />
                          <span>Active</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-red-600">
                          <XCircle className="h-4 w-4 mr-1" />
                          <span>Inactive</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Game Started:</span>
                      {state.gameStarted ? (
                        <div className="flex items-center text-green-600">
                          <Play className="h-4 w-4 mr-1" />
                          <span>Yes</span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground">No</span>
                      )}
                    </div>
                    
                    <div className="pt-2 border-t">
                      <div className="text-muted-foreground mb-2">Players:</div>
                      {state.playerNames.length > 0 ? (
                        <div className="space-y-1">
                          {state.playerNames.map((player, index) => (
                            <div key={index} className="text-sm">
                              • {player}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-sm text-muted-foreground">No players yet</div>
                      )}
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </h1>
        </div>

        <GameConsole />
        <GamePlayers />
        <GameHangman />
        <GameGuessedLetters />
        <GameLetters onLetterGuess={handleLetterGuess} />
      </Main>
    </>
  )
}
import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { ThemeSwitch } from "@/components/theme-switch";
import { GameSearchTable } from "./components/game-search-table";
import sampleGameData from "./sample_game_data/sampleGameData.json";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, RotateCcw, Users, Plus, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import regionEnum from "./util/region-enum.json";

export function GameSearch() {
  const initialState = {
    games: sampleGameData,
    regionFilter: "All",
  }

  const [gameSearchState, setGameSearchState] = useState(initialState);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [gameId, setGameId] = useState("");
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [createGameOpen, setCreateGameOpen] = useState(false);
  const [createGameForm, setCreateGameForm] = useState({
    roomName: "",
    maxPlayers: "",
    password: ""
  });

  // const filteredGames = useMemo(() => {
  //   return games.filter(game =>
  //     game.roomName.toLowerCase().includes(search.toLowerCase()) &&
  //     (region === "all" || game.region === region)
  //   );
  // }, [games, search, region]);

  const handleFilter = (region: string) => {
    // Get updated game data from database based on region filter
    // const updatedGames = getGamesByRegion(region);

    // For development purposes, use sample game data
    let updatedGames = sampleGameData;

    // Apply gameId search filter if it exists
    if (gameId.trim()) {
      updatedGames = updatedGames.filter((game) =>
        game.roomId.toLowerCase().includes(gameId.toLowerCase())
      );
    }

    setGameSearchState({
      ...gameSearchState,
      games: updatedGames.filter((game) => {
        if (region === "All") {
          return true;
        } else {
          return game.region === region;
        }
      }),
      regionFilter: region
    });
  }

  // Sort by Players Button
  const handleSortByPlayers = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    const sortedGames = [...gameSearchState.games].sort((a, b) => {
      if (newSortOrder === "asc") {
        return a.players - b.players;
      } else {
        return b.players - a.players;
      }
    });

    setGameSearchState({
      ...gameSearchState,
      games: sortedGames
    });
  }

  // Game ID Search Popover
  const handleGameIdSearch = () => {
    if (gameId.trim()) {
      // Filter games by Game ID (roomId)
      const filteredGames = sampleGameData.filter((game) =>
        game.roomId.toLowerCase().includes(gameId.toLowerCase())
      );

      // Apply region filter if not "All"
      const regionFilteredGames = filteredGames.filter((game) => {
        if (gameSearchState.regionFilter === "All") {
          return true;
        } else {
          return game.region === gameSearchState.regionFilter;
        }
      });

      setGameSearchState({
        ...gameSearchState,
        games: regionFilteredGames
      });

      setPopoverOpen(false);
    } else {
      // If search is empty, reset search filter but keep region
      const updatedGames = sampleGameData;

      setGameSearchState({
        ...gameSearchState,
        games: updatedGames.filter((game) => {
          if (gameSearchState.regionFilter === "All") {
            return true;
          } else {
            return game.region === gameSearchState.regionFilter;
          }
        })
      });

      setPopoverOpen(false);
    }
  }

  // Reset Button
  const handleReset = () => {
    setGameSearchState({
      games: sampleGameData,
      regionFilter: "All"
    });
    setGameId("");
    setSortOrder("asc");
    setPopoverOpen(false);
  }

  // Join a Game Button - joins the first-most full game (most players that isn't full)
  const handleJoinGame = () => {
    // Find games that aren't full, sort by players descending, get the first one
    const availableGames = gameSearchState.games.filter(
      (game) => game.players < game.maxPlayers
    );
    
    if (availableGames.length > 0) {
      // Sort by players descending to get the most full game
      const sortedByPlayers = [...availableGames].sort((a, b) => b.players - a.players);
      const gameToJoin = sortedByPlayers[0];
      
      // TODO: Implement actual join game logic
      console.log("Joining game:", gameToJoin);
      toast.success(`Joining game: ${gameToJoin.roomName} (${gameToJoin.roomId})`);
    } else {
      toast.error("No available games to join");
    }
  }

  // Create a Game Button
  const handleCreateGame = () => {
    if (!createGameForm.roomName.trim()) {
      toast.error("Please enter a room name");
      return;
    }
    
    if (!createGameForm.maxPlayers || parseInt(createGameForm.maxPlayers) < 1 || parseInt(createGameForm.maxPlayers) > 19) {
      toast.error("Please enter a valid max players count (1-19)");
      return;
    }

    // TODO: Implement actual create game logic
    console.log("Creating game:", createGameForm);
    toast.success(`Creating game: ${createGameForm.roomName} with ${createGameForm.maxPlayers} max players`);
    
    // Reset form and close popover
    setCreateGameForm({
      roomName: "",
      maxPlayers: "",
      password: ""
    });
    setCreateGameOpen(false);
  }

  const handleCancelCreateGame = () => {
    setCreateGameForm({
      roomName: "",
      maxPlayers: "",
      password: ""
    });
    setCreateGameOpen(false);
  }

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
          <h1 className='text-2xl font-bold tracking-tight'>Game Search</h1>
        </div>

        {/* Button/Input to filter games by region */}
        <div className='flex items-center justify-between space-x-2'>
          {/* Game Count */}
          <div className='text-sm text-muted-foreground'>
            {gameSearchState.games.length}   { gameSearchState.games.length === 0
              ? "No Games "
              : gameSearchState.games.length === 1
                ? "Game "
                : "Games " } 
                found.
          </div>

          <div className='flex items-center space-x-2'>
            {/* Join a Game Button */}
            <Button onClick={handleJoinGame} className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              Join a Game
            </Button>
          
            {/* Create a Game Button */}
            <Popover open={createGameOpen} onOpenChange={setCreateGameOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Create a Game
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Create a New Game</h4>
                    <p className="text-sm text-muted-foreground">
                      Fill in the details to create a new game room
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Room Name</label>
                      <Input
                        placeholder="Enter room name"
                        value={createGameForm.roomName}
                        onChange={(e) =>
                          setCreateGameForm({ ...createGameForm, roomName: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Max Players</label>
                      <Input
                        type="number"
                        placeholder="Enter max players (1-19)"
                        value={createGameForm.maxPlayers}
                        max={19}
                        min="1"
                        maxLength={2}
                        onChange={(e) => {
                          const value = e.target.value;
                          // Only allow numbers between 1 and 19
                          if (value === "" || (parseInt(value) >= 1 && parseInt(value) <= 19)) {
                            setCreateGameForm({ ...createGameForm, maxPlayers: value });
                          }
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Password (Optional)</label>
                      <Input
                        type="password"
                        placeholder="Enter password (optional)"
                        value={createGameForm.password}
                        onChange={(e) =>
                          setCreateGameForm({ ...createGameForm, password: e.target.value })
                        }
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={handleCreateGame} className="flex-1">
                        Create
                      </Button>
                      <Button onClick={handleCancelCreateGame} variant="outline" className="flex-1">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {/* Game ID Search Popover */}
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  Search Games
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Search by Game ID</h4>
                    <p className="text-sm text-muted-foreground">
                      Enter a Game ID to search for specific games
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder="Enter Game ID (e.g., A1F9KQ)"
                      value={gameId}
                      maxLength={6}
                      onChange={(e) => setGameId(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleGameIdSearch();
                        }
                      }}
                    />
                    <Button onClick={handleGameIdSearch} className="w-full">
                      Search
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {/* Sort by Players Button */}
            <Button onClick={handleSortByPlayers} variant="outline">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Sort by Players {sortOrder === "asc" ? "↑" : "↓"}
            </Button>

            {/* Region Filter Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="border px-3 py-2 rounded flex items-center">
                <Globe className="mr-2 h-4 w-4" />
                {gameSearchState.regionFilter}
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                {regionEnum.map((region) => (
                  <DropdownMenuItem onSelect={() => handleFilter(region)}>
                    {region}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Reset Button */}
            <Button onClick={handleReset} variant="outline">
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>

        {/* ===== Game Search Table ===== */}
        <GameSearchTable data={gameSearchState.games} />

      </Main >
    </>
  )
}
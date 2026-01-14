import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Play, Lock, Globe } from "lucide-react";

type GameSearchTableProps = {
  data: {
    roomId: string;
    roomName: string;
    players: number;
    maxPlayers: number;
    region: string;
    password: boolean;
  }[];
}

export function GameSearchTable({ data }: GameSearchTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Room ID</TableHead>
          <TableHead>Room Name</TableHead>
          <TableHead>Players</TableHead>
          <TableHead>Max Players</TableHead>
          <TableHead>Region</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        { data.map((game, idx) => (
          <TableRow key={idx}>
            <TableCell>
              <div className="flex items-center space-x-2">
                {game.password ? (
                  <Lock className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Globe className="h-4 w-4 text-muted-foreground" />
                )}
                <Button
                  size="sm"
                  variant="outline"
                  disabled={game.players === game.maxPlayers}
                >
                  <Play className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
            <TableCell>{game.roomId}</TableCell>
            <TableCell>{game.roomName}</TableCell>
            <TableCell>{game.players}</TableCell>
            <TableCell>{game.maxPlayers}</TableCell>
            <TableCell>{game.region}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
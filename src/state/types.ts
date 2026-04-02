export type LetterStatus = 
    | "correct"
    | "present"
    | "absent"
    | "empty";

export interface Tile {
    letter: string;
    status: LetterStatus;
}

export type Row = Tile[];

export type GameStatus = 
    | "playing"
    | "won"
    | "lost";

export interface GameState {
    solution: string;
    board: Row[];
    currentRow: number;
    currentCol: number;
    gameStatus: GameStatus;
 }


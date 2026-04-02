import type { GameState, Tile } from "./types";

const createEmptyTile = (): Tile => ({
    letter: "",
    status: "empty",
});

const createEmptyBoard = (): Tile[][] => {
  return Array.from({ length: 6 }, () =>
    Array.from({ length: 5 }, () => createEmptyTile())
  );
};

export const createInitialGameState = (solution: string): GameState => ({
    solution,
    board: createEmptyBoard(),
    currentRow: 0,
    currentCol: 0,
    gameStatus: "playing",
});
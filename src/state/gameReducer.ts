import type { GameState } from "./types";
import type { Action } from "./actions";
import { evaluateGuess } from "../engine/evaluateGuess";
import { createInitialGameState } from "./initialState";

export function gameReducer(
  state: GameState,
  action: Action
): GameState {
  switch (action.type) {
    case "ADD_LETTER": {
      if (state.currentCol >= 5 || state.gameStatus !== "playing") {
        return state;
      }

      const newBoard = [...state.board];
      newBoard[state.currentRow][state.currentCol].letter =
        action.letter;

      return {
        ...state,
        board: newBoard,
        currentCol: state.currentCol + 1,
      };
    }

    case "REMOVE_LETTER": {
      if (state.currentCol === 0) return state;

      const newBoard = [...state.board];
      newBoard[state.currentRow][state.currentCol - 1].letter = "";

      return {
        ...state,
        board: newBoard,
        currentCol: state.currentCol - 1,
      };
    }

    case "SUBMIT_GUESS": {
      if (state.currentCol < 5) return state;

      const guess = state.board[state.currentRow]
        .map((t) => t.letter)
        .join("");

      const result = evaluateGuess(guess, state.solution);

      const newBoard = [...state.board];

      result.forEach((status, i) => {
        newBoard[state.currentRow][i].status = status;
      });

      const won = guess === state.solution;
      const lastRow = state.currentRow === 5;

      return {
        ...state,
        board: newBoard,
        currentRow: state.currentRow + 1,
        currentCol: 0,
        gameStatus: won
          ? "won"
          : lastRow
          ? "lost"
          : "playing",
      };
    }

    case "RESET_GAME":
      return createInitialGameState(action.solution);

    default:
      return state;
  }
}
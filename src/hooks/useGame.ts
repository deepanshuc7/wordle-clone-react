import { useReducer } from "react";
import { gameReducer } from "../state/gameReducer";
import { createInitialGameState } from "../state/initialState";

const WORDS = ["apple", "grape", "peach", "berry", "mango"];

export function useGame() {
  const solution = WORDS[Math.floor(Math.random() * WORDS.length)];

  const [state, dispatch] = useReducer(
    gameReducer,
    createInitialGameState(solution),
  );

  return { state, dispatch };
}

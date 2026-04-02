import type { LetterStatus } from "../state/types";

export function evaluateGuess( guess: string, solution: string): LetterStatus[] {
    const result: LetterStatus[] = Array(5).fill("absent");
    const solutionLetters = solution.split("");

    for (let i = 0; i < 5; i++) { 
        if (guess[i] === solution[i]) {
            result[i] = "correct";
            solutionLetters[i] = ""; 
        }
    }

    for (let i = 0; i < 5; i++) {
        if (result[i] === "correct") continue;

        const index = solutionLetters.indexOf(guess[i]);
        if (index !== -1) {
            result[i] = "present";
            solutionLetters[index] = ""; 
        }
    }
    return result;
}
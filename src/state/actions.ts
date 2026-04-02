export type Action =
    | { type: "ADD_LETTER"; letter: string }
    | { type: "REMOVE_LETTER" }
    | { type: "SUBMIT_GUESS" }
    | { type: "RESET_GAME"; solution: string };
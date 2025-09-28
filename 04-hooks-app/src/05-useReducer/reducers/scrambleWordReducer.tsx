interface ScrambleWordsState {
    currentWord: string;
    errorCounter: number;
    guess: string;
    isGameOver: boolean;
    maxAllowError: number;
    maxSkips: number;
    points: number;
    scrambleWord: string;
    skipCounter: number;
    words: string[];
    totalWords: number;
}

const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = "") => {
    return word
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
};

const GAME_WORDS = [
    "REACT",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "HTML",
    "ANGULAR",
    "SOLID",
    "NODE",
    "VUEJS",
    "SVELTE",
    "EXPRESS",
    "MONGODB",
    "POSTGRES",
    "DOCKER",
    "KUBERNETES",
    "WEBPACK",
    "VITE",
    "TAILWIND",
];

export const getInitialState = (): ScrambleWordsState => {
    const shuffleWords = shuffleArray([...GAME_WORDS]);

    return {
        currentWord: shuffleWords[0],
        errorCounter: 0,
        guess: "",
        isGameOver: false,
        maxAllowError: 3,
        maxSkips: 3,
        points: 0,
        scrambleWord: scrambleWord(shuffleWords[0]),
        skipCounter: 0,
        words: shuffleWords,
        totalWords: shuffleWords.length,
    };
};

export type ScrableWordsAction = {
    type: "SET_CURRENT_WORD";
};

export const scrambleWordReducer = (
    state: ScrambleWordsState,
    action: ScrableWordsAction
) => {
    switch (action.type) {
        default:
            return state;
    }
};

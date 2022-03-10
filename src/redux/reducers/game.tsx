import { createSlice } from '@reduxjs/toolkit'
import { WORDS } from '../../utils/words';

function between(min: number, max: number) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}



export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        text: "",
        wordToGuess: "",
        gamesPlayed: 0,
        gamesWon: 0,
        wordsUsed: new Array<string>(),
        openScore: true,
        minutes: 5,
        seconds: 60,
        statusGame: "PLAYING", //* WON / LOST
        resetBoard: false
    },
    reducers: {
        setWordToGuess: (state, action) => {
            state.wordToGuess = action.payload;

        },
        increaseGame: (state) => {
            state.gamesPlayed = state.gamesPlayed + 1;
        },
        increaseGameWon: (state) => {
            state.gamesWon = state.gamesWon + 1;
        },
        setOpenScore: (state, action) => {
            state.openScore = action.payload
        },
        setGameLost: (state) => {
            state.openScore = true;
            state.statusGame = "LOST"
        },
        setResetBoard: (state) => {
            state.resetBoard = true;
            state.minutes = 5;
            state.seconds = 60;
            state.statusGame = "LOST"
        },
        refreshResetBoard: (state) => {
            state.resetBoard = false;
            state.statusGame = "PLAYING"
        },
        setGameWon: (state) => {
            state.openScore = true;
            state.statusGame = "WON"
        },
        setPlayingMode: (state) => {
            state.openScore = false;
            state.statusGame = "PLAYING"

        },
        showScore: (state) => {
            state.openScore = true;

        },
        selectWord: (state) => {

            let newWord = WORDS[between(0, WORDS.length - 1)];
            let wordIsAlreadyUsed = state.wordsUsed.some(function (item: any) { return String(item).toLocaleLowerCase() === String(newWord).toLocaleLowerCase() });
            while (wordIsAlreadyUsed) {
                newWord = WORDS[between(0, WORDS.length - 1)];
                // eslint-disable-next-line no-loop-func
                wordIsAlreadyUsed = state.wordsUsed.some(function (item: any) { return String(item).toLocaleLowerCase() === String(newWord).toLocaleLowerCase() });
            }
         
            state.wordToGuess = newWord;
            const list= JSON.parse(JSON.stringify(state.wordsUsed));
            list.push(newWord);           
            state.wordsUsed = list
            console.log({ newWord, wordsUsed: state.wordsUsed })
        },

        setMinutes: (state, action) => {
            state.minutes = action.payload
        },
        setSeconds: (state, action) => {
            state.seconds = action.payload
        },
    },
})

// Action creators are generated for each case reducer function

export const {
    setWordToGuess,
    increaseGame,
    increaseGameWon,
    setOpenScore,
    setGameLost,
    setResetBoard,
    refreshResetBoard,
    setGameWon,
    selectWord,
    setPlayingMode,
    setMinutes, setSeconds,
    showScore
} = gameSlice.actions

export default gameSlice.reducer;


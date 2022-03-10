
import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { increaseGame, increaseGameWon, refreshResetBoard, selectWord, setGameLost, setGameWon, setOpenScore, setPlayingMode } from "../../../redux/reducers/game";
import { GUESS } from "../../../utils/constants/begin";
import Letter from "../../Letter";

const Board = () => {
    const [game, setGame] = useState({
        text: "",
        currentAttempt: 1
    })
    const [attempt, setAttempt] = useState(JSON.parse(JSON.stringify(GUESS)))
    const [attempt2, setAttempt2] = useState(JSON.parse(JSON.stringify(GUESS)))
    const [attempt3, setAttempt3] = useState(JSON.parse(JSON.stringify(GUESS)))
    const [attempt4, setAttempt4] = useState(JSON.parse(JSON.stringify(GUESS)))
    const [attempt5, setAttempt5] = useState(JSON.parse(JSON.stringify(GUESS)))
    const wordToGuess = useSelector((state: RootStateOrAny) => state.game.wordToGuess)
    const gamesPlayed = useSelector((state: RootStateOrAny) => state.game.gamesPlayed)
    const gamesWon = useSelector((state: RootStateOrAny) => state.game.gamesWon)
    const statusGame = useSelector((state: RootStateOrAny) => state.game.statusGame)
    const resetBoard = useSelector((state: RootStateOrAny) => state.game.resetBoard)
    const dispatch = useDispatch();

    function handleKeyPress(e: any) {
        const key = String(e.key).toLowerCase();
        if ("abcdefghijklmnopqrstuvwxyz".includes(key.toLowerCase()) && statusGame === "PLAYING") {

            setGame({ ...game, text: game.text + key });
        }

    }
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    });

    const gameAttempt = (attempt: any, setAttempt: any) => {
        let i = 0;
        let attempCpy = [...attempt];
        for (let char of game.text) {
            attempCpy[i].letter = char;
            attempCpy[i].bg = "bg-gray-box";
            if (game.text.length === 5 && wordToGuess.includes(char)) {
                attempCpy[i].bg = "bg-yellow-box";
                for (let index = 0; index < wordToGuess.length; index++) {
                    if (wordToGuess[index] === char && index == i) {
                        attempCpy[i].bg = "bg-green-box";
                    }
                }
            }
            i++;
        }
        setAttempt(attempCpy);
    }


    useEffect(() => {
        if (game.text) {
            if (game.text.length === 5) {
                setGame({ currentAttempt: game.currentAttempt + 1, text: "" });
            }

            switch (game.currentAttempt) {
                case 1:
                    gameAttempt(attempt, setAttempt);
                    break;
                case 2:
                    gameAttempt(attempt2, setAttempt2);
                    break;
                case 3:
                    gameAttempt(attempt3, setAttempt3);
                    break;
                case 4:
                    gameAttempt(attempt4, setAttempt4);
                    break;
                case 5:
                    gameAttempt(attempt5, setAttempt5);
                    break;
            }

            if (game.text === wordToGuess) {

                dispatch(increaseGame());
                dispatch(increaseGameWon());
                setTimeout(() => {
                    dispatch(setGameWon())
                }, 200)
            } else {
                if (game.currentAttempt === 6) {
                    dispatch(increaseGame());
                    dispatch(setGameLost())
                }
            }
        }

        if (statusGame) {
            if (statusGame === "WON" || statusGame === "LOST") {
                setGame({ text: "", currentAttempt: 1 });
                handleResetBoard()
            }
        }

        if (resetBoard) {
            dispatch(refreshResetBoard())
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [game.text, game.currentAttempt, statusGame, resetBoard])

    /*     useEffect(() => {
            if (currentAttempt) {
                setText("");
            }
    
        }, [currentAttempt])
     */

    const handleResetBoard = () => {
        dispatch(selectWord())
        setAttempt(JSON.parse(JSON.stringify(GUESS)));
        setAttempt2(JSON.parse(JSON.stringify(GUESS)));
        setAttempt3(JSON.parse(JSON.stringify(GUESS)));
        setAttempt4(JSON.parse(JSON.stringify(GUESS)));
        setAttempt5(JSON.parse(JSON.stringify(GUESS)));
    }
    return (
        <div className="h-[562px]  flex flex-col items-center justify-center" >
            <div className="flex justify-center">
                {attempt.map((item: any, index: number) => (
                    <Letter key={index + "-"} letter={item.letter} bg={item.bg} border={item.bg} text={item.text} />
                ))}
            </div>
            <div className="flex justify-center mt-[11px] ">
                {attempt2.map((item: any, index: any) => (
                    <Letter key={index + "-"} letter={item.letter} bg={item.bg} border={item.bg} text={item.text} />
                ))}
            </div>
            <div className="flex justify-center mt-[11px]">
                {attempt3.map((item: any, index: any) => (
                    <Letter key={index + "-"} letter={item.letter} bg={item.bg} border={item.bg} text={item.text} />
                ))}
            </div>
            <div className="flex justify-center mt-[11px]">
                {attempt4.map((item: any, index: any) => (
                    <Letter key={index + "-"} letter={item.letter} bg={item.bg} border={item.bg} text={item.text} />
                ))}
            </div>
            <div className="flex justify-center mt-[11px]">
                {attempt5.map((item: any, index: any) => (
                    <Letter key={index + "-"} letter={item.letter} bg={item.bg} border={item.bg} text={item.text} />
                ))}
            </div>
        </div>
    );

}


export default Board

import { useEffect, useState } from "react";
import { GUESS } from "../../../utils/constants/begin";
import Letter from "../../Letter";

const Board = () => {
    const [game, setGame] = useState({
        text: "",
        currentAttempt: 1
    })
    const [attempt, setAttempt] = useState([...GUESS])
    const [attempt2, setAttempt2] = useState(JSON.parse(JSON.stringify(GUESS)))
    const [attempt3, setAttempt3] = useState(JSON.parse(JSON.stringify(GUESS)))
    const [attempt4, setAttempt4] = useState(JSON.parse(JSON.stringify(GUESS)))
    const [attempt5, setAttempt5] = useState(JSON.parse(JSON.stringify(GUESS)))
    const word = "SILLA";
  

    function handleKeyPress(e: any) {
        const key = String(e.key).toUpperCase();
        setGame({ ...game, text: game.text + key });

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
            if (word.includes(char)) {
                attempCpy[i].bg = "bg-yellow-box";
                if (word.indexOf(char) === i) {
                    attempCpy[i].bg = "bg-green-box";
                }
            } else {
                attempCpy[i].bg = "bg-gray-box";
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

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [game.text])

    /*     useEffect(() => {
            if (currentAttempt) {
                setText("");
            }
    
        }, [currentAttempt])
     */
    return (
        <div className="h-[562px]  flex flex-col items-center justify-center" >            
            <div className="flex justify-center">
                {attempt.map((item, index) => (
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
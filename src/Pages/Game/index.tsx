import Board from "../../Components/Game/Board";
import KeyBoard from "../../Components/Game/KeyBoard";
import TopBar from "../../Components/Game/TopBar";

import { useEffect, useState } from "react";

import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { increaseGame,  selectWord, setGameLost, setMinutes, setResetBoard, setSeconds, setWordToGuess } from "../../redux/reducers/game";
import Score from "../../Components/Game/Score";

function Game() {
    const dispatch = useDispatch();
    const minutes = useSelector((state: RootStateOrAny) => state.game.minutes)
    const seconds = useSelector((state: RootStateOrAny) => state.game.seconds)

    useEffect(() => {
        dispatch(selectWord())
    }, [])

    useEffect(() => {
        if (minutes >= 0) {
            seconds >= 0 && setTimeout(() => {
                if (seconds === 0) {
                    dispatch(setMinutes(minutes - 1))
                    dispatch(setSeconds(60))

                } else {
                    dispatch(setSeconds(seconds - 1))
                }
            }, 1000);
        } else {          
            dispatch(increaseGame());
            dispatch(setResetBoard())
        }
    }, [seconds]);

    return (
        <div className=" flex pt-[83px] w-screen justify-center">
            <div className="flex flex-col w-[638px]">
                {minutes + ":" + seconds}
                <TopBar />
                <Board />
                <KeyBoard />
            </div>

            <Score></Score>
        </div>
    );
}

export default Game;

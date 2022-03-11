import Board from "../../Components/Game/Board";
import KeyBoard from "../../Components/Game/KeyBoard";
import TopBar from "../../Components/Game/TopBar";
import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { increaseGame, selectWord, setMinutes, setResetBoard, setSeconds } from "../../redux/reducers/game";
import Score from "../../Components/Game/Score";
import Instructions from "../../Components/Game/Instructions";

function Game() {
    const dispatch = useDispatch();
    const minutes = useSelector((state: RootStateOrAny) => state.game.minutes)
    const seconds = useSelector((state: RootStateOrAny) => state.game.seconds)
    const statusGame = useSelector((state: RootStateOrAny) => state.game.statusGame)
    useEffect(() => {
        dispatch(selectWord())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        let timer;
        let timerId;
        if (minutes >= 0) {
            if (seconds >= 0) {
                timer = () => setTimeout(() => {
                    if (seconds === 0) {
                        dispatch(setMinutes(minutes - 1))
                        dispatch(setSeconds(60))

                    } else {
                        dispatch(setSeconds(seconds - 1))
                    }
                }, 1000);

                timerId = timer();
            }
        } else {
            if (statusGame === 'PLAYING') {              
                dispatch(increaseGame());
                dispatch(setResetBoard())
            }

        }

        if(statusGame==="LOST" || statusGame==="WON"){
            if(timerId){
                clearTimeout(timerId);
            }
        }  

    });

    return (
        <div className=" flex pt-[23px] w-screen justify-center">
            <div className="flex flex-col w-[638px]">
                <TopBar />
                <Board />
                <KeyBoard />
            </div>
            <Score />
            <Instructions />
        </div>
    );
}

export default Game;

import Board from "../../Components/Game/Board";
import KeyBoard from "../../Components/Game/KeyBoard";
import TopBar from "../../Components/Game/TopBar";


function Game() {
    return (
        <div className="flex pt-[83px] w-screen justify-center">
            <div className="flex flex-col w-[638px] bg-orange-200">
                <TopBar />
                <Board />
                <KeyBoard />
            </div>
        </div>
    );
}

export default Game;

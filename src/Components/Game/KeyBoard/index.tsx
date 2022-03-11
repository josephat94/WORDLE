import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setGame } from "../../../redux/reducers/game";
import DelIcon from '../../../assets/del.svg';
import Key from "./key";

const KeyBoard = () => {


    const ROW1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "p"]
    const ROW2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"]
    const ROW3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "--",]
    const game = useSelector((state: RootStateOrAny) => state.game.game)
    const dispatch = useDispatch();
    const handleClick = (key: string) => {
        if (key !== "ENTER" && key !== "--") {
            if ("abcdefghijklmnñopqrstuvwxyz".includes(key.toLowerCase())) {
                dispatch(setGame({ ...game, text: game.text + String(key).toLowerCase() }));
            }
            return;
        }

    }
    return (

        <div className="bg-keyboard dark:bg-keyboard-dark w-[100%] h-[238px] rounded-[15px]  flex flex-col">
            <div className=" mt-[38px] pl-[52.6px]  flex cursor-pointer">
                {ROW1.map(key => (
                    <Key char={key}  onClick={function () { handleClick(key) }} key={key}>
                        {key}
                    </Key>
                ))}
            </div>
            <div className=" mt-[8.95px] pl-[68px]  flex cursor-pointer">
                {ROW2.map(key => (
                    <Key char={key} onClick={function () { handleClick(key) }} key={key}>
                        {key}
                    </Key>
                ))}
            </div>
            <div className=" mt-[8.95px] pl-[20px]  flex cursor-pointer">
                {ROW3.map(key => (
                    <Key char={key} onClick={function () { handleClick(key) }} key={key}>
                        {key === "--" ?
                            <img alt="del-icon" src={DelIcon}></img>
                        :
                            key
                        }
                    </Key>
                ))}
            </div>
        </div>
    );


}


export default KeyBoard

import ILetter from '../../Interfaces/letter';
import './styles.css';

function Letter({ letter = "A", bg = "bg-gray-100", border = "", text = "", ...props }: ILetter) {
    return (
        <div className={`flex w-[76px] h-[76px] ${bg} ${border} ${text}
            justify-center items-center mr-[11px] rounded-[5px]
            font-extrabold
            text-[35px]
            uppercase
            scale-in-center 
            `}
        >
            {letter}
        </div >
    );
}

export default Letter;

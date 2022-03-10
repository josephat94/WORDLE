import Letter from '../../Components/Letter';
import { useNavigate } from 'react-router-dom';
import { CANTO, GATOS, VOCAL } from '../../utils/constants/begin';
import './styles.css';

function Begin() {
    const navigate = useNavigate();
    const goToGame = () => {
        navigate("/game");
    }

    return (
        <div id={"MainCtn"} className='pt-[57px] pb-[57px] flex justify-center' >
            <div id="BeginCtn" className='flex flex-col rounded-[15px] ' >
                <h3 className="flex justify-center title-begin pt-[54px] " >
                    Cómo Jugar
                </h3>
                <p className="text-line" >
                    Adivina la palabra oculta en cinco intentos.
                </p>
                <p className="text-line">
                    Cada intento debe ser una palabra válida de 5 letras.
                </p>
                <p className='pl-[42px] pr-[26px] '>
                    Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.
                </p>
                <h4 className='mt-[16px] pl-[42px] '>
                    Ejemplos
                </h4>

                <div className=" flex flex-row mt-7 mb-6 w-100 pl-[55px]"  >
                    {GATOS.map((item, index) => (
                        <Letter key={`char_$_${index}`} letter={item.letter} bg={item.bg} border={item.border} />
                    ))}
                </div>
                <p className='pl-[42px] pr-[54px] '>
                    La letra <b>G</b> está en la palabra y en la posición correcta.
                </p>
                <div className=" flex flex-row mt-7 mb-6 w-100 pl-[55px]" >
                    {VOCAL.map((item, index) => (
                        <Letter key={`char_$2_${index}`} letter={item.letter} bg={item.bg} border={item.border} />
                    ))}
                </div>

                <p className='pl-[42px]  '>
                    La letra <b>C</b> está en la palabra pero en la posición incorrecta.
                </p>

                <div className=" flex flex-row mt-7 mb-6 w-100 pl-[57px]" >
                    {CANTO.map((item, index) => (
                        <Letter key={`char_$3_${index}`} letter={item.letter} bg={item.bg} border={item.border} />
                    ))}
                </div>

                <p className='pl-[45px] mb-[36px] ' >
                    La letra <b>O</b> no está en la palabra.
                </p>
                <p className='pl-[46px] mb-[31px]' >
                    Puede haber letras repetidas. Las pistas son independientes para cada letra.
                </p>

                <p className='pl-[99px] '>
                    ¡Una palabra nueva cada 5 minutos!
                </p>
                <div className='flex justify-center items-center mt-[31px] pb-[24px] ' >
                    <button className={`flex justify-center items-center
                    bg-green-box  text-white font-extrabold
                    rounded-[5px]
                    w-[263px]
                    h-[50px]
                    cursor-pointer
                `}
                        onClick={goToGame}
                    >
                        ¡JUGAR!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Begin;

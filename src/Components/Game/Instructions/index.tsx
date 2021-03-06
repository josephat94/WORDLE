
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef } from "react";
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { hideInstructions, initGame } from '../../../redux/reducers/game';
import { CANTO, GATOS, VOCAL } from '../../../utils/constants/begin';
import Letter from '../../Letter';
import './styles.css'
const Instructions = () => {

    const openInstructions = useSelector((state: RootStateOrAny) => state.game.openInstructions)
    const statusGame = useSelector((state: RootStateOrAny) => state.game.statusGame)
    const cancelButtonRef = useRef(null)
    const dispatch = useDispatch();
    const titleRef = useRef<null | HTMLDivElement>(null)
    function handleAccept() {

        if (statusGame === 'PLAYING') {
            dispatch(hideInstructions())
        } else {
            dispatch(initGame())
        }

    }

    useEffect(() => {
        console.log('SCROLL')
        setTimeout(function(){
    /*         let el = document.querySelector('.ultraespecial');
            if (el) el.scrollTop = 0 */
        },1000)

    }, [openInstructions])



    return (
        <Transition.Root show={openInstructions} as={Fragment}>
            <Dialog ref={titleRef} as="div" className="fixed z-10 inset-0 overflow-y-auto w-[100%] " initialFocus={cancelButtonRef} onClose={handleAccept}>
                <div className="flex items-center justify-center min-h-screen  px-4 pb-20 text-center pt-[87px] ">
                    <div style={{ position: "absolute", top: "0" }}></div>
                    <div className="fixed inset-0 bg-modal dark:bg-modal-dark bg-opacity-75 transition-opacity fade-in" aria-hidden="true"></div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div id="BeginCtn" className='flex flex-col rounded-[15px] w-[546px] pb-[24px] relative align-bottom bg-modal-ctn dark:bg-modal-ctn-dark 
                    text-left overflow-hidden  transform transition-all 
                    text-black
                    dark:text-white ' >
                        <h3 className="flex justify-center title-begin pt-[54px] " >

                            C??mo Jugar
                        </h3>
                        <p className="text-line" >
                            Adivina la palabra oculta en cinco intentos.
                        </p>
                        <p className="text-line">
                            Cada intento debe ser una palabra v??lida de 5 letras.
                        </p>
                        <p className='pl-[42px] pr-[26px] '>
                            Despu??s de cada intento el color de las letras cambia para mostrar qu?? tan cerca est??s de acertar la palabra.
                        </p>
                        <h4 className='mt-[16px] pl-[42px] '>
                            Ejemplos
                        </h4>

                        <div className=" flex flex-row mt-7 mb-6 w-100 pl-[55px]"  >
                            {GATOS.map((item, index) => (
                                <Letter key={`char_$_${index}`} letter={item.letter} bg={item.bg} border={item.border} />
                            ))}
                        </div>
                        <p className='pl-[42px] pr-[0px] '>
                            La letra <b>G</b> est?? en la palabra y en la posici??n correcta.
                        </p>
                        <div className=" flex flex-row mt-7 mb-6 w-100 pl-[55px]" >
                            {VOCAL.map((item, index) => (
                                <Letter key={`char_$2_${index}`} letter={item.letter} bg={item.bg} border={item.border} />
                            ))}
                        </div>

                        <p className='pl-[42px]  '>
                            La letra <b>C</b> est?? en la palabra pero en la posici??n incorrecta.
                        </p>

                        <div className=" flex flex-row mt-7 mb-6 w-100 pl-[57px]" >
                            {CANTO.map((item, index) => (
                                <Letter key={`char_$3_${index}`} letter={item.letter} bg={item.bg} border={item.border} />
                            ))}
                        </div>

                        <p className='pl-[45px] mb-[36px] ' >
                            La letra <b>O</b> no est?? en la palabra.
                        </p>
                        <p className='pl-[46px] mb-[31px]' >
                            Puede haber letras repetidas. Las pistas son independientes para cada letra.
                        </p>

                        <p className='pl-[99px] '>
                            ??Una palabra nueva cada 5 minutos!
                        </p>
                        <div className='flex justify-center items-center mt-[31px] pb-[24px] ' >
                            <button className={`flex justify-center items-center
                    bg-green-box  text-white font-extrabold
                    rounded-[5px]
                    w-[263px]
                    h-[50px]
                    cursor-pointer
                `}
                                onClick={handleAccept}
                            >
                                ??JUGAR!
                            </button>
                        </div>
                    </div>


                </div>
            </Dialog>
        </Transition.Root >

    );
}

export default Instructions;
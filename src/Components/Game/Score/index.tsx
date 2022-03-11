import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef } from "react";
import { setOpenScore, setPlayingMode } from "../../../redux/reducers/game";
const Score = () => {
    const gamesPlayed = useSelector((state: RootStateOrAny) => state.game.gamesPlayed)
    const gamesWon = useSelector((state: RootStateOrAny) => state.game.gamesWon)
    const openScore = useSelector((state: RootStateOrAny) => state.game.openScore)
    const statusGame = useSelector((state: RootStateOrAny) => state.game.statusGame)

    const wordsUsed= useSelector((state: RootStateOrAny) => state.game.wordsUsed)
    const minutes = useSelector((state: RootStateOrAny) => state.game.minutes)
    const seconds = useSelector((state: RootStateOrAny) => state.game.seconds)

    const cancelButtonRef = useRef(null)
    const dispatch = useDispatch();

    function handleAccept() {
        
        dispatch(setPlayingMode())
    }
    return (
        <Transition.Root show={openScore} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={handleAccept}>
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">

                    <div className="fixed inset-0 bg-modal dark:bg-modal-dark bg-opacity-75 transition-opacity fade-in" aria-hidden="true"></div>


                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div className="border border-solid border-black
                    w-[546px] pb-[24px] relative align-bottom bg-modal-ctn dark:bg-modal-ctn-dark 
                    rounded-lg text-left overflow-hidden shadow-xl transform transition-all pt-[59px]
                    text-black
                    dark:text-white
                    slide-in-bottom
                    ">
                        <h3 className="font-extrabold text-center text-[35px]">
                            Estadísticas
                        </h3>
                        <div className="pt-[44px] flex justify-between items-center w-[100%]">
                            <div>
                                <h3 className="pl-[103px] font-extrabold text-[35px]">
                                    {gamesPlayed}
                                </h3>
                                <p className="pl-[78px] text-[21px] font-normal">
                                    Jugadas
                                </p>
                            </div>
                            <div>
                                <h3 className="pr-[117px] font-extrabold text-[35px] text-right">
                                    {gamesWon}
                                </h3>
                                <p className="pr-[93px] text-[21px] font-normal">
                                    Victorias
                                </p>
                            </div>
                        </div>
                        {statusGame==="LOST" &&
                              <div className="mt-[43px] flex justify-between items-center w-[100%] h-[57px]">
                              <h4 className="text-center text-[19px] font-normal w-[100%]">
                                La palabra era: <b className="font-bold uppercase">{wordsUsed[wordsUsed.length-2]}  </b> 
                              </h4>
                          </div>
                        }
                  
                        <div className="mt-[57px] flex justify-between items-center w-[100%] h-[57px]">
                            <h4 className="text-center text-[19px] font-normal w-[100%]">
                                SIGUIENTE PALABRA
                            </h4>
                        </div>
                        <div className="flex justify-between items-center w-[100%]">
                            {
                                minutes===-1 ?
                                <h3 className="text-center text-[24px] font-bold w-[100%]">
                                00 : 00
                            </h3>
                                :
                                <h3 className="text-center text-[24px] font-bold w-[100%]">
                                {minutes<10?'0'+minutes:minutes}<span className="ml-[0.2rem] mr-[0.2rem] ">:</span>{seconds<10?'0'+seconds:seconds}
                            </h3>
                            }
                         
                        </div>
                        <div className="mt-[30px] flex justify-center items-center w-[100%]">
                            <div
                                onClick={handleAccept}
                                className="w-[263px] h-[50px] rounded-[5px] cursor-pointer text-[28px] font-extrabold flex items-center justify-center bg-green-box text-white">
                                Aceptar
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>

    );
}

export default Score;
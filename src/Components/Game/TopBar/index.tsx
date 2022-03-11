import QuestionIcon from '../../../assets/question.svg'
import ChartIcon from '../../../assets/chart.svg'
import QuestionDarkIcon from '../../../assets/question-dark.svg'
import ChartDarkcon from '../../../assets/chart-dark.svg'
import './styles.css'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showInstructions, showScore } from '../../../redux/reducers/game';
const TopBar = () => {

    const [lightMode, setLightMode] = useState(true);
    const dispatch= useDispatch();

    useEffect(function(){
        document.documentElement.classList.remove('dark')
    },[])
    const handleSwitch = () => {
        if(lightMode){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
        setLightMode(!lightMode)
    }

    const handleScore=()=>{
        dispatch(showScore())
    }
    const handleInstructions=()=>{
        dispatch(showInstructions())
    }
    return (

        <div className="bg-top dark:bg-top-dark w-[100%] h-[84px] flex items-center text-color-top dark:text-color-top-dark rounded-[15px] ">
            <div onClick={handleInstructions} className='cursor-pointer'>
                <img alt='question' className='
                pl-[22px]' src={ lightMode ? QuestionIcon : QuestionDarkIcon }  />
                
            </div>
            <div className='font-semibold text-[40px] pl-[183px] tracking-[0.075em]'>
                WORDLE
            </div>
            <div onClick={handleScore} className='font-semibold text-[40px] pl-[106px] cursor-pointer '>
                <img alt='question' src={ lightMode ? ChartIcon : ChartDarkcon }  />
            </div>
            <div onClick={handleSwitch} className={`switch ${lightMode ?" sw-light " : "sw-dark"} ml-[11.45px] flex items-center `}>
                <div className={`${lightMode ? 'circle-light slide-right' : 'circle-dark slide-left'} `}>
                    <div className='shine'></div>
                </div>
            </div>
        </div>
    );


}


export default TopBar
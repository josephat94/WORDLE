import QuestionIcon from '../../../assets/question.svg'
import ChartIcon from '../../../assets/chart.svg'
import './styles.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showScore } from '../../../redux/reducers/game';
const TopBar = () => {

    const [lightMode, setLightMode] = useState(true);
    const dispatch= useDispatch();
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
    return (

        <div className="bg-top dark:bg-top-dark w-[100%] h-[84px] flex items-center text-color-top dark:text-color-top-dark ">
            <div className='cursor-pointer'>
                <img alt='question' className='
                pl-[22px]' src={QuestionIcon} />
            </div>
            <div className='font-semibold text-[40px] pl-[183px]'>
                WORDLE
            </div>
            <div onClick={handleScore} className='font-semibold text-[40px] pl-[106px] cursor-pointer '>
                <img alt='question' src={ChartIcon} />
            </div>
            <div onClick={handleSwitch} className={`switch ${lightMode ?" sw-light " : "sw-dark"} ml-[11.45px] flex items-center `}>
                <div className={`${lightMode ? 'circle-light' : 'circle-dark'} `}>
                    <div className='shine'></div>
                </div>
            </div>
        </div>
    );


}


export default TopBar
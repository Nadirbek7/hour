import './Phone.scss'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import lest from '../../assets/imgs/shutterstock_1521991916_edited-removebg-preview.png'
import { NavLink } from 'react-router-dom';
const Phone = () => {
  return (
    <>
    
    <div className="phone">
        <div className="phone__color">
            <div className='phone__color__strap'>
                <div className='phone__color__strap__mimi'>
                    <div className='phone__color__strap__mimi__fd'>

                <RemoveRedEyeIcon/>
                    </div>

                </div>
                <h1 className='h03'>
                Цвет ремешка под настроение
                </h1>

                <p className='p03'>Это текст. Нажмите и выберите «Редактировать текст» или нажмите дважды, чтобы добавить текст. Расскажите посетителям о себе.</p>
            </div>
        </div>

        

        <div className='phone__hour'>
            <div className='phone__hour__lan'>
            <div className='phone__hour__lan__bar'></div>
            <div className='phone__hour__lan__bar'></div>
            <div className='phone__hour__lan__bar'></div>
            <div className='phone__hour__lan__bar'></div>
            <div className='phone__hour__lan__bar'></div>
            <div className='phone__hour__lan__bar'></div>
            <div className='phone__hour__lan__bar'></div>
            <div className='phone__hour__lan__bar'></div>
            <div className='phone__hour__lan__bar'></div>
            <div className='phone__hour__lan__bar'></div>
            <div className='phone__hour__lan__bar'></div>
            <div className='phone__hour__lan__bar'></div>
            <div className='phone__hour__lan__bar'></div>
            <div className='phone__hour__lan__bar'></div>
            <div className='phone__hour__lan__bar'></div>
            <div className='phone__hour__lan__bar'></div>
            </div>
            <div className='kia'>

            <img className='kiaar' src={lest} alt="" />
            </div>

        </div>
        <div className='yous'>
            <NavLink to={"/home"} className='take1'>Купить</NavLink>
        </div>

        
    </div>

    </>
  )
}

export default Phone
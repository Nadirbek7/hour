
import './Footer.scss'

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Car from '../../assets/imgs/shutterstock_1523165789-removebg-preview.png' 
import { NavLink } from 'react-router-dom';



const Footer = () => {
  return (
    <>
   <div className="footer">
    <div className="footer__older">
        <div className="footer__older__vertex">
            <div className='footer__older__vertex__my'>
            <RadioButtonCheckedIcon/>
            </div>
            <p className='footer__older__vertex__p030'>ЧАСЫ, МЕНЯЮЩИЕ ЖИЗНЬ</p>

            <h1 className='footer__older__vertex__h030'>Закажите 0.4 TrackMate XE сегодня</h1>
            <NavLink to={"/home"} className='footer__older__vertex__cup'>Купить</NavLink>
        </div>

        <div className="footer__older__discount">
            <div className='footer__older__discount__sagat'>
                <img className='footer__older__discount__sagat__img100' src={Car} alt="" />
            </div>
            <h1 className='footer__older__discount__h031'> Подпишитесь и получите 15% скидку на первую покупку </h1>

            <div className='footer__older__discount__inputs'>
                <div className='footer__older__discount__inputs__labels'>
                <label htmlFor="">Эл. почта</label>
                </div>
                <div className='footer__older__discount__inputs__foot'>

                <input className='footer__older__discount__inputs__foot__input' type="text" placeholder='Добавьте свою эл. почту'/>
                <button className='footer__older__discount__inputs__foot__jumper'>Подписаться</button>
                </div>
            </div>
        </div>
    </div>
   </div>

   
    </>
  )
}

export default Footer
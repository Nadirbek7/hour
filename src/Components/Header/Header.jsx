// import React from 'react'
import './Header.scss'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LocalMallIcon from '@mui/icons-material/LocalMall';
import trac from '../../assets/imgs/new_first_fold-removebg-preview.png'
import { NavLink } from 'react-router-dom';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';

const Header = () => {



  return (
    <>
    <div className='header'>
      <div className='header__ti'>
      <div className='header__ti__sl'>

        <div className='header__ti__sl__track'>
             <div className='header__ti__sl__track__title'>
              
                <RadioButtonCheckedIcon/>
                <h1 className='header__ti__sl__track__title-h01'>
                  TrackMate
                </h1>
             </div>
       

             <div className='header__ti__sl__track__buy'>
                  <h1 className='header__ti__sl__track__buy-h02'>Вопросы и ответы</h1>
                  <AccountCircleIcon/>
                  <NavLink className='header__ti__sl__track__buy-h02' to={"/Contact"}>Войти</NavLink>
                  <SentimentSatisfiedIcon/>
                  <NavLink to={"/home"} className='take'>Купить</NavLink>
             </div> 
        </div>

        <div className='header__ti__sl__fitness'>
          <div className='header__ti__sl__fitness__text'>
            <div className='header__ti__sl__fitness__text__s2'>
            <h1 className='header__ti__sl__fitness__text__h03'>Контролируй свое здоровье</h1>
            <h1 className='header__ti__sl__fitness__text__h04'>0.4 TrackMate XE</h1>
            <h1 className='header__ti__sl__fitness__text__h03'>Фитнес-трекер, который мотивирует</h1>

            <NavLink to={"/home"} className='take'>Купить</NavLink>
            </div>
          </div>

          <div className='header__ti__sl__fitness__card'>
            <div className='hehe'></div>
            <img className='header__ti__sl__fitness__card__img1' src={trac} alt="" />
          </div>
        </div>
      </div>

      </div>

    </div>
    </>
  )
}

export default Header
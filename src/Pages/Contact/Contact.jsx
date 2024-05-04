import React from 'react'
import './Contact.scss'
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Contact = () => {
  return (
    <>
    
    <div className='osnova'>
        <div className='osnova__fon'></div>
      <div className='osnova__background'>

        <div className='osnova__background__fly'>
          

          <div className='osnova__background__fly__icon'>
            <div className='osnova__background__fly__icon__kub'><CloseIcon/></div>
          </div>

          <h1 className='osnova__background__fly__h130'>Login</h1>

          <div className='osnova__background__fly__git'>
          <div className='osnova__background__fly__git__emaill'>
            <div className='osnova__background__fly__git__emaill__slider'>
            <input className='osnova__background__fly__git__emaill__slider__input01' type="email" placeholder='Email' />

            <span className='iconn'><EmailIcon/></span>

            </div>

            <div className='osnova__background__fly__git__emaill__slider'>
            <input className='osnova__background__fly__git__emaill__slider__input01' type="password" placeholder='Password'/>

            <span className='iconn'><LockIcon/></span>

            </div>

            <div className='osnova__background__fly__git__emaill__login'>

            <button className='osnova__background__fly__git__emaill__login__registration' >Login</button>
            </div>

          </div>

          

          </div>


        </div>

      </div>
    </div>
    
    </>
  )
}

export default Contact
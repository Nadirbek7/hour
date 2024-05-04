  import React, { useState } from "react";
  import './Home.scss'
  import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
  import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  import LocalMallIcon from '@mui/icons-material/LocalMall';
  import { NavLink } from 'react-router-dom';

  import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';




  import ggg from '../../assets/imgs/ggg.png';
  import black from '../../assets/imgs/black.png';
  import blue from '../../assets/imgs/blue.png';
  import fiol from '../../assets/imgs/fiol.png';
  import bli from '../../assets/imgs/bli.png';


  const Home = () => {
    const [mainImage, setMainImage] = useState(ggg);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = (image) => {
      setMainImage(image);
    };

    const toggleVisibility1 = () => {
      setIsVisible1(!isVisible1);
    };

    const toggleVisibility2 = () => {
      setIsVisible2(!isVisible2);
    };

    const toggleVisibility3 = () => {
      setIsVisible3(!isVisible3);
    };

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
      <div className='home'>
        <div className="home__vverh">
          <div className='home__vverh__track'>
            <div className='home__vverh__track__title'>
              <RadioButtonCheckedIcon/>
              <h1 className='home__vverh__track__title-h01'>
                TrackMate
              </h1>
            </div>
            <div className='home__vverh__track__buy'>
              <h1 className='home__vverh__track__buy-h02'>Вопросы и ответы</h1>
              <AccountCircleIcon/>
              <NavLink className='home__vverh__track__buy-h02'  to={"/Contact"}>Войти</NavLink>
              <LocalMallIcon onClick={openModal}/>
              <button className='take' onClick={openModal}>Купить</button>
            </div> 

            {isModalOpen && (
            <div className='modal' >
              <div className="modal__heed">
                <KeyboardArrowRightIcon onClick={closeModal}/>
                <h1 className="h200">КОРЗИНА</h1>
              </div>











              <div className="modal__foot">
                
                <button className="modal__foot__clos" onClick={closeModal}>Закрыть корзину</button>

              </div>
            </div>
          )}

          </div>


        



      <div className="diby">
          <div className='home__vverh__order'>
            <div className='home__vverh__order__leftbar'>
              <div className='home__vverh__order__leftbar__product'>
                <img className='white' src={mainImage} alt="" />
              </div>
              <div className='home__vverh__order__leftbar__choice'>
                <img className='black' src={ggg} alt="" onClick={() => handleImageClick(ggg)} />
                <img className='black' src={black} alt="" onClick={() => handleImageClick(black)} />
                <img className='black' src={blue} alt="" onClick={() => handleImageClick(blue)} />
                <img className='black' src={fiol} alt="" onClick={() => handleImageClick(fiol)} />
                <img className='black' src={bli} alt="" onClick={() => handleImageClick(bli)} />
              </div>
              <p className='p040'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestias hic iusto autem quam culpa velit aliquid, blanditiis a eaque id. Nesciunt, quasi, iure ducimus sit tenetur omnis voluptatem officia quaerat debitis similique dignissimos mollitia quam corporis? Eligendi eveniet magnam pariatur velit libero aut necessitatibus quisquam ipsa? Sit, totam amet.</p>
            </div>

            <div className='home__vverh__order__right'>
              <h1 className='h101'>0.4 TrackMate XE</h1>
              <p className='p101'>Артикул: 0001</p>
              <p className='p102'>2 500,00 ₽</p>
              
              <p className='p101'>Количество</p>
              <input className='number' type="number" />

              <button className='add' onClick={openModal}>Добавить в корзину</button>

              <div className="slowed1">
                <div className='scrp'>
                  <h1 className='102'>О ТОВАРЕ</h1>
                  <div className="toggle-container" onClick={toggleVisibility1}>
                    <h1>{isVisible1 ? "-" : "+"}</h1>
                  </div>
                </div>
                <div>
                  <div className={`toggle-content ${isVisible1 ? "visible" : ""}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi praesentium exercitationem unde quos ea eos quaerat corrupti molestiae est, obcaecati sapiente, eveniet nostrum veniam sed, iste in error! Atque.
                  </div>
                </div>
                <div className='uwu'></div>
              </div>
              <div className="slowed2">
                <div className='scrp'>
                  <h1 className='102'>ВОЗВРАТ ТОВАРА И ДЕНЕГ</h1>
                  <div className="toggle-container" onClick={toggleVisibility2}>
                    <h1>{isVisible2 ? "-" : "+"}</h1>
                  </div>
                </div>
                <div>
                  <div className={`toggle-content ${isVisible2 ? "visible" : ""}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi praesentium exercitationem unde quos ea eos quaerat corrupti molestiae est, obcaecati sapiente, eveniet nostrum veniam sed, iste in error! Atque.
                  </div>
                </div>
                <div className='uwu'></div>
              </div>
              <div className="slowed3">
                <div className='scrp'>
                  <h1 className='102'>ДОСТАВКА</h1>
                  <div className="toggle-container" onClick={toggleVisibility3}>
                    <h1>{isVisible3 ? "-" : "+"}</h1>
                  </div>
                </div>
                <div>
                  <div className={`toggle-content ${isVisible3 ? "visible" : ""}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi praesentium exercitationem unde quos ea eos quaerat corrupti molestiae est, obcaecati sapiente, eveniet nostrum veniam sed, iste in error! Atque.
                  </div>
                </div>
                <div className='uwu'></div>
              </div>
          
            </div>
          </div>
        
      </div>

          

        </div>
      </div>
    );
  };

  export default Home;

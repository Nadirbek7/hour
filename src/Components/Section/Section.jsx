
import './Section.scss'
import tel from '../../assets/imgs/4414c3_0398c897f1674abc8d617c6d96e8ba46_mv2-removebg-preview.png'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';


const Section = () => {
  return (
    <>
    <div className='hret'></div>
    <div className='section'>
                <div className='olex'></div>
        <div className='section__mate'>
            <div className='section__mate__kiz'>

                <div className='section__mate__kiz__sport'>
                    <div className='section__mate__kiz__sport__gan'>
                        <div className='srt'>
                        <FitnessCenterIcon/>

                        </div>
                    ОТСЛЕЖИВАНИЕ ТРЕНИРОВОК
                    </div>
                    <div className='section__mate__kiz__sport__textel'>Точная статистика эффективности тренировок</div>
                    <div className='section__mate__kiz__sport__textef'>Это текст. Нажмите и выберите «Редактировать текст» или нажмите дважды, чтобы добавить свой текст и настроить шрифт. Расскажите посетителям о себе.</div>

                </div>
                

            </div>

            <div className='section__mate__telephone   '>
                <div className='hh'>
                    <div className='hh2'></div>
                <img className='img02' src={tel} alt="" />

                </div>
            <div className='section__mate__telephone__2'></div>
            </div>

            <div className='section__mate__cos'>

            </div>
        </div>
    </div>
    </>
  )
}

export default Section
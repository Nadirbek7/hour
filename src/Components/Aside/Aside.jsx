
import './Aside.scss'
import ForumIcon from '@mui/icons-material/Forum';
import surat from '../../assets/imgs/3_fold_image-removebg-preview.png'

const Aside = () => {
  return (
    <>
    <div className='sx'></div>
    <div className='wrapper'>
        <div className='wrapper__cont7'>
        <div className='wrapper__cont7__wrap'>
            
        </div>
        

        <div className='wrapper__cont7__sistem'>
        

        <div className='wrapper__cont7__sistem__ij'>
        <img className='wrapper__cont7__sistem__ij__suratt' src={surat} alt="" />
        
            </div>


        </div>
        <div className='wrapper__cont7__reminders'>
            <div className='wrapper__cont7__reminders__glav'>

            <div className='h001'>
                <div className='srd'>

            <ForumIcon/>
                </div>
            <h1 className='h01'>СИСТЕМА УВЕДОМЛЕНИЙ</h1>
            </div>
            <div className='h002'>
                <h1 className='h02'>Полезные напоминания</h1>
                <p className='p02'>Это текст. Нажмите и выберите «Редактировать текст» или нажмите дважды, чтобы добавить свой текст. Расскажите посетителям о себе.</p>
            </div>
            </div>
        </div>

        </div>

    </div>
    </>
  )
}

export default Aside
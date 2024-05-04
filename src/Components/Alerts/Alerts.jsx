import './Alerts.scss'
import ErrorIcon from '@mui/icons-material/Error';

const Alerts = () => {
  return (
    <>
    <div className="subject">
        <div className='subject__ten'>

        <div className='subject__ten__avatar'>
            <div className='subject__ten__avatar__vos'>
              <div className='mi'>

                <ErrorIcon/>
              </div>
                <h1 className='h05'>СИСТЕМА ОПОВЕЩЕНИЙ</h1>
            </div>
            <div className='subject__ten__avatar__allow'>Позволь телу направлять тебя</div>
            <div className='subject__ten__avatar__tes'>Это текст. Нажмите и выберите «Редактировать текст» или дважды, чтобы добавить текст и настроить шрифт. Расскажите посетителям о себе.</div>
        </div>
        <div className='subject__ten__zar'></div>
        </div>
    </div>
    </>
  )
}

export default Alerts
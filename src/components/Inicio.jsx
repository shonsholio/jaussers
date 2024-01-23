import { Link } from 'react-router-dom';
import '../components/Inicio.css'

const Inicio=() => {
  return(
    <div className='home'>  
      <Link to={"/"}>
        <img className='icon'
        src= {require('../imagenes/icon-back.png')}
        alt=''
        />
      </Link>
    </div>
  )
}

export default Inicio
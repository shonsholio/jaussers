import { Link } from 'react-router-dom';
import '../components/Home.css';

const Home=() => {
  return(
    <div className='body'>

      <div className="logo">
        <img className='logotipo'
        src={require('../imagenes/icono-jaussers.png')}
        alt=''
        />
        <p className='texto-logo'>jaussers</p>
      </div>
      
      <div className='container-todo'>

        <div className='header-invisible'>
          <p>.</p>
        </div>


        <h1 className='tituloide'>Apartamentos amoblados por días, semanas y meses</h1>

        <div className='menu'>
          <li className='pages'>
            <Link to="/ciudadJardin"><p className='url'>Ciudad Jardin</p></Link>
          </li>
          <li className='pages'>
            <Link to="/granadillo"><p className='url'>Granadillo</p></Link>
          </li>
          <li className='pages'>
            <Link to="/lacampina"><p className='url'>La Campiña</p></Link>
          </li>
          <li className='pages'>
            <Link to="/paraiso"><p className='url'>Paraiso</p></Link>
          </li>
          <li className='pages'>
            <Link to="/tivoli"><p className='url'>Tivoli</p></Link>
          </li>
          <li className='pages'>
            <Link to="/villacarolina"><p className='url'>Villa Carolina</p></Link>
          </li>
          
        </div>
      </div>

      <div className='header-invisible'>
          <p>.</p>
      </div>
      <div className='header-invisible'>
          <p>.</p>
      </div>
      <div className='header-invisible'>
          <p>.</p>
      </div>
    </div>
  )
}

export default Home
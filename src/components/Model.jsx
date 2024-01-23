import '../components/Model.css';

const Model=(props) => {
  return(
    <div className='model'>

      <div className='container-fotos'>
        <img className='foto'
        src={require(`../imagenes/${props.carpeta}/1.jpg`)}
        alt='1'
        />
        <img className='foto'
        src={require(`../imagenes/${props.carpeta}/2.jpg`)}
        alt='2'
        />        
        <img className='foto'
        src={require(`../imagenes/${props.carpeta}/3.jpg`)}
        alt='3'
        />
        <img className='foto'
        src={require(`../imagenes/${props.carpeta}/4.jpg`)}
        alt='4'
        />
        <img className='foto'
        src={require(`../imagenes/${props.carpeta}/5.jpg`)}
        alt='5'
        />        
        <img className='foto'
        src={require(`../imagenes/${props.carpeta}/6.jpg`)}
        alt='6'
        />
      </div>

    </div>
  )
}

export default Model
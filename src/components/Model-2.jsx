import '../components/Model-2.css';

const Model2=(props) => {
  return(
    <div className="model2">

      <h5>{props.tits1}</h5>
      <h6>{props.tits2}</h6>
      <p>{props.tits3}</p>
      <hr />  
      <h6 className='texto-apoyo'>Dónde vas a dormir ?</h6>

      <div className='camas'>
        <div className="contenedor-camas">
          <div className="info-cama">
            <h6>Habitación</h6>
            <p>1 cama queen</p>
          </div>
          <div className="info-cama">
            <h6>Sala</h6>
            <p>1 sofá cama</p>
          </div>
        </div>
      </div>

      <hr />
      <div className="amenidades">
        <h6 className='texto-apoyo'>Lo que este lugar ofrece</h6>
        <ul className='formato-amenid'>
          <li className='titulo-amenidades'>Dormitorio y Lavadero</li>
          <li className='texto-amenid'>Lavadora en la vivienda: Gratis</li>
          <li className='texto-amenid'>Secadora en la vivienda: Gratis</li>
          <li className='texto-amenid'>Ganchos para la ropa</li>
          <li className='texto-amenid'>Sábanas</li>
          <li className='texto-amenid'>Almohadas y mantas</li>
          <li className='texto-amenid'>Plancha</li>
          <li className='texto-amenid'>Espacio para guardar ropa: Armario</li>

          <li className='titulo-amenidades'>Entretenimiento</li>
          <li className='texto-amenid'>Conexión Ethernet</li>
          <li className='texto-amenid'>Televisor de alta definición Smart TV</li>
          <li className='texto-amenid'>Gimnasio</li>
          <li className='texto-amenid'>Piscina</li>

          <li className='titulo-amenidades'>Refrigeración</li>
          <li className='texto-amenid'>Sistema de aire acondicionado tipo split</li>
          <li className='texto-amenid'>Ventiladores portátiles</li>

          <li className='titulo-amenidades'>Internet y oficina</li>
          <li className='texto-amenid'>Wifi</li>
          <li className='texto-amenid'>Zona de trabajo</li>

          <li className='titulo-amenidades'>Cocina</li>
          <li className='texto-amenid'>Refrigerador</li>
          <li className='texto-amenid'>Utensilios básicos para cocinar</li>
          <li className='texto-amenid'>Platos y cubiertos</li>
          <li className='texto-amenid'>Lavavajillas</li>
          <li className='texto-amenid'>Estufa a gas</li>
          <li className='texto-amenid'>Horno</li>
          <li className='texto-amenid'>Cafetera</li>
          <li className='texto-amenid'>Tostadora</li>
          <li className='texto-amenid'>Licuadora</li>

          <li className='titulo-amenidades'>Instalaciones y Servicios</li>
          <li className='texto-amenid'>Cerradura inteligente</li>  
          <li className='texto-amenid'>Estacionamiento gratuito</li>
          <li className='texto-amenid'>Balcón privado</li>
          <li className='texto-amenid'>Ascensor</li>
          <li className='texto-amenid'>Se permiten mascotas</li>
          <li className='texto-amenid'>Disponible para estadías largas</li>
          <li className='texto-amenid'>Llegada autónoma</li>
          <br /> <br />
        </ul>

      </div>
      
    </div>
  )
}

export default Model2
import Inicio from "./Inicio"
import Model from "./Model"
import Model2 from "./Model-2"


function Paraiso(){
  return(
    <div>
      <Model
        carpeta='Paraiso'

      />
      <Inicio />
      <Model2
        tits1='Apartamento de 2 habitaciones, Aire Acondicionado y Smart TV'
        tits2='Loft en Paraíso, Barranquilla - Colombia'
        tits3='6 huéspedes - 2 habitaciones - 3 camas - 1 sofá cama'

      />
    </div>
  )
}

export default Paraiso
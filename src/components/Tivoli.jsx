import Inicio from "./Inicio"
import Model from "./Model"
import Model2 from "./Model-2"


function Tivoli(){
  return(
    <div>
      <Model
        carpeta='Tivoli'

      />
      <Inicio />
      <Model2
        tits1='Apartamento de 3 habitaciones, Aire Acondicionado y Smart TV'
        tits2='Loft en Tivoli, Barranquilla - Colombia'
        tits3='6 huéspedes - 3 habitaciones - 3 camas'

      />
    </div>
  )
}

export default Tivoli
import Inicio from "./Inicio"
import Model from "./Model"
import Model2 from "./Model-2"


function VillaCarolina(){
  return(
    <div>
      <Model
        carpeta='Mirador'

      />
      <Inicio />
      <Model2
        tits1='Apartamento de 3 habitaciones, Aire Acondicionado y Smart TV'
        tits2='Loft en Villa Carolina, Barranquilla - Colombia'
        tits3='6 huéspedes - 3 habitaciones - 3 camas'

      />
    </div>
  )
}

export default VillaCarolina
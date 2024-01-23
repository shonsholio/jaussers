import Inicio from "./Inicio"
import Model from "./Model"
import Model2 from "./Model-2"


function Granadillo(){
  return(
    <div>
      <Model
        carpeta='SoHo306A'

      />
      <Inicio />
      <Model2
        tits1='Apartamento de 1 habitación, Aire Acondicionado y Smart TV'
        tits2='Loft en Granadillo, Barranquilla - Colombia'
        tits3='4 huéspedes - 1 habitación - 1 cama - 1 sofá cama'

      
      />
    </div>
  )
}

export default Granadillo
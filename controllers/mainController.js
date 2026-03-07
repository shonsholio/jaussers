const controller = {};
const props = require('../src/props.json');
const fs = require('fs/promises');
const path = require('path');

controller.main = async (req,res) => {
  try {
      const directoryPath = path.join(__dirname, '../public');
      const files = await fs.readdir(directoryPath);
      const carpetas = []

      for (const nombre of files) {
        const stats = await fs.stat(path.join(directoryPath, nombre));
        if (stats.isDirectory()) {
          carpetas.push(nombre)
        }
      }
      
      // Enviamos la respuesta al cliente
      res.render('main', { 
        aptos: carpetas,
        listing: props
      }); 
  } catch (err) {
      res.status(500).send("Error al leer la carpeta");
  }
}

controller.plantilla = (req,res) => {
  var url = req.url;
  if (url == '/ciudad-jardin'){
    var info = '409'
  } else if (url =='/buenavista'){
      var info = '704'
   } else if (url =='/bluegardens'){
      var info = '130'
  } else if (url =='/granadillo'){
    var info = '306'
  } else if (url =='/la-campina'){
    var info = '501'
  } else if (url =='/ccviva'){
    var info = '201'
  } else if (url =='/tivoli'){
    var info = '102'
  } else if (url =='/villa-carolina'){
    var info = '702'
  }

  
  console.log(info)

  res.render('plantilla', {
    data: props,
    apto: info,
  });
}  

module.exports = controller

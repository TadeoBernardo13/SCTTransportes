const AltaVehiculosAdicionales = require("../model/ata");

const ataPost = async (req, res) => {
  const { noFolioSiaf, fechaRecepcion, nombrePermisionario, nombreATA } =
    req.body;
  const ATA = new AltaVehiculosAdicionales({
    noFolioSiaf,
    fechaRecepcion,
    nombrePermisionario,
    nombreATA,
  });
  ATA.save()
};

module.exports = ataPost;

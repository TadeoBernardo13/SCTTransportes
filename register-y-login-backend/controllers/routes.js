const express = require("express");
const router = express.Router();

const AltaVehiculosAdicionales = require("../model/ata");

router.get("/", async (req, res) => {
  const ATA = await AltaVehiculosAdicionales.find();
  res.json(ATA);
});

router.post("/", async (req, res) => {
  const { noFolioSiaf, fechaRecepcion, nombrePermisionario, nombreATA } =
    req.body;
  const ATA = new AltaVehiculosAdicionales({
    noFolioSiaf,
    fechaRecepcion,
    nombrePermisionario,
    nombreATA,
  });
  await ATA.save();
  res.json({ status: "ATA Saved" });
});

module.exports = router;

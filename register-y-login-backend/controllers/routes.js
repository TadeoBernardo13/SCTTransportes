const express = require("express");
const router = express.Router();

const AltaVehiculosAdicionales = require("../model/ata");
const Pendientes = require("../model/pendientes");

router.get("/", async (req, res) => {
  const ATA = await AltaVehiculosAdicionales.find();
  res.json(ATA);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await AltaVehiculosAdicionales.findByIdAndRemove(id);
  res.json({
    mensaje: "Error al borrar",
  });
});

router.post("/", async (req, res) => {
  const {
    noFolioSiaf,
    fechaRecepcion,
    nombrePermisionario,
    nombreATA,
    estado_P,
  } = req.body;
  const ATA = new AltaVehiculosAdicionales({
    noFolioSiaf,
    fechaRecepcion,
    nombrePermisionario,
    nombreATA,
    estado_P,
  });
  await ATA.save()
    .then((ATA) => {
      res.json({ mensaje: "Reporte guardado correctamente", ATA });
    })
    .catch((error) => console.error(error));
});

router.get("/pendientes", async (req, res) => {
  const Pendiente = await Pendientes.find();
  res.json(Pendiente);
});

router.post("/pendientes", async (req, res) => {
  const {
    noFolioSiaf_P,
    fechaRecepcion_P,
    nombrePermisionario_P,
    nombreATA_P,
    justificacion_P,
    estado,
  } = req.body;
  const Pendiente = new Pendientes({
    noFolioSiaf_P,
    fechaRecepcion_P,
    nombrePermisionario_P,
    nombreATA_P,
    justificacion_P,
    estado,
  });
  await Pendiente.save()
    .then((Pendiente) => {
      res.json({
        mensaje: "Reporte guardado en PENDIENTES correctamente",
        Pendiente,
      });
    })
    .catch((error) => console.error(error));
});

router.delete("/pendientes/:id", async (req, res) => {
  const { id } = req.params;
  await Pendientes.findByIdAndRemove(id);
  res.json({
    mensaje: "Error al borrar",
  });
});

module.exports = router;

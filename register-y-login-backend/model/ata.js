const { model, Schema } = require("mongoose");

const AltaVehiculosAdicionalesSchema = new Schema({
  noFolioSiaf: { type: Number, required: true },
  fechaRecepcion: { type: Date, required: true },
  nombrePermisionario: { type: String, required: true },
  nombreATA: { type: String, required: true },
});

module.exports = model(
  "AltaVehiculosAdicionales",
  AltaVehiculosAdicionalesSchema
);

const { model, Schema } = require("mongoose");

const PendienteSchema = new Schema({
  noFolioSiaf_P: { type: Number, required: true },
  fechaRecepcion_P: { type: Date, required: true },
  nombrePermisionario_P: { type: String, required: true },
  nombreATA_P: { type: String, required: true },
  justificacion_P: { type: String, required: true },
  estado: { type: String, required: true },
});

module.exports = model("Pendientes", PendienteSchema);

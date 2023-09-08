const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const serviceSchema = new Schema({
  nameService: {
    type: String,
    required: true,
  },
  subService: {
    type: Array,
    required: true,
  },
  linkImg: {
    type: Array,
    required: true,
  },
});
const modeloService = model("Service", serviceSchema);
module.exports = modeloService;

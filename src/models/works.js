const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const worksSchema = new Schema({
  nameWork: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  linkImg: {
    type: Array,
    required: true,
  },
});
const modeloWorks = model("Works", worksSchema);
module.exports = modeloWorks;

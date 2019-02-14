// drugs-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const drugs = new Schema({
    name: { type: String, required: true },
    expiryDate: { type: Date, required: false },
    productDate: { type: Date, required: false },
    manufacturer: { type: String, required: false },
    quantity: { type: Number, required: false },
    sellingPrice: { type: Number, required: false },
    costPrice: { type: Number, required: false },
    createdBy: { type: Schema.Types.ObjectId, required: false }
  }, {
    timestamps: true
  });

  return mongooseClient.model('drugs', drugs);
};

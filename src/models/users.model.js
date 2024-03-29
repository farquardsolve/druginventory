// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const users = new mongooseClient.Schema({
    firstName:{ type: String,required:true },
    lastName:{ type: String,required:true },
    email: {type: String, unique: true, lowercase: true},
    password: { type: String },
    permisions:[{type: Schema.Types.ObjectId, required: false }]
  
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};

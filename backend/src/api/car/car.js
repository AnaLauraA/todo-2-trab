// cria uma instancia node-restful
const restful = require('node-restful')
// fazer a instancia estar preparada para trabalhar com o MongoDB
const mongoose = restful.mongoose
// cria uma instancia de um esquema do MongoDB
// tabela que tem as colunas 
    // description (String), done(Boolean) e createdAt (Date)
const carSchema = new mongoose.Schema({
       marca: {type: String, required: true },
       modelo: {type: String, required: true},
       ano: {type: Number, required: true},
       flex: {type: Boolean, required: true}
})
// cria um modelo do esquema chamado Todo e o exporta para ser utilizado em outro arquivo
module.exports = restful.model('Car', carSchema)
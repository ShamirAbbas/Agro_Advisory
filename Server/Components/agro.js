const {mongoose} = require('mongoose');

const agroSchema = new mongoose.Schema ({
    Advisory: {
        type: String,
    },
    Province: {
        type: String,
        required: true
    },
    Description_English: {
        type: String,
        required: true
    },
    Description_Urdu: {
        type: String,
        required: true
    }
});

const agro = mongoose.model('agro', agroSchema);
module.exports = agro;


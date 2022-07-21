const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const verifySchema = new Schema(
    {
        email: String,
        code: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Verify', verifySchema);
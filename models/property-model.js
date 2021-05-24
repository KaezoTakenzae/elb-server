const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Property = new Schema(
    {
        name: { type: String, trim: true, maxlength: 255, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('properties', Property);

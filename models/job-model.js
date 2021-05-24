const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Job = new Schema(
    {
        summary: { type: String, trim: true, maxlength: 150, required: true },
        description: { type: String, trim: true, maxlength: 500, required: true },
        status: { type: String, required: true, validate: {
          validator: function(v) {
            return ['Open', 'In Progress', 'Completed', 'Cancelled'].includes(v);
          },
          message: "Status must be one of [Open | In Progress | Completed | Cancelled]"
        } },
        property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('jobs', Job);

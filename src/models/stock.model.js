const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const stockSchema = mongoose.Schema(
  {
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
      required: true,
    },

    product: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    unit: {
      type: Number,
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
stockSchema.plugin(toJSON);
stockSchema.plugin(paginate);

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;

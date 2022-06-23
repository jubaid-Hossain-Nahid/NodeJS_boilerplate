const { Schema, model } = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    product: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  { timestamps: true }
);

CategorySchema.plugin(toJSON);
CategorySchema.plugin(paginate);

const Category = model('Category', CategorySchema);
module.exports = Category;

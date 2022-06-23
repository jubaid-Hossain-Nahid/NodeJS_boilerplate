const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      max: 500,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    images: [
      {
        type: String,
      },
    ],
    stock: {
      type: Number,
      required: true,
      min: 1,
    },
    discountedPrice: {
      type: Number,
      min: 0,
    },
    rating: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Rating',
      },
    ],
  },
  { timestamps: true }
);

ProductSchema.plugin(toJSON);
ProductSchema.plugin(paginate);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;

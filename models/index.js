// Importing models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongs to category, category has many products.

Product.belongsTo(Category, {
});
Category.hasMany(Product, {
});

// A product belongs to many tags, through product tag.
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  foreignKey: 'product_id',
  
});

// A tag belongs to many products, through product tag.

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  foreignKey: 'tag_id',
  
});

// Exporting models

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
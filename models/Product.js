// Import important parts of sequelize library
const {
  Model,
  DataTypes
} = require('sequelize');
// Import our database connection from config.js
const sequelize = require('../config/connection');

// Product extends Sequelize's Model class
class Product extends Model {}

// Initialize Product model with fields

Product.init({
  // Product id
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,

  },
  // Product name
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Product cost
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  // Stock count of product
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // The id of the category a product belongs to - refrences id in Category
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Category',
      key: 'id',
    },

  }
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'product',
});

module.exports = Product;
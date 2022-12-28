
// const Pool = require('pg').Pool;

// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "barang",
//     password: "farhan",
//     port: 5432,
// });

// module.exports = pool;

const Sequelize = require('sequelize');
const DataTypes = require('.');

const Master = Sequelize.define('master', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
});

module.exports = Master;

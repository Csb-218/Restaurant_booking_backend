'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('../lib/sequelize');


const reservationModel = sequelize.define(
  'Reservation',
  {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    guests: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      validate: {
        max: 10,
        min: 1,
      },
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    SpecialRequest: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Reservation',
    tableName: 'Reservations',
    timestamps: true,
  }
);

module.exports = reservationModel;













// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Reservation extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Reservation.init({
//     Name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         isEmail: true,
//       },
//       unique: true,
//     },
//     guests: {
//       type: DataTypes.INTEGER(2),
//       allowNull: false,
//       validate: {
//         max: 10,
//         min: 1,
//       },
//     },
//     phone: {
//       type: DataTypes.BIGINT,
//       allowNull: false,
//       unique: true,
//     },
//     Date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       validate: {
//         isDate: true,
//       },
//     },
//     SpecialRequest: {
//       type: DataTypes.STRING(200),
//       allowNull: true,
//     },
//   }, {
//     sequelize,
//     modelName: 'Reservation',
//     tableName: 'Reservations',
//     timestamps: true,
//   });
//   return Reservation;
// };
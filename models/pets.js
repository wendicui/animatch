module.exports = function(sequelize, DataTypes) {
    var Pets = sequelize.define("Pets", {
      pet_type: DataTypes.STRING,
      breed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    }, {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    });
    return Pets;
  };
  
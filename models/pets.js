module.exports = function(sequelize, DataTypes) {
    // var Pets = sequelize.define("Pets", {
    //   pet_type: DataTypes.STRING,
    //   breed: {
    //     type: DataTypes.STRING,
    //     defaultValue: false
    //   }
    // }, {
    //   classMethods: {
    //     associate: function(models) {
    //       // associations can be defined here
    //     }
    //   }
    // });
    // return Pets;

  var Pets = sequelize.define("Pets", {
      pet_type: DataTypes.STRING,
      breed: {
        type: DataTypes.STRING,
        defaultValue: false
      }
    })

    Pets.associate = function(models){
      //link with user
      Pets.belongsTo(models.User,{
        foreignKey:{
          allowNull: false
        }
      })
    }

    return Pets;
  };

  //connection.sync();

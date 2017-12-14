module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  var Pets = sequelize.define("Pets", {
    pet_type: DataTypes.STRING,
    breed: {
      type: DataTypes.STRING,
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

// connection.sync();
=======
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
>>>>>>> 20e7e5490f5cd369154886809bee893219fc78c8

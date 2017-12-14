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

  var Pet = sequelize.define("Pet", {
      pet_type: DataTypes.STRING,
      breed: {
        type: DataTypes.STRING,
        defaultValue: false
      },
      petFinderId: DataTypes.INTEGER
    })

    Pet.associate = function(models){
      //link with user
      Pet.belongsTo(models.User,{
        foreignKey:{
          allowNull: false
        }
      })
    }

    return Pet;
  };

  //connection.sync();

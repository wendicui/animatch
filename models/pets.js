module.exports = function(sequelize, DataTypes) {

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

module.exports = function(sequelize, DataTypes) {

  var Pet = sequelize.define("Pet", {
      animal: DataTypes.STRING,
      breed: {
        type: DataTypes.STRING,
        defaultValue: false
      },
      petFinderId: DataTypes.INTEGER,
      age: DataTypes.INTEGER,
      media:DataTypes.STRING,
      size:DataTypes.STRING,
      name: DataTypes.STRING
    },{
      timestamps:false
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

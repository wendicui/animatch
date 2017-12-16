module.exports = function(sequelize, DataTypes) {

  var Pet = sequelize.define("Pet", {
      animal: DataTypes.STRING,
      breed: {
        type: DataTypes.STRING,
        defaultValue: false
      },
      petFinderId: DataTypes.INTEGER,
      age: DataTypes.STRING,
      media:DataTypes.STRING,
      size:DataTypes.STRING,
      name: DataTypes.STRING,
      sex: DataTypes.STRING,
      description: DataTypes.TEXT
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

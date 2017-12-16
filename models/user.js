module.exports = function(sequelize, DataTypes){
  var User = sequelize.define("User",{
    name: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    homeType: DataTypes.STRING,
    activityLevel: DataTypes.STRING,
    children: DataTypes.STRING,
    currentPet: DataTypes.STRING,
    email:DataTypes.STRING
  },{
    timestamps:false
  });

  User.associate = function (models){
    //associate user with pets
    User.hasMany(models.Pet,{
        onDelete: "cascade"
    });
  }
  return User;
}

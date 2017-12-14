module.exports = function(sequelize, DataTypes){
  var User = sequelize.define("User",{
    name: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
  });

  User.associate = function (models){
    //associate user with pets
    User.hasMany(models.Pet,{
        onDelete: "cascade"
    });
  }
  return User;
}

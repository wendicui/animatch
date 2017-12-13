module.exports = function(sequelize, DataTypes){
  var User = sequelize.define("User",{
    name: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
  });

  User.associate = function (models){
    //associate user with pets
    User.hasMany(models.Pets)
  }
  return User

}

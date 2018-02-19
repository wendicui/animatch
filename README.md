# animatch

A website to help people find their next potential pets using petfinder api

#### Main skills:
* MVC Pattern
* HandleBars
* Using local storage to store user login information
* Mysql + Sequlize, join table
    ```
    Pet.associate = function(models){
      //link with user
      Pet.belongsTo(models.User,{
        foreignKey:{
          allowNull: false
        }
      })
    }
    ```
 
    ```
    User.associate = function (models){
    //associate user with pets
      User.hasMany(models.Pet,{
          onDelete: "cascade"
      });
    }
  ```
 

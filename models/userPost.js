module.exports = function(sequelize, DataTypes) {
    const UserPost = sequelize.define("UserPost", {
      // Giving the UserPost model a name of type STRING
      postLocation: {
          type: DataTypes.STRING,
          allowNull: false
      },
      postTitle: {
          type: DataTypes.STRING,
          allowNull: false  
      },
      postBody: {
          type: DataTypes.STRING,
          allowNull: false 
      },
      postTags: {
          type: DataTypes.STRING,
          allowNull: true 
      }
    });
  
    UserPost.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      UserPost.belongsTo(models.User, {
        foreignKey: {
            allowNull: false
        }
      });
    };
  
    return UserPost;
  };
module.exports = function(sequelize, DataTypes) {
    const UserPost = sequelize.define("UserPost", {
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
      },
      userRating: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      imgFilepath: {
        type: DataTypes.STRING(160),
        allowNull: true
      }
    });
  
    UserPost.associate = function(models) {
      // Associating UserPost with User to grab username where needed
      UserPost.belongsTo(models.User, {
        foreignKey: {
            allowNull: false
        }
      });
    };
  
    return UserPost;
  };
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      username: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      role: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    });
  
    Users.associate = (models) => {
      Users.hasMany(models.Rate, {
        onDelete: "cascade",
      })

      Users.hasMany(models.UsersInfo, {
        onDelete: "cascade",
      })
    }
    return Users;
  };
  
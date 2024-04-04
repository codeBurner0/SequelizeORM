export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        defaultValue: "String",
      },
    },
    {
      tableName: "users",
      // timestamps:false--> created at and updated at will not be shown
      // createdAt:false,
      // updatedAt:true
      updatedAt: "updatedTimestamp",
    }
  );
  // User.sync({force:true})
};

// twilio
// chrone-job

export default (sequelize, DataTypes) => {
  const Contact = sequelize.define(
    "Contact",
    {
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pin: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "contacts",
      timestamps: false,
    }
  );
//   Contact.sync({force:true})
};

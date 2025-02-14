module.exports = (sequelize, DataTypes) => {
  const Clientes = sequelize.define("Clientes", {
    Nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Telefone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Clientes;
};

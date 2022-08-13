module.exports = (sequelize, Sequelize) => {
  const Unit = sequelize.define('unit', {
    unit_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
    }
  })

  return Unit
}

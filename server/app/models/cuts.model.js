module.exports = (sequelize, Sequelize) => {
    const Cut = sequelize.define('cut', {
      cut_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
      }
    })
  
    return Cut
  }
  
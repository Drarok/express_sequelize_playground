module.exports = (sequelize, type) => {
    return sequelize.define('library', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING
    })
}
const {Sequelize, sequelize} = require('./db');

const Pokemon = sequelize.define('pokemon', {
  num: Sequelize.STRING,
  name: Sequelize.STRING,
  img: Sequelize.STRING,
  // type: Sequelize.ARRAY(Sequelize.TEXT),
  height: Sequelize.STRING,
  weight: Sequelize.STRING,
  candy: Sequelize.STRING,
  candy_count: Sequelize.BIGINT,
  egg: Sequelize.STRING,
  spawn_chance: Sequelize.BIGINT,
  avg_spawns: Sequelize.BIGINT,
  spawn_time: Sequelize.STRING,
  // multipliers: Sequelize.ARRAY(Sequelize.BIGINT),
  // weaknesses: Sequelize.ARRAY(Sequelize.TEXT),
  // prev_evolution: Sequelize.ARRAY( {
  //   num: Sequelize.STRING,
  //   name: Sequelize.STRING,
  // },{
  //   num: Sequelize.STRING,
  //   name: Sequelize.STRING,
  // }),
  // prev_evolution: {
  //   type: Sequelize.STRING,
  //   set(val){
  //     this.setDataValue("prev_evolution", JSON.stringify(val ?? ""))
  //   }
  // }, 
  next_evolution: {
    type: Sequelize.STRING,
    set(val){
      this.setDataValue("next_evolution", JSON.stringify(val ?? ""))
    }
  }
},
);

module.exports = { Pokemon };
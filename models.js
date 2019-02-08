require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  database: "keychain_db",
  dialect: "postgres",
  //   logging: false,
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const User = sequelize.define("user", {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: Sequelize.STRING,
  email: Sequelize.STRING
});

const Service = sequelize.define("service", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  logo: Sequelize.TEXT
});

const User_Service = sequelize.define("user_service", {
  userServiceId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  sub_username: Sequelize.STRING,
  sub_password: Sequelize.STRING,
  description: Sequelize.STRING
});

User.belongsToMany(Service, {
  through: { model: User_Service, unique: false }
});
Service.belongsToMany(User, {
  through: { model: User_Service, unique: false }
});

module.exports = {
  User,
  Service,
  User_Service,
  sequelize
};

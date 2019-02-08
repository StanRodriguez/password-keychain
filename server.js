const express = require("express");
const bodyParser = require("body-parser");
const md5 = require("md5");

const { User, Service, User_Service, sequelize } = require("./models");
const op = sequelize.Op;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.REACT_APP_PORT || 4567;

app.get("/user_existance/:username", async (req, res) => {
  const { username } = req.params;
  const doesExist = await User.findOne({ where: { username } });
  res.send(doesExist ? true : false);
});
//signin route grabbing all the user info
app.post("/login", async (req, res) => {
  try {
    const { username } = req.body;
    const password = md5(req.body.password);

    if (!username || !password) {
      res.status(200).send({ message: "username and/or password missing" });
    } else if (
      !(await User.findOne({
        where: { username }
      }))
    ) {
      res.status(200).send({ message: "User not found in the database" });
    } else {
      const user = await User.findOne({
        where: {
          [op.and]: {
            username,
            password
          }
        }
      });
      if (user) {
        const services = await user.getServices();
        res.status(200).send({ user, services });
      } else {
        res.status(200).send({ message: "username and/or password incorrect" });
      }
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

// create a new login info
app.post("/login_info", async (req, res) => {
  try {
    const {
      userId,
      serviceId,
      sub_username,
      sub_password,
      description
    } = req.body;

    const newLogginInfo = await User_Service.create({
      userId,
      serviceId,
      sub_username,
      sub_password,
      description
    });
    res.status(201).send(newLogginInfo);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});
// update a new login info
app.put("/login_info", async (req, res) => {
  try {
    const {
      userServiceId,
      userId,
      serviceId,
      sub_username,
      sub_password,
      description
    } = req.body;
    if (
      !userServiceId ||
      !userId ||
      !serviceId ||
      !sub_username ||
      !sub_password
    ) {
      res.status(200).send({ message: "Missing one or more arguments" });
    } else {
      const newLoginInfo = await User_Service.update(
        {
          userId,
          serviceId,
          sub_username,
          sub_password,
          description
        },
        { where: { userServiceId } }
      );
      res.status(200).send({ affected: newLoginInfo[0] });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

// delete a login info by id
app.delete("/login_info/:userServiceId", async (req, res) => {
  try {
    const { userServiceId } = req.params;
    const deletedLoginInfo = await User_Service.destroy({
      where: { userServiceId }
    });
    res.status(200).send({ affected: deletedLoginInfo });
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

//get all the services
app.get("/services", async (req, res) => {
  try {
    const services = await Service.findAll();
    const formatedServices = services.map(service => {
      return {
        label: service.title,
        value: service.id
      };
    });
    res.status(200).send(formatedServices);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

//user routes

//get
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    res.send({ message: error });
  }
});
//get one user
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.send(user);
  } catch (error) {
    res.send({ message: error });
  }
});
// post
app.post("/users", async (req, res) => {
  try {
    const { first_name, last_name, email, username, password } = req.body;
    (!username || !password) &&
      res.send({ message: "Username and/or password missing" });
    const userCreated = await User.create({
      first_name,
      last_name,
      email,
      username,
      password: md5(password)
    });
    res.send(userCreated);
  } catch (error) {
    res.send({ message: error });
  }
});
// put
app.put("/users", async (req, res) => {
  try {
    const { id, first_name, last_name, email, username, password } = req.body;
    (!id || !username || !password) &&
      res.send({ message: "Username and/or id and/or password missing" });
    const usersUpdated = await User.update(
      {
        first_name,
        last_name,
        email,
        username,
        password: md5(password)
      },
      { where: { id } }
    );
    res.send({ affected: usersUpdated });
  } catch (error) {
    res.send({ message: error });
  }
});

//Delete
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    !id && res.send({ message: "Id not found in the url" });
    const usersDeleted = await User.destroy({ where: { id } });
    res.send({ affected: usersDeleted });
  } catch (error) {
    res.send({ message: error });
  }
});

app.listen(PORT, () => {
  console.log("Server listening on", PORT);
});

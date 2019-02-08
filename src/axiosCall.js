//create a new login_info
const response = await axios.post("http://localhost:4567/login_info", {
  userId: "1",
  serviceId: "13",
  sub_username: "hellomana@gmail.com",
  sub_password: "12345",
  description: "Good example" //can be null
});
//returns: object of the created one

//update login info
const response = await axios.put("http://localhost:4567/login_info", {
  userServiceId: 14,
  userId: "1",
  serviceId: "13",
  sub_username: "hellomana@gmail.com",
  sub_password: "12345",
  description: "Good example" //can be null
});
// returns:
//{
// "affected": <integet-of-rows-affected>
// }

//delete login info
const userServiceId = 21;
const response = await axios.delete(
  "http://localhost:4567/login_info/" + userServiceId
);
console.log(response);
// returns:
//{
// "affected": <integet-of-rows-affected>
// }

// decrypt password
// const AES = require("crypto-js/AES");
// const crypto = require("crypto-js");

// const { REACT_APP_SALT } = process.env;
// const dec = AES.decrypt('password', REACT_APP_SALT).toString(crypto.enc.Utf8);

const { User, User_Service, Service, sequelize } = require("../models.js");
const AES = require("crypto-js/AES");
const { REACT_APP_SALT } = process.env;
// const crypto = require("crypto-js");

// const dec = AES.decrypt(enc, REACT_APP_SALT).toString(crypto.enc.Utf8);

const md5 = require("md5");

const seed = async () => {
  const user1 = await User.create({
    first_name: "user1",
    last_name: "user1",
    username: "user1",
    password: md5("pass1"),
    email: "user1@correo.com"
  });
  const user2 = await User.create({
    first_name: "user2",
    last_name: "user2",
    username: "user2",
    password: md5("pass2"),
    email: "user2@correo.com"
  });
  const gmail = await Service.create({
    title: "Gmail",
    description: "email service from google",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549403414/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Gmail.png"
  });
  const facebook = await Service.create({
    title: "Facebook",
    description: "social network",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549562594/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Facebook.png"
  });
  const instagram = await Service.create({
    title: "Instagram",
    description: "Photo sharing",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549562594/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Instagram.png"
  });
  const Apple = await Service.create({
    title: "Apple",
    description: "Itunes etc.",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549563683/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Apple.png"
  });
  const amazon = await Service.create({
    title: "Amazon",
    description: "Online shopping",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549563683/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Amazon.png"
  });
  const gitHub = await Service.create({
    title: "GitHub",
    description: "Version control software",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549563683/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Github.png"
  });
  const paypal = await Service.create({
    title: "Paypal",
    description: "Easy Payments",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549564658/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/PayPal.png"
  });
  const newYorkTimes = await Service.create({
    title: "New York Times",
    description: "Biggest newspaper",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549403414/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/NYTimes.png"
  });
  const waze = await Service.create({
    title: "Waze",
    description: "Traffic app",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549403416/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Waze.png"
  });
  const uber = await Service.create({
    title: "Uber",
    description: "Car sharing on app",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549403415/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Uber.png"
  });
  const expedia = await Service.create({
    title: "Expedia",
    description: "Travel app",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549403414/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Expedia.png"
  });
  const tinder = await Service.create({
    title: "Tinder",
    description: "Dating app",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549403415/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Tinder.png"
  });
  const airbnb = await Service.create({
    title: "Airbnb",
    description: "Apartment sharing app",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549403414/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Airbnb.png"
  });
  const twitter = await Service.create({
    title: "Twitter",
    description: "Social media website",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549403415/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Twitter.png"
  });
  const reddit = await Service.create({
    title: "Reddit",
    description: "one of the biggest blog",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549403414/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Reddit.png"
  });
  const kickstarter = await Service.create({
    title: "Kickstarter",
    description: "Start up compaign",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549403414/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Kickstarter.png"
  });
  const pinterest = await Service.create({
    title: "Pinterest",
    description: "Picture app",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549403414/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Pinterest.png"
  });
  const youtube = await Service.create({
    title: "YouTube",
    description: "Video app",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549403417/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/YouTube.png"
  });
  const spotify = await Service.create({
    title: "Spotify",
    description: "Music app",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549403414/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Spotify.png"
  });

  const lumosity = await Service.create({
    title: "Lumosity",
    description: "Learning app",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549403414/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Lumosity.png"
  });
  const gDrive = await Service.create({
    title: "Google Drive",
    description: "File storage app",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549403414/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/Drive.png"
  });

  const cnn = await Service.create({
    title: "CNN",
    description: "Fake news att: Samuel",
    logo:
      "https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549403414/Proj%203-%20Group%20Project-%20Key%20Chain%20App/Service%20icons/CNN.png"
  });

  user2.addService(lumosity, {
    through: {
      sub_username: "user2Boss",
      sub_password: AES.encrypt("123458910", REACT_APP_SALT).toString(),
      description: "I wont forget it this way"
    }
  });
  await user1.addService(gmail, {
    through: {
      sub_username: "user1@gmail.com",
      sub_password: AES.encrypt("josefo", REACT_APP_SALT).toString(),
      description: "I wont forget it this way"
    }
  });
  await user1.addService(gDrive, {
    through: {
      sub_username: "user1@gmail.com",
      sub_password: AES.encrypt("Kelvin123", REACT_APP_SALT).toString(),
      description: "I wont forget it this way"
    }
  });
  await user1.addService(kickstarter, {
    through: {
      sub_username: "user1@gmail.com",
      sub_password: AES.encrypt("Pointer46557", REACT_APP_SALT).toString(),
      description: "I wont forget it this way"
    }
  });
  await user1.addService(pinterest, {
    through: {
      sub_username: "user1@gmail.com",
      sub_password: AES.encrypt("Cameron6789", REACT_APP_SALT).toString(),
      description: "I wont forget it this way"
    }
  });
  await user2.addService(pinterest, {
    through: {
      sub_username: "user2@gmail.com",
      sub_password: AES.encrypt("Postico12345", REACT_APP_SALT).toString(),
      description: "I wont forget it this way"
    }
  });
  await user1.addService(cnn, {
    through: {
      sub_username: "user1RD",
      sub_password: AES.encrypt("Remember4567", REACT_APP_SALT).toString(),
      description: "I wont forget it this way"
    }
  });
  await user2.addService(gmail, {
    through: {
      sub_username: "user2@gmail.com",
      sub_password: AES.encrypt("ColorBlack123", REACT_APP_SALT).toString(),
      description: "I wont forget it this way"
    }
  });
  await user2.addService(uber, {
    through: {
      sub_username: "user2@gmail.com",
      sub_password: AES.encrypt("LoveKanye", REACT_APP_SALT).toString(),
      description: "I wont forget it this way"
    }
  });

  await user1.addService(waze, {
    through: {
      sub_username: "user2USA",
      sub_password: AES.encrypt("PanicAfraid", REACT_APP_SALT).toString(),
      description: "I wont forget it this way"
    }
  });
  await user1.addService(tinder, {
    through: {
      sub_username: "user1@gmail.com",
      sub_password: AES.encrypt("MusicLoverHoper", REACT_APP_SALT).toString(),
      description: "I wont forget it this way"
    }
  });
  await user2.addService(tinder, {
    through: {
      sub_username: "user2@gmail.com",
      sub_password: AES.encrypt("NaniAttack", REACT_APP_SALT).toString(),
      description: "I wont forget it this way"
    }
  });
  await user2.addService(spotify, {
    through: {
      sub_username: "user2@hotmail.com",
      sub_password: AES.encrypt("GACoffee", REACT_APP_SALT).toString(),
      description: "I wont forget it this way"
    }
  });
  await user1.addService(spotify, {
    through: {
      sub_username: "user1@hotmail.com",
      sub_password: AES.encrypt("HungryAndDumb", REACT_APP_SALT).toString(),
      description: "I wont forget it this way"
    }
  });
  process.exit();
};
seed();

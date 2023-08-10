// import { User } from "../models"

const { User } = require("../models")

const findUser = async () => {
    const result = await User.findAll() 
    console.log(result);
}

findUser().then((res) => console.log(res))
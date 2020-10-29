const router = require("express").Router();
const Company = require("../../database/Schema/Companies.js");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

//Validation for company registration

const schema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
  phoneNumber: Joi.number().required(),
  adress: Joi.string().required(),
  imgUrl: Joi.string().required(),
  description: Joi.string().required(),
});

router.post("/add", async (req, res, next) => {
  //check if Company already exist
  const emailExist = await Company.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  try {
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newCompany = new Company({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      phoneNumber: req.body.phoneNumber,
      adress: req.body.adress,
      imgUrl: req.body.imgUrl,
      description: req.body.description,
    });
    const { error } = await schema.validateAsync(req.body);
    const savedComapny = await newCompany.save();
    res.send(savedComapny);
  } catch (error) {
    if (error.isJoi === true) res.status(400).send(error.details[0].message);
    next(error);
  }
});


//Validation for user login

const loginschema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  
  router.post("/login", async (req, res, next) => {
    //check if user already exist
    try {
      const { error } = await loginschema.validateAsync(req.body);
      const company = await Company.findOne({ email: req.body.email });
      if (!company) return res.status(400).send("Email or password is wrong");
  
      //check password
      const validPass = await bcrypt.compare(req.body.password, company.password);
      if (!validPass) return res.status(400).send("password not valid");
  
      //create and assign a token
      const token = jwt.sign({ _id: company._id }, config.get("jwt").secret);
      res.header("auth-token", token).json(token);
    } catch (error) {
      console.log(error);
      if (error.isJoi === true) res.status(400).send(error.details[0].message);
      next(error);
    }
  });
  
  
  router.get('/',async(req,res)=>{
    await Company.find({},(err,data)=>{
      res.json(data)
    })
  });


  router.delete('/',async(req,res)=>{
    await Company.deleteMany(req.params.id,req.body)
    res.json({'message':'all data deleted'})
  });
  
  
  router.delete('/:id',async(req,res)=>{
    await Company.findByIdAndDelete(req.params.id,req.body)
    res.json({'message':'specific data deleted'})
  });
  
  
  router.put('/:id',async(req,res)=>{
    await Company.findByIdAndUpdate(req.params.id,req.body)
    res.json({'message':'specific data updated'})
  });

module.exports = router;

const Supplier = require("../../../modals/stackholders/supplier");
var ObjectId = require("mongodb").ObjectID;
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const supplier = {
  suppliers: async (_,req) => {
    // console.log(req.isAuth)
    try {
      const result = await Supplier.find();
    
      return result
    } catch (error) {
      throw error;
    }
  },

  addSupplier: async (args) => {
    try {
      const name = args.getData.name;
      const email = args.getData.email;
      const password = args.getData.password;
      const hassPassword = await bcrypt.hash(password,12)
      const supplier = new Supplier({
        name: name,
        email: email,
        password: hassPassword
      });
      const result = await supplier.save();
      return result
    } catch (error) {
      throw error;
    }
  },

  delSupplier: async (args) => {
    try {
      
      const supplier = await Supplier.findById({
        _id: ObjectId(args.id),
      });
      if (!supplier) {
        throw new Error("No Record Found!!")
      }

      await Supplier.deleteOne({ _id: ObjectId(args.id) }, (err) => {
        if (err) {
          console.log(err);
          
        }
         
      });
      return ("Successful Deletion: ID=" + args.id)
    } catch (error) {
      throw error;
    }
  },

  updateSupplier: async (args) => {
    try{
      const query = { _id: ObjectId(args.id) };
      const update = {
        name: args.getData.name,
        email: args.getData.email,
      };
      const result = await Supplier.findOneAndUpdate(query, update);
      if (!result) {
        throw new Error("NO Record Found");
      }
  
      return "Successfully Updated";
    }catch(error){
      throw error
    }
  },

  login: async(args)=>{
    const supplier = Supplier.findOne({
      email: args.email
    })

    if(!supplier){
      throw new Error("User Doesn't found")   
    }

    const isEqual = bcrypt.compare(args.password,supplier.password)

    if(!isEqual){
      throw new Error("Password is incorrect!")
    }

    const token = jwt.sign({
      userId: supplier._id, 
      email: supplier._id
    }, process.env.SECRET_ID,{
      expiresIn: "1h"
    })

    return {
      userId: supplier._id,
      token: token,
      tokenExp: 1
    }
  }
};

module.exports = supplier;

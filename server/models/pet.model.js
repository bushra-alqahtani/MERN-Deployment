const mongoose = require("mongoose");


const PetScheme = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name of project should be at least 3 characters"],
    },
    type:{
      type: String,
      required: [ true, "Pet type is required" ],
      minLength: [ 3, "Pet type must be at least 3 characters long" ]
     
    },
    description: {
      type: String,
      require: [ true, "Pet description is required" ],
      minLength: [ 3, "Pet description must be at least 3 characters long" ]
    },
    skill1: {
      type: String
    },
    skill2: {
      type: String
    },
    skill3: {
      type: String
    }
   
  },
  { timestamps: true }
);



const Pet = mongoose.model("Pet", PetScheme);
module.exports = Pet;      
          
   

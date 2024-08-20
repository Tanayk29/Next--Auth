import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true , "please provide your Full Name" ],
    },

    email: {
        type: String,
        required: [true , "please provide a valid Email" ],
        unique : true,
    },

    password: {
        type: String,
        required: [true , "please provide a password" ],
    }

});

const User = mongoose.models.user || mongoose.model("user", userSchema)

export default User
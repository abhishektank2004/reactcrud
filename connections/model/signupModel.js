import mongoose from 'mongoose';

const signupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'] 
  },
  password: { type: String, required: true }
});

const SignupModels = mongoose.model('Signup', signupSchema);

export default SignupModels;

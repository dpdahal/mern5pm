import User from '../models/User.js';

class UserController {
    
  async index(req, res) {
    try{
      let  users = await User.find({});
      return res.json(users);
    }catch(err){
      console.log(err);
    }
  }

  async store(req, res) {
    try{
      let image ='';
      if(req.file){
        image = req.file.filename;
      }
      const user = await User.create({...req.body, image});  
      return res.json(user);
    }catch(err){
      console.log(err);
    }
  }

  async show(req, res) {
    return res.send('Hello single user!');
  }

  async update(req, res) {

  }

  async destroy(req, res) {

  }
}

export default UserController;
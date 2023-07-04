import User from '../models/User.js';

class UserController {
    
  async index(req, res) {
    return res.send('Hello users!');
  }

  async store(req, res) {
    try{
      const user = await User.create({...req.body});  
      return res.json(user);
    }catch(err){
      console.log(err);
    }
  }
}

export default UserController;
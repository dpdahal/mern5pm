import User from '../models/User.js';
import fs from 'fs';
import checkFileExistsSync from '../config/fileHelper.js';

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
    let id = req.params.id;
    try{
      let findData =await User.findById(id);
      return res.json(findData);
    }catch(err){
      console.log(err);
    }
  }


  async update(req, res) {
    let id = req.params.id;
    try{
      const user = await User.findById(id);
      let image = user.image; 
      if(req.file){
        let deleteFile = true;
        let fileName = user.image;
        let filePath = `public/users/${fileName}`;
        let fileResponse= checkFileExistsSync(filePath);
          if(fileResponse){
            fs.unlinkSync(filePath);
            image = req.file.filename;
          }
         image = req.file.filename;
      }
      console.log(req.body)
      await user.updateOne({...req.body, image});
      return res.json(user);
    }catch(err){
      console.log(err);
    }

  }

  async destroy(req, res) {
    let id = req.params.id;
    try{
      let findUser =await User.findById(id);
      if(findUser){
        let fileDelte=true;
        let fileName = findUser.image;
        if(fileName){
          let filePath = `public/users/${fileName}`;
          let fileResponse= checkFileExistsSync(filePath);
          if(fileResponse){
            fs.unlinkSync(filePath);
            fileDelte = true;
          }else{
            fileDelte = true;
          }
        }
        findUser.deleteOne();
        return res.json({message: 'User deleted successfully'});s

      }else{
        return res.json({message: 'User not found'});
      }
  
    }catch(err){
      console.log(err);
    }

  }
}

export default UserController;
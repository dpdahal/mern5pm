import Category from "../models/Category.js";

class CategoryController{

    async index(req,res){
        try {
            const categories = await Category.find({});
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async show(req,res){
        try {
            const category = await Category.findById(req.params.id);
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async store(req, res) {
        try{
          const category = await Category.create({...req.body});  
          return res.json(category);
        }catch(err){
          console.log(err);
        }
      }

      async update(req, res) {
        let id = req.params.id;
        try{
          const category = await Category.findById(id);
          await category.updateOne({...req.body});
          return res.json(category);
        }catch(err){
          console.log(err);
        }
    
      }
    
      async destroy(req, res) {
        let id = req.params.id;
        try{
          let cat =await Category.findById(id);
            cat.deleteOne();
            return res.json({message: 'User deleted successfully'});      
        }catch(err){
          console.log(err);
        }
    
      }


}

export default  CategoryController;
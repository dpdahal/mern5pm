import News from "../models/News.js";

class NewsController{

    async index(req,res){
        try{
            const news = await News.find({}).populate('categoryId').populate('userId')
            // vlookup
        //     const news = await News.aggregate([
        //         {
        //             $lookup:{
        //                 from:'categories',
        //                 localField:'categoryId',
        //                 foreignField:'_id',
        //                 as:'category'
        //             },
        //         },
        //         {
        //             $lookup:{
        //                 from:'users',
        //                 localField:'userId',
        //                 foreignField:'_id',
        //                 as:'user'
        //             },           
        // }]);
     
            return res.json(news);
        }catch(err){
            console.log(err);
        }
    }

    async store(req,res){
        try{
            let image ='';
            if(req.file){
              image = req.file.filename;
            }
            const news = await News.create({...req.body, image});
            return res.json(news);
        }catch(err){
            console.log(err);
        }
    }

    async show(req,res){

    }

    async update(req,res){

    }

    async destroy(req,res){

    }

}

export default NewsController;
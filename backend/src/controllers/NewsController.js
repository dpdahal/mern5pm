import News from "../models/News.js";
import dotenv from 'dotenv';
dotenv.config();

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

      let nnews =  news.map((item,index) => {
            if(item.image){
               return item.image = `${process.env.BASE_URL}/news/${item.image}`;
        
            }
            return item;

        });    
     
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
        try{
            const news = await News.findById(req.params.id).populate('categoryId').populate('userId');
            if(news.image){
                 news.image = `${process.env.BASE_URL}/news/${news.image}`;
         
             }
            return res.json(news);
        }catch(err){
            console.log(err);
        }

    }

    async update(req,res){

    }

    async destroy(req,res){

    }

}

export default NewsController;
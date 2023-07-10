import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },

    title: {
        type: String,
        required: true,
    },
    slug:{
        type: String,
        required: true,
        unique: true,
    },
    status:{
        type: String,
        enum:['public','draft'],
        default:'draft'
    },

    introText:{
        type: String,
        default: null,
    },
    description:{
        type: String,
        default: null,
    },
    image:{
        type: String,
        default: null,

    },
    meta_title:{
        type: String,
        default: null,
    },
    meta_description:{
        type: String,
        default: null,

    },
    page_view:{
        type:Number,
        default:1

    },
    created_at:{
        type: Date,
        default: new Date(),
    },
    updated_at:{
        type: Date,
        default: new Date(),
    }


},{
    versionKey:false
});


export default mongoose.model('News',newsSchema);


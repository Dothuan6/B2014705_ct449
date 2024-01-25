exports.create = (req, res)=>{
    res.send({
        message: "create handle"
    });
};
exports.findAll = async (req, res,next)=>{
    res.send({
        message: "findAll handle"
    });
};
exports.findOne = (req, res)=>{
    res.send({
        message: "findOne handle"
    });
};
exports.update = async (req, res,next)=>{
    res.send({
        message: "update handle"
    });
};
exports.delete = async (req, res,next)=>{
    res.send({
        message: "delete handle"
    });
};
exports.deleteAll = async (req, res,next)=>{
    res.send({
        message: "delete handle"
    });
};
exports.findAllFavorite =async (req, res,next)=>{
    res.send({
        message: "findAllFavorite handle"
    });
}

const ApiError = require("../api-error");
// const MongoDB = require("../utils/mongodb.util");
// const ContactService = require("../services/contact.service");
// const ContactService = require("../services/contact.service");
// const ContactService = require("../services/contact.service");
// };
// exports.create = async(reg,res,next)=>{
//     if(!reg.body?.name){
//         return next(new ApiError(400,"Name can not be empty"));

//     }
//     try{
//         const ContactService = new ContactService(MongoDB.client);
//         const document = await ContactService.create(reg.body);
//         return res.send(document);
//     }catch(e){
//         return next(new ApiError(500,"An error occurred while creating the contact "));
//     }
// }
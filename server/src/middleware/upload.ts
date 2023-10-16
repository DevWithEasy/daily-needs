import { Request } from "express";
import multer from "multer";

const storage = multer.diskStorage({
    // destination : (req : Request, file, cb)=>{
    //     cb(null,'src/public/image')
    // },
    filename : (req : Request, file,cb)=>{
        const fileName = Date.now()+file.originalname.toLocaleLowerCase().split(' ').join('_')
        cb(null,fileName)
    }
})

const upload = multer({
    storage : storage,
    fileFilter : (req : Request ,file,cb)=>{
        if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/webp'){
            cb(null,true)
        }else{
            cb(null,false)
            return cb(new Error('Invalid file type. Only jpg.jepg and png are allowed.'));
        }
    }
})

export default upload;
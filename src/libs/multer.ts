import multer from 'multer';
import path from 'path';
import { v4 as uuid } from 'uuid';

const imageStorage = multer.diskStorage({
    destination: 'uploads/images',
    filename: (req ,file, cb) => {
        cb(null, uuid() + path.extname(file.originalname))
    }
});

const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) { 
           // upload only png and jpg format
           return cb(new Error('Please upload a Image'))
         }
        cb(null, true)
    }
});

const videoStorage = multer.diskStorage({
    destination: 'uploads/videos',
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname))
    }
});

const videoUpload = multer({
    storage: videoStorage,
    fileFilter(req, file, cb) {
        // upload only mp4 and mkv format
        if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) { 
           return cb(new Error('Please upload a video'))
        }
        cb(null, true)
     }
});

export { videoUpload, imageUpload };
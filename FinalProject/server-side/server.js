
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';

import cookieParser from 'cookie-parser';
import users_routes from "./routes/users.js";
import db from './config/db.js';
import Upload from './models/uploadModel.js';


dotenv.config();
const app = express();


try{

    await db.authenticate();
    console.log("Database Connected...")
}
catch (e) {

    console.log(e);
}

// Give us into 'dirname' the exact location in our file system
const __dirname = path.resolve();
// path : join paths, instead of writing '__dirname' + '/public'
app.use('uploads', express.static(path.join(__dirname, '/uploads')));

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        // call back
        cb(null, 'uploads');
    },

    filename: (req, file, cb) => {

        const extname = path.extname(file.originalname);
        const fileName = path.basename(file.originalname, extname) + '-' + Date.now() + extname;
        cb(null, fileName);
    }
});

const fileFilter = (req, file, cb) => {

    if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {

        cb(null, true);
    }
    else{

        cb(null, false);
    }
}

const upload = multer({storage: storage, fileFilter: fileFilter});

// async fun cause we have a require to db
// First do the middleware : save file in directory and then put the file name into db table
app.post('/api/upload', upload.single('file'), async (req, res) => {

    console.log('upload file', req.file);

    const fileName = req.file ? req.file.filename : res.json({msg: 'NO file to upload'});
    const fileType = req.file ? req.file.mimetype : null;

    try{

        const ret = await Upload.create({

            filename: fileName,
            filetype: fileType
        })

        console.log(ret);
        // 'dataValues': it's like 'returning' in 'knex'
        res.json({filedata: ret.dataValues})
    }
    catch(e){

        res.json({msg:'problem in uploading the file'});
    }
})



 // Because we want to use http cookie in front and back end
app.use(cors({credentials : true, origin: process.env.FRONT_END_URL_SERVER}));
app.use(cookieParser());

//Sometimes we need it too
app.use(express.urlencoded({extended: true}));
// Because we using POST methods here
app.use(express.json());

app.use('/users', users_routes)

app.listen(process.env.PORT||8080, ()=> {

    console.log(`listen to port ${process.env.PORT}`);
})
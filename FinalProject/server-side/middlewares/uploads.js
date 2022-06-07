import multer from 'multer';
import path from 'path';


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


export const upload = multer({storage: storage, fileFilter: fileFilter});

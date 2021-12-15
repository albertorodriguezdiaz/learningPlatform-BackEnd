const multer  = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads/img')
    },
    filename: (req, file, callback) => {        
        callback(null, Date.now() + '-' +file.originalname);
    }
})

const upload = multer({ 
    storage: storage 
}).single('file');

exports.crearUploadImage = async (req, res) => {
  
    upload(req, res, (err) => {
        if (err) {
            res.sendStatus(500);
        }
        res.send(req.file);
    });

}



const multer = require('multer');

const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = function(req, file, cb) {
    let isOK = file.mimetype === 'image/jpeg' || file.mimetype === 'image/png';
    cb(null, isOK);
};

const uploadFruitImage = multer({ 
    storage,
    fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5 // 5 MB
    }
});

module.exports = {
    uploadFruitImage
}
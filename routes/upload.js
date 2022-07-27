const jwt = require('jsonwebtoken');
// gunakan model mahasiswa yang sudah dibuat untuk mengelola database
const uploadRouter = require('express').Router();
const Uploading = require('../models/upload');
// upload file
var multer=require('multer');

// route ini dapat diakses melalui URL : http://localhost:3000/api/upload_file
// GUNAKAN KEYWORD async/await UNTUK MENGGUNAKAN MODEL
// TAMPILKAN JSON KE PENGGUNA

// KODE INI SEBAGAI MIDDLEWARE UNTUK MENGECEK APAKAH PENGGUNA TERAUTENTIKASI JWT
// SILAHKAN DIFAHAMI DAN JANGAN LUPA DIPRAKTEKKAN
function verifyUser(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const token = bearerHeader.split(' ')[1];
    req.token = token;
    next();
  } else {
    res.status(403);
    res.json({ message: 'Anda belum terautentikasi' });
  }
}
function jwtVerify(token, res) {
  jwt.verify(token, process.env.SECRET_KEY, (err, auth) => {
    if (err) {
      res.status(403);
      res.json({
        error: err,
        message: 'Anda belum terautentikasi',
      });
      res.end();
    }
  });
}

// upload file
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, 'uploads');
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    }
  });

var upload = multer({
  storage: storage,
  limits : {fileSize : 1000000},
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
}).single('file');

uploadRouter.post('/file', verifyUser, upload, async (req, res, next) => {
  jwtVerify(req.token, res);
    if (!req.file) {
        console.log("No file received");
        return res.send({
        success: false
        });

    } else {
      const uploadFile = new Uploading({
        image: {
          data: req.file.filename,
          contentType:'image/png'
        }
      });
      uploadFile.save()
        console.log('file received');
        return res.send({
          data: req.file.filename,
          success: true
        })
    }
});

module.exports = uploadRouter;
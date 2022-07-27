const { Schema, default: mongoose } = require('mongoose');

// buat model mahasiswa dengan rincian schema sebagai berikut, jangan lupa definisikan juga tipe data property tersebut
// nama
// nim
// email
// alamat
// tahunMasuk
// tanggalLahir
const uploadSchema = new Schema(
  {
    // property : nama, type data : String
    image:{
        data:Buffer,
        contentType: String,
    }
    // lanjutkan...
  },
  {
    // collection adalah sebuah tabel pada database
    collection: 'upload',
  }
);

const Uploading = mongoose.model('Uploading', uploadSchema);

module.exports = Uploading;

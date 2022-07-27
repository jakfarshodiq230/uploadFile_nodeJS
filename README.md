# uploadFile_nodeJS
1. Buat sebuah proses autentikasi menggunakan jsonwebtoken
- salin token yang didapat untuk login
- gunakan token pada Header saat mengirimkan data, format: `Bearer token`

2. Buatlah sebuah API untuk mengelola  upload data

Tools yang dibutuhkan
- NodeJS
- Postman => gunakan untuk menguji API apakah berhasil menerima atau mengirim data
- MongoDB Compass (opsional)

Pada project ini sudah terdapat package / module `express` dan `mongoose`,
Sebelum memulai ketikkan terlebih dahulu perintah `npm install` pada terminal
Untuk menjalankan project, ketik `npm run dev`

- express => mengatur membuat logic di server
- mongoose => mengelola urusan ke database mongodb
- multer => mengelola upload file

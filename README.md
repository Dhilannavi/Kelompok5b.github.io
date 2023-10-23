Kelompok5b
SneakyKicks(Website review sepatu)

[Srs Website SneakyKicks.docx](https://github.com/Dhilannavi/Kelompok5b.github.io/files/13063790/Srs.Website.SneakyKicks.docx)
link website https://dhilannavi.github.io/Kelompok5b.github.io/

Penjelasan coding:

Head :
/.
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>SneakyKicks</title>
</head> ./
•       <head>: Bagian ini berisi informasi meta dan referensi ke berkas-berkas eksternal yang diperlukan oleh halaman web, seperti file CSS dan ikon favicon.
•       <meta charset="UTF-8">: Mengatur karakter set dokumen sebagai UTF-8, yang merupakan standar internasional yang mendukung banyak karakter dan simbol.
•       <meta name="viewport" content="width=device-width, initial-scale=1.0">: Mengatur viewport untuk responsifitas halaman web pada perangkat berbeda.
•       <link rel="stylesheet" type="text/css" href="css/style.css">: Menghubungkan file CSS eksternal dengan halaman web ini.
•       <title>SneakyKicks</title>: Menentukan judul halaman yang akan ditampilkan pada tab peramban web.
 
Header:
    <header>
        <h1>SneakyKicks</h1>
        <ul>
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Bantuan</a></li>
        </ul>
    </header>
<h1>SneakyKicks</h1>: Menampilkan judul utama halaman web.
<ul>: Ini adalah daftar tak-terurut (unordered list) yang berisi tautan ke halaman "Beranda", "Tentang Kami", dan "Bantuan" yang disusun dalam bentuk daftar dengan <li> (list item).
Dengan css:
header {
    background-color: #FF6B35;
    color: #EEF4ED;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
 
background-color: Menentukan warna latar belakang header, yang dalam hal ini adalah oranye (#FF6B35).
color: Mengatur warna teks dalam header menjadi putih (#EEF4ED).
padding: Memberikan ruang bawah dan atas sebesar 10 piksel dan ruang kanan-kiri nol piksel pada header.
display: Menggunakan flexbox untuk mengatur tata letak header dengan ratakan antara (justify-content: space-between) dan penyejajaran vertikal tengah (align-items: center).


header ul li a {
    text-decoration: none;
    color: #EEF4ED;
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s;
}
 
header ul li a:hover {
    color: #ff9900;
}
 
 
●	header ul li a: Menghilangkan garis bawah (text-decoration: none), memberikan warna putih pada teks (color: #EEF4ED), menerapkan cetakan tebal (font-weight: bold), dan membuat perubahan warna halus saat tautan dihover (transition: color 0.3s).
 
●	header ul li a:hover: Mengubah warna teks tautan menjadi oranye (#ff9900) saat tautan dihover.
 
 
header h1 {
    margin: 0;
    padding-left: 20px;
}
 
header ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}
 
header ul li {
    margin-right: 20px;
}
 
1.	Gaya untuk judul utama di dalam header:
○	header h1: Menghapus margin atas dan kiri (margin: 0, padding-left: 20px).
2.	Gaya untuk daftar dalam header:
○	header ul: Menghilangkan daftar tak-terurut (list-style: none), mengatur margin dan padding menjadi nol.
○	header ul li: Memberikan margin kanan sebesar 20 piksel pada setiap elemen daftar.
Footer:
    <div class="footer">
        <div class="container">
            <p>Alamat: Jalan ketintang No. 123, Kota Surabaya</p>
            <p>Email: info@sneakykicks.com</p>
            <p>No Telepon: +62 8456-7890</p
        </div>
    </div>
<div class="footer">: Ini adalah div yang mengelompokkan konten footer atau bagian bawah halaman web.
●	Di dalam <div class="footer">, ada informasi kontak seperti alamat, email, dan nomor telepon.
CSS:
.footer {
    padding: 25px 0;
    background-color: #FF6B35;
    color: #EEF4ED;
    text-align: center;
}
 
.footer p {
    margin-bottom: 10px;
}
 
  
 
1.	.footer:
○	padding: 25px 0;: Ini mengatur padding (ruang tambahan di dalam elemen) pada bagian atas dan bawah elemen "footer" sebesar 25 piksel, sementara padding horizontalnya (kiri dan kanan) tetap 0, sehingga memberikan ruang di atas dan bawah konten dalam elemen "footer."
○	background-color: #FF6B35;: Menentukan warna latar belakang elemen "footer" menjadi oranye tua (#FF6B35).
○	color: #EEF4ED;: Mengatur warna teks dalam elemen "footer" menjadi putih (#EEF4ED).
○	text-align: center;: Mengatur teks di dalam elemen "footer" menjadi rata tengah secara horizontal.
2.	.footer p:
○	margin-bottom: 10px;: Mengatur margin bawah (ruang tambahan di bawah) dari paragraf dalam elemen "footer" sebesar 10 piksel. Ini membantu memberikan ruang antara paragraf-paragraf di dalam elemen "footer" agar tidak terlalu rapat satu sama lain.
Kategori
 
    <div class="container">
        <h2>Kategori</h2>
        <div class="shoe-category">
            <div class="box">
                <a href="lifestyle.html" >
                <img src="Sneakers1.jpg" alt="Lifestyle">
                <h3>Lifestyle</h3>
                </a>
            </div>
            <div class="box">
                <a href="basket.html">
                <img src="basket.jpg" alt="Basket">
                <h3>Basket</h3>
                </a>
            </div>
            <div class="box">
                <a href="bola.html">
                <img src="bola.jpg" alt="Bola">
                <h3>Bola</h3>
                </a>
            </div>
            <div class="box">
                <a href="running.html">
                <img src="running.jpg" alt="running">
                <h3>Running</h3>
                </a>
            </div>
        </div>
    </div>
 
<div class="container">: Ini adalah div (kontainer) yang mengelompokkan konten di dalamnya. Biasanya digunakan untuk mengatur tata letak konten.
<h2>Kategori</h2>: Menampilkan subjudul "Kategori".
<div class="shoe-category">: Ini adalah div yang berisi kategori sepatu. Setiap kategori sepatu diwakili oleh elemen .box, yang berisi gambar sepatu, judul kategori, dan tautan ke halaman detail sepatu yang sesuai.
CSS:
.shoe-category {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #5b7c99; /* Warna biru contoh */
    padding: 20px;
}
 
.shoe-category img {
    width: 300px;
    height: 200px;
    margin: 20px;
    border: 1px solid #EEF4ED;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
 
.shoe-category img {
    max-width: 100%;
    height: auto;
}
 
.shoe-category a:hover {
    color: #ff9900;
}
 
.shoe-category a {
    text-decoration: none;
    color: #333;
}
 
.box {
    display: inline-block;
    background-color: #fff;
    border:1px solid #ccc;
    padding:5px;
    box-sizing: border-box;
    margin:15px 15px 15px 15px;
    border: 1px solid #EEF4ED;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
 
.shoe-category {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
1.	.container: Ini adalah aturan gaya untuk elemen dengan kelas "container," yang mengendalikan tampilan konten utama di halaman.
○	max-width: Membatasi lebar elemen "container" menjadi maksimal 1200 piksel.
○	margin: Memberikan margin di atas dan bawah sebesar 25 piksel dan margin horizontal otomatis untuk memusatkan konten.
○	text-align: Mengatur teks di dalam "container" menjadi rata tengah.
  
 
2.	.shoe-category: Ini adalah aturan gaya untuk elemen dengan kelas "shoe-category," yang mengendalikan tampilan kategori sepatu.
○	display: Menggunakan flexbox untuk mengatur tata letak kategori sepatu dengan ruang sekitar yang merata (space-around) dan fleksibilitas perataan baris (flex-wrap: wrap).
○	background-color: Memberikan warna latar belakang kategori sepatu, dalam hal ini adalah biru (#5b7c99).
○	padding: Memberikan ruang sekitar isi kategori sepatu sebesar 20 piksel.
3.	.shoe-category img: Ini adalah aturan gaya untuk gambar di dalam kategori sepatu.
○	width dan height: Mengatur lebar dan tinggi gambar menjadi 300 piksel x 200 piksel.
○	margin: Memberikan margin sekitar gambar sebesar 20 piksel.
○	border: Menambahkan border sebesar 1 piksel dengan warna putih (#EEF4ED).
○	border-radius: Mengubah sudut gambar menjadi melengkung (border-radius: 5px).
○	box-shadow: Menambahkan bayangan pada gambar dengan efek bayangan lembut.
4.	.shoe-category a: Gaya untuk tautan ke halaman detail sepatu dalam kategori sepatu.
○	text-decoration: Menghapus garis bawah dari tautan.
○	color: Memberikan warna teks tautan menjadi abu-abu tua (#333).
5.	.box: Ini adalah aturan gaya untuk elemen dengan kelas "box" di dalam kategori sepatu.
○	display: Mengatur elemen untuk ditampilkan sebagai inline-block.
○	background-color: Memberikan warna latar belakang elemen menjadi putih (#fff).
○	border: Menambahkan border sebesar 1 piksel dengan warna abu-abu muda (#ccc).
○	padding: Memberikan ruang sekitar elemen sebesar 5 piksel.
○	border-radius: Mengubah sudut elemen menjadi melengkung (border-radius: 5px).
○	box-shadow: Menambahkan bayangan pada elemen dengan efek bayangan lembut.
 


List Item:
 
    <div class="container">
        <h2>Kategori Lifestyle</h2>
        <div class="shoe-category">
            <div class="shoe-item">
                <a href="detail.html">
                    <img src="new balance.jpg" alt="Sepatu Lifestyle 1">
                    <h3>Sepatu Lifestyle 1</h3>
                </a>
            </div>
            <div class="shoe-item">
                <a href="detail-sepatu2.html">
                    <img src="sepatu samba.jpg" alt="Sepatu Lifestyle 2">
                    <h3>Sepatu Lifestyle 2</h3>
                </a>
            </div>
            <!-- Tambahkan sepatu lainnya dengan tautan ke halaman detail sepatu -->
        </div>
    </div>
<div class="container">: Ini adalah div (kontainer) yang mengelompokkan konten di dalamnya. Biasanya digunakan untuk mengatur tata letak konten.
●	<h2>Kategori Lifestyle</h2>: Menampilkan subjudul "Kategori Lifestyle."
●	<div class="shoe-category">: Ini adalah div yang berisi daftar sepatu kategori Tersebut Setiap sepatu diwakili oleh elemen .shoe-item, yang berisi gambar sepatu, judul sepatu, dan tautan ke halaman detail sepatu yang sesuai.
CSS:
.shoe-item {
    width: 300;
    margin: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    text-align: center;
    transition: transform 0.2s;
}
 
.shoe-item:hover {
    transform: scale(1.05);
}
 
.shoe-item img {
    max-width: 100%;
    height: auto;
}
 
.shoe-item h3 {
    margin-top: 10px;
    font-size: 18px;
}
 
/* Gaya untuk tautan ke halaman detail sepatu */
.shoe-item a {
    text-decoration: none;
    color: #333;
}
 
.shoe-item a:hover {
    color: #ff9900;
}
 
1.	.shoe-item: Ini adalah aturan gaya untuk elemen dengan kelas "shoe-item," yang mengendalikan tampilan detail sepatu.
○	width: Mengatur lebar elemen menjadi 300 piksel.
○	margin: Memberikan margin sekitar elemen sebesar 20 piksel.
○	padding: Memberikan padding sebesar 10 piksel.
○	border: Menambahkan border sebesar 1 piksel dengan warna abu-abu muda (#ddd).
○	border-radius: Mengubah sudut elemen menjadi melengkung (border-radius: 5px).
○	box-shadow: Menambahkan bayangan pada elemen dengan efek bayangan lembut.
○	background-color: Memberikan warna latar belakang elemen menjadi putih (#fff).
○	text-align: Mengatur teks di dalam elemen menjadi rata tengah.
○	transition: Menerapkan transisi transformasi saat elemen dihover (transform: scale(1.05)).
  
 
 
 
2.	Gaya untuk tautan ke halaman detail sepatu di dalam elemen "shoe-item":
○	.shoe-item a: Menghapus garis bawah dari tautan.
○	.shoe-item a:hover: Mengubah warna teks tautan menjadi oranye (#ff9900) saat tautan dihover.
 
 
Detail Sepatu:
 
    <div class="section">
        <div class="inline-box">
            <div class="gambar">
                <img src="new balance.jpg" width="50%">
            </div>
            <div class="box deskripsi">
            <h3>New Balance 5740</h3>
            <h4>Rp. 2.300.000</h4>
 
                <p>Review :<br>
                   
 
                </p>
 
<div class="box deskripsi">: Ini adalah div yang digunakan untuk menampilkan deskripsi produk.
●	<h3>New Balance 5740</h3>: Menampilkan judul produk "New Balance 5740."
●	<h4>Rp. 2.300.000</h4>: Menampilkan harga produk.
●	<p>Review : ...</p>: Ini adalah paragraf yang berisi ulasan atau deskripsi produk. Anda dapat menambahkan lebih banyak konten teks atau informasi produk di dalam paragraf ini.
CSS:
.section {
    padding:25px 0;
}
.inline-box {
    width: 100%;
    display: flex;
    background-color: white;
    justify-content:center;
}
 
.gambar{
    width: 30%;
}
.gambar img{
    width: 100%;
    height: auto;
}
 
.deskripsi {
    width: 60%;
}
1.	.section: Ini adalah aturan gaya untuk elemen dengan kelas "section."
○	padding: Memberikan padding di atas dan bawah sebesar 25 piksel.
2.	.inline-box: Gaya untuk elemen dengan kelas "inline-box."
○	width: Mengatur lebar elemen menjadi 100%.
○	display: Mengatur elemen menjadi inline-block.
○	background-color: Memberikan warna latar belakang elemen menjadi putih.
○	justify-content: Mengatur perataan konten ke tengah (center) secara horizontal.
3.	.gambar: Ini adalah aturan gaya untuk elemen dengan kelas "gambar."
○	width: Mengatur lebar elemen menjadi 30%.
4.	.gambar img: Ini adalah aturan gaya untuk gambar di dalam elemen dengan kelas "gambar."
○	width: Mengatur lebar gambar menjadi 100% dari lebar elemen "gambar" yang mengandungnya.
○	height: Menyesuaikan tinggi gambar agar tetap proporsional.
5.	.deskripsi: Ini adalah aturan gaya untuk elemen dengan kelas "deskripsi."
○	width: Mengatur lebar elemen menjadi 60%.

 

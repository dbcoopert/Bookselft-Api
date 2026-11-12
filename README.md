# 📚 Bookshelf API

RESTful API sederhana untuk mengelola koleksi buku. Project ini dibuat sebagai submission akhir kelas **Belajar Membuat Aplikasi Back-End untuk Pemula** dari Dicoding.

Bookshelf API menyediakan fitur untuk menambahkan, menampilkan, memperbarui, dan menghapus data buku menggunakan REST API.

## 🚀 Teknologi yang Digunakan

- **Node.js** – Runtime JavaScript.
- **Express.js** – Framework untuk membangun REST API.
- **nanoid** – Membuat ID buku yang unik.
- **ESLint** – Menjaga konsistensi dan kualitas penulisan kode.
- **Airbnb JavaScript Style Guide** – Panduan gaya penulisan JavaScript.

## ✨ Fitur

- Menambahkan buku baru.
- Menampilkan seluruh buku.
- Menampilkan detail buku berdasarkan ID.
- Memperbarui data buku berdasarkan ID.
- Menghapus buku berdasarkan ID.
- Validasi nama buku.
- Validasi jumlah halaman yang dibaca.
- Menentukan status selesai membaca secara otomatis.
- Filter buku berdasarkan nama, status membaca, dan status selesai membaca.

## 📁 Struktur Folder

```text
bookshelf-api/
├── src/
│   ├── books.js
│   ├── handler.js
│   ├── routes.js
│   └── server.js
├── .eslintrc.json
├── .eslintignore
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Instalasi dan Menjalankan Project

### 1. Clone Repository

```bash
git clone https://github.com/dbcoopert/bookshelf-api.git
```

### 2. Masuk ke Folder Project

```bash
cd bookshelf-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Jalankan Server

```bash
npm run start
```

Server berjalan pada:

```text
http://localhost:9000
```

## 📌 API Endpoints

Base URL:

```text
http://localhost:9000
```

| Method | Endpoint | Deskripsi |
|---|---|---|
| POST | `/books` | Menambahkan buku |
| GET | `/books` | Menampilkan seluruh buku |
| GET | `/books/{bookId}` | Menampilkan detail buku |
| PUT | `/books/{bookId}` | Memperbarui buku |
| DELETE | `/books/{bookId}` | Menghapus buku |

## 📝 Contoh Request

### 1. Menambahkan Buku

**POST** `/books`

Request Body:

```json
{
  "name": "Belajar Node.js",
  "year": 2025,
  "author": "Asep Mardianto",
  "summary": "Belajar dasar pengembangan backend",
  "publisher": "Dicoding",
  "pageCount": 200,
  "readPage": 50,
  "reading": true
}
```

### 2. Menampilkan Semua Buku

**GET** `/books`

### 3. Menampilkan Detail Buku

**GET** `/books/{bookId}`

Ganti `{bookId}` dengan ID buku yang ingin ditampilkan.

### 4. Memperbarui Buku

**PUT** `/books/{bookId}`

Request Body menggunakan struktur yang sama dengan penambahan buku.

### 5. Menghapus Buku

**DELETE** `/books/{bookId}`

Ganti `{bookId}` dengan ID buku yang ingin dihapus.

## 🔎 Query Parameters (Fitur Opsional)

Endpoint GET `/books` mendukung beberapa filter:

| Parameter | Nilai | Fungsi |
|---|---|---|
| `name` | String | Mencari buku berdasarkan nama |
| `reading` | `0` atau `1` | Memfilter status membaca |
| `finished` | `0` atau `1` | Memfilter status selesai membaca |

Contoh penggunaan:

```http
GET /books?name=node
GET /books?reading=1
GET /books?finished=1
GET /books?name=node&reading=1
```

Pencarian nama buku dilakukan tanpa membedakan huruf besar dan kecil.

## 🧪 Pengujian API

Pengujian dilakukan menggunakan **Postman** dengan Bookshelf API Test Collection dan Environment yang disediakan oleh Dicoding.

## 🧹 ESLint

Untuk memeriksa konsistensi kode, jalankan:

```bash
npx eslint .
```

## 👨‍💻 Author

**Asep Mardianto**

Mahasiswa Teknik Informatika – Universitas Nusa Putra.

- GitHub: [@Asep Mardianto](https://github.com/dbcoopert)

---

Project ini dibuat untuk memenuhi submission akhir kelas Belajar Membuat Aplikasi Back-End untuk Pemula dari Dicoding.

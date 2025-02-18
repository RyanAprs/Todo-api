# Social Media Post To-Do API

API CRUD untuk mengelola tugas sosial media post, seperti membuat, membaca, memperbarui, dan menghapus post terkait platform sosial media.

## Fitur:

- Menambahkan post dengan informasi seperti judul, brand, platform, due date, payment, dan status.
- Mengambil semua post.
- Memperbarui post.
- Menghapus post.

---

## Setup Project

### Prasyarat:

- Node.js (versi 16 atau lebih tinggi)
- PostgreSQL
- Prisma CLI
- Swagger UI untuk dokumentasi API

### Langkah-langkah untuk Setup Proyek:

1. **Clone Repository**
   Clone proyek ini ke dalam direktori lokal kamu:

   ```bash
   git clone https://github.com/RyanAprs/Todo-api.git
   cd repository-name
   ```

2. **Install Dependencies**
   Instal semua dependensi yang diperlukan:

   ```bash
   npm install
   ```

3. **Setup PostgreSQL Database**

   - Buat database di PostgreSQL. Misalnya, untuk membuat database `social_todo`:
     ```sql
     CREATE DATABASE social_todo;
     ```

4. **Konfigurasi File `.env`**
   Buat file `.env` di root direktori proyek dan tambahkan konfigurasi berikut:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/social_todo"
   ```

   Gantilah `username` dan `password` dengan kredensial yang sesuai di PostgreSQL kamu.

5. **Generate Prisma Client**
   Jalankan perintah berikut untuk mengenerate Prisma Client:

   ```bash
   npx prisma generate
   ```

6. **Jalankan Migrasi untuk Membuat Tabel**
   Jalankan migrasi untuk membuat tabel berdasarkan schema yang ada:

   ```bash
   npx prisma migrate dev --name init
   ```

7. **Jalankan Aplikasi**
   Jalankan server untuk memulai aplikasi:
   ```bash
   npm run dev
   ```
   Server akan berjalan pada `http://localhost:5000`.

---

## Dokumentasi API (Swagger)

Dokumentasi API dapat diakses di [http://localhost:5000/api-docs](http://localhost:5000/api-docs) setelah aplikasi berjalan.

API ini menggunakan Swagger UI untuk menampilkan dokumentasi interaktif. Anda dapat melihat dan mencoba semua endpoint dari UI ini.

### Endpoints:

#### 1. GET /api/posts

- **Deskripsi**: Mengambil semua post.
- **Response**:
  - `200 OK`: Mengembalikan daftar semua post.

#### 2. POST /api/posts

- **Deskripsi**: Menambahkan post baru.
- **Body Request**:
  ```json
  {
    "title": "Post Title",
    "brand": "Brand Name",
    "platform": "Platform Name",
    "dueDate": "2025-12-31T23:59:59.999Z",
    "payment": 1000.5,
    "status": "Pending"
  }
  ```
- **Response**:
  - `201 Created`: Post berhasil ditambahkan.

#### 3. PUT /api/posts/{id}

- **Deskripsi**: Memperbarui post berdasarkan ID.
- **Parameters**:
  - `id`: ID post yang akan diperbarui.
- **Body Request**:
  ```json
  {
    "title": "Updated Title",
    "brand": "Updated Brand",
    "platform": "Updated Platform",
    "dueDate": "2025-12-31T23:59:59.999Z",
    "payment": 1200.75,
    "status": "Completed"
  }
  ```
- **Response**:
  - `200 OK`: Post berhasil diperbarui.

#### 4. DELETE /api/posts/{id}

- **Deskripsi**: Menghapus post berdasarkan ID.
- **Parameters**:
  - `id`: ID post yang akan dihapus.
- **Response**:
  - `200 OK`: Post berhasil dihapus.

---

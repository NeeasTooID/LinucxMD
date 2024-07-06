# Gunakan image node versi LTS dari buster
FROM node:lts-buster

# Set working directory
WORKDIR /app

# Salin package.json dan package-lock.json untuk menginstal dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file dari proyek ke container
COPY . .

# Ekspos port yang akan digunakan aplikasi
EXPOSE 3000

# Jalankan aplikasi
CMD ["node", "main.js"]

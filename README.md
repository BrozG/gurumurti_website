# Gurumurti Website 🌐

> A professional client website built with React and TypeScript, featuring a Cloudinary-powered gallery and admin panel.

🔗 **Live Site:** [gurumurti-website.vercel.app] (https://www.gurumurtidecorators.com/)

---

## ✨ Features

- 🖼️ **Gallery** — Dynamic image gallery powered by Cloudinary API
- 🔐 **Admin Panel** — Client can upload and manage gallery images without touching code
- 📬 **Contact Form** — Visitors can reach out directly from the website
- 👤 **About Page** — Client introduction and background
- 🛠️ **Services Page** — Showcase of services offered

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| Image Storage | Cloudinary API |
| Deployment | Vercel |

---

## 📁 Project Structure

```
gurumurti_website/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # About, Services, Gallery, Contact
│   └── main.tsx          # App entry point
├── api/                  # Backend API routes
├── public/               # Static assets
└── index.html
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/BrozG/gurumurti_website
cd gurumurti_website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file:
```bash
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_API_KEY=your_api_key
VITE_CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Run the dev server
```bash
npm run dev
```

---

## 🔐 Admin Panel

The admin panel allows the client to:
- ✅ Upload new images directly to Cloudinary
- ✅ Manage gallery images (add/remove)
- ✅ Update gallery without any developer help

---

## 👤 Author

**BrozG** — Design, Development & Deployment

[![GitHub](https://img.shields.io/badge/GitHub-BrozG-blue)](https://github.com/BrozG)
[![Live](https://img.shields.io/badge/Live-gurumurti--website.vercel.app-green)](https://gurumurti-website.vercel.app) / (https://www.gurumurtidecorators.com/)

---

## 📄 License

MIT

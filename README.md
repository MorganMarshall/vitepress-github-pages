# 📖 VitePress GitHub Pages Boilerplate with Github actions

A minimal, ready-to-deploy **VitePress** site with **GitHub Actions** preconfigured for seamless deployment to **GitHub Pages**.

## ✨ Features

* ⚡️ Out-of-the-box [VitePress](https://vitepress.dev/) setup
* 🚀 Continuous Deployment via **GitHub Actions**
* 🌐 Auto-publish to **GitHub Pages**
* 🛠️ Easy customization for docs, blogs, or personal sites

## 📂 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions workflow for Pages
├── .vitepress/
│   └── config.ts        # VitePress configuration
├── index.md             # Home page
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone this repo

```
git clone https://github.com/MorganMarshall/vitepress-github-pages.git
cd vitepress-github-pages
```

### 2. Install dependencies

```
npm install
```

### 3. Run locally

```
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```
npm run build
```

### 5. Deploy

Push changes to the `main` branch. GitHub Actions will **automatically build and publish** your site to GitHub Pages.

Your site will be live at:

```
https://<username>.github.io/<repo>/
```

## ⚙️ Configuration

* Edit `.vitepress/config.ts` for site title, theme, and navigation.
* Update `index.md` and add additional pages in the root folder.
* GitHub Actions workflow is located at `.github/workflows/deploy.yml`.

## 📜 License

MIT © [Morgan Marshall](https://github.com/MorganMarshall)

---

Made with ❤️ using [VitePress](https://vitepress.dev/) + [GitHub Pages](https://pages.github.com/).

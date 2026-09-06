# 🚀 Interactive 3D WebGL Developer Portfolio

A futuristic personal portfolio website designed for computer science students and frontend developers. Built with **React**, **Vite**, **Three.js (WebGL)**, and **Tailwind CSS**.

![Portfolio Preview Monogram](./public/favicon.svg)

---

## ✨ Features

- **Interactive 3D WebGL Core**: Real-time rendering with Three.js featuring an interactive faceted icosahedron, cyber-wireframe cage, orbital ring, and responsive particle starfield that reacts to mouse movement.
- **Modern Dark Tech & Glassmorphism**: Deep space dark theme with frosted glass panels, glowing neon accents, and smooth hover states.
- **Centralized Profile Config (`profileData.js`)**: Update your name, college, email, social links, skills, and projects in one file — no JSX modification required.
- **Curated Starter Showcase Projects**: Includes detailed modals, GitHub repo links, live demo buttons, and performance metrics.
- **Journey & Education Timeline**: Showcase your college degree, relevant coursework (DSA, OOP, DBMS), and milestones.
- **Interactive Contact Section**: Direct message form, 1-click "Copy Email" with instant toast notification, and social channel links.
- **Automated GitHub Pages Deployment**: Pre-configured GitHub Actions workflow for zero-headache hosting.

---

## 🛠️ Quick Start (Running Locally)

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18 or newer) installed on your computer.

### 2. Install Dependencies
Open your terminal inside this project folder and run:
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`. You'll see your 3D interactive portfolio running live with instant hot-reloading!

---

## ✏️ How to Personalize Your Portfolio (Takes 2 Minutes)

All your data is neatly organized inside one file:
📁 **`src/data/profileData.js`**

Open that file to update:
1. **Name, Role & Bio**: Configured for Ashutosh Chaudhari (B.Tech CSE AI & ML @ KCC ITM).
2. **Social Links**: Configured with GitHub (`ashutosh18-web`), WhatsApp (`+91 9934113207`), and email (`ashutoshchaudhari188@gmail.com`).
3. **Skills & Roadmap**: Add or modify languages and tools you are learning.
4. **Projects**: Replace or customize the starter showcase projects with your own repositories and live links as you build them!

---

## 🌐 Deploying to GitHub Pages (Free Hosting)

There are two easy ways to publish your portfolio to the web for free:

### Method A: Automated GitHub Actions (Recommended)
1. Initialize a git repository and push this code to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Every time you push changes to the `main` branch, GitHub will automatically build and deploy your site to `https://<YOUR_USERNAME>.github.io/<REPO_NAME>/`!

### Method B: Manual 1-Command Deploy (`gh-pages`)
1. Run:
   ```bash
   npm run deploy
   ```
2. Your build will be uploaded directly to the `gh-pages` branch on GitHub.

---

## 📁 Project Structure

```
personal-portfolio-3d/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions CI/CD deployment
├── public/
│   └── favicon.svg           # Glowing monogram favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Glassmorphic floating header & mobile menu
│   │   ├── Hero.jsx          # Headline, stats, CTA & 3D canvas container
│   │   ├── ThreeCanvas.jsx   # Pure Three.js WebGL 3D interactive scene
│   │   ├── About.jsx         # 2nd-year journey & academic foundation
│   │   ├── Skills.jsx        # Categorized tech grid & learning roadmap
│   │   ├── Projects.jsx      # Project cards with 3D aesthetic
│   │   ├── ProjectModal.jsx  # Deep dive architecture popup modal
│   │   ├── Experience.jsx    # Education & milestone timeline
│   │   ├── Contact.jsx       # Contact form & 1-click email copy
│   │   └── Footer.jsx        # Tech stack badges & back-to-top button
│   ├── data/
│   │   └── profileData.js    # Single source of truth for all info
│   ├── App.jsx               # Main application component
│   ├── index.css             # Tailwind utilities & glassmorphic styling
│   └── main.jsx              # React DOM entry point
├── index.html                # HTML entry & Google Fonts
├── package.json              # Project scripts & dependencies
├── tailwind.config.js        # Custom dark tech theme & keyframes
├── vite.config.js            # Vite build configuration (base: './')
└── README.md                 # Project documentation
```

---

## 📄 License
Open-source under the [MIT License](LICENSE). Feel free to use and customize for your own personal portfolio!

# 🗑️ Skip Selector Challenge

A clean, responsive React app to browse and select skip sizes—with light/dark theming, CSS-variable design tokens, and dynamic data from the WeWantWaste API.

---

## 📋 Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Prerequisites](#prerequisites)  
- [Getting Started](#getting-started)  
  - [Installation](#installation)  
  - [Running Locally](#running-locally)  
  - [Building for Production](#building-for-production)  
- [Configuration](#configuration)  
- [Project Structure](#project-structure)  
- [Theming](#theming)  
- [API Usage](#api-usage)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

---

## 🎬 Demo

> **Live demo coming soon**  
> Or run locally (see below) to explore light/dark mode, card selection, and dynamic API data.

---

## ✨ Features

- ✅ **Responsive grid**: 1↔2↔3 columns on mobile/tablet/desktop  
- 🎨 **Light & Dark themes** with 🌙/☀️ toggle  
- 🏷️ **Design tokens** via CSS variables for colors, spacing, typography  
- 🔄 **Dynamic data** from the skips-by-location endpoint  
- 📐 **Fixed-aspect skip cards**, consistent image sizing  
- ⚠️ **Conditional warning banner** (“Not Allowed On The Road”)  
- ✔️ **Keyboard & ARIA** accessibility for card selection  

---

## 🛠️ Tech Stack

- **React** (Create React App)  
- **Axios** for HTTP requests  
- **CSS Variables** for theming & tokens  
- **Flexbox & CSS Grid** for layout  
- **Google Fonts**: Inter (body) + Montserrat (headings)

---

## 🔧 Prerequisites

- [Node.js](https://nodejs.org/) ≥ v14  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  

---

## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/your-username/skip-selector-challenge.git
cd skip-selector-challenge

# with npm
npm install

# or with yarn
yarn install
```

### Running Locally

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will reload on code changes.

### Building for Production

```bash
npm run build
# or
yarn build
```

Optimized output goes into the `build/` folder, ready for deployment.

---

## ⚙️ Configuration

You can override the default postcode and area by creating a `.env` file at project root:

```env
REACT_APP_POSTCODE=NR32
REACT_APP_AREA=Lowestoft
```

The app will read these variables at runtime. If unset, it falls back to `NR32` / `Lowestoft`.

---

## 📂 Project Structure

```
skip-selector-challenge/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SkipSelectPage.jsx
│   │   ├── SkipOptionCard.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useFetch.js
│   ├── styles/
│   │   ├── index.css       # global theme + typography
│   │   ├── Header.css
│   │   ├── SkipSelectPage.css
│   │   └── SkipOptionCard.css
│   ├── theme.js            # (optional) inline-style token object
│   ├── App.js
│   └── index.js
└── package.json
```

---

## 🎨 Theming

All colors, fonts, spacing, and shadows are defined as CSS variables under  
`:root[data-theme='light']` and `:root[data-theme='dark']` in `src/styles/index.css`.  
To tweak the look:

1. Edit the `--color-…` tokens.  
2. Adjust `--font-…` or `--radius-…` values.  
3. Save & reload — no rebuild needed.

---

## 📡 API Usage

Data is fetched from:

```
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${POSTCODE}&area=${AREA}
```

where `POSTCODE`/`AREA` come from your `.env` or defaults in `SkipSelectPage.jsx`.  
If an image URL fails, cards fall back to a placeholder.

---

## 🤝 Contributing

1. Fork this repo  
2. Create a feature branch: `git checkout -b feature/YourFeature`  
3. Commit your changes: `git commit -m "Add awesome feature"`  
4. Push to your branch: `git push origin feature/YourFeature`  
5. Open a Pull Request  

Please follow the existing code style and write clear commit messages.

---

## 📄 License

This project is MIT-licensed. See the [LICENSE](LICENSE) file for details.

---

Happy coding! 🚀
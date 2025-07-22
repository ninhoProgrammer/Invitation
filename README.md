

# Astro Web Invitation - Astro Project

This project is an interactive web invitation built with [Astro](https://astro.build/). It features animations, background music, a countdown timer, and custom sections for special events.

## 🚀 Project Structure

```
/
├── public/
│   ├── images and media assets (webp, svg, mp3, weba)
├── src/
│   ├── assets/         # Images and SVGs used in the site
│   ├── components/     # Reusable components (AnimacionScroll, Banner, Footer, Header, Hero, Iglesia, Loading, Makeweb, Salon, Timer)
│   ├── layouts/        # Main site layout
│   ├── pages/          # Main page (index.astro)
│   ├── scripts/        # JS scripts (audio-controller.js)
│   └── styles/         # CSS stylesheets
├── package.json        # npm dependencies and scripts
├── astro.config.mjs    # Astro configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## ✨ Features

- Scroll and loading animations
- Countdown timer for the event
- Background audio player
- Custom sections: Church, Hall, Banner, Hero, Footer, Header
- Responsive and modern design

## 🧞 Commands

Run these commands from the project root:

| Command           | Action                                              |
|-------------------|-----------------------------------------------------|
| `npm install`     | Install dependencies                                |
| `npm run dev`     | Start development server (`localhost:4321`)         |
| `npm run build`   | Build the site for production (`./dist/`)           |
| `npm run preview` | Preview the built site locally                      |

## 📦 Requirements

- Node.js 18+
- npm

## 👀 More Information

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)

## 📝 License

This project is licensed under the terms of the MIT License. See the [MIT License](LICENSE)
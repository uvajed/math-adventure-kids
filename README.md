# Math Adventure - Fun Learning for Kids!

A colorful, interactive math learning game designed for children in grades 1-4. Built as a progressive web app with no dependencies.

**Live Demo:** [https://uvajed.github.io/math-adventure-kids/](https://uvajed.github.io/math-adventure-kids/)

![Math Adventure Screenshot](https://img.shields.io/badge/Grades-1--4-blue) ![Languages](https://img.shields.io/badge/Languages-English%20%7C%20German-green) ![No Dependencies](https://img.shields.io/badge/Dependencies-None-brightgreen)

## Features

### Game Modes
- **Fill the Gap** - Find the missing number in equations
- **Quick Quiz** - Multiple choice math problems
- **Match Game** - Connect problems with their answers
- **Bubble Pop** - Pop floating bubbles with the correct answer

### User Profiles
- Multiple player profiles on one device
- Optional PIN protection with SHA-256 hashing
- Progress tracking (games played, total score, best streak)
- Customizable avatars

### Learning Features
- Grade-appropriate difficulty (1st through 4th grade)
- Addition, subtraction, multiplication, division
- Fractions and comparisons for higher grades
- Prize system rewards every 3 correct answers in a row

### Design
- Kid-friendly, colorful interface
- Animated backgrounds and modern visual effects
- Sound effects using Web Audio API
- Fully responsive (works on phones, tablets, desktops)
- Multi-language support (English & German)

## Getting Started

### Run Locally
No build step required! Simply:

```bash
# Clone the repository
git clone https://github.com/uvajed/math-adventure-kids.git

# Open in browser
open index.html

# Or use a local server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Deploy
This is a static site. Deploy to any static hosting:
- GitHub Pages (current hosting)
- Netlify
- Vercel
- Any web server

## Tech Stack

- **HTML5** - Single page with screen-based navigation
- **CSS3** - CSS variables, animations, glassmorphism effects
- **Vanilla JavaScript** - No frameworks or dependencies
- **Web Audio API** - Sound effects
- **Web Crypto API** - PIN hashing (SHA-256)
- **localStorage** - User data persistence

## Project Structure

```
├── index.html      # All screens and markup
├── styles.css      # Styles, animations, responsive design
├── game.js         # Game logic, i18n, user management
├── CLAUDE.md       # AI assistant guidance
└── README.md       # This file
```

## Browser Support

Works in all modern browsers:
- Chrome / Edge
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome for Android)

## License

MIT License - Feel free to use, modify, and share!

---

Made with fun for kids who love math!

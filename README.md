# JavaScript Learning Path

**Interactive, hands-on JavaScript course from zero to full-stack developer**

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://personalbotai.github.io/javascript-learning-path/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Building-orange)]

---

## 📚 About This Repository

This is part of the **Multi-Language Interactive Learning Paths** project - a comprehensive set of 15 language-specific learning platforms built with:

- **Pure HTML/CSS/JavaScript** (no build step required)
- **Tailwind CSS** for styling
- **Monaco Editor** for code editing (VS Code's editor)
- **localStorage** for progress persistence
- **Responsive design** (mobile-first)
- **Deployed on GitHub Pages** (free hosting)

## 🎯 Learning Path Structure

**10 Modules**, **50+ Lessons**, **10 Quizzes**, **5 Projects**

1. **Foundations** (6 lessons) - Variables, types, operators, control flow
2. **Data Structures** (5 lessons) - Arrays, objects, sets, maps, JSON
3. **Object-Oriented Programming** (5 lessons) - Classes, inheritance, encapsulation, polymorphism
4. **Advanced Concepts** (5 lessons) - Closures, prototypes, this, arrow functions, IIFE
5. **Standard Library** (6 lessons) - Math, Date, String, Array methods, RegExp
6. **Web Development** (5 lessons + project) - DOM, events, fetch API, async/await, To-Do List app
7. **Tooling & Ecosystem** (6 lessons) - npm, modules, Babel, Webpack, ESLint, Jest
8. **Best Practices** (6 lessons) - Clean code, performance, security, debugging, error handling
9. **Advanced Topics** (5 lessons + project) - Generators, proxies, web workers, design patterns, Weather Dashboard
10. **Real-World Projects** (5 projects + final) - Quiz app, expense tracker, chat app, e-commerce filter, full-stack app

## 🚀 Quick Start

### For Learners

1. Visit the live site: **https://personalbotai.github.io/javascript-learning-path/**
2. Pick a module from the sidebar
3. Read the lesson, try the code examples
4. Click **Run** to execute JavaScript code in-browser
5. Complete quizzes to test understanding
6. Build projects at the end of each module
7. Track your progress automatically saved in browser

### For Developers (Local Setup)

```bash
# Clone this repository
git clone https://github.com/personalbotai/javascript-learning-path.git
cd javascript-learning-path

# Start a local server (any method):
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node.js (http-server)
npx http-server -p 8000

# Option 3: PHP
php -S localhost:8000

# Open browser to http://localhost:8000
```

**Note**: Some features (like code execution) require a web server due to CORS restrictions. Opening `index.html` directly may not work.

## 📁 Repository Structure

```
javascript-learning-path/
├── index.html          # Main HTML entry point
├── styles.css          # Custom CSS (Tailwind + custom styles)
├── app.js              # Main application logic
├── modules.js          # Module definitions (10 modules)
├── quiz.js             # Quiz system
├── progress.js         # Progress tracking & achievements
├── lessons/            # Lesson content (HTML files)
│   ├── pengenalan-dan-sejarah.html
│   ├── setup-environment.html
│   ├── variabel-dan-tipe-data.html
│   ├── operator-dan-ekspresi.html
│   ├── perulangan.html
│   ├── kontrol-alur-if-else.html
│   └── ... (44+ more lessons)
├── quizzes/            # Quiz data (JSON)
│   └── module-1.json
│   └── module-2.json (coming soon)
├── README.md
├── CONTRIBUTING.md
└── LICENSE
```

## 🛠️ Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| Styling | Tailwind CSS (CDN) | Utility-first CSS framework |
| Code Editor | Monaco Editor | VS Code's editor component |
| Code Runner | Custom JS evaluator | Execute JavaScript in-browser (sandboxed) |
| Diagrams | Mermaid.js (future) | Flowcharts & architecture diagrams |
| Progress | localStorage | Persist user progress offline |
| Hosting | GitHub Pages | Free static site hosting |
| Icons | Font Awesome | UI icons |

## 📊 Progress Tracking

Progress is automatically saved in browser's `localStorage`:

- Completed lessons
- Quiz scores & pass/fail status
- Code execution count
- Achievements unlocked
- Module completion percentages

**Reset progress**: Click "Reset" button in header.

## 🏆 Achievements

- **First Step** - Complete your first lesson
- **Quiz Master** - Pass 5 quizzes with 100%
- **Speed Runner** - Complete a module in under 1 hour
- **Completionist** - Finish all lessons in a module
- **Code Runner** - Execute 50 code examples

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**Areas needing help:**
- Content writing for remaining lessons (Module 2-10)
- Quiz question creation (need 10 quizzes total)
- Project ideas and solutions
- Bug reports and UX improvements
- Translations to other languages

## 📝 License

MIT License - see [LICENSE](LICENSE) file.

## 🔗 Related Repositories

This is part of a larger multi-language learning path project:

- [Go Learning Path](https://github.com/personalbotai/go-learning-path) (template reference)
- [Python Learning Path](https://github.com/personalbotai/python-learning-path)
- JavaScript Learning Path (this repo)
- [TypeScript Learning Path](https://github.com/personalbotai/typescript-learning-path) (planned)
- ... and 12 more languages

## 🙏 Acknowledgments

- **Archon** - Sovereign Systems Architect & Polyglot Principal Engineer
- **Tailwind CSS** - Utility-first CSS framework
- **Monaco Editor** - Microsoft's VS Code editor component
- **StackBlitz** - WebContainer API inspiration (code execution)
- **MDN Web Docs** - JavaScript reference

---

Built with ❤️ by the Archon team | "Ordo ex Chao" | 2026
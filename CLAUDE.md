# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Math Adventure is a kid-friendly math learning web app for grades 1-4. It's a static site (HTML/CSS/JS) hosted on GitHub Pages at https://uvajed.github.io/math-adventure-kids/

## Development

No build system required. Open `index.html` directly in a browser or use a local server:
```bash
python3 -m http.server 8000
```

## Architecture

### Single-Page App Structure
- **index.html**: All screens defined as `<div class="screen">` sections, toggled via `.active` class
- **styles.css**: CSS variables in `:root`, mobile-first responsive design with breakpoints at 768px, 480px, 360px
- **game.js**: All application logic in one file

### Key Systems in game.js

**Internationalization (i18n)**
- `translations` object contains all English (`en`) and German (`de`) strings
- `t(key)` - get translated string
- `tArray(key)` - get translated array (for random messages)
- `tNested(key, subKey)` - get nested translation (grade descriptions, prize names)
- `data-i18n` attributes on HTML elements for automatic translation via `updateAllTranslations()`

**User Management**
- Users stored in localStorage as `mathAdventureUsers`
- Each user has: id, name, avatar, grades[], language preference, pinHash (optional), stats
- `currentUser` global holds logged-in user

**PIN Security**
- Optional 4-digit PIN protection for user profiles
- PINs are hashed with SHA-256 + salt before storage (never stored in plain text)
- `hashPin(pin)` - async function using Web Crypto API
- `verifyPinHash(enteredPin, storedHash)` - async comparison
- PIN modal appears when selecting a protected profile

**Game State**
- `gameState` object tracks: grade, mode, score, streak, lives, currentQuestion, prizes won
- `gradeConfig` defines math operations and difficulty per grade level

**Screen Navigation**
- `screens` object maps screen names to DOM elements
- `showScreen(screenId)` toggles active screen

### Game Modes
1. **fill-blank**: Type the missing number
2. **quiz**: Multiple choice (4 options)
3. **match**: Match problems to answers
4. **bubble**: Pop floating bubbles with correct answer

### Prize System
- Awards random prize every 3 consecutive correct answers
- `prizes` array contains emoji, nameKey (for translation), and bonus points
- Prize popup with animations, collected prizes shown during game and at results

### Sound System
- Web Audio API with `audioContext`
- `sounds` object defines frequency/duration for each sound type
- `playSound(soundName)` plays tones, `playTone()` handles oscillator

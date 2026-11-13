# Kurumi's Rice Trading

**English** · [简体中文](README.zh-CN.md) · [日本語](README.ja.md)

A monochrome, absurdist rice-trading simulation set in the Reiwa era.

**[Play Online](https://hatsune-hitsuzi.github.io/network_web_game/)**

## Overview

Kurumi's Rice Trading is a short browser-based market simulation. Starting with ¥1,000,000, the player buys and sells rice over 14 days while reacting to daily price movements and random market events. Any remaining stock must be converted back into cash before the game ends.

The game supports Chinese, Japanese, and English. It runs directly on GitHub Pages with no registration or installation required.

## Features

- A 14-day, turn-based rice market
- Random daily price movements
- Positive and negative market events
- All-in, custom-quantity, and percentage-based trading
- Live cash, inventory, and inventory-value displays
- A rice-price history chart
- A sell reminder from Day 12
- Multiple endings based on final cash
- Chinese, Japanese, and English language switching
- A responsive browser interface

## How to Play

1. Start with ¥1,000,000 and a rice price of ¥600 per kilogram.
2. Check the current price and market event each day.
3. Buy rice, sell rice, or hold, then select “Next Day.”
4. Continue trading for 14 days.
5. Only cash counts toward the final result; unsold rice has no value at settlement.

## Run Locally

No build tools or additional dependencies are required.

```bash
git clone https://github.com/hatsune-hitsuzi/network_web_game.git
cd network_web_game
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser. You can also open `index.html` directly.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages
- Google Fonts

The project uses no front-end framework. `gameConfig.js` contains localized text, market events, and ending conditions. `app.js` handles state management, price calculation, trading, and rendering.

## Project Structure

```text
network_web_game/
├── assets/          # Images
├── app.js           # Game logic and rendering
├── gameConfig.js    # Content and configuration
├── index.html       # Application entry point
├── styles.css       # Styles and animation
├── README.md        # English documentation
├── README.zh-CN.md  # Simplified Chinese documentation
└── README.ja.md     # Japanese documentation
```

## Contributing

Issues and pull requests are welcome. Please describe the problem or proposed change clearly before submitting a large modification.

## License

This project is released under the [MIT License](LICENSE).

# Kurumi's Rice Trading

**[English](#english)** · **[简体中文](#简体中文)** · **[日本語](#日本語)**

A monochrome, absurdist rice-trading simulation set in the Reiwa era.

**[Play Online](https://hatsune-hitsuzi.github.io/network_web_game/)**

## English

### Overview

Kurumi's Rice Trading is a short browser-based market simulation. Starting with ¥1,000,000, the player buys and sells rice over 14 days while reacting to daily price movements and random market events. Any remaining stock must be converted back into cash before the game ends.

The game supports Chinese, Japanese, and English. It runs directly on GitHub Pages with no registration or installation required.

### Features

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

### How to Play

1. Start with ¥1,000,000 and a rice price of ¥600 per kilogram.
2. Check the current price and market event each day.
3. Buy rice, sell rice, or hold, then select “Next Day.”
4. Continue trading for 14 days.
5. Only cash counts toward the final result; unsold rice has no value at settlement.

### Run Locally

No build tools or additional dependencies are required.

```bash
git clone https://github.com/hatsune-hitsuzi/network_web_game.git
cd network_web_game
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser. You can also open `index.html` directly.

### Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages
- Google Fonts

The project uses no front-end framework. `gameConfig.js` contains localized text, market events, and ending conditions. `app.js` handles state management, price calculation, trading, and rendering.

### Project Structure

```text
network_web_game/
├── assets/          # Images
├── app.js           # Game logic and rendering
├── gameConfig.js    # Content and configuration
├── index.html       # Application entry point
├── styles.css       # Styles and animation
└── README.md        # English, Chinese, and Japanese documentation
```

### Contributing

Issues and pull requests are welcome. Please describe the problem or proposed change clearly before submitting a large modification.

### License

This project is released under the [MIT License](LICENSE).

[Back to language selection](#kurumis-rice-trading)

---

## 简体中文

一个黑白鬼畜风的令和米模拟交易小游戏。

**[在线试玩](https://hatsune-hitsuzi.github.io/network_web_game/)**

### 项目简介

《韭留美炒米记》是一款在浏览器中运行的短篇米市交易游戏。玩家以 1,000,000 日元作为初始资金，在 14 天内根据每日价格和随机事件买卖大米，并在最后一天结束前将库存换回现金。

游戏支持中文、日语和英语，可直接通过 GitHub Pages 游玩，不需要注册或安装。

### 主要功能

- 14 天回合制米市交易
- 每日随机价格波动
- 影响米价的正面与负面事件
- 全仓、指定数量和百分比买卖
- 实时显示现金、库存和库存金额
- 米价走势图
- 第 12 天起显示清仓提醒
- 根据最终现金触发不同结局
- 中文、日语、英语三语切换
- 响应式浏览器界面

### 游戏规则

1. 初始资金为 1,000,000 日元，初始米价为每公斤 600 日元。
2. 每天查看当前价格和市场事件，然后选择买入、卖出或不操作。
3. 点击“进入下一天”后，系统会计算新的米价。
4. 游戏共 14 天。
5. 结算时只计算现金，未卖出的库存不会计入最终成绩。

### 本地运行

本项目不需要构建工具或额外依赖。

```bash
git clone https://github.com/hatsune-hitsuzi/network_web_game.git
cd network_web_game
python -m http.server 8000
```

然后在浏览器中访问 `http://localhost:8000`。也可以直接打开 `index.html`。

### 技术栈

- HTML5
- CSS3
- 原生 JavaScript
- GitHub Pages
- Google Fonts

项目没有使用前端框架。`gameConfig.js` 保存多语言文本、市场事件和结局条件，`app.js` 负责状态管理、价格计算、交易处理和界面渲染。

### 项目结构

```text
network_web_game/
├── assets/          # 图片
├── app.js           # 游戏逻辑与渲染
├── gameConfig.js    # 内容与配置
├── index.html       # 页面入口
├── styles.css       # 样式与动画
└── README.md        # 英文、中文和日文说明
```

### 参与贡献

欢迎提交 Issue 和 Pull Request。进行较大修改前，请先清楚说明问题或改动建议。

### 许可证

本项目采用 [MIT 许可证](LICENSE) 开源。

[返回语言选择](#kurumis-rice-trading)

---

## 日本語

令和の米市場をテーマにした、モノクロでシュールな取引シミュレーションゲームです。

**[デモをプレイ](https://hatsune-hitsuzi.github.io/network_web_game/)**

### 概要

「久留美の米トレード」は、ブラウザで遊べる短編の米取引ゲームです。プレイヤーは100万円の初期資金を使い、14日間、毎日の米価とランダムイベントを見ながら米を売買します。最終日までに在庫を現金に戻すことが目標です。

中国語、日本語、英語に対応しています。登録やインストールは必要なく、GitHub Pagesからすぐに遊べます。

### 主な機能

- 14日間のターン制米取引
- 毎日のランダムな価格変動
- 米価に影響するプラス・マイナスイベント
- 全力売買、数量指定、割合指定
- 現金、在庫、在庫金額のリアルタイム表示
- 米価の推移グラフ
- 12日目からの売却警告
- 最終現金に応じた複数のエンディング
- 中国語・日本語・英語の言語切り替え
- レスポンシブなブラウザ画面

### ゲームルール

1. 初期資金は100万円、最初の米価は1キログラム600円です。
2. 毎日、現在の価格とイベントを確認し、「買う」「売る」「何もしない」の中から選びます。
3. 「次の日へ」を押すと、新しい米価が計算されます。
4. ゲームは14日間です。
5. 最終結果では現金だけを計算し、売れ残った米は評価に含まれません。

### ローカルでの実行方法

ビルドツールや追加パッケージは必要ありません。

```bash
git clone https://github.com/hatsune-hitsuzi/network_web_game.git
cd network_web_game
python -m http.server 8000
```

ブラウザで `http://localhost:8000` にアクセスしてください。`index.html`を直接開くこともできます。

### 技術構成

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages
- Google Fonts

フロントエンドフレームワークは使用していません。`gameConfig.js`には多言語テキスト、市場イベント、エンディング条件をまとめ、`app.js`では状態管理、価格計算、売買処理、画面描画を行っています。

### プロジェクト構成

```text
network_web_game/
├── assets/          # 画像
├── app.js           # ゲーム処理と描画
├── gameConfig.js    # テキストと設定
├── index.html       # エントリーポイント
├── styles.css       # スタイルとアニメーション
└── README.md        # 英語・中国語・日本語の説明
```

### コントリビューション

IssueとPull Requestを歓迎します。大きな変更を行う前に、問題点や提案内容を分かりやすく説明してください。

### ライセンス

このプロジェクトは [MITライセンス](LICENSE) の下で公開されています。

[言語選択に戻る](#kurumis-rice-trading)

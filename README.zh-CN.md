# 韭留美炒米记

[English](README.md) · **简体中文** · [日本語](README.ja.md)

一个黑白鬼畜风的令和米模拟交易小游戏。

**[在线试玩](https://hatsune-hitsuzi.github.io/network_web_game/)**

## 项目简介

《韭留美炒米记》是一款在浏览器中运行的短篇米市交易游戏。玩家以 1,000,000 日元作为初始资金，在 14 天内根据每日价格和随机事件买卖大米，并在最后一天结束前将库存换回现金。

游戏支持中文、日语和英语，可直接通过 GitHub Pages 游玩，不需要注册或安装。

## 主要功能

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

## 游戏规则

1. 初始资金为 1,000,000 日元，初始米价为每公斤 600 日元。
2. 每天查看当前价格和市场事件，然后选择买入、卖出或不操作。
3. 点击“进入下一天”后，系统会计算新的米价。
4. 游戏共 14 天。
5. 结算时只计算现金，未卖出的库存不会计入最终成绩。

## 本地运行

本项目不需要构建工具或额外依赖。

```bash
git clone https://github.com/hatsune-hitsuzi/network_web_game.git
cd network_web_game
python -m http.server 8000
```

然后在浏览器中访问 `http://localhost:8000`。也可以直接打开 `index.html`。

## 技术栈

- HTML5
- CSS3
- 原生 JavaScript
- GitHub Pages
- Google Fonts

项目没有使用前端框架。`gameConfig.js` 保存多语言文本、市场事件和结局条件，`app.js` 负责状态管理、价格计算、交易处理和界面渲染。

## 项目结构

```text
network_web_game/
├── assets/          # 图片
├── app.js           # 游戏逻辑与渲染
├── gameConfig.js    # 内容与配置
├── index.html       # 页面入口
├── styles.css       # 样式与动画
├── README.md        # 英文说明
├── README.zh-CN.md  # 简体中文说明
└── README.ja.md     # 日文说明
```

## 参与贡献

欢迎提交 Issue 和 Pull Request。进行较大修改前，请先清楚说明问题或改动建议。

## 许可证

本项目采用 [MIT 许可证](LICENSE) 开源。

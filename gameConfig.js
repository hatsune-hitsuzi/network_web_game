const gameConfig = {
  title: '韭留美炒米记',
  subtitle: 'BEAT THE RICE MARKET',
  comicImages: ['assets/kurumi-intro-wide-1.png', 'assets/kurumi-intro-wide-2.png', 'assets/kurumi-intro-wide-3.png'],
  comicPositions: ['center', 'center', 'center'],
  tradePercentages: [10, 25, 50, 75, 100],
  rules: {
    zh: { title: '米市生存规则', body: ['初始资金：¥1,000,000', '每天米价随机波动，特殊事件会放大涨跌。', '可以买入或卖出大米，也可以什么都不做。', '第 14 天结束时，只结算手上的现金；库存大米全部归零。'], start: '开始炒米' },
    en: { title: 'RICE MARKET RULES', body: ['Starting cash: ¥1,000,000', 'Rice prices move daily. Special events amplify the swing.', 'Buy, sell, or do nothing before advancing the day.', 'At the end of Day 14, only cash counts. Unsold rice becomes worthless.'], start: 'START TRADING' },
    ja: { title: '米市場サバイバル規則', body: ['初期資金：¥1,000,000', '米価は毎日変動し、イベントで値動きが大きくなります。', '買う、売る、何もしないを選んでから次の日へ進みます。', '14日目の終了時は現金だけを清算し、在庫米は無価値になります。'], start: '米取引スタート' }
  },
  expressions: {
    happy: 'assets/kurumi-reactions.png',
    sad: 'assets/kurumi-reactions.png'
  },
  events: [
    { id: 1, type: 'positive', text: { zh: '某头部主播带货令和米，需求大增！', en: 'A mega streamer starts selling Reiwa rice. Demand explodes!', ja: '人気配信者が令和米を爆売り。需要が爆発！' }, effect: 0.12 },
    { id: 2, type: 'negative', text: { zh: '惊爆！新一批令和米被查出含有奇怪添加剂！', en: 'Breaking: a batch of Reiwa rice has a suspicious additive!', ja: '衝撃！令和米から謎の添加物が検出！' }, effect: -0.11 },
    { id: 3, type: 'positive', text: { zh: '米饭节开幕，大家突然都想吃一碗！', en: 'Rice Festival opens. Everyone suddenly wants a bowl!', ja: 'お米フェス開幕。みんな急に一杯食べたくなる！' }, effect: 0.09 },
    { id: 4, type: 'negative', text: { zh: '仓库闹鼠灾，米袋的尊严正在消失……', en: 'A warehouse rat incident is eating away at rice bag dignity…', ja: '倉庫でネズミ騒ぎ。米袋の尊厳が消えていく…' }, effect: -0.09 }
  ],
  positiveFallback: { zh: '农协突然发来神秘补贴，米价起飞！', en: 'A mysterious subsidy arrives. Rice prices launch!', ja: '農協から謎の補助金。米価が急上昇！' },
  positiveFallbackEffect: 0.12,
  warningText: { zh: '⚠️ 农协查账大队还有 3 天就到了哦，请尽快卖出手上的大米吧！ ⚠️', en: '⚠️ The Rice Audit Squad arrives in 3 days. Sell your stock! ⚠️', ja: '⚠️ 米監査隊があと3日で到着。早く米を売って！ ⚠️' },
  labels: {
    zh: { start: '开始炒米', skip: '跳过漫画', buyAll: '全仓买入', sellAll: '全仓卖出', custom: '自定义买 / 卖', next: '进入下一天', cash: '现金', rice: '库存', price: '现价', day: '第', days: '天', market: '米市盘面', event: '今日突发', noEvent: '今天风平浪静……', quantity: '数量 (kg)', buy: '买入', sell: '卖出', end: '结算结果', restart: '再炒一局', initial: '初始资金', final: '最终现金', low: '低价', high: '高价', crash: '持仓归零：大米烂在仓库里。', hero: '不要问', heroAccent: '米价。', live: '实盘', netWorth: '总资产', vol: '波动', priceImpact: '价格影响', noSignal: '无信号 / 无仁慈', happyEffect: '起飞！！', sadEffect: '我为什么要捂？！', comicNote: '一位普通少女，一仓库不普通的米，以及一个绝对不普通的价格曲线。', stockValue: '库存金额', tradeNow: '现在交易', autoNext: '交易后请手动推进', idleNext: '不操作不会自动换日' },
    en: { start: 'START TRADING', skip: 'SKIP COMIC', buyAll: 'BUY ALL-IN', sellAll: 'SELL ALL', custom: 'CUSTOM BUY / SELL', next: 'NEXT DAY', cash: 'CASH', rice: 'RICE', price: 'PRICE', day: 'DAY', days: 'DAYS', market: 'MARKET BOARD', event: 'TODAY\'S EVENT', noEvent: 'The market is suspiciously calm…', quantity: 'QUANTITY (KG)', buy: 'BUY', sell: 'SELL', end: 'FINAL RESULTS', restart: 'TRADE AGAIN', initial: 'STARTING CASH', final: 'FINAL CASH', low: 'LOW', high: 'HIGH', crash: 'Unsold rice rots in the warehouse.', hero: 'DON’T ASK', heroAccent: 'THE PRICE.', live: 'LIVE', netWorth: 'NET WORTH', vol: 'VOL', priceImpact: 'PRICE IMPACT', noSignal: 'NO SIGNAL / NO MERCY', happyEffect: 'TO THE MOON!!', sadEffect: 'WHY DID I HOLD?!', comicNote: 'One ordinary girl, one very ordinary rice warehouse, and one very abnormal price curve.', stockValue: 'STOCK VALUE', tradeNow: 'TRADE NOW', autoNext: 'Trade, then advance manually', idleNext: 'The day will not advance until clicked' },
    ja: { start: '米取引スタート', skip: '漫画をスキップ', buyAll: '全力買い', sellAll: '全力売り', custom: 'カスタム売買', next: '次の日へ', cash: '現金', rice: '在庫', price: '価格', day: '第', days: '日', market: '米市場ボード', event: '本日のイベント', noEvent: '今日は不気味なほど平穏…', quantity: '数量 (kg)', buy: '買う', sell: '売る', end: '最終結果', restart: 'もう一度取引', initial: '初期資金', final: '最終現金', low: '安値', high: '高値', crash: '売れ残った米は倉庫で腐りました。', hero: '聞くな', heroAccent: '米価を。', live: 'ライブ', netWorth: '純資産', vol: '変動', priceImpact: '価格影響', noSignal: 'シグナルなし / 容赦なし', happyEffect: '月まで行く！！', sadEffect: 'なぜ持ってた？！', comicNote: '普通の少女、普通の米倉庫、そして普通ではない価格曲線。', stockValue: '在庫金額', tradeNow: '今すぐ取引', autoNext: '取引後は手動で進む', idleNext: '操作しない限り日付は進みません' }
  },
  endings: [
    { min: 1800000, key: 'tycoon', title: { zh: '米市大鳄', en: 'RICE TYCOON', ja: '米市場の覇者' }, copy: { zh: '你把米价炒成了传说，连电饭煲都想跟你合影。', en: 'You turned rice into legend. Even rice cookers want a selfie.', ja: '米価を伝説にした。炊飯器まで一緒に写真を撮りたがる。' }, color: '#f4bd55' },
    { min: 1000000, key: 'survivor', title: { zh: '韭菜幸存者', en: 'LEEK SURVIVOR', ja: '韭菜サバイバー' }, copy: { zh: '没赚多少，但至少你还买得起一碗饭。', en: 'Not rich, not ruined. You can still afford a bowl of rice.', ja: '大儲けではないが、まだ一杯のご飯は買える。' }, color: '#9ad6b0' },
    { min: 0, key: 'king', title: { zh: '韭菜之王', en: 'KING OF LEAKS', ja: '韭菜の王' }, copy: { zh: '你完美诠释了什么叫高买低卖，市场向你致敬。', en: 'You mastered buying high and selling low. The market salutes you.', ja: '高く買って安く売る芸術。市場があなたに敬礼する。' }, color: '#f27d7d' }
  ]
};

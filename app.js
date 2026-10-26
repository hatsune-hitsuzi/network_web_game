(() => {
  const C = gameConfig;
  let lang = 'zh';
  let state;
  let introTimer;
  const $ = (selector) => document.querySelector(selector);
  const t = (key) => C.labels[lang][key];
  const tx = (value) => typeof value === 'string' ? value : value[lang];
  const fmt = (value) => new Intl.NumberFormat(lang === 'ja' ? 'ja-JP' : lang === 'en' ? 'en-US' : 'zh-CN').format(Math.round(value));

  const fresh = () => ({ day: 1, cash: 1000000, rice: 0, price: 600, lastPrice: 600, base: 0, event: null, eventEffect: 0, swing: 0, trend: 'flat', candles: [], phase: 'intro', transitioning: false });
  state = fresh();

  function renderIntro() {
    document.querySelector('#app').innerHTML = `<section class="comic" id="comic">${C.comicImages.map((image, index) => `<div class="comic-panel" style="background-image:url('${image}');background-size:cover;background-position:center;animation-delay:${index * 3.8}s"></div>`).join('')}<button class="comic-skip" id="skip" aria-label="${t('skip')}">×</button></section>`;
    $('#skip').onclick = renderRules; introTimer = setTimeout(renderRules, 11200);
  }
  function renderRules() {
    clearTimeout(introTimer);
    const rules = C.rules[lang];
    document.querySelector('#app').innerHTML = `<main class="rules"><section class="rules-card"><div class="rules-mark">¥</div><div class="lang">${['zh', 'en', 'ja'].map((item) => `<button class="${lang === item ? 'active' : ''}" data-rule-lang="${item}">${item.toUpperCase()}</button>`).join('')}</div><p class="eyebrow">${C.title}</p><h1>${rules.title}</h1><div class="rules-list">${rules.body.map((line) => `<p>${line}</p>`).join('')}</div><button class="rules-start" id="start-game">${rules.start} →</button></section></main>`;
    document.querySelectorAll('[data-rule-lang]').forEach((button) => { button.onclick = () => { lang = button.dataset.ruleLang; renderRules(); }; });
    $('#start-game').onclick = enterGame;
  }
  function enterGame() { state.phase = 'game'; renderGame(true); }
  function nextMarket() {
    state.lastPrice = state.price; state.base = Math.random() * 0.2 - 0.1;
    let event = null;
    if (state.price < 510) event = { type: 'positive', text: C.positiveFallback, effect: C.positiveFallbackEffect };
    else if (Math.random() < 0.3) event = C.events[Math.floor(Math.random() * C.events.length)];
    state.event = event; state.eventEffect = event?.effect || 0;
    const open = state.price; const close = Math.min(720, Math.max(480, open * (1 + state.base + state.eventEffect)));
    const wiggle = Math.abs(close - open) * 0.55 + 4; state.price = close;
    state.swing = state.base + state.eventEffect;
    state.trend = state.swing > 0 ? 'up' : state.swing < 0 ? 'down' : 'flat';
    state.candles.push({ open, close, high: Math.min(720, Math.max(open, close) + wiggle), low: Math.max(480, Math.min(open, close) - wiggle) });
  }
  function renderLineChart() {
    const points = state.candles.map((candle, index) => {
      const x = 4 + (index * 92) / 13;
      const y = 96 - ((candle.close - 480) / 240) * 88;
      return { x, y, close: candle.close, index };
    });
    const polyline = points.map((point) => `${point.x},${point.y}`).join(' ');
    const dots = points.map((point, index) => `<circle cx="${point.x}" cy="${point.y}" r="${index === points.length - 1 ? 1.8 : 1.15}" class="${point.close >= (state.candles[index].open) ? 'line-up' : 'line-down'}"></circle>`).join('');
    const labels = Array.from({ length: 14 }, (_, index) => `<span>${index < state.candles.length ? `D${index + 1}` : '·'}</span>`).join('');
    return `<div class="line-grid"><span>¥720</span><span>¥660</span><span>¥600</span><span>¥540</span><span>¥480</span></div><svg class="line-chart" viewBox="0 0 100 100" preserveAspectRatio="none" aria-label="${t('market')} line chart"><polyline points="${polyline}" class="price-line"></polyline>${dots}</svg><div class="line-days">${labels}</div>`;
  }
  function renderGame(advance = true) {
    if (advance) nextMarket();
    const stockValue = state.rice * state.price;
    document.querySelector('#app').innerHTML = `<main class="page"><header class="topbar"><div class="brand">${C.title}<small>${C.subtitle}</small></div><div class="lang">${['zh', 'en', 'ja'].map((item) => `<button class="${lang === item ? 'active' : ''}" data-lang="${item}">${item.toUpperCase()}</button>`).join('')}</div></header>${state.day >= 12 ? `<div class="warning"><span>${tx(C.warningText)} &nbsp; ${tx(C.warningText)}</span></div>` : ''}<section class="card market-card"><div class="market-head"><span class="eyebrow">${t('day')} ${state.day} / 14 · ${t('market')}</span><span class="badge">● ${t('live')}</span></div><div class="quote"><div><span class="price">¥${fmt(state.price)}</span><span class="unit">/ kg</span></div><span class="delta ${state.price >= state.lastPrice ? 'up' : 'down'}">${state.price >= state.lastPrice ? '▲' : '▼'} ${Math.abs((state.price / state.lastPrice - 1) * 100).toFixed(1)}%</span></div><div class="kline-chart">${renderLineChart()}</div></section><section class="key-stats"><div class="card stat"><span class="eyebrow">${t('cash')}</span><strong>¥${fmt(state.cash)}</strong></div><div class="card stat"><span class="eyebrow">${t('rice')}</span><strong>${fmt(state.rice)} kg</strong></div><div class="card stat"><span class="eyebrow">${t('stockValue')}</span><strong>¥${fmt(stockValue)}</strong></div></section><section class="card event ${state.event?.type || ''}"><div class="event-mark">${state.event ? '!' : '~'}</div><div class="eyebrow">${t('event')}</div><h3>${state.event ? tx(state.event.text) : t('noEvent')}</h3><p>${state.event ? `${state.event.effect > 0 ? '+' : ''}${(state.event.effect * 100).toFixed(0)}% ${t('priceImpact')}` : t('noSignal')}</p></section><section class="trade"><div class="trade-card"><h3>${t('tradeNow')}</h3><div class="trade-buttons"><button class="buy" id="buyAll">${t('buyAll')}</button><button class="sell" id="sellAll">${t('sellAll')}</button></div><div class="custom-form"><input id="qty" type="number" min="1" placeholder="${t('quantity')}"><button class="custom" id="buy">${t('buy')}</button><button class="sell" id="sell">${t('sell')}</button></div><div class="quantity-presets">${C.tradePercentages.map((percentage) => `<button data-percent="${percentage}">${percentage}%</button>`).join('')}</div><div class="auto-next">${t('autoNext')} · ${t('idleNext')}</div></div></section><div class="particles" id="particles"></div><div class="effect" id="effect"></div></main>`;
    bindGame();
  }
  function particles(kind, count = 12) { for (let index = 0; index < count; index += 1) { const particle = document.createElement('span'); particle.className = 'particle'; particle.textContent = kind === 'rice' ? '🍚' : '¥'; particle.style.left = `${25 + Math.random() * 50}%`; particle.style.top = `${45 + Math.random() * 20}%`; particle.style.setProperty('--x', `${Math.random() * 300 - 150}px`); particle.style.setProperty('--y', `${Math.random() * -300 - 80}px`); $('#particles').appendChild(particle); } setTimeout(() => $('#particles')?.replaceChildren(), 1100); }
  function trade(type, quantity) { if (state.transitioning) return; const amount = Math.max(0, Math.floor(Number(quantity) || 0)); const actual = type === 'buy' ? Math.min(amount, Math.floor(state.cash / state.price)) : Math.min(amount, state.rice); if (type === 'buy') { state.cash -= actual * state.price; state.rice += actual; } else { state.cash += actual * state.price; state.rice -= actual; } renderGame(false); particles(type === 'buy' ? 'rice' : 'cash'); }
  function advanceDay() { if (state.transitioning) return; state.transitioning = true; const effectType = state.swing > 0.05 ? 'happy' : state.swing < -0.05 ? 'sad' : null; const effectActive = Boolean(state.rice && effectType); if (effectActive) showEffect(effectType === 'happy'); const wait = effectActive ? 5000 : 500; if (state.day >= 14) { setTimeout(finish, wait); return; } state.day += 1; setTimeout(() => { state.transitioning = false; renderGame(true); }, wait); }
  function bindGame() { document.querySelectorAll('[data-lang]').forEach((button) => { button.onclick = () => { lang = button.dataset.lang; renderGame(false); }; }); $('#buyAll').onclick = () => trade('buy', Math.floor(state.cash / state.price)); $('#sellAll').onclick = () => trade('sell', state.rice); $('#buy').onclick = () => trade('buy', $('#qty').value); $('#sell').onclick = () => trade('sell', $('#qty').value); const presets = $('.quantity-presets'); presets.innerHTML = `<div class="preset-row"><span>${t('buy')}</span>${C.tradePercentages.map((percentage) => `<button data-percent="${percentage}" data-side="buy">${percentage}%</button>`).join('')}</div><div class="preset-row"><span>${t('sell')}</span>${C.tradePercentages.map((percentage) => `<button data-percent="${percentage}" data-side="sell">${percentage}%</button>`).join('')}</div>`; document.querySelectorAll('[data-percent]').forEach((button) => { button.onclick = () => { const percentage = Number(button.dataset.percent) / 100; const max = button.dataset.side === 'buy' ? Math.floor(state.cash / state.price) : state.rice; $('#qty').value = Math.floor(max * percentage); }; }); const next = document.createElement('button'); next.id = 'next'; next.className = 'next floating-next'; next.textContent = `${state.day >= 14 ? t('end') : t('next')} →`; $('.trade-card').appendChild(next); next.onclick = advanceDay; }
  function showEffect(happy) { const effect = $('#effect'); const mood = happy ? 'happy' : 'sad'; effect.className = `effect show ${mood === 'happy' ? 'gold' : 'gray'}`; effect.innerHTML = `<div class="reaction ${mood}" style="background-image:url('${C.expressions[mood]}')"></div><h2>${happy ? t('happyEffect') : t('sadEffect')}</h2>`; setTimeout(() => { effect.className = 'effect'; }, 4800); }
  function finish() { const final = state.cash; const ending = C.endings.find((item) => final >= item.min) || C.endings.at(-1); document.querySelector('#app').innerHTML = `<main class="ending"><section class="end-card"><div class="stamp">${t('end')} / ${C.title}</div><h1 style="color:${ending.color}">${tx(ending.title)}</h1><p>${tx(ending.copy)}</p><div class="result"><div><span class="eyebrow">${t('initial')}</span><b>¥${fmt(1000000)}</b></div><div><span class="eyebrow">${t('final')}</span><b>¥${fmt(final)}</b></div></div><p class="mono">${state.rice ? `⚠ ${t('crash')}` : ''}</p><button id="restart">${t('restart')} ↗</button></section></main>`; $('#restart').onclick = () => { state = fresh(); renderIntro(); }; }
  renderIntro();
})();

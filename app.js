(() => {
  "use strict";

  // ============================================
  // CONSTANTS
  // ============================================
  const YEAR_MIN = 1850;
  const YEAR_MAX = 2026;

  // ============================================
  // INTERNATIONALIZATION (I18N) DATA
  // Bilingual translations for English and Arabic
  // ============================================
  const I18N = {
    en: {
      dir: "ltr",
      lang: "en",
      skip: "Skip to content",
      brand: "Echoes of Tomorrow",
      navStory: "Time Bridge",
      navWisdom: "Wisdom",
      navSim: "Simulator",
      navAct: "Act",
      themeLight: "Switch to dark mode",
      themeDark: "Switch to light mode",
      langBtn: "العربية",
      langLabel: "Switch language to Arabic",
      soundOn: "Mute soundscape",
      soundOff: "Play ambient soundscape",
      kicker: "Climate memory × living technology",
      heroTitle: "Echoes of Tomorrow",
      heroHeadline: "The same ingenuity that heated the planet can cool it — if we listen to the wisdom that came before the machine.",
      heroLead:
        "From steam and steel to sensors and ancient wind-catchers, this is a living archive of how climate changed with technology — and how tradition plus AI can still write a livable ending.",
      ctaExplore: "Walk the Time Bridge",
      ctaSim: "Try the impact lab",
      yearLabel: "Year",
      sectionBridge: "Interactive Time Bridge",
      bridgeTitle: "1850 to now: a landscape remembering carbon",
      bridgeLead:
        "Drag through 176 years. Watch skies haze, cities rise, and CO₂ climb — then notice the new silhouettes: turbines, sensors, and green returning at the edge.",
      statCo2: "Atmospheric CO₂",
      statTemp: "Warming vs. 1850–1900",
      statTech: "Technological pulse",
      ppm: "ppm",
      sectionWisdom: "Wisdom of the Past, Tech of the Future",
      wisdomTitle: "Old climate intelligence, rewritten in silicon",
      wisdomLead:
        "Communities cooled cities and watered crops without a watt of cloud compute. Today we can honor those patterns — and scale them with IoT and AI.",
      pairA: "Wind catchers",
      pairB: "Clay-pot irrigation",
      pairC: "Earth architecture",
      ancient: "Ancestral practice",
      modern: "Modern equivalent",
      pairs: [
        {
          id: "wind",
          title: "Malqaf & Badgir ↔ Smart ventilation",
          ancientTitle: "Wind towers of the Gulf, Iran & Egypt",
          ancientBody:
            "Malqaf and badgir towers scooped prevailing winds, flushed hot air, and cooled courtyards with water and shade — zero-energy climate control tuned to place.",
          modernTitle: "IoT ventilation & micro-climate sensors",
          modernBody:
            "Networks of CO₂, humidity, and occupancy sensors now open, shade, and pulse airflow the way a wind-catcher once did — only city-wide, and in real time.",
        },
        {
          id: "water",
          title: "Zir drip wisdom ↔ Precision irrigation",
          ancientTitle: "Clay-pot (zir / olla) drip irrigation",
          ancientBody:
            "Unglazed pots buried beside roots sweated water slowly into soil. Farmers read the land with their hands, wasting almost nothing in arid seasons.",
          modernTitle: "AI soil-moisture arrays & drip scheduling",
          modernBody:
            "Capacitance probes, satellite ET maps, and learning models now drip the same ethic at landscape scale: water when the root zone asks, not when the calendar says.",
        },
        {
          id: "earth",
          title: "Thermal earth ↔ Bio-composites & climate models",
          ancientTitle: "Passive earth and thermal mass",
          ancientBody:
            "Adobe, rammed earth, and thick masonry stored night coolness and refused the afternoon sun. Form followed climate long before HVAC.",
          modernTitle: "Bio-composites & AI envelope modeling",
          modernBody:
            "Hemp-lime, mycelium, and digital twins now simulate a building’s breath across decades of warming — ancient mass, future materials, predictive shade.",
        },
      ],
      sectionSim: "Climate Impact Lab",
      simTitle: "Toggle the tools. Watch the trajectory bend.",
      simLead:
        "A miniature policy table: switch on solutions inspired by both sensors and tradition. Gauges respond instantly — a rehearsal for the choices still in our hands.",
      solGrid: "Deploy AI smart grids",
      solGridHint: "Cut wasted generation, balance renewables, dim the fossil peak.",
      solArch: "Integrate passive architecture",
      solArchHint: "Let wind-catcher logic and thermal mass shrink cooling demand.",
      solIrr: "Implement precision irrigation",
      solIrrHint: "Give every drop a destination — zir wisdom, satellite timing.",
      gaugeEmissions: "Projected emission cut",
      gaugeWater: "Projected water saved",
      gaugeHope: "Repair index",
      simLow: "Business as usual still writes a harsher sequel.",
      simMid: "A credible bend in the curve — keep stacking solutions.",
      simHigh: "Pathway rhymes with 1.5°C ambition. This is the chorus we need.",
      sectionCta: "The next authors",
      ctaTitle: "Youth, coders, and keepers of old knowledge share one deadline.",
      ctaBody:
        "You do not have to invent the climate from scratch. You have to braid what elders already knew about wind, water, and earth with the instruments of now — open data, careful AI, and designs that belong to their latitude.",
      ctaButton: "Begin with one solution",
      footerTag: "Competition piece · climate × heritage × interaction",
      credit: "Designed as a bilingual storytelling laboratory.",
      copyright: "© 2026 Echoes of Tomorrow. All rights reserved. / جميع الحقوق محفوظة.",
    },
    ar: {
      dir: "rtl",
      lang: "ar",
      skip: "تخطٍ إلى المحتوى",
      brand: "أصداء الغد",
      navStory: "جسر الزمن",
      navWisdom: "الحكمة",
      navSim: "المحاكي",
      navAct: "ابدأ",
      themeLight: "التبديل إلى الوضع الداكن",
      themeDark: "التبديل إلى الوضع الفاتح",
      langBtn: "EN",
      langLabel: "التبديل إلى الإنجليزية",
      soundOn: "كتم المشهد الصوتي",
      soundOff: "تشغيل المشهد الصوتي",
      kicker: "ذاكرة المناخ × تقنية حيّة",
      heroTitle: "أصداء الغد",
      heroHeadline: "العبقرية التي سخّنت الكوكب قادرة أن تبرّده — إن أنصتنا للحكمة التي سبقت الآلة.",
      heroLead:
        "من البخار والفولاذ إلى المستشعرات وملاقف الهواء، هذا أرشيف حي لكيف تغيّر المناخ مع التقنية — وكيف يمكن للتراث والذكاء الاصطناعي أن يكتبا نهاية قابلة للحياة.",
      ctaExplore: "اعبر جسر الزمن",
      ctaSim: "جرّب مختبر الأثر",
      yearLabel: "السنة",
      sectionBridge: "جسر زمني تفاعلي",
      bridgeTitle: "من 1850 حتى اليوم: مشهد يتذكّر الكربون",
      bridgeLead:
        "اسحب عبر 176 عامًا. راقب الضباب، والمدن، وصعود ثاني أكسيد الكربون — ثم لاحظ الظلال الجديدة: توربينات، ومستشعرات، وخضرة تعود عند الحافة.",
      statCo2: "ثاني أكسيد الكربون في الغلاف",
      statTemp: "الاحترار مقابل 1850–1900",
      statTech: "نبض التقنية",
      ppm: "جزء بالمليون",
      sectionWisdom: "حكمة الماضي وتقنية المستقبل",
      wisdomTitle: "ذكاء مناخي قديم، يُعاد كتابته بالسيليكون",
      wisdomLead:
        "برّدت المجتمعات مدنها وسقت زرعها دون سحابة حوسبة. اليوم يمكننا أن نكرّم تلك الأنماط — ونوسّعها بالمستشعرات والذكاء الاصطناعي.",
      pairA: "ملاقف الهواء",
      pairB: "ري الجرار الفخارية",
      pairC: "عمارة الأرض",
      ancient: "ممارسة متوارثة",
      modern: "المقابل الحديث",
      pairs: [
        {
          id: "wind",
          title: "الملقف والبادگير ↔ تهوية ذكية",
          ancientTitle: "أبراج الرياح في الخليج وإيران ومصر",
          ancientBody:
            "كانت الملاقف والبادگير تلتقط الرياح السائدة وتطرد الهواء الساخن وتبرّد الأفنية بالماء والظل — تكييف بلا طاقة، مفصّل على المكان.",
          modernTitle: "تهوية إنترنت الأشياء ومستشعرات المناخ المصغّر",
          modernBody:
            "شبكات ثاني أكسيد الكربون والرطوبة والحضور تفتح وتظلّل وتنبض بالهواء كما كان الملقف يفعل — لكن على مقياس مدينة، وفي الزمن الحقيقي.",
        },
        {
          id: "water",
          title: "حكمة الزير ↔ الري الدقيق",
          ancientTitle: "الري بالجرار الفخارية (الزير / الأويا)",
          ancientBody:
            "أوانٍ غير مطلية تُدفن بجانب الجذور وتُرشح الماء ببطء إلى التربة. قرأ المزارع الأرض بيديه، ولم يُهدر في المواسم الجافة إلا القليل.",
          modernTitle: "مصفوفات رطوبة التربة وجدولة بالذكاء الاصطناعي",
          modernBody:
            "مجسات السعة وخرائط التبخر-نتح الفضائية ونماذج التعلّم تقطر الأخلاق ذاتها على مقياس المشهد: الماء حين يطلبه الجذر، لا حين يأمر التقويم.",
        },
        {
          id: "earth",
          title: "حرارة الأرض ↔ مركّبات حيوية ونماذج مناخ",
          ancientTitle: "الكتلة الحرارية والعمارة الترابية",
          ancientBody:
            "اللبن والتراب المدكوك والحجر السميك اختزن برودة الليل ورفض شمس الظهيرة. كان الشكل يتبع المناخ قبل أجهزة التكييف بزمن طويل.",
          modernTitle: "مركّبات حيوية ونمذجة الغلاف بالذكاء الاصطناعي",
          modernBody:
            "الجير-القنب والميسيليوم والتوائم الرقمية تحاكي تنفّس المبنى عبر عقود من الاحترار — كتلة قديمة، مواد قادمة، وظلّ تنبؤي.",
        },
      ],
      sectionSim: "مختبر الأثر المناخي",
      simTitle: "شغّل الأدوات. راقب انحناء المسار.",
      simLead:
        "طاولة سياسات مصغّرة: فعّل حلولًا مستلهمة من المستشعرات والتراث. المقاييس تستجيب فورًا — بروفة للخيارات التي ما زالت في أيدينا.",
      solGrid: "نشر شبكات ذكاء اصطناعي",
      solGridHint: "أوقف الهدر في التوليد، وازن المتجدد، واخفض ذروة الوقود الأحفوري.",
      solArch: "دمج العمارة السالبة",
      solArchHint: "منطق الملاقف والكتلة الحرارية يقلّص طلب التبريد.",
      solIrr: "تطبيق الري الدقيق",
      solIrrHint: "اجعل لكل قطرة وجهة — حكمة الزير بتوقيت القمر الصناعي.",
      gaugeEmissions: "خفض الانبعاثات المتوقع",
      gaugeWater: "المياه الموفَّرة المتوقعة",
      gaugeHope: "مؤشر الترميم",
      simLow: "سيناريو الاستمرار يكتب تتمة أقسى.",
      simMid: "انحناءة صادقة في المنحنى — واصل تكديس الحلول.",
      simHigh: "مسار يُشبه طموح 1.5°م. هذا هو الصوت الجماعي الذي نحتاجه.",
      sectionCta: "المؤلفون القادمون",
      ctaTitle: "الشباب والمبرمجون وحفظة المعرفة القديمة يشتركون في أجل واحد.",
      ctaBody:
        "لست مضطرًا لاختراع المناخ من الصفر. المطلوب أن تجدل ما عرفه الأقدمون عن الريح والماء والتراب مع أدوات اليوم — بيانات مفتوحة، وذكاء اصطناعي حذر، وتصاميم تنتمي إلى خط عرضها.",
      ctaButton: "ابدأ بحلّ واحد",
      footerTag: "عمل مسابقة · مناخ × تراث × تفاعل",
      credit: "مُصمَّم كمختبر سرد ثنائي اللغة.",
      copyright: "© 2026 أصداء الغد. جميع الحقوق محفوظة. / All rights reserved.",
    },
  };

  // ============================================
  // HISTORICAL MILESTONES
  // Key technological and climate events from 1850 to 2026
  // ============================================
  const MILESTONES = [
    { year: 1850, en: "Agrarian dusk · steam on the horizon", ar: "أفول زراعي · البخار في الأفق" },
    { year: 1879, en: "Electric light begins to rewrite night", ar: "الضوء الكهربائي يعيد كتابة الليل" },
    { year: 1903, en: "Flight — distance collapses", ar: "الطيران — المسافات تنهار" },
    { year: 1920, en: "Oil, motors, and the first smog cities", ar: "النفط والمحركات ومدن الضباب الأولى" },
    { year: 1950, en: "Great Acceleration · plastics & highways", ar: "التسارع العظيم · بلاستيك وطرق سريعة" },
    { year: 1970, en: "Earth Day · climate enters politics", ar: "يوم الأرض · المناخ يدخل السياسة" },
    { year: 1991, en: "World Wide Web · a planetary nervous system", ar: "الويب · جهاز عصبي للكوكب" },
    { year: 2015, en: "Paris Agreement · 1.5°C named", ar: "اتفاق باريس · تسمية 1.5°م" },
    { year: 2023, en: "AI boom meets record heat", ar: "طفرة الذكاء الاصطناعي تلتقي حرارة قياسية" },
    { year: 2026, en: "Sensors, heritage, and a still-open window", ar: "مستشعرات وتراث ونافذة ما زالت مفتوحة" },
  ];

  // ============================================
  // APPLICATION STATE
  // Central state management for theme, language, and interactive elements
  // ============================================
  const state = {
    lang: localStorage.getItem("eot-lang") || "en",
    theme: localStorage.getItem("eot-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
    year: 1950,
    sound: false,
    pair: "wind",
    solutions: { grid: false, arch: false, irr: false },
  };

  // ============================================
  // UTILITY FUNCTIONS
  // ============================================
  // DOM query helpers
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  // Linear interpolation
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  // Clamp value between min and max
  function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
  }

  // ============================================
  // CLIMATE DATA INTERPOLATION
  // Functions to calculate climate metrics for any year
  // ============================================
  
  // Calculate atmospheric CO2 levels for a given year
  function co2ForYear(year) {
    const knots = [
      [1850, 285],
      [1900, 296],
      [1950, 311],
      [1970, 326],
      [1990, 354],
      [2000, 369],
      [2015, 401],
      [2020, 414],
      [2024, 424],
      [2026, 427],
    ];
    return interpolateKnots(knots, year);
  }

  // Calculate temperature anomaly for a given year
  function tempForYear(year) {
    const knots = [
      [1850, 0.0],
      [1900, 0.05],
      [1950, 0.23],
      [1980, 0.39],
      [2000, 0.61],
      [2016, 1.01],
      [2024, 1.48],
      [2026, 1.5],
    ];
    return interpolateKnots(knots, year);
  }

  // Interpolate between data points using linear interpolation
  function interpolateKnots(knots, year) {
    if (year <= knots[0][0]) return knots[0][1];
    if (year >= knots[knots.length - 1][0]) return knots[knots.length - 1][1];
    for (let i = 0; i < knots.length - 1; i++) {
      const [x0, y0] = knots[i];
      const [x1, y1] = knots[i + 1];
      if (year >= x0 && year <= x1) {
        const t = (year - x0) / (x1 - x0);
        return lerp(y0, y1, t);
      }
    }
    return knots[knots.length - 1][1];
  }

  // Find the most recent historical milestone for a given year
  function milestoneForYear(year) {
    let best = MILESTONES[0];
    for (const m of MILESTONES) {
      if (m.year <= year) best = m;
    }
    return best;
  }

  // ============================================
  // INTERNATIONALIZATION FUNCTIONS
  // Apply translations and update UI for current language
  // ============================================
  function applyI18n() {
    const t = I18N[state.lang];
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
    document.title = `${t.brand} — ${t.kicker}`;

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    $$("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (t[key]) el.setAttribute("aria-label", t[key]);
    });

    $("#lang-btn").textContent = t.langBtn;
    renderPairs();
    updateThemeButton();
    updateSoundButton();
    updateYearUI(state.year);
    updateSimulatorCopy();
  }

  // ============================================
  // THEME MANAGEMENT
  // Handle light/dark theme switching with smooth transitions
  // ============================================
  function setTheme(theme) {
    state.theme = theme;
    document.documentElement.classList.add("theme-anim");
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("eot-theme", theme);
    updateThemeButton();
    setTimeout(() => document.documentElement.classList.remove("theme-anim"), 500);
  }

  // Update theme button icon and aria-label based on current theme
  function updateThemeButton() {
    const btn = $("#theme-btn");
    const t = I18N[state.lang];
    const dark = state.theme === "dark";
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    btn.setAttribute("aria-label", dark ? t.themeDark : t.themeLight);
    btn.innerHTML = dark ? sunIcon() : moonIcon();
  }

  // Update sound button icon and aria-label based on sound state
  function updateSoundButton() {
    const btn = $("#sound-btn");
    const t = I18N[state.lang];
    btn.setAttribute("aria-pressed", state.sound ? "true" : "false");
    btn.setAttribute("aria-label", state.sound ? t.soundOn : t.soundOff);
    btn.innerHTML = state.sound ? speakerIcon() : muteIcon();
  }

  // ============================================
  // ICON RENDERING FUNCTIONS
  // SVG icons for UI buttons
  // ============================================
  function moonIcon() {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z"/></svg>`;
  }
  function sunIcon() {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;
  }
  function muteIcon() {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="m16 9 6 6M22 9l-6 6"/></svg>`;
  }
  function speakerIcon() {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M16 9.5a5 5 0 0 1 0 5M18.5 7a8 8 0 0 1 0 10"/></svg>`;
  }

  // ============================================
  // WISDOM COMPARISON RENDERING
  // Render tabs and panels for ancient vs modern climate practices
  // ============================================
  function renderPairs() {
    const t = I18N[state.lang];
    const tabs = $("#pair-tabs");
    tabs.innerHTML = t.pairs
      .map(
        (p, i) => `
      <button class="pair-card glass rounded-2xl p-4 text-start" role="tab" id="tab-${p.id}"
        aria-selected="${state.pair === p.id}" aria-controls="panel-pair" data-pair="${p.id}">
        <p class="kicker mb-2">0${i + 1}</p>
        <h3 class="text-lg font-semibold leading-snug">${p.title}</h3>
      </button>`
      )
      .join("");

    const pair = t.pairs.find((p) => p.id === state.pair) || t.pairs[0];
    $("#panel-pair").innerHTML = `
      <article class="glass rounded-3xl p-6 md:p-8">
        <p class="kicker mb-3">${t.ancient}</p>
        <h3 class="display-font text-2xl md:text-3xl mb-3">${pair.ancientTitle}</h3>
        <p class="text-[color:var(--muted)] leading-relaxed">${pair.ancientBody}</p>
      </article>
      <article class="glass rounded-3xl p-6 md:p-8 relative overflow-hidden">
        <div class="absolute -top-10 -end-10 w-40 h-40 rounded-full opacity-30" style="background:var(--moss);filter:blur(30px)"></div>
        <p class="kicker mb-3">${t.modern}</p>
        <h3 class="display-font text-2xl md:text-3xl mb-3">${pair.modernTitle}</h3>
        <p class="text-[color:var(--muted)] leading-relaxed">${pair.modernBody}</p>
      </article>`;

    $$("[data-pair]").forEach((btn) => {
      btn.addEventListener("click", () => {
        uiSounds.playClick();
        state.pair = btn.dataset.pair;
        renderPairs();
      });
      btn.addEventListener("mouseenter", () => uiSounds.playHover());
    });
  }

  // ============================================
  // TIME BRIDGE UI UPDATES
  // Update year display and statistics based on slider position
  // ============================================
  function updateYearUI(year) {
    state.year = year;
    const t = I18N[state.lang];
    const co2 = co2ForYear(year);
    const temp = tempForYear(year);
    const mile = milestoneForYear(year);
    $("#year-readout").textContent = Math.round(year);
    $("#co2-readout").textContent = co2.toFixed(1);
    $("#temp-readout").textContent = `+${temp.toFixed(2)}°C`;
    $("#tech-readout").textContent = mile[state.lang];
    $("#era-slider").value = String(year);
    $("#era-slider").setAttribute("aria-valuetext", `${t.yearLabel} ${Math.round(year)}`);
    soundscape.setMix(industrialMix(year));
  }

  // Calculate industrial/nature audio mix ratio based on year and hope index
  function industrialMix(year) {
    const t = (year - YEAR_MIN) / (YEAR_MAX - YEAR_MIN);
    const hope = hopeIndex() / 100;
    return clamp(t * 0.85 - hope * 0.35, 0, 1);
  }

  // Calculate hope index based on enabled solutions
  function hopeIndex() {
    const { grid, arch, irr } = state.solutions;
    return (grid ? 38 : 0) + (arch ? 27 : 0) + (irr ? 22 : 0);
  }

  // ============================================
  // CLIMATE SIMULATOR FUNCTIONS
  // Handle solution toggles and update gauge displays
  // ============================================
  function updateSimulator() {
    const emissions = (state.solutions.grid ? 18 : 0) + (state.solutions.arch ? 12 : 0) + (state.solutions.irr ? 6 : 0);
    const water = (state.solutions.grid ? 2 : 0) + (state.solutions.arch ? 4 : 0) + (state.solutions.irr ? 28 : 0);
    const hope = hopeIndex();
    setGauge("#g-emissions", emissions / 40);
    setGauge("#g-water", water / 40);
    setGauge("#g-hope", hope / 100);
    $("#emissions-num").textContent = `${emissions}%`;
    $("#water-num").textContent = `${water}%`;
    $("#hope-num").textContent = `${hope}`;
    updateSimulatorCopy();
    soundscape.setMix(industrialMix(state.year));
  }

  // Update simulator status message based on hope index
  function updateSimulatorCopy() {
    const t = I18N[state.lang];
    const hope = hopeIndex();
    $("#sim-status").textContent = hope >= 70 ? t.simHigh : hope >= 30 ? t.simMid : t.simLow;
  }

  // Animate gauge circle stroke based on percentage value
  function setGauge(sel, t) {
    const circ = 2 * Math.PI * 45;
    const el = $(sel);
    el.style.strokeDasharray = String(circ);
    el.style.strokeDashoffset = String(circ * (1 - clamp(t, 0, 1)));
  }

  // ============================================
  // CANVAS VISUALIZATION CLASS
  // Chronoscape - Animated landscape showing climate evolution over time
  // ============================================
  class Chronoscape {
    // Initialize canvas with particles, trees, and resize handlers
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.year = 1950;
      this.particles = Array.from({ length: 48 }, () => ({
        x: Math.random(),
        y: Math.random() * 0.5,
        r: 4 + Math.random() * 10,
        s: 0.1 + Math.random() * 0.4,
        a: Math.random() * Math.PI * 2,
      }));
      this.trees = Array.from({ length: 22 }, (_, i) => ({
        x: 0.04 + i * 0.044 + (Math.random() * 0.02 - 0.01),
        h: 0.12 + Math.random() * 0.18,
        alive: Math.random(),
      }));
      this.raf = 0;
      this.tick = 0;
      this.resize();
      addEventListener("resize", () => this.resize());
      if (typeof ResizeObserver !== "undefined") {
        new ResizeObserver(() => this.resize()).observe(this.canvas);
      }
    }

    // Handle canvas resize with DPR scaling for sharp rendering
    resize() {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      const { clientWidth: w, clientHeight: h } = this.canvas;
      this.canvas.width = Math.max(1, w * dpr);
      this.canvas.height = Math.max(1, h * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.w = w;
      this.h = h;
    }

    // Set current year for visualization
    setYear(y) {
      this.year = y;
    }

    // Start animation loop
    start() {
      const loop = () => {
        this.draw();
        this.raf = requestAnimationFrame(loop);
      };
      loop();
    }

    // Main draw function - renders all landscape elements
    draw() {
      const { ctx, w, h, year } = this;
      if (!w || !h) return;
      this.tick++;
      const t = (year - YEAR_MIN) / (YEAR_MAX - YEAR_MIN);
      const haze = clamp((co2ForYear(year) - 285) / 140, 0, 1);
      const hope = hopeIndex() / 87;

      const skyTop = mixRgb([126, 186, 220], mixRgb([214, 140, 90], [28, 36, 42], t), haze);
      const skyBot = mixRgb([232, 214, 170], mixRgb([90, 78, 70], [18, 28, 24], t * 0.8), haze * 0.7);
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, rgb(skyTop));
      g.addColorStop(1, rgb(skyBot));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      const sunX = w * (0.78 - t * 0.12);
      const sunY = h * (0.22 + haze * 0.12);
      const sun = ctx.createRadialGradient(sunX, sunY, 8, sunX, sunY, 120);
      sun.addColorStop(0, `rgba(255,${Math.round(220 - haze * 80)},${Math.round(160 - haze * 80)},.95)`);
      sun.addColorStop(1, "rgba(255,180,80,0)");
      ctx.fillStyle = sun;
      ctx.fillRect(0, 0, w, h);

      this.drawHills(ctx, w, h, t, haze);
      this.drawRiver(ctx, w, h, t);
      this.drawTrees(ctx, w, h, t, hope);
      this.drawIndustry(ctx, w, h, t, hope);
      this.drawTurbines(ctx, w, h, t, hope);
      this.drawHaze(ctx, w, h, haze);
      this.drawParticles(ctx, w, h, t);
    }

    // Draw layered hills with color gradients based on time
    drawHills(ctx, w, h, t, haze) {
      const layers = [
        { y: 0.52, amp: 28, c: mixRgb([92, 128, 86], [70, 74, 68], t) },
        { y: 0.62, amp: 36, c: mixRgb([74, 110, 70], [58, 64, 55], t) },
        { y: 0.74, amp: 22, c: mixRgb([58, 86, 54], mixRgb([48, 52, 46], [36, 48, 40], hopeIndex() / 87), t) },
      ];
      layers.forEach((L, li) => {
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 8) {
          const n = Math.sin(x * 0.01 + li) * L.amp + Math.sin(x * 0.023 + li * 2) * (L.amp * 0.4);
          ctx.lineTo(x, h * L.y + n);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        const [r, g, b] = L.c;
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fill();
      });
      ctx.fillStyle = rgb(mixRgb([46, 72, 42], [40, 44, 38], haze));
      ctx.fillRect(0, h * 0.86, w, h * 0.14);
    }

    // Draw river with color changing over time
    drawRiver(ctx, w, h, t) {
      ctx.beginPath();
      ctx.moveTo(w * 0.35, h);
      ctx.quadraticCurveTo(w * 0.45, h * 0.82, w * 0.52, h * 0.9);
      ctx.quadraticCurveTo(w * 0.6, h * 0.98, w * 0.7, h);
      ctx.fillStyle = `rgba(${Math.round(80 + t * 40)}, ${Math.round(140 - t * 50)}, ${Math.round(150 - t * 40)}, 0.55)`;
      ctx.fill();
    }

    // Draw trees that may die based on pollution and hope
    drawTrees(ctx, w, h, t, hope) {
      this.trees.forEach((tr, i) => {
        const keep = tr.alive > t * 0.72 - hope * 0.25;
        if (!keep && t > 0.35 && i % 3 !== 0) return;
        const x = tr.x * w;
        const base = h * 0.84;
        const height = tr.h * h * (keep ? 1 : 0.55);
        ctx.fillStyle = keep ? "#3d5c38" : "#5a5144";
        ctx.fillRect(x - 3, base - height * 0.35, 6, height * 0.4);
        ctx.beginPath();
        ctx.moveTo(x, base - height);
        ctx.lineTo(x + 16, base - height * 0.28);
        ctx.lineTo(x - 16, base - height * 0.28);
        ctx.closePath();
        ctx.fillStyle = keep ? `rgba(45, ${120 + (i % 20)}, 55, 0.95)` : "rgba(90,80,60,.8)";
        ctx.fill();
      });
    }

    // Draw industrial buildings appearing over time
    drawIndustry(ctx, w, h, t, hope) {
      if (t < 0.12) return;
      const count = Math.round((t - 0.12) * 14);
      for (let i = 0; i < count; i++) {
        const x = w * (0.08 + i * 0.06);
        const bh = h * (0.12 + (i % 5) * 0.04);
        const base = h * 0.86;
        ctx.fillStyle = `rgba(${40 + i * 4},${42},${48},0.92)`;
        ctx.fillRect(x, base - bh, 22 + (i % 3) * 6, bh);
        if (t > 0.2 && hope < 0.7) {
          const stackH = bh * 0.5;
          ctx.fillRect(x + 8, base - bh - stackH, 6, stackH);
        }
      }
    }

    // Draw wind turbines appearing in later years with hope
    drawTurbines(ctx, w, h, t, hope) {
      if (t < 0.72 && hope < 0.25) return;
      const n = 5;
      for (let i = 0; i < n; i++) {
        const x = w * (0.62 + i * 0.07);
        const base = h * 0.86;
        const th = h * 0.22;
        ctx.strokeStyle = "rgba(230,240,235,.9)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x, base);
        ctx.lineTo(x, base - th);
        ctx.stroke();
        ctx.save();
        ctx.translate(x, base - th);
        ctx.rotate(this.tick * 0.03 + i);
        ctx.strokeStyle = "rgba(200,255,220,.85)";
        for (let b = 0; b < 3; b++) {
          ctx.rotate((Math.PI * 2) / 3);
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(0, -28);
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    // Draw atmospheric haze overlay based on CO2 levels
    drawHaze(ctx, w, h, haze) {
      ctx.fillStyle = `rgba(180, 130, 90, ${haze * 0.28})`;
      ctx.fillRect(0, 0, w, h);
    }

    // Draw floating particles (pollution or nature depending on era)
    drawParticles(ctx, w, h, t) {
      this.particles.forEach((p) => {
        p.x += p.s * 0.0015;
        if (p.x > 1.1) p.x = -0.1;
        const industrial = t > 0.25;
        ctx.beginPath();
        ctx.fillStyle = industrial
          ? `rgba(160,160,160,${0.18 + t * 0.2})`
          : `rgba(255,255,255,${0.25})`;
        ctx.arc(p.x * w, p.y * h * 0.7, industrial ? p.r * 0.7 : 2, 0, Math.PI * 2);
        ctx.fill();
      });
    }
  }

  // ============================================
  // COLOR UTILITIES
  // RGB color mixing for smooth transitions
  // ============================================
  function mixRgb(a, b, t) {
    return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
  }
  function rgb(c) {
    return `rgb(${c[0]|0},${c[1]|0},${c[2]|0})`;
  }

  // ============================================
  // SOUNDSCAPE AUDIO SYSTEM
  // Procedural ambient audio mixing nature and industrial sounds
  // ============================================
  const soundscape = {
    ctx: null,
    nature: null,
    industry: null,
    mix: 0.4,
    // Initialize Web Audio API with oscillators and filters
    async ensure() {
      if (this.ctx) return;
      const Ctx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new Ctx();
      const master = this.ctx.createGain();
      master.gain.value = 0.09;
      master.connect(this.ctx.destination);

      const noise = this.ctx.createBufferSource();
      const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 2, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
      noise.buffer = buffer;
      noise.loop = true;

      const nFilter = this.ctx.createBiquadFilter();
      nFilter.type = "lowpass";
      nFilter.frequency.value = 800;
      const nGain = this.ctx.createGain();
      nGain.gain.value = 0.4;
      noise.connect(nFilter).connect(nGain).connect(master);

      const indOsc = this.ctx.createOscillator();
      indOsc.type = "sawtooth";
      indOsc.frequency.value = 55;
      const indFilter = this.ctx.createBiquadFilter();
      indFilter.type = "lowpass";
      indFilter.frequency.value = 180;
      const indGain = this.ctx.createGain();
      indGain.gain.value = 0.08;
      indOsc.connect(indFilter).connect(indGain).connect(master);

      const bird = this.ctx.createOscillator();
      bird.type = "sine";
      bird.frequency.value = 880;
      const birdGain = this.ctx.createGain();
      birdGain.gain.value = 0;
      bird.connect(birdGain).connect(master);

      noise.start();
      indOsc.start();
      bird.start();

      this.nature = { nFilter, nGain, bird, birdGain };
      this.industry = { indGain, indFilter };
      this.master = master;

      const chirp = () => {
        if (!state.sound || !this.ctx) return;
        const now = this.ctx.currentTime;
        bird.frequency.setValueAtTime(720 + Math.random() * 500, now);
        birdGain.gain.cancelScheduledValues(now);
        birdGain.gain.setValueAtTime(0, now);
        birdGain.gain.linearRampToValueAtTime(0.035 * (1 - this.mix), now + 0.05);
        birdGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        setTimeout(chirp, 1400 + Math.random() * 2200);
      };
      chirp();
      this.setMix(this.mix);
    },
    // Toggle audio on/off with fade in/out
    async toggle(on) {
      if (on) {
        await this.ensure();
        if (this.ctx.state === "suspended") await this.ctx.resume();
        this.master.gain.linearRampToValueAtTime(0.09, this.ctx.currentTime + 0.3);
      } else if (this.ctx) {
        this.master.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.3);
      }
    },
    // Adjust mix between nature and industrial sounds
    setMix(m) {
      this.mix = m;
      if (!this.nature) return;
      this.nature.nFilter.frequency.value = 900 - m * 400;
      this.industry.indGain.gain.value = 0.02 + m * 0.12;
      this.industry.indFilter.frequency.value = 120 + m * 220;
    },
  };

  // ============================================
  // UI SOUND EFFECTS
  // Procedural sound effects for interactions
  // ============================================
  const uiSounds = {
    ctx: null,
    // Initialize audio context for UI sounds
    ensure() {
      if (this.ctx) return;
      const Ctx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new Ctx();
    },
    // Play a short click sound for button presses
    playClick() {
      if (!state.sound) return;
      this.ensure();
      if (this.ctx.state === "suspended") this.ctx.resume();
      
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.08);
      
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      
      osc.connect(gain).connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    },
    // Play a subtle hover sound
    playHover() {
      if (!state.sound) return;
      this.ensure();
      if (this.ctx.state === "suspended") this.ctx.resume();
      
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.linearRampToValueAtTime(650, now + 0.03);
      
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.04);
      
      osc.connect(gain).connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    },
    // Play slider sound - continuous tone that changes pitch
    playSlider(value, min, max) {
      if (!state.sound) return;
      this.ensure();
      if (this.ctx.state === "suspended") this.ctx.resume();
      
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      // Map value to frequency range (200-600 Hz)
      const t = (value - min) / (max - min);
      const freq = 200 + t * 400;
      
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);
      
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.05);
      
      osc.connect(gain).connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    },
    // Play success sound for gauge increases
    playSuccess(intensity = 1) {
      if (!state.sound) return;
      this.ensure();
      if (this.ctx.state === "suspended") this.ctx.resume();
      
      const now = this.ctx.currentTime;
      
      // Create a pleasant ascending chime
      const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5
      frequencies.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + i * 0.05);
        
        const vol = 0.1 * intensity;
        gain.gain.setValueAtTime(0, now + i * 0.05);
        gain.gain.linearRampToValueAtTime(vol, now + i * 0.05 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.2);
        
        osc.connect(gain).connect(this.ctx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.25);
      });
    },
  };

  // ============================================
  // SCROLL REVEAL ANIMATIONS
  // Intersection Observer for scroll-triggered animations
  // ============================================
  function setupReveal() {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const show = (el) => el.classList.add("in");
    $$(".reveal").slice(0, 8).forEach(show);
    document.documentElement.classList.add("js");
    if (reduced) {
      $$(".reveal").forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );
    $$(".reveal").forEach((el) => io.observe(el));
    $$(".reveal").slice(0, 6).forEach(show);
    setTimeout(() => $$(".reveal").forEach(show), 1200);
  }

  // ============================================
  // READING PROGRESS BAR
  // Update progress indicator based on scroll position
  // ============================================
  function setupProgress() {
    const bar = $("#read-progress");
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ============================================
  // NAVIGATION EVENT HANDLERS
  // Theme, language, and soundscape toggle buttons
  // ============================================
  function setupNav() {
    $("#theme-btn").addEventListener("click", () => {
      uiSounds.playClick();
      setTheme(state.theme === "dark" ? "light" : "dark");
    });
    $("#theme-btn").addEventListener("mouseenter", () => uiSounds.playHover());
    
    $("#lang-btn").addEventListener("click", () => {
      uiSounds.playClick();
      state.lang = state.lang === "en" ? "ar" : "en";
      localStorage.setItem("eot-lang", state.lang);
      applyI18n();
    });
    $("#lang-btn").addEventListener("mouseenter", () => uiSounds.playHover());
    
    $("#sound-btn").addEventListener("click", async () => {
      uiSounds.playClick();
      state.sound = !state.sound;
      updateSoundButton();
      await soundscape.toggle(state.sound);
    });
    $("#sound-btn").addEventListener("mouseenter", () => uiSounds.playHover());
  }

  // ============================================
  // TIME BRIDGE SLIDER
  // Handle year slider input and keyboard navigation
  // ============================================
  function setupSlider() {
    const slider = $("#era-slider");
    const apply = (v) => {
      const year = clamp(Number(v), YEAR_MIN, YEAR_MAX);
      updateYearUI(year);
      chrono.setYear(year);
      heroWorld.setYear(year);
      // Play slider sound with pitch based on year position
      uiSounds.playSlider(year, YEAR_MIN, YEAR_MAX);
    };
    slider.addEventListener("input", (e) => apply(e.target.value));
    slider.addEventListener("keydown", (e) => {
      if (e.key === "Home") {
        e.preventDefault();
        apply(YEAR_MIN);
      }
      if (e.key === "End") {
        e.preventDefault();
        apply(YEAR_MAX);
      }
    });
  }

  // ============================================
  // SIMULATOR TOGGLE HANDLERS
  // Handle solution switch clicks and keyboard events
  // ============================================
  function setupSimulatorToggles() {
    $$("[data-sol]").forEach((btn) => {
      btn.addEventListener("click", () => {
        uiSounds.playClick();
        const key = btn.dataset.sol;
        const wasOff = !state.solutions[key];
        state.solutions[key] = !state.solutions[key];
        btn.setAttribute("aria-checked", state.solutions[key] ? "true" : "false");
        updateSimulator();
        // Play success sound when turning on a solution
        if (wasOff) {
          uiSounds.playSuccess(1);
        }
      });
      btn.addEventListener("mouseenter", () => uiSounds.playHover());
      btn.addEventListener("keydown", (e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          btn.click();
        }
      });
    });
  }

  // ============================================
  // HOVER SOUND SETUP
  // Add hover sounds to all interactive elements
  // ============================================
  function setupHoverSounds() {
    // Add hover sounds to navigation links
    $$("nav a").forEach((link) => {
      link.addEventListener("mouseenter", () => uiSounds.playHover());
    });
    // Add hover sounds to CTA buttons
    $$("a[href]").forEach((link) => {
      link.addEventListener("mouseenter", () => uiSounds.playHover());
    });
  }

  // ============================================
  // INITIALIZATION
  // Set up all components and start the application
  // ============================================
  let chrono;
  let heroWorld;

  function init() {
    document.documentElement.setAttribute("data-theme", state.theme);
    chrono = new Chronoscape($("#chrono"));
    heroWorld = new Chronoscape($("#hero-canvas"));
    chrono.setYear(state.year);
    heroWorld.setYear(1880);
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      chrono.start();
      heroWorld.start();
    } else {
      chrono.draw();
      heroWorld.draw();
    }
    applyI18n();
    setupNav();
    setupSlider();
    setupSimulatorToggles();
    setupReveal();
    setupProgress();
    setupHoverSounds();
    updateSimulator();
    updateYearUI(state.year);
  }

  // Initialize on DOM ready or immediately if already loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

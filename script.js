/* ==============================================
   SWETHA M | MY SAMOSA STORY — script.js
   ============================================== */

/* ── IMAGE MAP ── */
const I = {
  sd_act: 'images/0f68d0_4f166f852c484.jpg',
  sd_upcycle: 'images/0f68d0_b00e0015156c4.jpg',
  sd_art1: 'images/0f68d0_1f5c8ab1c0af4.png',
  sd_art2: 'images/0f68d0_8585c661723e4.png',
  sd_art3: 'images/0f68d0_9b3b79ad881e4.png',
  sd_arch: 'images/2e8212_7d30ad38443c4.png',
  sd_hist: 'images/0f68d0_9a19b4b3597c4.png',
  sam_char: 'images/2e8212_6a9190b7ad904.png',

  p1: 'images/2e8212_9256175e51824.jpg',
  p2: 'images/2e8212_212f62f77a854.png',
  p3: 'images/2e8212_ac7a2a82f41a4.png',
  p4: 'images/2e8212_e85f1a1a78714.png',
  p5: 'images/2e8212_ef31311e7f144.png',
  p6: 'images/2e8212_9ccbd8b6be9a4.png',
  p7: 'images/2e8212_e628b22cd9de4.png',
  p8: 'images/2e8212_345a09e86a6c4.png',
  p9: 'images/2e8212_4173cf4f6dfd4.png',
  p10: 'images/2e8212_660a8aa2be5d4.png',
  p11: 'images/2e8212_c318a8522a844.png',
  p12: 'images/2e8212_cce9c56fd2724.png',
  p13: 'images/2e8212_7a4947e7b0384.png',

  b1: 'images/2e8212_9fc07fd6d23d4.png',
  b2: 'images/2e8212_bc9b0c4cdcaf4.jpg',
  b3: 'images/2e8212_c8f3e980d4464.jpg',
  b4: 'images/2e8212_8e2a40c0edf14.png',
  b5: 'images/2e8212_6b59a382081e4.png',
  b6: 'images/2e8212_14efc33294224.png',

  s1: 'images/2e8212_1a508fff37624.jpg',
  s2: 'images/2e8212_31bf32d31b714.png',
  s3: 'images/2e8212_f3728c38a23c4.jpg',
  s4: 'images/2e8212_e3fa461f1d984.png',

  sh1: 'images/2e8212_0e00b78176414.png',
  sh2: 'images/2e8212_088a9f9eae374.png',
  sh3: 'images/0f68d0_0597275aef914.png',
  sh4: 'images/0f68d0_75108a3346fc4.png',
  sh5: 'images/2e8212_31eb43138e6a4.png',
  sh6: 'images/0f68d0_f7f65d1da6964.png',
  sh7: 'images/2e8212_90cae88e15474.png',
  sh8: 'images/2e8212_947f27eabaa44.png',

  wl1: 'images/wedlink_1.jpg',
  wl2: 'images/wedlink_2.jpg',
  wl3: 'images/wedlink_3.jpg',
  wl4: 'images/wedlink_4.jpg',
  wl5: 'images/wedlink_5.jpg',
  wl6: 'images/wedlink_6.jpg',
  wl7: 'images/wedlink_7.jpg',
  wl8: 'images/wedlink_8.jpg',
  wl9: 'images/wedlink_9.jpg',
  wl10: 'images/wedlink_10.jpg',

  ab1: 'images/2e8212_908a7d3e2f624.jpg',
  ab2: 'images/0f68d0_86f4cf1546044.jpg',
  ab3: 'images/0f68d0_afacc9e55f914.jpg',
  ab4: 'images/0f68d0_6887ae8c95214.jpg',
  ab5: 'images/2e8212_a2c9b63659094.jpg',
  ab6: 'images/0f68d0_e8e4bcbe54ea4.jpg',

  vol1: 'images/2e8212_1241dcf1f3104.png',
  vol2: 'images/2e8212_65286c01acaf4.png',
  vol3: 'images/volunteer1.jpg',
  vol4: 'images/volunteer2.jpg',

  thumb_piracy: 'images/Covers/piracy.png',
  thumb_behavior: 'images/Covers/behavior.png',
  thumb_service: 'images/Covers/noodle.png',
  thumb_shell: 'images/Covers/shell.png',
  thumb_wedding: 'images/Covers/wedlink.png',
};

/* ── DOM REFS ── */
const mainEl = document.getElementById('mainScroll');
const sections = document.querySelectorAll('.sec');
const tkNodes = document.querySelectorAll('.tk-node');
const tkSamosa = document.getElementById('tkSamosa');
const tkProg = document.getElementById('tkProg');
const trackerEl = document.getElementById('tracker');
let curSec = 0;

/* ── NAVIGATION ── */
function go(i) {
  if (sections[i]) mainEl.scrollTo({ top: sections[i].offsetTop, behavior: 'smooth' });
}
window.go = go;

/* ── TRACKER ── */
function getDotY(nodeEl) {
  const dot = nodeEl.querySelector('.tk-dot');
  const wrapRect = trackerEl.getBoundingClientRect();
  const dotRect = dot.getBoundingClientRect();
  return dotRect.top - wrapRect.top + dot.offsetHeight / 2;
}

function updateTracker(idx) {
  tkNodes.forEach((n, i) => {
    n.classList.toggle('active', i === idx);
    n.classList.toggle('passed', i < idx);
  });
  const targetY = getDotY(tkNodes[idx]);
  tkSamosa.style.top = targetY + 'px';
  const firstY = getDotY(tkNodes[0]);
  const h = Math.max(0, targetY - firstY);
  tkProg.style.top = firstY + 'px';
  tkProg.style.height = h + 'px';
  curSec = idx;
}

/* ── SCROLL HANDLER ── */
mainEl.addEventListener('scroll', () => {
  const scrollTop = mainEl.scrollTop;
  const viewH = mainEl.clientHeight;
  let activeIdx = 0;
  sections.forEach((sec, i) => {
    if (scrollTop >= sec.offsetTop - viewH / 2) activeIdx = i;
  });
  updateTracker(activeIdx);
  revealElements();
}, { passive: true });

setTimeout(() => { updateTracker(0); revealElements(); }, 160);
window.addEventListener('resize', () => updateTracker(curSec));

/* ── REVEAL ── */
function revealElements() {
  const mainRect = mainEl.getBoundingClientRect();
  document.querySelectorAll('.rv').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < mainRect.bottom - 50) el.classList.add('vis');
  });
}

/* ── HOME PARTICLES ── */
(function spawnHomeParticles() {
  const container = document.getElementById('homeParticles');
  if (!container) return;
  const s = document.createElement('style');
  s.textContent = `
    @keyframes hFloat {
      0%   { opacity: 0; transform: translateY(100vh) scale(.5); }
      8%   { opacity: .35; }
      92%  { opacity: .07; }
      100% { transform: translateY(-8vh) scale(1.1); opacity: 0; }
    }`;
  document.head.appendChild(s);
  const colors = ['rgba(212,160,23,.3)', 'rgba(232,150,12,.22)', 'rgba(255,210,51,.2)', 'rgba(224,124,90,.15)', 'rgba(255,240,180,.18)'];
  for (let i = 0; i < 32; i++) {
    const p = document.createElement('div');
    const sz = 2 + Math.random() * 5;
    const dur = 7 + Math.random() * 10;
    const del = Math.random() * 9;
    const lft = Math.random() * 70;
    Object.assign(p.style, {
      position: 'absolute', borderRadius: '50%', pointerEvents: 'none',
      width: sz + 'px', height: sz + 'px', left: lft + '%',
      background: colors[Math.floor(Math.random() * colors.length)],
      animation: `hFloat ${dur}s ${del}s linear infinite`, opacity: '0',
    });
    container.appendChild(p);
  }
})();

/* ── HEAT PARTICLES ── */
(function spawnHeat() {
  const c = document.getElementById('heatP');
  if (!c) return;
  const colors = ['#D4A017', '#E8960C', '#E07C5A', '#FFD233', '#FF8000'];
  for (let i = 0; i < 26; i++) {
    const p = document.createElement('div');
    const sz = 2 + Math.random() * 5;
    p.classList.add('hp');
    Object.assign(p.style, {
      left: Math.random() * 100 + '%',
      width: sz + 'px', height: sz + 'px',
      background: colors[Math.floor(Math.random() * colors.length)],
      animationDuration: (2.5 + Math.random() * 3) + 's',
      animationDelay: (Math.random() * 4) + 's',
    });
    c.appendChild(p);
  }
})();

/* ── PLATING SHIMMER ── */
(function spawnShimmer() {
  const c = document.getElementById('platingShimmer');
  if (!c) return;
  for (let i = 0; i < 22; i++) {
    const d = document.createElement('div');
    const sz = 2 + Math.random() * 4;
    d.classList.add('ps-dot');
    Object.assign(d.style, {
      position: 'absolute',
      left: Math.random() * 100 + '%', top: Math.random() * 100 + '%',
      width: sz + 'px', height: sz + 'px',
      background: 'var(--gold)', borderRadius: '50%',
      animationDuration: (2 + Math.random() * 4) + 's',
      animationDelay: (Math.random() * 5) + 's',
    });
    c.appendChild(d);
  }
})();

/* ── CAROUSEL (SOFT DOUGH) — tabs: Young Creative | Director & Actor | Upcycle Artist | Art Workshops ──
   Architecture is now its own carousel on the right.
   Slide indices:
   0  Young Creative
   1  Director & Actor (sd_act)
   2  Director & Actor (sd_upcycle)
   3  Upcycle Artist (sd_art1)
   4  Upcycle Artist (sd_art2)
   5  Upcycle Artist (sd_art3)
   6  Upcycle Artist (sd_hist)
   7  Art Workshops (artworkshop.jpg)
   8  Art Workshops (artworkshop2.jpg)
*/
const slides = [
  { img: I.sam_char, title: 'The Young Creative', desc: 'Every curiosity and creative experiment became part of the mix.' },
  { img: I.sd_act, title: 'As a Director & Actor', desc: 'My earliest experiments with storytelling — directing and acting in school.' },
  { img: I.sd_upcycle, title: 'As a Director & Actor', desc: 'Learning how narratives shape emotions through performance and direction.' },
  { img: I.sd_art1, title: 'As an Upcycle Artist', desc: 'Turning discarded materials into something beautiful. First taste of design thinking.' },
  { img: I.sd_art2, title: 'As an Upcycle Artist', desc: 'From handmade crafts to mixed-media — experiments in form, colour, and expression.' },
  { img: I.sd_art3, title: 'As an Upcycle Artist', desc: 'Exploring different art forms and mediums across creative workshops.' },
  { img: I.sd_hist, title: 'As an Upcycle Artist', desc: 'Documenting heritage through a maker\'s lens — design carries cultural memory.' },
  { img: 'images/artworkshop.jpg', title: 'Art Workshops', desc: 'Taking art workshops and exploring creative expression across mediums.' },
  { img: 'images/artworkshop2.jpg', title: 'Art Workshops', desc: 'Art as a tool for connection — workshops with kids, communities, and beyond.' },
];

/* Tab definitions: label + first slide index for this group */
const sdTabs = [
  { label: 'Young Creative', start: 0 },
  { label: 'Director & Actor', start: 1 },
  { label: 'Upcycle Artist', start: 3 },
  { label: 'Art Workshops', start: 7 },
];

/* Build carousel HTML — tabs on top, then slides, then sidebar */
let cHTML = '<div class="carousel" id="carousel">';
/* Tab bar */
cHTML += '<div class="car-tabs">';
sdTabs.forEach((t, i) => {
  cHTML += `<button class="car-tab${i === 0 ? ' car-tab-active' : ''}" data-start="${t.start}">${t.label}</button>`;
});
cHTML += '</div>';
/* Slide area + sidebar */
cHTML += '<div class="car-body"><div class="carousel-main"><div class="carousel-track" id="cTrack">';
slides.forEach(s => {
  cHTML += `<div class="carousel-slide">
    <img src="${s.img}" alt="${s.title}" onclick="lbox(this.src)">
    <div class="carousel-caption"><h4>${s.title}</h4><p>${s.desc}</p></div>
  </div>`;
});
cHTML += '</div></div>';
/* Vertical sidebar: ← | dots | → | pause */
cHTML += '<div class="carousel-sidebar"><button class="carousel-btn" id="cPrev">&#8592;</button><div class="carousel-dots" id="cDots">';
slides.forEach((_, i) => {
  cHTML += `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-i="${i}"></button>`;
});
cHTML += '</div><button class="carousel-btn" id="cNext">&#8594;</button><button class="carousel-btn carousel-pause-btn" id="cPause" title="Pause / Play">⏸</button></div>';
cHTML += '</div></div>'; /* end car-body + carousel */
document.getElementById('sdImgs').innerHTML = cHTML;

let cIdx = 0;
let cPaused = false;
const cTrack = document.getElementById('cTrack');
let cDots = document.querySelectorAll('.carousel-dot');

function getActiveTabIdx(slideIdx) {
  let ti = 0;
  sdTabs.forEach((t, i) => { if (slideIdx >= t.start) ti = i; });
  return ti;
}

function goSlide(i) {
  cIdx = ((i % slides.length) + slides.length) % slides.length;
  cTrack.style.transform = `translateX(-${cIdx * 100}%)`;
  cDots.forEach((d, j) => d.classList.toggle('active', j === cIdx));
  /* Highlight active tab */
  const ti = getActiveTabIdx(cIdx);
  document.querySelectorAll('.car-tab').forEach((t, pi) => t.classList.toggle('car-tab-active', pi === ti));
}

let cAuto = setInterval(() => goSlide(cIdx + 1), 6000);
function resetAuto() {
  clearInterval(cAuto);
  if (!cPaused) cAuto = setInterval(() => goSlide(cIdx + 1), 6000);
}

document.getElementById('cPrev').onclick = () => { goSlide(cIdx - 1); resetAuto(); };
document.getElementById('cNext').onclick = () => { goSlide(cIdx + 1); resetAuto(); };
document.getElementById('cPause').onclick = () => {
  cPaused = !cPaused;
  document.getElementById('cPause').textContent = cPaused ? '▶' : '⏸';
  if (cPaused) clearInterval(cAuto); else resetAuto();
};
cDots.forEach(d => d.onclick = () => { goSlide(+d.dataset.i); resetAuto(); });

/* Tab click → jump to group start */
document.querySelectorAll('.car-tab').forEach(btn => {
  btn.onclick = () => { goSlide(+btn.dataset.start); resetAuto(); };
});
goSlide(0);

const carEl = document.getElementById('carousel');
carEl.addEventListener('mouseenter', () => clearInterval(cAuto));
carEl.addEventListener('mouseleave', () => { if (!cPaused) cAuto = setInterval(() => goSlide(cIdx + 1), 6000); });
let touchX = 0;
carEl.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
carEl.addEventListener('touchend', e => {
  const d = touchX - e.changedTouches[0].clientX;
  if (Math.abs(d) > 40) { goSlide(cIdx + (d > 0 ? 1 : -1)); resetAuto(); }
}, { passive: true });

/* ── ARCHITECTURE CAROUSEL ── */
const archSlides = document.querySelectorAll('#archTrack .arch-slide');
const archDotsEl = document.querySelectorAll('#archDots .arch-dot');
let aIdx = 0;

function goArch(i) {
  aIdx = ((i % archSlides.length) + archSlides.length) % archSlides.length;
  document.getElementById('archTrack').style.transform = `translateX(-${aIdx * 100}%)`;
  archDotsEl.forEach((d, j) => d.classList.toggle('active', j === aIdx));
}

document.getElementById('archPrev').onclick = () => goArch(aIdx - 1);
document.getElementById('archNext').onclick = () => goArch(aIdx + 1);
archDotsEl.forEach(d => d.onclick = () => goArch(+d.dataset.i));
let archAuto = setInterval(() => goArch(aIdx + 1), 5000);
const archEl = document.getElementById('archCarousel');
archEl.addEventListener('mouseenter', () => clearInterval(archAuto));
archEl.addEventListener('mouseleave', () => { archAuto = setInterval(() => goArch(aIdx + 1), 5000); });


/* ── FILLING CARDS ── */
document.getElementById('flCards').innerHTML = `
<div class="card" onclick="openM('piracy')">
  <img class="card-img" src="${I.thumb_piracy}" alt="">
  <div class="card-body">
    <div class="card-logo-row"><span class="card-logo-placeholder">NID Gandhinagar</span></div>
    <span class="card-cat">Virtual Social Behaviour</span>
    <h3 class="card-t">Piracy in Telegram</h3>
    <p class="card-d">Social behaviours online and how interfaces trigger or facilitate them</p>
    <div class="card-arr">Read more →</div>
  </div>
</div>
<div class="card" onclick="openM('behavior')">
  <img class="card-img" src="${I.thumb_behavior}" alt="">
  <div class="card-body">
    <div class="card-logo-row"><span class="card-logo-placeholder">NID Gandhinagar</span></div>
    <span class="card-cat">Behavioural Design</span>
    <h3 class="card-t">Clean Hands Among Food Vendors</h3>
    <p class="card-d">Understanding and influencing hygiene behaviour through design interventions</p>
    <div class="card-arr">Read more →</div>
  </div>
</div>`;

/* ── DEEP FRY CARDS ── */
document.getElementById('dfCards').innerHTML = `
<div class="card" onclick="openM('service')">
  <img class="card-img" src="${I.thumb_service}" alt="">
  <div class="card-body">
    <div class="card-logo-row"><span class="card-logo-placeholder">NID Gandhinagar</span></div>
    <span class="card-cat">Service Design</span>
    <h3 class="card-t">Empowering Student Decisions</h3>
    <p class="card-d">Designing a service ecosystem for clarity in decision-making</p>
    <div class="card-arr">Read more →</div>
  </div>
</div>
<div class="card" onclick="openM('shell')">
  <img class="card-img" src="${I.thumb_shell}" alt="">
  <div class="card-body">
    <div class="card-logo-row"><span class="card-logo-placeholder">Shell</span></div>
    <span class="card-cat">User Research</span>
    <h3 class="card-t">UX Research at Shell</h3>
    <p class="card-d">Strengthening Service Design and UXR practices at<br> enterprise scale for sustainable impact</p>
    <div class="card-arr">Read more →</div>
  </div>
</div>
<div class="card" onclick="openM('wedding')">
  <img class="card-img" src="${I.thumb_wedding}" alt="">
  <div class="card-body">
    <div class="card-logo-row"><span class="card-logo-placeholder">WedLink</span></div>
    <span class="card-cat">UXR &amp; Service Design</span>
    <h3 class="card-t">Wedlink: Wedding Workforce</h3>
    <p class="card-d">Technology as a bridge for fair pay and dignity in Indian weddings</p>
    <div class="card-arr">Read more →</div>
  </div>
</div>`;

/* ── PROJECT DATA ── */
const P = {
  piracy: {
    cat: 'Virtual Social Behaviour',
    t: 'Piracy in Telegram',
    logo: 'NID Gandhinagar',
    tags: ['Netnography', 'Autonetnography', 'Interviews', 'UX Strategies', 'UI Mockups'],
    hero: I.p5,
    page: 'piracy2.html',
    summary: 'In the fast-paced world of technological advancements, this project looks into how human social behaviours exist in a virtual platform and how the interface triggers or facilitates such behaviour. Through netnography, autonetnography, and interviews, we explored piracy culture on Telegram and designed UX interventions to make users more conscious of their choices.',
    b: `<p><strong>Timeline:</strong> 4 weeks &nbsp;·&nbsp; <strong>Type:</strong> Individual project</p>
<p><strong>Primary research:</strong> Netnography, Autonetnography, Interviews<br><strong>Secondary research:</strong> Articles, Research papers, Documentaries</p>
<img src="${I.p1}">
<h3>What Rules the World Today?</h3>
<p>Information and content. This information is often gatekept and considered Intellectual Property. Gatekeeping information and monetizing it makes it inaccessible to all classes of people.</p>
<img src="${I.p2}">
<h3>Triangle of Digital Responsibility</h3>
<p>Piracy as acceptable and normative behavior. Blurred line between ethical and unethical download.</p>
<img src="${I.p3}">
<h3>Two Schools of Thought</h3>
<p><strong>Known/accepted deviancy:</strong> It isn't theft, it's duplication. Gateway for less fortunate people to access high-end content.</p>
<p><strong>Pain to creators:</strong> Eats away profits. "Get everything for free" mindset.</p>
<img src="${I.p4}">
<h3>Why Does One Indulge in Piracy?</h3>
<p><strong>Extrinsic:</strong> Saving money, try and buy, perceived utility, expanding collection.<br><strong>Intrinsic:</strong> Excitement of getting something free, fun and achievement, breaking the rule.</p>
<img src="${I.p5}">
<h3>Why Telegram?</h3>
<p>Up to 50 public/private groups per day. Unlimited channel members. 500+ resources. Wide reach, free, stable, ad-free.</p>
<img src="${I.p6}">
<h3>The Research Question</h3>
<blockquote>"How might we make users more conscious of their choice to indulge in piracy and enable the platform to keep a stronger check on it?"</blockquote>
<img src="${I.p7}">
<h3>Research and UX Strategies</h3>
<p>Analysis of existing UI, design interventions and their operationalization.</p>
<img src="${I.p8}">
<h3>Solutions</h3>
<p>Divide the mass, paralyze the spreading channels. Business model considerations.</p>
<img src="${I.p9}"><img src="${I.p10}"><img src="${I.p11}"><img src="${I.p12}"><img src="${I.p13}">`
  },

  behavior: {
    cat: 'Behavioural Design',
    t: 'Clean Hand Practice Among Street Food Vendors',
    logo: 'NID Gandhinagar',
    tags: ['Field Study', 'Behaviour Analysis', 'Change Canvas', 'Observations', 'Prototyping'],
    hero: I.b3,
    page: 'behavior2.html',
    summary: 'Understanding how people think, feel, and act to create designs that influence their behavior positively. Through field studies in Ahmedabad and Gandhinagar, we identified compromised hygiene as a core deviant behaviour and designed interventions using the Behaviour Change Canvas.',
    b: `<p><strong>Timeline:</strong> 4 weeks &nbsp;·&nbsp; <strong>Team:</strong> Swetha, Disha, Pramoddini</p>
<img src="${I.b1}">
<h3>Objectives</h3>
<p>Identify and implement behavior change in the context of street food in Ahmedabad and Gandhinagar, India.</p>
<img src="${I.b2}">
<h3>Research — 3 Phases</h3>
<p><strong>Phase 1:</strong> Visits to street food markets to identify patterns.<br><strong>Phase 2:</strong> Identify deviant behaviors, choose target behavior.<br><strong>Phase 3:</strong> Understand drivers, employ ideation techniques.</p>
<img src="${I.b3}">
<h3>Field Observations</h3>
<p>Ease in street food environments. Unsaid vendor unity. Cooking exhibition as crowd puller and pusher.</p>
<img src="${I.b4}">
<h3>Deviant Behaviours</h3>
<p><strong>Core:</strong> Compromised hygiene by vendors and customers. Gives liberty for other deviancies.</p>
<img src="${I.b6}">
<h3>Design Intervention</h3>
<p>Behaviour Change Canvas: making handwashing the path of least resistance.</p>
<img src="${I.b5}">`
  },

  service: {
    cat: 'Service Design',
    t: 'Noodle: Empowering Students to Attain Clarity',
    logo: 'NID Gandhinagar',
    tags: ['Service Design', 'Market Need Research', 'Service Blueprint', 'Prototyping', '5W Analysis'],
    page: 'noodle2.html',
    summary: ' ',
    b: `<img src="images/noodlecover.png">

<h3>The Search for an Unsaid Need</h3>
<p>We began with a simple but powerful question:</p>
<blockquote>What is an unsaid need among people — one that, when addressed, can create a large and meaningful impact?</blockquote>
<p>Instead of assuming answers, we decided to listen.</p>
<p>We placed a <strong>Wish Box</strong> in public spaces and invited people to anonymously write down what they truly wished for. We created an interactive wall where passersby could respond to a thought-provoking question. We conducted informal interviews. We held brainstorming sessions. We observed patterns.</p>
<p>Slowly, six strong needs emerged.</p>
<p>To move from insight to action, we applied the <strong>5W Method</strong> (Who, What, Why, When, Where) to evaluate each need critically. One need stood out — urgent, universal, and deeply human:</p>
<blockquote>The Need to Become Decisive</blockquote>
<p>Human beings have evolved across centuries — technologically, socially, intellectually.</p>
<p>Yet one struggle continues to persist within us:</p>
<p><strong>Ambiguity in decision-making.</strong></p>
<p>We hesitate.<br>We overthink.<br>We get stuck between emotion and logic.</p>
<p>Especially when decisions involve:</p>
<ul>
  <li>Morality vs practicality</li>
  <li>Career vs passion</li>
  <li>Stability vs risk</li>
  <li>Relationships, education, finances</li>
</ul>
<p>The inability to decide doesn't just delay outcomes — it creates anxiety, self-doubt, and emotional exhaustion.</p>
<p>But here was our real challenge:</p>
<p><em>Decision-making is a vast umbrella.</em><br><em>How do you design a solution that works across all kinds of decisions?</em></p>

<hr>
<h3>Finding the Pattern Beneath Decisions</h3>
<p>To understand decisiveness, we analysed both successful and failed decisions.</p>
<p>We asked:</p>
<ul>
  <li>What made some decisions empowering?</li>
  <li>What caused others to collapse?</li>
</ul>
<p>Across contexts and personalities, we noticed a common thread:</p>
<p><strong>Every decision silently interacts with Past, Present, and Future.</strong></p>
<ul>
  <li>What do I already have?</li>
  <li>What should I build or acquire?</li>
  <li>What is driving me toward this choice?</li>
  <li>What could go right?</li>
  <li>What could go wrong?</li>
</ul>
<p>From this insight emerged a structure we called:</p>
<blockquote>The Triangle of Clarity</blockquote>
<p>Every strong decision seemed to rest on three anchors:</p>
<ol>
  <li><strong>Drivers</strong> – What is pushing or pulling me toward this choice?</li>
  <li><strong>Information</strong> – What do I know? What am I assuming?</li>
  <li><strong>Consequences</strong> – What are the best and worst outcomes?</li>
</ol>
<p>This triangle became the foundation of our framework.</p>
<p>We converted it into a digestible, conversational format — a guided Q&amp;A tool that gently walks a person through clarity.</p>

<hr>
<h3>The First Failure</h3>
<p>When we tested the framework, we faced another reality.</p>
<p>It worked, but it was <strong>too open-ended</strong>.</p>
<p>Participants felt it was insightful yet broad. It lacked situational depth.</p>
<p>That failure taught us something important:</p>
<p><em>If confusion is contextual, clarity must be contextual too.</em><br><em>A universal framework needs situational tailoring.</em></p>

<hr>
<h3>Narrowing the Chaos</h3>
<p>We asked ourselves:</p>
<p><em>Where does uncertainty peak?<br>Where does confusion feel overwhelming yet consequential?</em></p>
<p>One space stood out immediately:</p>
<p><strong>Final-year college students.</strong></p>
<p>Students brimming with ideas.<br>Dreaming of startups.<br>Yet afraid to take the leap.</p>
<p>Torn between:</p>
<ul>
  <li>Entrepreneurship vs Employment</li>
  <li>Risk vs Security</li>
  <li>Passion vs Predictability</li>
</ul>
<p>This was not just a career decision.<br><em>It was an identity decision.</em></p>

<hr>
<h3>Introducing: Noodle</h3>
<p>We redesigned our framework specifically for this scenario.<br>We made it sharper.<br>More relatable.<br>Guided.</p>
<p>We called it:</p>
<blockquote>Noodle</blockquote>
<p>Because a confused mind feels like tangled noodles — twisted, overlapping, hard to separate.</p>
<p>Noodle untangles that chaos.</p>
<p>Instead of telling them what to choose, Noodle helps them <em>see clearly enough to choose for themselves.</em></p>

<hr>
<h3>The Impact We Aim For</h3>
<p>Decisiveness is not about making fast decisions.<br>It is about making <strong>conscious</strong> ones.</p>
<p>By moving from a broad human need<br>to a structured clarity framework<br>to a contextual, tailored solution,</p>
<p>We transformed confusion into a navigable process.</p>
<blockquote>Because sometimes, the biggest impact does not come from giving answers. It comes from helping people ask the right questions.</blockquote>`
  },

  shell: {
    cat: 'User Research',
    t: 'Shell Research & Service Design Hub',
    logo: 'Shell',
    tags: ['Design Maturity', 'Stakeholder Interviews', 'Framework Development', 'Co-creation', 'DesignOps'],
    page: 'shell.html',
    summary: ' ',
    b: `<h3>Background &amp; Vision</h3>
<p>The initiative originated from an internal <strong>Design Maturity Survey</strong> conducted by Shell's Experience Design (EXD) team. The findings highlighted a clear opportunity to strengthen the practice of User Experience Research (UXR) and Service Design (SD) across the organisation.</p>
<p>Our vision was to enhance the effectiveness, consistency, and strategic influence of UXR and Service Design by addressing systemic gaps revealed through the maturity assessment.</p>

<hr>
<h3>Discovery Phase</h3>
<p>To frame the problem space, I began by exploring:</p>
<ul>
  <li>What constitutes design maturity?</li>
  <li>How do leading organisations institutionalise UXR and Service Design?</li>
  <li>What governance models, operating frameworks, and enablement structures support scalable design practices?</li>
</ul>
<p>In parallel, we defined our research objectives and conducted in-depth interviews with seasoned Service Designers and User Researchers across projects and business units.</p>

<hr>
<h3>Research Objectives</h3>
<p>Our primary research aimed to understand:</p>
<ul>
  <li>Practitioner background, project context, and team structures</li>
  <li>Typical approaches, methodologies, and frameworks employed</li>
  <li>Key learnings and best practices</li>
  <li>Recurring challenges and organisational barriers</li>
  <li>Tools, systems, and documentation practices</li>
</ul>

<hr>
<h3>Key Insights</h3>
<p>The research surfaced several nuanced, often unarticulated challenges embedded within the organisational ecosystem. These were not isolated issues, but interrelated systemic friction points.</p>
<p>Through synthesis and thematic clustering, the following core challenges emerged:</p>
<ul>
  <li>Limited understanding of design value at senior leadership levels</li>
  <li>Socio-political filters leading to insight pushback and unheard researcher voices</li>
  <li>Business functions owning early-stage problem framing without research alignment</li>
  <li>Project silos and lack of cross-functional visibility</li>
  <li>Inconsistent systematisation, documentation, and handoffs</li>
  <li>Perception of EXD as "The Auditor" and instances of "UX Theatre"</li>
  <li>Difficulty in measuring and communicating impact</li>
</ul>

<hr>
<h3>Systems Mapping &amp; Root Cause Identification</h3>
<p>By mapping interdependencies between these challenges, two foundational root causes were identified:</p>
<ol>
  <li><strong>Lack of shared understanding of design value</strong></li>
  <li><strong>Lack of systematisation and institutional memory</strong></li>
</ol>
<p>These core issues were creating downstream effects across governance, collaboration, credibility, and impact measurement.</p>
<p>We hypothesised that addressing these two levers would generate a positive ripple effect across the broader ecosystem.</p>

<hr>
<h3>Strategic Intervention</h3>
<p>After evaluating feasibility, scalability, and organisational alignment, we identified the most impactful intervention:</p>
<blockquote>Creation of a Centralised, Contextualised Playbook &amp; Knowledge Library</blockquote>
<p>A dedicated platform tailored specifically to Shell's context — embedding:</p>
<ul>
  <li>Shell-specific case studies</li>
  <li>Proven research and service design frameworks</li>
  <li>Templates and documentation standards</li>
  <li>Best practices and learning artefacts</li>
  <li>Governance guidelines</li>
  <li>Impact storytelling examples</li>
</ul>
<p>This solution aimed to:</p>
<ul>
  <li>Institutionalise best practices</li>
  <li>Improve research rigour and consistency</li>
  <li>Increase leadership literacy around design value</li>
  <li>Reduce duplication of effort</li>
  <li>Enable knowledge retention and handover</li>
  <li>Strengthen credibility of EXD</li>
</ul>

<hr>
<h3>The Solution: Shell Research &amp; Service Design Hub</h3>
<p>The outcome was the <strong>Shell Research &amp; Service Design Hub</strong> — a centralised, scalable enablement platform designed to function as:</p>
<ul>
  <li>A playbook</li>
  <li>A capability-building repository</li>
  <li>A knowledge management system</li>
  <li>A design maturity accelerator</li>
</ul>

<hr>
<h3>Prototyping &amp; Validation</h3>
<p>We developed a working prototype of the Hub and conducted usability testing with practitioners.</p>
<p>The feedback was overwhelmingly positive regarding:</p>
<ul>
  <li>Practical utility</li>
  <li>Relevance to Shell's context</li>
  <li>Potential to improve cross-team alignment</li>
</ul>
<p>Constructive inputs were received around UI clarity, navigation, and information architecture, which informed further refinements.</p>

<hr>
<h3>Impact Potential</h3>
<p>The Shell Research &amp; SD Hub positions EXD as a <strong>strategic enabler</strong> rather than an execution layer. By strengthening systematisation and improving the articulation of design value, the Hub contributes to long-term design maturity growth and organisational alignment.</p>`
  },

  wedding: {
    cat: 'UXR & Service Design',
    t: 'Wedlink: Reimagining the Wedding Workforce',
    logo: 'WedLink',
    tags: ['Ethnographic Research', 'Service Design', 'Platform Design', 'Stakeholder Mapping', 'Figma Prototype'],
    page: 'wedlink.html',
    summary: ' ',
    b: `<p>Content to be provided</p>`
  },

};

/* ── MODAL ── */
const modalOv = document.getElementById('modalOv');
const modalBox = document.getElementById('modalBox');
const mInner = document.getElementById('mInner');
const mCat = document.getElementById('mCat');

function openM(key) {
  const p = P[key];
  if (!p) return;
  mCat.textContent = p.cat;
  /* Top-bar "View full project details" button */
  const mViewBtn = document.getElementById('mViewBtn');
  if (p.page) {
    mViewBtn.href = p.page;
    mViewBtn.style.display = 'inline-flex';
  } else {
    mViewBtn.style.display = 'none';
  }
  mInner.innerHTML = `
    <h3 class="m-title">${p.t}</h3>
    ${p.logo ? `<div class="m-logo-row"><span class="m-logo-badge">${p.logo}</span></div>` : ''}
    <div class="m-tags">${p.tags.map(t => `<span class="m-tag">${t}</span>`).join('')}</div>
    ${p.hero ? `<img class="m-hero-img" src="${p.hero}" alt="">` : ''}
    <div class="m-summary">${p.summary}</div>
    ${p.b ? `<div class="m-body">${p.b}</div>` : ''}
  `;

  modalOv.classList.add('open');
  modalBox.classList.remove('expanded');
  modalBox.scrollTop = 0;
}
function closeM() { modalOv.classList.remove('open'); }
window.openM = openM;
window.closeM = closeM;

modalOv.addEventListener('click', e => { if (e.target === modalOv) closeM(); });
document.addEventListener('click', e => {
  if (e.target.matches('.m-body img')) lbox(e.target.src);
});

/* ── ABOUT OVERLAY ── */
const aboutOv = document.getElementById('aboutOv');
const abWrap = document.getElementById('abWrap');

abWrap.innerHTML = `
<div class="ab-hero">
  <img class="ab-photo" src="${I.ab1}" alt="Swetha" onclick="lbox(this.src)">
  <div class="ab-hero-txt">
    <div class="ab-lbl">About Me</div>
    <h2 class="ab-h">Every phase has meaning.</h2>
    <p class="ab-intro">Creative strategist with a Master's in Strategic Design Management and 2+ years of diverse experience in service design, brand storytelling, and project planning. I specialize in building systems, content strategies, and experiences that are both human-centered and culturally rooted.</p>
    <div class="roles">
      <span class="role">Architect</span>
      <span class="role">Planner</span>
      <span class="role">Researcher</span>
      <span class="role">Designer</span>
    </div>
  </div>
</div>

<div class="ab-section">
  <h3 class="ab-st">Work Experience</h3>
  <div class="tl">
    <span class="dt">Mar 2024 – Mar 2025</span>
    <div class="rl">Luxury Event Decor Company, Hyderabad</div>
    <div class="og">Service Designer &amp; Coordinator (1 Year)</div>
    <div class="ds">Gained hands-on experience in high-end event decor operations. Created and defined internal work libraries and systems to formalise and simplify work.</div>
  </div>
  <div class="ab-img-row">
    <img src="${I.ab2}" onclick="lbox(this.src)">
    <img src="${I.ab3}" onclick="lbox(this.src)">
    <img src="${I.ab4}" onclick="lbox(this.src)">
    <img src="${I.ab6}" onclick="lbox(this.src)">
  </div>
  <div class="tl" style="margin-top:.8rem">
    <span class="dt">Aug 2023 – Feb 2024</span>
    <div class="rl">User Researcher, Shell</div>
    <div class="og">Experience Design Team</div>
    <div class="ds">Worked on enterprise-level UX research initiatives. Led projects involving design systems research and case studies on Google, Microsoft, Intuit, Samsung and Salesforce systems. Contributed to shaping Shell's internal design system strategy.</div>
  </div>
</div>

<div class="ab-section">
  <h3 class="ab-st">The Skinlanguage (Blog)</h3>
  <p class="ab-p">Founded The Skinlanguage, a skincare content blog with 1.6k community and 20+ brand partnerships. Produced 100+ pieces of content combining research-backed skincare education with engaging visual storytelling.</p>
  <div class="ab-img-row">
    <img src="${I.ab5}" onclick="lbox(this.src)">
  </div>
</div>

<div class="ab-section">
  <h3 class="ab-st">Volunteering &amp; Social Work</h3>
  <p class="ab-p">Taken art workshops in kids shelter and care. Volunteered in various social cause projects like public wall paintings and relief collection for Chennai floods. Worked on outreach design for NGO AID India: designed flyers and posters for the toy drive, approached apartments and playschools, and successfully conducted the drive in two gated communities.</p>
  <div class="ab-img-row">
    <img src="${I.vol1}" onclick="lbox(this.src)">
    <img src="${I.vol2}" onclick="lbox(this.src)">
    <img src="${I.vol3}" onclick="lbox(this.src)">
    <img src="${I.vol4}" onclick="lbox(this.src)">
  </div>
</div>

<div class="ab-section">
  <div class="ab-2col">
    <div>
      <h3 class="ab-st">Education</h3>
      <div class="tl">
        <div class="rl">M.Des, Strategic Design Management</div>
        <div class="og">National Institute of Design, Gandhinagar</div>
      </div>
      <div class="tl">
        <div class="rl">B.Arch, Architecture</div>
        <div class="og">Anna University, MSOA</div>
      </div>
      <h3 class="ab-st" style="margin-top:1rem">Skills</h3>
      <div class="sk-g">
        <span class="sk">Design Research</span>
        <span class="sk">Trend Mapping</span>
        <span class="sk">Project Management</span>
        <span class="sk">Stakeholder Mgmt</span>
        <span class="sk">Branding</span>
        <span class="sk">Social Media Strategy</span>
        <span class="sk">Communication Systems</span>
        <span class="sk">Process Design</span>
        <span class="sk">Content Creation</span>
      </div>
    </div>
    <div>
      <h3 class="ab-st">Tools</h3>
      <div class="tools">
        <span class="tool">Figma</span>
        <span class="tool">Miro</span>
        <span class="tool">Canva</span>
        <span class="tool">Adobe PS</span>
        <span class="tool">Adobe AI</span>
        <span class="tool">MS Office</span>
      </div>
      <h3 class="ab-st" style="margin-top:1.2rem">Contact</h3>
      <a href="mailto:swetrials98@gmail.com" style="display:flex;align-items:center;gap:.4rem;color:var(--gold);font-size:.82rem;margin-bottom:.4rem;text-decoration:none">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        swetrials98@gmail.com
      </a>
      <a href="https://www.linkedin.com/in/swetha-m-babb11201/" target="_blank" style="display:flex;align-items:center;gap:.4rem;color:var(--gold);font-size:.82rem;text-decoration:none">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
        linkedin.com/in/swetha-m-babb11201
      </a>
      <a href="Resume.pdf" download style="display:inline-flex;align-items:center;gap:.4rem;margin-top:1rem;background:var(--gold);color:var(--bg);font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:.6rem 1.2rem;border-radius:6px;text-decoration:none;transition:.3s">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download Resume
      </a>
    </div>
  </div>
</div>`;

function openAbout() { aboutOv.classList.add('open'); }
function closeAbout() { aboutOv.classList.remove('open'); }
document.getElementById('abBtn').onclick = openAbout;
document.getElementById('abClose').onclick = closeAbout;
aboutOv.addEventListener('click', e => { if (e.target === aboutOv) closeAbout(); });
const mobAbBtn = document.getElementById('mobAbBtn');
if (mobAbBtn) mobAbBtn.onclick = openAbout;

/* ── LIGHTBOX ── */
function lbox(src) {
  const lb = document.getElementById('lb');
  const img = document.getElementById('lbImg');
  img.src = src;
  lb.classList.add('open');
}
window.lbox = lbox;
document.getElementById('lb').addEventListener('click', function () {
  this.classList.remove('open');
});

/* ── KEYBOARD SHORTCUTS ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeM();
    closeAbout();
    document.getElementById('lb').classList.remove('open');
  }
  if (modalOv.classList.contains('open') || aboutOv.classList.contains('open')) return;
  if (e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); if (curSec < sections.length - 1) go(curSec + 1); }
  if (e.key === 'ArrowUp') { e.preventDefault(); if (curSec > 0) go(curSec - 1); }
});

/* ── 3D TILT on samosa visuals ── */
document.querySelectorAll('.sam-tilt-wrap').forEach(wrap => {
  wrap.addEventListener('mousemove', e => {
    const r = wrap.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * 18;
    const y = ((e.clientY - r.top) / r.height - .5) * 18;
    wrap.style.transform = `perspective(700px) rotateY(${x}deg) rotateX(${-y}deg)`;
  });
  wrap.addEventListener('mouseleave', () => {
    wrap.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg)';
  });
});

/* ── CUSTOM CURSOR ── */
(function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;
  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  (function animCursor() {
    cx += (mx - cx) * .35;
    cy += (my - cy) * .35;
    cursor.style.transform = `translate(${cx}px,${cy}px)`;
    requestAnimationFrame(animCursor);
  })();
})();

/* ── HOME SAMOSA PARALLAX ── */
(function homeParallax() {
  const sam = document.getElementById('homeSam');
  const sec = document.getElementById('s0');
  if (!sam || !sec) return;
  sec.addEventListener('mousemove', e => {
    const r = sec.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * 20;
    const y = ((e.clientY - r.top) / r.height - .5) * 12;
    sam.style.transform = `translateY(var(--fy,0px)) rotate(-1deg) translate(${x}px,${y}px)`;
  });
  sec.addEventListener('mouseleave', () => { sam.style.transform = ''; });
})();

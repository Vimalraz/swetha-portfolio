/* ==============================================
   SWETHA M | MY SAMOSA STORY — script.js
   ============================================== */

/* ── IMAGE MAP ────────────────────────────────── */
const I = {
  sd_act:     'images/0f68d0_4f166f852c484.jpg',
  sd_upcycle: 'images/0f68d0_b00e0015156c4.jpg',
  sd_art1:    'images/0f68d0_1f5c8ab1c0af4.png',
  sd_art2:    'images/0f68d0_8585c661723e4.png',
  sd_art3:    'images/0f68d0_9b3b79ad881e4.png',
  sd_arch:    'images/2e8212_7d30ad38443c4.png',
  sd_hist:    'images/0f68d0_9a19b4b3597c4.png',
  sam_char:   'images/2e8212_6a9190b7ad904.png',

  p1:  'images/2e8212_9256175e51824.jpg',
  p2:  'images/2e8212_212f62f77a854.png',
  p3:  'images/2e8212_ac7a2a82f41a4.png',
  p4:  'images/2e8212_e85f1a1a78714.png',
  p5:  'images/2e8212_ef31311e7f144.png',
  p6:  'images/2e8212_9ccbd8b6be9a4.png',
  p7:  'images/2e8212_e628b22cd9de4.png',
  p8:  'images/2e8212_345a09e86a6c4.png',
  p9:  'images/2e8212_4173cf4f6dfd4.png',
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

  wl1:  'images/wedlink_1.jpg',
  wl2:  'images/wedlink_2.jpg',
  wl3:  'images/wedlink_3.jpg',
  wl4:  'images/wedlink_4.jpg',
  wl5:  'images/wedlink_5.jpg',
  wl6:  'images/wedlink_6.jpg',
  wl7:  'images/wedlink_7.jpg',
  wl8:  'images/wedlink_8.jpg',
  wl9:  'images/wedlink_9.jpg',
  wl10: 'images/wedlink_10.jpg',

  ab1:  'images/2e8212_908a7d3e2f624.jpg',
  ab2:  'images/0f68d0_86f4cf1546044.jpg',
  ab3:  'images/0f68d0_afacc9e55f914.jpg',
  ab4:  'images/0f68d0_6887ae8c95214.jpg',
  ab5:  'images/2e8212_a2c9b63659094.jpg',
  ab6:  'images/0f68d0_e8e4bcbe54ea4.jpg',

  vol1: 'images/2e8212_1241dcf1f3104.png',
  vol2: 'images/2e8212_65286c01acaf4.png',
  vol3: 'images/volunteer1.jpg',
  vol4: 'images/volunteer2.jpg',

  thumb_piracy:   'images/filling_piracy.jpg',
  thumb_behavior: 'images/filling_behavior.jpg',
  thumb_service:  'images/deepfry_service.jpg',
  thumb_shell:    'images/deepfry_shell.jpg',
  thumb_wedding:  'images/deepfry_wedding.jpg',
};

/* ── DOM REFS ──────────────────────────────────── */
const mainEl   = document.getElementById('mainScroll');
const sections = document.querySelectorAll('.sec');
const tkNodes  = document.querySelectorAll('.tk-node');
const tkSamosa = document.getElementById('tkSamosa');
const tkProg   = document.getElementById('tkProg');
const trackerEl = document.getElementById('tracker');
let   curSec   = 0;

/* ── NAVIGATION ─────────────────────────────────── */
function go(i) {
  if (sections[i]) {
    mainEl.scrollTo({ top: sections[i].offsetTop, behavior: 'smooth' });
  }
}
window.go = go;

/* ── TRACKER: precise dot Y position ───────────── */
function getDotY(nodeEl) {
  const dot      = nodeEl.querySelector('.tk-dot');
  const wrapRect = trackerEl.getBoundingClientRect();
  const dotRect  = dot.getBoundingClientRect();
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
  tkProg.style.top    = firstY + 'px';
  tkProg.style.height = h + 'px';

  curSec = idx;
}

/* ── SCROLL HANDLER ─────────────────────────────── */
mainEl.addEventListener('scroll', () => {
  const scrollTop = mainEl.scrollTop;
  const viewH     = mainEl.clientHeight;
  let   activeIdx = 0;
  sections.forEach((sec, i) => {
    if (scrollTop >= sec.offsetTop - viewH / 2) activeIdx = i;
  });
  updateTracker(activeIdx);
  revealElements();
}, { passive: true });

// Init on load
setTimeout(() => { updateTracker(0); revealElements(); }, 160);
window.addEventListener('resize', () => updateTracker(curSec));

/* ── REVEAL ON SCROLL ──────────────────────────── */
function revealElements() {
  const mainRect = mainEl.getBoundingClientRect();
  document.querySelectorAll('.rv').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < mainRect.bottom - 50) el.classList.add('vis');
  });
}

/* ── HOME FLOATING PARTICLES ──────────────────── */
(function spawnHomeParticles() {
  const container = document.getElementById('homeParticles');
  if (!container) return;

  // Inject keyframes
  const s = document.createElement('style');
  s.textContent = `
    @keyframes hFloat {
      0%   { opacity: 0; transform: translateY(100vh) scale(.5); }
      8%   { opacity: .35; }
      92%  { opacity: .07; }
      100% { transform: translateY(-8vh) scale(1.1); opacity: 0; }
    }`;
  document.head.appendChild(s);

  const colors = [
    'rgba(212,160,23,.3)',
    'rgba(232,150,12,.22)',
    'rgba(255,210,51,.2)',
    'rgba(224,124,90,.15)',
    'rgba(255,240,180,.18)',
  ];

  for (let i = 0; i < 32; i++) {
    const p   = document.createElement('div');
    const sz  = 2 + Math.random() * 5;
    const dur = 7 + Math.random() * 10;
    const del = Math.random() * 9;
    const lft = Math.random() * 70; // keep to left/mid area
    Object.assign(p.style, {
      position:         'absolute',
      borderRadius:     '50%',
      pointerEvents:    'none',
      width:            sz + 'px',
      height:           sz + 'px',
      left:             lft + '%',
      background:       colors[Math.floor(Math.random() * colors.length)],
      animation:        `hFloat ${dur}s ${del}s linear infinite`,
      opacity:          '0',
    });
    container.appendChild(p);
  }
})();

/* ── HEAT PARTICLES (DEEP FRY) ─────────────────── */
(function spawnHeat() {
  const c = document.getElementById('heatP');
  if (!c) return;
  const colors = ['#D4A017','#E8960C','#E07C5A','#FFD233','#FF8000'];
  for (let i = 0; i < 26; i++) {
    const p  = document.createElement('div');
    const sz = 2 + Math.random() * 5;
    p.classList.add('hp');
    Object.assign(p.style, {
      left:              Math.random() * 100 + '%',
      width:             sz + 'px',
      height:            sz + 'px',
      background:        colors[Math.floor(Math.random() * colors.length)],
      animationDuration: (2.5 + Math.random() * 3) + 's',
      animationDelay:    (Math.random() * 4) + 's',
    });
    c.appendChild(p);
  }
})();

/* ── PLATING SHIMMER DOTS ──────────────────────── */
(function spawnShimmer() {
  const c = document.getElementById('platingShimmer');
  if (!c) return;
  for (let i = 0; i < 22; i++) {
    const d  = document.createElement('div');
    const sz = 2 + Math.random() * 4;
    d.classList.add('ps-dot');
    Object.assign(d.style, {
      position:          'absolute',
      left:              Math.random() * 100 + '%',
      top:               Math.random() * 100 + '%',
      width:             sz + 'px',
      height:            sz + 'px',
      background:        'var(--gold)',
      borderRadius:      '50%',
      animationDuration: (2 + Math.random() * 4) + 's',
      animationDelay:    (Math.random() * 5) + 's',
    });
    c.appendChild(d);
  }
})();

/* ── CAROUSEL (SOFT DOUGH) ─────────────────────── */
const slides = [
  { img: I.sd_act,    title: 'As a Director & Actor',  desc: 'My earliest experiments with storytelling. Directing and acting in school, learning how narratives shape emotions.' },
  { img: I.sd_upcycle,title: 'As an Upcycle Artist',   desc: 'Turning discarded materials into something beautiful. First taste of design thinking.' },
  { img: I.sd_art1,   title: 'Art Workshops',           desc: 'Exploring different art forms and mediums across creative workshops.' },
  { img: I.sd_art2,   title: 'Creative Experiments',   desc: 'From handmade crafts to mixed-media. Experiments in form, color, expression.' },
  { img: I.sd_art3,   title: 'Hands-on Making',        desc: 'The tactile joy of creating something with your own hands.' },
  { img: I.sd_arch,   title: 'Architecture',            desc: 'B.Arch at Anna University. Spatial design and how environments shape behavior.' },
  { img: I.sd_hist,   title: 'Preserving History',     desc: 'Documenting architectural heritage. Design carries cultural memory.' },
  { img: I.sam_char,  title: 'The Young Creative',     desc: 'Every curiosity and experiment with creativity became part of the mix.' },
];

let cHTML = '<div class="carousel" id="carousel"><div class="carousel-track" id="cTrack">';
slides.forEach(s => {
  cHTML += `<div class="carousel-slide">
    <img src="${s.img}" alt="${s.title}" onclick="lbox(this.src)">
    <div class="carousel-caption"><h4>${s.title}</h4><p>${s.desc}</p></div>
  </div>`;
});
cHTML += '</div><div class="carousel-nav"><button class="carousel-btn" id="cPrev">&#8249;</button><div class="carousel-dots" id="cDots">';
slides.forEach((_, i) => {
  cHTML += `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-i="${i}"></button>`;
});
cHTML += '</div><button class="carousel-btn" id="cNext">&#8250;</button></div></div>';
document.getElementById('sdImgs').innerHTML = cHTML;

let cIdx   = 0;
const cTrack = document.getElementById('cTrack');
let   cDots  = document.querySelectorAll('.carousel-dot');

function goSlide(i) {
  cIdx = ((i % slides.length) + slides.length) % slides.length;
  cTrack.style.transform = `translateX(-${cIdx * 100}%)`;
  cDots.forEach((d, j) => d.classList.toggle('active', j === cIdx));
}

document.getElementById('cPrev').onclick = () => { goSlide(cIdx - 1); resetAuto(); };
document.getElementById('cNext').onclick = () => { goSlide(cIdx + 1); resetAuto(); };
cDots.forEach(d => d.onclick = () => { goSlide(+d.dataset.i); resetAuto(); });

let cAuto = setInterval(() => goSlide(cIdx + 1), 4200);
function resetAuto() {
  clearInterval(cAuto);
  cAuto = setInterval(() => goSlide(cIdx + 1), 4200);
}
const carEl = document.getElementById('carousel');
carEl.addEventListener('mouseenter', () => clearInterval(cAuto));
carEl.addEventListener('mouseleave', () => { cAuto = setInterval(() => goSlide(cIdx + 1), 4200); });
let touchX = 0;
carEl.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
carEl.addEventListener('touchend', e => {
  const d = touchX - e.changedTouches[0].clientX;
  if (Math.abs(d) > 40) { goSlide(cIdx + (d > 0 ? 1 : -1)); resetAuto(); }
}, { passive: true });

/* ── FILLING CARDS ──────────────────────────────── */
document.getElementById('flCards').innerHTML = `
<div class="card" onclick="openM('piracy')">
  <img class="card-img" src="${I.thumb_piracy}" alt="">
  <div class="card-body">
    <span class="card-cat">Virtual Social Behaviour</span>
    <h3 class="card-t">Piracy in Telegram</h3>
    <p class="card-d">How social behaviours exist in virtual platforms and how the interface facilitates such behaviour</p>
    <div class="card-arr">Read more →</div>
  </div>
</div>
<div class="card" onclick="openM('behavior')">
  <img class="card-img" src="${I.thumb_behavior}" alt="">
  <div class="card-body">
    <span class="card-cat">Behavioural Design</span>
    <h3 class="card-t">Clean Hands Among Food Vendors</h3>
    <p class="card-d">Understanding and influencing hygiene behaviour through design interventions</p>
    <div class="card-arr">Read more →</div>
  </div>
</div>`;

/* ── DEEP FRY CARDS ─────────────────────────────── */
document.getElementById('dfCards').innerHTML = `
<div class="card" onclick="openM('service')">
  <img class="card-img" src="${I.thumb_service}" alt="">
  <div class="card-body">
    <span class="card-cat">Service Design</span>
    <h3 class="card-t">Empowering Student Decisions</h3>
    <p class="card-d">Designing a service ecosystem for clarity in decision-making</p>
    <div class="card-arr">Read more →</div>
  </div>
</div>
<div class="card" onclick="openM('shell')">
  <img class="card-img" src="${I.thumb_shell}" alt="">
  <div class="card-body">
    <span class="card-cat">User Research</span>
    <h3 class="card-t">UX Research at Shell</h3>
    <p class="card-d">Strengthening Service Design and UXR practices at enterprise scale</p>
    <div class="card-arr">Read more →</div>
  </div>
</div>
<div class="card" onclick="openM('wedding')">
  <img class="card-img" src="${I.thumb_wedding}" alt="">
  <div class="card-body">
    <span class="card-cat">UXR &amp; Service Design</span>
    <h3 class="card-t">Wedlink: Wedding Workforce</h3>
    <p class="card-d">Technology as a bridge for fair pay and dignity in Indian weddings</p>
    <div class="card-arr">Read more →</div>
  </div>
</div>`;

/* ── PROJECT DATA ────────────────────────────────── */
const P = {
  piracy: {
    cat:  'Virtual Social Behaviour',
    t:    'Piracy in Telegram',
    tags: ['Netnography','Autonetnography','Interviews','UX Strategies','UI Mockups'],
    hero: I.p5,
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
    cat:  'Behavioural Design',
    t:    'Clean Hand Practice Among Street Food Vendors',
    tags: ['Field Study','Behaviour Analysis','Change Canvas','Observations','Prototyping'],
    hero: I.b3,
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
    cat:  'Service Design',
    t:    'Empowering Students to Attain Clarity',
    tags: ['Service Design','Market Need Research','Service Blueprint','Prototyping','5W Analysis'],
    hero: I.s4,
    summary: 'How service design can reduce ambiguity, mental overload, and emotional conflict in decision-making. People don\'t lack options; they lack structure, reflection, and emotional grounding.',
    b: `<p><strong>Timeline:</strong> 4 weeks &nbsp;·&nbsp; <strong>Team:</strong> 3 members</p>
<img src="${I.s1}">
<h3>Overview</h3>
<p>People don't lack options. They lack structure, reflection, and emotional grounding.</p>
<h3>5W Method</h3>
<p>Final chosen need: "The need to become decisive."</p>
<img src="${I.s3}">
<h3>Understanding Decision Making</h3>
<blockquote>"Decision involving emotions and morality makes it difficult for me"</blockquote>
<blockquote>"I take decisions out of randomness when confusing and later regret"</blockquote>
<img src="${I.s2}">
<h3>What Was Designed?</h3>
<p>Service framework: guided sessions, cue cards, spatial design, reflective tools.</p>
<img src="${I.s4}">`
  },

  shell: {
    cat:  'User Research',
    t:    'UX Research at Shell',
    tags: ['Design Maturity','Stakeholder Interviews','Framework Development','Co-creation','DesignOps'],
    hero: I.sh2,
    summary: 'Strengthening the role of Service Design and User Research within Shell\'s Experience Design team by addressing gaps in design maturity. Through interviews with 7 seasoned practitioners, we identified key barriers and co-created solutions.',
    b: `<img src="${I.sh1}">
<h3>Research Plan</h3>
<p><strong>Participants:</strong> 7 Shell practitioners &nbsp;·&nbsp; <strong>Sessions:</strong> 1 hour each</p>
<img src="${I.sh2}">
<h3>Lack of Understanding of Design Value</h3>
<blockquote>"Stakeholders don't always understand the value we offer."</blockquote>
<img src="${I.sh3}"><img src="${I.sh4}">
<h3>Business Owns the Beginning</h3>
<blockquote>"Definition is completed by a SME and we're brought in after."</blockquote>
<img src="${I.sh5}">
<h3>Lack of Systematization</h3>
<blockquote>"I don't know where to go when I join a project."</blockquote>
<img src="${I.sh6}">
<h3>UX Theatre</h3>
<blockquote>"I am viewed as an add-on, a fire-fighter."</blockquote>
<img src="${I.sh7}">
<h3>Measuring Impact</h3>
<p>Design value dashboard linking UX metrics to business KPIs.</p>
<img src="${I.sh8}">`
  },

  wedding: {
    cat:  'UXR & Service Design',
    t:    'Wedlink: Reimagining the Wedding Workforce',
    tags: ['Ethnographic Research','Service Design','Platform Design','Stakeholder Mapping','Figma Prototype'],
    hero: I.wl1,
    summary: 'Designing a digital platform for fair work and payment transparency in the Indian wedding industry. With 8 to 10 million weddings annually, we mapped stakeholders, identified informal worker challenges, and proposed policy, technology, and industry solutions through Wedlink.',
    b: `<p><strong>Timeline:</strong> 8 weeks &nbsp;·&nbsp; <strong>Type:</strong> UXR &amp; Service Design</p>
<img src="${I.wl1}">
<h3>The Problem</h3>
<p>8 to 10 million weddings per year. Over 10 million people in the "wedding economy." Millions of informal workers face delayed payments, no contracts, poor working conditions, and no insurance.</p>
<img src="${I.wl2}">
<h3>Research</h3>
<p>Ethnographic field research across wedding venues, vendor interviews, and secondary data analysis of the unorganized wedding workforce.</p>
<img src="${I.wl3}">
<h3>Stakeholder Ecosystem</h3>
<p>Mapping the complex web of planners, vendors, labourers, clients, decorators, caterers, and middlemen that make up the Indian wedding industry.</p>
<img src="${I.wl4}">
<h3>Key Insights</h3>
<p>Workers lack bargaining power. Payment delays are systemic. No standardized contracts exist. Middlemen take disproportionate cuts.</p>
<img src="${I.wl5}">
<h3>Wedlink Platform</h3>
<p>A neutral digital ecosystem connecting, regulating, and protecting vendors and labourers through transparent job matching and digital escrow payments.</p>
<img src="${I.wl6}">
<h3>User Flows</h3>
<p>Designed end-to-end user journeys for vendors, labourers, and event planners including onboarding, job discovery, booking, payment, and rating systems.</p>
<img src="${I.wl7}">
<h3>UI Design</h3>
<p>High-fidelity screens designed in Figma covering the core experience: dashboard, job listings, payment tracking, reviews, and crew management.</p>
<img src="${I.wl8}"><img src="${I.wl9}">
<h3>Solution Framework</h3>
<p><strong>Policy:</strong> Social security, micro-insurance for gig workers.<br><strong>Technology:</strong> Digital escrow payments, job-matching platform.<br><strong>Industry:</strong> Vendor guilds, fair-work certification standards.</p>
<img src="${I.wl10}">
<h3>Impact</h3>
<p>Wedlink bridges the gap between informal labour and fair work practices, creating accountability and transparency in an industry worth hundreds of billions.</p>`
  },
};

/* ── MODAL ───────────────────────────────────────── */
const modalOv  = document.getElementById('modalOv');
const modalBox = document.getElementById('modalBox');
const mInner   = document.getElementById('mInner');
const mCat     = document.getElementById('mCat');

function openM(key) {
  const p = P[key];
  if (!p) return;
  mCat.textContent = p.cat;
  mInner.innerHTML = `
    <h3 class="m-title">${p.t}</h3>
    <div class="m-tags">${p.tags.map(t => `<span class="m-tag">${t}</span>`).join('')}</div>
    ${p.hero ? `<img class="m-hero-img" src="${p.hero}" alt="">` : ''}
    <div class="m-summary">${p.summary}</div>
    <button class="m-expand-btn" onclick="modalBox.classList.add('expanded');modalBox.scrollTop=0">View full project ↓</button>
    <div class="m-body">${p.b}</div>`;
  modalOv.classList.add('open');
  modalBox.classList.remove('expanded');
  modalBox.scrollTop = 0;
}
function closeM() { modalOv.classList.remove('open'); }
window.openM = openM;
window.closeM = closeM;

// Click outside modal box to close
modalOv.addEventListener('click', e => { if (e.target === modalOv) closeM(); });

// Expand button
document.getElementById('mExpBtn').onclick = () => {
  modalBox.classList.toggle('expanded');
  modalBox.scrollTop = 0;
};

// Click images in modal body to lightbox
document.addEventListener('click', e => {
  if (e.target.matches('.m-body img')) lbox(e.target.src);
});

/* ── ABOUT OVERLAY ───────────────────────────────── */
const aboutOv = document.getElementById('aboutOv');
const abWrap  = document.getElementById('abWrap');

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
      <a href="mailto:swetha@example.com" style="display:flex;align-items:center;gap:.4rem;color:var(--gold);font-size:.82rem;margin-bottom:.4rem;text-decoration:none">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        swetha@example.com
      </a>
      <a href="https://linkedin.com/in/swetha" target="_blank" style="display:flex;align-items:center;gap:.4rem;color:var(--gold);font-size:.82rem;text-decoration:none">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
        linkedin.com/in/swetha
      </a>
      <a href="Resume.pdf" download style="display:inline-flex;align-items:center;gap:.4rem;margin-top:1rem;background:var(--gold);color:var(--bg);font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:.6rem 1.2rem;border-radius:6px;text-decoration:none;transition:.3s">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download Resume
      </a>
    </div>
  </div>
</div>`;

function openAbout()  { aboutOv.classList.add('open'); }
function closeAbout() { aboutOv.classList.remove('open'); }

document.getElementById('abBtn').onclick   = openAbout;
document.getElementById('abClose').onclick = closeAbout;
aboutOv.addEventListener('click', e => { if (e.target === aboutOv) closeAbout(); });
const mobAbBtn = document.getElementById('mobAbBtn');
if (mobAbBtn) mobAbBtn.onclick = openAbout;

/* ── LIGHTBOX ────────────────────────────────────── */
function lbox(src) {
  const lb  = document.getElementById('lb');
  const img = document.getElementById('lbImg');
  img.src   = src;
  lb.classList.add('open');
}
window.lbox = lbox;
document.getElementById('lb').addEventListener('click', function () {
  this.classList.remove('open');
});

/* ── KEYBOARD SHORTCUTS ──────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeM();
    closeAbout();
    document.getElementById('lb').classList.remove('open');
  }
  if (modalOv.classList.contains('open') || aboutOv.classList.contains('open')) return;
  if (e.key === 'ArrowDown' || e.key === ' ') {
    e.preventDefault();
    if (curSec < sections.length - 1) go(curSec + 1);
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (curSec > 0) go(curSec - 1);
  }
});

/* ── 3D TILT on samosa visuals ───────────────────── */
document.querySelectorAll('.sam-tilt-wrap').forEach(wrap => {
  wrap.addEventListener('mousemove', e => {
    const r = wrap.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - .5) * 18;
    const y = ((e.clientY - r.top)  / r.height - .5) * 18;
    wrap.style.transform = `perspective(700px) rotateY(${x}deg) rotateX(${-y}deg)`;
  });
  wrap.addEventListener('mouseleave', () => {
    wrap.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg)';
  });
});

/* ── CUSTOM CURSOR ───────────────────────────────── */
(function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;
  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  (function animCursor() {
    cx += (mx - cx) * .14;
    cy += (my - cy) * .14;
    cursor.style.transform = `translate(${cx}px,${cy}px)`;
    requestAnimationFrame(animCursor);
  })();
})();

/* ── HOME SAMOSA PARALLAX ────────────────────────── */
(function homeParallax() {
  const sam = document.getElementById('homeSam');
  const sec = document.getElementById('s0');
  if (!sam || !sec) return;
  sec.addEventListener('mousemove', e => {
    const r = sec.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - .5) * 20;
    const y = ((e.clientY - r.top)  / r.height - .5) * 12;
    sam.style.transform = `translateY(var(--fy,0px)) rotate(-1deg) translate(${x}px,${y}px)`;
  });
  sec.addEventListener('mouseleave', () => {
    sam.style.transform = '';
  });
})();

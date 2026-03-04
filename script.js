/* ==============================================
   SWETHA M | MY SAMOSA STORY - script.js
   ============================================== */

/* -- IMAGE MAP -- */
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

  thumb_piracy: './images/Covers/piracy.png',
  thumb_behavior: './images/Covers/behavior.png',
  thumb_service: './images/Covers/noodle.png',
  thumb_shell: './images/Covers/shell.png',
  thumb_wedding: './images/Covers/wedlink.png',
};

/* -- DOM REFS -- */
const mainEl = document.getElementById('mainScroll');
const sections = document.querySelectorAll('.sec');
const tkNodes = document.querySelectorAll('.tk-node');
const tkSamosa = document.getElementById('tkSamosa');
const tkProg = document.getElementById('tkProg');
const trackerEl = document.getElementById('tracker');
let curSec = 0;

/* -- NAVIGATION -- */
function go(i) {
  if (sections[i]) mainEl.scrollTo({ top: sections[i].offsetTop, behavior: 'smooth' });
}
window.go = go;

/* -- TRACKER -- */
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

/* -- SCROLL HANDLER -- */
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

/* -- REVEAL -- */
function revealElements() {
  const mainRect = mainEl.getBoundingClientRect();
  document.querySelectorAll('.rv').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < mainRect.bottom - 50) el.classList.add('vis');
  });
}

/* -- HOME PARTICLES -- */
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

/* -- HEAT PARTICLES -- */
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

/* -- PLATING SHIMMER -- */
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

/* -- CAROUSEL (SOFT DOUGH) - tabs: Young Creative | Director & Actor | Upcycle Artist | Art Workshops --
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
  { img: I.sd_act, title: 'As a Director & Actor', desc: 'My earliest experiments with storytelling - directing and acting in school.' },
  { img: I.sd_upcycle, title: 'As a Director & Actor', desc: 'Learning how narratives shape emotions through performance and direction.' },
  { img: I.sd_art1, title: 'As an Upcycle Artist', desc: 'Turning discarded materials into something beautiful. First taste of design thinking.' },
  { img: I.sd_art2, title: 'As an Upcycle Artist', desc: 'From handmade crafts to mixed-media - experiments in form, colour, and expression.' },
  { img: I.sd_art3, title: 'As an Upcycle Artist', desc: 'Exploring different art forms and mediums across creative workshops.' },
  { img: I.sd_hist, title: 'As an Upcycle Artist', desc: 'Documenting heritage through a maker\'s lens - design carries cultural memory.' },
  { img: 'images/artworkshop.jpg', title: 'Art Workshops', desc: 'Taking art workshops and exploring creative expression across mediums.' },
  { img: 'images/artworkshop2.jpg', title: 'Art Workshops', desc: 'Art as a tool for connection - workshops with kids, communities, and beyond.' },
];

/* Tab definitions: label + first slide index for this group */
const sdTabs = [
  { label: 'Young Creative', start: 0 },
  { label: 'Director & Actor', start: 1 },
  { label: 'Upcycle Artist', start: 3 },
  { label: 'Art Workshops', start: 7 },
];

/* Build carousel HTML - tabs on top, then slides, then sidebar */
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
/* Vertical sidebar: ? | dots | ? | pause */
cHTML += '<div class="carousel-sidebar"><button class="carousel-btn" id="cPrev">&#8592;</button><div class="carousel-dots" id="cDots">';
slides.forEach((_, i) => {
  cHTML += `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-i="${i}"></button>`;
});
cHTML += '</div><button class="carousel-btn" id="cNext">&#8594;</button><button class="carousel-btn carousel-pause-btn" id="cPause" title="Pause / Play">?</button></div>';
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
  document.getElementById('cPause').textContent = cPaused ? '?' : '?';
  if (cPaused) clearInterval(cAuto); else resetAuto();
};
cDots.forEach(d => d.onclick = () => { goSlide(+d.dataset.i); resetAuto(); });

/* Tab click ? jump to group start */
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

/* -- ARCHITECTURE CAROUSEL -- */
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


/* -- FILLING CARDS -- */
document.getElementById('flCards').innerHTML = `
<div class="card" onclick="openM('piracy')">
  <img class="card-img" src="${I.thumb_piracy}" alt="">
  <div class="card-body">
    <div class="card-logo-row"><span class="card-logo-placeholder">NID Gandhinagar</span></div>
    <span class="card-cat">Virtual Social Behaviour</span>
    <h3 class="card-t">Piracy the Robinhood of <br>modern era ?</h3>
    <p class="card-d">Social behaviours online and how interfaces trigger or facilitate them</p>
    <div class="card-arr">Read more ?</div>
  </div>
</div>
<div class="card" onclick="openM('behavior')">
  <img class="card-img" src="${I.thumb_behavior}" alt="">
  <div class="card-body">
    <div class="card-logo-row"><span class="card-logo-placeholder">NID Gandhinagar</span></div>
    <span class="card-cat">Behavioural Design</span>
    <h3 class="card-t">Clean hands among food vendors</h3>
    <p class="card-d">Understanding and influencing hygiene behaviour through design interventions</p>
    <div class="card-arr">Read more ?</div>
  </div>
</div>`;

/* -- DEEP FRY CARDS -- */
document.getElementById('dfCards').innerHTML = `
<div class="card" onclick="openM('service')">
  <img class="card-img" src="${I.thumb_service}" alt="">
  <div class="card-body">
    <div class="card-logo-row"><span class="card-logo-placeholder">NID Gandhinagar</span></div>
    <span class="card-cat">Service Design</span>
    <h3 class="card-t">Empowering students in informed decision making</h3>
    <p class="card-d">Designing a service ecosystem for clarity in decision-making</p>
    <div class="card-arr">Read more ?</div>
  </div>
</div>
<div class="card" onclick="openM('shell')">
  <img class="card-img" src="${I.thumb_shell}" alt="">
  <div class="card-body">
    <div class="card-logo-row"><span class="card-logo-placeholder">Shell</span></div>
    <span class="card-cat">User research and UX design</span>
    <h3 class="card-t">Improving UXR & Service design practice in Shell.</h3>
    <p class="card-d">Strengthening Service Design and UXR practices at<br> enterprise scale for sustainable impact</p>
    <div class="card-arr">Read more ?</div>
  </div>
</div>
<div class="card" onclick="openM('wedding')">
  <img class="card-img" src="${I.thumb_wedding}" alt="">
  <div class="card-body">
    <div class="card-logo-row"><span class="card-logo-placeholder">Life in frame</span></div>
    <span class="card-cat">User research and UX design</span>
    <h3 class="card-t">Wedlink: Wedding Workforce</h3>
    <p class="card-d">Technology as a bridge for fair pay and dignity in Indian weddings</p>
    <div class="card-arr">Read more ?</div>
  </div>
</div>`;

/* -- PROJECT DATA -- */
const P = {
  piracy: {
    cat: 'Virtual Social Behaviour',
    t: 'Piracy in Telegram',
    logo: 'NID Gandhinagar',
    tags: ['Netnography', 'Autonetnography', 'Interviews', 'UX Strategies', 'UI Mockups'],
    page: 'https://swetrials98.wixsite.com/samosa-story/piracy',
    b: `<img src="./images/projectmodal/piracy.png">
<h3>What was this project about?</h3>
<p>Understanding digital piracy as a human behavior shaped by platform design, social norms, and access to content.</p>
<h3>What was the core research focus?</h3>
<p>To explore why users engage in piracy, how they justify it, and how online environments influence this behavior.</p>
<h3>What research methods were used?</h3>
<p>Netnography, auto-ethnography, and interviews to study digital communities, peer-to-peer networks, and content-sharing platforms.</p>
<h3>What key problem was identified?</h3>
<p>Piracy is often normalized and rationalized due to anonymity, ease of sharing, community culture, and perceived inaccessibility or high cost of content.</p>
<h3>What behavioral insights emerged?</h3>
<p>Users frequently view piracy as “harmless access” rather than theft, creating a moral disconnect between consumption and the impact on creators.</p>
<h3>What design opportunity was identified?</h3>
<p>To intervene at the platform level by redesigning cues, feedback systems, and awareness mechanisms that influence ethical decision-making.</p>
<h3>What solutions were proposed?</h3>
<p>Interface nudges, watermarking, verification systems, reporting tools, and transparency mechanisms to make consequences more visible and reduce opportunistic piracy.</p>
<h3>What is the intended impact?</h3>
<p>To shift user perception and behavior from normalized piracy toward responsible digital consumption through design-led, systemic interventions rather than purely punitive measures.</p>`
  },

  behavior: {
    cat: 'Behavioural Design',
    t: 'Clean Hand Practice Among Street Food Vendors',
    logo: 'NID Gandhinagar',
    tags: ['Field Study', 'Behaviour Analysis', 'Change Canvas', 'Observations', 'Prototyping'],
    page: 'https://swetrials98.wixsite.com/samosa-story/copy-of-human-behavior',
    b: `<img src="./images/projectmodal/behavior.png">
<h3>What was this project about?</h3>
<p>Understanding why street food vendors do not consistently practice clean hand hygiene despite being aware of health risks.</p>
<h3>What was the core research focus?</h3>
<p>To study real-world hygiene behaviors in street food ecosystems and identify what influences vendors’ everyday actions.</p>
<h3>What research methods were used?</h3>
<p>Field observations, interviews, and secondary research to examine behavioral patterns, contextual constraints, and social norms.</p>
<h3>What key problem was identified?</h3>
<p>Hygiene lapses are not caused by ignorance alone - they are driven by time pressure, customer demand, economic priorities, lack of infrastructure, and normalized unsafe routines.</p>
<h3>What behavioral insights emerged?</h3>
<p>Vendors prioritize speed and income over sanitation, while customers often overlook hygiene for taste and convenience - reinforcing existing habits.</p>
<h3>What opportunity did the research uncover?</h3>
<p>To design interventions that make hygienic behavior easier, more visible, and socially reinforced rather than effortful or punitive.</p>
<h3>What was the proposed direction?</h3>
<p>Develop low-cost, scalable, workflow-friendly solutions that integrate seamlessly into vendors’ daily routines.</p>
<h3>What is the intended impact?</h3>
<p>To enable sustainable behavior change in street food ecosystems by aligning hygiene practices with vendors’ practical and economic realities.</p>`
  },

  service: {
    cat: 'Service Design',
    t: 'Noodle: Empowering Students to Attain Clarity',
    logo: 'NID Gandhinagar',
    tags: ['Service Design', 'Market Need Research', 'Service Blueprint', 'Prototyping', '5W Analysis'],
    page: 'https://swetrials98.wixsite.com/samosa-story/service-design',
    b: `<img src="./images/projectmodal/noodle.png">
<h3>1. What question did we begin with?</h3>
<p>We began with a simple yet powerful question:</p>
<p><strong>What is an unsaid human need that, when addressed, can create meaningful impact?</strong></p>
<p>Instead of assuming answers, we chose to listen.</p>
<h3>2. How did we explore this unsaid need?</h3>
<p>We used participatory and observational methods:</p>
<ul>
<li>Placed a <strong>Wish Box</strong> in public spaces for anonymous responses</li>
<li>Created an <strong>interactive wall</strong> with a thought-provoking question</li>
<li>Conducted <strong>informal interviews</strong></li>
<li>Facilitated <strong>brainstorming sessions</strong></li>
<li>Observed emerging <strong>patterns</strong></li>
</ul>
<p>From these interactions, <strong>six strong needs</strong> surfaced.</p>
<h3>3. How did we evaluate these needs?</h3>
<p>We applied the <strong>5W Method</strong>:</p>
<ul>
<li><strong>Who</strong> is affected?</li>
<li><strong>What</strong> exactly is the need?</li>
<li><strong>Why</strong> does it matter?</li>
<li><strong>When</strong> does it surface most strongly?</li>
<li><strong>Where</strong> does it occur?</li>
</ul>
<p>Through this critical evaluation, one need stood out - urgent, universal, and deeply human:</p>
<p><strong>The Need to Become Decisive</strong></p>
<h3>4. Why is decisiveness such an important need?</h3>
<p>Despite technological and intellectual evolution, humans continue to struggle with:</p>
<ul>
<li>Ambiguity</li>
<li>Overthinking</li>
<li>Emotional conflict</li>
<li>Fear of consequences</li>
</ul>
<p>Decisions often involve tension between:</p>
<ul>
<li>Morality vs practicality</li>
<li>Career vs passion</li>
<li>Stability vs risk</li>
<li>Logic vs emotion</li>
</ul>
<p>Indecision doesn’t just delay outcomes.<br>It creates <strong>anxiety, self-doubt, and emotional exhaustion.</strong></p>
<h3>5. What was the core challenge?</h3>
<p>Decision-making is vast.</p>
<p>How do you design a solution that works across:</p>
<ul>
<li>Career choices</li>
<li>Relationship decisions</li>
<li>Financial risks</li>
<li>Identity shifts</li>
</ul>
<p>We needed to find the structure beneath all decisions.</p>
<h3>6. What pattern did we discover?</h3>
<p>By analysing successful and failed decisions, we observed:</p>
<p>Every decision silently interacts with:</p>
<ul>
<li><strong>Past</strong> - What do I already have?</li>
<li><strong>Present</strong> - What is influencing me right now?</li>
<li><strong>Future</strong> - What could happen next?</li>
</ul>
<p>This led us to identify three consistent anchors in strong decisions.</p>
<h3>7. What is the Triangle of Clarity?</h3>
<p>We distilled our insight into a framework called:</p>
<h4>The Triangle of Clarity</h4>
<p>Every strong decision rests on three anchors:</p>
<ol>
<li><strong>Drivers</strong> - What is pushing or pulling me toward this choice?</li>
<li><strong>Information</strong> - What do I know? What am I assuming?</li>
<li><strong>Consequences</strong> - What are the best and worst outcomes?</li>
</ol>
<p>We translated this into a guided, conversational Q&amp;A tool to help individuals navigate clarity.</p>
<h3>8. Did the framework work?</h3>
<p>Partially.</p>
<p>When tested, participants found it insightful, but too broad.</p>
<p>It lacked situational depth.</p>
<p>This failure revealed a key insight:</p>
<p>If confusion is contextual, clarity must be contextual too.</p>
<h3>9. Where does uncertainty feel most intense?</h3>
<p>We asked:</p>
<p>Where does decision anxiety peak?</p>
<p>One space stood out:</p>
<h4>Final-year college students.</h4>
<p>Students who are:</p>
<ul>
<li>Dreaming of startups</li>
<li>Considering corporate jobs</li>
<li>Torn between passion and security</li>
<li>Balancing ambition and fear</li>
</ul>
<p>This wasn’t just a career decision.<br>It was an <strong>identity decision.</strong></p>
<h3>10. What solution emerged?</h3>
<p>We redesigned the framework specifically for this scenario.</p>
<p>We made it:</p>
<ul>
<li>Sharper</li>
<li>Relatable</li>
<li>Guided</li>
<li>Context-specific</li>
</ul>
<p>We named it:</p>
<h3>Noodle</h3>
<p>Because a confused mind feels like tangled noodles, twisted and overlapping.</p>
<p>Noodle doesn’t tell students what to choose.<br>It helps them untangle their thoughts so they can choose for themselves.</p>
<h3>11. What impact are we aiming for?</h3>
<p>Decisiveness is not about speed.</p>
<p>It is about <strong>conscious clarity</strong>.</p>
<p>By moving from <b>A broad human need</b>:</p>
<ul>
<li> To a structured clarity framework</li>
<li> To a contextual, tailored solution</li>
</ul>
<p>We transformed confusion into a navigable process.</p>
<p>Because real impact doesn’t always come from giving answers.</p>
<p>Sometimes, it comes from helping people ask better questions.</p>`
  },

  shell: {
    cat: 'User research and UX design',
    t: 'Shell Research & Service Design Hub',
    logo: 'Shell',
    tags: ['Design Maturity', 'Stakeholder Interviews', 'Framework Development', 'Co-creation', 'DesignOps'],
    page: 'https://swetrials98.wixsite.com/samosa-story/shell-research-service-design-hub',
    b: `<img src="./images/projectmodal/shell.png">
<h3>1. What sparked the creation of the Shell Research & Service Design Hub?</h3>
<p>The initiative originated from an internal <strong>Design Maturity Survey</strong> conducted by Shell’s Experience Design (EXD) team.</p>
<p>The findings revealed a clear opportunity to strengthen:</p>
<ul>
<li>User Experience Research (UXR)</li>
<li>Service Design (SD)</li>
<li>Organisational understanding of design value</li>
</ul>
<p>The survey highlighted systemic gaps affecting consistency, credibility, and strategic impact.</p>
<h3>2. What was the vision behind the initiative?</h3>
<p>The vision was to enhance the <strong>effectiveness, consistency, and strategic influence</strong> of UXR and Service Design across Shell.</p>
<p>Rather than solving isolated issues, the goal was to address systemic barriers preventing design from scaling as a mature organisational capability.</p>
<h3>3. How did you approach the discovery phase?</h3>
<p>To frame the problem space, we explored:</p>
<ul>
<li>What constitutes design maturity?</li>
<li>How do leading organisations institutionalise UXR and Service Design?</li>
<li>What governance models and operating structures enable scalable design practices?</li>
</ul>
<p>Simultaneously, we conducted in-depth interviews with experienced Service Designers and User Researchers across business units to understand ground realities.</p>
<h3>4. What were the key research objectives?</h3>
<p>We aimed to understand:</p>
<ul>
<li>Practitioner backgrounds and team structures</li>
<li>Common methodologies and frameworks</li>
<li>Best practices and learnings</li>
<li>Recurring challenges and organisational barriers</li>
<li>Tools, systems, and documentation practices</li>
</ul>
<p>This helped uncover both visible and unarticulated friction points.</p>
<h3>5. What key insights emerged from the research?</h3>
<p>The challenges identified were systemic and interconnected rather than isolated issues. Core friction points included:</p>
<ul>
<li>Limited understanding of design value at senior leadership levels</li>
<li>Socio-political filters leading to insight pushback</li>
<li>Business teams framing problems without research alignment</li>
<li>Project silos and lack of cross-functional visibility</li>
<li>Inconsistent documentation and systematisation</li>
<li>Perception of EXD as “The Auditor” and instances of “UX Theatre”</li>
<li>Difficulty in measuring and communicating impact</li>
</ul>
<p>These issues collectively weakened credibility and influence.</p>
<h3>6. What were the root causes behind these challenges?</h3>
<p>Through systems mapping and dependency analysis, two foundational root causes emerged:</p>
<ol>
<li>Lack of shared understanding of design value</li>
<li>Lack of systematisation and institutional memory</li>
</ol>
<p>These root causes created ripple effects across governance, collaboration, and impact measurement.</p>
<h3>7. What strategic intervention was identified?</h3>
<p>After evaluating feasibility and scalability, the most impactful solution identified was:</p>
<h4>Creation of a Centralised, Contextualised Playbook & Knowledge Library</h4>
<p>A dedicated platform tailored specifically to Shell’s ecosystem.</p>
<h3>8. What would this playbook include?</h3>
<p>The proposed Hub would embed:</p>
<ul>
<li>Shell-specific case studies</li>
<li>Proven UXR and Service Design frameworks</li>
<li>Templates and documentation standards</li>
<li>Best practices and learning artefacts</li>
<li>Governance guidelines</li>
<li>Impact storytelling examples</li>
</ul>
<p>This ensured relevance and contextual credibility.</p>
<h3>9. What problems was the solution designed to solve?</h3>
<p>The Hub aimed to:</p>
<ul>
<li>Institutionalise best practices</li>
<li>Improve research rigour and consistency</li>
<li>Increase leadership literacy around design value</li>
<li>Reduce duplication of effort</li>
<li>Enable knowledge retention and smoother handovers</li>
<li>Strengthen EXD’s credibility</li>
</ul>
<h3>10. What is the Shell Research & Service Design Hub?</h3>
<p>The outcome was the <strong>Shell Research & Service Design Hub</strong>, designed to function as:</p>
<ul>
<li>A playbook</li>
<li>A capability-building repository</li>
<li>A knowledge management system</li>
<li>A design maturity accelerator</li>
</ul>
<p>It serves both practitioners and leadership stakeholders.</p>
<h3>11. How was the solution validated?</h3>
<p>A working prototype of the Hub was developed and tested with practitioners.</p>
<p>Feedback highlighted:</p>
<ul>
<li>Strong practical utility</li>
<li>High contextual relevance</li>
<li>Improved potential for cross-team alignment</li>
</ul>
<p>Constructive inputs on navigation, UI clarity, and information architecture were incorporated into refinements.</p>
<h3>12. What is the long-term impact potential?</h3>
<p>The Hub repositions EXD from being perceived as an execution layer to a <strong>strategic enabler</strong>.</p>
<p>By improving systematisation and strengthening the articulation of design value, the Hub contributes to:</p>
<ul>
<li>Long-term design maturity growth</li>
<li>Stronger organisational alignment</li>
<li>Greater credibility and influence of UXR & Service Design</li>
</ul>
<h3>13. What is the core transformation achieved?</h3>
<p>The project moved from diagnosing maturity gaps to building a scalable organisational infrastructure.</p>
<p>Instead of addressing symptoms, it targeted foundational levers -<br><strong>design literacy and systematisation</strong> - enabling sustainable impact.</p>`
  },

  wedding: {
    cat: 'User research and UX design',
    t: 'Wedlink: Reimagining the Wedding Workforce',
    logo: 'Life in frame',
    tags: ['Ethnographic Research', 'Service Design', 'Platform Design', 'Stakeholder Mapping', 'Figma Prototype'],
    page: 'https://swetrials98.wixsite.com/samosa-story/event-design',
    b: `<img src="./images/projectmodal/wedlink.png">
<h3>1. What problem does this project explore?</h3>
<p>India’s wedding industry is a <strong>billion-dollar ecosystem</strong>, known for glamour and grandeur.</p>
<p>But behind the celebration lies an invisible workforce -<br>over <strong>3 million people</strong> who power the industry.</p>
<p>This includes:</p>
<ul>
<li>Decor teams</li>
<li>Caterers</li>
<li>Photographers & assistants</li>
<li>Makeup artists</li>
<li>Light & sound technicians</li>
<li>Drivers</li>
<li>Loaders & setup crews</li>
<li>Freelancers & gig workers</li>
</ul>
<p>The industry is not just about luxury.<br>It is a <strong>livelihood engine</strong>.</p>
<h3>2. What is the structural reality of this industry?</h3>
<p>The Indian wedding industry is:</p>
<ul>
<li>Highly seasonal</li>
<li>Project-based</li>
<li>Deadline-driven</li>
<li>Informally structured</li>
</ul>
<p>Teams are assembled per event.<br>When the season ends, so does the work.</p>
<p>During off-season months, workers:</p>
<ul>
<li>Return to hometowns</li>
<li>Take daily wage labour</li>
<li>Shift to unrelated odd jobs</li>
<li>Survive without income continuity</li>
</ul>
<p>This instability creates <strong>fear</strong>.<br>And fear creates <strong>power imbalance</strong>.</p>
<h3>3. Who are the most vulnerable in this ecosystem?</h3>
<p>The most vulnerable are support workers:</p>
<ul>
<li>Assistants</li>
<li>Helpers</li>
<li>Loaders</li>
<li>Junior technicians</li>
</ul>
<p>They often:</p>
<ul>
<li>Do not negotiate rates</li>
<li>Have no written contracts</li>
<li>Experience delayed payments</li>
<li>Lack formal grievance systems</li>
</ul>
<p>Their dependency makes exploitation easier.</p>
<h3>4. How was this issue researched?</h3>
<p>Through contextual inquiry across multiple domains of the wedding ecosystem, including:</p>
<ul>
<li>Informal interviews</li>
<li>Field immersion</li>
<li>Conversations with workers and vendors</li>
</ul>
<p>The goal was to understand lived realities - not assumptions.</p>
<h3>5. What key insights emerged from the field research?</h3>
<h4>1. Income Instability & Delayed Payments</h4>
<ul>
<li>Payments frequently delayed</li>
<li>No written agreements</li>
<li>Earnings dependent entirely on season</li>
<li>No digital income records</li>
</ul>
<p>Financial unpredictability is normalised.</p>
<h4>2. Lack of Autonomy, Respect & Dignity</h4>
<ul>
<li>Workers seen as replaceable</li>
<li>Long hours without acknowledgment</li>
<li>No voice in decisions</li>
<li>No safe way to question unfair treatment</li>
</ul>
<p>Delivery is prioritised over dignity.</p>
<h4>3. Basic Human Needs Are Overlooked</h4>
<ul>
<li>No proper rest areas</li>
<li>Unstructured meal arrangements</li>
<li>Lack of safety measures</li>
<li>No insurance or emergency support</li>
</ul>
<p>Worker welfare is treated as optional.</p>
<h4>4. Informality Is Structural - Not Accidental</h4>
<p>This is not individual misconduct.<br>It is systemic.</p>
<ul>
<li>No contracts</li>
<li>No payroll structures</li>
<li>No formal hiring systems</li>
<li>No dispute redressal mechanisms</li>
</ul>
<p>The system runs on trust, relationships, and fear.</p>
<h4>5. No Social Safety Net</h4>
<p>Most workers lack:</p>
<ul>
<li>Provident Fund (PF)</li>
<li>Insurance</li>
<li>Savings buffers</li>
<li>Documented work history</li>
</ul>
<p>When season ends, stability ends.</p>
<h3>6. What intervention was proposed?</h3>
<p>To address these systemic gaps, a digital platform was conceptualised:</p>
<h3>Wedlink</h3>
<p>A structured, accountability-driven gig platform for the wedding workforce.</p>
<h3>7. What does Wedlink do?</h3>
<h4>1. Job Discovery Platform</h4>
<ul>
<li>Vendors post verified job listings</li>
<li>Workers apply transparently</li>
<li>Hiring becomes structured, not relationship-dependent</li>
</ul>
<h4>2. Escrow-Based Payment Assurance</h4>
<ul>
<li>Vendors deposit payment in advance</li>
<li>Funds are securely held</li>
<li>Payment released upon work completion</li>
</ul>
<p>This ensures timely payouts and reduces financial exploitation.</p>
<h4>3. Digital Work History</h4>
<p>Workers build:</p>
<ul>
<li>Verified job records</li>
<li>Ratings & reviews</li>
<li>Skill tags</li>
<li>Experience documentation</li>
</ul>
<p>This increases credibility and bargaining power.</p>
<h4>4. Dispute Resolution & Helpline</h4>
<p>A structured support system for:</p>
<ul>
<li>Payment disputes</li>
<li>Work condition complaints</li>
<li>Harassment reporting</li>
</ul>
<p>Support shifts from informal negotiation to institutional protection.</p>
<h3>8. What systemic shift does Wedlink aim to create?</h3>
<p>Wedlink aims to move the industry:</p>
<ul>
<li>Informal hiring to Structured gig marketplace</li>
<li>Verbal agreements to Escrow-backed contracts</li>
<li>Invisible labour to Recognised professionals</li>
<li>Fear-driven loyalty to Platform-based trust</li>
<li>Exploitation to Accountability</li>
</ul>
<h3>9. What is the larger impact vision?</h3>
<p>Wedlink is not just a hiring platform.</p>
<p>It is an attempt to:</p>
<ul>
<li>Bring dignity to invisible labour</li>
<li>Create income continuity</li>
<li>Introduce financial transparency</li>
<li>Formalise an informal ecosystem</li>
<li>Build accountability without removing flexibility</li>
</ul>
<p>The goal is to strengthen the <strong>invisible spine</strong> of India’s wedding economy -<br>by giving workers visibility, structure, and security.</p>`
  },

};

/* -- MODAL -- */
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
    ${p.b ? `<div class="m-body">${p.b}</div>` : ''}
    ${p.page ? `<a class="mh-view-btn inline-view-btn" href="${p.page}" target="_blank" rel="noopener noreferrer">View full project details</a>` : ''}
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

/* -- ABOUT OVERLAY -- */
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

<!--
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
-->

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

/* -- LIGHTBOX -- */
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

/* -- KEYBOARD SHORTCUTS -- */
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

/* -- 3D TILT on samosa visuals -- */
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

/* -- CUSTOM CURSOR -- */
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

/* -- HOME SAMOSA PARALLAX -- */
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

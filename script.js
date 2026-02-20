// ═══ IMAGE URLS ═══
const I={
sd_act:'images/0f68d0_4f166f852c484.jpg',
sd_upcycle:'images/0f68d0_b00e0015156c4.jpg',
sd_art1:'images/0f68d0_1f5c8ab1c0af4.png',
sd_art2:'images/0f68d0_8585c661723e4.png',
sd_art3:'images/0f68d0_9b3b79ad881e4.png',
sd_arch:'images/2e8212_7d30ad38443c4.png',
sd_hist:'images/0f68d0_9a19b4b3597c4.png',
sd_tall:'images/0f68d0_3be4095896e64.png',
fl_piracy:'images/0f68d0_6968ba6cda3d4.png',
fl_beh:'images/0f68d0_8ff332ba47ae4.png',
df_svc:'images/0f68d0_a8eef99540764.png',
df_shell:'images/0f68d0_440e204d58434.png',
df_wed:'images/0f68d0_a8eef99540764.png',
p1:'images/2e8212_9256175e51824.jpg',
p2:'images/2e8212_212f62f77a854.png',
p3:'images/2e8212_ac7a2a82f41a4.png',
p4:'images/2e8212_e85f1a1a78714.png',
p5:'images/2e8212_ef31311e7f144.png',
p6:'images/2e8212_9ccbd8b6be9a4.png',
p7:'images/2e8212_e628b22cd9de4.png',
p8:'images/2e8212_345a09e86a6c4.png',
p9:'images/2e8212_4173cf4f6dfd4.png',
p10:'images/2e8212_660a8aa2be5d4.png',
p11:'images/2e8212_c318a8522a844.png',
p12:'images/2e8212_cce9c56fd2724.png',
p13:'images/2e8212_7a4947e7b0384.png',
b1:'images/2e8212_9fc07fd6d23d4.png',
b2:'images/2e8212_bc9b0c4cdcaf4.jpg',
b3:'images/2e8212_c8f3e980d4464.jpg',
b4:'images/2e8212_8e2a40c0edf14.png',
b5:'images/2e8212_6b59a382081e4.png',
b6:'images/2e8212_14efc33294224.png',
s1:'images/2e8212_1a508fff37624.jpg',
s2:'images/2e8212_31bf32d31b714.png',
s3:'images/2e8212_f3728c38a23c4.jpg',
s4:'images/2e8212_e3fa461f1d984.png',
sh1:'images/2e8212_0e00b78176414.png',
sh2:'images/2e8212_088a9f9eae374.png',
sh3:'images/0f68d0_0597275aef914.png',
sh4:'images/0f68d0_75108a3346fc4.png',
sh5:'images/2e8212_31eb43138e6a4.png',
sh6:'images/0f68d0_f7f65d1da6964.png',
sh7:'images/2e8212_90cae88e15474.png',
sh8:'images/2e8212_947f27eabaa44.png',
e1:'images/2e8212_838c236df99c4.png',
e2:'images/0f68d0_efd9e87be3b14.jpg',
e3:'images/2e8212_e0df3804d4ae4.png',
e4:'images/2e8212_2d752c00b6944.png',
e5:'images/2e8212_c784b1d2b7b54.jpg',
e6:'images/0f68d0_e17c4f97d0454.jpg',
e7:'images/2e8212_53ca99d4c35b44.png',
e8:'images/2e8212_1f4842d3c30c4.jpg',
ab1:'images/2e8212_908a7d3e2f624.jpg',
ab2:'images/0f68d0_86f4cf1546044.jpg',
ab3:'images/0f68d0_afacc9e55f914.jpg',
ab4:'images/0f68d0_6887ae8c95214.jpg',
ab5:'images/2e8212_a2c9b63659094.jpg',
ab6:'images/0f68d0_e8e4bcbe54ea4.jpg',
ab7:'images/2e8212_1241dcf1f3104.png',
ab8:'images/2e8212_65286c01acaf4.png',
};

// ═══ CAROUSEL DATA ═══
const slides = [
  {img: I.sd_act, title: 'As a Director & Actor', desc: 'My earliest experiments with storytelling — directing and acting in school productions, learning how narratives shape emotions.'},
  {img: I.sd_upcycle, title: 'As an Upcycle Artist', desc: 'Turning discarded materials into something beautiful. This was my first taste of design thinking — seeing potential where others saw waste.'},
  {img: I.sd_art1, title: 'Art Workshops', desc: 'Exploring different art forms and mediums — each workshop added a new texture to my creative foundation.'},
  {img: I.sd_art2, title: 'Creative Experiments', desc: 'From handmade crafts to mixed-media projects, every piece was an experiment in understanding form, color, and expression.'},
  {img: I.sd_art3, title: 'Hands-on Making', desc: 'Learning by doing — the tactile joy of creating something with your own hands never gets old.'},
  {img: I.sd_arch, title: 'Architectural Journey', desc: 'B.Arch at Anna University opened my eyes to spatial design, structure, and how environments shape human behavior.'},
  {img: I.sd_hist, title: 'Preserving History', desc: 'Documenting and preserving architectural heritage — understanding that design carries cultural memory and identity.'},
];

// Build carousel HTML
let carouselHTML = `<div class="carousel" id="carousel">
  <div class="carousel-track" id="cTrack">`;
slides.forEach((s, i) => {
  carouselHTML += `<div class="carousel-slide">
    <img src="${s.img}" alt="${s.title}" onclick="lbox(this.src)">
    <div class="carousel-caption"><h4>${s.title}</h4><p>${s.desc}</p></div>
  </div>`;
});
carouselHTML += `</div><div class="carousel-nav">
  <button class="carousel-btn" id="cPrev">‹</button>
  <div class="carousel-dots" id="cDots">`;
slides.forEach((_, i) => {
  carouselHTML += `<button class="carousel-dot${i===0?' active':''}" data-i="${i}"></button>`;
});
carouselHTML += `</div><button class="carousel-btn" id="cNext">›</button></div></div>`;

document.getElementById('sdImgs').innerHTML = carouselHTML;

// Carousel logic
let cIdx = 0;
const cTrack = document.getElementById('cTrack');
const cDots = document.querySelectorAll('.carousel-dot');

function goSlide(i) {
  cIdx = i;
  if (cIdx < 0) cIdx = slides.length - 1;
  if (cIdx >= slides.length) cIdx = 0;
  cTrack.style.transform = `translateX(-${cIdx * 100}%)`;
  cDots.forEach((d, j) => d.classList.toggle('active', j === cIdx));
}

document.getElementById('cPrev').addEventListener('click', () => goSlide(cIdx - 1));
document.getElementById('cNext').addEventListener('click', () => goSlide(cIdx + 1));
cDots.forEach(d => d.addEventListener('click', () => goSlide(+d.dataset.i)));

// Auto-advance carousel
let cAuto = setInterval(() => goSlide(cIdx + 1), 4500);
document.getElementById('carousel').addEventListener('mouseenter', () => clearInterval(cAuto));
document.getElementById('carousel').addEventListener('mouseleave', () => { cAuto = setInterval(() => goSlide(cIdx + 1), 4500); });

// ═══ POPULATE CARDS ═══
document.getElementById('flCards').innerHTML = `
<div class="card" onclick="openM('piracy')"><img class="card-img" src="${I.fl_piracy}"><div class="card-body"><span class="card-cat">Virtual Social Behaviour</span><h3 class="card-t">Piracy in Telegram</h3><p class="card-d">How social behaviours exist in virtual platforms and how the interface facilitates such behaviour</p><div class="card-arr">→ View project</div></div></div>
<div class="card" onclick="openM('behavior')"><img class="card-img" src="${I.fl_beh}"><div class="card-body"><span class="card-cat">Behavioural Design</span><h3 class="card-t">Clean Hands Among Food Vendors</h3><p class="card-d">Understanding and influencing hygiene behaviour through design interventions</p><div class="card-arr">→ View project</div></div></div>`;

document.getElementById('dfCards').innerHTML = `
<div class="card" onclick="openM('service')"><img class="card-img" src="${I.df_svc}"><div class="card-body"><span class="card-cat">Service Design</span><h3 class="card-t">Empowering Student Decisions</h3><p class="card-d">Designing a service ecosystem for clarity in decision-making</p><div class="card-arr">→ View project</div></div></div>
<div class="card" onclick="openM('shell')"><img class="card-img" src="${I.df_shell}"><div class="card-body"><span class="card-cat">User Research</span><h3 class="card-t">UX Research at Shell</h3><p class="card-d">Strengthening Service Design & UXR practices at enterprise scale</p><div class="card-arr">→ View project</div></div></div>
<div class="card" onclick="openM('wedding')"><img class="card-img" src="${I.df_wed}"><div class="card-body"><span class="card-cat">UXR & Service Design</span><h3 class="card-t">Wedding Workforce</h3><p class="card-d">Technology as a bridge for fair pay and dignity in Indian weddings</p><div class="card-arr">→ View project</div></div></div>`;

// ═══ PROJECT DATA ═══
const P={
piracy:{cat:'Virtual Social Behaviour',t:'Piracy in Telegram — Robinhood of the Modern Era?',tags:['Netnography','Autonetnography','Interviews','UX Strategies','UI Mockups','Platform Research'],b:`<p>In the fast-paced world of technological advancements, this project aims to look into how human social behaviours exist in a virtual platform and how the interface triggers or facilitates such behaviour.</p><p><strong>Timeline:</strong> 4 weeks &nbsp;|&nbsp; <strong>Type:</strong> Individual project</p><p><strong>Primary research:</strong> Netnography, Autonetnography, Interviews<br><strong>Secondary research:</strong> Articles, Research papers, Documentaries</p><img src="${I.p1}"><h3>What Rules the World Today?</h3><p>Information/content. This information is often gatekept and is considered as Intellectual Property belonging to a person/organization/entity. This Gatekeeping of information and monetizing it, makes it inaccessible to all classes of people.</p><img src="${I.p2}"><h3>Triangle of Digital Responsibility</h3><p>Piracy as acceptable and normative behavior. Blurred line between ethical and unethical download. The downloading culture: create and distribute content, consume, share and copy — while IP is gatekept at every level.</p><img src="${I.p3}"><h3>Two Schools of Thought</h3><p><strong>Known/accepted deviancy:</strong> It isn't theft, it's mere duplication. Opened up multiple possibilities. Gateway for less fortunate people to access high end. Not a high impact crime when victims are larger organizations.</p><p><strong>Pain to creators:</strong> Eats away profits of the organization/creator. Get everything for free mindset.</p><img src="${I.p4}"><h3>Why Does One Indulge in Piracy?</h3><p><strong>Extrinsic Reward:</strong> Saving money, Try and buy, Perceived utility and value, Owning and expanding collection.</p><p><strong>Intrinsic Reward:</strong> Excitement of getting something free, Fun & sense of achievement, Breaking the rule, Perceived ownership.</p><img src="${I.p5}"><h3>Why Telegram?</h3><p>Creation up to 50 public/private groups or channels per day. Unlimited members in a Channel. Can belong to 500+ resources. Up to 200k members in a group. Wide reach, free, stable and ad-free.</p><img src="${I.p6}"><h3>Piracy in Telegram</h3><blockquote>"How might we make users of Telegram more conscious of their choice to indulge in piracy and enable the platform to keep a stronger check on it?"</blockquote><img src="${I.p7}"><h3>Research Methodology & UX Strategies</h3><p>Analysis of existing UI, design interventions and their operationalization. Strategy to UI conversion and iterations.</p><img src="${I.p8}"><h3>Solutions</h3><p>Divide the mass, paralyze the spreading channels. Business model considerations around Telegram's revenue streams.</p><img src="${I.p9}"><img src="${I.p10}"><img src="${I.p11}"><img src="${I.p12}"><img src="${I.p13}">`},
behavior:{cat:'Behavioural Design',t:'Promoting Clean Hand Practice Among Street Food Vendors',tags:['Field Study','Behaviour Analysis','Change Canvas','Observations','Ideation','Prototyping'],b:`<p>The goal of behavioral design is to understand how people think, feel, and act in order to create designs that influence their behavior in a positive way.</p><p><strong>Timeline:</strong> 4 weeks &nbsp;|&nbsp; <strong>Team:</strong> Swetha, Disha, Pramoddini</p><img src="${I.b1}"><h3>Objectives & Scope</h3><p>To identify and implement behavior change in the context of street food. The study focuses on street food in Ahmedabad and Gandhinagar, India.</p><h3>Street Food: An Introduction</h3><p>Around 2.5 billion people worldwide consume street food. Many cities are known for their street food — it has become a crucial part of their identities.</p><img src="${I.b2}"><h3>Research Methodology (3 Phases)</h3><p><strong>Phase 1 — Research & Observations:</strong> Various street food markets visited multiple times to identify common patterns.</p><p><strong>Phase 2 — Identifying Target Behavior:</strong> Deviant behaviors identified, target behavior chosen.</p><p><strong>Phase 3 — Attempting to Change:</strong> Drivers understood, ideation techniques employed.</p><img src="${I.b3}"><h3>Field Study Observations</h3><p>General sense of ease in street food environments. Unsaid unity among vendors. Clear exhibition of cooking is both a crowd puller and pusher.</p><img src="${I.b4}"><h3>Identifying Deviant Behaviours</h3><p><strong>Core deviant behaviour:</strong> Compromised hygiene — both by vendors and customers. Closely linked: Compromised hygiene gives liberty for other deviancies.</p><img src="${I.b6}"><h3>Design Intervention & Prototyping</h3><p>Using the Behaviour Change Canvas framework, interventions made handwashing the path of least resistance.</p><img src="${I.b5}">`},
service:{cat:'Service Design',t:'Empowering Students to Attain Clarity While Taking Decisions',tags:['New Service Design','Market Need Research','Service Blueprint','Service Prototyping','Touchpoint','5W Analysis'],b:`<p>Understanding why people struggle with making clear decisions and how service design can help reduce ambiguity, mental overload, and emotional conflict.</p><p><strong>Timeline:</strong> 4 weeks &nbsp;|&nbsp; <strong>Team:</strong> 3 members</p><img src="${I.s1}"><h3>Overview</h3><p>People don't lack options — they lack structure, reflection, and emotional grounding while making decisions. Decision fatigue is driven by information overload, emotional ambivalence, and fear of consequences.</p><h3>Exploration & Need Identification</h3><p>Interactive wall, wish box, interviews, brainstorming revealed: need for venting, planning, learning, connecting, thinking clearly, and becoming decisive.</p><h3>5W Method</h3><p>The final chosen need: "The need to become decisive."</p><img src="${I.s3}"><h3>Understanding Decision Making</h3><blockquote>"Decision involving a lot of emotions and morality makes it difficult for me"</blockquote><blockquote>"I mostly take decisions out of randomness when it's confusing and later regret"</blockquote><blockquote>"I need reassurance whenever I decide, otherwise I keep delaying it"</blockquote><img src="${I.s2}"><h3>What Was Designed?</h3><p>A service framework with guided sessions, cue cards, spatial design, and reflective tools for confident decision-making.</p><img src="${I.s4}"><h3>Way Forward</h3><p>Iterate and test prototypes with diverse user groups, refine touchpoints, scale for real-world application.</p>`},
shell:{cat:'User Research',t:'Improving User Research & Service Design Practices in Shell',tags:['Design Maturity','Stakeholder Interviews','Case Studies','Framework Development','Co-creation','DesignOps'],b:`<p>Strengthening the role of Service Design and User Research within Shell's Experience Design team by addressing gaps in design maturity.</p><img src="${I.sh1}"><h3>Areas of Enquiry</h3><p>Review design maturity models. Collect case studies. Study SD and UXR in large enterprises. Co-create solutions.</p><h3>Research Plan</h3><p><strong>Participants:</strong> 7 seasoned Shell practitioners &nbsp;|&nbsp; <strong>Sessions:</strong> 1 hour each</p><img src="${I.sh2}"><h3>Lack of Understanding of Design Value</h3><blockquote>"Stakeholders don't always understand the value we offer, our practices, how we fit in."</blockquote><p>IBM launched company-wide Design Thinking. Microsoft made inclusive design a company-wide strategy.</p><img src="${I.sh3}"><img src="${I.sh4}"><h3>Business Owns the Beginning</h3><blockquote>"Definition and shaping is completed by a SME and we're brought in after. Changing minds later is difficult."</blockquote><p>Atlassian embedded design at kickoff — no project starts without UXR/SD in discovery.</p><h3>Insight Pushback</h3><p>Insights filtered through political and organizational lenses. SEEK addressed with centralized repositories and cross-functional showcases.</p><img src="${I.sh5}"><h3>Lack of Systematization</h3><blockquote>"I don't know where to go when I join a project. Information is scattered."</blockquote><img src="${I.sh6}"><h3>EXD "The Auditor" & UX Theatre</h3><blockquote>"I am viewed as an add-on, a fire-fighter."</blockquote><img src="${I.sh7}"><h3>Measuring Impact</h3><p>Salesforce built a design value dashboard linking UX metrics to business KPIs.</p><img src="${I.sh8}">`},
wedding:{cat:'UXR & Service Design',t:'Reimagining the Wedding Workforce: Fair Pay and Dignity',tags:['Ethnographic Research','Service Design','Platform Design','Stakeholder Mapping','Policy Interventions'],b:`<p>Designing a Digital Platform for Fair Work and Payment Transparency in the Indian Wedding Industry.</p><img src="${I.e1}"><h3>Employment & Economic Impact</h3><p>8-10 million weddings annually, market in hundreds of billions. Over 10 million people in the "wedding economy."</p><img src="${I.e2}"><h3>Event Stakeholder Map</h3><img src="${I.e3}"><h3>Current State</h3><p>Millions of informal workers face delayed payments, no contracts, poor conditions, no insurance.</p><img src="${I.e5}"><h3>Solution Set</h3><p><strong>Policy:</strong> Social security, micro-insurance, promote organised segment.</p><p><strong>Technology:</strong> Digital escrow payments, job-matching platforms for labour.</p><p><strong>Industry:</strong> Vendor guilds, fair-work certification.</p><p><strong>Management:</strong> Clear documentation, crew welfare, safety checks.</p><img src="${I.e4}"><h3>Goal</h3><p>A neutral digital ecosystem connecting, regulating, and protecting vendors and labourers.</p><img src="${I.e6}"><img src="${I.e7}"><img src="${I.e8}">`}
};

// ═══ ABOUT CONTENT ═══
document.getElementById('abC').innerHTML=`<div class="ab-lbl">About Me</div><h2 class="ab-h">Every phase has meaning.</h2><p class="ab-intro">Creative strategist with a Master's in Strategic Design Management and 2+ years of diverse experience in service design, brand storytelling, and project planning.</p><div class="roles"><span class="role">Architect</span><span class="role">Planner</span><span class="role">Researcher</span><span class="role">Designer</span></div><div class="ab-imgs"><img src="${I.ab1}" onclick="lbox(this.src)"><img src="${I.ab2}" onclick="lbox(this.src)"><img src="${I.ab3}" onclick="lbox(this.src)"><img src="${I.ab4}" onclick="lbox(this.src)"><img src="${I.ab5}" onclick="lbox(this.src)"><img src="${I.ab6}" onclick="lbox(this.src)"><img src="${I.ab7}" onclick="lbox(this.src)"><img src="${I.ab8}" onclick="lbox(this.src)"></div><div class="ab-grid"><div><h3 class="ab-st">Journey</h3><div class="tl"><span class="dt">Apr 2025 → Present</span><div class="rl">Experience Designer</div><div class="og">Life in Frame Photography</div><div class="ds">Led service design blueprint for luxury event decor.</div></div><div class="tl"><span class="dt">Mar 2024 → Mar 2025</span><div class="rl">Service Designer & Design Coordinator</div><div class="og">Eat Drink and Party</div><div class="ds">Executed 30+ luxury weddings. Built internal knowledge libraries.</div></div><div class="tl"><span class="dt">Sep 2023 → Feb 2024</span><div class="rl">Service Designer Intern</div><div class="og">Shell</div><div class="ds">Research-backed communication framework for EXD team.</div></div><div class="tl"><span class="dt">Jul → Aug 2023</span><div class="rl">Design Strategist Intern</div><div class="og">Unilever</div><div class="ds">Communication strategies for NDPE policy.</div></div><div class="tl"><span class="dt">Aug 2022 → Aug 2024</span><div class="rl">Business Strategist (Freelance)</div><div class="og">Life in Frame Photography</div><div class="ds">5x Instagram reach. 1.5M+ video views.</div></div><div class="tl"><span class="dt">2019 → 2022</span><div class="rl">Experience Designer</div><div class="og">The Skinlanguage</div><div class="ds">1,500+ community. 20+ brand partnerships. 100+ content pieces.</div></div></div><div><h3 class="ab-st">Education</h3><div class="tl"><div class="rl">M.Des — Strategic Design Management</div><div class="og">National Institute of Design, Gandhinagar</div></div><div class="tl"><div class="rl">B.Arch — Architecture</div><div class="og">Anna University, MSOA</div></div><h3 class="ab-st" style="margin-top:1.2rem">Skills</h3><div class="sk-g"><span class="sk">Design Research</span><span class="sk">Trend Mapping</span><span class="sk">Project Management</span><span class="sk">Stakeholder Mgmt</span><span class="sk">Branding</span><span class="sk">Social Media Strategy</span><span class="sk">Communication Systems</span><span class="sk">Process Design</span><span class="sk">Content Creation</span></div><h3 class="ab-st" style="margin-top:1.2rem">Tools</h3><div class="tools"><span class="tool">Figma</span><span class="tool">Miro</span><span class="tool">Canva</span><span class="tool">Adobe PS</span><span class="tool">Adobe AI</span><span class="tool">MS Office</span></div><h3 class="ab-st" style="margin-top:1.2rem">Things I Love</h3><p style="font-size:.68rem;color:rgba(245,230,200,.4);line-height:1.6">Art workshops with Karpi NGO. Toy & book drives with AID India. Hosting, food styling, floral design. Founded The Skinlanguage — skincare content with 1.6k community.</p></div></div>`;

// ═══ SCROLL & TRACKER ═══
const M=document.getElementById('M'),secs=document.querySelectorAll('.sec'),items=document.querySelectorAll('.t-item');
let cur=0;
function go(i){secs[i]&&secs[i].scrollIntoView({behavior:'smooth'})}
M.addEventListener('scroll',()=>{let a=0;secs.forEach((s,i)=>{if(M.scrollTop>=s.offsetTop-M.clientHeight/2)a=i});if(a!==cur){cur=a;items.forEach((n,i)=>{n.classList.remove('act','pass');if(i===a)n.classList.add('act');else if(i<a)n.classList.add('pass')})}rv()});
function rv(){document.querySelectorAll('.rv').forEach(el=>{const r=el.getBoundingClientRect(),mr=M.getBoundingClientRect();if(r.top<mr.bottom-40)el.classList.add('vis')})}
setTimeout(rv,100);

// Heat particles
const hpC=document.getElementById('hpC');
for(let i=0;i<18;i++){
  const d=document.createElement('div');d.classList.add('hp');
  d.style.left=Math.random()*100+'%';
  d.style.animationDelay=Math.random()*3+'s';
  d.style.animationDuration=(2+Math.random()*3)+'s';
  const sz=2+Math.random()*4;
  d.style.width=sz+'px';d.style.height=sz+'px';
  d.style.background=['#D4A017','#E8960C','#E07C5A','#FFD233'][Math.floor(Math.random()*4)];
  hpC.appendChild(d);
}

// Modal
const mOv=document.getElementById('mOv'),mC=document.getElementById('mC'),mhCat=document.getElementById('mhCat'),modal=document.getElementById('modal');
function openM(k){const p=P[k];if(!p)return;mhCat.textContent=p.cat;mC.innerHTML=`<h3 class="m-title">${p.t}</h3><div class="m-tags">${p.tags.map(t=>`<span class="m-tag">${t}</span>`).join('')}</div><div class="m-body">${p.b}</div>`;mOv.classList.add('open');modal.classList.remove('expanded');modal.scrollTop=0}
function closeM(){mOv.classList.remove('open')}
mOv.addEventListener('click',e=>{if(e.target===mOv)closeM()});
document.getElementById('mExp').addEventListener('click',()=>modal.classList.toggle('expanded'));

// About
const aOv=document.getElementById('aOv');
document.getElementById('abBtn').addEventListener('click',()=>aOv.classList.add('open'));
document.getElementById('aX').addEventListener('click',()=>aOv.classList.remove('open'));
aOv.addEventListener('click',e=>{if(e.target===aOv)aOv.classList.remove('open')});

// Lightbox
function lbox(src){document.getElementById('lbImg').src=src;document.getElementById('lb').classList.add('open')}
document.addEventListener('click',e=>{if(e.target.matches('.m-body img'))lbox(e.target.src)});

// Keyboard
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeM();aOv.classList.remove('open');document.getElementById('lb').classList.remove('open')}
  if(mOv.classList.contains('open')||aOv.classList.contains('open'))return;
  if(e.key==='ArrowDown'||e.key===' '){e.preventDefault();if(cur<secs.length-1)go(cur+1)}
  if(e.key==='ArrowUp'){e.preventDefault();if(cur>0)go(cur-1)}
});

// Mouse parallax on blobs
document.addEventListener('mousemove',e=>{
  const x=(e.clientX/window.innerWidth-.5)*2, y=(e.clientY/window.innerHeight-.5)*2;
  document.querySelectorAll('.blob').forEach((b,i)=>{
    const s=(i+1)*5;
    b.style.transform=`translate(${x*s}px,${y*s}px)`;
  });
});
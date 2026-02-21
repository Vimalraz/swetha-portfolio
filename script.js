const I={
sd_act:'images/0f68d0_4f166f852c484.jpg',sd_upcycle:'images/0f68d0_b00e0015156c4.jpg',
sd_art1:'images/0f68d0_1f5c8ab1c0af4.png',sd_art2:'images/0f68d0_8585c661723e4.png',
sd_art3:'images/0f68d0_9b3b79ad881e4.png',sd_arch:'images/2e8212_7d30ad38443c4.png',
sd_hist:'images/0f68d0_9a19b4b3597c4.png',sam_char:'images/2e8212_6a9190b7ad904.png',
p1:'images/2e8212_9256175e51824.jpg',p2:'images/2e8212_212f62f77a854.png',
p3:'images/2e8212_ac7a2a82f41a4.png',p4:'images/2e8212_e85f1a1a78714.png',
p5:'images/2e8212_ef31311e7f144.png',p6:'images/2e8212_9ccbd8b6be9a4.png',
p7:'images/2e8212_e628b22cd9de4.png',p8:'images/2e8212_345a09e86a6c4.png',
p9:'images/2e8212_4173cf4f6dfd4.png',p10:'images/2e8212_660a8aa2be5d4.png',
p11:'images/2e8212_c318a8522a844.png',p12:'images/2e8212_cce9c56fd2724.png',
p13:'images/2e8212_7a4947e7b0384.png',
b1:'images/2e8212_9fc07fd6d23d4.png',b2:'images/2e8212_bc9b0c4cdcaf4.jpg',
b3:'images/2e8212_c8f3e980d4464.jpg',b4:'images/2e8212_8e2a40c0edf14.png',
b5:'images/2e8212_6b59a382081e4.png',b6:'images/2e8212_14efc33294224.png',
s1:'images/2e8212_1a508fff37624.jpg',s2:'images/2e8212_31bf32d31b714.png',
s3:'images/2e8212_f3728c38a23c4.jpg',s4:'images/2e8212_e3fa461f1d984.png',
sh1:'images/2e8212_0e00b78176414.png',sh2:'images/2e8212_088a9f9eae374.png',
sh3:'images/0f68d0_0597275aef914.png',sh4:'images/0f68d0_75108a3346fc4.png',
sh5:'images/2e8212_31eb43138e6a4.png',sh6:'images/0f68d0_f7f65d1da6964.png',
sh7:'images/2e8212_90cae88e15474.png',sh8:'images/2e8212_947f27eabaa44.png',
e1:'images/2e8212_838c236df99c4.png',e2:'images/0f68d0_efd9e87be3b14.jpg',
e3:'images/2e8212_e0df3804d4ae4.png',e4:'images/2e8212_2d752c00b6944.png',
e5:'images/2e8212_c784b1d2b7b54.jpg',e6:'images/0f68d0_e17c4f97d0454.jpg',
e7:'images/2e8212_53ca99d4c35b4.png',e8:'images/2e8212_1f4842d3c30c4.jpg',
ab1:'images/2e8212_908a7d3e2f624.jpg',
ab2:'images/0f68d0_86f4cf1546044.jpg',ab3:'images/0f68d0_afacc9e55f914.jpg',
ab4:'images/0f68d0_6887ae8c95214.jpg',ab5:'images/2e8212_a2c9b63659094.jpg',
ab6:'images/0f68d0_e8e4bcbe54ea4.jpg',
vol1:'images/2e8212_1241dcf1f3104.png',vol2:'images/2e8212_65286c01acaf4.png',
vol3:'images/volunteer1.jpg',vol4:'images/volunteer2.jpg',
// Placeholder thumbnails for cards
thumb_piracy:'images/filling_piracy.jpg',thumb_behavior:'images/filling_behavior.jpg',
thumb_service:'images/deepfry_service.jpg',thumb_shell:'images/deepfry_shell.jpg',
thumb_wedding:'images/deepfry_wedding.jpg',
// Wedlink Figma placeholders
wl1:'images/wedlink_1.jpg',wl2:'images/wedlink_2.jpg',wl3:'images/wedlink_3.jpg',
wl4:'images/wedlink_4.jpg',wl5:'images/wedlink_5.jpg',wl6:'images/wedlink_6.jpg',
wl7:'images/wedlink_7.jpg',wl8:'images/wedlink_8.jpg',wl9:'images/wedlink_9.jpg',
wl10:'images/wedlink_10.jpg',
};

// PARTICLES for all sections
document.querySelectorAll('.bg-particles').forEach(c=>{
  for(let i=0;i<8;i++){
    const s=document.createElement('div');s.classList.add('bg-p');
    const sz=30+Math.random()*100;s.style.width=sz+'px';s.style.height=sz+'px';
    s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';
    s.style.animationDelay=Math.random()*5+'s';s.style.animationDuration=(5+Math.random()*6)+'s';
    s.style.background=`radial-gradient(circle,rgba(212,160,23,.06),transparent)`;
    c.appendChild(s);
  }
});

// HOME PARTICLES
const hpEl=document.getElementById('homeParticles');
for(let i=0;i<25;i++){
  const p=document.createElement('div');p.classList.add('home-p');
  const sz=2+Math.random()*5;p.style.width=sz+'px';p.style.height=sz+'px';
  p.style.left=Math.random()*100+'%';
  p.style.animationDuration=(6+Math.random()*8)+'s';
  p.style.animationDelay=Math.random()*6+'s';
  p.style.background=['rgba(212,160,23,.25)','rgba(232,150,12,.2)','rgba(255,210,51,.18)','rgba(224,124,90,.15)'][Math.floor(Math.random()*4)];
  hpEl.appendChild(p);
}

// CAROUSEL - original boxed style with samosa character slide
const slides=[
  {img:I.sd_act,title:'As a Director & Actor',desc:'My earliest experiments with storytelling. Directing and acting in school, learning how narratives shape emotions.'},
  {img:I.sd_upcycle,title:'As an Upcycle Artist',desc:'Turning discarded materials into something beautiful. First taste of design thinking.'},
  {img:I.sd_art1,title:'Art Workshops',desc:'Exploring different art forms and mediums across creative workshops.'},
  {img:I.sd_art2,title:'Creative Experiments',desc:'From handmade crafts to mixed-media. Experiments in form, color, expression.'},
  {img:I.sd_art3,title:'Hands-on Making',desc:'The tactile joy of creating something with your own hands.'},
  {img:I.sd_arch,title:'Architecture',desc:'B.Arch at Anna University. Spatial design and how environments shape behavior.'},
  {img:I.sd_hist,title:'Preserving History',desc:'Documenting architectural heritage. Design carries cultural memory.'},
  {img:I.sam_char,title:'The Young Creative',desc:'Every curiosity and experiment with creativity became part of the mix.'},
];
let cHTML=`<div class="carousel" id="carousel"><div class="carousel-track" id="cTrack">`;
slides.forEach(s=>{cHTML+=`<div class="carousel-slide"><img src="${s.img}" alt="${s.title}" onclick="lbox(this.src)"><div class="carousel-caption"><h4>${s.title}</h4><p>${s.desc}</p></div></div>`});
cHTML+=`</div><div class="carousel-nav"><button class="carousel-btn" id="cPrev">&#8249;</button><div class="carousel-dots" id="cDots">`;
slides.forEach((_,i)=>{cHTML+=`<button class="carousel-dot${i===0?' active':''}" data-i="${i}"></button>`});
cHTML+=`</div><button class="carousel-btn" id="cNext">&#8250;</button></div></div>`;
document.getElementById('sdImgs').innerHTML=cHTML;

let cIdx=0;const cTrack=document.getElementById('cTrack');
let cDots=document.querySelectorAll('.carousel-dot');
function goSlide(i){
  cIdx=((i%slides.length)+slides.length)%slides.length;
  cTrack.style.transform=`translateX(-${cIdx*100}%)`;
  cDots.forEach((d,j)=>d.classList.toggle('active',j===cIdx));
}
document.getElementById('cPrev').onclick=()=>{goSlide(cIdx-1);resetAuto()};
document.getElementById('cNext').onclick=()=>{goSlide(cIdx+1);resetAuto()};
cDots.forEach(d=>d.onclick=()=>{goSlide(+d.dataset.i);resetAuto()});
let cAuto=setInterval(()=>goSlide(cIdx+1),4200);
function resetAuto(){clearInterval(cAuto);cAuto=setInterval(()=>goSlide(cIdx+1),4200)}
document.getElementById('carousel').onmouseenter=()=>clearInterval(cAuto);
document.getElementById('carousel').onmouseleave=()=>{cAuto=setInterval(()=>goSlide(cIdx+1),4200)};
let touchX=0;
document.getElementById('carousel').addEventListener('touchstart',e=>{touchX=e.touches[0].clientX});
document.getElementById('carousel').addEventListener('touchend',e=>{const d=touchX-e.changedTouches[0].clientX;if(Math.abs(d)>40){goSlide(cIdx+(d>0?1:-1));resetAuto()}});

// CARDS WITH THUMBNAILS
document.getElementById('flCards').innerHTML=`
<div class="card" onclick="openM('piracy')"><img class="card-img" src="${I.thumb_piracy}"><div class="card-body"><span class="card-cat">Virtual Social Behaviour</span><h3 class="card-t">Piracy in Telegram</h3><p class="card-d">How social behaviours exist in virtual platforms and how the interface facilitates such behaviour</p><div class="card-arr">Read more &rarr;</div></div></div>
<div class="card" onclick="openM('behavior')"><img class="card-img" src="${I.thumb_behavior}"><div class="card-body"><span class="card-cat">Behavioural Design</span><h3 class="card-t">Clean Hands Among Food Vendors</h3><p class="card-d">Understanding and influencing hygiene behaviour through design interventions</p><div class="card-arr">Read more &rarr;</div></div></div>`;

document.getElementById('dfCards').innerHTML=`
<div class="card" onclick="openM('service')"><img class="card-img" src="${I.thumb_service}"><div class="card-body"><span class="card-cat">Service Design</span><h3 class="card-t">Empowering Student Decisions</h3><p class="card-d">Designing a service ecosystem for clarity in decision-making</p><div class="card-arr">Read more &rarr;</div></div></div>
<div class="card" onclick="openM('shell')"><img class="card-img" src="${I.thumb_shell}"><div class="card-body"><span class="card-cat">User Research</span><h3 class="card-t">UX Research at Shell</h3><p class="card-d">Strengthening Service Design and UXR practices at enterprise scale</p><div class="card-arr">Read more &rarr;</div></div></div>
<div class="card" onclick="openM('wedding')"><img class="card-img" src="${I.thumb_wedding}"><div class="card-body"><span class="card-cat">UXR & Service Design</span><h3 class="card-t">Wedlink: Wedding Workforce</h3><p class="card-d">Technology as a bridge for fair pay and dignity in Indian weddings</p><div class="card-arr">Read more &rarr;</div></div></div>`;

// PROJECTS
const P={
piracy:{cat:'Virtual Social Behaviour',t:'Piracy in Telegram',
  tags:['Netnography','Autonetnography','Interviews','UX Strategies','UI Mockups'],
  hero:I.p5,
  summary:'In the fast-paced world of technological advancements, this project looks into how human social behaviours exist in a virtual platform and how the interface triggers or facilitates such behaviour. Through netnography, autonetnography, and interviews, we explored piracy culture on Telegram and designed UX interventions to make users more conscious of their choices.',
  b:`<p><strong>Timeline:</strong> 4 weeks &nbsp;|&nbsp; <strong>Type:</strong> Individual project</p><p><strong>Primary research:</strong> Netnography, Autonetnography, Interviews<br><strong>Secondary research:</strong> Articles, Research papers, Documentaries</p><img src="${I.p1}"><h3>What Rules the World Today?</h3><p>Information/content. This information is often gatekept and considered Intellectual Property. Gatekeeping information and monetizing it makes it inaccessible to all classes of people.</p><img src="${I.p2}"><h3>Triangle of Digital Responsibility</h3><p>Piracy as acceptable and normative behavior. Blurred line between ethical and unethical download.</p><img src="${I.p3}"><h3>Two Schools of Thought</h3><p><strong>Known/accepted deviancy:</strong> It isn't theft, it's duplication. Gateway for less fortunate people to access high end.</p><p><strong>Pain to creators:</strong> Eats away profits. "Get everything for free" mindset.</p><img src="${I.p4}"><h3>Why Does One Indulge in Piracy?</h3><p><strong>Extrinsic:</strong> Saving money, try and buy, perceived utility, expanding collection.</p><p><strong>Intrinsic:</strong> Excitement of getting something free, fun and achievement, breaking the rule.</p><img src="${I.p5}"><h3>Why Telegram?</h3><p>Up to 50 public/private groups per day. Unlimited channel members. 500+ resources. Wide reach, free, stable, ad-free.</p><img src="${I.p6}"><h3>Piracy in Telegram</h3><blockquote>"How might we make users more conscious of their choice to indulge in piracy and enable the platform to keep a stronger check on it?"</blockquote><img src="${I.p7}"><h3>Research and UX Strategies</h3><p>Analysis of existing UI, design interventions and their operationalization.</p><img src="${I.p8}"><h3>Solutions</h3><p>Divide the mass, paralyze the spreading channels. Business model considerations.</p><img src="${I.p9}"><img src="${I.p10}"><img src="${I.p11}"><img src="${I.p12}"><img src="${I.p13}">`},

behavior:{cat:'Behavioural Design',t:'Clean Hand Practice Among Street Food Vendors',
  tags:['Field Study','Behaviour Analysis','Change Canvas','Observations','Prototyping'],
  hero:I.b3,
  summary:'Understanding how people think, feel, and act to create designs that influence their behavior positively. Through field studies in Ahmedabad and Gandhinagar, we identified compromised hygiene as a core deviant behaviour and designed interventions using the Behaviour Change Canvas.',
  b:`<p><strong>Timeline:</strong> 4 weeks &nbsp;|&nbsp; <strong>Team:</strong> Swetha, Disha, Pramoddini</p><img src="${I.b1}"><h3>Objectives</h3><p>Identify and implement behavior change in the context of street food in Ahmedabad and Gandhinagar, India.</p><img src="${I.b2}"><h3>Research (3 Phases)</h3><p><strong>Phase 1:</strong> Visits to street food markets to identify patterns.</p><p><strong>Phase 2:</strong> Identify deviant behaviors, choose target behavior.</p><p><strong>Phase 3:</strong> Understand drivers, employ ideation techniques.</p><img src="${I.b3}"><h3>Field Observations</h3><p>Ease in street food environments. Unsaid vendor unity. Cooking exhibition as crowd puller and pusher.</p><img src="${I.b4}"><h3>Deviant Behaviours</h3><p><strong>Core:</strong> Compromised hygiene by vendors and customers. Gives liberty for other deviancies.</p><img src="${I.b6}"><h3>Design Intervention</h3><p>Behaviour Change Canvas: making handwashing the path of least resistance.</p><img src="${I.b5}">`},

service:{cat:'Service Design',t:'Empowering Students to Attain Clarity',
  tags:['Service Design','Market Need Research','Service Blueprint','Prototyping','5W Analysis'],
  hero:I.s4,
  summary:'How service design can reduce ambiguity, mental overload, and emotional conflict in decision-making. People don\'t lack options; they lack structure, reflection, and emotional grounding.',
  b:`<p><strong>Timeline:</strong> 4 weeks &nbsp;|&nbsp; <strong>Team:</strong> 3 members</p><img src="${I.s1}"><h3>Overview</h3><p>People don't lack options. They lack structure, reflection, and emotional grounding.</p><h3>5W Method</h3><p>Final chosen need: "The need to become decisive."</p><img src="${I.s3}"><h3>Understanding Decision Making</h3><blockquote>"Decision involving emotions and morality makes it difficult for me"</blockquote><blockquote>"I take decisions out of randomness when confusing and later regret"</blockquote><img src="${I.s2}"><h3>What Was Designed?</h3><p>Service framework: guided sessions, cue cards, spatial design, reflective tools.</p><img src="${I.s4}">`},

shell:{cat:'User Research',t:'UX Research at Shell',
  tags:['Design Maturity','Stakeholder Interviews','Framework Development','Co-creation','DesignOps'],
  hero:I.sh2,
  summary:'Strengthening the role of Service Design and User Research within Shell\'s Experience Design team by addressing gaps in design maturity. Through interviews with 7 seasoned practitioners, we identified key barriers and co-created solutions.',
  b:`<img src="${I.sh1}"><h3>Research Plan</h3><p><strong>Participants:</strong> 7 Shell practitioners &nbsp;|&nbsp; <strong>Sessions:</strong> 1 hour each</p><img src="${I.sh2}"><h3>Lack of Understanding of Design Value</h3><blockquote>"Stakeholders don't always understand the value we offer."</blockquote><img src="${I.sh3}"><img src="${I.sh4}"><h3>Business Owns the Beginning</h3><blockquote>"Definition is completed by a SME and we're brought in after."</blockquote><img src="${I.sh5}"><h3>Lack of Systematization</h3><blockquote>"I don't know where to go when I join a project."</blockquote><img src="${I.sh6}"><h3>UX Theatre</h3><blockquote>"I am viewed as an add-on, a fire-fighter."</blockquote><img src="${I.sh7}"><h3>Measuring Impact</h3><p>Design value dashboard linking UX metrics to business KPIs.</p><img src="${I.sh8}">`},

wedding:{cat:'UXR & Service Design',t:'Wedlink: Reimagining the Wedding Workforce',
  tags:['Ethnographic Research','Service Design','Platform Design','Stakeholder Mapping','Figma Prototype'],
  hero:I.wl1,
  summary:'Designing a digital platform for fair work and payment transparency in the Indian wedding industry. With 8 to 10 million weddings annually, we mapped stakeholders, identified informal worker challenges, and proposed policy, technology, and industry solutions through Wedlink.',
  b:`<p><strong>Timeline:</strong> 8 weeks &nbsp;|&nbsp; <strong>Type:</strong> UXR & Service Design</p><img src="${I.wl1}"><h3>The Problem</h3><p>8 to 10 million weddings per year. Over 10 million people in the "wedding economy." Millions of informal workers face delayed payments, no contracts, poor working conditions, and no insurance.</p><img src="${I.wl2}"><h3>Research</h3><p>Ethnographic field research across wedding venues, vendor interviews, and secondary data analysis of the unorganized wedding workforce.</p><img src="${I.wl3}"><h3>Stakeholder Ecosystem</h3><p>Mapping the complex web of planners, vendors, labourers, clients, decorators, caterers, and middlemen that make up the Indian wedding industry.</p><img src="${I.wl4}"><h3>Key Insights</h3><p>Workers lack bargaining power. Payment delays are systemic. No standardized contracts exist. Middlemen take disproportionate cuts.</p><img src="${I.wl5}"><h3>Wedlink Platform</h3><p>A neutral digital ecosystem connecting, regulating, and protecting vendors and labourers through transparent job matching and digital escrow payments.</p><img src="${I.wl6}"><h3>User Flows</h3><p>Designed end-to-end user journeys for vendors, labourers, and event planners including onboarding, job discovery, booking, payment, and rating systems.</p><img src="${I.wl7}"><h3>UI Design</h3><p>High-fidelity screens designed in Figma covering the core experience: dashboard, job listings, payment tracking, reviews, and crew management.</p><img src="${I.wl8}"><img src="${I.wl9}"><h3>Solution Framework</h3><p><strong>Policy:</strong> Social security, micro-insurance for gig workers.</p><p><strong>Technology:</strong> Digital escrow payments, job-matching platform.</p><p><strong>Industry:</strong> Vendor guilds, fair-work certification standards.</p><img src="${I.wl10}"><h3>Impact</h3><p>Wedlink bridges the gap between informal labour and fair work practices, creating accountability and transparency in an industry worth hundreds of billions.</p>`}
};

// ABOUT
document.getElementById('abC').innerHTML=`
<div class="ab-hero">
  <img class="ab-photo" src="${I.ab1}" alt="Swetha" onclick="lbox(this.src)">
  <div class="ab-hero-txt">
    <div class="ab-lbl">About Me</div>
    <h2 class="ab-h">Every phase has meaning.</h2>
    <p class="ab-intro">Creative strategist with a Master's in Strategic Design Management and 2+ years of diverse experience in service design, brand storytelling, and project planning. I specialize in building systems, content strategies, and experiences that are both human-centered and culturally rooted.</p>
    <div class="roles"><span class="role">Architect</span><span class="role">Planner</span><span class="role">Researcher</span><span class="role">Designer</span></div>
  </div>
</div>
<div class="ab-section">
  <h3 class="ab-st">Work Experience</h3>
  <div class="tl"><span class="dt">Mar 2024 to Mar 2025</span><div class="rl">Luxury Event Decor Company, Hyderabad</div><div class="og">Service Designer & Coordinator (1 Year)</div><div class="ds">Gained hands-on experience in high-end event decor operations. Created and defined internal work libraries and systems to formalise and simplify work.</div></div>
  <div class="ab-img-row"><img src="${I.ab2}" onclick="lbox(this.src)"><img src="${I.ab3}" onclick="lbox(this.src)"><img src="${I.ab4}" onclick="lbox(this.src)"><img src="${I.ab6}" onclick="lbox(this.src)"></div>
  <div class="tl" style="margin-top:.8rem"><span class="dt">Aug 2023 to Feb 2024</span><div class="rl">User Researcher, Shell</div><div class="og">Experience Design Team</div><div class="ds">Worked on enterprise-level UX research initiatives. Led projects involving design systems research and case studies on Google, Microsoft, Intuit, Samsung and Salesforce systems. Contributed to shaping Shell's internal design system strategy.</div></div>
</div>
<div class="ab-section">
  <h3 class="ab-st">The Skinlanguage (Blog)</h3>
  <p class="ab-p">Founded The Skinlanguage, a skincare content blog with 1.6k community and 20+ brand partnerships. Produced 100+ pieces of content combining research-backed skincare education with engaging visual storytelling.</p>
  <div class="ab-img-row"><img src="${I.ab5}" onclick="lbox(this.src)"></div>
</div>
<div class="ab-section">
  <h3 class="ab-st">Volunteering & Social Work</h3>
  <p class="ab-p">Taken art workshops in kids shelter and care. Volunteered in various social cause projects like public wall paintings and relief collection for Chennai floods. Worked on outreach design for NGO AID India: designed flyers and posters for the toy drive, approached apartments and playschools to present regarding organizing the drive, and successfully conducted the drive in two gated communities.</p>
  <div class="ab-img-row"><img src="${I.vol1}" onclick="lbox(this.src)"><img src="${I.vol2}" onclick="lbox(this.src)"><img src="${I.vol3}" onclick="lbox(this.src)"><img src="${I.vol4}" onclick="lbox(this.src)"></div>
</div>
<div class="ab-section">
  <div class="ab-2col"><div>
    <h3 class="ab-st">Education</h3>
    <div class="tl"><div class="rl">M.Des, Strategic Design Management</div><div class="og">National Institute of Design, Gandhinagar</div></div>
    <div class="tl"><div class="rl">B.Arch, Architecture</div><div class="og">Anna University, MSOA</div></div>
    <h3 class="ab-st" style="margin-top:1rem">Skills</h3>
    <div class="sk-g"><span class="sk">Design Research</span><span class="sk">Trend Mapping</span><span class="sk">Project Management</span><span class="sk">Stakeholder Mgmt</span><span class="sk">Branding</span><span class="sk">Social Media Strategy</span><span class="sk">Communication Systems</span><span class="sk">Process Design</span><span class="sk">Content Creation</span></div>
  </div><div>
    <h3 class="ab-st">Tools</h3>
    <div class="tools"><span class="tool">Figma</span><span class="tool">Miro</span><span class="tool">Canva</span><span class="tool">Adobe PS</span><span class="tool">Adobe AI</span><span class="tool">MS Office</span></div>
  </div></div>
</div>`;

// SCROLL & JOURNEY
const M=document.getElementById('M'),secs=document.querySelectorAll('.sec'),items=document.querySelectorAll('.t-item');
const jProg=document.getElementById('jProg');
let cur=0;
function go(i){secs[i]&&secs[i].scrollIntoView({behavior:'smooth'})}
function updateTracker(a){
  if(a!==cur){cur=a;items.forEach((n,i)=>{n.classList.remove('act','pass');if(i===a)n.classList.add('act');else if(i<a)n.classList.add('pass')})}
  if(jProg&&items.length>1){const first=items[0],last=items[items.length-1],curr=items[a];const f=first.offsetTop+first.offsetHeight/2,l=last.offsetTop+last.offsetHeight/2,c=curr.offsetTop+curr.offsetHeight/2;jProg.style.height=(c-f)+'px'}
}
M.addEventListener('scroll',()=>{let a=0;secs.forEach((s,i)=>{if(M.scrollTop>=s.offsetTop-M.clientHeight/2)a=i});updateTracker(a);rv()});
function rv(){document.querySelectorAll('.rv').forEach(el=>{const r=el.getBoundingClientRect(),mr=M.getBoundingClientRect();if(r.top<mr.bottom-40)el.classList.add('vis')})}
setTimeout(rv,100);

// Heat particles (deep fry)
const hpC=document.getElementById('hpC');
for(let i=0;i<20;i++){const d=document.createElement('div');d.classList.add('hp');d.style.left=Math.random()*100+'%';d.style.animationDelay=Math.random()*3+'s';d.style.animationDuration=(2+Math.random()*3)+'s';const sz=2+Math.random()*4;d.style.width=sz+'px';d.style.height=sz+'px';d.style.background=['#D4A017','#E8960C','#E07C5A','#FFD233'][Math.floor(Math.random()*4)];hpC.appendChild(d)}

// MODAL
const mOv=document.getElementById('mOv'),mC=document.getElementById('mC'),mhCat=document.getElementById('mhCat'),modal=document.getElementById('modal');
function openM(k){
  const p=P[k];if(!p)return;
  mhCat.textContent=p.cat;
  mC.innerHTML=`<h3 class="m-title">${p.t}</h3><div class="m-tags">${p.tags.map(t=>`<span class="m-tag">${t}</span>`).join('')}</div>${p.hero?`<img class="m-hero-img" src="${p.hero}">`:''}<div class="m-summary">${p.summary}</div><button class="m-expand-btn" onclick="document.getElementById('modal').classList.add('expanded');document.getElementById('modal').scrollTop=0">View full project &darr;</button><div class="m-body">${p.b}</div>`;
  mOv.classList.add('open');modal.classList.remove('expanded');modal.scrollTop=0;
}
function closeM(){mOv.classList.remove('open')}
mOv.addEventListener('click',e=>{if(e.target===mOv)closeM()});
document.getElementById('mExp').onclick=()=>{modal.classList.toggle('expanded');modal.scrollTop=0};

// About
const aOv=document.getElementById('aOv');
document.getElementById('abBtn').onclick=()=>aOv.classList.add('open');
document.getElementById('aX').onclick=()=>aOv.classList.remove('open');
aOv.addEventListener('click',e=>{if(e.target===aOv)aOv.classList.remove('open')});
// Mobile about
if(document.getElementById('mobAbBtn'))document.getElementById('mobAbBtn').onclick=()=>aOv.classList.add('open');

function lbox(src){document.getElementById('lbImg').src=src;document.getElementById('lb').classList.add('open')}
document.addEventListener('click',e=>{if(e.target.matches('.m-body img'))lbox(e.target.src)});

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeM();aOv.classList.remove('open');document.getElementById('lb').classList.remove('open')}
  if(mOv.classList.contains('open')||aOv.classList.contains('open'))return;
  if(e.key==='ArrowDown'||e.key===' '){e.preventDefault();if(cur<secs.length-1)go(cur+1)}
  if(e.key==='ArrowUp'){e.preventDefault();if(cur>0)go(cur-1)}
});

document.addEventListener('mousemove',e=>{const x=(e.clientX/window.innerWidth-.5)*2,y=(e.clientY/window.innerHeight-.5)*2;document.querySelectorAll('.blob').forEach((b,i)=>{const s=(i+1)*5;b.style.transform=`translate(${x*s}px,${y*s}px)`})});

// CUSTOM CURSOR
const cursor=document.getElementById('cursor');
if(cursor){
  const cLabel=cursor.querySelector('.cursor-label');
  let mx=0,my=0,cx=0,cy=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
  function animCursor(){cx+=(mx-cx)*.15;cy+=(my-cy)*.15;cursor.style.transform=`translate(${cx}px,${cy}px)`;requestAnimationFrame(animCursor)}
  animCursor();
  const clickables='a,button,.card,.pill,.t-item,.sb-btn,.social-link,.dl-btn,.c-link,.m-btn,.carousel-dot,.carousel-slide img,.mob-btn';
  const labels={'.card':'View project','.t-item':'Navigate','.sb-btn':'Click','.social-link':'Connect','.dl-btn':'Download','.c-link':'Open','.pill':'Explore','.carousel-slide img':'Zoom','a':'Open','button':'Click','.mob-btn':'Click'};
  document.addEventListener('mouseover',e=>{const el=e.target.closest(clickables);if(el){cursor.classList.add('hovering');let lbl='Click';for(const[sel,txt] of Object.entries(labels)){if(el.matches(sel)){lbl=txt;break}}cLabel.textContent=lbl;const r=el.getBoundingClientRect();const ecx=r.left+r.width/2,ecy=r.top+r.height/2;if(Math.hypot(mx-ecx,my-ecy)<100){mx=ecx;my=ecy}}});
  document.addEventListener('mouseout',e=>{const el=e.target.closest(clickables);if(el){cursor.classList.remove('hovering');cLabel.textContent=''}});
}

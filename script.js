// ═══ IMAGE MAP ═══
const I={
sd_act:'images/0f68d0_4f166f852c484.jpg',sd_upcycle:'images/0f68d0_b00e0015156c4.jpg',
sd_art1:'images/0f68d0_1f5c8ab1c0af4.png',sd_art2:'images/0f68d0_8585c661723e4.png',
sd_art3:'images/0f68d0_9b3b79ad881e4.png',sd_arch:'images/2e8212_7d30ad38443c4.png',
sd_hist:'images/0f68d0_9a19b4b3597c4.png',
sd_me:'images/2e8212_6a9190b7ad904.png',
// Piracy - p5 has telegram phones
p1:'images/2e8212_9256175e51824.jpg',p2:'images/2e8212_212f62f77a854.png',
p3:'images/2e8212_ac7a2a82f41a4.png',p4:'images/2e8212_e85f1a1a78714.png',
p5:'images/2e8212_ef31311e7f144.png',p6:'images/2e8212_9ccbd8b6be9a4.png',
p7:'images/2e8212_e628b22cd9de4.png',p8:'images/2e8212_345a09e86a6c4.png',
p9:'images/2e8212_4173cf4f6dfd4.png',p10:'images/2e8212_660a8aa2be5d4.png',
p11:'images/2e8212_c318a8522a844.png',p12:'images/2e8212_cce9c56fd2724.png',
p13:'images/2e8212_7a4947e7b0384.png',
// Behavior
b1:'images/2e8212_9fc07fd6d23d4.png',b2:'images/2e8212_bc9b0c4cdcaf4.jpg',
b3:'images/2e8212_c8f3e980d4464.jpg',b4:'images/2e8212_8e2a40c0edf14.png',
b5:'images/2e8212_6b59a382081e4.png',b6:'images/2e8212_14efc33294224.png',
// Service
s1:'images/2e8212_1a508fff37624.jpg',s2:'images/2e8212_31bf32d31b714.png',
s3:'images/2e8212_f3728c38a23c4.jpg',s4:'images/2e8212_e3fa461f1d984.png',
// Shell
sh1:'images/2e8212_0e00b78176414.png',sh2:'images/2e8212_088a9f9eae374.png',
sh3:'images/0f68d0_0597275aef914.png',sh4:'images/0f68d0_75108a3346fc4.png',
sh5:'images/2e8212_31eb43138e6a4.png',sh6:'images/0f68d0_f7f65d1da6964.png',
sh7:'images/2e8212_90cae88e15474.png',sh8:'images/2e8212_947f27eabaa44.png',
// Wedding/Event
e1:'images/2e8212_838c236df99c4.png',e2:'images/0f68d0_efd9e87be3b14.jpg',
e3:'images/2e8212_e0df3804d4ae4.png',e4:'images/2e8212_2d752c00b6944.png',
e5:'images/2e8212_c784b1d2b7b54.jpg',e6:'images/0f68d0_e17c4f97d0454.jpg',
e7:'images/2e8212_53ca99d4c35b4.png',e8:'images/2e8212_1f4842d3c30c4.jpg',
// About
ab1:'images/2e8212_908a7d3e2f624.jpg',
ab2:'images/0f68d0_86f4cf1546044.jpg',ab3:'images/0f68d0_afacc9e55f914.jpg',
ab4:'images/0f68d0_6887ae8c95214.jpg',ab5:'images/2e8212_a2c9b63659094.jpg',
ab6:'images/0f68d0_e8e4bcbe54ea4.jpg',
ab7:'images/2e8212_1241dcf1f3104.png',ab8:'images/2e8212_65286c01acaf4.png',
};

// ═══ CAROUSEL — includes personal slide ═══
const slides=[
  {img:I.sd_act,title:'Director & Actor',desc:'Directing and acting in school, learning how narratives shape emotions.'},
  {img:I.sd_upcycle,title:'Upcycle Artist',desc:'Turning discarded materials into something beautiful. First taste of design thinking.'},
  {img:I.sd_art1,title:'Art Workshops',desc:'Exploring different art forms and mediums across creative workshops.'},
  {img:I.sd_art2,title:'Creative Experiments',desc:'From handmade crafts to mixed-media. Experiments in form, color, expression.'},
  {img:I.sd_art3,title:'Hands-on Making',desc:'The tactile joy of creating something with your own hands.'},
  {img:I.sd_arch,title:'Architecture',desc:'B.Arch at Anna University. Spatial design and how environments shape behavior.'},
  {img:I.sd_hist,title:'Preserving History',desc:'Documenting architectural heritage. Design carries cultural memory.'},
  {img:I.sd_me,title:'Growing Up Creative',desc:'Every phase of growing up shaped who I am today. Curious, expressive, and always making.'},
];
let cHTML='<div class="carousel" id="carousel"><div class="carousel-vp"><div class="carousel-track" id="cTrack">';
slides.forEach(s=>{cHTML+=`<div class="carousel-slide"><img src="${s.img}" alt="${s.title}" onclick="lbox(this.src)"><div class="c-ov"><h4>${s.title}</h4><p>${s.desc}</p></div></div>`});
cHTML+='</div></div><button class="c-prev" id="cPrev">&#8249;</button><button class="c-next" id="cNext">&#8250;</button><div class="carousel-dots" id="cDots">';
slides.forEach((_,i)=>{cHTML+=`<button class="carousel-dot${i===0?' active':''}" data-i="${i}"></button>`});
cHTML+='</div></div>';
document.getElementById('sdImgs').innerHTML=cHTML;

let cIdx=0;const cTrack=document.getElementById('cTrack'),cDots=document.querySelectorAll('.carousel-dot');
function goSlide(i){
  cIdx=((i%slides.length)+slides.length)%slides.length;
  cTrack.style.transform=`translateX(-${cIdx*100}%)`;
  cDots.forEach((d,j)=>{d.classList.remove('active');if(j===cIdx){d.classList.add('active');d.style.animation='none';d.offsetHeight;d.style.animation=''}});
}
document.getElementById('cPrev').onclick=()=>{clearInterval(cAuto);goSlide(cIdx-1);startAuto()};
document.getElementById('cNext').onclick=()=>{clearInterval(cAuto);goSlide(cIdx+1);startAuto()};
cDots.forEach(d=>d.onclick=()=>{clearInterval(cAuto);goSlide(+d.dataset.i);startAuto()});
let cAuto;
function startAuto(){cAuto=setInterval(()=>goSlide(cIdx+1),4200)}
startAuto();
document.getElementById('carousel').onmouseenter=()=>clearInterval(cAuto);
document.getElementById('carousel').onmouseleave=()=>startAuto();
let touchX=0;
document.getElementById('carousel').addEventListener('touchstart',e=>{touchX=e.touches[0].clientX});
document.getElementById('carousel').addEventListener('touchend',e=>{const d=touchX-e.changedTouches[0].clientX;if(Math.abs(d)>40){clearInterval(cAuto);goSlide(cIdx+(d>0?1:-1));startAuto()}});

// ═══ CARDS — text only, no images ═══
document.getElementById('flCards').innerHTML=`
<div class="card" onclick="openM('piracy')"><div class="card-body"><span class="card-cat">Virtual Social Behaviour</span><h3 class="card-t">Piracy in Telegram</h3><p class="card-d">How social behaviours exist in virtual platforms and how the interface facilitates such behaviour</p><div class="card-arr">Read more &rarr;</div></div></div>
<div class="card" onclick="openM('behavior')"><div class="card-body"><span class="card-cat">Behavioural Design</span><h3 class="card-t">Clean Hands Among Food Vendors</h3><p class="card-d">Understanding and influencing hygiene behaviour through design interventions</p><div class="card-arr">Read more &rarr;</div></div></div>`;

document.getElementById('dfCards').innerHTML=`
<div class="card" onclick="openM('service')"><div class="card-body"><span class="card-cat">Service Design</span><h3 class="card-t">Empowering Student Decisions</h3><p class="card-d">Designing a service ecosystem for clarity in decision-making</p><div class="card-arr">Read more &rarr;</div></div></div>
<div class="card" onclick="openM('shell')"><div class="card-body"><span class="card-cat">User Research</span><h3 class="card-t">UX Research at Shell</h3><p class="card-d">Strengthening Service Design and UXR practices at enterprise scale</p><div class="card-arr">Read more &rarr;</div></div></div>
<div class="card" onclick="openM('wedding')"><div class="card-body"><span class="card-cat">UXR & Service Design</span><h3 class="card-t">Wedding Workforce</h3><p class="card-d">Technology as a bridge for fair pay and dignity in Indian weddings</p><div class="card-arr">Read more &rarr;</div></div></div>`;

// ═══ PROJECTS — correct hero images, no duplicity ═══
const P={
piracy:{cat:'Virtual Social Behaviour',t:'Piracy in Telegram',
  tags:['Netnography','Autonetnography','Interviews','UX Strategies','UI Mockups'],
  summary:'This project looks into how human social behaviours exist in a virtual platform and how the interface triggers or facilitates such behaviour. Through netnography, autonetnography, and interviews, we explored piracy culture on Telegram and designed UX interventions to make users more conscious of their choices.',
  hero:I.p5,
  b:`<p><strong>Timeline:</strong> 4 weeks &nbsp;|&nbsp; <strong>Type:</strong> Individual project</p><p><strong>Primary research:</strong> Netnography, Autonetnography, Interviews<br><strong>Secondary research:</strong> Articles, Research papers, Documentaries</p><img src="${I.p1}"><h3>What Rules the World Today?</h3><p>Information/content. This information is often gatekept and considered Intellectual Property. Gatekeeping information and monetizing it makes it inaccessible to all classes of people.</p><img src="${I.p2}"><h3>Triangle of Digital Responsibility</h3><p>Piracy as acceptable and normative behavior. Blurred line between ethical and unethical download.</p><img src="${I.p3}"><h3>Two Schools of Thought</h3><p><strong>Known/accepted deviancy:</strong> It isn't theft, it's duplication. Gateway for less fortunate people to access high end.</p><p><strong>Pain to creators:</strong> Eats away profits. "Get everything for free" mindset.</p><img src="${I.p4}"><h3>Why Does One Indulge in Piracy?</h3><p><strong>Extrinsic:</strong> Saving money, try and buy, perceived utility, expanding collection.</p><p><strong>Intrinsic:</strong> Excitement of getting something free, fun and achievement, breaking the rule.</p><img src="${I.p5}"><h3>Why Telegram?</h3><p>Up to 50 public/private groups per day. Unlimited channel members. 500+ resources. Wide reach, free, stable, ad-free.</p><img src="${I.p6}"><h3>Piracy in Telegram</h3><blockquote>"How might we make users more conscious of their choice to indulge in piracy and enable the platform to keep a stronger check on it?"</blockquote><img src="${I.p7}"><h3>Research & UX Strategies</h3><p>Analysis of existing UI, design interventions and their operationalization.</p><img src="${I.p8}"><h3>Solutions</h3><p>Divide the mass, paralyze the spreading channels. Business model considerations.</p><img src="${I.p9}"><img src="${I.p10}"><img src="${I.p11}"><img src="${I.p12}"><img src="${I.p13}">`},

behavior:{cat:'Behavioural Design',t:'Clean Hand Practice Among Street Food Vendors',
  tags:['Field Study','Behaviour Analysis','Change Canvas','Observations','Prototyping'],
  summary:'Understanding how people think, feel, and act to create designs that influence their behavior positively. Through field studies in Ahmedabad and Gandhinagar, we identified compromised hygiene as a core deviant behaviour and designed interventions using the Behaviour Change Canvas.',
  hero:I.b4,
  b:`<p><strong>Timeline:</strong> 4 weeks &nbsp;|&nbsp; <strong>Team:</strong> Swetha, Disha, Pramoddini</p><img src="${I.b1}"><h3>Objectives</h3><p>Identify and implement behavior change in the context of street food in Ahmedabad and Gandhinagar, India.</p><img src="${I.b2}"><h3>Research (3 Phases)</h3><p><strong>Phase 1:</strong> Visits to street food markets to identify patterns.</p><p><strong>Phase 2:</strong> Identify deviant behaviors, choose target behavior.</p><p><strong>Phase 3:</strong> Understand drivers, employ ideation techniques.</p><img src="${I.b3}"><h3>Field Observations</h3><p>Ease in street food environments. Unsaid vendor unity. Cooking exhibition as crowd puller and pusher.</p><img src="${I.b4}"><h3>Deviant Behaviours</h3><p><strong>Core:</strong> Compromised hygiene by vendors and customers. Gives liberty for other deviancies.</p><img src="${I.b6}"><h3>Design Intervention</h3><p>Behaviour Change Canvas: making handwashing the path of least resistance.</p><img src="${I.b5}">`},

service:{cat:'Service Design',t:'Empowering Students to Attain Clarity',
  tags:['Service Design','Market Need Research','Service Blueprint','Prototyping','5W Analysis'],
  summary:'How service design can reduce ambiguity, mental overload, and emotional conflict in decision-making. People don\'t lack options; they lack structure, reflection, and emotional grounding.',
  hero:I.s4,
  b:`<p><strong>Timeline:</strong> 4 weeks &nbsp;|&nbsp; <strong>Team:</strong> 3 members</p><img src="${I.s1}"><h3>Overview</h3><p>People don't lack options. They lack structure, reflection, and emotional grounding.</p><h3>5W Method</h3><p>Final chosen need: "The need to become decisive."</p><img src="${I.s3}"><h3>Understanding Decision Making</h3><blockquote>"Decision involving emotions and morality makes it difficult for me"</blockquote><blockquote>"I take decisions out of randomness when confusing and later regret"</blockquote><img src="${I.s2}"><h3>What Was Designed?</h3><p>Service framework: guided sessions, cue cards, spatial design, reflective tools.</p><img src="${I.s4}">`},

shell:{cat:'User Research',t:'UX Research at Shell',
  tags:['Design Maturity','Stakeholder Interviews','Framework Development','Co-creation','DesignOps'],
  summary:'Strengthening the role of Service Design and User Research within Shell\'s Experience Design team by addressing gaps in design maturity through interviews with 7 seasoned practitioners.',
  hero:I.sh2,
  b:`<img src="${I.sh1}"><h3>Research Plan</h3><p><strong>Participants:</strong> 7 Shell practitioners &nbsp;|&nbsp; <strong>Sessions:</strong> 1 hour each</p><img src="${I.sh2}"><h3>Lack of Understanding of Design Value</h3><blockquote>"Stakeholders don't always understand the value we offer."</blockquote><img src="${I.sh3}"><img src="${I.sh4}"><h3>Business Owns the Beginning</h3><blockquote>"Definition is completed by a SME and we're brought in after."</blockquote><img src="${I.sh5}"><h3>Lack of Systematization</h3><blockquote>"I don't know where to go when I join a project."</blockquote><img src="${I.sh6}"><h3>UX Theatre</h3><blockquote>"I am viewed as an add-on, a fire-fighter."</blockquote><img src="${I.sh7}"><h3>Measuring Impact</h3><p>Design value dashboard linking UX metrics to business KPIs.</p><img src="${I.sh8}">`},

wedding:{cat:'UXR & Service Design',t:'Reimagining the Wedding Workforce',
  tags:['Ethnographic Research','Service Design','Platform Design','Stakeholder Mapping'],
  summary:'Designing a digital platform for fair work and payment transparency in the Indian wedding industry. With 8 to 10 million weddings annually, we mapped stakeholders and proposed solutions.',
  hero:I.e3,
  b:`<img src="${I.e1}"><h3>Economic Impact</h3><p>8 to 10 million weddings/year. Over 10 million in the "wedding economy."</p><img src="${I.e2}"><h3>Stakeholder Map</h3><img src="${I.e3}"><h3>Current State</h3><p>Informal workers: delayed payments, no contracts, poor conditions.</p><img src="${I.e5}"><h3>Solutions</h3><p><strong>Policy:</strong> Social security, micro-insurance.</p><p><strong>Tech:</strong> Digital escrow, job-matching platforms.</p><p><strong>Industry:</strong> Vendor guilds, fair-work certification.</p><img src="${I.e4}"><h3>Goal</h3><p>Neutral digital ecosystem for vendors, labourers, clients, and planners.</p><img src="${I.e6}"><img src="${I.e7}"><img src="${I.e8}">`}
};

// ═══ ABOUT — corrected experience, separate sections ═══
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
  <div class="ab-activity">
    <div class="ab-act-txt" style="flex:1">
      <div class="tl"><span class="dt">Mar 2024 to Mar 2025</span>
        <div class="rl">Luxury Event Decor Company, Hyderabad</div>
        <div class="og">1 Year</div>
        <div class="ds">Gained hands-on experience in high-end event decor operations. Created and defined internal work libraries and systems to formalise and simplify work.</div>
      </div>
    </div>
    <div style="display:flex;gap:.6rem;flex-wrap:wrap">
      <img class="ab-act-img" src="${I.ab2}" alt="Event work" onclick="lbox(this.src)">
      <img class="ab-act-img" src="${I.ab3}" alt="Decor" onclick="lbox(this.src)">
      <img class="ab-act-img" src="${I.ab4}" alt="Events" onclick="lbox(this.src)">
      <img class="ab-act-img" src="${I.ab6}" alt="Setup" onclick="lbox(this.src)">
    </div>
  </div>
  <div class="ab-activity">
    <div class="ab-act-txt">
      <div class="tl"><span class="dt">Aug 2023 to Feb 2024</span>
        <div class="rl">User Researcher, Shell</div>
        <div class="og">Experience Design Team</div>
        <div class="ds">Worked on enterprise-level UX research initiatives. Led and participated in projects involving design systems research and case studies on Google, Microsoft, Intuit, Samsung and Salesforce systems. Contributed to shaping Shell's internal design system strategy.</div>
      </div>
    </div>
  </div>
</div>

<div class="ab-section">
  <h3 class="ab-st">Blogging</h3>
  <div class="ab-activity">
    <img class="ab-act-img" src="${I.ab5}" alt="Skinlanguage" onclick="lbox(this.src)" style="width:180px;height:160px">
    <div class="ab-act-txt">
      <div class="tl">
        <div class="rl">The Skinlanguage</div>
        <div class="og">Skincare Content Blog</div>
        <div class="ds">Founded The Skinlanguage, a skincare content blog with a 1.6k community and 20+ brand partnerships. Produced 100+ pieces of content combining design thinking with skincare education.</div>
      </div>
    </div>
  </div>
</div>

<div class="ab-section">
  <h3 class="ab-st">Volunteering & Social Work</h3>
  <div class="ab-activity">
    <div style="display:flex;gap:.6rem;flex-wrap:wrap">
      <img class="ab-act-img" src="${I.ab7}" alt="Volunteering" onclick="lbox(this.src)" style="width:140px;height:160px">
      <img class="ab-act-img" src="${I.ab8}" alt="Social work" onclick="lbox(this.src)" style="width:140px;height:160px">
      <img class="ab-act-img" src="images/volunteer1.jpg" alt="Volunteer" onclick="lbox(this.src)" style="width:140px;height:160px">
      <img class="ab-act-img" src="images/volunteer2.jpg" alt="Volunteer" onclick="lbox(this.src)" style="width:140px;height:160px">
    </div>
  </div>
  <div class="ab-act-txt" style="margin-top:.5rem">
    <div class="tl">
      <div class="rl">Art Workshops & Community</div>
      <div class="ds">Taken art workshops in kids shelter and care. Volunteered in various social cause projects like public wall paintings and relief collection for Chennai floods.</div>
    </div>
    <div class="tl">
      <div class="rl">Outreach Design for AID India</div>
      <div class="ds">Designed flyers and posters for the toy drive. Approached apartments and playschools to present regarding organizing the drive. Successfully conducted the drive in two gated communities.</div>
    </div>
  </div>
</div>

<div class="ab-section">
  <div class="ab-2col"><div>
    <h3 class="ab-st">Education</h3>
    <div class="tl"><div class="rl">M.Des, Strategic Design Management</div><div class="og">National Institute of Design, Gandhinagar</div></div>
    <div class="tl"><div class="rl">B.Arch, Architecture</div><div class="og">Anna University, MSOA</div></div>
    <h3 class="ab-st" style="margin-top:1.5rem">Skills</h3>
    <div class="sk-g"><span class="sk">Design Research</span><span class="sk">Trend Mapping</span><span class="sk">Project Management</span><span class="sk">Stakeholder Mgmt</span><span class="sk">Branding</span><span class="sk">Social Media Strategy</span><span class="sk">Communication Systems</span><span class="sk">Process Design</span><span class="sk">Content Creation</span></div>
  </div><div>
    <h3 class="ab-st">Tools</h3>
    <div class="tools"><span class="tool">Figma</span><span class="tool">Miro</span><span class="tool">Canva</span><span class="tool">Adobe PS</span><span class="tool">Adobe AI</span><span class="tool">MS Office</span></div>
  </div></div>
</div>`;

// ═══ BACKGROUND PARTICLES for all sections ═══
document.querySelectorAll('.sec').forEach(sec=>{
  const pc=document.createElement('div');pc.classList.add('bg-particles');
  for(let i=0;i<12;i++){
    const p=document.createElement('div');p.classList.add('bg-p');
    p.style.left=Math.random()*100+'%';
    p.style.top=Math.random()*100+'%';
    p.style.animationDelay=Math.random()*8+'s';
    p.style.animationDuration=(6+Math.random()*6)+'s';
    const sz=2+Math.random()*4;p.style.width=sz+'px';p.style.height=sz+'px';
    p.style.background=['#D4A017','#E8960C','#E07C5A','#FFD233','#F2D06B'][Math.floor(Math.random()*5)];
    pc.appendChild(p);
  }
  sec.appendChild(pc);
});

// ═══ SCROLL & JOURNEY PROGRESS — synced to full height ═══
const M=document.getElementById('M'),secs=document.querySelectorAll('.sec'),items=document.querySelectorAll('.t-item');
const jProg=document.getElementById('jProg'),jLine=document.querySelector('.journey-line');
let cur=0;
function go(i){secs[i]&&secs[i].scrollIntoView({behavior:'smooth'})}

function updateTracker(a){
  if(a!==cur){
    cur=a;
    items.forEach((n,i)=>{n.classList.remove('act','pass');if(i===a)n.classList.add('act');else if(i<a)n.classList.add('pass')});
  }
  // Sync progress bar to scroll position
  if(jProg){
    const scrollPct=M.scrollTop/(M.scrollHeight-M.clientHeight);
    const trackEl=document.querySelector('.sb-track');
    const lineTop=parseFloat(getComputedStyle(jLine).top)||0;
    const lineH=trackEl.clientHeight;
    jProg.style.height=Math.min(scrollPct*lineH,lineH)+'px';
  }
}

M.addEventListener('scroll',()=>{
  let a=0;
  secs.forEach((s,i)=>{if(M.scrollTop>=s.offsetTop-M.clientHeight/2)a=i});
  updateTracker(a);
  rv();
});

function rv(){document.querySelectorAll('.rv').forEach(el=>{const r=el.getBoundingClientRect(),mr=M.getBoundingClientRect();if(r.top<mr.bottom-40)el.classList.add('vis')})}
setTimeout(rv,100);

// Heat particles for deep fry
const hpC=document.getElementById('hpC');
for(let i=0;i<20;i++){
  const d=document.createElement('div');d.classList.add('hp');
  d.style.left=Math.random()*100+'%';
  d.style.animationDelay=Math.random()*3+'s';
  d.style.animationDuration=(2+Math.random()*3)+'s';
  const sz=2+Math.random()*4;d.style.width=sz+'px';d.style.height=sz+'px';
  d.style.background=['#D4A017','#E8960C','#E07C5A','#FFD233'][Math.floor(Math.random()*4)];
  hpC.appendChild(d);
}

// ═══ MODAL — summary then expand, NO duplicity ═══
const mOv=document.getElementById('mOv'),mC=document.getElementById('mC'),mhCat=document.getElementById('mhCat'),modal=document.getElementById('modal');
function openM(k){
  const p=P[k];if(!p)return;
  mhCat.textContent=p.cat;
  mC.innerHTML=`<h3 class="m-title">${p.t}</h3>
    <div class="m-tags">${p.tags.map(t=>`<span class="m-tag">${t}</span>`).join('')}</div>
    ${p.hero?`<img src="${p.hero}" style="width:100%;border-radius:10px;margin-bottom:1rem;opacity:.85">`:''} 
    <div class="m-summary">${p.summary}</div>
    <button class="m-expand-btn" onclick="document.getElementById('modal').classList.add('expanded');this.closest('.modal').scrollTop=0">View full project &darr;</button>
    <div class="m-body">${p.b}</div>`;
  mOv.classList.add('open');
  modal.classList.remove('expanded');
  modal.scrollTop=0;
}
function closeM(){mOv.classList.remove('open')}
mOv.addEventListener('click',e=>{if(e.target===mOv)closeM()});
document.getElementById('mExp').addEventListener('click',()=>modal.classList.toggle('expanded'));

// About
const aOv=document.getElementById('aOv');
document.getElementById('abBtn').onclick=()=>aOv.classList.add('open');
document.getElementById('aX').onclick=()=>aOv.classList.remove('open');
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

// Blob parallax
document.addEventListener('mousemove',e=>{
  const x=(e.clientX/window.innerWidth-.5)*2,y=(e.clientY/window.innerHeight-.5)*2;
  document.querySelectorAll('.blob').forEach((b,i)=>{const s=(i+1)*5;b.style.transform=`translate(${x*s}px,${y*s}px)`});
});

// ═══ CUSTOM CURSOR ═══
const cursor=document.getElementById('crs');
const cursorLabel=document.getElementById('crsLbl');
let mouseX=0,mouseY=0,crsX=0,crsY=0;

document.addEventListener('mousemove',e=>{mouseX=e.clientX;mouseY=e.clientY});

function animCursor(){
  crsX+=(mouseX-crsX)*.15;
  crsY+=(mouseY-crsY)*.15;
  cursor.style.left=crsX+'px';
  cursor.style.top=crsY+'px';
  cursorLabel.style.left=crsX+'px';
  cursorLabel.style.top=(crsY+38)+'px';
  requestAnimationFrame(animCursor);
}
animCursor();

// Hover detection for cursor magnification
const hoverables='a,button,.card,.pill,.t-item,.sb-btn,.social-link,.dl-btn,.c-link,.m-btn,.ab-x,.carousel-slide img';
document.addEventListener('mouseover',e=>{
  const t=e.target.closest(hoverables);
  if(t){
    cursor.classList.add('hover');
    let lbl='';
    if(t.matches('.card'))lbl='View';
    else if(t.matches('.t-item'))lbl='Go';
    else if(t.matches('.pill'))lbl='';
    else if(t.matches('.dl-btn'))lbl='Download';
    else if(t.matches('.social-link,.c-link'))lbl='Open';
    else if(t.matches('button'))lbl='Click';
    else if(t.matches('.carousel-slide img'))lbl='Zoom';
    else if(t.matches('a'))lbl='Open';
    if(lbl){cursorLabel.textContent=lbl;cursorLabel.classList.add('show')}
  }
});
document.addEventListener('mouseout',e=>{
  const t=e.target.closest(hoverables);
  if(t){cursor.classList.remove('hover');cursorLabel.classList.remove('show');cursorLabel.textContent=''}
});

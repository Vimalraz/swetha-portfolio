// ═══ IMAGE URLS ═══
const I={
// Soft dough
sd_act:'images/0f68d0_4f166f852c484.jpg',
sd_upcycle:'images/0f68d0_b00e0015156c4.jpg',
sd_art1:'images/0f68d0_1f5c8ab1c0af4.png',
sd_art2:'images/0f68d0_8585c661723e4.png',
sd_art3:'images/0f68d0_9b3b79ad881e4.png',
sd_arch:'images/2e8212_7d30ad38443c4.png',
sd_hist:'images/0f68d0_9a19b4b3597c4.png',
sd_tall:'images/0f68d0_3be4095896e64.png',
// Filling cards
fl_piracy:'images/0f68d0_6968ba6cda3d4.png',
fl_beh:'images/0f68d0_8ff332ba47ae4.png',
// Deep fry cards
df_svc:'images/0f68d0_a8eef99540764.png',
df_shell:'images/0f68d0_440e204d58434.png',
df_wed:'images/0f68d0_a8eef99540764.png',
// Piracy images
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
// Behavior images
b1:'images/2e8212_9fc07fd6d23d4.png',
b2:'images/2e8212_bc9b0c4cdcaf4.jpg',
b3:'images/2e8212_c8f3e980d4464.jpg',
b4:'images/2e8212_8e2a40c0edf14.png',
b5:'images/2e8212_6b59a382081e4.png',
b6:'images/2e8212_14efc33294224.png',
// Service design images
s1:'images/2e8212_1a508fff37624.jpg',
s2:'images/2e8212_31bf32d31b714.png',
s3:'images/2e8212_f3728c38a23c4.jpg',
s4:'images/2e8212_e3fa461f1d984.png',
// Shell images
sh1:'images/2e8212_0e00b78176414.png',
sh2:'images/2e8212_088a9f9eae374.png',
sh3:'images/0f68d0_0597275aef914.png',
sh4:'images/0f68d0_75108a3346fc4.png',
sh5:'images/2e8212_31eb43138e6a4.png',
sh6:'images/0f68d0_f7f65d1da6964.png',
sh7:'images/2e8212_90cae88e15474.png',
sh8:'images/2e8212_947f27eabaa44.png',
// Event images
e1:'images/2e8212_838c236df99c4.png',
e2:'images/0f68d0_efd9e87be3b14.jpg',
e3:'images/2e8212_e0df3804d4ae4.png',
e4:'images/2e8212_2d752c00b6944.png',
e5:'images/2e8212_c784b1d2b7b54.jpg',
e6:'images/0f68d0_e17c4f97d0454.jpg',
e7:'images/2e8212_53ca99d4c35b4.png',
e8:'images/2e8212_1f4842d3c30c4.jpg',
// About images
ab1:'images/2e8212_908a7d3e2f624.jpg',
ab2:'images/0f68d0_86f4cf1546044.jpg',
ab3:'images/0f68d0_afacc9e55f914.jpg',
ab4:'images/0f68d0_6887ae8c95214.jpg',
ab5:'images/2e8212_a2c9b63659094.jpg',
ab6:'images/0f68d0_e8e4bcbe54ea4.jpg',
ab7:'images/2e8212_1241dcf1f3104.png',
ab8:'images/2e8212_65286c01acaf4.png',
};

// ═══ POPULATE SECTIONS ═══
document.getElementById('sdImgs').innerHTML=[I.sd_act,I.sd_upcycle,I.sd_art1,I.sd_art2,I.sd_art3,I.sd_arch,I.sd_hist].map(u=>`<img class="sec-img" src="${u}" onclick="lbox(this.src)">`).join('');

document.getElementById('flCards').innerHTML=`
<div class="card" onclick="openM('piracy')"><img class="card-img" src="${I.fl_piracy}"><div class="card-body"><span class="card-cat">Virtual Social Behaviour</span><h3 class="card-t">Piracy in Telegram</h3><p class="card-d">How social behaviours exist in virtual platforms</p><div class="card-arr">→ View project</div></div></div>
<div class="card" onclick="openM('behavior')"><img class="card-img" src="${I.fl_beh}"><div class="card-body"><span class="card-cat">Behavioural Design</span><h3 class="card-t">Clean Hands Among Food Vendors</h3><p class="card-d">Influencing behaviour through design</p><div class="card-arr">→ View project</div></div></div>`;

document.getElementById('dfCards').innerHTML=`
<div class="card" onclick="openM('service')"><img class="card-img" src="${I.df_svc}"><div class="card-body"><span class="card-cat">Service Design</span><h3 class="card-t">Empowering Student Decisions</h3><p class="card-d">Clarity through service design</p><div class="card-arr">→ View project</div></div></div>
<div class="card" onclick="openM('shell')"><img class="card-img" src="${I.df_shell}"><div class="card-body"><span class="card-cat">User Research</span><h3 class="card-t">UX Research at Shell</h3><p class="card-d">Strengthening SD & UXR practices</p><div class="card-arr">→ View project</div></div></div>
<div class="card" onclick="openM('wedding')"><img class="card-img" src="${I.df_wed}"><div class="card-body"><span class="card-cat">UXR & Service Design</span><h3 class="card-t">Wedding Workforce</h3><p class="card-d">Fair pay & dignity in Indian weddings</p><div class="card-arr">→ View project</div></div></div>`;

// ═══ PROJECT DATA ═══
const P={
piracy:{cat:'Virtual Social Behaviour',t:'Piracy in Telegram — Robinhood of the Modern Era?',tags:['Netnography','Autonetnography','Interviews','UX Strategies','UI Mockups','Platform Research'],b:`<p>In the fast-paced world of technological advancements, this project aims to look into how human social behaviours exist in a virtual platform and how the interface triggers or facilitates such behaviour.</p><p><strong>Timeline:</strong> 4 weeks &nbsp;|&nbsp; <strong>Type:</strong> Individual project</p><p><strong>Primary research:</strong> Netnography, Autonetnography, Interviews<br><strong>Secondary research:</strong> Articles, Research papers, Documentaries</p><img src="${I.p1}"><h3>What Rules the World Today?</h3><p>Information/content. This information is often gatekept and is considered as Intellectual Property belonging to a person/organization/entity. This Gatekeeping of information and monetizing it, makes it inaccessible to all classes of people.</p><img src="${I.p2}"><h3>Triangle of Digital Responsibility</h3><p>Piracy as acceptable and normative behavior. Blurred line between ethical and unethical download. The downloading culture: create and distribute content, consume, share and copy — while IP is gatekept at every level.</p><img src="${I.p3}"><h3>Two Schools of Thought Revolving Around Piracy</h3><p><strong>Known/accepted deviancy:</strong> It isn't theft, it's mere duplication. Opened up multiple possibilities. Gateway for less fortunate people to access high end. Not a high impact crime when victims are larger organizations.</p><p><strong>Pain to creators:</strong> Eats away profits of the organization/creator. Get everything for free mindset.</p><img src="${I.p4}"><h3>Why Does One Indulge in Piracy?</h3><p><strong>Extrinsic Reward:</strong> Saving money, Try and buy, Perceived utility and value, Owning and expanding collection.</p><p><strong>Intrinsic Reward:</strong> Excitement of getting something free, Fun & sense of achievement, Breaking the rule, Perceived ownership, Access to whatever they wish for.</p><img src="${I.p5}"><h3>Why Telegram?</h3><p>Creation up to 50 public/private groups or channels per day. Unlimited members in a Channel. Can belong to 500+ resources. 20 bots creation per account. Up to 200k members in a group. Wide reach, free, stable and ad-free. Easy connectivity to different interfaces.</p><img src="${I.p6}"><h3>Piracy in Telegram</h3><p>The Delhi High Court directed Telegram to disclose details such as IP addresses, mobile numbers and devices used to operate channels involved in copyright infringement cases.</p><blockquote>"How might we make users of Telegram more conscious of their choice to indulge in piracy and enable the platform to keep a stronger check on it?"</blockquote><img src="${I.p7}"><h3>Research Methodology & UX Strategies</h3><p>Analysis of existing UI, design interventions and their operationalization. Strategy to UI conversion and iterations.</p><img src="${I.p8}"><h3>Solutions</h3><p>Divide the mass, paralyze the spreading channels. Business model considerations around Telegram's revenue streams: selling sponsored messages on a CPM-basis and premium subscriptions.</p><img src="${I.p9}"><img src="${I.p10}"><img src="${I.p11}"><img src="${I.p12}"><img src="${I.p13}">`},

behavior:{cat:'Behavioural Design',t:'Promoting Clean Hand Practice Among Street Food Vendors',tags:['Field Study','Behaviour Analysis','Change Canvas','Observations','Ideation','Prototyping'],b:`<p>The goal of behavioral design is to understand how people think, feel, and act in order to create designs that influence their behavior in a positive way.</p><p><strong>Timeline:</strong> 4 weeks &nbsp;|&nbsp; <strong>Team:</strong> Swetha, Disha, Pramoddini</p><img src="${I.b1}"><h3>Objectives & Scope</h3><p>To identify and implement behavior change in the context of street food. To observe human behavior, identify target behavior, and implement behavioral change. The study focuses on street food in Ahmedabad and Gandhinagar, India.</p><h3>Street Food: An Introduction</h3><p>Street foods have a long history in many nations. Around 2.5 billion people worldwide consume street food. Many cities are known for their street food — it has become a crucial part of their identities.</p><img src="${I.b2}"><h3>Research Methodology (3 Phases)</h3><p><strong>Phase 1 — Research & Observations:</strong> Various street food markets and stalls were visited multiple times, to identify common patterns among different typologies of street food stalls.</p><p><strong>Phase 2 — Identifying Target Behavior:</strong> Deviant behaviors were identified, and a target behavior was chosen to be converted to the desired behavior.</p><p><strong>Phase 3 — Attempting to Change:</strong> Drivers behind the behavior were understood and targeted to bring in change. Various ideation techniques were employed.</p><img src="${I.b3}"><h3>Field Study Observations</h3><p>General sense of ease in street food environments. Unsaid unity among street vendors. Street food is associated with temporality and informality. The clear exhibition of the cooking process has a dual effect: both a crowd puller and a crowd pusher. Techniques to attract customers: painting stalls in bright colors, using sounds to call out customers.</p><img src="${I.b4}"><h3>Identifying Deviant Behaviours</h3><p><strong>Core deviant behaviour:</strong> Compromised hygiene — both by vendors and customers in vicinity of shop. Littering, distrust about hygiene of drinking water. Closely linked: Compromised hygiene gives liberty for other deviancies. Vendors rinse their hands with water around the stall itself, either over a sewage.</p><img src="${I.b6}"><h3>Design Intervention & Prototyping</h3><p>Using the Behaviour Change Canvas framework, interventions were designed that made handwashing the path of least resistance — integrating seamlessly into existing vendor workflows.</p><img src="${I.b5}">`},

service:{cat:'Service Design',t:'Empowering Students to Attain Clarity While Taking Decisions',tags:['New Service Design','Market Need Research','Service Blueprint','Service Prototyping','Touchpoint','5W Analysis'],b:`<p>Understanding why people struggle with making clear decisions and how service design can help reduce ambiguity, mental overload, and emotional conflict during decision-making.</p><p><strong>Timeline:</strong> 4 weeks &nbsp;|&nbsp; <strong>Team:</strong> 3 members</p><img src="${I.s1}"><h3>Overview</h3><p><strong>What key problem emerged?</strong> People don't lack options — they lack structure, reflection, and emotional grounding while making decisions.</p><p><strong>Core findings:</strong> Decision fatigue is driven by information overload, emotional ambivalence, fear of consequences, and absence of guided support systems.</p><p><strong>Design opportunity:</strong> Design a service ecosystem that slows people down, helps them articulate choices, and supports reflective thinking rather than forcing quick decisions.</p><h3>Exploration & Need Identification</h3><p>Interactive wall exercises, wish box activities, informal interviews, and brainstorming revealed needs: venting out to improve mental health, scheduling/planning effectively, effective learning, connecting to people, thinking clearly, and becoming decisive.</p><h3>Research, Discover — 5W Method</h3><p>Elaborately worked on 5 chosen needs using 5W's method. The final chosen need: "The need to become decisive."</p><img src="${I.s3}"><h3>Understanding Decision Making</h3><p>Semi-structured interviews and secondary research helped understand the process of decision-making.</p><blockquote>"Decision involving a lot of emotions and morality makes it difficult for me"</blockquote><blockquote>"I mostly take decisions out of randomness when it's confusing and later regret or blame the situation"</blockquote><blockquote>"I need or seek reassurance whenever I decide, otherwise I subconsciously keep delaying it"</blockquote><img src="${I.s2}"><h3>What Was Designed?</h3><p>A service framework with multiple touchpoints — guided sessions, cue cards, spatial design, and reflective tools — that enable focused and confident decision-making. Aimed to reduce ambiguity, increase confidence, and improve clarity.</p><img src="${I.s4}"><h3>Way Forward</h3><p>Iterate and test prototypes with diverse user groups, refine service touchpoints, and scale the service for real-world application.</p>`},

shell:{cat:'User Research',t:'Improving User Research & Service Design Practices in Shell',tags:['Design Maturity','Stakeholder Interviews','Case Studies','Framework Development','Co-creation','DesignOps'],b:`<p>This project is designed to strengthen the role of Service Design (SD) and User Research (UXR) within Shell's Experience Design (EXD) team by addressing the gaps identified in design maturity.</p><img src="${I.sh1}"><h3>Areas of Enquiry</h3><p>Review design maturity models. Collect case studies illustrating successful interventions. Study how SD and UXR are practiced in large enterprises. Understand current state, identify barriers, co-create solutions, prototype and validate.</p><h3>Research Plan</h3><p><strong>Participants:</strong> 7 seasoned Shell practitioners &nbsp;|&nbsp; <strong>Session:</strong> 1 hour each<br><strong>Data collected:</strong> About them, Project & Team, Typical Approach, Frameworks/methodologies, Learnings, Challenges, Tools usage.</p><img src="${I.sh2}"><h3>Key Finding: Lack of Understanding of Design Value</h3><blockquote>"I feel like stakeholders don't always understand the value we offer, our practices, how we fit in, and differ from one another."</blockquote><p><strong>External Benchmark:</strong> IBM addressed this by launching company-wide Design Thinking, creating DesignOps roles. Microsoft made inclusive design a company-wide strategy.</p><img src="${I.sh3}"><img src="${I.sh4}"><h3>Business Owns the Beginning</h3><blockquote>"The definition and shaping is often completed by a SME and we're brought in after. Changing minds later becomes difficult."</blockquote><p><strong>External Benchmark:</strong> Atlassian solved this by embedding design at kickoff — no project could start without UXR/SD in discovery. Microsoft institutionalized inclusive design sprints.</p><h3>Insight Pushback — Socio-political Filters</h3><p>As a researcher, insights can be filtered through political and organizational lenses. SEEK addressed this with centralized research repositories and cross-functional showcases.</p><h3>Identification of Key Parts & Project Silos</h3><blockquote>"This is really a problem. It's just part of the job, a really important part that CANNOT be emphasized enough."</blockquote><p>SAP solved siloed decision-making by introducing Chief Design Officers. Salesforce used V2MOM planning for alignment.</p><img src="${I.sh5}"><h3>Lack of Systematization, Documentation & Handoffs</h3><blockquote>"I don't know where to go or who to go to when I join a project. Information is scattered."</blockquote><p>Atlassian created shared UI libraries and centralized research repositories. Microsoft and IBM invested in design system governance.</p><img src="${I.sh6}"><h3>EXD "The Auditor" & UX Theatre</h3><blockquote>"I am viewed as an add-on, a fire-fighter. It's difficult to do even this role when given a limited view of the project."</blockquote><p>Atlassian mandated design involvement at project kickoff. Google Ventures' Design Sprint model embeds design at the beginning.</p><img src="${I.sh7}"><h3>Measuring Impact</h3><p>Struggle with measuring design impact and showing ROI. Service design value is questioned if ROI isn't immediate or tangible. Salesforce tackled this by building a design value dashboard linking UX metrics directly to business KPIs.</p><img src="${I.sh8}">`},

wedding:{cat:'UXR & Service Design',t:'Reimagining the Wedding Workforce: Technology as a Bridge for Fair Pay and Dignity',tags:['Ethnographic Research','Service Design','Platform Design','Stakeholder Mapping','Policy Interventions'],b:`<p>Formalising the Informal: Designing a Digital Platform for Fair Work and Payment Transparency in the Indian Wedding Industry.</p><img src="${I.e1}"><h3>Employment & Economic Impact</h3><p>With 8-10 million weddings annually and market size in hundreds of billions, the bridal ecosystem supports significant vendors, labourers, freelancers, gig workers. Over 10 million people engaged in the "wedding economy."</p><img src="${I.e2}"><h3>Event Stakeholder Map</h3><img src="${I.e3}"><h3>Current State</h3><p>The Indian wedding industry employs millions of informal workers: decorators, florists, lightmen, photographers, caterers, drivers. They often face delayed payments, no contracts, poor working conditions, and no insurance.</p><img src="${I.e5}"><h3>Solution Set</h3><p><strong>Policy Interventions:</strong> Recognition of wedding services sector. Social security inclusion via micro-insurance, health cover. Promotion of organised segment via tax benefits.</p><p><strong>Technological Enablement:</strong> Digital payment systems & escrow for milestone payments. Job-matching platforms where labour can register skills, build portfolios.</p><p><strong>Industry-led Solutions:</strong> Vendor associations/guilds for negotiating fair rates. Fair-work certification for vendors committing to fair labour practices.</p><p><strong>Better Vendor Management:</strong> Clear scope & timeline documentation. Crew welfare planning for long/late jobs. Safety & equipment checks.</p><img src="${I.e4}"><h3>Goal</h3><p>Design a digital platform that acts as a neutral ecosystem connecting, regulating, and protecting vendors and labourers while helping clients and planners manage projects seamlessly.</p><img src="${I.e6}"><img src="${I.e7}"><img src="${I.e8}">`}
};

// ═══ ABOUT CONTENT ═══
document.getElementById('abC').innerHTML=`<div class="ab-lbl">About Me</div><h2 class="ab-h">Every phase has meaning.</h2><p class="ab-intro">Creative strategist with a Master's in Strategic Design Management and 2+ years of diverse experience in service design, brand storytelling, and project planning. I specialize in building systems, content strategies, and experiences that are both human-centered and culturally rooted.</p><div class="roles"><span class="role">Architect</span><span class="role">Planner</span><span class="role">Researcher</span><span class="role">Designer</span></div><div class="ab-imgs"><img src="${I.ab1}" onclick="lbox(this.src)"><img src="${I.ab2}" onclick="lbox(this.src)"><img src="${I.ab3}" onclick="lbox(this.src)"><img src="${I.ab4}" onclick="lbox(this.src)"><img src="${I.ab5}" onclick="lbox(this.src)"><img src="${I.ab6}" onclick="lbox(this.src)"><img src="${I.ab7}" onclick="lbox(this.src)"><img src="${I.ab8}" onclick="lbox(this.src)"></div><div class="ab-grid"><div><h3 class="ab-st">Journey</h3><div class="tl"><span class="dt">Apr 2025 → Present</span><div class="rl">Experience Designer</div><div class="og">Life in Frame Photography</div><div class="ds">Led service design blueprint for luxury event decor. Strategized brand positioning and go-to-market execution.</div></div><div class="tl"><span class="dt">Mar 2024 → Mar 2025</span><div class="rl">Service Designer & Design Coordinator</div><div class="og">Eat Drink and Party</div><div class="ds">Executed 30+ luxury weddings. Conducted design audits and built internal knowledge libraries.</div></div><div class="tl"><span class="dt">Sep 2023 → Feb 2024</span><div class="rl">Service Designer Intern</div><div class="og">Shell</div><div class="ds">Created research-backed communication framework for Experience Design team.</div></div><div class="tl"><span class="dt">Jul → Aug 2023</span><div class="rl">Design Strategist Intern</div><div class="og">Unilever</div><div class="ds">Researched communication strategies for NDPE policy on palm-based products.</div></div><div class="tl"><span class="dt">Aug 2022 → Aug 2024</span><div class="rl">Business Strategist (Freelance)</div><div class="og">Life in Frame Photography</div><div class="ds">Increased Instagram reach by 5x. Scaled video content to 1.5M+ views.</div></div><div class="tl"><span class="dt">2019 → 2022</span><div class="rl">Experience Designer</div><div class="og">The Skinlanguage</div><div class="ds">Built community of 1,500+ followers. Worked with 20+ skincare brands. Produced 100+ pieces of content.</div></div></div><div><h3 class="ab-st">Education</h3><div class="tl"><div class="rl">M.Des — Strategic Design Management</div><div class="og">National Institute of Design, Gandhinagar</div></div><div class="tl"><div class="rl">B.Arch — Architecture</div><div class="og">Anna University, MSOA</div></div><h3 class="ab-st" style="margin-top:1.2rem">Skills</h3><div class="sk-g"><span class="sk">Design Research</span><span class="sk">Trend Mapping</span><span class="sk">Project Management</span><span class="sk">Stakeholder Mgmt</span><span class="sk">Branding</span><span class="sk">Social Media Strategy</span><span class="sk">Communication Systems</span><span class="sk">Process Design</span><span class="sk">Content Creation</span></div><h3 class="ab-st" style="margin-top:1.2rem">Tools</h3><div class="tools"><span class="tool">Figma</span><span class="tool">Miro</span><span class="tool">Canva</span><span class="tool">Adobe PS</span><span class="tool">Adobe AI</span><span class="tool">MS Office</span></div><h3 class="ab-st" style="margin-top:1.2rem">Things I Love</h3><p style="font-size:.68rem;color:rgba(245,230,200,.4);line-height:1.6">Art workshops for kids with Karpi NGO, Chennai. Toy & book drives with AID India for tribal communities. Hosting, food styling, floral design, and content creation. Founded The Skinlanguage — a skincare content blog with 1.6k community and 20+ brand partnerships.</p></div></div>`;

// ═══ SCROLL & TRACKER ═══
const M=document.getElementById('M'),secs=document.querySelectorAll('.sec'),items=document.querySelectorAll('.t-item');
let cur=0;
function go(i){secs[i]&&secs[i].scrollIntoView({behavior:'smooth'})}
M.addEventListener('scroll',()=>{let a=0;secs.forEach((s,i)=>{if(M.scrollTop>=s.offsetTop-M.clientHeight/2)a=i});if(a!==cur){cur=a;items.forEach((n,i)=>{n.classList.remove('act','pass');if(i===a)n.classList.add('act');else if(i<a)n.classList.add('pass')})}rv()});
function rv(){document.querySelectorAll('.rv').forEach(el=>{const r=el.getBoundingClientRect(),mr=M.getBoundingClientRect();if(r.top<mr.bottom-40)el.classList.add('vis')})}
setTimeout(rv,100);

// Heat particles
const hpC=document.getElementById('hpC');for(let i=0;i<14;i++){const d=document.createElement('div');d.classList.add('hp');d.style.left=Math.random()*100+'%';d.style.animationDelay=Math.random()*3+'s';d.style.animationDuration=(2+Math.random()*3)+'s';const sz=2+Math.random()*3;d.style.width=sz+'px';d.style.height=sz+'px';d.style.background=Math.random()>.5?'#D4A017':'#E8960C';hpC.appendChild(d)}

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
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeM();aOv.classList.remove('open');document.getElementById('lb').classList.remove('open')}if(mOv.classList.contains('open')||aOv.classList.contains('open'))return;if(e.key==='ArrowDown'||e.key===' '){e.preventDefault();if(cur<secs.length-1)go(cur+1)}if(e.key==='ArrowUp'){e.preventDefault();if(cur>0)go(cur-1)}});

// Mouse parallax on blobs
document.addEventListener('mousemove',e=>{const x=(e.clientX/window.innerWidth-.5)*2,y=(e.clientY/window.innerHeight-.5)*2;document.querySelectorAll('.blob').forEach((b,i)=>{const s=(i+1)*4;b.style.transform=`translate(${x*s}px,${y*s}px)`})});

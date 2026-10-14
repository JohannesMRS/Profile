const CONTACT=[
 {label:'GitHub',href:'https://github.com/JohannesMRS'},   
 {label:'LinkedIn',href:'https://www.linkedin.com/in/jmrs-/?isSelfProfile=false'}, 
 {label: 'Instagram', href:'https://www.instagram.com/jhnssbrn/'},
 {label:'Email',href:'mailto:sibaranijohannes8@gmail.com',text:'sibaranijohannes8@gmail.com'}, 
];

const SKILLS=[
 {title:'Frontend Development',desc:'Responsive, accessible interfaces.',items:['Semantic HTML','CSS & Tailwind','Vanilla JavaScript','Responsive design']},
 {title:'Backend Development',desc:'Server logic and APIs.',items:['REST APIs','Authentication','Server-side logic']},
 {title:'Database Management',desc:'Modeling and querying data.',items:['Schema design','SQL queries','Data validation']},
 {title:'Tools & Workflow',desc:'How work gets shipped.',items:['Git & GitHub','Debugging','Code review']}
];

const STACK=[
 {category:'Frontend',items:[{name:'HTML5',note:'Markup'},{name:'CSS3',note:'Styling'},{name:'Tailwind CSS',note:'Utility styles'},{name:'JavaScript',note:'Behavior'}]},
 {category:'Backend',items:[ { name:'Node.js',note:'Runtime' }, {name:'PHP',note:'Server'}, {name: 'Go', note:'Server'}]},
 {category:'Database',items:[{name:'MySQL',note:'Relational'},{name:'PostgreSQL',note:'Relational'}, {name: 'Oracle', note:'Relational'}, {name: 'MongoDB', note: 'No Relational'}]},
 {category:'Tools',items:[{name:'Git',note:'Version control'},{name:'VS Code',note:'Editor'},{name:'Figma',note:'Design'}]}
];


const PROJECTS = [
  {
    title: 'Sistem Informasi Laundry Berkah',
    category: 'Web App',
    screenshot: 'assets/Laundry/home.jpeg',
    short: 'Digitizing the laundry ordering process',
    description: 'Sistem manajemen laundry berbasis web yang dikembangkan untuk Laundry Berkah, Amplas, Medan. Dirancang untuk mempermudah pengelolaan transaksi, pencatatan pesanan pelanggan, dan pemantauan status laundry guna meningkatkan efisiensi operasional bisnis.',
    problem: 'Customers located far away find it difficult to visit in person.',
    solution: 'Developing a system with tracking and payment features.',
    features: ['Automatic calculation based on laundry weight', 'Location tracking', 'Shipmen tracking'],
    tech: ['Laravel', 'Tailwind CSS', 'JavaScript', 'PostgreSQL'],
    challenges: '-',
    contribution: 'Setting up the database, building business logic, and creating relationships between models.',
    repo: 'https://github.com/JohannesMRS/pkm-amplas',
    live: ''
  },
  {
    title: 'Point Of Sales',
    category: 'POS',
    screenshot: 'assets/POS/kasir.png',
    short: 'Web-based POS application',
    description: 'The POS System is a web-based cashier application designed to help businesses efficiently manage sales transactions, product inventory, and financial reports. The system features an innovative interface that streamlines the transaction process, tracks stock availability, and generates structured, easy-to-interpret sales reports.',
    problem: 'Transaction recording is still manual and prone to loss.',
    solution: 'creating an application that includes transaction and financial record-keeping capabilities',
    features: ['Point of Sale', 'Product Management', 'Inventory Management', 'Transaction History'],
    tech: ['Laravel', 'Laravel Reverb', 'Inertia.js',  'TailwindCSS', 'JavaScript', 'Oracle'],
    challenges: '-',
    contribution: 'Designing database structures, developing controllers, and implementing database queries using ORM to support data management and application business workflows.',
    repo: '',
    live: ''
  },
  {
    title: 'Bussiness Development Katalog',
    category: 'Katalog Product',
    screenshot: 'assets/bd/home.png',
    short: 'Landing page with a product catalog',
    description: 'This landing page serves as a promotional platform and product catalog for products created by students of the Medan State Polytechnic. It showcases a variety of products registered through the Business Development platform, making it easy for potential customers to discover student-made products in a single location. The platform employs a business model based on renting digital storefronts to sellers via a monthly subscription fee. Project development focuses on presenting product information in an engaging manner, ensuring intuitive navigation, and providing a responsive design to support digital marketing and foster the growth of student businesses.',
    problem: 'Many students struggle to promote the products or services they are working on.',
    solution: 'Marketing and promoting their products or services through digital platforms such as this website',
    features: ['Seller management', 'Product and service management', 'Product and service search', 'Product and service catalog', 'Seller profile', 'Product and service details'],
    tech: ['Laravel', 'TailwindCSS', 'JavaScript', 'PostgreSQL', 'Localization'],
    challenges: 'The website does not support an integrated payment system, as payments are handled via WhatsApp directly with each seller.',
    contribution: 'Designing database structures, developing controllers, and implementing database queries using ORM to support data management and application business workflows, as well as creating AI agent prompts for the frontend.',
    repo: '',
    live: ''
  },

];

const ABOUT=[
 {t:'Biography',p:'My name is Johannes Mario Rafael Sibarani. I was born in Pematang Siantar on August 8, 2006, and I currently live in Medan.'},
 {t:'Development interests',p:'For now, I am interested in web and mobile app development.'},
 {t:'Problem-solving approach',p:"I don't solve problems using a broad outline; instead, I break them down into detailed parts."},
 {t:'Professional goals',p:'In the future, I want to become a backend developer.'}
];

// Helper
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tags=a=>a.map(t=>`<li class="tag">${esc(t)}</li>`).join('');
const placeholderShot=(label)=>'data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000"><rect width="1600" height="1000" fill="#262626"/><g stroke="#3A3A3A" stroke-width="2">${Array.from({length:15},(_,i)=>`<path d="M${i*110} 0V1000M0 ${i*70}H1600"/>`).join('')}</g><rect x="60" y="60" width="1480" height="60" fill="#1E1E1E" stroke="#3A3A3A" stroke-width="2"/><rect x="520" y="400" width="560" height="200" fill="none" stroke="#39FF14" stroke-width="3" stroke-dasharray="14 10"/><text x="800" y="490" fill="#F3F4F6" font-family="monospace" font-size="34" text-anchor="middle">SCREENSHOT PLACEHOLDER</text><text x="800" y="545" fill="#A3A3A3" font-family="monospace" font-size="28" text-anchor="middle">${esc(label)}</text></svg>`);
const shotSrc=p=>p.screenshot||placeholderShot(p.title);
const imgFallback=(img,p)=>{img.onerror=()=>{img.onerror=null;img.src=placeholderShot(p.title)}};

// Render
function render(){
 $('#skills-grid').innerHTML=SKILLS.map((s,i)=>`<article class="card p-6"><p class="f-jb text-xs muted">${String(i+1).padStart(2,'0')}</p><h3 class="text-xl font-bold mt-1">${esc(s.title)}</h3><p class="muted text-sm mt-1">${esc(s.desc)}</p><ul class="flex flex-wrap gap-2 mt-4">${tags(s.items)}</ul></article>`).join('');
 $('#stack-grid').innerHTML=STACK.map(g=>`<div><h3 class="f-fira text-sm ink mb-3">/ ${esc(g.category)}</h3><ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px border bd" style="background:var(--border)">${g.items.map(t=>`<li class="p-4" style="background:var(--surface)"><p class="f-head font-medium">${esc(t.name)}</p><p class="f-jb text-xs muted">${esc(t.note)}</p></li>`).join('')}</ul></div>`).join('');
 $('#project-grid').innerHTML=PROJECTS.map((p,i)=>`<article class="card pcard flex flex-col"><img class="shot" src="${esc(shotSrc(p))}" width="1600" height="1000" ${i?'loading="lazy"':''} decoding="async" alt="Screenshot of ${esc(p.title)}, a ${esc(p.category.toLowerCase())} project"><div class="p-5 flex flex-col flex-1"><p class="f-fira text-xs ink">${String(i+1).padStart(2,'0')} · ${esc(p.category)}</p><h3 class="text-xl font-bold mt-1">${esc(p.title)}</h3><p class="muted text-sm mt-2 flex-1">${esc(p.short)}</p><ul class="flex flex-wrap gap-2 mt-4">${tags(p.tech)}</ul><button type="button" class="btn mt-5 self-start" data-i="${i}" aria-label="View details: ${esc(p.title)}">View details →</button></div></article>`).join('');
 $$('#project-grid img').forEach((im,i)=>imgFallback(im,PROJECTS[i]));
 $('#about-grid').innerHTML=ABOUT.map(a=>`<article class="card p-6"><h3 class="f-fira text-sm ink">${esc(a.t)}</h3><p class="mt-2 muted">${esc(a.p)}</p></article>`).join('');
 $('#contact-links').innerHTML=CONTACT.filter(c=>c.href).map(c=>`<li><a class="underline underline-offset-4" href="${esc(c.href)}"${c.href.startsWith('http')?' target="_blank" rel="noopener noreferrer"':''}>${esc(c.text||c.label)}<span class="sr-only">${c.href.startsWith('http')?' (opens in new tab)':''}</span></a></li>`).join('');
 $('#year').textContent=new Date().getFullYear();
}

// Theme
function applyThemeUI(){const t=document.documentElement.dataset.theme,next=t==='dark'?'light':'dark';$('#theme-txt').textContent=`Switch to ${next} theme`;$('#theme-ico').textContent=t==='dark'?'☀':'☾';$('#theme').setAttribute('title',`Switch to ${next} theme`)}
$('#theme').addEventListener('click',()=>{const t=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}applyThemeUI()});

// Mobile Navbar
const mBtn=$('#menu-btn'),mNav=$('#mobile-nav');
function setMenu(open){mNav.classList.toggle('hidden',!open);mNav.classList.toggle('flex',open);mBtn.setAttribute('aria-expanded',open);$('#menu-ico').textContent=open?'✕':'≡'}
mBtn.addEventListener('click',()=>setMenu(mBtn.getAttribute('aria-expanded')!=='true'));
mNav.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mBtn.getAttribute('aria-expanded')==='true'){setMenu(false);mBtn.focus()}});
matchMedia('(min-width:768px)').addEventListener('change',e=>{if(e.matches)setMenu(false)});

// Action section + reveal
function observe(){
 const links=$$('.nav-link');
 const spy=new IntersectionObserver(es=>es.forEach(e=>{

  if(e.isIntersecting)links.forEach(l=>{
    if(l.getAttribute('href')==='#'+e.target.id)l.setAttribute('aria-current','true');else l.removeAttribute('aria-current')
  })

 }),
 {rootMargin:'-40% 0px -55% 0px'});

 links.forEach(l=>l.removeAttribute('aria-current'));
 $$('main section[id]').forEach(s=>spy.observe(s));

 const rv=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){
    e.target.classList.add('in');rv.unobserve(e.target)
  }
 }),
 {threshold:.08});

 $$('.reveal').forEach(r=>rv.observe(r));
}

// Cursor lightning
function lighting(){
 const lit=$('#lit');
 if(!matchMedia('(hover:hover) and (pointer:fine)').matches||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 let x=0,y=0,queued=false;
 const paint=()=>{
  queued=false;lit.style.setProperty('--mx',x+'px');lit.style.setProperty('--my',y+'px')
 };

 addEventListener('pointermove',e=>{
  x=e.clientX;y=e.clientY;lit.classList.add('on');if(!queued){queued=true;requestAnimationFrame(paint)}
 },
 {passive:true});

 document.addEventListener('pointerleave',()=>lit.classList.remove('on'));
}

// Project dialog
const dlg=$('#dlg');let opener=null;
const list=(a)=>`<ul class="list-disc pl-5 space-y-1">${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
function openProject(i,trigger){
 const p=PROJECTS[i];opener=trigger;
 const links=[
  p.repo&&{h:p.repo,t:'Repository'},
  p.live&&{h:p.live,t:'Live project'}
 ].filter(Boolean);

 $('#dlg-body').innerHTML=`<div class="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 py-3 border-b bd" style="background:var(--surface)"><p class="f-fira text-xs ink">${esc(p.category)}</p><button type="button" class="btn py-1" id="dlg-close">Close ✕</button></div>
 <img class="shot" src="${esc(shotSrc(p))}" width="1600" height="1000" alt="Full screenshot of ${esc(p.title)}">
 <div class="dl p-5 md:p-8"><h2 id="dlg-title" class="text-3xl font-bold">${esc(p.title)}</h2><p class="muted mt-2">${esc(p.description)}</p>
 <div class="grid md:grid-cols-2 gap-x-8"><div><h4>Problem</h4><p>${esc(p.problem)}</p><h4>Solution</h4><p>${esc(p.solution)}</p><h4>Technical challenges</h4><p>${esc(p.challenges)}</p></div>
 <div><h4>Key features</h4>${list(p.features)}<h4>Personal contribution</h4><p>${esc(p.contribution)}</p><h4>Tech stack</h4><ul class="flex flex-wrap gap-2">${tags(p.tech)}</ul></div></div>
 ${links.length?`<div class="flex flex-wrap gap-3 mt-8">${links.map((l,k)=>`<a class="btn ${k?'':'btn-primary'}" href="${esc(l.h)}" target="_blank" rel="noopener noreferrer">${l.t} ↗<span class="sr-only"> (opens in new tab)</span></a>`).join('')}</div>`:''}</div>`;
 imgFallback($('#dlg-body img'),p);
 dlg.showModal();document.documentElement.style.overflow='hidden';
}

$('#project-grid').addEventListener('click',e=>{
  const b=e.target.closest('button[data-i]');if(b)openProject(+b.dataset.i,b)
});

dlg.addEventListener('click',e=>{
  if(e.target===dlg||e.target.closest('#dlg-close'))dlg.close()
});

dlg.addEventListener('close',()=>{
  document.documentElement.style.overflow='';opener&&opener.focus()
});

render();
applyThemeUI();
observe();
lighting();
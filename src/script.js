// Initialize Vercel Analytics
import { inject } from '@vercel/analytics';
inject();

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
    description: 'A web-based laundry management system developed for Laundry Berkah in Amplas, Medan. It is designed to streamline transaction management, the recording of customer orders, and the monitoring of laundry status, with the goal of enhancing operational business efficiency.',
    problem: 'Customers located far away find it difficult to visit in person.',
    solution: 'Developing a system with tracking and payment features.',
    features: ['Automatic calculation based on laundry weight', 'Location tracking', 'Shipmen tracking'],
    tech: ['Laravel', 'Tailwind CSS', 'JavaScript', 'PostgreSQL', 'Leaflet', 'Google Maps'],
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

const ORGANIZATIONS=[
 {
  name:'HMPS Manajemen Informatika',
  role:'Internal Division Member',
  period:'2024 – 2025',
  description:'The internal division is responsible for activities aimed at strengthening bonds among students, and it serves as a communication bridge between the study program and the students—and vice versa.',
  // points:['Kontribusi atau tanggung jawab pertama'],
  images:[
   {src:'assets/organization/2024.jpeg',alt:'INTERNAL DIVISION'},
   {src:'assets/organization/2024(2).JPG',alt:'Grand Deliberation'},
   {src:'assets/organization/2024(3).jpg',alt:'MI Goes To School (Introduction to Information Management at SMKN 16 Medan)'},
   {src:'assets/organization/2024(4).jpg',alt:'Mi Care & Share (Visiting an orphanage)'},
  ],
  imageAlt:'Internal division 2024-2025'
 },
 {
  name:'HMPS Manajemen Informatika',
  role:'Head of Internal Division',
  period:'2025 – 2026',
  description:'The internal division is responsible for activities aimed at strengthening bonds among students, and it serves as a communication bridge between the study program and the students—and vice versa.',
  points:[],
  images:[
    {src:'assets/organization/2025(2).JPG',alt:'INTERNAL DIVISION'},
    {src:'assets/organization/2025(3).jpg',alt:'CONVERGENCE CABINET'},
    {src:'assets/organization/2025(4).JPG',alt:'MI Kindess Day (Visiting an orphanage)'},

  ],
  imageAlt:'Internal Division 2025-2026'
 }
];

const ACHIEVEMENTS=[
 {
  title:'Python Certificate',
  issuer:'Dicoding Indonesia',
  year:'2026',
  // level:'Nasional',
  description:'Completed the Python programming course on Dicoding to gain an understanding of programming fundamentals, the use of variables, control structures, functions, and data processing using Python.',
  images:[
    {src:'assets/achievements/python/python.jpg'},
    {src:'assets/achievements/python/python(2).jpg'},
    {src:'assets/achievements/python/python(3).jpg'},
  ],
  imageAlt:'Python certificate from dicoding indonesia',
  link:'',
  linkLabel:'View certificate'

 },
 {
  title:'AI Fundamentals Certificate',
  issuer:'Dicoding Indonesia',
  year:'2025',
  level:'',
  description:'Successfully completed the AI Fundamentals course at Dicoding, gaining foundational knowledge of artificial intelligence concepts, real-world applications, and the role of AI in modern technology development.',
  images:[
    {src:'assets/achievements/fundamental_ai/fundamental_ai.jpg'},
    {src:'assets/achievements/fundamental_ai/fundamental_ai(2).jpg'},
  ],
  imageAlt:'Fundamental of ai from dicoding indonesia',
  link:''
 },
 {
  title:'Machine Learning Certificate',
  issuer:'Google Developer Group on Campus USU',
  year:'2025',
  level:'',
  description:'Gained foundational knowledge of machine learning concepts and their applications in developing data-driven solutions through a learning program organized by Google Developer Groups (GDG).',
  images:[
    {src:'assets/achievements/gdg/MLgdg/ml.jpg'},
  ],
  imageAlt:'Machine learning from gdg',
  link:''
 },
 {
  title:'Web Development Certificate',
  issuer:'Google Developer Group on Campus USU',
  year:'2025',
  level:'',
  description:'Gained knowledge of web development concepts, web technologies, and development practices for building functional web applications through a learning program organized by Google Developer Groups (GDG).',
  images:[
    {src:'assets/achievements/gdg/webgdg/web.jpg'},
  ],
  imageAlt:'Web development from gdg',
  link:''
 }
];

const ABOUT=[
 {t:'Biography',p:'My name is Johannes Mario Rafael Sibarani. I was born in Pematang Siantar on August 8, 2006, and I currently live in Medan.'},
 {t:'Development interests',p:'For now, I am interested in web and mobile app development.'},
 {t:'Problem-solving approach',p:"I don't solve problems using a broad outline; instead, I break them down into detailed parts."},
 {t:'Professional goals',p:'In the future, I want to become a backend developer.'}
];

const ABOUT_PHOTO={
 src:'assets/jo-pixel(2).jpeg',
 alt:'Foto Johannes Mario Rafael Sibarani',
 caption:'JMRS · Medan, Indonesia'
};

// Helper
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tags=a=>a.map(t=>`<li class="tag">${esc(t)}</li>`).join('');
const placeholderShot=(label)=>'data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000"><rect width="1600" height="1000" fill="#262626"/><g stroke="#3A3A3A" stroke-width="2">${Array.from({length:15},(_,i)=>`<path d="M${i*110} 0V1000M0 ${i*70}H1600"/>`).join('')}</g><rect x="60" y="60" width="1480" height="60" fill="#1E1E1E" stroke="#3A3A3A" stroke-width="2"/><rect x="520" y="400" width="560" height="200" fill="none" stroke="#39FF14" stroke-width="3" stroke-dasharray="14 10"/><text x="800" y="490" fill="#F3F4F6" font-family="monospace" font-size="34" text-anchor="middle">SCREENSHOT PLACEHOLDER</text><text x="800" y="545" fill="#A3A3A3" font-family="monospace" font-size="28" text-anchor="middle">${esc(label)}</text></svg>`);
const shotSrc=p=>p.screenshot||placeholderShot(p.title);
const imgFallback=(img,p)=>{img.onerror=()=>{img.onerror=null;img.src=placeholderShot(p.title)}};
const getImages=o=>o.images?.length?o.images:(o.image?[{src:o.image,alt:o.imageAlt||''}]:[]);
const thumbHTML=(type,i,title,imgs)=>imgs.length?`<button type="button" class="thumb" data-gallery="${type}" data-i="${i}" aria-label="Buka galeri foto ${esc(title)} (${imgs.length} foto)"><img class="shot" src="${esc(imgs[0].src)}" width="1600" height="1000" loading="lazy" decoding="async" alt="">${imgs.length>1?`<span class="tag thumb-count" aria-hidden="true">${imgs.length} foto</span>`:''}</button>`:'';

// Render
function render(){
 $('#skills-grid').innerHTML=SKILLS.map((s,i)=>`<article class="card p-6"><p class="f-jb text-xs muted">${String(i+1).padStart(2,'0')}</p><h3 class="text-xl font-bold mt-1">${esc(s.title)}</h3><p class="muted text-sm mt-1">${esc(s.desc)}</p><ul class="flex flex-wrap gap-2 mt-4">${tags(s.items)}</ul></article>`).join('');
 $('#stack-grid').innerHTML=STACK.map(g=>`<div><h3 class="f-fira text-sm ink mb-3">/ ${esc(g.category)}</h3><ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px border bd" style="background:var(--border)">${g.items.map(t=>`<li class="p-4" style="background:var(--surface)"><p class="f-head font-medium">${esc(t.name)}</p><p class="f-jb text-xs muted">${esc(t.note)}</p></li>`).join('')}</ul></div>`).join('');
 $('#project-grid').innerHTML=PROJECTS.map((p,i)=>`<article class="card pcard flex flex-col"><img class="shot" src="${esc(shotSrc(p))}" width="1600" height="1000" ${i?'loading="lazy"':''} decoding="async" alt="Screenshot of ${esc(p.title)}, a ${esc(p.category.toLowerCase())} project"><div class="p-5 flex flex-col flex-1"><p class="f-fira text-xs ink">${String(i+1).padStart(2,'0')} · ${esc(p.category)}</p><h3 class="text-xl font-bold mt-1">${esc(p.title)}</h3><p class="muted text-sm mt-2 flex-1">${esc(p.short)}</p><ul class="flex flex-wrap gap-2 mt-4">${tags(p.tech)}</ul><button type="button" class="btn mt-5 self-start" data-i="${i}" aria-label="View details: ${esc(p.title)}">View details →</button></div></article>`).join('');
 $$('#project-grid img').forEach((im,i)=>imgFallback(im,PROJECTS[i]));
  const aboutPhoto=ABOUT_PHOTO?.src?`<figure class="about-photo"><div class="about-frame"><img src="${esc(ABOUT_PHOTO.src)}" width="800" height="1000" loading="lazy" decoding="async" alt="${esc(ABOUT_PHOTO.alt||'')}"></div>${ABOUT_PHOTO.caption?`<figcaption class="f-jb text-xs muted"><span class="ink">&gt;</span> ${esc(ABOUT_PHOTO.caption)}</figcaption>`:''}</figure>`:'';
 $('#about-wrap').innerHTML=aboutPhoto+`<div class="grid gap-4">${ABOUT.map((a,i)=>`<article class="card p-6"><h3 class="f-fira text-sm ink">${esc(a.t)}</h3><p class="mt-2 muted${i===0?' text-lg':''}">${esc(a.p)}</p></article>`).join('')}</div>`;
 $('.about-photo img')?.addEventListener('error',e=>e.target.closest('.about-photo').remove());
 $('#contact-links').innerHTML=CONTACT.filter(c=>c.href).map(c=>`<li><a class="underline underline-offset-4" href="${esc(c.href)}"${c.href.startsWith('http')?' target="_blank" rel="noopener noreferrer"':''}>${esc(c.text||c.label)}<span class="sr-only">${c.href.startsWith('http')?' (opens in new tab)':''}</span></a></li>`).join('');
 $('#org-list').innerHTML=ORGANIZATIONS.map((o,i)=>`<li class="tl-item"><span class="tl-dot" aria-hidden="true"></span><div class="tl-grid">${thumbHTML('org',i,o.name,getImages(o))}<div><p class="f-jb text-xs ink">${esc(o.period)}</p><h3 class="text-xl font-bold mt-1">${esc(o.name)}</h3><p class="f-fira text-sm muted mt-1">${esc(o.role)}</p><p class="muted mt-3">${esc(o.description)}</p>${o.points?.length?`<ul class="list-disc pl-5 mt-3 space-y-1 text-sm muted">${o.points.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}</div></div></li>`).join('');
 $('#achv-grid').innerHTML=ACHIEVEMENTS.map((a,i)=>`<article class="card flex flex-col overflow-hidden">${thumbHTML('achv',i,a.title,getImages(a))}<div class="p-6 flex flex-col flex-1"><div class="flex items-center justify-between gap-3"><p class="f-jb text-xs ink">${esc(a.year)}</p>${a.level?`<span class="tag">${esc(a.level)}</span>`:''}</div><h3 class="text-xl font-bold mt-3">${esc(a.title)}</h3><p class="f-fira text-xs muted mt-1">${esc(a.issuer)}</p><p class="muted text-sm mt-3 flex-1">${esc(a.description)}</p>${a.link?`<a class="btn mt-5 self-start" href="${esc(a.link)}" target="_blank" rel="noopener noreferrer">${esc(a.linkLabel||'View certificate')} ↗<span class="sr-only"> (opens in new tab)</span></a>`:''}</div></article>`).join('');
 // Thumbnail gagal dimuat -> hapus tombolnya (layout menyesuaikan)
 $$('.thumb img').forEach(im=>{im.onerror=()=>im.closest('.thumb')?.remove()});
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
matchMedia('(min-width:1024px)').addEventListener('change',e=>{if(e.matches)setMenu(false)});

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

// Gallery (carousel foto)
const gal=$('#gallery');let galOpener=null;

function galleryHTML(title,imgs){
 const many=imgs.length>1;
 return `<div class="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 py-3 border-b bd" style="background:var(--surface)"><p id="gal-title" class="f-fira text-xs ink">${esc(title)}</p><button type="button" class="btn py-1" id="gal-close">Close ✕</button></div>
 <div role="group" aria-roledescription="carousel" aria-label="Galeri foto ${esc(title)}">
  <div class="car-track" id="car-track" tabindex="0" aria-label="Geser untuk melihat foto lain">
   ${imgs.map((s,i)=>`<figure class="car-slide" role="group" aria-roledescription="slide" aria-label="${i+1} dari ${imgs.length}"><img src="${esc(s.src)}" width="1600" height="1000" alt="${esc(s.alt||title)}" ${i?'loading="lazy"':''}>${s.alt?`<figcaption>${esc(s.alt)}</figcaption>`:''}</figure>`).join('')}
  </div>
  ${many?`<div class="car-bar"><button type="button" class="btn !px-3" id="car-prev" aria-label="Foto sebelumnya">←</button><div class="flex items-center gap-3"><div class="flex" id="car-dots">${imgs.map((_,i)=>`<button type="button" class="car-dot" data-go="${i}" aria-label="Ke foto ${i+1}"></button>`).join('')}</div><span class="f-jb text-xs muted" id="car-count" aria-live="polite"></span></div><button type="button" class="btn !px-3" id="car-next" aria-label="Foto berikutnya">→</button></div>`:''}
 </div>`;
}

function initGallery(title,imgs){
 const track=$('#car-track'),n=imgs.length;
 $$('.car-slide img',track).forEach(im=>{im.onerror=()=>{im.onerror=null;im.src=placeholderShot(title)}});
 if(n<2)return;
 const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
 const dots=$$('.car-dot'),prev=$('#car-prev'),next=$('#car-next'),count=$('#car-count');
 let idx=0,queued=false;
 const go=i=>{i=Math.max(0,Math.min(n-1,i));track.scrollTo({left:i*track.clientWidth,behavior:reduce?'auto':'smooth'})};
 const sync=()=>{queued=false;idx=Math.round(track.scrollLeft/track.clientWidth);
  dots.forEach((d,i)=>i===idx?d.setAttribute('aria-current','true'):d.removeAttribute('aria-current'));
  prev.disabled=idx===0;next.disabled=idx===n-1;count.textContent=`${idx+1} / ${n}`};
 track.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(sync)}},{passive:true});
 prev.addEventListener('click',()=>go(idx-1));
 next.addEventListener('click',()=>go(idx+1));
 dots.forEach(d=>d.addEventListener('click',()=>go(+d.dataset.go)));
 gal.onkeydown=e=>{
  if(e.key==='ArrowRight'){e.preventDefault();go(idx+1)}
  if(e.key==='ArrowLeft'){e.preventDefault();go(idx-1)}
 };
 sync();
}

function openGallery(title,imgs,trigger){
 galOpener=trigger;
 $('#gallery-body').innerHTML=galleryHTML(title,imgs);
 gal.setAttribute('aria-labelledby','gal-title');
 gal.showModal();
 document.documentElement.style.overflow='hidden';
 initGallery(title,imgs);   // dipindah ke sini, setelah showModal()
}
document.addEventListener('click',e=>{
 const b=e.target.closest('button[data-gallery]');if(!b)return;
 const item=(b.dataset.gallery==='org'?ORGANIZATIONS:ACHIEVEMENTS)[+b.dataset.i];
 openGallery(item.name||item.title,getImages(item),b);
});
gal.addEventListener('click',e=>{if(e.target===gal||e.target.closest('#gal-close'))gal.close()});
gal.addEventListener('close',()=>{document.documentElement.style.overflow='';galOpener&&galOpener.focus()});

render();
applyThemeUI();
observe();
lighting();
(function(){
  "use strict";
 
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 
  /* ---------- TERMINAL ---------- */
  var termOutput = document.getElementById('term-output');
  var termInput = document.getElementById('term-input');
  var termBox = document.getElementById('terminal');
 
  function scrollTerm(){ termBox.scrollTop = termBox.scrollHeight; }
 
  function printLine(text, cls){
    var div = document.createElement('div');
    div.className = cls || 'text-[var(--text)]';
    div.textContent = text;
    termOutput.appendChild(div);
    scrollTerm();
    return div;
  }
 
  function typeLine(text, cls, cb){
    if(reduceMotion){ printLine(text, cls); if(cb) cb(); return; }
    var div = document.createElement('div');
    div.className = cls || 'text-[var(--text)]';
    termOutput.appendChild(div);
    var i = 0;
    var speed = 14;
    (function step(){
      if(i <= text.length){
        div.textContent = text.slice(0, i);
        i++;
        scrollTerm();
        setTimeout(step, speed);
      } else if(cb){ cb(); }
    })();
  }
 
  var bootLines = [
    ['initializing profile.sh ...', 'text-[var(--text-faint)]'],
    ['loading identity module ... done', 'text-[var(--text-faint)]'],
    ['NAME: Johannes Mario Rafael Sibarani', 'text-[var(--amber)] glow-text'],
    ['ROLE: Full-Stack Developer (backend-focused)', 'text-[var(--text)]'],
    ["type 'help' to see available commands.", 'text-[var(--text-dim)]']
  ];
 
  function bootSequence(idx){
    if(idx >= bootLines.length){ termInput.focus(); return; }
    typeLine(bootLines[idx][0], bootLines[idx][1], function(){
      setTimeout(function(){ bootSequence(idx+1); }, 120);
    });
  }
  bootSequence(0);
 
  var commands = {
    help: function(){
      printLine('available commands:', 'text-[var(--text-dim)]');
      [
        ['whoami', 'short bio'],
        ['skills', 'jump to the skills tree'],
        ['stack', 'jump to the architecture diagram'],
        ['contact', 'show contact info'],
        ['clear', 'clear this terminal']
      ].forEach(function(c){
        printLine('  ' + c[0].padEnd(10, ' ') + '— ' + c[1], 'text-[var(--text)]');
      });
    },
    whoami: function(){
      printLine('backend-leaning full-stack developer.', 'text-[var(--text)]');
      printLine('fluent across Laravel, Gin and Express, five languages deep, four databases wide.', 'text-[var(--text-dim)]');
    },
    skills: function(){
      printLine('scrolling to ~/skills ...', 'text-[var(--text-dim)]');
      document.getElementById('skills').scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth'});
    },
    stack: function(){
      printLine('scrolling to ~/stack ...', 'text-[var(--text-dim)]');
      document.getElementById('stack').scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth'});
    },
    contact: function(){
      printLine('email : johannes.sibarani@example.com', 'text-[var(--text)]');
      printLine('github: github.com/jmrsibarani', 'text-[var(--text)]');
      document.getElementById('contact').scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth'});
    },
    clear: function(){
      termOutput.innerHTML = '';
    },
    sudo: function(rest){
      if(rest.trim() === 'make-coffee'){
        printLine('sudo: permission granted. brewing...', 'text-[var(--amber)]');
        printLine('coffee.exe has stopped responding. try a real barista.', 'text-[var(--text-dim)]');
      } else {
        printLine('sudo: nice try. this terminal has no root.', 'text-[var(--text-dim)]');
      }
    }
  };
 
  termInput.addEventListener('keydown', function(e){
    if(e.key !== 'Enter') return;
    var raw = termInput.value;
    var trimmed = raw.trim();
    printLine('visitor@sibarani.dev:~$ ' + raw, 'text-[var(--text-faint)]');
    termInput.value = '';
    if(!trimmed){ return; }
    var parts = trimmed.split(' ');
    var cmd = parts[0].toLowerCase();
    var rest = parts.slice(1).join(' ');
    if(commands[cmd]){
      commands[cmd](rest);
    } else {
      printLine('command not found: ' + cmd + " — type 'help'", 'text-[var(--text-dim)]');
    }
  });
 
  termBox.addEventListener('click', function(){ termInput.focus(); });
 
  /* ---------- SKILLS TREE ---------- */
  var skillData = [
    {
      key: 'frameworks',
      label: 'frameworks/',
      items: ['Laravel', 'Gin', 'Express.js', 'TailwindCSS', 'Bootstrap'],
      note: 'API frameworks in PHP and Go, one Node framework, two CSS toolkits for whatever the frontend needs.'
    },
    {
      key: 'languages',
      label: 'languages/',
      items: ['C++', 'PHP', 'JavaScript', 'Golang', 'Python'],
      note: 'From C++ fundamentals to Go concurrency, with PHP, JavaScript and Python covering everything in between.'
    },
    {
      key: 'databases',
      label: 'databases/',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'],
      note: 'Two relational engines, one document store, and enterprise-grade Oracle when the job calls for it.'
    },
    {
      key: 'version-control',
      label: 'version-control/',
      items: ['Git', 'GitHub'],
      note: 'Every project versioned, every change traceable.'
    },
    {
      key: 'os',
      label: 'os/',
      items: ['Windows', 'Linux (Ubuntu)'],
      note: 'Develops on Windows, deploys and debugs on Ubuntu.'
    }
  ];
 
  var treeList = document.getElementById('tree-list');
  var treeDetail = document.getElementById('tree-detail');
 
  function renderDetail(node){
    treeDetail.innerHTML = '';
    var title = document.createElement('div');
    title.className = 'mono text-sm text-[var(--amber)] mb-1';
    title.textContent = '~/skills/' + node.label;
    treeDetail.appendChild(title);
 
    var note = document.createElement('p');
    note.className = 'text-[var(--text-dim)] text-sm mb-4 max-w-[52ch]';
    note.textContent = node.note;
    treeDetail.appendChild(note);
 
    var list = document.createElement('ul');
    list.className = 'mono text-sm space-y-1.5';
    node.items.forEach(function(item){
      var li = document.createElement('li');
      li.className = 'flex items-center gap-2 text-[var(--text)]';
      li.innerHTML = '<span class="text-[var(--text-faint)]">-rw-r--r--</span><span>' + item + '</span>';
      list.appendChild(li);
    });
    treeDetail.appendChild(list);
  }
 
  function buildTree(){
    treeList.innerHTML = '';
    skillData.forEach(function(node, i){
      var li = document.createElement('li');
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'tree-btn rounded-sm px-3 py-2 flex items-center gap-2 text-[var(--text)]';
      btn.setAttribute('role', 'option');
      btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      btn.innerHTML = '<span class="text-[var(--amber)]">▸</span><span>' + node.label + '</span>';
      btn.addEventListener('click', function(){
        Array.prototype.forEach.call(treeList.querySelectorAll('.tree-btn'), function(b){
          b.setAttribute('aria-selected', 'false');
        });
        btn.setAttribute('aria-selected', 'true');
        renderDetail(node);
      });
      li.appendChild(btn);
      treeList.appendChild(li);
    });
    renderDetail(skillData[0]);
  }
  buildTree();
 
  /* ---------- STACK LAYERS ---------- */
  var layerData = [
    { name: 'Client Interface', detail: 'TailwindCSS, Bootstrap — styling whatever the framework below renders.' },
    { name: 'Application Layer', detail: 'Laravel, Gin, Express.js — the APIs and services that hold business logic.' },
    { name: 'Core Languages', detail: 'PHP, Golang, JavaScript, Python, C++ — the languages those frameworks run on.' },
    { name: 'Data Layer', detail: 'MySQL, PostgreSQL, MongoDB, Oracle — wherever the data actually lives.' },
    { name: 'Infrastructure', detail: 'Windows for development, Ubuntu for deployment, Git for everything in between.' }
  ];
 
  var layersEl = document.getElementById('layers');
  layerData.forEach(function(l){
    var row = document.createElement('div');
    row.className = 'layer rounded-sm px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 cursor-default';
    row.tabIndex = 0;
    row.innerHTML =
      '<span class="mono text-sm text-[var(--text)]">' + l.name + '</span>' +
      '<span class="text-xs text-[var(--text-dim)] sm:text-right sm:max-w-[46ch]">' + l.detail + '</span>';
    layersEl.appendChild(row);
  });
 
  /* ---------- CONTACT FORM (client-side only) ---------- */
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    status.textContent = 'transmission queued — connect a backend or mailto to actually deliver this.';
    status.style.color = 'var(--amber)';
    form.reset();
  });
 
  var emailLink = document.getElementById('email-link');
  emailLink.addEventListener('click', function(e){
    if(navigator.clipboard){
      navigator.clipboard.writeText(emailLink.textContent.trim());
    }
  });
})();

/* embed mode: ?embed=1 (used by the landing-page wireframe). Reports its height to the parent page. */
(function(){
  if(!/[?&]embed=1/.test(location.search))return;
  document.documentElement.classList.add('is-embed');
  const band=()=>document.querySelector('.a-band');
  const send=()=>{const el=band();if(el)parent.postMessage({maxlitKP:true,h:Math.ceil(el.getBoundingClientRect().height)+4},'*');};
  addEventListener('DOMContentLoaded',()=>{send();new ResizeObserver(send).observe(band());});
  addEventListener('load',send);
})();
/* MAXLit Knowledge Path — behaviour and content data */
/* ---------- content (transcribed from the MAXLit deck, slide 7) ---------- */
const GRADES=["TK","K","1","2","3","4","5","6"];
/* Grade 6: four units, each spanning two strands (Get to Know Your Resources, p.2). "from" = the TK–5 unit column it builds on */
const G6=[{t:"Great Advances: From Earth to Mars",from:0},{t:"Ancient Civilizations, Big Transformations",from:3},{t:"Mysteries of the Deep",from:4},{t:"The Silk Road: Then and Now",from:7}];
const UNITS=["Ways of Learning","The Living World","Learning Through Stories","Voices Past and Present",
  "Living on a Changing Earth","People and Communities","Forces, Energy, and Matter","Making Choices"];
const TOPICS={
 TK:["Time for School","Living Things","Familiar Friends","Our Community","Earth and Sky","Healthy and Safe","We Are Scientists","Maximize Your Strengths"],
 K:["Let’s Go to School","Living Things Have Needs","Stories Tell Us About Ourselves","Looking at the Past","Watching the Weather","Rules at Home and School","Forces: Pushes and Pulls","People at Work"],
 "1":["Let’s Discover Together","Living Things Grow and Survive","Community Adventures","Past and Present","Patterns in the Sky","We Are a Part of a Community","Energy: Sound Waves","Goods and Services"],
 "2":["Let’s Share Ideas","Living Things and Their Habitats","Traditional Tales","People Who Made a Difference","Wind and Water","We Can Participate in Government","Matter: States and Changes","Growers, Buyers, and Sellers"],
 "3":["Let’s Explore Transportation","Living Things and Their Traits","Fantasies","Communities Grow and Change","Severe Weather","Civics in Action","Forces: Motions and Interactions","Making Use of Resources"],
 "4":["Let’s Observe Storms","Living Things and Their Senses","Quests","Exploring U.S. Regions","Earth’s Changes Over Time","Government and Civics at Work","Energy: Waves and Information","Bringing Goods to Market"],
 "5":["Let’s Investigate Savory Sources","Living Things and Their Interactions","Mysteries","Spies and Soldiers of the American Revolution","Earth’s Water","Making a Government","Matter: Structures and Properties","Shaping the U.S. Economy"],
 "6":null   /* tk — Grade 6 not yet in the chart */
};
/* knowledge path statements (deck slide 7, second chart). TK and 6 are tk. */
const PATH={TK:null,
 K:"Living things have basic needs for survival (LS1-1, ESS3-1)",
 "1":"Living things rely on other things in their habitat for survival (LS1-1, LS1-2, LS3-1)",
 "2":"Living things use part and behaviors to care for their young (LS2-1, LS2-2, LS4-1)",
 "3":"Living things have inherited and behavioral traits dependent on and associated with their habitat (LS2-1, LS3-1, LS3-2)",
 "4":"Living things use senses and interact with others for survival (LS1-1, LS1-2)",
 "5":"Living things rely on the balanced ecosystem to survive (LS2-1, PS3-1, LS1-1, ESS3-1)",
 "6":null};
const PATH_UNIT=1; /* Unit 2 */
/* Grade 6 covers only four units (see G6.from), so its topic is looked up
   separately. Returns null when a grade has no topic for that unit. */
function topicFor(g,u){
  if(g==='6'){const o=G6.find(x=>x.from===u); return o?o.t:null;}
  return (TOPICS[g]&&TOPICS[g][u])||null;
}
/* Unit 2 MAX Book covers (assets/covers). TK and Grade 6 still to come. */
const COVER={TK:"unit2-gTK-living-things.jpg",K:"unit2-gK-living-things-have-needs.jpg","1":"unit2-g1-living-things-grow-and-survive.jpg",
 "2":"unit2-g2-living-things-and-their-habitats.jpg","3":"unit2-g3-living-things-and-their-traits.jpg",
 "4":"unit2-g4-living-things-and-their-senses.jpg","5":"unit2-g5-living-things-and-their-interactions.jpg"};
const coverSrc=g=>COVER[g]?"assets/covers/"+COVER[g]:null;
/* Unit summaries ("In this unit…"), verbatim from each grade's Knowledge Path page
   (K: Y75672 TRS Planner PDF; 1–5: Teacher's Edition Unit 2 on Benchmark Universe). */
const INTRO={
 K:["In this unit, students will build knowledge about the living world by discovering what living things, such as animals and plants, need to grow and survive. Students will learn that living things need water, food, light, and safety in order to stay alive. The highly motivating texts they read throughout the unit will help students grow in their understanding that living things find what they need to survive in the places where they live."],
 "1":["In this unit, students will build on prior knowledge of the living world to focus on how living things, such as oak trees and squirrels, depend on one another to grow and survive. Students will learn to identify the special parts that plants and animals have that help them fulfill their basic needs. Additionally, this unit’s highly motivating texts will allow students to discover what animal parents do to help their young grow and survive."],
 "2":["In this unit, students will build on their prior knowledge about how living things grow and survive to learn about how living things within a habitat depend on each other.",
      "Students will read about plants and animals that live and interact in different habitats, such as a redwood forest, meadow, and ocean. They will further discover the important role each living thing plays within a habitat, and how the removal of one can threaten others."],
 "3":["In this unit, your students will build on their prior knowledge to focus on the unique physical and behavioral traits that animal species pass down, from one generation to the next, which enable them to survive and thrive in their habitats."],
 "4":["In this unit, students will build on their prior knowledge to focus on how living things use their senses – including sight, sound/hearing, touch, taste, and smell – to gather information, send and receive signals, guide their actions, and learn from other living and non-living things in their ecosystems."],
 "5":["In this unit, students will build on their knowledge of living things and habitats to focus on how the three main categories of living things – producers, consumers, and decomposers – move energy, interact, and are interdependent within food webs and ecosystems. Students will also study the hazards posed by an ecosystem out of balance."]
};
/* Essential Questions, Knowledge Goals and Enduring Understandings per grade:
   MAXLiteracy California c2028 Teacher's Edition, Unit 2 > Unit Overview > Knowledge Path (Benchmark Universe), Grades K-5.
   TK and Grade 6 are not in the library yet. */
const EQ={
 K:{q:"How do living things get what they need?",
    eu:"Living things get the water, food, light, and shelter they need from each other and from the places where they live.",euLabel:"Enduring Understanding:",
    goals:["Living things get what they need to live and grow from their environment.",
           "Living things have needs such as water, light, food, and shelter, that they get from their environment.",
           "Living things in an environment depend on one another to get what they need to survive."]},
 "1":{q:"How do living things grow and survive?",
    eu:"Living things grow and survive by using their parts to get the food, water, light, and safety they and their young need.",euLabel:"Enduring Understanding:",
    goals:["Animals have different body parts that help them get the things they need to grow and survive.",
           "Animals can help plants by moving their seeds so that new plants can grow and survive.",
           "Many animal parents and their young engage in behaviors that help the young survive."]},
 "2":{q:"How do living things get what they need from their habitats?",
    eu:"Living things depend on the other animals and plants in their habitats to get what they need to survive.",euLabel:"Enduring Understanding:",
    goals:["Many kinds of living things are found in a habitat, such as a forest.",
           "Living things in a habitat depend on each other for food, shelter, and survival.",
           "Removing one living thing from a habitat can make it difficult for the other living things there to survive."]},
 "3":{q:"How do certain traits help living things survive?",
    eu:"Living things inherit traits passed down from their parents that help them survive in unique habitats by finding food, finding mates, and protecting themselves.",euLabel:"Enduring Understanding:",
    goals:["Living things have physical and behavioral traits they inherit from their parents that help them survive in their environments.",
           "Animals have certain inherited physical traits, such as fur, feathers, scales, and other types of body coverings, that help them survive in their habitats.",
           "Animals have certain inherited behavioral traits that benefit their survival, including how they interact with one another and protect themselves in their natural habitats."]},
 "4":{q:"How do living things use their senses to interact with the world?",
    eu:"Living things use their senses to interpret, interact with, and learn from the world around them in order to survive.",euLabel:"Enduring Understanding:",
    goals:["Living things take in information from their environments using certain senses, such as smell, sight, hearing, taste, and touch.",
           "Living things rely on senses to receive information, send signals, and react to the world around them.",
           "Living things can use their senses to gain information to guide their actions and learn new things."]},
 "5":{q:"How do living things interact in an ecosystem?",
    eu:"A balanced ecosystem has a stable food web in which energy from the sun passes from producers to consumers to decomposers; organisms rely on this transfer of energy to live.",euLabel:"Enduring Understanding:",
    goals:["Energy from the sun enters a complex food web through producers and then cycles through an ecosystem. Healthy ecosystems require balance. An imbalance can be harmful to the ecosystem.",
           "The species in an ecosystem are interdependent. The role of consumers is to move energy through an ecosystem and help keep it in balance.",
           "Decomposers break down the waste and remains of producers and consumers, helping to transfer energy through an ecosystem. The way some decomposers feed and reproduce can cause harm to other organisms."]}
};
function renderEQ(g){
  const e=EQ[g], el=document.getElementById('eq'), book=TOPICS[g]?TOPICS[g][PATH_UNIT]:'Title tk';
  el.classList.toggle('eq--tk',!e);
  el.innerHTML=`<div class="eq__meta"><span class="d-grade" data-g="${g}">${gName(g)}</span>${book}</div>
    <div class="eq__q"><small>Essential Question:</small><p>${e?e.q:'Essential question tk'}</p></div>
    ${e&&e.goals?`<ul class="eq__goals">${e.goals.map((x,k)=>`<li><b>Knowledge Goal ${k+1}:</b> ${x}</li>`).join('')}</ul>`:''}
    <div class="eq__a">${e&&e.euLabel?`<small>${e.euLabel}</small>`:''}${e?e.eu:'Enduring understanding tk'}</div>`;
}
/* "Prior Knowledge from Grade to Grade" — Y75672 TRS Planner, GK Unit 2 Knowledge Path */
const BRIDGE={K:"Understanding that all living things have basic needs for survival supports students as they explore the parts and behaviors living things utilize to meet those needs.",
 "1":"Examining how living things use parts and behaviors to survive and care for their young reveals patterns of interaction. This prepares students to study how plants and animals depend on one another within habitats.",
 "2":"Observing how living things rely on one another for survival shows that each species has features that help it meet its needs. This sets up learning how traits enable living things to survive and thrive.",
 "3":"Understanding that living things have inherited behavioral and physical traits supports students as they learn how organisms use their senses to guide behavior and stay alive.",
 "4":"Learning how organisms use their senses to survive and interact shows that these behaviors influence ecosystems. This prepares students to explore how energy moves through organisms within a food web."};
const UICON=["fa-lightbulb","fa-leaf","fa-book-open","fa-landmark","fa-earth-americas","fa-people-group","fa-atom","fa-scale-balanced"];
const gName=g=>g==="TK"?"Grade TK":g==="K"?"Grade K":"Grade "+g;

/* ---------- state ---------- */
let selGrade=null, selUnit=null, selCell=null;

/* ---------- chips ---------- */
const chips=document.getElementById('gradeChips');
chips.insertAdjacentHTML('beforeend',`<button class="chip chip--all" aria-pressed="true" data-chip="all">All</button>`);
GRADES.forEach(g=>chips.insertAdjacentHTML('beforeend',`<button class="chip" data-g="${g}" data-chip="${g}" aria-pressed="false">${g}</button>`));
chips.addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;
  const v=b.dataset.chip; if(v===selGrade&&!mqDesk.matches)return; setGrade(v==="all"||v===selGrade?null:v);
  if(v!=='all'&&document.getElementById('view-path').classList.contains('is-on'))revealPath();});

/* ---------- grid ---------- */
const grid=document.getElementById('agrid');
let html='<div class="corner">GRADE</div>';
UNITS.forEach((u,i)=>html+=`<button class="u-head" data-u="${i}" aria-pressed="false" aria-label="Unit ${i+1}, ${u}${i===PATH_UNIT?', has a knowledge path':''}"><b>UNIT ${i+1}</b><span>${u}</span>${i===PATH_UNIT?'<em class="path-flag">Knowledge path</em>':''}</button>`);
GRADES.forEach(g=>{
  if(g==="6"){html+=`<button class="g-badge g-badge--g6" data-g="6" data-row="6" aria-pressed="false" aria-label="Grade 6"><small>GRADE</small><strong>6</strong></button>`;
    G6.forEach((x,k)=>html+=`<button class="cell cell--g6" data-g="6" data-row="6" data-u="${x.from}" data-k="${k}" style="grid-column:${k*2+2} / span 2" aria-pressed="false" aria-label="Grade 6, Unit ${k+1}: ${x.t}"><small>UNIT ${k+1}</small>${x.t}</button>`);
    html+='<div class="g6-links" aria-hidden="true"></div>';return;}
  html+=`<button class="g-badge" data-g="${g}" data-row="${g}" aria-pressed="false" aria-label="${gName(g)}"><small>GRADE</small><strong>${g}</strong></button>`;
  UNITS.forEach((u,i)=>{const t=TOPICS[g]?TOPICS[g][i]:null;
    html+=`<button class="cell ${t?'':'cell--tk'}" data-g="${g}" data-row="${g}" data-u="${i}" aria-pressed="false" aria-label="${gName(g)}, Unit ${i+1} ${u}: ${t||'topic to come'}">${t||'Topic tk'}</button>`;});
});
grid.innerHTML=html;
grid.addEventListener('click',e=>{
  if(e.target.closest('#detail'))return;
  const h=e.target.closest('.u-head'); if(h){const u=+h.dataset.u;
    if(selGrade==='6') selGrade=null;
    setUnit(selUnit===u?null:u); return;}
  const b=e.target.closest('.g-badge'); if(b){setGrade(selGrade===b.dataset.row?null:b.dataset.row); return;}
  const c=e.target.closest('.cell'); if(c&&c.dataset.row==='6'){setGrade(selGrade==='6'?null:'6');return;}
  if(c){selCell=selCell&&selCell.g===c.dataset.row&&selCell.u===+c.dataset.u?null:{g:c.dataset.row,u:+c.dataset.u}; render();}
});
grid.addEventListener('mouseover',e=>{const c=e.target.closest('.cell');grid.classList.toggle('hov',!!c);
  grid.querySelectorAll('.cell').forEach(x=>x.classList.toggle('is-x',!!c&&(x.dataset.row===c.dataset.row||x.dataset.u===c.dataset.u)));});
grid.addEventListener('mouseleave',()=>grid.classList.remove('hov'));

function setGrade(g){selGrade=g;selCell=null;if(g==='6')selUnit=null;render();renderPath(g&&PATH[g]!==undefined?GRADES.indexOf(g):0);}
function setUnit(u){selUnit=u;selCell=null;render();}

function render(){
  /* phones show one grade at a time, so "All" is hidden there and TK stands in as the default */
  const mob=!window.matchMedia('(min-width:861px)').matches, shown=selGrade||(mob?'TK':null);
  chips.querySelectorAll('.chip').forEach(b=>b.setAttribute('aria-pressed',(b.dataset.chip==="all"&&!shown)||b.dataset.chip===shown));
  const dim=!!(selGrade||selUnit!==null||selCell);
  grid.classList.toggle('dim',dim);
  grid.classList.toggle('g6-on',selGrade==="6");
  grid.querySelectorAll('.cell,.g-badge').forEach(x=>{
    const inRow=!selGrade||x.dataset.row===selGrade, inCol=selUnit===null||x.dataset.u==null||+x.dataset.u===selUnit;
    let lit=inRow&&inCol; if(selCell) lit=x.classList.contains('cell')?(x.dataset.u==selCell.u):x.dataset.row===selCell.g;
    x.classList.toggle('is-lit',lit);
    x.classList.toggle('is-hidden',!!selGrade&&selGrade!=='6'&&x.dataset.row!==selGrade);
    if(selGrade==='6'&&x.dataset.row!=='6'&&x.classList.contains('cell'))x.classList.toggle('is-lit',G6.some(o=>o.from==+x.dataset.u));
    x.classList.toggle('is-sel',!!selCell&&x.classList.contains('cell')&&x.dataset.row===selCell.g&&+x.dataset.u===selCell.u);
  });
  grid.querySelectorAll('.u-head').forEach(h=>{const on=+h.dataset.u===selUnit||(selCell&&+h.dataset.u===selCell.u);h.classList.toggle('is-sel',on);h.setAttribute('aria-pressed',+h.dataset.u===selUnit);});
  grid.querySelectorAll('.g-badge').forEach(b=>b.setAttribute('aria-pressed',b.dataset.row===selGrade));
  grid.querySelectorAll('.cell').forEach(c=>c.setAttribute('aria-pressed',c.classList.contains('is-sel')));
  renderDetail(); renderMobile(); drawG6();
}
/* Grade 6 selected: dark boxes around the four TK–5 units it builds on, joined to its units */
function drawG6(){
  const L=grid.querySelector('.g6-links'); if(!L)return;
  if(selGrade!=='6'){L.innerHTML='';return;}
  if(!L.children.length)L.innerHTML=G6.map((o,k)=>`<span class="g6-box" style="--d:${k*60}ms"></span><span class="g6-line" style="--d:${k*60+220}ms"></span>`).join('');
  G6.forEach((o,k)=>{
    const h=grid.querySelector(`.u-head[data-u="${o.from}"]`), b=grid.querySelector(`.cell[data-row="5"][data-u="${o.from}"]`), t=grid.querySelector(`.cell--g6[data-k="${k}"]`);
    if(!h||!b||!t)return;
    const O=grid.offsetWidth<900?5:6, x=h.offsetLeft-O, y=h.offsetTop-O, w=h.offsetWidth+O*2, hh=b.offsetTop+b.offsetHeight+O-y, cx=h.offsetLeft+h.offsetWidth/2, ly=y+hh;
    const bx=L.children[k*2], ln=L.children[k*2+1];
    bx.style.cssText+=`;left:${x}px;top:${y}px;width:${w}px;height:${hh}px`;
    ln.style.cssText+=`;left:${cx-1.25}px;top:${ly}px;height:${t.offsetTop-ly}px`;});
}
addEventListener('resize',drawG6);
/* phones: one grade at a time, eight units as a list */
function renderMobile(){
  const g=selGrade||'TK', m=document.getElementById('mlist');
  if(g==='6'){m.innerHTML=G6.map((o,k)=>`<div role="listitem"><div class="mitem mitem--g6" data-g="6"><span><small>Unit ${k+1}</small><b>${o.t}</b></span></div></div>`).join('');return;}
  m.innerHTML=UNITS.map((u,i)=>{const t=TOPICS[g]?TOPICS[g][i]:null;
    return `<div role="listitem"><button class="mitem ${t?'':'mitem--tk'}" data-g="${g}" data-u="${i}"><span><small>Unit ${i+1} · ${u}</small><b>${t||'Topic tk'}</b></span>${i===PATH_UNIT?'<span class="go">Path</span>':''}</button></div>`;}).join('');
  a11yIcons(m);
}
document.getElementById('mlist').addEventListener('click',e=>{const b=e.target.closest('.mitem');if(!b)return;
  if(+b.dataset.u===PATH_UNIT){show('path');renderPath(GRADES.indexOf(b.dataset.g));}
  else{selCell={g:b.dataset.g,u:+b.dataset.u};render();document.getElementById('detail').scrollIntoView({behavior:'smooth',block:'nearest'});}});

/* detail: the chosen topic, with the same unit one grade before and after */
function renderDetail(){
  const d=document.getElementById('detail');
  if(!selCell){d.hidden=true;d.innerHTML='';grid.style.marginBottom='';return;}
  d.hidden=false;
  const {g,u}=selCell, i=GRADES.indexOf(g), t=TOPICS[g]?TOPICS[g][u]:'Topic tk';
  const step=gg=>{const tt=gg?topicFor(gg,u):null; return tt?`<div class="d-step" data-g="${gg}"><small>${gName(gg)}</small>${tt}</div>`:'';};
  const nextG=GRADES[i+1], hasNext=!!(nextG&&topicFor(nextG,u));
  d.innerHTML=`<div class="d-top"><span class="d-grade" data-g="${g}">${gName(g)}</span><button type="button" class="d-close" aria-label="Close topic details"><i class="fa-solid fa-xmark"></i></button></div>
    ${u===PATH_UNIT&&coverSrc(g)?`<div class="d-art"><img class="d-cover" src="${coverSrc(g)}" alt="Book cover: ${t}"><img class="d-bird" src="assets/max-bird-swoosh.png" alt="" aria-hidden="true"></div>`:''}
    <div><div class="d-topic">${t}</div><div class="d-unit">Unit ${u+1} · ${UNITS[u]}</div></div>
    <div class="d-steps">${step(GRADES[i])}${hasNext?'<i class="fa-solid fa-arrow-right"></i>':''}${step(nextG)}</div>
    <button class="btn-path" data-go="path" ${u===PATH_UNIT?'':'hidden'}>Knowledge path</button>`;
  placeDetail();
}
/* desktop: float the card beside the chosen cell. phones: it sits under the list. */
const mqDesk=window.matchMedia('(min-width:861px)');
function placeDetail(){
  const d=document.getElementById('detail');
  grid.style.marginBottom='';
  if(!mqDesk.matches||!selCell){d.classList.remove('is-pop','left','right');d.style.cssText='';
    if(d.parentNode!==document.getElementById('view-grid'))document.getElementById('view-grid').appendChild(d);return;}
  if(d.parentNode!==grid)grid.appendChild(d);
  d.classList.add('is-pop');
  const c=grid.querySelector('.cell.is-sel'); if(!c)return;
  const W=d.offsetWidth,Hh=d.offsetHeight,gw=grid.offsetWidth,gh=grid.offsetHeight;
  const right=c.offsetLeft+c.offsetWidth+14+W<=gw;               /* prefer the right-hand side */
  const left=right?c.offsetLeft+c.offsetWidth+14:c.offsetLeft-W-14;
  const cy=c.offsetTop+c.offsetHeight/2;
  const top=Math.max(0,Math.min(gh-Hh,cy-Hh/2));
  d.classList.toggle('right',right);d.classList.toggle('left',!right);
  d.style.left=left+'px';d.style.top=top+'px';d.style.setProperty('--ay',(cy-top)+'px');
  grid.style.marginBottom=Math.max(0,top+Hh-gh+16)+'px';   /* make room when only one grade row is shown */
}
mqDesk.addEventListener('change',()=>{render();placeDetail();});
addEventListener('resize',placeDetail);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&selCell&&!document.getElementById('vmodal').open){
  const u=selCell.u,g=selCell.g;selCell=null;render();const c=grid.querySelector(`.cell[data-row="${g}"][data-u="${u}"]`);if(c&&mqDesk.matches)c.focus();}});
document.getElementById('detail').addEventListener('click',e=>{
  if(e.target.closest('.d-close')){const u=selCell.u,g=selCell.g;selCell=null;render();const c=grid.querySelector(`.cell[data-row="${g}"][data-u="${u}"]`);if(c&&mqDesk.matches)c.focus();return;}
  const b=e.target.closest('[data-go]');if(b){
  const g=selCell&&selCell.u===PATH_UNIT?selCell.g:(selGrade||'TK'); show('path'); renderPath(GRADES.indexOf(g));}});

/* ---------- view switching ---------- */
function show(v){
  setTimeout(()=>{if(v==='grid')render();else if(cur>=0)chips.querySelectorAll('.chip').forEach(b=>b.setAttribute('aria-pressed',b.dataset.chip===GRADES[cur]));});
document.querySelectorAll('.seg button').forEach(b=>{const on=b.dataset.view===v;b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1;});
  document.getElementById('view-grid').classList.toggle('is-on',v==='grid');document.getElementById('view-path').classList.toggle('is-on',v==='path');
  chips.classList.toggle('chips--path',v==='path');   /* TK, 6 and All are not on the path */
  if(v==='path'&&(selGrade==='TK'||selGrade==='6')) setGrade(null);}
/* arrow keys move between the two tabs */
document.querySelector('.seg').addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;
  e.preventDefault();const tabs=[...document.querySelectorAll('.seg button')];const i=tabs.indexOf(document.activeElement);
  const n=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[n].focus();tabs[n].click();});
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{show(b.dataset.view);if(b.dataset.view==='path')renderPath(cur<0?0:cur);}));

/* ---------- view 2: knowledge path ---------- */
const stairs=document.getElementById('stairs'); let cur=-1, timer=null;
/* TK and Grade 6 have no knowledge-path content yet, so the path shows K-5.
   The grid still shows every grade. PATH_IDX holds GRADES indices. */
const PATH_SKIP=new Set(['TK','6']);
const PATH_IDX=GRADES.map((g,i)=>i).filter(i=>!PATH_SKIP.has(GRADES[i]));
const PATH_FROM=PATH_IDX[0], PATH_LAST=PATH_IDX[PATH_IDX.length-1];
stairs.innerHTML=GRADES.map((g,i)=>PATH_SKIP.has(g)?'':`<button title="${gName(g)}" aria-label="${gName(g)}: ${TOPICS[g]?TOPICS[g][PATH_UNIT]:'title to come'}" class="stair" data-g="${g}" data-i="${i}">
  <span class="cover ${coverSrc(g)?'cover--img':''}">${coverSrc(g)?`<img src="${coverSrc(g)}" alt="">`:'<i class="fa-solid fa-book"></i>'}</span></button>`).join('');
stairs.style.setProperty('--steps', stairs.querySelectorAll('.stair').length || 8);
/* after picking a grade, bring its details (grade card + Essential Question) into view */
function revealPath(){
  const body=document.querySelector('.path__body'), r=body.getBoundingClientRect();
  if(r.top>=0&&r.bottom<=innerHeight)return;                       /* already fully visible */
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  body.scrollIntoView({behavior:reduce?'auto':'smooth',block:r.height>innerHeight?'start':'end'});
}
stairs.addEventListener('click',e=>{const s=e.target.closest('.stair');if(s){stop();renderPath(+s.dataset.i);revealPath();}});
function renderPath(i){
  if(i==null||i<0)return;
  if(PATH_SKIP.has(GRADES[i])) i=PATH_IDX.find(j=>j>i);      /* never land on TK or 6 */
  if(i==null) i=PATH_FROM;
  cur=i; const g=GRADES[i];
  /* in the Knowledge path view the grade bar follows the chosen book; the grid keeps its own filter (default: All) */
  if(document.getElementById('view-path').classList.contains('is-on'))chips.querySelectorAll('.chip').forEach(b=>b.setAttribute('aria-pressed',b.dataset.chip===g));
  {const cs=stairs.querySelector('.stair[data-i="'+i+'"]');if(cs&&stairs.scrollWidth>stairs.clientWidth)stairs.scrollTo({left:cs.offsetLeft-stairs.clientWidth/2+cs.offsetWidth/2,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}
  stairs.querySelectorAll('.stair').forEach(s=>{const j=+s.dataset.i;
    s.classList.toggle('is-built',j<=i);s.classList.toggle('is-cur',j===i);
    j===i?s.setAttribute('aria-current','step'):s.removeAttribute('aria-current');});
  renderEQ(g);
  const st=document.getElementById('stmt'); st.dataset.g=g; st.classList.toggle('stmt--tk',!PATH[g]);
  const book=TOPICS[g]?TOPICS[g][PATH_UNIT]:'Title tk';
  const cv=coverSrc(g);
  st.innerHTML=`${cv?`<img class="cover-lg cover-lg--img" src="${cv}" alt="Book cover: ${book}">`:'<div class="cover-lg" role="img" aria-label="Book cover placeholder"><i class="fa-solid fa-book" aria-hidden="true"></i>Book cover</div>'}
    <div><div class="stmt__meta"><span class="d-grade" data-g="${g}">${gName(g)}</span></div>
    <h2 class="stmt__book">${book}</h2>
    <p class="stmt__big">${PATH[g]||'Knowledge statement tk'}</p>
    ${INTRO[g]?INTRO[g].map(t=>`<p class="stmt__intro">${t}</p>`).join(''):''}
    ${BRIDGE[g]?`<div class="bridge"><i class="fa-solid fa-arrow-trend-up" aria-hidden="true"></i><div><b>Prior knowledge from grade to grade</b>${BRIDGE[g]}</div></div>`:''}</div>`;
}
function stop(){clearInterval(timer);timer=null;const p=document.getElementById('pPlay');p.innerHTML='<i class="fa-solid fa-play" aria-hidden="true"></i><span>Play</span>';p.setAttribute('aria-pressed','false');}
document.getElementById('pPrev').onclick=()=>{stop();
  const k=PATH_IDX.indexOf(cur); renderPath(PATH_IDX[Math.max(0,k-1)]);};
document.getElementById('pNext').onclick=()=>{stop();
  const k=PATH_IDX.indexOf(cur); renderPath(PATH_IDX[Math.min(PATH_IDX.length-1,k+1)]);};
document.getElementById('pPlay').onclick=function(){
  if(timer){stop();return;}
  this.innerHTML='<i class="fa-solid fa-pause" aria-hidden="true"></i><span>Pause</span>';this.setAttribute('aria-pressed','true');
  let k=0; renderPath(PATH_IDX[k]);
  timer=setInterval(()=>{k++; if(k>=PATH_IDX.length){stop();return;} renderPath(PATH_IDX[k]);},1600);
};

/* every Font Awesome glyph is decorative: text or aria-label carries the meaning */
function a11yIcons(root){root.querySelectorAll('i[class*="fa-"]').forEach(i=>i.setAttribute('aria-hidden','true'));}
new MutationObserver(()=>a11yIcons(document.body)).observe(document.body,{childList:true,subtree:true});
/* video pop-up */
(function(){
  const dlg=document.getElementById('vmodal'),fr=document.getElementById('vidFrame'),open=document.getElementById('vidOpen');
  open.addEventListener('click',()=>{stop();
    /* embedded in the landing page: let the page open its own full-screen pop-up, like its other videos */
    if(document.documentElement.classList.contains('is-embed')&&parent!==window){const id=(fr.dataset.src.match(/iframe\/([a-z0-9]+)/)||[])[1];if(id){parent.postMessage({maxlitVideo:id,label:'Gina Cervetti video'},'*');return;}}
    fr.src=fr.dataset.src;dlg.showModal();document.getElementById('vidClose').focus();});
  document.getElementById('vidClose').addEventListener('click',()=>dlg.close());
  dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close();});          /* click on the backdrop */
  dlg.addEventListener('close',()=>{fr.src='about:blank';open.focus();});     /* stop playback, return focus */
})();
render(); renderPath(0); a11yIcons(document.body);

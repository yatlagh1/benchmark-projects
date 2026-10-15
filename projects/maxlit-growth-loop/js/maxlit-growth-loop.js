/* ──────────────────────────────────────────────────────────────────────────
   A360 × MAXLit — From screening to measurable growth

   Stages, step titles, roles, product areas and handoffs are transcribed from
   the Figma user flow (file ruuoTIh9LFcNyushRDsOw8, node 1:1616).
   Content sources: stage names and descriptions are the client's own copy
   (sent 2026-10-13, verbatim, with a closing full stop added); steps, roles,
   screens and handoffs are Figma text, verbatim; anything with no source is
   Lorem ipsum, so the "What happens next" rows are Lorem. (The
   wording from the client's assessment-cycle diagram is kept in
   maxlit-growth-loop.1051.bak.js in case it is approved later.)

   Stage colours (c) are the MAXLiteracy brand colours from the landing
   page's stripe; t is the glyph colour on that fill. Every pair clears WCAG AA
   (4.5:1): blue 7.75, purple 6.24, cyan-deep 4.57, berry 4.75 with white;
   green and orange are taken 14% / 22% deeper (#2F8513 4.68, #BE561B 4.63)
   so they can carry white too - ink on the brand green/orange only scraped
   past and read muddy; gold keeps ink (8.27).
   These per-stage colours are switched off for now: see ONE_COLOUR_PER_TIER.

   All copy lives in CONTENT below so edits stay in one place. Where no source
   text exists the copy is Lorem ipsum.
   ────────────────────────────────────────────────────────────────────────── */

const VIDEO_ID = 'v34esu6nbl';           /* placeholder: the MAXLiteracy hero video */

/* tier 1 = every student · tier 23 = only students who need additional support.
   WINN is tier 1 because the client diagram reaches it from the Tier 1 core path,
   grouped by mastery; progress monitoring is 2/3 because the diagram puts the
   monitoring tools only under Tier 2 (bi-weekly) and Tier 3 (weekly). */
const CONTENT = {
  intro: 'A shared journey showing how teachers and students move through assessment, instruction, intervention, and progress monitoring.',
  stages: [
    { n:'01', key:'screening', name:'Universal Screening', tier:1, c:'#00539B', t:'#FFFFFF', icon:'fa-magnifying-glass-chart',
      desc:'3x per year assessment of critical literacy skills to identify at-risk students and track growth.',
      steps:[
        {r:'Teacher', t:'Sign in to BU', a:'Sign in page'},
        {r:'Teacher', t:'Choose your program', a:'Dashboard'},
        {r:'Teacher', t:'Filter for Screening & Diagnostic', a:'Library'},
        {r:'Teacher', t:'Preview assessment / select subtest', a:'Preview'},
        {r:'Teacher', t:'Drag and drop assessment to Add Assignments', a:'Library'},
        {r:'Teacher', t:'Add assignment details and save', a:'Library'},
        {r:'Student', t:'Sign in to BU', a:'Sign in page'},
        {r:'Student', t:'Open the assignment', a:'Dashboard'},
        {r:'Student', t:'Take test', a:'Test Taker'},
        {r:'Teacher', t:'Select Assignments from menu', a:'Library'},
        {r:'Teacher', t:'Select assignment and Grade View', a:'Assignments'},
        {r:'Teacher', t:'View automated speech recognition scores', a:'Grading'},
        {r:'Teacher', t:'Grade additional student work, if applicable', a:'Grading'},
        {r:'Teacher', t:'Select Reports from menu', a:'Grading'},
        {r:'Teacher', t:'View Test Score Comparison report', a:'Reports'},
        {r:'Teacher', t:'View instructional recommendations', a:'Reports'}],
      next:{ title:'What happens next', rows:[
        ['Lorem ipsum dolor', 'Sit amet consectetur'],
        ['Adipiscing elit sed', 'Do eiusmod tempor incididunt']]} },

    { n:'02', key:'diagnostic', name:'Diagnostic Assessment', tier:23, c:'#8C4493', t:'#FFFFFF', icon:'fa-stethoscope',
      desc:'Pinpoint specific skill gaps and determine instructional starting points for students identified as needing Tier 2 or Tier 3 support.',
      steps:[
        {r:'Teacher', t:'Assign Diagnostic Phonics Assessment', a:'Library'},
        {r:'Teacher', t:'Administer the first subtest', a:'Grade View'},
        {r:'Teacher', t:'View diagnostic Test Score Comparison', a:'Reports'},
        {r:'Teacher', t:'View placement recommendation', a:'Reports / Recs'}] },

    { n:'03', key:'instruction', name:'Core Instruction and Assessment', tier:1, c:'#057EAD', t:'#FFFFFF', icon:'fa-chalkboard-user',
      desc:'Deliver evidence-based, grade-level literacy instruction as a foundation for all students, with embedded formative assessments to continuously inform and adjust teaching.',
      steps:[
        {r:'Teacher', t:'Go to Plan & Teach from menu', a:'Reports'},
        {r:'Teacher', t:'Open your week’s Instruction', a:'Plan & Teach'},
        {r:'Teacher', t:'Teach instruction', a:'Plan & Teach'},
        {r:'Teacher', t:'Access and assign assessment from Plan & Teach', a:'Plan & Teach'},
        {r:'Teacher', t:'Administer Cumulative Spelling Assessment', a:'Library'},
        {r:'Student', t:'Complete a Phonics, Spelling, or Vocabulary game', a:'Test Taker'},
        {r:'Teacher', t:'View Skills Mastery Report', a:'Student / Class Profile'}] },

    { n:'04', key:'winn', name:'WINN Small Group Instruction', tier:1, c:'#BD468C', t:'#FFFFFF', icon:'fa-users',
      desc:'Provide targeted Tier 2 and Tier 3 small-group instruction to address identified skill gaps, while also offering flexible Tier 1 reteaching, reassessment, and practice opportunities for students needing additional support within the core program.',
      steps:[
        {r:'Teacher', t:'View Reteach, Reassess, Practice resources', a:'Plan & Teach'},
        {r:'Teacher', t:'Run WINN small-group time', a:'Plan & Teach'},
        {r:'Teacher', t:'Access a Lesson Bank reteach lesson', a:'Plan & Teach'},
        {r:'Teacher', t:'Administer Mastery Check', a:'Grade View'},
        {r:'Teacher', t:'Recheck Skills Mastery Report', a:'Reports'}],
      next:{ title:'What happens next', rows:[
        ['Lorem ipsum dolor', 'Sit amet consectetur'],
        ['Adipiscing elit sed', 'Do eiusmod tempor'],
        ['Incididunt ut labore', 'Et dolore magna aliqua'],
        ['Ut enim ad minim', 'Veniam quis nostrud']]} },

    { n:'05', key:'program', name:'Summative Program Assessments', tier:1, c:'#2F8513', t:'#FFFFFF', icon:'fa-clipboard-check',
      desc:'Evaluate student mastery of key literacy skills and concepts at the conclusion of each instructional unit to measure learning and inform future instructional planning.',
      steps:[
        {r:'Teacher', t:'Return to Plan & Teach for more instruction', a:'Plan & Teach'},
        {r:'Teacher', t:'Assign Unit Assessment', a:'Library'},
        {r:'Student', t:'Take Unit Assessment', a:'Test Taker'},
        {r:'Teacher', t:'Score Unit ORF', a:'Grade View'},
        {r:'Teacher', t:'View overall Test Score Comparison', a:'Reports'},
        {r:'Teacher', t:'View Standards Performance and recommendations', a:'Reports'},
        {r:'Teacher', t:'View Standards Comparison Report', a:'Reports'}] },

    { n:'06', key:'monitoring', name:'Progress Monitoring', tier:23, c:'#BE561B', t:'#FFFFFF', icon:'fa-chart-line',
      desc:'Conduct ongoing progress monitoring — bi-weekly for Tier 2 students and weekly for Tier 3 students — to track responsiveness to intervention and adjust instructional approaches as needed.',
      steps:[
        {r:'Teacher', t:'Assign Progress Monitoring Assessment', a:'Library'},
        {r:'Teacher', t:'Administer Nonsense Word Fluency', a:'Grade View'},
        {r:'Teacher', t:'Check Test Score Overview trend line', a:'Reports'}],
      /* the inner loop of the client diagram lives in this grid */
      next:{ title:'What happens next', rows:[
        ['Lorem ipsum dolor', 'Sit amet consectetur'],
        ['Adipiscing elit sed', 'Do eiusmod tempor'],
        ['Incididunt ut labore', 'Et dolore magna aliqua'],
        ['Ut enim ad minim', 'Veniam quis nostrud']]} },

    { n:'07', key:'screenagain', name:'Growth Monitoring', tier:1, c:'#F3AA18', t:'#181B44', icon:'fa-arrow-trend-up',
      desc:'Monitor overall literacy growth and individual skill-area progress at each universal screening window (Fall, Winter, and Spring) to evaluate student trajectories toward grade-level expectations.',
      steps:[
        {r:'Teacher', t:'Give A360 Screening / Growth assessment', a:'Library / Test Taker'},
        {r:'Teacher', t:'Check A360 Test Score Overview for growth', a:'Reports'}] }
  ]
};

/* Fewer colours in the main graphic (client feedback, 2026-10-13): Benchmark
   blue for the stages every student goes through, one purple for the Tier 2
   & 3 stages, as in the meeting sketch. Both carry white at AA (7.75, 6.24).
   Set ONE_COLOUR_PER_TIER to false to bring back each stage's own colour. */
const ONE_COLOUR_PER_TIER = true;
const TIER_COLOUR = { 1: { c:'#00539B', t:'#FFFFFF' }, 23: { c:'#8C4493', t:'#FFFFFF' } };
if (ONE_COLOUR_PER_TIER) CONTENT.stages.forEach(s => Object.assign(s, TIER_COLOUR[s.tier]));

const S = CONTENT.stages;
const byKey = k => S.find(x => x.key === k);
const idx = k => S.findIndex(x => x.key === k);
const INK = '#181B44';
/* the stage before (d = -1) or after (d = 1) stage i around the loop. In the
   All students view this skips the set-back Tier 2 & 3 stages, so Previous /
   Next walk 01 03 04 05 07; those stages still open when selected directly. */
function neighbour(i, d) {
  let j = i;
  do { j = (j + d + S.length) % S.length; } while (tier === 1 && S[j].tier === 23 && j !== i);
  return S[j];
}

let tier = 1;
/* Desktop opens on stage 01 so the panel beside the ring is never empty.
   Phones start with every stage closed: the list is an accordion there. */
let sel = matchMedia('(max-width:860px)').matches ? null : 'screening';
let expanded = false;                 /* "show all steps" for long stages */
const COLLAPSE_AT = 6;

const ring    = document.getElementById('ring');
const detail  = document.getElementById('detail');
const arcs    = document.getElementById('arcs');
const reduce  = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isPhone = () => matchMedia('(max-width:860px)').matches;
const isWide  = () => matchMedia('(min-width:1240px)').matches;   /* ring and panel side by side */

/* The ring stays in view (position:sticky) while the panel scrolls. On the
   landing page there is a sticky "On this page" bar (.spynav, 68px), so the
   offset clears it; standalone it is just a small margin. */
const spynav = document.querySelector('.spynav');
const stickyTop = () => (spynav ? spynav.offsetHeight : 0) + 24;
document.documentElement.style.setProperty('--gl-sticky-top', stickyTop() + 'px');

/* ---------- ring geometry ----------
   Positions are fixed by stage index, never by what is visible, so switching
   tiers never reshuffles the circle - a dimmed stage sits where it always sits. */
const R = 38.5;                       /* % of the ring - stages sit just inside its edge */
const pos = i => {
  const a = (i / S.length) * 2 * Math.PI - Math.PI / 2;
  return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
};
const f2 = n => n.toFixed(2);

/* Arcs run edge to edge, never through a circle. The ring is square, so one
   viewBox unit is the same distance on both axes and the circle radius can be
   converted straight from pixels. */
/* ---------- ring ----------
   The circles and the arcs are built once and then only updated (classes,
   attributes), so every change - selecting a stage, switching tiers - can
   animate with CSS instead of popping as a fresh rebuild would. */
let ringBuilt = false;
function buildRing() {
  S.forEach((s, i) => {
    const p = pos(i);
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'node' + (s.t === INK ? ' node--ink' : '') + (s.tier === 23 ? ' node--t23' : '');
    b.dataset.key = s.key;
    b.setAttribute('aria-controls', 'detail');
    b.style.setProperty('--x', f2(p.x) + '%');
    b.style.setProperty('--y', f2(p.y) + '%');
    b.style.setProperty('--nc', s.c);
    b.style.setProperty('--nt', s.t);
    b.innerHTML =
      '<span class="node__badge" aria-hidden="true"><i class="fa-solid ' + s.icon + '"></i></span>' +
      '<span class="node__n">' + s.n + '</span>' +
      '<span class="node__name">' + nw2(s.name) + '</span>' +
      (s.tier === 23 ? '<span class="node__tier">Tier 2 &amp; 3</span>' : '') +
      '<i class="node__chev fa-solid fa-chevron-down" aria-hidden="true"></i>';
    ring.appendChild(b);
  });
  /* one path + one arrowhead per arc, kept for the life of the page */
  arcs.innerHTML = S.map((s, i) => {
    const c = i === S.length - 1 ? ' is-close' : '';
    return '<path class="arc' + c + '" data-i="' + i + '"/><polygon class="arrowhead' + c + '" data-i="' + i + '"/>';
  }).join('');
  ringBuilt = true;
}

function drawRing() {
  if (!ringBuilt) buildRing();
  ring.querySelectorAll('.node').forEach(b => {
    const s = byKey(b.dataset.key);
    b.classList.toggle('is-sel', s.key === sel);
    b.classList.toggle('is-out', tier === 1 && s.tier === 23);
    b.classList.toggle('is-t23', tier === 23 && s.tier === 23);
    /* phone rows open and close (accordion); desktop circles are toggles */
    if (isPhone()) { b.setAttribute('aria-expanded', String(s.key === sel)); b.removeAttribute('aria-pressed'); }
    else { b.setAttribute('aria-pressed', String(s.key === sel)); b.removeAttribute('aria-expanded'); }
  });
  updateArcs();
  /* stages 2 & 6 are only for some students; the note says how to spot them */
  document.getElementById('ringNote').innerHTML = tier === 1
    ? 'Dashed stages are only for students in Tier&nbsp;2&nbsp;&amp;&nbsp;3.'
    : 'Stages with a dashed ring are only for students in Tier&nbsp;2&nbsp;&amp;&nbsp;3.';
}

/* Every arc is a piece of ONE circle - the circle the stages sit on - running
   clockwise from the edge of one stage to the edge of the next, ending in an
   arrowhead that follows the circle. The ring is square, so one viewBox unit
   is the same distance on both axes. Each end keeps clear of whatever is
   drawn around its stage (the selected halo, the Tier 2 & 3 dashed ring);
   those clearances ease from old to new so the arcs glide, not jump. */
const clearCur = S.map(() => 0), clearTgt = S.map(() => 0);
const clearFor = s => {
  const selPx = s.key === sel ? 10 : 0;                         /* scale + halo */
  const ringPx = tier === 23 && s.tier === 23 ? (s.key === sel ? 20 : 13) : 0;
  return Math.max(selPx, ringPx);
};
let arcAnim = 0;
function updateArcs() {
  S.forEach((s, i) => {
    clearTgt[i] = clearFor(s);
    const j2 = (i + 1) % S.length;
    const dim = tier === 1 && (s.tier === 23 || S[j2].tier === 23);
    arcs.querySelectorAll('[data-i="' + i + '"]').forEach(el => el.classList.toggle('is-dim', dim));
  });
  cancelAnimationFrame(arcAnim);
  const from = clearCur.slice(), t0 = performance.now(), D = reduce ? 0 : 260;
  const ease = t => 1 - Math.pow(1 - t, 3);
  const tick = now => {
    const k = D ? Math.min(1, (now - t0) / D) : 1, e = ease(k);
    S.forEach((_, i) => { clearCur[i] = from[i] + (clearTgt[i] - from[i]) * e; });
    layoutArcs();
    if (k < 1) arcAnim = requestAnimationFrame(tick);
  };
  tick(t0);
}
function layoutArcs() {
  const node = ring.querySelector('.node');
  const w = ring.clientWidth;
  if (!node || !w || isPhone()) return;
  const px = v => v / w * 100;                                   /* pixels -> units */
  const gapA = r => 2 * Math.asin(Math.min(.95, r / (2 * R)));    /* chord -> angle */
  const half = node.offsetWidth / 2 + 10;                          /* circle + 10px air */
  const AH = px(12), AW = px(5.5);                                /* arrowhead */
  const step = 2 * Math.PI / S.length;
  const pt = a => ({ x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) });
  for (let i = 0; i < S.length; i++) {
    const j2 = (i + 1) % S.length;
    const a0 = i * step - Math.PI / 2;
    const aStart = a0 + gapA(px(half + clearCur[i]));
    const aTip   = a0 + step - gapA(px(half + clearCur[j2]));
    const aEnd   = aTip - (AH * .8) / R;                          /* line stops behind the head */
    const path = arcs.querySelector('path[data-i="' + i + '"]');
    const head = arcs.querySelector('polygon[data-i="' + i + '"]');
    if (aEnd <= aStart) { path.removeAttribute('d'); head.removeAttribute('points'); continue; }
    const s = pt(aStart), e = pt(aEnd), t = pt(aTip);
    path.setAttribute('d', 'M' + f2(s.x) + ' ' + f2(s.y) + ' A' + R + ' ' + R + ' 0 0 1 ' + f2(e.x) + ' ' + f2(e.y));
    head.setAttribute('points', '0,0 ' + f2(-AH) + ',' + f2(-AW) + ' ' + f2(-AH * .72) + ',0 ' + f2(-AH) + ',' + f2(AW));
    head.setAttribute('transform', 'translate(' + f2(t.x) + ' ' + f2(t.y) + ') rotate(' + ((aTip + Math.PI / 2) * 180 / Math.PI).toFixed(1) + ')');
  }
}

/* ---------- detail ---------- */
/* no widows: the last two words of running text are joined with a no-break
   space, so a line never ends with one word on its own (CSS text-wrap:pretty
   does the same where the browser supports it) */
const nw = s => s.split(' ').length < 3 ? s : s.replace(/ ([^ <>]+)$/, '&nbsp;$1');
/* same idea where the space may be too narrow for a no-break space: the last
   two words go in a span that CSS keeps together only where there is room */
const nw2 = s => { const w = s.split(' '); return w.length < 3 ? s :
  w.slice(0, -2).join(' ') + ' <span class="nw2">' + w.slice(-2).join(' ') + '</span>'; };
const ROLE_ICON = { Teacher: 'fa-person-chalkboard', Student: 'fa-child-reaching' };

function stepList(s) {
  /* consecutive steps are grouped by who does them, with a handoff line at
     each change - the way the Figma flow reads */
  const all = s.steps;
  const show = expanded ? all : all.slice(0, COLLAPSE_AT);
  let out = '', prev = null;
  show.forEach((st, i) => {
    if (st.r !== prev) {
      if (prev !== null) out += '<li class="hand">Handoff to ' + st.r + '</li>';
      out += '<li class="who"><span class="who__ic" aria-hidden="true"><i class="fa-solid ' + ROLE_ICON[st.r] + '"></i></span>' + st.r + '</li>';
      prev = st.r;
    }
    /* each step is a button: hover or focus previews its screenshot, select
       enlarges it. Numbers are Figma's (01-44 across the flow). */
    const g = START[s.key] + i;
    out += '<li class="step"><button type="button" class="step__btn" data-g="' + g + '" aria-haspopup="dialog">' +
           '<span class="step__n">' + pad2(g) + '</span>' +
           '<span class="step__t">' + nw(st.t) + '</span>' +
           '<span class="step__a">' + st.a + '</span>' +
           '<span class="sr-only">, view screenshot</span></button></li>';
  });
  let more = '';
  if (all.length > COLLAPSE_AT) {
    more = '<button type="button" class="linkbtn" id="moreBtn" aria-expanded="' + expanded + '">' +
           (expanded ? 'Show fewer steps' : 'Show all ' + all.length + ' steps') +
           '<i class="fa-solid fa-chevron-' + (expanded ? 'up' : 'down') + '" aria-hidden="true"></i></button>';
  }
  return '<ol class="steps">' + out + '</ol>' + more;
}

const label = t => '<h3 class="d-h3">' + t + '</h3>';

function nextBlock(s) {
  if (s.grid) {
    /* one row per outcome, one column per tier - narrow enough for the panel
       and for a phone without sideways scrolling */
    const g = s.grid;
    return label(g.title) +
      '<table class="pm"><thead><tr><th><span class="sr-only">Outcome</span></th>' +
      g.rows.map(r => '<th scope="col">' + r[0] + '<span>' + r[1] + '</span></th>').join('') +
      '</tr></thead><tbody>' +
      g.cols.map((c, ci) => '<tr><th scope="row">' + c + '</th>' +
        g.rows.map(r => '<td>' + (r[2][ci] === '—'
          ? '<span aria-hidden="true">—</span><span class="sr-only">Does not apply</span>'
          : r[2][ci]) + '</td>').join('') + '</tr>').join('') +
      '</tbody></table>';
  }
  if (!s.next) return '';
  return label(s.next.title) + '<ul class="branch">' +
    s.next.rows.map(r => '<li><span class="branch__if">' + nw(r[0]) + '</span>' +
      '<i class="fa-solid fa-arrow-right branch__arrow" aria-hidden="true"></i>' +
      '<span class="branch__then">' + nw(r[1]) + '</span></li>').join('') + '</ul>';
}

/* On a phone the ring is a list; the panel moves directly beneath the open
   stage so tapping one visibly opens it, and moves back on wider screens. */
const loopEl = document.querySelector('.loop');
/* The toggle sits in the ring's empty top-left corner. Where the ring is
   narrow enough that stage 01 or 07 would come within 20px of it, it moves
   above the ring instead. Measured as if it were in the corner, so the
   check gives the same answer in either position. */
function placeToggle() {
  const wrap = ring.parentElement, seg = wrap.querySelector('.seg');
  if (!seg) return;
  if (isPhone()) { wrap.classList.remove('seg-above'); return; }
  const ox = ring.offsetLeft, pad = 20;
  const box = { l: -ox, t: 0, r: seg.offsetWidth - ox, b: seg.offsetHeight };
  const hit = [...ring.querySelectorAll('.node')].some(n => {
    const w = n.offsetWidth / 2 + pad;    /* centre +/- half the circle, plus room for its rings */
    return n.offsetLeft + w > box.l && n.offsetLeft - w < box.r &&
           n.offsetTop  + w > box.t && n.offsetTop  - w < box.b;
  });
  wrap.classList.toggle('seg-above', hit);
}
/* Side by side, the panel is as tall as the ring: Previous / Next sit at
   the bottom, level with the bottom of the lowest stage circles, and the
   content above them scrolls. Never taller than the screen. */
function sizePanel() {
  if (!isWide() || !sel) { detail.style.removeProperty('--gl-panel-h'); return; }
  let low = 0;                          /* offsetTop ignores the hover/selected scale */
  ring.querySelectorAll('.node').forEach(n => { low = Math.max(low, n.offsetTop + n.offsetHeight / 2); });
  low += ring.offsetTop;                /* the toggle may sit above the ring */
  const pg = detail.querySelector('.pager');
  const padB = pg ? parseFloat(getComputedStyle(pg).paddingBottom) : 0;
  const h = Math.max(440, Math.min(low + padB, innerHeight - stickyTop() - 16));
  detail.style.setProperty('--gl-panel-h', Math.round(h) + 'px');
}
/* is-scroll: the content is taller than the panel (a line sets the buttons
   apart); has-more: there is more below (the text fades out above them);
   is-scrolled: some is hidden above (it fades out under the top edge) */
/* while the panel scrolls (wheel, swipe, keys) its bar shows, then fades
   again a moment after it stops - unless the pointer is still over the card */
let scrollingT = 0;
function panelScrolled() {
  scrollState();
  detail.classList.add('is-scrolling');
  clearTimeout(scrollingT);
  scrollingT = setTimeout(() => detail.classList.remove('is-scrolling'), 900);
}
function scrollState() {
  const sc = detail.querySelector('.d-scroll');
  if (!sc) return;
  const over = isWide() && sc.scrollHeight > sc.clientHeight + 1;
  detail.classList.toggle('is-scroll', over);
  detail.classList.toggle('has-more', over && sc.scrollTop + sc.clientHeight < sc.scrollHeight - 4);
  detail.classList.toggle('is-scrolled', over && sc.scrollTop > 4);
  updateBar();
}
function updateBar() {
  const sc = detail.querySelector('.d-scroll'), bar = detail.querySelector('.d-bar');
  if (!sc || !bar || !detail.classList.contains('is-scroll')) return;
  const th = bar.firstElementChild, max = sc.scrollHeight - sc.clientHeight, track = bar.clientHeight;
  const h = Math.max(36, Math.round(track * sc.clientHeight / sc.scrollHeight));
  const y = max > 0 ? Math.round((track - h) * sc.scrollTop / max) : 0;
  th.style.height = h + 'px';
  th.style.transform = 'translateY(' + y + 'px)';
  th.setAttribute('aria-valuenow', max > 0 ? Math.round(100 * sc.scrollTop / max) : 0);
}
/* The panel scrolls as usual (wheel, trackpad, swipe, keys) and hands the
   scroll on to the page at its end. Its always-visible bar can also be
   dragged, clicked, scrolled over, or focused and moved with the arrow /
   Page / Home / End keys. */
detail.addEventListener('pointerdown', e => {
  const bar = e.target.closest('.d-bar');
  if (!bar || e.button !== 0) return;
  const sc = detail.querySelector('.d-scroll'), th = bar.firstElementChild;
  const max = sc.scrollHeight - sc.clientHeight, room = bar.clientHeight - th.offsetHeight;
  if (max <= 0 || room <= 0) return;
  e.preventDefault();                       /* no text selection while dragging */
  if (e.target !== th) {                    /* track: jump to that point */
    const y = e.clientY - bar.getBoundingClientRect().top - th.offsetHeight / 2;
    sc.scrollTo({ top: Math.max(0, Math.min(room, y)) / room * max, behavior: reduce ? 'auto' : 'smooth' });
    return;
  }
  bar.classList.add('is-drag');
  th.setPointerCapture(e.pointerId);
  const y0 = e.clientY, t0 = sc.scrollTop;
  const move = ev => { sc.scrollTop = t0 + (ev.clientY - y0) * max / room; };
  const end = () => {
    bar.classList.remove('is-drag');
    th.removeEventListener('pointermove', move);
    th.removeEventListener('pointerup', end);
    th.removeEventListener('pointercancel', end);
  };
  th.addEventListener('pointermove', move);
  th.addEventListener('pointerup', end);
  th.addEventListener('pointercancel', end);
});
detail.addEventListener('wheel', e => {
  if (!e.target.closest('.d-bar')) return;
  e.preventDefault();
  detail.querySelector('.d-scroll').scrollTop += e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
}, { passive: false });
detail.addEventListener('keydown', e => {
  if (!e.target.closest('.d-thumb')) return;
  const sc = detail.querySelector('.d-scroll'), page = Math.round(sc.clientHeight * 0.9);
  const d = { ArrowDown: 40, ArrowUp: -40, PageDown: page, PageUp: -page, Home: -1e6, End: 1e6 }[e.key];
  if (d === undefined) return;
  e.preventDefault();
  sc.scrollTop += d;
});
function placeDetail() {
  if (!sel) return;
  if (isPhone()) {
    const node = ring.querySelector('.node[data-key="' + sel + '"]');
    if (node && node.nextElementSibling !== detail) node.after(detail);
  } else if (detail.parentElement !== loopEl) {
    loopEl.appendChild(detail);
  }
}

function renderDetail(animate) {
  detail.hidden = !sel;                   /* phone, nothing open yet */
  if (!sel) { detail.innerHTML = ''; return; }
  const s = byKey(sel), i = idx(sel);
  /* same stage re-drawn (show all steps, view switch): keep the reader's place */
  const old = detail.querySelector('.d-scroll');
  const keep = !animate && old ? old.scrollTop : 0;
  const prev = neighbour(i, -1), nx = neighbour(i, 1);
  detail.style.setProperty('--nc', s.c);
  detail.style.setProperty('--nt', s.t);
  detail.innerHTML =
    '<div class="d-body"><div class="d-scroll" id="dScroll">' +
    '<p class="d-eyebrow">Stage ' + s.n + '</p>' +
    '<div class="d-title"><span class="d-badge" aria-hidden="true"><i class="fa-solid ' + s.icon + '"></i></span>' +
      '<h2 class="d-name" id="dName" tabindex="-1">' + nw2(s.name) + '</h2></div>' +
    (s.tier === 23 ? '<p class="d-for">Tier 2 &amp; 3</p>' : '') +
    '<p class="d-desc">' + nw(s.desc) + '</p>' +
    '<button type="button" class="d-video" id="vidOpen" aria-haspopup="dialog">' +
      '<span class="d-video__p" aria-hidden="true"><i class="fa-solid fa-play"></i></span>' +
      nw('Watch the ' + s.name + ' video') + '</button>' +
    label('Steps') + '<p class="d-hint">Select a step to see its&nbsp;screen.</p>' + stepList(s) + nextBlock(s) +
    '</div>' +
    /* always-visible scrollbar for the panel (side by side only) */
    '<div class="d-bar"><div class="d-thumb" role="scrollbar" tabindex="0" aria-controls="dScroll"' +
      ' aria-orientation="vertical" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"' +
      ' aria-label="Scroll ' + s.name + ' details"></div></div></div>' +
    '<nav class="pager" aria-label="Move between stages">' +
      /* the visible text is only a stage name, so screen readers get the
         direction too; the visible label stays inside the accessible name */
      /* stage names wrap freely here (no joined last words): a half-width
         button is too narrow for "Program Assessments" on one line */
      /* phones show just "Previous" / "Next" (the stage list is right there);
         wider screens show the stage name. Either way the accessible name is
         "Previous stage: <name>", which contains the visible label. */
      '<button type="button" class="btn-ghost" data-goto="' + prev.key + '">' +
        '<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>' +
        '<span class="pg-short" aria-hidden="true">Previous</span>' +
        '<span class="pg-full"><span class="sr-only">Previous stage: </span>' + prev.name + '</span></button>' +
      '<button type="button" class="btn" data-goto="' + nx.key + '">' +
        '<span class="pg-short" aria-hidden="true">Next</span>' +
        '<span class="pg-full"><span class="sr-only">Next stage: </span>' + nx.name + '</span>' +
        '<i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>' +
    '</nav>';
  const mb = document.getElementById('moreBtn');
  if (mb) mb.addEventListener('click', () => {
    expanded = !expanded; renderDetail(false);
    /* show all: focus the first step that just appeared, where the button
       was; show fewer: back to the (re-rendered) button */
    const first = expanded && detail.querySelectorAll('.step__btn')[COLLAPSE_AT];
    if (!first) { document.getElementById('moreBtn').focus(); return; }
    first.focus({ preventScroll: true });
    const sc = detail.querySelector('.d-scroll');
    if (detail.classList.contains('is-scroll'))   /* bring the new steps up, step 06 still in sight */
      sc.scrollTo({ top: sc.scrollTop + first.getBoundingClientRect().top - sc.getBoundingClientRect().top - 72,
                    behavior: reduce ? 'auto' : 'smooth' });
    else first.scrollIntoView({ block: 'nearest' });
  });
  document.getElementById('vidOpen').addEventListener('click', openVideo);
  placeDetail();
  const sc = detail.querySelector('.d-scroll');
  sizePanel();
  sc.scrollTop = keep;
  sc.addEventListener('scroll', panelScrolled, { passive: true });
  scrollState();
  if (animate && !reduce) {               /* new stage: its content fades up into place */
    detail.classList.remove('is-in'); void detail.offsetWidth; detail.classList.add('is-in');
  }
}

/* ---------- selection ---------- */
const srStatus = document.getElementById('srStatus');
function select(key, fromClick, focusTo) {
  const s = byKey(key);
  if (!s) return;
  /* phone: tapping the open stage closes it again */
  if (isPhone() && sel === key && focusTo === 'node') {
    sel = null; drawRing(); renderDetail(false);
    srStatus.textContent = s.name + ' closed.';
    return;
  }
  /* a dimmed stage still works: it opens its view rather than doing nothing */
  if (s.tier === 23 && tier === 1) setTier(23, true);
  const changed = sel !== key;
  if (changed) expanded = false;
  sel = key;
  drawRing();
  renderDetail(changed);
  srStatus.textContent = 'Stage ' + s.n + ', ' + s.name + '. ' +
    (s.tier === 23 ? 'Tier 2 and 3.' : '');
  /* the ring and panel are re-rendered, so put focus back where it was:
     on the stage that was pressed, or on the new stage's heading */
  if (focusTo === 'node') { const n = ring.querySelector('.node[data-key="' + key + '"]'); if (n) n.focus(); }
  if (focusTo === 'heading') document.getElementById('dName').focus();
  if (fromClick && isPhone()) {
    const el = ring.querySelector('.node[data-key="' + key + '"]');
    if (el) el.scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' });
  } else if (fromClick && !isWide() && detail.getBoundingClientRect().top > innerHeight - 200) {
    /* stacked layout: the panel is below the ring, so scroll just far enough
       that the new stage's heading comes into view */
    scrollBy({ top: detail.getBoundingClientRect().top - innerHeight + 320, behavior: reduce ? 'auto' : 'smooth' });
  } else if (fromClick && detail.getBoundingClientRect().top < stickyTop()) {
    /* the panel was scrolled past - bring its top back so the new stage starts
       at its heading, next to the ring, instead of somewhere in the middle */
    detail.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' });
  }
}

ring.addEventListener('click', e => {
  const b = e.target.closest('.node');
  if (b) select(b.dataset.key, true, 'node');
});
detail.addEventListener('click', e => {
  const g = e.target.closest('[data-goto]');
  if (g) { e.preventDefault(); select(g.dataset.goto, true, 'heading'); }
});

/* ---------- tier toggle ---------- */
const tabs = [...document.querySelectorAll('.seg button')];
function setTier(t, quiet) {
  tier = t;
  tabs.forEach(b => {
    const on = +b.dataset.tier === t;
    b.setAttribute('aria-pressed', String(on));
  });
  if (quiet) return;
  /* a Tier 2 & 3 stage is open and the view goes back to All students:
     that stage is now set back, so open the next stage in the loop */
  const open = sel && byKey(sel);
  if (t === 1 && open && open.tier === 23) {
    const nx = neighbour(idx(sel), 1);
    sel = nx.key; expanded = false;
    drawRing(); renderDetail(true);
    srStatus.textContent = 'All students. Showing stage ' + nx.n + ', ' + nx.name + '.';
    return;
  }
  drawRing(); renderDetail(false);
}
tabs.forEach(b => b.addEventListener('click', () => setTier(+b.dataset.tier)));
/* ---------- video ---------- */
const dlg = document.getElementById('vmodal');
const frame = document.getElementById('vidFrame');
function openVideo() {
  const s = byKey(sel);
  document.getElementById('vmodalTitle').textContent = s.name + ' video';
  frame.title = s.name + ' video';
  frame.src = 'https://fast.wistia.net/embed/iframe/' + VIDEO_ID + '?autoPlay=true&videoFoam=true';
  dlg.showModal();
}
document.getElementById('vidClose').addEventListener('click', () => dlg.close());
dlg.addEventListener('close', () => frame.removeAttribute('src'));
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

/* ---------- loop-back row, phone only ---------- */
document.getElementById('loopBack').addEventListener('click', () => select('screening', true, 'heading'));


/* ---------- step screenshots: hover preview + click to enlarge ----------
   Each step is numbered as in Figma (01-44 across the whole flow). Its
   screenshot will be read from assets/steps/step-NN.png; until those exist
   at full size, every step shows a placeholder screenshot. */
const pad2 = n => String(n).padStart(2, '0');
const START = {};                       /* global number of each stage's first step */
{ let g = 1; S.forEach(s => { START[s.key] = g; g += s.steps.length; }); }
/* full-size screenshots: assets/steps/step-NN.jpg (1600px wide); the
   untouched originals are kept in assets/steps/originals/ */
const shotSrc = g => 'assets/steps/step-' + pad2(g) + '.jpg';

/* A step shows its real screenshot when step-NN.jpg exists, and the
   placeholder below when it does not - so screenshots can be added one at a
   time. (The old 218px Figma thumbnails, step-NN.png, are no longer used.) */
const USE_REAL_SHOTS = true;

/* placeholder screenshot: a plain app wireframe (browser bar, side menu,
   header, content blocks) drawn as SVG so it stays sharp at any size */
const PLACEHOLDER =
  '<svg class="ph" viewBox="0 0 1280 656" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">' +
  '<rect width="1280" height="656" fill="#F4F7FB"/>' +
  '<rect width="1280" height="48" fill="#E0E3EB"/>' +
  '<circle cx="28" cy="24" r="7" fill="#C9D2E0"/><circle cx="52" cy="24" r="7" fill="#C9D2E0"/><circle cx="76" cy="24" r="7" fill="#C9D2E0"/>' +
  '<rect x="120" y="13" width="520" height="22" rx="11" fill="#fff"/>' +
  '<rect x="0" y="48" width="220" height="608" fill="#fff"/>' +
  '<rect x="28" y="84" width="120" height="14" rx="7" fill="#00539B" opacity=".28"/>' +
  '<rect x="28" y="124" width="164" height="12" rx="6" fill="#E0E3EB"/><rect x="28" y="156" width="140" height="12" rx="6" fill="#E0E3EB"/>' +
  '<rect x="28" y="188" width="152" height="12" rx="6" fill="#E0E3EB"/><rect x="28" y="220" width="128" height="12" rx="6" fill="#E0E3EB"/>' +
  '<rect x="252" y="80" width="360" height="22" rx="11" fill="#C9D2E0"/>' +
  '<rect x="252" y="118" width="560" height="12" rx="6" fill="#E0E3EB"/>' +
  '<rect x="1088" y="76" width="160" height="40" rx="8" fill="#00539B" opacity=".22"/>' +
  '<g fill="#fff" stroke="#E0E3EB" stroke-width="2">' +
    '<rect x="252" y="160" width="300" height="200" rx="14"/><rect x="574" y="160" width="300" height="200" rx="14"/>' +
    '<rect x="896" y="160" width="352" height="200" rx="14"/><rect x="252" y="384" width="996" height="236" rx="14"/></g>' +
  '<g fill="#E0E3EB"><rect x="276" y="188" width="140" height="14" rx="7"/><rect x="598" y="188" width="140" height="14" rx="7"/>' +
    '<rect x="920" y="188" width="140" height="14" rx="7"/><rect x="276" y="412" width="220" height="14" rx="7"/>' +
    '<rect x="276" y="452" width="948" height="10" rx="5"/><rect x="276" y="482" width="900" height="10" rx="5"/>' +
    '<rect x="276" y="512" width="930" height="10" rx="5"/><rect x="276" y="542" width="620" height="10" rx="5"/></g>' +
  '<g fill="#00539B" opacity=".16"><rect x="276" y="226" width="252" height="110" rx="10"/>' +
    '<rect x="598" y="226" width="252" height="110" rx="10"/><rect x="920" y="226" width="304" height="110" rx="10"/></g>' +
  '<g transform="translate(724 281)"><circle r="40" fill="#fff" stroke="#C9D2E0" stroke-width="2"/>' +
    '<rect x="-20" y="-15" width="40" height="30" rx="5" fill="none" stroke="#7F93B3" stroke-width="3.5"/>' +
    '<circle cx="-8" cy="-5" r="4" fill="#7F93B3"/><path d="M-18 13 L-5 0 L4 8 L9 3 L18 13 Z" fill="#7F93B3"/></g>' +
  '</svg>';

const shotOk = {};                      /* g -> true / false once known */
function probeShot(g) {
  if (!USE_REAL_SHOTS) return Promise.resolve(false);
  if (g in shotOk) return Promise.resolve(shotOk[g]);
  return new Promise(res => {
    const im = new Image();
    im.onload  = () => res(shotOk[g] = true);
    im.onerror = () => res(shotOk[g] = false);
    im.src = shotSrc(g);
  });
}
const stepAt = g => {                   /* -> { s, st, i } */
  for (const s of S) { const i = g - START[s.key]; if (i >= 0 && i < s.steps.length) return { s, st: s.steps[i], i }; }
};

/* the floating card used for the stage tooltip.
   WCAG 1.4.13: it can be hovered, it stays while hovered or focused, and Esc
   dismisses it. */
const pop = document.getElementById('pop');
let popFor = null, popHide = 0;
function showPop(anchor, html, place) {
  clearTimeout(popHide);
  pop.innerHTML = html;
  pop.hidden = false;
  popFor = anchor;
  const a = anchor.getBoundingClientRect(), p = pop.getBoundingClientRect();
  const m = 12, vw = innerWidth, vh = innerHeight;
  let x, y;
  if (place === 'left' && a.left - p.width - m > 8) {
    x = a.left - p.width - m; y = a.top + a.height / 2 - p.height / 2;
  } else {                                   /* above, or below if no room */
    x = a.left + a.width / 2 - p.width / 2; y = a.top - p.height - m;
    if (y < 8) y = a.bottom + m;
  }
  x = Math.max(8, Math.min(x, vw - p.width - 8));
  y = Math.max(8, Math.min(y, vh - p.height - 8));
  pop.style.left = Math.round(x + scrollX) + 'px';
  pop.style.top  = Math.round(y + scrollY) + 'px';
  anchor.setAttribute('aria-describedby', 'pop');
}
function hidePop(now) {
  clearTimeout(popHide);
  const go = () => { pop.hidden = true; if (popFor) popFor.removeAttribute('aria-describedby'); popFor = null; };
  now ? go() : (popHide = setTimeout(go, 120));
}
pop.addEventListener('mouseenter', () => clearTimeout(popHide));
pop.addEventListener('mouseleave', () => hidePop());
addEventListener('keydown', e => { if (e.key === 'Escape' && !pop.hidden) hidePop(true); });
addEventListener('scroll', () => { if (!pop.hidden) hidePop(true); }, { passive: true });
detail.addEventListener('scroll', () => { if (!pop.hidden) hidePop(true); }, { passive: true, capture: true });
const finePointer = matchMedia('(hover:hover) and (pointer:fine)');

/* stage tooltip: only for the set-back Tier 2 & 3 stages in the All view */
function nodeTip(n) {
  if (!n.classList.contains('is-out')) return;
  showPop(n, '<p class="pop__h">Tier 2 &amp; 3 stage</p>' +
             '<p class="pop__p">Select it to switch to the Tier 2 &amp; 3 view.</p>', 'above');
}
ring.addEventListener('mouseover', e => { const n = e.target.closest('.node'); if (n && finePointer.matches) nodeTip(n); });
ring.addEventListener('mouseout',  e => { const n = e.target.closest('.node'); if (n && !n.contains(e.relatedTarget)) hidePop(); });
ring.addEventListener('focusin',   e => { const n = e.target.closest('.node'); if (n) nodeTip(n); });
ring.addEventListener('focusout',  () => hidePop(true));

/* steps have no hover preview: selecting a step opens its screenshot */

/* lightbox */
const shotDlg = document.getElementById('shot');
let shotG = 1, shotReturn = null;
async function openShot(g, from) {
  hidePop(true);
  shotG = g;
  if (from) shotReturn = from;
  const { s, st, i } = stepAt(g);
  const ok = await probeShot(g);
  document.getElementById('shotTitle').innerHTML = pad2(g) + ' &middot; ' + st.t;
  document.getElementById('shotMeta').textContent = s.name + ' · ' + st.r + ' · ' + st.a;
  document.getElementById('shotFig').innerHTML = ok
    ? '<img src="' + shotSrc(g) + '" alt="Screenshot: ' + st.t.replace(/"/g, '&quot;') + '">'
    : '<div class="shot__ph" role="img" aria-label="Placeholder screenshot for ' + st.t.replace(/"/g, '&quot;') + '">' + PLACEHOLDER + '</div>';
  document.getElementById('shotCount').textContent = 'Step ' + (i + 1) + ' of ' + s.steps.length;
  document.getElementById('shotPrev').disabled = i === 0;
  document.getElementById('shotNext').disabled = i === s.steps.length - 1;
  if (!shotDlg.open) shotDlg.showModal();
}
detail.addEventListener('click', e => { const b = e.target.closest('.step__btn'); if (b) openShot(+b.dataset.g, b); });
document.getElementById('shotPrev').addEventListener('click', () => openShot(shotG - 1));
document.getElementById('shotNext').addEventListener('click', () => openShot(shotG + 1));
document.getElementById('shotClose').addEventListener('click', () => shotDlg.close());
shotDlg.addEventListener('click', e => { if (e.target === shotDlg) shotDlg.close(); });
shotDlg.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' && !document.getElementById('shotNext').disabled) openShot(shotG + 1);
  if (e.key === 'ArrowLeft'  && !document.getElementById('shotPrev').disabled) openShot(shotG - 1);
});
shotDlg.addEventListener('close', () => {
  /* return focus to the step that opened it, if it is still on screen */
  const b = detail.querySelector('.step__btn[data-g="' + shotG + '"]') || shotReturn;
  if (b && document.contains(b)) b.focus();
});

setTier(1, true);
drawRing();
placeToggle();
renderDetail();
if (document.fonts) document.fonts.ready.then(() => { placeToggle(); sizePanel(); scrollState(); });
let rz;
addEventListener('resize', () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(() => {
  /* leaving the phone layout with nothing open: open stage 01 so the panel
     beside the ring has content; and keep row semantics in step */
  if (!isPhone() && !sel) { sel = 'screening'; renderDetail(false); }
  drawRing(); layoutArcs(); placeToggle(); placeDetail(); sizePanel(); scrollState();
}); });

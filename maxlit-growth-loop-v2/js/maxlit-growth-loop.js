/* ──────────────────────────────────────────────────────────────────────────
   A360 × MAXLit — From screening to measurable growth  (v2)

   Content (2026-11-17): "MaxLiteracy MTSS & Assessment Story.xlsx".
   Sheet "Updated MTSS Flow": column A = the circles, B = who the stage is for,
   C = theme, D = sub-titles in the panel, E = the actions under each sub-title.
   Sheet "ML TODAY - iTRS": the 44 screenshot steps (role, action, screen).
   2026-11-18: 06 Growth Screeners merged into 01, renamed "Universal
   Screening and Growth Assessment"; five circles. Text is verbatim apart from typo fixes
   (lightbulb, Instruction, Administer, student's, your).

   Earlier notes, kept for history:
   Stages, step titles, roles, product areas and handoffs are transcribed from
   the Figma user flow (file ruuoTIh9LFcNyushRDsOw8, node 1:1616).
   Content sources: stage names and descriptions are the client's own copy
   (sent 2026-10-13, verbatim, with a closing full stop added); steps, roles,
   screens and handoffs are Figma text, verbatim; anything with no source is
   Lorem ipsum, so the "What happens next" rows are Lorem.

   v2 keeps CONTENT exactly as v1 (copied byte for byte). What changed is how
   it is shown: see the notes at each block below and in the CSS header.

   Stage colours (c) are the MAXLiteracy brand colours from the landing
   page's stripe; t is the glyph colour on that fill. Every pair clears WCAG AA
   (4.5:1): blue 7.75, purple 6.24, cyan-deep 4.57, berry 4.75 with white;
   green and orange are taken 14% / 22% deeper (#2F8513 4.68, #BE561B 4.63)
   so they can carry white too; gold keeps ink (8.27).
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
    {"n": "01", "key": "screening", "name": "Universal Screening and Growth Assessment", "tier": 1, "c": "#00539B", "t": "#FFFFFF", "icon": "fa-magnifying-glass-chart", "students": "All Students", "groups": [{"theme": "Identify At-Risk Students to Ensure Growth", "students": "All Students", "items": [{"t": "Administer Screeners to All Students", "do": ["Administer Grade-Level Screening and Growth Assessments"]}, {"t": "Score and Examine Item-Level Data in Grade View", "do": ["For necessary subtests, score recordings in Grade View", "Review item level data in Grade View as necessary to see individual student responses to each item for error analysis"]}, {"t": "Review Screening Results in Reports", "do": ["Access the Assess 360 Test Score Comparison Report", "Use composite scores to identify at-risk students", "Review Decoding Threshold column to identify students needing foundational skills support in Grades 2-5"]}, {"t": "Create a Reading Profile for Each Student", "do": ["Review subtest scores and interpret each student’s “Reading Profile”"]}, {"t": "Review Data & Recommendations", "do": ["Click the lightbulb to access instructional recommendations including a list of skills in need of support and instructional resources", "Determine potential skill areas for emphasis and small-groupings"]}, {"t": "RAN Task for At-Risk Students", "do": ["For K-2 Students, administer RAN Tasks to students at high-risk or some-risk for reading difficulties (based on composite score) to identify additional potential causes for reading difficulties", "Access Test Score Comparison Report for RAN results"]}, {"t": "Decision Making on Tiered Support", "do": ["Make decisions on students needing Tier 2 or Tier 3 support and move on to gathering Diagnostic Assessment data"]}]}, {"theme": "Track Growth to End-of-Year Expectations, At-Risk Status, and Program Efficacy", "students": "All Students (Collaborative Core)", "items": [{"t": "Use Additional Screening Administrations to Track Growth Overall and for Essential Skills", "do": ["Administer the Winter and Spring Assess 360 Screening and Growth Assessments", "Access the Test Score Overview to check growth to end-of-year expectations over time"]}]}], "steps": [{"r": "Teacher", "t": "Sign in to BU", "a": "Sign in page", "g": 1}, {"r": "Teacher", "t": "Choose your program", "a": "Dashboard", "g": 2}, {"r": "Teacher", "t": "Filter for Screening & Diagnostic", "a": "Library", "g": 3}, {"r": "Teacher", "t": "Preview assessment / select subtest", "a": "Preview", "g": 4}, {"r": "Teacher", "t": "Drag and drop assessment to Add Assignments", "a": "Library", "g": 5}, {"r": "Teacher", "t": "Add assignment details and save", "a": "Library", "g": 6}, {"r": "Student", "t": "Sign in to BU", "a": "Sign in page", "g": 7}, {"r": "Student", "t": "Open the assignment", "a": "Dashboard", "g": 8}, {"r": "Student", "t": "Take test", "a": "Test Taker", "g": 9}, {"r": "Teacher", "t": "Select Assignments from menu", "a": "Library", "g": 10}, {"r": "Teacher", "t": "Select assignment and Grade View", "a": "Assignments", "g": 11}, {"r": "Teacher", "t": "View automated speech recognition scores", "a": "Grading", "g": 12}, {"r": "Teacher", "t": "Grade additional student work, if applicable", "a": "Grading", "g": 13}, {"r": "Teacher", "t": "Select Reports from menu", "a": "Grading", "g": 14}, {"r": "Teacher", "t": "View Test Score Comparison report", "a": "Reports", "g": 15}, {"r": "Teacher", "t": "View instructional recommendations", "a": "Reports", "g": 16}, {"r": "Teacher", "t": "Give A360 Screening / Growth Assessment", "a": "Library", "g": 43}, {"r": "Teacher", "t": "Check A360 Test Score Overview for growth", "a": "Reports", "g": 44}]},

    {"n": "02", "key": "diagnostic", "name": "Diagnostic Assessment", "tier": 23, "c": "#00539B", "t": "#FFFFFF", "icon": "fa-stethoscope", "students": "Students Receiving Tier 2 & Tier 3 Support", "groups": [{"theme": "Determine the Starting Point for Tiered Support", "students": "Students Receiving Tier 2 & Tier 3 Support", "items": [{"t": "Administer Diagnostic Assessments", "do": ["Select Diagnostic assessment to administer based on Assess 360 data (review guide for specific guidance)", "For each completed subtest, if the student scores at or above 80%, administer the next subtest. If below 80% stop"]}, {"t": "Review Diagnostic Data & Recommendations", "do": ["Access Test Score Comparison report and recommendations to view placement for Tier 2 or Tier 3 starting points for instruction", "Click the lightbulb to access recommendations for quick connections to the Support and Acceleration Lesson Bank to access instructional materials"]}]}, {"theme": "Finalize Tiered Support Systems", "students": "Students Receiving Tier 2 & Tier 3 Support", "items": [{"t": "Begin Implementation of Tier 2 and Tier 3 Support and Progress Monitoring", "do": ["Educators make final decisions on the level, frequency, and setting for each student receiving Tier 2 or Tier 3 support. Create a progress monitoring schedule."]}]}], "steps": [{"r": "Teacher", "t": "Assign Diagnostic Phonics Assessment", "a": "Library", "g": 17}, {"r": "Teacher", "t": "Administer the first subtest", "a": "Grade View", "g": 18}, {"r": "Teacher", "t": "View diagnostic Test Score Comparison", "a": "Reports", "g": 19}, {"r": "Teacher", "t": "View placement recommendation", "a": "Reports / Recs", "g": 20}]},

    {"n": "03", "key": "formative", "name": "Program Assessment: Embedded Formative", "tier": 1, "c": "#00539B", "t": "#FFFFFF", "icon": "fa-chalkboard-user", "students": "All Students (Collaborative Core)", "groups": [{"theme": "Embedded Formative Assessment to Identify Performance and Adjust", "students": "All Students (Collaborative Core)", "items": [{"t": "Check Skill Performance and Immediately Adjust Instruction", "do": ["Administer formative program assessments to track performance on skills and standards taught during Collaborative Core instruction and make quick adjustments to support all students"]}, {"t": "Use Data to Reteach, Reassess, and provide additional independent practice", "do": ["Use formative data on Skills Mastery Report, Test Score Comparison Report, and Single Test Analysis Report to determine reteaching and support needs across students (including leveraging recommendations).", "Instructional teams meet and review data in Professional Learning Communities using a structured data protocol (can also apply to small-group and unit-level summative data cycles)"]}]}, {"theme": "WINN With Small Group Instruction", "students": "All Students (Collaborative Core)", "items": [{"t": "Use Small-Group to Address Student Needs and Provide Tiered Support", "do": ["View recommended skills and resources in the Skills Mastery and Test Score Comparison Reports", "Leverage WINN Small-Group time and relevant resources (Support and Acceleration Bank Lessons and Activities, Mastery Check Assessments, Decodables, Digital Practice Activities) to create a support plan for students.", "Create small groups and schedule for the week", "Provide Small-Group Instruction in Rotations", "Assess skills using Quick Checks and Mastery Checks as needed."]}]}], "steps": [{"r": "Teacher", "t": "Go to Library from menu", "a": "Reports", "g": 21}, {"r": "Teacher", "t": "Open your unit's Teacher Edition", "a": "Library", "g": 22}, {"r": "Teacher", "t": "Teach instruction", "a": "ITRS", "g": 23}, {"r": "Teacher", "t": "Access and assign assessment from Library", "a": "Plan & Teach", "g": 24}, {"r": "Teacher", "t": "Administer Cumulative Spelling Assessment", "a": "Library", "g": 25}, {"r": "Student", "t": "Complete a Phonics, Spelling, or Vocabulary game", "a": "Test Taker", "g": 26}, {"r": "Teacher", "t": "View Skills Mastery Report", "a": "Student / Class Profile", "g": 27}, {"r": "Teacher", "t": "View Reteach, Reassess, Practice resources", "a": "Plan & Teach", "g": 28}, {"r": "Teacher", "t": "Run WINN small-group time", "a": "Plan & Teach", "g": 29}, {"r": "Teacher", "t": "Access a Lesson Bank reteach lesson", "a": "Plan & Teach", "g": 30}, {"r": "Teacher", "t": "Administer Mastery Check", "a": "Grade View", "g": 31}, {"r": "Teacher", "t": "Recheck Skills Mastery Report", "a": "Student / Class Profile", "g": 32}]},

    {"n": "04", "key": "summative", "name": "Program Assessment: Summative", "tier": 1, "c": "#00539B", "t": "#FFFFFF", "icon": "fa-clipboard-check", "students": "All Students (Collaborative Core)", "groups": [{"theme": "Summative Assessment: Assess Mastery Levels for Skills Covered Across the Unit", "students": "All Students (Collaborative Core)", "items": [{"t": "Assess Knowledge Building and Skill Mastery in the Context of Each Unit", "do": ["Administer end-of-unit assessments during Week 4", "Use summative data on Skills Mastery Report, Test Score Comparison Report, and Single Test Analysis Report to determine reteaching and support needs across students (including leveraging recommendations)", "Access Support and Acceleration Bank Lessons, Decodables, Digital Practice Activities", "Provide Reteaching and additional support during Flex days", "Revisit groupings and small-group planning for the next unit"]}, {"t": "Look Ahead to the Next Unit", "do": ["Administer the Unit Knowledge Preview (G3-5) to determine levels of student background knowledge on the upcoming topic"]}]}], "steps": [{"r": "Teacher", "t": "Return to your Teacher Edition for more instruction", "a": "Plan & Teach", "g": 33}, {"r": "Teacher", "t": "Assign Unit Assessment", "a": "Library", "g": 34}, {"r": "Student", "t": "Take Unit Assessment", "a": "Test Taker", "g": 35}, {"r": "Teacher", "t": "Score Unit ORF", "a": "Grade View", "g": 36}, {"r": "Teacher", "t": "View overall Test Score Comparison", "a": "Reports", "g": 37}, {"r": "Teacher", "t": "View Standards Performance and recommendations", "a": "Reports", "g": 38}, {"r": "Teacher", "t": "View Standards Comparison Report", "a": "Reports", "g": 39}]},

    {"n": "05", "key": "monitoring", "name": "Progress Monitoring Assessment", "tier": 23, "c": "#00539B", "t": "#FFFFFF", "icon": "fa-chart-line", "students": "Students Receiving Tier 2 & Tier 3 Support", "groups": [{"theme": "Track Progress Over Time to Ensure Tiered Support Leads to Meaningful Growth", "students": "Students Receiving Tier 2 & Tier 3 Support", "items": [{"t": "Track Response-to-Intervention and Adjust As Necessary", "do": ["Administer specific progress monitoring types based on Diagnostic Assessment data", "Review the Test Score Comparison Report with trend line to identify if student performance is tracking to the end of year benchmark", "If data points track or are above the trend line, continue with implementation of tiered instructional support", "If multiple data points are below the trend line, revisit the support plan for the individual student - is an increase in time or setting warranted? Would another change unlock growth?"]}]}], "steps": [{"r": "Teacher", "t": "Assign Progress Monitoring Assessment", "a": "Library", "g": 40}, {"r": "Teacher", "t": "Administer Nonsense Word Fluency", "a": "Grade View", "g": 41}, {"r": "Teacher", "t": "Check Test Score Overview trend line", "a": "Reports", "g": 42}]}
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
const FIRST = S[0].key;                 /* the loop starts (and closes) here */
const byKey = k => S.find(x => x.key === k);
const idx = k => S.findIndex(x => x.key === k);
const INK = '#181B44';

/* every CONTENT value is escaped before it reaches innerHTML, so a "<" or a
   stray "&" in a stage name can never break the markup */
const esc = v => String(v == null ? '' : v).replace(/[&<>"']/g,
  c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const icon = (s, fb) => 'fa-solid ' + (s && s.icon ? s.icon : fb || 'fa-circle-dot');

/* the stage before (d = -1) or after (d = 1) stage i around the loop. In the
   All students view this skips the set-back Tier 2 & 3 stages, so Previous /
   Next walk 01 03 04 05 07; those stages still open when selected directly. */
function neighbour(i, d) {
  let j = i;
  do { j = (j + d + S.length) % S.length; } while (tier === 1 && S[j].tier === 23 && j !== i);
  return S[j];
}

let tier = 1;
/* Phones (under 640px) show the loop as a vertical list; each stage opens in
   place there. From 640px up the ring is shown, so tablets keep the loop. */
const PHONE = '(max-width:639px)';
const isPhone = () => matchMedia(PHONE).matches;
const isWide  = () => matchMedia('(min-width:1240px)').matches;   /* ring and panel side by side */
/* Nothing is open on launch: the ring sits centred in the card and the
   panel slides in beside it (pushing the ring to its place) on the first
   click. Phones start as a closed list. */
let sel = null;

const ring    = document.getElementById('ring');
const detail  = document.getElementById('detail');
const arcs    = document.getElementById('arcs');
const reduceQ = matchMedia('(prefers-reduced-motion: reduce)');
const reduce  = () => reduceQ.matches;
const scrollMode = () => reduce() ? 'instant' : 'smooth';

/* The ring stays in view (position:sticky) while the panel beside it is read.
   On the landing page a sticky "On this page" bar (.spynav, 68px) sits on
   top, so the offset clears it; standalone it is a small margin. */
const spynav = document.querySelector('.spynav');
const stickyTop = () => (spynav ? spynav.offsetHeight : 0) + 24;
document.documentElement.style.setProperty('--gl-sticky-top', stickyTop() + 'px');

/* ---------- ring geometry ----------
   Positions are fixed by stage index, never by what is visible, so switching
   tiers never reshuffles the circle - a set-back stage sits where it always sits. */
const R = 38.5;                       /* % of the ring - stages sit just inside its edge */
const pos = i => {
  const a = (i / S.length) * 2 * Math.PI - Math.PI / 2;
  return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
};
const f2 = n => n.toFixed(2);

/* no widows: the last two words of running text are joined with a no-break
   space (CSS text-wrap:pretty does the same where supported). Both helpers
   take text that is already escaped. */
const nw = s => { s = s || ''; return s.split(' ').length < 3 ? s : s.replace(/ ([^ <>]+)$/, '&nbsp;$1'); };
/* same idea where the space may be too narrow: the last two words go in a
   span that CSS keeps together only where there is room */
const nw2 = s => { const w = (s || '').split(' '); return w.length < 3 ? w.join(' ') :
  w.slice(0, -2).join(' ') + ' <span class="nw2">' + w.slice(-2).join(' ') + '</span>'; };

/* a circle label "Program Assessment: Summative" shows the part before the
   colon as a small line above the name */
const nodeName = n => { const k = n.indexOf(':');
  return k < 0 ? nw2(esc(n)) : '<span class="node__pre">' + esc(n.slice(0, k)) + '</span>' + nw2(esc(n.slice(k + 1).trim())); };

/* ---------- ring ----------
   The circles and arcs are built once and then only updated (classes,
   attributes), so selecting a stage or switching tiers animates with CSS
   instead of popping as a rebuild would. */
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
      '<span class="node__badge" aria-hidden="true"><i class="' + icon(s) + '"></i></span>' +
      '<span class="node__n">' + esc(s.n) + '</span>' +
      '<span class="node__name">' + nodeName(s.name) + '</span>' +
      (s.tier === 23 ? '<span class="node__tier">Tier 2 &amp; 3</span>' : '') +
      '<i class="node__chev fa-solid fa-chevron-down" aria-hidden="true"></i>';
    ring.appendChild(b);
  });
  /* one path + one arrowhead per arc, kept for the life of the page. The
     forward arcs carry pathLength="1" so the "next" arc can draw itself in;
     the closing arc keeps real units for its dash pattern. */
  arcs.innerHTML = S.map((s, i) => {
    const close = i === S.length - 1;
    return '<path class="arc' + (close ? ' is-close' : '') + '" data-i="' + i + '"' + (close ? '' : ' pathLength="1"') + '/>' +
           '<polygon class="arrowhead' + (close ? ' is-close' : '') + '" data-i="' + i + '"/>';
  }).join('');
  ringBuilt = true;
}

const ringNote = document.getElementById('ringNote');
function drawRing() {
  if (!ringBuilt) buildRing();
  const phone = isPhone();
  ring.querySelectorAll('.node').forEach(b => {
    const s = byKey(b.dataset.key);
    b.classList.toggle('is-sel', s.key === sel);
    b.classList.toggle('is-out', tier === 1 && s.tier === 23);
    b.classList.toggle('is-t23', tier === 23 && s.tier === 23);
    /* phone rows open and close (accordion); ring circles pick the stage
       shown in the panel, which is a "current" state, not a toggle */
    if (phone) { b.setAttribute('aria-expanded', String(s.key === sel)); b.removeAttribute('aria-current'); }
    else {
      b.removeAttribute('aria-expanded');
      if (s.key === sel) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
    }
  });
  updateArcs();
  /* stages 2 & 6 are only for some students; the key beside the toggle says
     how to spot them */
  ringNote.classList.toggle('is-t23', tier === 23);
  ringNote.querySelector('span').innerHTML = tier === 1
    ? 'Dashed stages are only for students in Tier&nbsp;2&nbsp;&amp;&nbsp;3.'
    : 'Stages with a dashed ring are only for students in Tier&nbsp;2&nbsp;&amp;&nbsp;3.';
}

/* Every arc is a piece of ONE circle - the circle the stages sit on - running
   clockwise from the edge of one stage to the edge of the next, ending in an
   arrowhead that follows the circle. Each end keeps clear of whatever is drawn
   around its stage (the selected halo, the Tier 2 & 3 dashed ring); those
   clearances ease from old to new so the arcs glide, not jump.
   The arc leaving the selected stage is drawn in blue: it points where the
   Next button goes (only when that is the very next stage on the ring). */
const clearCur = S.map(() => 0), clearTgt = S.map(() => 0);
const clearFor = s => {
  const selPx = s.key === sel ? 12 : 0;                         /* scale + halo */
  const ringPx = tier === 23 && s.tier === 23 ? (s.key === sel ? 22 : 14) : 0;
  return Math.max(selPx, ringPx);
};
let arcAnim = 0, lastNext = -1;
function updateArcs() {
  const si = sel ? idx(sel) : -1;
  const nx = si >= 0 ? idx(neighbour(si, 1).key) : -1;
  const nextArc = si >= 0 && si !== S.length - 1 && nx === (si + 1) % S.length ? si : -1;
  S.forEach((s, i) => {
    clearTgt[i] = clearFor(s);
    const j2 = (i + 1) % S.length;
    const dim = tier === 1 && (s.tier === 23 || S[j2].tier === 23);
    arcs.querySelectorAll('[data-i="' + i + '"]').forEach(el => {
      el.classList.toggle('is-dim', dim);
      el.classList.toggle('is-next', i === nextArc);
    });
  });
  /* a new "next" arc draws itself in from the selected stage */
  if (nextArc !== lastNext && nextArc >= 0 && !reduce()) {
    arcs.querySelectorAll('[data-i="' + nextArc + '"]').forEach(el => {
      el.classList.remove('is-draw'); void el.getBoundingClientRect(); el.classList.add('is-draw');
    });
  }
  lastNext = nextArc;
  cancelAnimationFrame(arcAnim);
  /* a value can only go bad if a frame is interrupted mid-maths; never let it
     carry into the next tween */
  S.forEach((_, i) => { if (!Number.isFinite(clearCur[i])) clearCur[i] = clearTgt[i]; });
  const from = clearCur.slice(), D = reduce() ? 0 : 250;
  const ease = t => 1 - Math.pow(1 - t, 5);           /* same feel as --gl-ease */
  let t0 = null;
  const tick = now => {
    if (t0 === null) t0 = now;                        /* clock from the first frame */
    const k = D ? Math.min(1, Math.max(0, (now - t0) / D)) : 1, e = ease(k);
    S.forEach((_, i) => { clearCur[i] = from[i] + (clearTgt[i] - from[i]) * e; });
    layoutArcs();
    if (k < 1) arcAnim = requestAnimationFrame(tick);
  };
  if (D) { layoutArcs(); arcAnim = requestAnimationFrame(tick); } else tick(0);
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

/* ---------- detail panel ----------
   v2: no hidden steps - every step is listed (no "Show all"). Side by side
   the panel is held to the ring column's height and its content scrolls,
   with Previous / Next pinned in view; stacked, the pager sticks to the
   bottom of the screen. Steps are grouped by who does them, each group its
   own list, with the product area under the step title and a thumbnail of
   the step's screen. */
const ROLE_ICON = { Teacher: 'fa-person-chalkboard', Student: 'fa-child-reaching' };
const pad2 = n => String(n).padStart(2, '0');
const START = {};                       /* global (Figma) number of each stage's first step */
{ let g = 1; S.forEach(s => { START[s.key] = g; g += (s.steps || []).length; }); }
const TOTAL = S.reduce((n, s) => n + (s.steps || []).length, 0);

/* full-size screenshots: assets/steps/step-NN.jpg (1600px wide); 240px
   thumbnails of the same files: assets/steps/thumbs/step-NN.jpg */
/* g here is the step's place in the flow; each step carries its own
   screenshot number (st.g), so steps can move between stages (06 Growth was
   merged into 01) without picking up another step's picture */
const figNo    = g => { const at = stepAt(g); return at && at.st.g ? at.st.g : g; };
const shotSrc  = g => 'assets/steps/step-' + pad2(figNo(g)) + '.jpg';
const thumbSrc = g => 'assets/steps/thumbs/step-' + pad2(figNo(g)) + '.jpg';
/* A step shows its real screenshot when step-NN.jpg exists and the
   placeholder below when it does not, so screenshots can be added one at a
   time. */
const USE_REAL_SHOTS = true;

function stepsBlock(s) {
  const all = s.steps || [];
  if (!all.length) return '';
  let out = '', prev = null, open = false;
  all.forEach((st, i) => {
    if (st.r !== prev) {
      if (open) out += '</ol></div>';
      if (prev !== null) out += '<p class="hand"><i class="fa-solid fa-arrow-turn-down" aria-hidden="true"></i>Handoff to ' + esc(st.r) + '</p>';
      out += '<div class="grp"><p class="who"><span class="who__ic" aria-hidden="true"><i class="fa-solid ' +
             (ROLE_ICON[st.r] || 'fa-user') + '"></i></span>' + esc(st.r) + '</p><ol class="grp__list">';
      open = true; prev = st.r;
    }
    /* each step is a button that opens its screenshot. Numbers are Figma's
       (01-44 across the whole flow). */
    const g = START[s.key] + i;
    out += '<li><button type="button" class="step__btn" data-g="' + g + '" aria-haspopup="dialog">' +
           '<span class="step__n">' + pad2(g) + '</span>' +
           '<span class="step__body"><span class="step__t">' + nw(esc(st.t)) + '</span>' +
           '<span class="step__a">' + esc(st.a) + '</span></span>' +
           '<span class="step__thumb" aria-hidden="true">' +
             (USE_REAL_SHOTS ? '<img src="' + thumbSrc(g) + '" alt="" width="240" height="143" loading="lazy" decoding="async">' : '') +
             '<i class="fa-regular fa-image"></i></span>' +
           '<span class="sr-only">, view screenshot</span></button></li>';
  });
  if (open) out += '</ol></div>';
  return '<div class="d-sec"><h3 class="d-h3">See it in Benchmark Universe</h3><p class="d-hint">Select a step to see its&nbsp;screen.</p>' +
         '<div class="steps">' + out + '</div></div>';
}

/* who a stage (or one of its themes) is for: a people icon, a quiet "For",
   then the audience */
const forLine = t => '<p class="d-for"><i class="fa-solid fa-user-group d-for__ic" aria-hidden="true"></i>' +
  '<span><span class="d-for__l">For</span> ' + esc(t) + '</span></p>';

/* the process (sheet columns C-E): one card per theme, holding its
   sub-titles and the actions under each */
function processBlock(s) {
  let k = 0;
  return (s.groups || []).map(g =>
    '<div class="d-sec pgrp">' +
      '<h3 class="d-h3">' + nw(esc(g.theme)) + '</h3>' +
      (g.students && g.students !== s.students ? forLine(g.students) : '') +
      '<ol class="proc">' + g.items.map(it =>
        '<li><button type="button" class="proc__t proc__btn" data-k="' + (k++) + '" aria-haspopup="dialog">' +
          '<span>' + nw(esc(it.t)) + '</span><i class="fa-regular fa-image proc__ic" aria-hidden="true"></i>' +
          '<span class="sr-only">, view image</span></button>' +
        (it.do.length ? '<ul class="proc__do">' + it.do.map(x => '<li>' + nw(esc(x)) + '</li>').join('') + '</ul>' : '') +
        '</li>').join('') + '</ol></div>').join('');
}

/* Previous / Next: the direction is a visible caption, the stage name sits
   under it (two lines at most). On phones the name is read out but not shown:
   the stage list is right there. The accessible name is "Previous stage
   <name>", which contains the visible label. */
function pagerBlock(prev, nx) {
  /* "Previous stage" / "Next stage" (phones: "Previous" / "Next"); the stage
     name follows for screen readers only, so the accessible name is
     "Next stage Universal Screening" and contains the visible label */
  const btn = (cls, s, dir) =>
    '<button type="button" class="' + cls + ' pg pg--' + dir + '" data-goto="' + esc(s.key) + '">' +
      '<span class="pg__dir">' +
        (dir === 'prev' ? '<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>' : '') +
        '<span>' + (dir === 'prev' ? 'Previous' : 'Next') + '<span class="pg__more"> stage</span></span>' +
        (dir === 'next' ? '<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>' : '') + '</span>' +
      '<span class="pg__name"> ' + esc(s.name) + '</span></button>';
  return '<nav class="pager" aria-label="Move between stages">' +
    btn('btn-ghost', prev, 'prev') + btn('btn', nx, 'next') + '</nav>';
}

/* On a phone the ring is a list; the panel moves directly beneath the open
   stage so tapping one visibly opens it, and moves back on wider screens. */
const loopEl = document.querySelector('.loop');
function placeDetail() {
  if (!sel) return;
  if (isPhone()) {
    const node = ring.querySelector('.node[data-key="' + sel + '"]');
    if (node && node.nextElementSibling !== detail) node.after(detail);
  } else if (detail.parentElement !== loopEl) {
    loopEl.appendChild(detail);
  }
}

/* Side by side, the panel is as tall as the ring column (toggle + ring) -
   compact, as in v1 - so Previous / Next always sit level with the bottom of
   the ring, in view.
   Only the content above them scrolls, with a visible scrollbar and fades
   that say there is more above / below. Never taller than the screen. */
function sizePanel() {
  if (!isWide() || !sel) { detail.style.removeProperty('--gl-panel-h'); return; }
  const h = Math.max(480, Math.min(ring.parentElement.offsetHeight, innerHeight - stickyTop() - 16));
  detail.style.setProperty('--gl-panel-h', Math.round(h) + 'px');
}
function scrollState() {
  const sc = detail.querySelector('.d-scroll');
  if (!sc) return;
  const over = isWide() && sc.scrollHeight > sc.clientHeight + 1;
  /* a scrolling panel is a keyboard stop, so its content can be read with
     the arrow keys; otherwise it stays out of the tab order */
  sc.tabIndex = over ? 0 : -1;
  detail.classList.toggle('is-scroll', over);
  detail.classList.toggle('has-more', over && sc.scrollTop + sc.clientHeight < sc.scrollHeight - 4);
  detail.classList.toggle('is-scrolled', over && sc.scrollTop > 4);
}

/* side by side, the closed state keeps the panel in the grid (invisible) so
   it can slide in; the ring is shifted by half the panel + gap to sit centred */
function centreShift() {
  if (!isWide()) { loopEl.style.removeProperty('--gl-shift'); return; }
  const gap = parseFloat(getComputedStyle(loopEl).columnGap) || 0;
  loopEl.style.setProperty('--gl-shift', Math.round((detail.getBoundingClientRect().width + gap) / 2) + 'px');
}
function renderDetail(animate) {
  loopEl.classList.toggle('is-closed', !sel);
  detail.hidden = !sel && !isWide();      /* stacked / phone: no empty box */
  if (!sel) { detail.innerHTML = ''; detail.style.removeProperty('--gl-panel-h'); centreShift(); return; }
  const s = byKey(sel), i = idx(sel);
  const prev = neighbour(i, -1), nx = neighbour(i, 1);
  const name = esc(s.name);
  /* same stage re-drawn (a view switch): keep the reader's place */
  const old = detail.querySelector('.d-scroll');
  const keep = !animate && old ? old.scrollTop : 0;
  detail.style.setProperty('--nc', s.c);
  detail.style.setProperty('--nt', s.t);
  /* the content scrolls inside .d-scroll when the panel is held to the
     ring's height (side by side); the pager sits outside it, always in view */
  detail.innerHTML =
    '<div class="d-scroll" id="dScroll" tabindex="-1" role="region" aria-label="' + name + ' details">' +
    '<div class="d-head">' +
      '<p class="d-eyebrow">Stage ' + esc(s.n) +
        (s.tier === 23 ? '<span class="d-tier">Tier 2 &amp; 3</span>' : '') + '</p>' +
      '<div class="d-title"><span class="d-badge" aria-hidden="true"><i class="' + icon(s) + '"></i></span>' +
        '<h2 class="d-name" id="dName" tabindex="-1">' + nw2(name) + '</h2></div>' +
    '</div>' +
    (s.students ? forLine(s.students) : '') +
    /* stage video link: commented out until the real stage videos are supplied
    '<button type="button" class="d-video" id="vidOpen" aria-haspopup="dialog">' +
      '<span class="d-video__p" aria-hidden="true"><i class="fa-solid fa-play"></i></span>' +
      '<span>' + nw('Watch the ' + name + ' video') + '</span></button>' +
    */
    processBlock(s) + stepsBlock(s) + '</div>' + pagerBlock(prev, nx);
  /* document.getElementById('vidOpen').addEventListener('click', openVideo);   (video link commented out) */
  placeDetail();
  const sc = detail.querySelector('.d-scroll');
  sizePanel();
  sc.scrollTop = keep;
  sc.addEventListener('scroll', scrollState, { passive: true });
  scrollState();
  if (animate) {                          /* new stage: its content settles in (a plain fade with reduced motion) */
    detail.classList.remove('is-in'); void detail.offsetWidth; detail.classList.add('is-in');
  } else detail.classList.remove('is-in');
}

/* a missing thumbnail falls back to the image glyph behind it */
detail.addEventListener('error', e => {
  if (e.target.tagName === 'IMG' && e.target.closest('.step__thumb')) e.target.remove();
}, true);

/* ---------- selection ---------- */
const srStatus = document.getElementById('srStatus');
function select(key, fromClick, focusTo, quiet) {
  const s = byKey(key);
  if (!s) return;
  hidePop(true);
  /* phone: tapping the open stage closes it again */
  if (isPhone() && sel === key && focusTo === 'node') {
    sel = null; drawRing(); renderDetail(false);
    srStatus.textContent = s.name + ' closed.';
    return;
  }
  /* a set-back stage still works: it opens its view rather than doing nothing */
  if (s.tier === 23 && tier === 1) setTier(23, true);
  const changed = sel !== key;
  /* phone: opening a row closes the one above it, which would throw the tapped
     row up the page; hold it where the finger is instead */
  const anchor = isPhone() && fromClick && focusTo === 'node' ? ring.querySelector('.node[data-key="' + key + '"]') : null;
  const y0 = anchor ? anchor.getBoundingClientRect().top : 0;
  sel = key;
  drawRing();
  renderDetail(changed);
  if (anchor) scrollBy({ top: anchor.getBoundingClientRect().top - y0, behavior: 'instant' });
  /* the heading is focused (and so read out) when Previous / Next is used, so
     the live message is only needed when focus stays on the ring */
  const toHeading = focusTo === 'heading' && !isPhone();
  if (!quiet && !toHeading) srStatus.textContent = 'Stage ' + s.n + ', ' + s.name + '.' +
    (s.tier === 23 ? ' Tier 2 and 3.' : '');
  const nodeEl = ring.querySelector('.node[data-key="' + key + '"]');
  if (focusTo === 'node' || (focusTo === 'heading' && isPhone())) { if (nodeEl) nodeEl.focus({ preventScroll: !isPhone() }); }
  if (toHeading) document.getElementById('dName').focus({ preventScroll: true });
  if (!fromClick) return;
  if (isPhone()) {
    if (nodeEl && !anchor) nodeEl.scrollIntoView({ block: 'nearest', behavior: scrollMode() });
  } else if (!isWide() && detail.getBoundingClientRect().top > innerHeight - 200) {
    /* stacked layout: the panel is below the ring, so scroll just far enough
       that the new stage's heading comes into view */
    scrollBy({ top: detail.getBoundingClientRect().top - innerHeight + 320, behavior: scrollMode() });
  } else if (detail.getBoundingClientRect().top < stickyTop()) {
    /* the panel was read past its top: bring the new stage's heading back
       next to the ring instead of starting somewhere in the middle */
    scrollBy({ top: detail.getBoundingClientRect().top - stickyTop(), behavior: scrollMode() });
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
/* arrow keys move between stages in ring order (Home / End: first / last);
   Enter or Space opens one, as before */
ring.addEventListener('keydown', e => {
  const n = e.target.closest('.node');
  if (!n || e.altKey || e.ctrlKey || e.metaKey) return;
  const nodes = [...ring.querySelectorAll('.node')], k = nodes.indexOf(n);
  const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
  let j;
  if (step) j = (k + step + nodes.length) % nodes.length;
  else if (e.key === 'Home') j = 0;
  else if (e.key === 'End') j = nodes.length - 1;
  else return;
  e.preventDefault();
  nodes[j].focus();
});

/* ---------- tier toggle ---------- */
const tabs = [...document.querySelectorAll('.seg button')];
function setTier(t, quiet) {
  tier = t;
  hidePop(true);
  tabs.forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.tier === t)));
  if (quiet) return;
  /* a Tier 2 & 3 stage is open and the view goes back to All students:
     that stage is now set back, so open the next stage in the loop */
  const open = sel && byKey(sel);
  if (t === 1 && open && open.tier === 23) {
    const nx = neighbour(idx(sel), 1);
    sel = nx.key;
    drawRing(); renderDetail(true);
    srStatus.textContent = 'All students. Showing stage ' + nx.n + ', ' + nx.name + '.';
    return;
  }
  drawRing(); renderDetail(false);
  srStatus.textContent = t === 1 ? 'All students.' : 'Tier 2 and 3 support.';
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
/* the frame is emptied once the closing fade is over, so playback stops
   without the picture blinking out mid-fade */
dlg.addEventListener('close', () => setTimeout(() => { if (!dlg.open) frame.removeAttribute('src'); }, 220));
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

/* ---------- loop-back row, phone only ---------- */
const loopBack = document.getElementById('loopBack');
loopBack.querySelector('span').textContent = 'Back to ' + S[0].n + ' ' + S[0].name;
loopBack.addEventListener('click', () => select(FIRST, true, 'heading'));

/* ---------- step screenshots ---------- */
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

const shotInfo = {};                    /* g -> { ok, w, h } once known */
function probeShot(g) {
  if (!USE_REAL_SHOTS) return Promise.resolve({ ok: false });
  if (shotInfo[g]) return Promise.resolve(shotInfo[g]);
  return new Promise(res => {
    const im = new Image();
    im.onload  = () => res(shotInfo[g] = { ok: true, w: im.naturalWidth, h: im.naturalHeight });
    im.onerror = () => res(shotInfo[g] = { ok: false });
    im.src = shotSrc(g);
  });
}
const stepAt = g => {                   /* -> { s, st, i } */
  for (const s of S) {
    const i = g - START[s.key];
    if (s.steps && i >= 0 && i < s.steps.length) return { s, st: s.steps[i], i };
  }
};

/* the floating card used for the set-back stage tooltip.
   WCAG 1.4.13: it can be hovered (no gap between it and its stage), it stays
   while hovered or focused, and Esc dismisses it. */
const pop = document.getElementById('pop');
let popFor = null, popHide = 0;
function showPop(anchor, html) {
  clearTimeout(popHide);
  pop.innerHTML = html;
  pop.hidden = false;
  popFor = anchor;
  const a = anchor.getBoundingClientRect(), p = pop.getBoundingClientRect();
  const m = 6, vw = innerWidth, vh = innerHeight;
  let x = a.left + a.width / 2 - p.width / 2, y = a.top - p.height - m;
  const below = y < 8;
  if (below) y = a.bottom + m;
  pop.classList.toggle('is-below', below);
  x = Math.max(8, Math.min(x, vw - p.width - 8));
  y = Math.max(8, Math.min(y, vh - p.height - 8));
  pop.style.left = Math.round(x + scrollX) + 'px';
  pop.style.top  = Math.round(y + scrollY) + 'px';
  anchor.setAttribute('aria-describedby', 'pop');
}
function hidePop(now) {
  clearTimeout(popHide);
  const go = () => { pop.hidden = true; if (popFor) popFor.removeAttribute('aria-describedby'); popFor = null; };
  now ? go() : (popHide = setTimeout(go, 300));
}
pop.addEventListener('mouseenter', () => clearTimeout(popHide));
pop.addEventListener('mouseleave', () => hidePop());
addEventListener('keydown', e => { if (e.key === 'Escape' && !pop.hidden) hidePop(true); });
addEventListener('scroll', () => { if (!pop.hidden) hidePop(true); }, { passive: true });
const finePointer = matchMedia('(hover:hover) and (pointer:fine)');

function nodeTip(n) {
  if (!n.classList.contains('is-out') || isPhone()) return;
  showPop(n, '<p class="pop__h">Tier 2 &amp; 3 stage</p>' +
             '<p class="pop__p">Select it to switch to the Tier 2 &amp; 3 view.</p>');
}
ring.addEventListener('mouseover', e => { const n = e.target.closest('.node'); if (n && finePointer.matches) nodeTip(n); });
ring.addEventListener('mouseout',  e => { const n = e.target.closest('.node'); if (n && !n.contains(e.relatedTarget) && !pop.contains(e.relatedTarget)) hidePop(); });
ring.addEventListener('focusin',   e => { const n = e.target.closest('.node'); if (n) nodeTip(n); });
ring.addEventListener('focusout',  () => hidePop(true));

/* ---------- screenshot viewer ----------
   v2: one viewer for the whole flow. Previous / Next (buttons, arrow keys or
   a swipe) run on across stage boundaries in loop order - in the All students
   view they skip the set-back Tier 2 & 3 stages, as the stage pager does - and
   the panel behind follows along, so closing returns focus to the step just
   seen. The strip under the picture shows every step of the current stage. */
const shotDlg  = document.getElementById('shot');
const shotFig  = document.getElementById('shotFig');
const shotPrev = document.getElementById('shotPrev');
const shotNext = document.getElementById('shotNext');
const shotStrip = document.getElementById('shotStrip');
let shotG = 1, shotReturn = null, stripFor = null, shotSeq = 0;

const visible = s => !(tier === 1 && s.tier === 23);
function stepNeighbour(g, d) {
  const here = stepAt(g);
  for (let h = g + d; h >= 1 && h <= TOTAL; h += d) {
    const at = stepAt(h);
    if (at && (visible(at.s) || at.s === here.s)) return h;
  }
  return null;
}
function setNav(btn, g, label) {
  /* aria-disabled, not disabled: a focused button that runs out of steps keeps
     focus instead of dropping it to the page */
  btn.setAttribute('aria-disabled', String(!g));
  btn.dataset.g = g || '';
  btn.setAttribute('aria-label', label);
}
async function openShot(g, from, dir) {
  const at = stepAt(g);
  if (!at) return;
  hidePop(true);
  const { s, st, i } = at, seq = ++shotSeq;
  shotG = g;
  if (from) shotReturn = from;
  /* crossing into another stage: the panel behind follows quietly */
  if (s.key !== sel) select(s.key, false, null, true);
  const info = await probeShot(g);
  if (seq !== shotSeq) return;          /* a newer step was asked for meanwhile */
  document.getElementById('shotMeta').textContent = 'Stage ' + s.n + ' · ' + s.name;
  document.getElementById('shotTitle').textContent = st.t;
  document.getElementById('shotSub').textContent = st.r + ' · ' + st.a;
  shotFig.innerHTML = info.ok
    ? '<img src="' + shotSrc(g) + '" width="' + info.w + '" height="' + info.h + '" alt="Screenshot: ' + esc(st.t) + '">'
    : '<div class="shot__ph" role="img" aria-label="Placeholder screenshot for ' + esc(st.t) + '">' + PLACEHOLDER + '</div>';
  /* one counter, within the stage; read out with the step's title */
  document.getElementById('shotCount').textContent = 'Step ' + (i + 1) + ' of ' + s.steps.length;
  document.getElementById('shotLive').textContent = 'Step ' + (i + 1) + ' of ' + s.steps.length + ': ' + st.t;
  const p = stepNeighbour(g, -1), n = stepNeighbour(g, 1);
  const ps = p && stepAt(p).s, ns = n && stepAt(n).s;
  setNav(shotPrev, p, ps && ps !== s ? 'Previous step, in ' + ps.name : 'Previous step');
  setNav(shotNext, n, ns && ns !== s ? 'Next step, in ' + ns.name : 'Next step');
  if (stripFor !== s.key) {
    /* the strip is rebuilt for the new stage: keep keyboard focus in it */
    const hadFocus = shotStrip.contains(document.activeElement);
    stripFor = s.key;
    shotStrip.setAttribute('aria-label', 'Steps in ' + s.name);
    shotStrip.innerHTML = s.steps.map((x, k) => {
      const h = START[s.key] + k;
      return '<li><button type="button" data-g="' + h + '" aria-label="Step ' + (k + 1) + ': ' + esc(x.t) + '">' +
        (USE_REAL_SHOTS ? '<img src="' + thumbSrc(h) + '" alt="" width="240" height="143" loading="lazy" decoding="async">' : '') +
        '<i class="fa-regular fa-image" aria-hidden="true"></i></button></li>';
    }).join('');
    if (hadFocus) { const b = shotStrip.querySelector('button[data-g="' + g + '"]'); if (b) b.focus({ preventScroll: true }); }
  }
  shotStrip.querySelectorAll('button').forEach(b => {
    const on = +b.dataset.g === g;
    if (on) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
    if (on && shotDlg.open) b.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: scrollMode() });
  });
  shotFig.style.setProperty('--dir', dir || 0);
  shotFig.classList.remove('is-swap');
  if (dir && !keyRepeat) { void shotFig.offsetWidth; shotFig.classList.add('is-swap'); }
  if (!shotDlg.open) shotDlg.showModal();
}
const go = btn => { if (btn.getAttribute('aria-disabled') !== 'true') openShot(+btn.dataset.g, null, btn === shotNext ? 1 : -1); };
detail.addEventListener('click', e => { const b = e.target.closest('.step__btn'); if (b) openShot(+b.dataset.g, b); });
shotPrev.addEventListener('click', () => go(shotPrev));
shotNext.addEventListener('click', () => go(shotNext));
shotStrip.addEventListener('click', e => {
  const b = e.target.closest('button[data-g]');
  if (b) openShot(+b.dataset.g, null, Math.sign(+b.dataset.g - shotG));
});
shotStrip.addEventListener('error', e => { if (e.target.tagName === 'IMG') e.target.remove(); }, true);
document.getElementById('shotClose').addEventListener('click', () => shotDlg.close());
shotDlg.addEventListener('click', e => { if (e.target === shotDlg) shotDlg.close(); });
let keyRepeat = false;
shotDlg.addEventListener('keydown', e => {
  keyRepeat = e.repeat;
  if (e.key === 'ArrowRight') { e.preventDefault(); go(shotNext); }
  if (e.key === 'ArrowLeft')  { e.preventDefault(); go(shotPrev); }
});
shotDlg.addEventListener('keyup', () => { keyRepeat = false; });
/* swipe left / right on the picture */
let swipeX = null;
shotFig.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') swipeX = e.clientX; });
shotFig.addEventListener('pointerup', e => {
  if (swipeX === null) return;
  const dx = e.clientX - swipeX; swipeX = null;
  if (Math.abs(dx) > 48) go(dx < 0 ? shotNext : shotPrev);
});
shotFig.addEventListener('pointercancel', () => { swipeX = null; });
shotDlg.addEventListener('close', () => {
  /* return focus to the step just seen (the panel followed along), or to the
     step that opened the viewer */
  const b = detail.querySelector('.step__btn[data-g="' + shotG + '"]') || shotReturn;
  if (b && document.contains(b)) {
    b.focus({ preventScroll: true });
    b.scrollIntoView({ block: 'nearest', behavior: scrollMode() });
  }
});

/* ---------- sub-title image viewer ----------
   Each sub-title (sheet column D) opens its picture. Until the pictures are
   supplied every one shows the placeholder; give an item img:'path.jpg' in
   CONTENT to use a real one. */
const pDlg = document.getElementById('pshot'), pFig = document.getElementById('pshotFig');
let pItems = [], pK = 0, pReturn = null;
const itemsOf = s => (s.groups || []).flatMap(g => g.items.map(it => ({ it, theme: g.theme })));
function openProc(k, from) {
  const s = byKey(sel); if (!s) return;
  pItems = itemsOf(s); if (!pItems[k]) return;
  pK = k; if (from) pReturn = from;
  const { it, theme } = pItems[k];
  document.getElementById('pshotMeta').textContent = 'Stage ' + s.n + ' · ' + theme;
  document.getElementById('pshotTitle').textContent = it.t;
  pFig.innerHTML = it.img
    ? '<img src="' + esc(it.img) + '" alt="' + esc(it.t) + '">'
    : '<div class="shot__ph" role="img" aria-label="Placeholder image for ' + esc(it.t) + '">' + PLACEHOLDER + '</div>';
  if (!pDlg.open) pDlg.showModal();
}
detail.addEventListener('click', e => { const b = e.target.closest('.proc__btn'); if (b) openProc(+b.dataset.k, b); });
document.getElementById('pshotClose').addEventListener('click', () => pDlg.close());
pDlg.addEventListener('click', e => { if (e.target === pDlg) pDlg.close(); });
pDlg.addEventListener('close', () => {
  const b = detail.querySelector('.proc__btn[data-k="' + pK + '"]') || pReturn;
  if (b && document.contains(b)) b.focus({ preventScroll: true });
});

setTier(1, true);
drawRing();
renderDetail();
if (document.fonts) document.fonts.ready.then(() => { layoutArcs(); sizePanel(); scrollState(); });
/* the circles size themselves from the ring, so the arcs follow any change
   of ring size (resize, zoom, text spacing) */
if ('ResizeObserver' in window) new ResizeObserver(() => { layoutArcs(); sizePanel(); scrollState(); }).observe(ring);
let rz;
addEventListener('resize', () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(() => {
  /* leaving the phone layout with nothing open: open stage 01 so the panel
     beside the ring has content; and keep row semantics in step */
  if (!sel) renderDetail(false);
  drawRing(); layoutArcs(); placeDetail(); sizePanel(); scrollState(); centreShift();
}); });

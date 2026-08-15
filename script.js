(()=>{
'use strict';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const frames=$$('.topic-frame'),items=$$('.lesson-item'),dots=$('#lessonDots'),chapterGroups=$$('.chapter-group'),chapterToggles=$$('.chapter-toggle');
const titles=['What is Excel?','Why Learn Excel','Advantages & Disadvantages','Excel Fundamentals / Basic Terminology','Understanding the Excel Worksheet','Workbook vs Worksheet','Data Types','Excel File Formats'];
const subtitles=['About Microsoft Excel','Career value & real-world use','Power & limitations','Basic terminology','Rows, columns, cells & grid','File vs individual sheet','How Excel reads values','XLSX, XLSM, CSV & more'];
let current=0;
const KEY='dwmaari_excel_ch1_progress_v4';
let state={completed:[],theme:'light',lang:false};
try{state={...state,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch(e){}
function save(){localStorage.setItem(KEY,JSON.stringify(state))}
function toast(t){const x=$('#toast');if(!x)return;x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),1500)}

const tamilMix=[
 {title:'What is Excel? — சிம்பிளா சொன்னா',body:'Microsoft Excel ஒரு spreadsheet application. Simple-ah சொன்னா, data-வை rows, columns, cells-ல neatly store பண்ணி, அதைப் calculate, organize, analyze, visualize பண்ண உதவும் ஒரு powerful tool. Sales report, attendance, budget, expense tracking, employee data மாதிரி real-world work-களில் Excel ரொம்ப useful.',points:['Cell-ல data enter பண்ணலாம்; formula use பண்ணி calculation automate பண்ணலாம்.','Charts, tables, reports மூலம் raw data-வை easy-ah understand பண்ணலாம்.','Beginner-க்கு simple-ah start பண்ணி, advanced analysis வரைக்கும் gradually learn பண்ண முடியும்.']},
 {title:'Why Learn Excel? — Practical-ah புரிஞ்சுக்கலாம்',body:'Excel கற்றுக்கறது ஒரு software மட்டும் learn பண்ணுறது இல்ல; data-வோட work பண்ணுற ஒரு core skill develop பண்ணுறது. Office-ல reporting, tracking, analysis, planning, budgeting போன்ற tasks-க்கு Excel frequently use ஆகுது. அதனால் basic Excel knowledge இருந்தாலே daily work faster மற்றும் more organized ஆகும்.',points:['Repeated manual calculation-ஐ formulas மூலம் reduce பண்ணலாம்.','Reports மற்றும் dashboards மூலம் information-ஐ clear-ah present பண்ணலாம்.','Data analysis, reporting, finance, HR, sales, operations போன்ற பல roles-க்கு useful skill.']},
 {title:'Advantages & Disadvantages — இரண்டையும் தெரிஞ்சுக்கணும்',body:'Excel powerful tool தான்; ஆனால் எல்லா problem-க்கும் Excel தான் best solution என்று நினைக்கக்கூடாது. Small-to-medium data, reporting, quick analysis, planning போன்ற work-களில் Excel super flexible. ஆனால் data ரொம்ப பெரியதாகும்போது, multiple users ஒரே நேரத்தில் work செய்யும்போது அல்லது strong governance/security தேவைப்படும்போது limitations வரும்.',points:['Advantages: flexible, familiar, formulas, charts, quick analysis, easy reporting.','Disadvantages: manual errors, version confusion, large-data performance limits, collaboration/governance challenges.','Right tool for the right job என்ற mindset தான் முக்கியம்.']},
 {title:'Excel Fundamentals — Basic Terminology-யை முதலில் clear பண்ணலாம்',body:'Excel-ஐ comfortable-ah use பண்ண basic terminology clear இருக்கணும். Workbook என்பது complete Excel file; அதுக்குள் worksheets இருக்கும். Worksheet என்பது rows மற்றும் columns கொண்ட working area. Cell என்பது row + column intersect ஆகும் இடம். Cell Address, Range, Formula, Function, Ribbon, Formula Bar, Name Box போன்ற terms daily Excel work-ல தொடர்ந்து வரும்.',points:['A1 என்றால் Column A + Row 1 — இதுதான் cell address.','A1:C5 என்றால் ஒரு range of cells.','Formula usually = sign-ல start ஆகும்; function என்பது ready-made calculation logic.']},
 {title:'Understanding the Excel Worksheet — Screen-ஐ familiar ஆக்கிக்கலாம்',body:'Worksheet-ஐ first time பார்க்கும்போது நிறைய boxes மாதிரி தெரியும். Actually அது ஒரு organized grid. Columns letters-ஆகவும், rows numbers-ஆகவும் இருக்கும். அவை intersect ஆகும் இடம் தான் cell. Active cell எது என்று Excel highlight பண்ணும். Formula Bar-ல் selected cell-ன் value அல்லது formula பார்க்கலாம்; sheet tabs மூலம் different worksheets-க்கு move பண்ணலாம்.',points:['Column → A, B, C…; Row → 1, 2, 3…','A1, B5, C10 போன்ற address-கள் cell-ஐ identify பண்ணும்.','Scroll bars, zoom, sheet tabs போன்ற controls worksheet navigation-க்கு help பண்ணும்.']},
 {title:'Workbook vs Worksheet — Notebook example நினைச்சுக்கோங்க',body:'Easy analogy: Workbook = ஒரு complete notebook/book; Worksheet = அந்த book-ல இருக்கும் individual page. Excel file open பண்ணினா அது workbook. அந்த workbook-க்குள் Sheet1, Sheet2, Sheet3 போன்ற worksheets இருக்கலாம். So workbook is the container; worksheet is the working sheet inside it.',points:['One workbook can contain multiple worksheets.','Each worksheet can hold its own data, formulas, tables and charts.','Multiple related sheets-ஐ ஒரே workbook-ல் வைத்தால் project organized-ah இருக்கும்.']},
 {title:'Data Types — Excel value-ஐ எப்படி புரிஞ்சுக்குது?',body:'Excel-ல் cell-க்கு value type பண்ணும்போது அது அந்த value-ஐ ஒரு data type-ஆ interpret பண்ணும். Text, Number, Date, Time, TRUE/FALSE, Error, Blank மற்றும் Formula போன்ற types common. Correct data type இருந்தா sorting, filtering, calculations மற்றும் analysis reliable-ah work ஆகும்.',points:['100 என்பது number; "Excel" என்பது text.','15/08/2026 ஒரு date; 10:30 AM ஒரு time value ஆக இருக்கலாம்.','Formula result change ஆகலாம்; error values-ஐ identify பண்ணி fix பண்ண வேண்டும்.']},
 {title:'Excel File Formats — File extension பார்த்தாலே purpose புரியும்',body:'Excel files எல்லாமே ஒரே format-ல இருக்காது. .XLSX standard modern workbook; .XLSM macros preserve பண்ணும்; .XLSB binary workbook; .XLS legacy format. .CSV மற்றும் .TXT simple data exchange-க்கு useful. PDF mainly sharing/printing-க்கு; XLTX reusable template-க்கு. So file format choose பண்ணும்போது “இந்த file என்ன purpose-க்கு?” என்று first கேட்கணும்.',points:['Normal workbook → .XLSX','VBA macros → .XLSM','Flat data exchange → .CSV','Fixed report sharing/printing → .PDF']}
];

function injectResponsiveSafety(doc){
 if(!doc||doc.getElementById('__dwmaari_responsive_safety'))return;
 const style=doc.createElement('style');style.id='__dwmaari_responsive_safety';
 style.textContent=`
 html,body{max-width:100%!important;min-width:0!important;overflow-x:hidden!important}
 body{overflow-wrap:break-word!important}
 img,svg,canvas,video{max-width:100%!important;height:auto}
 table{max-width:100%!important}
 h1,h2,h3,h4,h5,h6,p,small,strong,span,button,a{overflow-wrap:anywhere}
 /* The lesson is inside a dynamically-sized iframe. Never let the inner hero
    depend on iframe viewport height (100vh), otherwise the iframe can grow
    recursively and push the lesson content far below the visible area. */
 .hero{min-height:auto!important;height:auto!important;align-items:center!important}
 @media (min-width:761px) and (max-width:1200px){
   .hero{grid-template-columns:1fr!important;padding-top:52px!important}
   .hero-visual{height:500px!important;min-height:0!important}
   .concept-grid,.use-grid{grid-template-columns:1fr 1fr!important}
   .why-card,.anatomy-layout,.parts-layout,.term-layout,.board-body,.journey-card{grid-template-columns:1fr!important}
   .section-shell,.shell{width:min(100% - 42px,1180px)!important}
 }
 @media (max-width:760px){
   .section-shell,.shell{width:min(100% - 24px,1180px)!important}
   .hero{grid-template-columns:1fr!important;min-height:auto!important;height:auto!important;padding:34px 0 38px!important;gap:24px!important}
   .hero h1{font-size:clamp(42px,12vw,62px)!important;line-height:.92!important;letter-spacing:-.045em!important}
   .hero-lead{font-size:14px!important;line-height:1.72!important}
   .hero-pills{gap:6px!important;margin:18px 0!important}
   .hero-pills span{font-size:9px!important;padding:7px 9px!important}
   .hero-actions{flex-wrap:wrap!important;gap:8px!important}
   .primary-btn,.ghost-btn{padding:11px 13px!important;font-size:10px!important}
   .hero-visual{height:auto!important;min-height:280px!important;max-height:none!important;margin:4px 0 0!important;transform:none!important;overflow:visible!important}
   .excel-stage{width:min(360px,96vw)!important;border-radius:30px!important;padding-top:34px!important}
   .stage-title{font-size:32px!important}.stage-sub{font-size:10px!important}
   .mini-sheet,.floating-card,.float-card{transform:scale(.82)!important}
   .concept-grid,.use-grid,.term-grid,.parts-grid,.options,.practice-options,.format-grid,.compare-grid{grid-template-columns:1fr!important}
   .why-card,.anatomy-layout,.parts-layout,.term-layout,.board-body,.journey-card,.definition,.map-detail,.limit-detail,.analysis-result,.formula-explain,.focus-panel{grid-template-columns:1fr!important}
   .address-demo{grid-template-columns:1fr!important}
   .workflow{overflow-x:auto!important;padding-bottom:8px}
   .sheet-window,.grid-lab,.interactive-sheet,.practice-grid-wrap{overflow-x:auto!important;max-width:100%!important}
   .sheet-content,.interactive-sheet{max-width:100%!important}
   .demo-insight{border-left:0!important;border-top:1px solid #e2e9ee!important}
   .formula-box{flex-wrap:wrap!important;font-size:22px!important;padding:18px!important}
   .formula-box button{font-size:18px!important}
   .formula-table{font-size:8px!important;overflow-x:auto}
   .date-demo{grid-template-columns:1fr!important;gap:10px!important}.vs{margin:0 auto!important}
   .filename{font-size:24px!important;max-width:100%!important;overflow:auto}.filename button{font-size:21px!important;white-space:nowrap}
   .filename-detail{grid-template-columns:1fr!important}.part-example{text-align:left!important}
   .type-layout,.adv-layout,.limit-layout,.decision{grid-template-columns:1fr!important}
   .type-panel,.detail-panel,.term-panel,.format-panel,.part-detail{position:relative!important;top:auto!important;min-height:auto!important}
   .type-grid,.card-grid,.term-grid,.format-grid{grid-template-columns:1fr 1fr!important}
   .limit-list{grid-template-columns:1fr!important}
   .compare-card{min-width:0!important}.versus{margin:8px auto!important}
   .practice-options{grid-template-columns:1fr!important}
   .takeaway,.summary{grid-template-columns:1fr!important}
   .takeaway-art{height:220px!important}.takeaway h2,.summary h2{font-size:32px!important}
   .fit-columns{grid-template-columns:1fr!important}
   .mini-chain,.flow,.hero-tags{overflow-x:auto!important;flex-wrap:nowrap!important}
 }
 `;
 doc.head.appendChild(style);
}
function addTamilPanel(doc,i){
 if(!doc||!doc.body)return;
 let panel=doc.getElementById('__dwmaari_tamil_mix');
 if(!state.lang){if(panel)panel.remove();return}
 if(!panel){panel=doc.createElement('section');panel.id='__dwmaari_tamil_mix';doc.body.prepend(panel)}
 const d=tamilMix[i];
 panel.innerHTML=`<div class="dw-tm-badge">தமிழ் MIX · EASY EXPLANATION</div><h2>${d.title}</h2><p>${d.body}</p><div class="dw-tm-points">${d.points.map(x=>`<div><b>✓</b><span>${x}</span></div>`).join('')}</div><small class="dw-tm-note">English lesson content கீழே unchanged-ஆ continue ஆகும். இந்த Tamil Mix section additional explanation மட்டும்.</small>`;
 if(!doc.getElementById('__dwmaari_tamil_mix_style')){
  const st=doc.createElement('style');st.id='__dwmaari_tamil_mix_style';st.textContent=`
   #__dwmaari_tamil_mix{width:min(1180px,calc(100% - 40px));margin:24px auto 8px;padding:25px 28px;border-radius:24px;background:linear-gradient(135deg,#f1fbf5 0%,#f5f8ff 100%);border:1px solid #cfe7d8;box-shadow:0 16px 36px rgba(24,72,48,.08);font-family:Inter,DM Sans,sans-serif;color:#16304a;position:relative;z-index:2}
   #__dwmaari_tamil_mix .dw-tm-badge{display:inline-flex;padding:7px 10px;border-radius:999px;background:#dff5e7;color:#087b49;font-size:9px;font-weight:900;letter-spacing:.7px}
   #__dwmaari_tamil_mix h2{font-size:clamp(23px,3vw,34px);line-height:1.15;margin:12px 0 8px;color:#14304a}
   #__dwmaari_tamil_mix p{font-size:14px;line-height:1.85;color:#53677d;margin:0;max-width:980px}
   #__dwmaari_tamil_mix .dw-tm-points{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-top:17px}
   #__dwmaari_tamil_mix .dw-tm-points div{display:flex;gap:9px;align-items:flex-start;background:#ffffffc7;border:1px solid #dce9e1;border-radius:13px;padding:11px;font-size:10px;line-height:1.55;color:#3c5369}
   #__dwmaari_tamil_mix .dw-tm-points b{width:20px;height:20px;flex:0 0 20px;border-radius:7px;background:#e1f6e9;color:#087b49;display:grid;place-items:center}
   #__dwmaari_tamil_mix .dw-tm-note{display:block;margin-top:12px;color:#8493a4;font-size:8px}
   @media(max-width:760px){# __dwmaari_tamil_mix{width:calc(100% - 24px)}}
   @media(max-width:760px){#__dwmaari_tamil_mix{width:calc(100% - 24px);padding:19px 17px;border-radius:18px}#__dwmaari_tamil_mix p{font-size:12px;line-height:1.75}#__dwmaari_tamil_mix .dw-tm-points{grid-template-columns:1fr}#__dwmaari_tamil_mix .dw-tm-points div{font-size:10px}}
   .dark #__dwmaari_tamil_mix{background:linear-gradient(135deg,#10261b,#132338);border-color:#294b38;color:#e8f5ed}.dark #__dwmaari_tamil_mix h2{color:#f1f8f4}.dark #__dwmaari_tamil_mix p,.dark #__dwmaari_tamil_mix .dw-tm-points div{color:#b9c8d6}.dark #__dwmaari_tamil_mix .dw-tm-points div{background:#142737;border-color:#29404f}
  `;doc.head.appendChild(st);
 }
}
function themeButton(doc){return doc?.querySelector('#themeBtn,#theme,[id*=theme]')}
function syncInnerTheme(){frames.forEach(fr=>{try{const doc=fr.querySelector('iframe')?.contentDocument,b=themeButton(doc);if(!b)return;const dark=doc.body?.classList.contains('dark');if((state.theme==='dark')!==dark)b.click()}catch(e){}})}
let resizeTimers=new WeakMap();
function resizeFrame(frame){
 const f=frame?.querySelector('iframe');
 if(!f)return;
 try{
   const doc=f.contentDocument;
   if(!doc)return;
   injectResponsiveSafety(doc);
   addTamilPanel(doc,Number(frame.dataset.index||0));
   const body=doc.body, root=doc.documentElement;
   const h=Math.max(body?.scrollHeight||0,body?.offsetHeight||0,root?.scrollHeight||0,root?.offsetHeight||0,420);
   const next=Math.ceil(h+8);
   if(Math.abs((parseInt(f.style.height,10)||0)-next)>2) f.style.height=next+'px';
   f.style.width='100%';
   f.style.maxWidth='100%';
   f.setAttribute('scrolling','no');
 }catch(e){}
}
function scheduleResize(frame,delay=0){
 clearTimeout(resizeTimers.get(frame));
 resizeTimers.set(frame,setTimeout(()=>resizeFrame(frame),delay));
}
function observeFrame(frame){
 const f=frame?.querySelector('iframe');
 if(!f)return;
 const onReady=()=>{
   try{
     const doc=f.contentDocument;
     if(!doc)return;
     injectResponsiveSafety(doc);
     addTamilPanel(doc,Number(frame.dataset.index||0));
     if(doc.fonts?.ready) doc.fonts.ready.then(()=>scheduleResize(frame)).catch(()=>{});
     try{ if(doc.defaultView && !frame._ro){ frame._ro = new doc.defaultView.ResizeObserver(()=>scheduleResize(frame,40)); frame._ro.observe(doc.body); } }catch(e){}
     const target=doc.body||doc.documentElement;
     const mo=new MutationObserver(()=>scheduleResize(frame,30));
     if(target) mo.observe(target,{subtree:true,childList:true,characterData:true,attributes:true});
     frame._mo=mo;
     syncInnerTheme();
     scheduleResize(frame);
     setTimeout(()=>scheduleResize(frame),180);
     setTimeout(()=>scheduleResize(frame),600);
   }catch(e){setTimeout(()=>scheduleResize(frame,200),200)}
 };
 f.addEventListener('load',onReady,{once:true});
 if(f.contentDocument?.readyState==='complete') onReady();
}

function updateUI(){items.forEach((b,i)=>{b.classList.toggle('active',i===current);b.classList.toggle('completed',state.completed?.includes(i))});$('#currentTitle').textContent=titles[current];$('#currentSubtitle').textContent=subtitles[current];const pct=((current+1)/frames.length*100).toFixed(1);$('#progressText').textContent=`${current+1} of ${frames.length}`;$('#progressPct').textContent=pct+'%';$('#progressBar').style.width=pct+'%';$('#prevBtn').disabled=current===0;$('#nextBtn').textContent=current===frames.length-1?'Finish ✓':'Next →';$$('.lesson-dots button').forEach((b,i)=>b.classList.toggle('active',i===current));frames.forEach((f,i)=>f.classList.toggle('active',i===current));if(innerWidth<=760)closeDrawer();requestAnimationFrame(()=>scheduleResize(frames[current]))}
function buildDots(){dots.innerHTML='';frames.forEach((_,i)=>{const b=document.createElement('button');b.title=`Go to 1.${i+1}`;b.setAttribute('aria-label',`Go to lesson 1.${i+1}`);b.onclick=()=>go(i);dots.appendChild(b)})}
function go(i){current=Math.max(0,Math.min(frames.length-1,i));openChapterForLesson(current);updateUI();window.scrollTo({top:0,behavior:'smooth'});setTimeout(()=>scheduleResize(frames[current]),120)}
function openChapterForLesson(i){const frame=frames[i];const group=document.querySelector('.chapter-group[data-chapter="1"]');if(group){group.classList.add('open');const toggle=group.querySelector('.chapter-toggle');if(toggle)toggle.setAttribute('aria-expanded','true')}}
function markComplete(){if(!state.completed.includes(current))state.completed.push(current);save();updateUI()}
frames.forEach((frame,i)=>{frame.dataset.index=i;observeFrame(frame)});
chapterToggles.forEach(toggle=>toggle.addEventListener('click',()=>{const group=toggle.closest('.chapter-group');if(!group)return;const willOpen=!group.classList.contains('open');chapterGroups.forEach(g=>{g.classList.remove('open');const t=g.querySelector('.chapter-toggle');if(t)t.setAttribute('aria-expanded','false')});if(willOpen){group.classList.add('open');toggle.setAttribute('aria-expanded','true')}}));
items.forEach((b,i)=>b.onclick=()=>go(i));$('#prevBtn').onclick=()=>go(current-1);$('#nextBtn').onclick=()=>{if(current<frames.length-1){markComplete();go(current+1)}else{markComplete();toast('Chapter 01 completed ✓')}};
function openDrawer(){$('#lessonDrawer').classList.add('open');$('#overlay').classList.add('show')}function closeDrawer(){$('#lessonDrawer').classList.remove('open');$('#overlay').classList.remove('show')}
$('#openLessons').onclick=openDrawer;$('#mobileMenu').onclick=openDrawer;$('#closeDrawer').onclick=closeDrawer;$('#overlay').onclick=closeDrawer;
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer();if(e.key==='ArrowRight'&&!e.target.matches('input,textarea,button,a'))go(current+1);if(e.key==='ArrowLeft'&&!e.target.matches('input,textarea,button,a'))go(current-1)});
$('#themeBtn').onclick=()=>{document.body.classList.toggle('dark');state.theme=document.body.classList.contains('dark')?'dark':'light';save();$('#themeBtn').textContent=state.theme==='dark'?'☀':'☾';syncInnerTheme();setTimeout(()=>scheduleResize(frames[current]),120)};
$('#langBtn').onclick=()=>{state.lang=!state.lang;save();$('#langBtn').textContent=state.lang?'English':'தமிழ் Mix';frames.forEach(f=>{try{addTamilPanel(f.querySelector('iframe').contentDocument,Number(f.dataset.index||0));resizeFrame(f)}catch(e){}});toast(state.lang?'Tamil Mix enabled':'English enabled')};
if(state.theme==='dark'){document.body.classList.add('dark');$('#themeBtn').textContent='☀'}
$('#langBtn').textContent=state.lang?'English':'தமிழ் Mix';buildDots();updateUI();setTimeout(()=>{frames.forEach(f=>scheduleResize(f));syncInnerTheme()},300);window.addEventListener('resize',()=>scheduleResize(frames[current]));window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;$('#progress').style.width=(max?scrollY/max*100:0)+'%'},{passive:true});
})();

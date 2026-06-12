// ═══════════════════════════════════════════════════════════════════════════
// JAMBOJET FLIGHT OPS — UNIFIED TOOLS  |  script.js
// Modules: RPL Generator + Tracking Report
// ═══════════════════════════════════════════════════════════════════════════

const LOGO_SRC = "data:image/jpeg;base64,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";

// ── MODULE SWITCHER ──────────────────────────────────────────────────────────
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const mod = btn.getAttribute('data-module');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('rpl-sidebar').style.display     = mod === 'rpl'      ? 'flex' : 'none';
    document.getElementById('tracking-sidebar').style.display= mod === 'tracking' ? 'flex' : 'none';
    document.getElementById('rpl-main').style.display        = mod === 'rpl'      ? 'flex' : 'none';
    document.getElementById('tracking-main').style.display   = mod === 'tracking' ? 'flex' : 'none';
    document.getElementById('logoText').textContent          = mod === 'rpl' ? 'RPL GENERATOR' : 'TRACKING REPORT';
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// ██████  ██████  ██      GENERATOR
// ═══════════════════════════════════════════════════════════════════════════
let flights = [], metaName = '', metaSig = '', extraCols = [];
let sortCol = null, sortDir = 'asc';
let filterText = '', filterColKey = '';
let ctxRow = -1, ctxTd = null, clipRow = null;
let dragSrc = -1;
let spacers = new Set();

const BASE_FIELDS = ['callSign','reg','type','dep','dest','altn','eobt','qbd','rvsm','tcas','captain'];
const BASE_LABELS = ['CALL SIGN','REG','TYPE','DEP','DEST','ALTN','EOBT','QBD','RVSM','TCAS','CAPTAIN'];

document.getElementById('rplDate').value = new Date().toISOString().split('T')[0];

// ── UTILS ────────────────────────────────────────────────────────────────────
function fmtDate(str) {
  if (!str) return '';
  const d = new Date(str + 'T00:00:00');
  const DAYS = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
  const MONS = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
  const n = d.getDate();
  const sfx = (n>=11&&n<=13)?'TH':({1:'ST',2:'ND',3:'RD'}[n%10]||'TH');
  return `${DAYS[d.getDay()]}, ${n}${sfx} ${MONS[d.getMonth()]} ${d.getFullYear()}`;
}
function normalizeReg(r) { return (r||'').toUpperCase().trim(); }
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── RPL FILE HANDLING ────────────────────────────────────────────────────────
const dz = document.getElementById('dropZone');
dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('drag-over'); });
dz.addEventListener('dragleave', () => dz.classList.remove('drag-over'));
dz.addEventListener('drop', e => { e.preventDefault(); dz.classList.remove('drag-over'); if (e.dataTransfer.files[0]) handleRplFile(e.dataTransfer.files[0]); });
document.getElementById('fileInput').addEventListener('change', e => { if (e.target.files[0]) handleRplFile(e.target.files[0]); });
document.getElementById('btnClear').addEventListener('click', clearAll);

function handleRplFile(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  if (ext === 'csv') {
    Papa.parse(file, {
      header:false, skipEmptyLines:'greedy', dynamicTyping:true, encoding:'UTF-8',
      complete: r => parseRows(r.data, file.name),
      error: err => showToast('CSV error: '+err.message)
    });
  } else if (['xlsx','xls'].includes(ext)) {
    const reader = new FileReader();
    reader.onload = e => {
      const wb = XLSX.read(e.target.result, {type:'array'});
      const sn = wb.SheetNames.includes('RPP') ? 'RPP' : wb.SheetNames[0];
      parseRows(XLSX.utils.sheet_to_json(wb.Sheets[sn],{header:1,defval:''}), file.name);
    };
    reader.readAsArrayBuffer(file);
  } else showToast('Unsupported file. Use XLSX, XLS, or CSV.');
}

function parseRows(rows, filename) {
  flights = []; metaName = ''; metaSig = ''; extraCols = []; spacers = new Set();
  const SM = {
    airline:['AIRLINE','AL'], callSign:['FLIGHT NO','CALL SIGN','FLT','CALLSIGN','FLT NO','FLIGHT','CALL'],
    reg:['TAIL','REG','REGISTRATION','A/C','AC'], type:['TYPE','AC TYPE','AIRCRAFT','EQP'],
    dep:['FROM','DEP','DEPARTURE','ORIGIN','ORG'], dest:['TO','DEST','DESTINATION','ARR'],
    altn:['ALTN','ALTERNATE','ALT'], eobt:['STD','EOBT','TIME','DEPARTURE TIME'],
    qbd:['QBD','ENDURANCE','FUEL'], rvsm:['RVSM'], tcas:['TCAS'], captain:['CAPTAIN','PIC','COMMANDER']
  };
  let hri=-1, mapping={};
  for (let i=0; i<Math.min(rows.length,15); i++) {
    const row = rows[i]; if (!Array.isArray(row)) continue;
    const cells = row.map(c=>String(c??'').trim().toUpperCase());
    let hits=0, tm={};
    for (const [key,aliases] of Object.entries(SM)) {
      const idx = cells.findIndex(c=>aliases.includes(c));
      if (idx>=0) { tm[key]=idx; hits++; }
    }
    if (hits>=3) { hri=i; mapping=tm; break; }
  }
  if (hri!==-1) {
    const maxKnownIdx = Math.max(...Object.values(mapping));
    for (let i=hri+1; i<rows.length; i++) {
      const cols = rows[i].map(c=>String(c??'').trim());
      if (cols.length<2||cols.every(c=>!c)||cols.some(c=>c.toUpperCase().includes('REPORT TOTAL'))) continue;
      let cs = cols[mapping.callSign]||'';
      if (mapping.airline!=null) { const al=cols[mapping.airline]||''; if(al&&!cs.toUpperCase().startsWith(al.toUpperCase())) cs=(al+' '+cs).trim(); }
      const fobj = {callSign:cs,reg:cols[mapping.reg]||'',type:cols[mapping.type]||'',dep:cols[mapping.dep]||'',
        dest:cols[mapping.dest]||'',altn:cols[mapping.altn]||'',eobt:cols[mapping.eobt]||'',qbd:cols[mapping.qbd]||'',
        rvsm:cols[mapping.rvsm]||'-',tcas:cols[mapping.tcas]||'',captain:cols[mapping.captain]||'',extras:[]};
      for (let k=0; k<cols.length; k++) {
        if (!Object.values(mapping).includes(k)&&k>maxKnownIdx) fobj.extras.push(cols[k]||'');
      }
      flights.push(fobj);
    }
    const sample = flights.find(f=>f.extras.length>0);
    if (sample) for (let i=0;i<sample.extras.length;i++) extraCols.push({label:`COL ${i+1}`});
  }
  if (!flights.length) { showToast('No flight rows found.'); return; }
  defaultSort();
  if (metaName) document.getElementById('prepName').value=metaName;
  if (metaSig)  document.getElementById('prepSig').value=metaSig;
  dz.style.display='none';
  document.getElementById('fileInfo').style.display='flex';
  document.getElementById('fiName').textContent=filename;
  document.getElementById('fiCount').textContent=`${flights.length} flights loaded`;
  document.getElementById('statsWrap').style.display='block';
  ['btnSort','btnXlsx','btnPdf','btnAddRow','btnAddCol','btnSimpleSort','btnCopyTable'].forEach(id=>document.getElementById(id).disabled=false);
  document.getElementById('livePill').style.display='inline-block';
  document.getElementById('filterBar').style.display='flex';
  updateStats(); renderPreview();
  showToast(`✓ ${flights.length} flights loaded`);
}

function clearAll() {
  flights=[]; extraCols=[]; spacers=new Set(); sortCol=null; sortDir='asc'; filterText=''; filterColKey='';
  dz.style.display='block';
  ['fileInfo','statsWrap','filterBar'].forEach(id=>document.getElementById(id).style.display='none');
  ['btnSort','btnXlsx','btnPdf','btnAddRow','btnAddCol','btnSimpleSort','btnCopyTable'].forEach(id=>document.getElementById(id).disabled=true);
  document.getElementById('livePill').style.display='none';
  document.getElementById('emptyState').style.display='flex';
  document.getElementById('rplPreview').innerHTML='';
  document.getElementById('fileInput').value='';
}

function updateStats() {
  document.getElementById('sFlights').textContent=flights.length;
  document.getElementById('sAircraft').textContent=new Set(flights.map(f=>f.reg)).size;
  document.getElementById('sCaptains').textContent=new Set(flights.map(f=>f.captain)).size;
  document.getElementById('sRoutes').textContent=new Set(flights.map(f=>f.dep+f.dest)).size;
}
function defaultSort() {
  flights.sort((a,b)=>{ const ra=normalizeReg(a.reg),rb=normalizeReg(b.reg); if(ra<rb)return -1; if(ra>rb)return 1; return 0; });
}
function getFiltered() {
  let res = flights.map((f,i)=>({...f,_i:i}));
  if (filterText||filterColKey) {
    const q=filterText.toLowerCase();
    res=res.filter(f=>{ if(filterColKey){ if(filterColKey.startsWith('extra_')){const exi=parseInt(filterColKey.split('_')[1]);return(f.extras&&f.extras[exi]||'').toLowerCase().includes(q);} return(f[filterColKey]||'').toLowerCase().includes(q); } return BASE_FIELDS.some(k=>(f[k]||'').toLowerCase().includes(q))||(f.extras&&f.extras.some(ex=>(ex||'').toLowerCase().includes(q))); });
  }
  if (sortCol!==null) {
    const fields=BASE_FIELDS.concat(extraCols.map((_,i)=>`extra_${i}`));
    const key=fields[sortCol];
    res.sort((a,b)=>{ const gv=o=>key.startsWith('extra_')?(o.extras&&o.extras[parseInt(key.split('_')[1])]||''):(o[key]||''); const va=gv(a).toString().toLowerCase(),vb=gv(b).toString().toLowerCase(); return sortDir==='asc'?va.localeCompare(vb):vb.localeCompare(va); });
  }
  return res;
}

function renderPreview() {
  if (!flights.length) return;
  const ds=document.getElementById('rplDate').value;
  const nameVal=document.getElementById('prepName').value;
  const sigVal=document.getElementById('prepSig').value;
  const title='JAMBOJET REPETITIVE ACTIVATION LIST FOR '+fmtDate(ds);
  document.getElementById('pbDate').textContent=fmtDate(ds);
  document.getElementById('emptyState').style.display='none';
  const filtered=getFiltered();
  const isFiltered=!!(filterText||filterColKey||sortCol!==null);
  const COLS=BASE_LABELS.concat(extraCols.map(c=>c.label));
  const FIELDS=BASE_FIELDS.concat(extraCols.map((_,i)=>`extra_${i}`));
  let tbody='',prev=null;
  for (let i=0;i<filtered.length;i++) {
    const f=filtered[i], oi=f._i, crn=normalizeReg(f.reg);
    if (!isFiltered&&prev!==null&&crn!==prev) tbody+=`<tr class="sep"><td colspan="${COLS.length}"></td></tr>`;
    if (spacers.has(oi)) tbody+=`<tr class="sep-added" data-oi="${oi}" title="Click to remove spacer"><td colspan="${COLS.length}">• • • SPACER • • •</td></tr>`;
    tbody+=`<tr class="dr" draggable="true" data-oi="${oi}">`;
    BASE_FIELDS.forEach(field=>{ tbody+=`<td contenteditable="true" data-oi="${oi}" data-field="${field}">${f[field]||''}</td>`; });
    for (let ex=0;ex<extraCols.length;ex++) { tbody+=`<td contenteditable="true" data-oi="${oi}" data-field="extra_${ex}">${f.extras&&f.extras[ex]||''}</td>`; }
    tbody+=`</tr>`;
    prev=crn;
  }
  const thHtml=COLS.map((h,ci)=>{ const cls=sortCol===ci?(sortDir==='asc'?' sort-asc':' sort-desc'):''; return `<th data-col="${ci}" class="${cls}">${h}<span class="sort-icon"></span></th>`; }).join('');
  document.getElementById('rplPreview').innerHTML=`
    <div class="rpl-doc">
      <div class="rpl-banner"><img src="${LOGO_SRC}" alt="Jambojet" style="height:52px;object-fit:contain;"></div>
      <div class="rpl-title">${title}</div>
      <table class="rpl-table" id="editableTable">
        <thead><tr>${thHtml}</tr></thead>
        <tbody>${tbody}</tbody>
      </table>
      <div class="rpl-footer">NAME &nbsp;&nbsp;: &nbsp;&nbsp;${nameVal}<br>SIGNATURE &nbsp;: &nbsp;&nbsp;${sigVal}</div>
    </div>`;
  attachRplEvents();
}

function attachRplEvents() {
  const tbl=document.getElementById('editableTable'); if(!tbl) return;
  tbl.addEventListener('input',e=>{ const td=e.target; if(!td.hasAttribute('data-oi'))return; const oi=+td.getAttribute('data-oi'),field=td.getAttribute('data-field'),val=td.textContent.trim(); if(field.startsWith('extra_')){const exi=parseInt(field.split('_')[1]);flights[oi].extras=flights[oi].extras||[];flights[oi].extras[exi]=val;}else{flights[oi][field]=val;} updateStats(); });
  tbl.addEventListener('paste',e=>{ e.preventDefault(); const text=(e.clipboardData||window.clipboardData).getData('text'); const rows=text.split(/\r?\n/).map(l=>l.split('\t')); const td=e.target.closest('td[data-oi]'); if(!td)return; const startOi=+td.getAttribute('data-oi'),startField=td.getAttribute('data-field'),sc=BASE_FIELDS.indexOf(startField); rows.forEach((row,rOff)=>{ const ti=startOi+rOff; if(ti>=flights.length)return; row.forEach((val,cOff)=>{ const tc=sc+cOff; if(tc>=BASE_FIELDS.length)return; flights[ti][BASE_FIELDS[tc]]=val.trim(); }); }); renderPreview(); showToast('✓ Data pasted'); });
  tbl.querySelector('thead').addEventListener('click',e=>{ const th=e.target.closest('th[data-col]'); if(!th)return; const ci=+th.getAttribute('data-col'); if(sortCol===ci){sortDir=sortDir==='asc'?'desc':'asc';}else{sortCol=ci;sortDir='asc';} renderPreview(); showToast(`✓ Sorted by ${BASE_LABELS[ci]||'column'}`); });
  tbl.querySelectorAll('tr.sep-added').forEach(tr=>{ tr.addEventListener('click',()=>{ const oi=+tr.getAttribute('data-oi'); spacers.delete(oi); renderPreview(); showToast('✓ Spacer removed'); }); });
  // Drag & drop rows
  tbl.querySelectorAll('tr.dr').forEach(tr=>{ tr.addEventListener('dragstart',e=>{ dragSrc=+tr.getAttribute('data-oi'); e.dataTransfer.effectAllowed='move'; setTimeout(()=>tr.style.opacity='0.4',0); }); tr.addEventListener('dragend',()=>{ tr.style.opacity='1'; tbl.querySelectorAll('tr').forEach(r=>r.classList.remove('drag-over-row')); }); tr.addEventListener('dragover',e=>{ e.preventDefault(); tbl.querySelectorAll('tr').forEach(r=>r.classList.remove('drag-over-row')); tr.classList.add('drag-over-row'); }); tr.addEventListener('drop',e=>{ e.preventDefault(); const ti=+tr.getAttribute('data-oi'); if(dragSrc!==ti){const src=flights.splice(dragSrc,1)[0];const ni=ti>dragSrc?ti-1:ti;flights.splice(ni,0,src);spacers=new Set();renderPreview();showToast('✓ Row moved');} tbl.querySelectorAll('tr').forEach(r=>r.classList.remove('drag-over-row')); }); });
  // Right-click context menu
  tbl.addEventListener('contextmenu',e=>{ const td=e.target.closest('td[data-oi]'); if(!td)return; e.preventDefault(); ctxRow=+td.getAttribute('data-oi'); ctxTd=td; const m=document.getElementById('ctxMenu'); let x=e.clientX,y=e.clientY; if(x+200>window.innerWidth)x=window.innerWidth-200; if(y+280>window.innerHeight)y=window.innerHeight-280; m.style.left=x+'px'; m.style.top=y+'px'; m.classList.add('show'); });
}

// Context menu
document.addEventListener('click',()=>document.getElementById('ctxMenu').classList.remove('show'));
document.addEventListener('keydown',e=>{ if(e.key==='Escape')document.getElementById('ctxMenu').classList.remove('show'); });
document.getElementById('ctxCopy').addEventListener('click',()=>{ if(ctxTd){const v=ctxTd.textContent;navigator.clipboard?.writeText(v).catch(()=>{});showToast('✓ Cell copied: '+v);} });
document.getElementById('ctxCopyRow').addEventListener('click',()=>{ if(ctxRow>=0){clipRow={...flights[ctxRow]};const text=BASE_FIELDS.map(f=>flights[ctxRow][f]).join('\t');navigator.clipboard?.writeText(text).catch(()=>{});showToast('✓ Row copied');} });
document.getElementById('ctxCopyCol').addEventListener('click',()=>{ if(ctxTd){const field=ctxTd.getAttribute('data-field');const vals=flights.map(f=>field.startsWith('extra_')?f.extras[parseInt(field.split('_')[1])]||'':f[field]||'');navigator.clipboard?.writeText(vals.join('\n')).catch(()=>{});showToast('✓ Column copied');} });
document.getElementById('ctxPaste').addEventListener('click',()=>{ if(ctxTd){navigator.clipboard?.readText().then(text=>{ const td=ctxTd;const startOi=+td.getAttribute('data-oi'),startField=td.getAttribute('data-field'),sc=BASE_FIELDS.indexOf(startField);const rows=text.split(/\r?\n/).map(l=>l.split('\t'));rows.forEach((row,rOff)=>{const ti=startOi+rOff;if(ti>=flights.length)return;row.forEach((val,cOff)=>{const tc=sc+cOff;if(tc>=BASE_FIELDS.length)return;flights[ti][BASE_FIELDS[tc]]=val.trim();});});renderPreview();showToast('✓ Pasted'); }).catch(()=>showToast('Clipboard access denied')); } });
document.getElementById('ctxPasteRow').addEventListener('click',()=>{ if(clipRow&&ctxRow>=0){flights.splice(ctxRow+1,0,{...clipRow});updateStats();renderPreview();showToast('✓ Row pasted below');}else showToast('Copy a row first'); });
document.getElementById('ctxFillCol').addEventListener('click',()=>{ if(ctxTd){const field=ctxTd.getAttribute('data-field'),val=ctxTd.textContent.trim();flights.forEach((f,i)=>{if(field.startsWith('extra_')){const exi=parseInt(field.split('_')[1]);f.extras=f.extras||[];f.extras[exi]=val;}else{f[field]=val;}});renderPreview();showToast('✓ Column filled with: '+val);} });
document.getElementById('ctxClearCell').addEventListener('click',()=>{ if(ctxTd&&ctxRow>=0){const field=ctxTd.getAttribute('data-field');if(field.startsWith('extra_')){const exi=parseInt(field.split('_')[1]);flights[ctxRow].extras[exi]='';}else{flights[ctxRow][field]='';}renderPreview();showToast('✓ Cell cleared');} });
document.getElementById('ctxDelRow').addEventListener('click',()=>{ if(ctxRow>=0&&flights.length>1){flights.splice(ctxRow,1);updateStats();renderPreview();showToast('✓ Row deleted');} });
document.getElementById('ctxDelCol').addEventListener('click',()=>{ if(ctxTd){const field=ctxTd.getAttribute('data-field');if(field.startsWith('extra_')){const exi=parseInt(field.split('_')[1]);extraCols.splice(exi,1);flights.forEach(f=>{if(f.extras)f.extras.splice(exi,1);});renderPreview();showToast('✓ Column deleted');}else showToast('Cannot delete a base column');} });
document.getElementById('ctxInsAbove').addEventListener('click',()=>{ if(ctxRow>=0){flights.splice(ctxRow,0,{callSign:'',reg:'',type:'',dep:'',dest:'',altn:'',eobt:'',qbd:'',rvsm:'-',tcas:'',captain:'',extras:[]});updateStats();renderPreview();showToast('✓ Row inserted above');} });
document.getElementById('ctxInsBelow').addEventListener('click',()=>{ if(ctxRow>=0){flights.splice(ctxRow+1,0,{callSign:'',reg:'',type:'',dep:'',dest:'',altn:'',eobt:'',qbd:'',rvsm:'-',tcas:'',captain:'',extras:[]});updateStats();renderPreview();showToast('✓ Row inserted below');} });
document.getElementById('ctxInsSpacer').addEventListener('click',()=>{ if(ctxRow>=0){spacers.add(ctxRow);renderPreview();showToast('✓ Spacer inserted');} });
document.getElementById('ctxRemSpacer').addEventListener('click',()=>{ if(ctxRow>=0){spacers.delete(ctxRow);renderPreview();showToast('✓ Spacer removed');} });

// Sidebar button events
document.getElementById('btnSort').addEventListener('click',()=>{ defaultSort();renderPreview();showToast('✓ Re-sorted by Registration'); });
document.getElementById('btnAddRow').addEventListener('click',()=>{ flights.push({callSign:'',reg:'',type:'',dep:'',dest:'',altn:'',eobt:'',qbd:'',rvsm:'-',tcas:'',captain:'',extras:[]});updateStats();renderPreview();showToast('✓ Blank row added'); });
document.getElementById('btnAddCol').addEventListener('click',()=>{ const lbl=prompt('Column name:','NEW COL'); if(lbl){extraCols.push({label:lbl.trim().toUpperCase()});flights.forEach(f=>{f.extras=f.extras||[];f.extras.push('');});renderPreview();showToast('✓ Column "'+lbl+'" added');} });
document.getElementById('btnAddSpacer').addEventListener('click',()=>{ if(flights.length){spacers.add(flights.length-1);renderPreview();showToast('✓ Spacer added at end');} });
document.getElementById('btnClearSpacers').addEventListener('click',()=>{ spacers=new Set();renderPreview();showToast('✓ All spacers cleared'); });
['rplDate','prepName','prepSig'].forEach(id=>document.getElementById(id).addEventListener('input',renderPreview));
document.getElementById('filterText').addEventListener('input',e=>{ filterText=e.target.value;renderPreview(); });
document.getElementById('filterCol').addEventListener('change',e=>{ filterColKey=e.target.value;renderPreview(); });
document.getElementById('btnClearFilter').addEventListener('click',()=>{ filterText='';filterColKey='';document.getElementById('filterText').value='';document.getElementById('filterCol').value='';renderPreview(); });
document.getElementById('btnCopyTable').addEventListener('click',()=>{ const tbl=document.getElementById('editableTable');if(!tbl)return;let tsv=BASE_LABELS.join('\t')+'\n';flights.forEach(f=>{tsv+=BASE_FIELDS.map(k=>f[k]||'').join('\t')+'\n';});navigator.clipboard?.writeText(tsv).catch(()=>{});showToast('✓ Table copied to clipboard'); });

// Advanced sort
document.getElementById('simpleSortTransform').addEventListener('change',e=>{ document.getElementById('sortKeyword').style.display=e.target.value==='keyword'?'block':'none'; });
document.getElementById('btnSimpleSort').addEventListener('click',()=>{
  const key=document.getElementById('simpleSortCol').value;
  const transform=document.getElementById('simpleSortTransform').value;
  const dir=document.getElementById('simpleSortDir').value;
  const keyword=document.getElementById('sortKeyword').value.toLowerCase().trim();
  if(!key)return;
  flights.sort((a,b)=>{
    let va=a[key]||'',vb=b[key]||'';
    if(transform==='numeric'){va=parseFloat(va)||0;vb=parseFloat(vb)||0;return dir==='asc'?va-vb:vb-va;}
    if(transform==='keyword'){const ka=String(va).toLowerCase().includes(keyword)?0:1,kb=String(vb).toLowerCase().includes(keyword)?0:1;if(ka!==kb)return dir==='asc'?ka-kb:kb-ka;}
    if(transform==='letters'){va=String(va).replace(/[^a-zA-Z]/g,'').toLowerCase();vb=String(vb).replace(/[^a-zA-Z]/g,'').toLowerCase();}
    return dir==='asc'?String(va).localeCompare(String(vb)):String(vb).localeCompare(String(va));
  });
  renderPreview(); showToast(`✓ Sorted by ${key} ${dir}`);
});
// Populate sort column selector
BASE_FIELDS.forEach(f=>{ const o=document.createElement('option'); o.value=f; o.textContent=BASE_LABELS[BASE_FIELDS.indexOf(f)]; document.getElementById('simpleSortCol').appendChild(o); });

// ── RPL EXCEL EXPORT ─────────────────────────────────────────────────────────
document.getElementById('btnXlsx').addEventListener('click',()=>{
  const ds=document.getElementById('rplDate').value;
  const nameVal=document.getElementById('prepName').value;
  const sigVal=document.getElementById('prepSig').value;
  const title='JAMBOJET REPETITIVE ACTIVATION LIST FOR '+fmtDate(ds);
  const COLS=BASE_LABELS.concat(extraCols.map(c=>c.label));
  const aoa=[[title,...Array(COLS.length-1).fill('')],Array(COLS.length).fill(''),COLS];
  let prev=null;
  for (const f of flights) {
    const crn=normalizeReg(f.reg);
    if (prev!==null&&crn!==prev) aoa.push(Array(COLS.length).fill(''));
    aoa.push(BASE_FIELDS.map(k=>f[k]||'').concat(extraCols.map((_,i)=>f.extras&&f.extras[i]||'')));
    prev=crn;
  }
  aoa.push(Array(COLS.length).fill(''));
  aoa.push([`NAME  :  ${nameVal}`,...Array(COLS.length-1).fill('')]);
  aoa.push([`SIGNATURE  :  ${sigVal}`,...Array(COLS.length-1).fill('')]);
  const ws=XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols']=[{wch:14},{wch:10},{wch:8},{wch:6},{wch:6},{wch:6},{wch:8},{wch:6},{wch:6},{wch:8},{wch:22}];
  ws['!merges']=[{s:{r:0,c:0},e:{r:0,c:COLS.length-1}},{s:{r:1,c:0},e:{r:1,c:COLS.length-1}}];
  const wb=XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb,ws,'RPL_Output');
  XLSX.writeFile(wb,`JMA_RPL_${ds}.xlsx`); showToast('✓ Excel downloaded!');
});

// ── RPL PDF EXPORT ───────────────────────────────────────────────────────────
document.getElementById('btnPdf').addEventListener('click',()=>{
  const {jsPDF}=window.jspdf;
  const ds=document.getElementById('rplDate').value;
  const nameVal=document.getElementById('prepName').value;
  const sigVal=document.getElementById('prepSig').value;
  const title='JAMBOJET REPETITIVE ACTIVATION LIST FOR '+fmtDate(ds);
  const doc=new jsPDF({orientation:'landscape',unit:'mm',format:'a4'});
  const W=297,M=8;
  try{doc.addImage(LOGO_SRC,'JPEG',W/2-35,2,70,14);}
  catch(e){doc.setFont('helvetica','bolditalic');doc.setFontSize(20);doc.setTextColor(0,0,0);doc.text('Jambojet',W/2,11,{align:'center'});}
  doc.setLineWidth(0.5);doc.setDrawColor(0,0,0);doc.line(M,18,W-M,18);
  let y=20;
  doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(0,0,0);
  doc.text(title,W/2,y+5,{align:'center'});doc.line(M,y+7,W-M,y+7);y+=9;
  const COLS=BASE_LABELS.concat(extraCols.map(c=>c.label));
  const body=[];let prev=null;
  for (const f of flights) {
    const crn=normalizeReg(f.reg);
    if (prev!==null&&crn!==prev) body.push([{content:'',colSpan:COLS.length,styles:{fillColor:[200,200,200],minCellHeight:1,cellPadding:0,lineWidth:0}}]);
    body.push(BASE_FIELDS.map(k=>f[k]||'').concat(extraCols.map((_,i)=>f.extras&&f.extras[i]||'')));
    prev=crn;
  }
  doc.autoTable({head:[COLS],body,startY:y,margin:{left:M,right:M},
    styles:{font:'helvetica',fontSize:6.5,cellPadding:1.4,textColor:[0,0,0],lineColor:[0,0,0],lineWidth:0.15},
    headStyles:{fillColor:[255,255,255],textColor:[0,0,0],fontStyle:'bold',halign:'center',fontSize:6.5,lineWidth:0.3},
    alternateRowStyles:{fillColor:[255,255,255]},
    columnStyles:{0:{cellWidth:22},1:{cellWidth:16},2:{cellWidth:13},3:{cellWidth:11},4:{cellWidth:11},5:{cellWidth:11},6:{cellWidth:15},7:{cellWidth:11},8:{cellWidth:11},9:{cellWidth:15},10:{cellWidth:'auto',halign:'left',fontStyle:'bold'}}
  });
  const fy=doc.lastAutoTable.finalY+5;
  doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor(31,31,31);
  doc.text(`NAME  :  ${nameVal}`,M,fy);doc.text(`SIGNATURE  :  ${sigVal}`,M,fy+5);
  doc.save(`JMA_RPL_${ds}.pdf`); showToast('✓ PDF downloaded!');
});


// ═══════════════════════════════════════════════════════════════════════════
// ████████ ██████   █████   ██████ ██   ██ ██ ███    ██  ██████
//    ██    ██   ██ ██   ██ ██      ██  ██  ██ ████   ██ ██
//    ██    ██████  ███████ ██      █████   ██ ██ ██  ██ ██  ███
//    ██    ██   ██ ██   ██ ██      ██  ██  ██ ██  ██ ██ ██   ██
//    ██    ██   ██ ██   ██  ██████ ██   ██ ██ ██   ████  ██████   REPORT
// ═══════════════════════════════════════════════════════════════════════════

let trackingRows = [];       // processed rows: {timestamp, date, utc, callsign, position, altitude, speed, direction}
let trackingFilter = '';
let trackingFilterCol = '';
let trackingSortCol = null;
let trackingSortDir = 'asc';
const TRACKING_FIELDS  = ['timestamp','date','utc','callsign','position','altitude','speed','direction'];
const TRACKING_HEADERS = ['Timestamp','DATE','UTC','Callsign','Position','Altitude','Speed','Direction'];

document.getElementById('tracking-report-date').value = new Date().toISOString().split('T')[0];

// ── Parse ISO UTC string → {date, utc} ──────────────────────────────────────
// Input: "2026-09-05T16:40:17Z"
// Output: { date:"05/Sep/2026", utc:"16:40:17" }
function parseUTC(isoStr) {
  if (!isoStr) return {date:'',utc:''};
  const s = String(isoStr).trim();
  const SMONS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  // ISO 8601: 2026-09-05T16:40:17Z
  const m = s.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);
  if (m) {
    const [,yr,mo,dy,hh,mm,ss] = m;
    return {date:`${dy}/${SMONS[parseInt(mo)-1]}/${yr}`, utc:`${hh}:${mm}:${ss}`};
  }
  // Fallback: try Date parsing
  try {
    const d = new Date(s);
    if (!isNaN(d.getTime())) {
      const dy  = String(d.getUTCDate()).padStart(2,'0');
      const mo  = SMONS[d.getUTCMonth()];
      const yr  = d.getUTCFullYear();
      const hh  = String(d.getUTCHours()).padStart(2,'0');
      const mm2 = String(d.getUTCMinutes()).padStart(2,'0');
      const ss2 = String(d.getUTCSeconds()).padStart(2,'0');
      return {date:`${dy}/${mo}/${yr}`, utc:`${hh}:${mm2}:${ss2}`};
    }
  } catch(e){}
  return {date:s, utc:''};
}

// ── Process raw rows from one file ──────────────────────────────────────────
function processTrackingFile(raw, filename) {
  const rows = [];
  if (!raw || !raw.length) return rows;
  // Detect header
  const ALIASES = {
    timestamp:['TIMESTAMP','TS','TIME_UNIX','UNIX'],
    utc:['UTC','DATETIME','DATE_UTC','DATE/TIME','TIME'],
    callsign:['CALLSIGN','CALL SIGN','CALL','FLIGHT'],
    position:['POSITION','POS','LAT_LNG','COORDINATES'],
    altitude:['ALTITUDE','ALT','HEIGHT'],
    speed:['SPEED','SPD'],
    direction:['DIRECTION','DIR','HEADING','HDG']
  };
  let headerIdx=-1, colMap={};
  for (let i=0;i<Math.min(raw.length,5);i++) {
    const row=raw[i].map(c=>String(c??'').trim().toUpperCase());
    let hits=0, tm={};
    for (const [key,aliases] of Object.entries(ALIASES)) {
      const idx=row.findIndex(c=>aliases.includes(c));
      if (idx>=0){tm[key]=idx;hits++;}
    }
    if (hits>=3){headerIdx=i;colMap=tm;break;}
  }
  const dataStart = headerIdx>=0 ? headerIdx+1 : 0;
  for (let i=dataStart;i<raw.length;i++) {
    const cols=raw[i].map(c=>String(c??'').trim());
    if (cols.every(c=>!c)) continue;
    const utcRaw = headerIdx>=0 ? (cols[colMap.utc]||'') : (cols[1]||'');
    const {date,utc} = parseUTC(utcRaw);
    rows.push({
      timestamp : headerIdx>=0 ? (cols[colMap.timestamp]||cols[0]||'') : (cols[0]||''),
      date,
      utc,
      callsign  : headerIdx>=0 ? (cols[colMap.callsign]||'') : (cols[2]||''),
      position  : headerIdx>=0 ? (cols[colMap.position]||'') : (cols[3]||''),
      altitude  : headerIdx>=0 ? (cols[colMap.altitude]||'') : (cols[4]||''),
      speed     : headerIdx>=0 ? (cols[colMap.speed]||'')    : (cols[5]||''),
      direction : headerIdx>=0 ? (cols[colMap.direction]||'') : (cols[6]||''),
    });
  }
  return rows;
}

// ── File drop + folder picker ────────────────────────────────────────────────
const tdz = document.getElementById('tracking-drop-zone');
tdz.addEventListener('dragover',e=>{e.preventDefault();tdz.classList.add('drag-over');});
tdz.addEventListener('dragleave',()=>tdz.classList.remove('drag-over'));
tdz.addEventListener('drop',e=>{ e.preventDefault();tdz.classList.remove('drag-over'); loadTrackingFiles(Array.from(e.dataTransfer.files)); });
document.getElementById('tracking-file-input').addEventListener('change',e=>{ loadTrackingFiles(Array.from(e.target.files)); });
document.getElementById('tracking-folder-input').addEventListener('change',e=>{ loadTrackingFiles(Array.from(e.target.files)); });
document.getElementById('tracking-btnClear').addEventListener('click',clearTracking);

function loadTrackingFiles(files) {
  const supported = files.filter(f=>{ const ext=f.name.split('.').pop().toLowerCase(); return ['csv','xlsx','xls'].includes(ext); });
  if (!supported.length) { showToast('No supported files found (CSV, XLSX)'); return; }
  trackingRows=[];
  let done=0;
  supported.forEach(file=>{
    const ext=file.name.split('.').pop().toLowerCase();
    if (ext==='csv') {
      Papa.parse(file,{
        header:false, skipEmptyLines:'greedy', dynamicTyping:false,
        complete: r=>{ trackingRows=trackingRows.concat(processTrackingFile(r.data,file.name)); done++; if(done===supported.length)finishTrackingLoad(supported); },
        error: ()=>{ done++; if(done===supported.length)finishTrackingLoad(supported); }
      });
    } else {
      const reader=new FileReader();
      reader.onload=ev=>{
        const wb=XLSX.read(ev.target.result,{type:'array'});
        const sn=wb.SheetNames[0];
        const raw=XLSX.utils.sheet_to_json(wb.Sheets[sn],{header:1,defval:''});
        trackingRows=trackingRows.concat(processTrackingFile(raw,file.name));
        done++; if(done===supported.length)finishTrackingLoad(supported);
      };
      reader.readAsArrayBuffer(file);
    }
  });
}

function finishTrackingLoad(files) {
  if (!trackingRows.length) { showToast('No tracking data found in files.'); return; }
  // Sort by timestamp by default
  trackingRows.sort((a,b)=>{ const ta=parseFloat(a.timestamp)||0,tb=parseFloat(b.timestamp)||0; return ta-tb; });
  document.getElementById('tracking-file-info').style.display='flex';
  document.getElementById('tracking-fiName').textContent=files.length===1?files[0].name:`${files.length} files loaded`;
  document.getElementById('tracking-fiCount').textContent=`${trackingRows.length} records`;
  document.getElementById('tracking-actions').style.display='block';
  document.getElementById('tracking-filterBar').style.display='flex';
  document.getElementById('tracking-row-count').textContent=`${trackingRows.length} RECORDS`;
  renderTrackingPreview();
  showToast(`✓ ${trackingRows.length} tracking records loaded`);
}

function clearTracking() {
  trackingRows=[];
  document.getElementById('tracking-file-info').style.display='none';
  document.getElementById('tracking-actions').style.display='none';
  document.getElementById('tracking-filterBar').style.display='none';
  document.getElementById('tracking-emptyState').style.display='flex';
  document.getElementById('tracking-preview-container').style.display='none';
  document.getElementById('tracking-row-count').textContent='';
  document.getElementById('tracking-file-input').value='';
  document.getElementById('tracking-folder-input').value='';
}

// ── Filter / sort tracking data ───────────────────────────────────────────────
function getFilteredTracking() {
  let res = trackingRows.map((r,i)=>({...r,_i:i}));
  if (trackingFilter||trackingFilterCol) {
    const q=trackingFilter.toLowerCase();
    res=res.filter(r=>{ if(trackingFilterCol) return (r[trackingFilterCol.toLowerCase()]||'').toLowerCase().includes(q); return TRACKING_FIELDS.some(k=>(r[k]||'').toLowerCase().includes(q)); });
  }
  if (trackingSortCol!==null) {
    const key=TRACKING_FIELDS[trackingSortCol];
    res.sort((a,b)=>{
      let va=a[key]||'',vb=b[key]||'';
      if (key==='timestamp'||key==='altitude'||key==='speed'||key==='direction') { va=parseFloat(va)||0;vb=parseFloat(vb)||0; return trackingSortDir==='asc'?va-vb:vb-va; }
      return trackingSortDir==='asc'?String(va).localeCompare(String(vb)):String(vb).localeCompare(String(va));
    });
  }
  return res;
}

// ── Render tracking table preview ────────────────────────────────────────────
function renderTrackingPreview() {
  if (!trackingRows.length) return;
  const filtered=getFilteredTracking();
  const tbody=document.querySelector('#tracking-table tbody');
  tbody.innerHTML='';
  filtered.forEach((r,i)=>{
    const tr=document.createElement('tr');
    tr.className='dr';
    TRACKING_FIELDS.forEach(field=>{
      const td=document.createElement('td');
      td.contentEditable='true';
      td.textContent=r[field]||'';
      td.setAttribute('data-i',r._i);
      td.setAttribute('data-field',field);
      td.addEventListener('input',e=>{ trackingRows[r._i][field]=e.target.textContent.trim(); });
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  // Sort icons in header
  document.querySelectorAll('#tracking-table thead th').forEach((th,ci)=>{
    th.classList.remove('sort-asc','sort-desc');
    if (trackingSortCol===ci) th.classList.add(trackingSortDir==='asc'?'sort-asc':'sort-desc');
    th.style.cursor='pointer';
    th.onclick=()=>{
      if(trackingSortCol===ci){trackingSortDir=trackingSortDir==='asc'?'desc':'asc';}else{trackingSortCol=ci;trackingSortDir='asc';}
      renderTrackingPreview(); showToast(`✓ Sorted by ${TRACKING_HEADERS[ci]}`);
    };
    // Add sort icon if not present
    if (!th.querySelector('.sort-icon')) { const span=document.createElement('span'); span.className='sort-icon'; th.appendChild(span); }
  });
  document.getElementById('tracking-emptyState').style.display='none';
  document.getElementById('tracking-preview-container').style.display='block';
  document.getElementById('tracking-row-count').textContent=`${filtered.length} RECORDS`;
}

// Add row button
document.getElementById('tracking-add-row').addEventListener('click',()=>{
  trackingRows.push({timestamp:'',date:'',utc:'',callsign:'',position:'',altitude:'',speed:'',direction:''});
  renderTrackingPreview(); showToast('✓ Blank row added');
});

// Filter events
document.getElementById('tracking-filterText').addEventListener('input',e=>{ trackingFilter=e.target.value; renderTrackingPreview(); });
document.getElementById('tracking-filterCol').addEventListener('change',e=>{ trackingFilterCol=e.target.value; renderTrackingPreview(); });
document.getElementById('tracking-btnClearFilter').addEventListener('click',()=>{ trackingFilter=''; trackingFilterCol=''; document.getElementById('tracking-filterText').value=''; document.getElementById('tracking-filterCol').value=''; renderTrackingPreview(); });

// Advanced sort
document.getElementById('tracking-sortTransform').addEventListener('change',e=>{ document.getElementById('tracking-sortKeyword').style.display=e.target.value==='keyword'?'block':'none'; });
document.getElementById('tracking-btnSort').addEventListener('click',()=>{
  const key=document.getElementById('tracking-sortCol').value;
  const transform=document.getElementById('tracking-sortTransform').value;
  const dir=document.getElementById('tracking-sortDir').value;
  const keyword=document.getElementById('tracking-sortKeyword').value.toLowerCase().trim();
  trackingRows.sort((a,b)=>{
    let va=a[key.toLowerCase()]||'',vb=b[key.toLowerCase()]||'';
    if(transform==='numeric'){va=parseFloat(va)||0;vb=parseFloat(vb)||0;return dir==='asc'?va-vb:vb-va;}
    if(transform==='keyword'){const ka=String(va).toLowerCase().includes(keyword)?0:1,kb=String(vb).toLowerCase().includes(keyword)?0:1;if(ka!==kb)return dir==='asc'?ka-kb:kb-ka;}
    return dir==='asc'?String(va).localeCompare(String(vb)):String(vb).localeCompare(String(va));
  });
  renderTrackingPreview(); showToast(`✓ Sorted by ${key} ${dir}`);
});

// ── Build report title ───────────────────────────────────────────────────────
function buildTrackingTitle() {
  const title=document.getElementById('tracking-report-title').value||'FLIGHT TRACKING REPORT';
  const shift=document.getElementById('tracking-shift-name').value||'';
  const dt   =document.getElementById('tracking-report-date').value;
  let datePart='';
  if (dt) {
    const d=new Date(dt+'T00:00:00');
    const SMONS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const dy=String(d.getDate()).padStart(2,'0');
    datePart=`${dy}-${SMONS[d.getMonth()]}-${d.getFullYear()}`;
  }
  let parts=[title]; if(shift)parts.push(shift); if(datePart)parts.push(`FOR ${datePart}`);
  return parts.join(' : ');
}

// ── TRACKING PDF EXPORT ───────────────────────────────────────────────────────
document.getElementById('tracking-export-pdf').addEventListener('click',()=>{
  const {jsPDF}=window.jspdf;
  const filtered=getFilteredTracking();
  if (!filtered.length){showToast('No data to export');return;}
  const doc=new jsPDF({orientation:'landscape',unit:'mm',format:'a4'});
  const W=297,M=8;
  const fullTitle=buildTrackingTitle();

  // Logo banner
  try{doc.addImage(LOGO_SRC,'JPEG',W/2-35,2,70,14);}
  catch(e){doc.setFont('helvetica','bolditalic');doc.setFontSize(20);doc.setTextColor(0,0,0);doc.text('Jambojet',W/2,11,{align:'center'});}
  doc.setLineWidth(0.5);doc.setDrawColor(0,0,0);doc.line(M,18,W-M,18);
  let y=20;
  doc.setFont('helvetica','bold');doc.setFontSize(8);doc.setTextColor(0,0,0);
  doc.text(fullTitle,W/2,y+5,{align:'center'});doc.line(M,y+7,W-M,y+7);y+=9;

  const body=filtered.map(r=>TRACKING_FIELDS.map(k=>String(r[k]||'')));
  doc.autoTable({
    head:[TRACKING_HEADERS],body,startY:y,margin:{left:M,right:M},
    styles:{font:'helvetica',fontSize:6.5,cellPadding:1.4,textColor:[0,0,0],lineColor:[0,0,0],lineWidth:0.15},
    headStyles:{fillColor:[255,255,255],textColor:[0,0,0],fontStyle:'bold',halign:'center',fontSize:6.5,lineWidth:0.3},
    alternateRowStyles:{fillColor:[255,255,255]},
    columnStyles:{
      0:{cellWidth:22},1:{cellWidth:20},2:{cellWidth:18},3:{cellWidth:18},
      4:{cellWidth:36},5:{cellWidth:16},6:{cellWidth:14},7:{cellWidth:'auto'}
    },
    didParseCell: function(data){ if(data.section==='head'){data.cell.styles.halign='center';}else{if(data.column.index<=3||data.column.index>=5)data.cell.styles.halign='center';} }
  });
  const ds=document.getElementById('tracking-report-date').value||new Date().toISOString().split('T')[0];
  doc.save(`JMA_TRACKING_${ds}.pdf`); showToast('✓ PDF downloaded!');
});

// ── TRACKING EXCEL EXPORT ────────────────────────────────────────────────────
document.getElementById('tracking-export-excel').addEventListener('click',()=>{
  const filtered=getFilteredTracking();
  if (!filtered.length){showToast('No data to export');return;}
  const fullTitle=buildTrackingTitle();
  const aoa=[
    [fullTitle,...Array(TRACKING_HEADERS.length-1).fill('')],
    Array(TRACKING_HEADERS.length).fill(''),
    TRACKING_HEADERS
  ];
  filtered.forEach(r=>{ aoa.push(TRACKING_FIELDS.map(k=>r[k]||'')); });
  const ws=XLSX.utils.aoa_to_sheet(aoa);
  ws['!merges']=[{s:{r:0,c:0},e:{r:0,c:TRACKING_HEADERS.length-1}},{s:{r:1,c:0},e:{r:1,c:TRACKING_HEADERS.length-1}}];
  ws['!cols']=[{wch:14},{wch:14},{wch:12},{wch:12},{wch:24},{wch:10},{wch:8},{wch:10}];
  const wb=XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb,ws,'Tracking_Report');
  const ds=document.getElementById('tracking-report-date').value||new Date().toISOString().split('T')[0];
  XLSX.writeFile(wb,`JMA_TRACKING_${ds}.xlsx`); showToast('✓ Excel downloaded!');
});

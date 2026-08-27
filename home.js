/**
 * home.js — خاص بصفحة index.html فقط
 */
document.addEventListener('DOMContentLoaded', ()=>{
  NUSC.init('home');
  renderHero();
  buildCollegeSwitcher();

  document.getElementById('collegeSwitchModal').addEventListener('click', (e)=>{
    if(e.target.id === 'collegeSwitchModal') e.currentTarget.classList.remove('open');
  });
});

function renderHero(){
  const c = NUSC.data();
  document.getElementById('badge').innerHTML = `<span>${c.icon}</span> بوابة الكلية`;
  document.getElementById('collegeTitle').innerHTML = `${c.name} <span style="font-size:.85em; margin-inline-start:8px;">${c.icon}</span>`;
  document.getElementById('collegeTag').textContent = c.tagline;
  NUSC.renderMotif(document.getElementById('motif'), c.motif, c.tint);
}

function buildCollegeSwitcher(){
  const wrap = document.getElementById('collegeOptions');
  wrap.innerHTML = '';
  COLLEGE_ORDER.forEach(key=>{
    const c = COLLEGES[key];
    const el = document.createElement('div');
    el.className = 'college-opt';
    el.innerHTML = `<span>${c.icon}</span> ${c.name}`;
    el.onclick = ()=>{
      NUSC.setCollege(key);
      document.getElementById('collegeSwitchModal').classList.remove('open');
      NUSC.init('home');
      renderHero();
    };
    wrap.appendChild(el);
  });
}

/**
 * app.js — منطق مشترك بين كل صفحات المنصة (يُحمَّل بعد colleges-data.js)
 */

const NUSC = {
  getCollege(){
    return localStorage.getItem('nusc_college') || 'ai';
  },
  setCollege(key){
    localStorage.setItem('nusc_college', key);
  },
  data(){
    return COLLEGES[this.getCollege()];
  },

  /* يُستدعى في بداية كل صفحة */
  init(activePage){
    const key = this.getCollege();
    const c = COLLEGES[key];
    document.body.setAttribute('data-college', key);
    document.body.style.setProperty('--tint', c.tint);

    // شارة الكلية في الشريط العلوي
    document.querySelectorAll('[data-role="college-chip"]').forEach(el=>{
      el.innerHTML = `<span>${c.icon}</span> ${c.name}`;
    });

    // تفعيل عنصر التنقل السفلي الصحيح
    document.querySelectorAll('.nav-item').forEach(el=>{
      el.classList.toggle('active', el.dataset.page === activePage);
    });

    this.wireMenu();
  },

  wireMenu(){
    const btn = document.querySelector('[data-role="menu-btn"]');
    const dd = document.querySelector('[data-role="menu-dropdown"]');
    if(!btn || !dd) return;
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      dd.classList.toggle('open');
    });
    document.addEventListener('click', ()=> dd.classList.remove('open'));

    const switchBtn = dd.querySelector('[data-action="switch-college"]');
    if(switchBtn){
      switchBtn.addEventListener('click', ()=>{
        document.getElementById('collegeSwitchModal')?.classList.add('open');
      });
    }
  },

  /* يبني الـSVG/الطبقة الخاصة بموتيف الكلية داخل عنصر hero-motif */
  renderMotif(container, motif, tint){
    const map = {
      molecule: ()=>{
        let html='';
        for(let i=0;i<6;i++){
          const l=6+i*15, t=8+((i*19)%68), d=6+(i%4), delay=-i*1.2, r=(i%2?-16:16);
          html+=`<div class="cap" style="inset-inline-start:${l}%; top:${t}%; animation-duration:${d}s; animation-delay:${delay}s; --r:${r}deg;"></div>`;
        }
        return html;
      },
      circuit: ()=>{
        const pts=[[10,20],[26,48],[16,74],[44,14],[50,54],[68,28],[78,64],[58,82],[34,86]];
        let nodes = pts.map((p,i)=>`<div class="node" style="inset-inline-start:${p[0]}%; top:${p[1]}%; animation-delay:${i*.3}s;"></div>`).join('');
        let path='M '+ pts.map(p=> (p[0]*6)+','+(p[1]*3)).join(' L ');
        return `<svg viewBox="0 0 600 300" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%;"><path d="${path}"/></svg>${nodes}`;
      },
      paw: ()=>{
        let html='';
        for(let i=0;i<5;i++) html+=`<div class="paw" style="top:${14+i*15}%; animation-delay:${i*1.3}s;">🐾</div>`;
        return html;
      },
      atom: ()=>{
        return `<div style="position:absolute; inset-inline-end:8%; top:14%; width:140px; height:140px;">
          <div class="orbit" style="inset:0; animation:spin 5s linear infinite;"><div class="electron" style="top:-3.5px; inset-inline-start:50%;"></div></div>
          <div class="orbit" style="inset:0; transform:rotate(60deg); animation:spin 6.5s linear infinite reverse;"><div class="electron" style="top:-3.5px; inset-inline-start:50%;"></div></div>
          <div class="orbit" style="inset:0; transform:rotate(-60deg); animation:spin 4s linear infinite;"><div class="electron" style="top:-3.5px; inset-inline-start:50%;"></div></div>
        </div>`;
      },
      chart: ()=>{
        const h=[36,58,44,72,52,86,64];
        let bars = h.map((v,i)=>`<div class="bar" style="height:${v}px; inset-inline-end:${8+i*22}px; animation-delay:${i*.25}s;"></div>`).join('');
        return `<div style="position:absolute; inset:0;">${bars}</div>`;
      },
      wave: ()=>{
        return `<div class="plane">✈️</div>
          <svg class="wave-svg" viewBox="0 0 800 90" preserveAspectRatio="none" style="position:absolute; inset-inline-start:0; bottom:0; width:100%; height:80px; opacity:.5;">
            <path fill="${tint}" d="M0,50 C150,10 250,90 400,50 C550,10 650,90 800,50 C950,10 1050,90 1200,50 L1200,90 L0,90 Z"/>
          </svg>`;
      },
      pulse: ()=>{
        let streaks='';
        for(let i=0;i<5;i++) streaks+=`<div class="streak" style="top:${18+i*14}%; inset-inline-start:4%; width:${55+i*10}px; animation-delay:${i*.45}s;"></div>`;
        return `<svg viewBox="0 0 600 60" preserveAspectRatio="none" style="position:absolute; inset-inline-start:0; top:32%; width:100%; height:55px;">
          <path d="M0,30 L100,30 L120,5 L140,55 L160,30 L260,30 L280,15 L300,45 L320,30 L600,30"/></svg>${streaks}`;
      },
    };
    container.innerHTML = (map[motif] || map.circuit)();
    container.classList.add('m-'+motif);
  }
};

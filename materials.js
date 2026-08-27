/**
 * materials.js — خاص بصفحة materials.html
 * ملاحظة: هذا عرض تجريبي (Front-end فقط) — الرفع الفعلي يحتاج ربطه بسيرفر/تخزين حقيقي لاحقًا.
 */
document.addEventListener('DOMContentLoaded', ()=>{
  NUSC.init('materials');
  const c = NUSC.data();
  document.getElementById('pageIcon').textContent = c.icon;
  document.getElementById('pageSub').textContent = `${c.name} — كل الكتب والمحاضرات الخاصة بمادتك`;

  wireTypeToggle();
  renderMaterials(c);
});

function wireTypeToggle(){
  const buttons = document.querySelectorAll('.type-btn');
  buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      buttons.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.conditional').forEach(c=>c.classList.remove('show'));
      document.querySelector(`.conditional[data-cond="${btn.dataset.type}"]`).classList.add('show');
    });
  });
}

function renderMaterials(c){
  const list = document.getElementById('materialsList');
  list.innerHTML = '';
  c.materials.forEach(mat=>{
    const el = document.createElement('div');
    el.className = 'card material-item';
    const rows = mat.explains.map(ex => `
      <div class="explain-row">
        <span><span class="tag">${ex.type === 'video' ? '🎥 فيديو مباشر' : '🔗 رابط خارجي'}</span> — ${ex.label}</span>
        <span style="color:var(--sub);">فتح</span>
      </div>`).join('');
    el.innerHTML = `
      <div class="m-title">📘 ${mat.title}</div>
      ${rows}
      <button class="add-explain">+ إضافة شرح (رابط أو فيديو)</button>
    `;
    list.appendChild(el);
  });
}

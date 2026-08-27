/**
 * ai-hub.js — خاص بصفحة ai-hub.html
 *
 * ملاحظة مهمة: الواجهة دي مبنية عشان تُحسّ إنها "أداة واحدة موحّدة" مش قائمة اختيار.
 * لكنها عرض تجريبي بالكامل — مفيش استدعاء فعلي لـ ChatGPT / Gemini / Claude / NotebookLM هنا.
 * علشان تشتغل حقيقي، لازم Backend يستقبل السؤال، يبعته للـ APIs المطلوبة (بمفاتيحها الخاصة)،
 * يجمع الردود، ويرجعلك إجابة واحدة — الجزء ده لازم يتعمل من عندكم على السيرفر، مش من المتصفح
 * (مفاتيح الـ API متسربش أبدًا في كود الواجهة الأمامية).
 */
const SOURCES = ['Gemini', 'ChatGPT', 'Claude', 'NotebookLM'];

document.addEventListener('DOMContentLoaded', ()=>{
  NUSC.init('ai');
  const c = NUSC.data();
  document.getElementById('aiOrb').textContent = c.icon;

  buildSourceChips();
  wireComposer();
});

function buildSourceChips(){
  const wrap = document.getElementById('sources');
  wrap.innerHTML = '';
  SOURCES.forEach(name=>{
    const chip = document.createElement('div');
    chip.className = 'source-chip on';
    chip.innerHTML = `<span class="dot"></span> ${name}`;
    chip.onclick = ()=> chip.classList.toggle('on');
    wrap.appendChild(chip);
  });
}

function wireComposer(){
  const input = document.getElementById('chatInput');
  const send = document.getElementById('sendBtn');
  const go = ()=>{
    const text = input.value.trim();
    if(!text) return;
    addMsg(text, 'me');
    input.value = '';
    setTimeout(()=>{
      const active = [...document.querySelectorAll('.source-chip.on')].map(c=>c.textContent.trim());
      addMsg(
        `هدي إجابة تجريبية توضيحية على سؤالك — في النسخة النهائية هتتجمّع من (${active.join('، ') || 'مفيش مصادر مفعّلة'}) في رد واحد متكامل.`,
        'ai'
      );
    }, 500);
  };
  send.addEventListener('click', go);
  input.addEventListener('keydown', e=>{ if(e.key === 'Enter') go(); });
}

function addMsg(text, who){
  const win = document.getElementById('chatWindow');
  const el = document.createElement('div');
  el.className = 'msg ' + who;
  el.textContent = text;
  win.appendChild(el);
  win.scrollTop = win.scrollHeight;
}

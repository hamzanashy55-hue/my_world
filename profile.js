/**
 * profile.js — خاص بصفحة profile.html
 * البيانات الشخصية هنا Placeholder (بيانات تجريبية) — في التطبيق الحقيقي
 * لازم تيجي من بيانات التسجيل الفعلية للطالب (نفس حقول فورم إنشاء الحساب).
 */
document.addEventListener('DOMContentLoaded', ()=>{
  NUSC.init('profile');
  const c = NUSC.data();

  document.getElementById('avatarIc').textContent = c.icon;
  document.getElementById('userName').textContent = 'اسم الطالب الكامل';
  document.getElementById('collegeLine').textContent = c.name;

  document.getElementById('dEmailP').textContent = 'student@example.com';
  document.getElementById('dCode').textContent = '2025XXXXX';
  document.getElementById('dCollege').textContent = c.name;
  document.getElementById('dYear').textContent = c.year;
  document.getElementById('dMajor').textContent = c.major;
});

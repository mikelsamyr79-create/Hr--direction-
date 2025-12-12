
/* app.js - main UI logic + placeholders for Firebase integration */
document.addEventListener('DOMContentLoaded', ()=>{

  // sample KPI data (replace with real Firebase reads)
  document.getElementById('kpi1')?.textContent = '124';
  document.getElementById('kpi2')?.textContent = '$12,400';
  document.getElementById('kpi3')?.textContent = '7';

  // top sales table sample rows
  const topSales = [
    {name:'أحمد علي', branch:'القاهرة', sales: '4,200'},
    {name:'منى سامي', branch:'الإسكندرية', sales: '3,500'},
    {name:'يوسف محمد', branch:'المنصورة', sales: '2,900'},
    {name:'هدى محمود', branch:'القاهرة', sales: '2,300'},
    {name:'سارة كريم', branch:'الأسكندرية', sales: '2,100'},
  ];
  const tbody = document.querySelector('#topSales tbody');
  if(tbody){
    topSales.forEach(r=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${r.name}</td><td>${r.branch}</td><td>${r.sales}</td>`;
      tbody.appendChild(tr);
    });
  }

  // events sample
  const events = ['تحديث التارجت الشهري','تم اعتماد طلب إجازة - فرع القاهرة','تسجيل مبيع جديد'];
  const ev = document.getElementById('events');
  if(ev) events.forEach(e=>{ const li=document.createElement('li'); li.textContent=e; ev.appendChild(li); });

  // Users sample for roles page (will be replaced by Firebase)
  const sampleUsers = [
    {name:'أحمد علي', email:'a@example.com', role:'hr'},
    {name:'منى سامي', email:'m@example.com', role:'manager'},
    {name:'يوسف محمد', email:'y@example.com', role:'employee'},
  ];
  const usersTable = document.querySelector('#usersTable tbody');
  const uTable = document.querySelector('#uTable tbody');
  if(usersTable){
    sampleUsers.forEach(u=>{
      const tr=document.createElement('tr');
      tr.innerHTML = `<td>${u.name}</td><td>${u.email}</td><td><select data-email="${u.email}"><option ${u.role==='employee'?'selected':''} value="employee">employee</option><option ${u.role==='sales'?'selected':''} value="sales">sales</option><option ${u.role==='manager'?'selected':''} value="manager">manager</option><option ${u.role==='hr'?'selected':''} value="hr">hr</option><option ${u.role==='finance'?'selected':''} value="finance">finance</option><option ${u.role==='admin'?'selected':''} value="admin">admin</option></select></td><td><button class="btn" onclick="saveRole(this)">حفظ</button></td>`;
      usersTable.appendChild(tr);
    });
  }
  if(uTable){
    sampleUsers.forEach(u=>{
      const tr=document.createElement('tr');
      tr.innerHTML = `<td>${u.name}</td><td>${u.email}</td><td>${u.role}</td>`;
      uTable.appendChild(tr);
    });
  }

  // save role handler (placeholder: implement Firebase write)
  window.saveRole = function(btn){
    const sel = btn.parentElement.parentElement.querySelector('select');
    alert('سيتم حفظ الدور: '+sel.value+' للمستخدم: '+sel.dataset.email);
  };

  // add user
  document.getElementById('addUserBtn')?.addEventListener('click', ()=>{
    document.getElementById('u_name').value=''; document.getElementById('u_email').value=''; document.getElementById('u_role').value='employee';
    window.scrollTo(0,9999);
  });

  document.getElementById('saveUserBtn')?.addEventListener('click', ()=>{
    const name = document.getElementById('u_name').value;
    const email = document.getElementById('u_email').value;
    const role = document.getElementById('u_role').value;
    if(!email || !name){ alert('ادخل الاسم والبريد'); return; }
    alert('مستخدم جديد سيُضاف: '+name+' ('+role+')');
  });

});

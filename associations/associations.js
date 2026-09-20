document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('[data-toggle="profileList"]');
    const closeBtn = document.querySelector('[data-close]');
    const popup = document.querySelector('.profileList');
    if (menuBtn && popup) {
        menuBtn.addEventListener('click', () => popup.classList.add('active'));
        closeBtn.addEventListener('click', () => popup.classList.remove('active'));
    }

    const surplus = [
        { name: 'كسوات عيد', org: 'جمعية النور - وهران', qty: '30 وحدة' },
        { name: 'أجهزة حاسوب', org: 'مؤسسة التقنية - الجزائر', qty: '5 وحدات' },
        { name: 'مواد غذائية', org: 'جمعية البر - قسنطينة', qty: '100 سلة' }
    ];
    const needs = [
        { name: 'كسوات عيد', org: 'جمعية رعاية - عنابة', qty: '20 وحدة' },
        { name: 'حفاضات أطفال', org: 'جمعية الأمومة - سطيف', qty: '50 كرتونة' }
    ];
    const matches = [
        { resource: 'كسوات عيد', from: 'جمعية النور - وهران', to: 'جمعية رعاية - عنابة', percent: '95%' }
    ];

    document.getElementById('surplusList').innerHTML = surplus.map(r => `<div class="resource-item"><div class="resource-info"><strong>${r.name}</strong><small>${r.org}</small></div><div class="resource-qty">${r.qty}</div></div>`).join('');
    document.getElementById('needsList').innerHTML = needs.map(r => `<div class="resource-item"><div class="resource-info"><strong>${r.name}</strong><small>${r.org}</small></div><div class="resource-qty" style="color:#ef4444">${r.qty}</div></div>`).join('');
    
    document.getElementById('matchesList').innerHTML = matches.map(m => `
        <div class="match-item">
            <div class="match-info"><strong>${m.resource}</strong><small>من: ${m.from} → إلى: ${m.to}</small></div>
            <div class="match-percent">${m.percent}</div>
            <button class="button primary-btn" style="width:auto;height:2.5rem;font-size:0.85rem;padding:0 1.5rem;" onclick="alert('تم اعتماد التحويل بنجاح!')">اعتماد</button>
        </div>
    `).join('');
});
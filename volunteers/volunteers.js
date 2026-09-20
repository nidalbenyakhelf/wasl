document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('[data-toggle="profileList"]');
    const closeBtn = document.querySelector('[data-close]');
    const popup = document.querySelector('.profileList');
    if (menuBtn && popup) {
        menuBtn.addEventListener('click', () => popup.classList.add('active'));
        closeBtn.addEventListener('click', () => popup.classList.remove('active'));
        document.addEventListener('click', (e) => {
            if (!popup.contains(e.target) && !menuBtn.contains(e.target)) popup.classList.remove('active');
        });
    }

    document.getElementById('volunteerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري التسجيل...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fa-solid fa-check"></i> تم التسجيل بنجاح!';
            setTimeout(() => {
                alert('شكراً لتطوعك!\nسيتم التواصل معك خلال 48 ساعة.\nمعاً نصنع الفرق في الجزائر');
                this.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
                document.getElementById('registrationForm').style.display = 'none';
            }, 1000);
        }, 1500);
    });
});

function showSection(type) {
    document.getElementById('servicesSection').style.display = 'none';
    document.getElementById('donationsSection').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'none';
    
    if (type === 'services') {
        document.getElementById('servicesSection').style.display = 'block';
    } else if (type === 'donations') {
        document.getElementById('donationsSection').style.display = 'block';
    }
    
    setTimeout(() => {
        document.getElementById(type === 'services' ? 'servicesSection' : 'donationsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function selectService(service) {
    document.getElementById('selectedType').value = 'خدمة: ' + service;
    document.getElementById('formSubtitle').textContent = 'أدخل بياناتك للتطوع في: ' + service;
    document.getElementById('registrationForm').style.display = 'block';
    setTimeout(() => {
        document.getElementById('registrationForm').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function selectDonation(donation) {
    document.getElementById('selectedType').value = 'تبرع: ' + donation;
    document.getElementById('formSubtitle').textContent = 'أدخل بياناتك للتبرع بـ: ' + donation;
    document.getElementById('registrationForm').style.display = 'block';
    setTimeout(() => {
        document.getElementById('registrationForm').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}
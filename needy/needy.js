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

    document.getElementById('helpForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري الإرسال...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fa-solid fa-check"></i> تم الإرسال بنجاح!';
            setTimeout(() => {
                alert('تم استلام طلبك بنجاح!\nسيتم التواصل معك خلال 24 ساعة.\nشكراً لثقتك بمنصة وصْل');
                this.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1000);
        }, 1500);
    });
});
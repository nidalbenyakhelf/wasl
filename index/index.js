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

    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    function animateCounter(id, target, duration = 2000) {
        const el = document.getElementById(id);
        if (!el) return;
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) { el.textContent = target + '+'; clearInterval(timer); }
            else { el.textContent = Math.floor(start) + '+'; }
        }, 16);
    }

    setTimeout(() => {
        animateCounter('count1', 1250);
        animateCounter('count2', 340);
        animateCounter('count3', 48);
    }, 500);
});
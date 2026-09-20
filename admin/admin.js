const ADMIN_CREDENTIALS = { username: 'admin', password: 'wasl2026' };

document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('admin_logged_in') === 'true') {
        showDashboard();
    } else {
        showLogin();
    }

    const menuBtn = document.querySelector('[data-toggle="profileList"]');
    const closeBtn = document.querySelector('[data-close]');
    const popup = document.querySelector('.profileList');
    if (menuBtn && popup) {
        menuBtn.addEventListener('click', () => popup.classList.add('active'));
        closeBtn.addEventListener('click', () => popup.classList.remove('active'));
    }
});

function showLogin() {
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('dashboard').style.display = 'none';
}

function showDashboard() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    renderPending();
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (document.getElementById('username').value === ADMIN_CREDENTIALS.username && document.getElementById('password').value === ADMIN_CREDENTIALS.password) {
        sessionStorage.setItem('admin_logged_in', 'true');
        showDashboard();
    } else {
        document.getElementById('loginError').style.display = 'block';
        setTimeout(() => document.getElementById('loginError').style.display = 'none', 3000);
    }
});

function logout() {
    sessionStorage.removeItem('admin_logged_in');
    showLogin();
}

const pendingRequests = [
    { name: 'جمعية الإحسان - وهران', reg: 'REG-9921', date: '2026-09-19' },
    { name: 'مؤسسة الرحمة - الجزائر', reg: 'REG-9922', date: '2026-09-19' },
    { name: 'جمعية البر - قسنطينة', reg: 'REG-9923', date: '2026-09-18' }
];

function renderPending() {
    document.getElementById('pendingTable').innerHTML = pendingRequests.map((r, i) => `
        <tr>
            <td><strong style="color:#fff;">${r.name}</strong></td>
            <td style="font-family:monospace;">${r.reg}</td>
            <td>${r.date}</td>
            <td><span class="status-badge status-pending">معلق</span></td>
            <td>
                <button class="btn-sm btn-approve" onclick="approve(${i})"><i class="fa-solid fa-check"></i></button>
                <button class="btn-sm btn-reject" onclick="reject(${i})"><i class="fa-solid fa-xmark"></i></button>
            </td>
        </tr>
    `).join('');
}

function approve(i) { if(confirm('قبول الطلب؟')) { pendingRequests.splice(i, 1); renderPending(); } }
function reject(i) { if(confirm('رفض الطلب؟')) { pendingRequests.splice(i, 1); renderPending(); } }
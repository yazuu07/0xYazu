 /* ── DATA ── */
 const certs = [
    { title: "2nd Place — BlackHat USA CTF 2025",    issuer: "BugCrowd",        date: "2025", img: "assets/images/certificates/bugcrowd.jpg" },
    { title: "VIGI Certified Security Administrator (VCSA)",            issuer: "VIGI",          date: "2026", img: "assets/images/certificates/Vigi.png" },
    { title: "42nd Place — Cor CTF 2025",            issuer: "Cor",              date: "2025", img: "assets/images/certificates/Cor.jpg" },
    { title: "59th Place — LA CTF 2026",             issuer: "LACTF",            date: "2026", img: "assets/images/certificates/LACTF.jpg" },
    { title: "Java Developing Certificate",           issuer: "Sololearn",        date: "2024", img: "assets/images/certificates/Java (1).jpg" },
    { title: "Java Intermediate Certificate",         issuer: "Sololearn",        date: "2024", img: "assets/images/certificates/Java Intermediate (1).jpg" },
    { title: "JavaScript Certificate",                issuer: "CISTEM & UNILAB", date: "2024", img: "assets/images/certificates/JavaScript (1).jpg" },
    { title: "Web Development Certificate",           issuer: "CISTEM & UNILAB", date: "2024", img: "assets/images/certificates/WebDev (1).jpg" },
    { title: "Generative AI in Practice",             issuer: "CISTEM & UNILAB", date: "2025", img: "assets/images/certificates/Generative AI in Practice_certificate.jpg" },
    { title: "Vibe Coding Certificate",               issuer: "CISTEM & UNILAB", date: "2025", img: "assets/images/certificates/Vibe Coding_certificate (1).jpg" },
    { title: "C++ Essentials Certificate",            issuer: "NetAcad",          date: "2026", img: "assets/images/certificates/c-essentials-1.png" },
    { title: "STEM EXPO 2024",                        issuer: "CISTEM & UNILAB", date: "2024", img: "assets/images/certificates/STEM EXPO 2024 (1).jpg" },
    { title: "50th Place — BDSec CTF 2025",          issuer: "BDSec",            date: "2025", img: "assets/images/certificates/BDSec CTF 2025 (1).png" },
];

const projects = [
    { title: "Hidden Investigations Website",   desc: "Bangladesh's No. 1 CTF team website. Built with HTML, CSS, and JavaScript.", img: "assets/images/projects/hi.png",         url: "https://hiddeninvestigations.net/" },
    { title: "Representative of WolrdSkills Philippines",   desc: "WorldSkills Philippines in Cybersecurity, we do real life hunting of bugs and bypasses", img: "assets/images/projects/worldskills.jpg"},
    { title: "AI-Based Phishing Email Analyzer",   desc: "This is a phishing analyzer that calculates of an email is suspicious and also intgrated with AI sumarization for efficient use for non-technical users.", img: 'assets/images/projects/phish.jpg', url: 'https://github.com/yazuu07/phishing-analyzer.git'},
    { title: "ReconSuite",   desc: "A URL reconnaissance detector to check vulnerabilities of a website. The tools are combination of all reconnaissance tools FFUF, WPScan, OSINT Search, and DNS Enumeration", img: "assets/images/projects/Recon.jpg", url: "https://github.com/yazuu07/ReconSuite.git"},
    { title: "Attendance Monitoring System",   desc: "Attendance System for Systech Integrations Inc. for their EXPO 2026", img: 'assets/images/projects/systech.jpg'},
    { title: "HI JSpider Tool",                 desc: "A tool to discover hidden APIs. I handled the full frontend build.",         img: "assets/images/projects/jspider.png",     url: "https://jspider.hiddeninvestigations.net/" },
    { title: "Ollama-based speach detector as Dr. Trayaurus",   desc: "Dr. Trayaurus is a fictional character in DanTDM's youtube videos, made spcifically for speech recognition pattern and answers freely like a common AI", img: "assets/images/projects/tray.jpg"},
    { title: "Tutored Web Development for Syntax Studios",   desc: "First online to tutor for international student", img: "assets/images/projects/tutor.jpg"},
    { title: "GTPServices",                     desc: "Portfolio for an accountancy professional. HTML, CSS, JavaScript.",           img: "assets/images/projects/gtpservices.png", url: "https://gtpservices.vercel.app/" },
    { title: "Personal Web Design",             desc: "A love letter website for a client, built with standard web tools.",         img: "assets/images/projects/jc.png",          url: "https://jc-sobrang-cute.vercel.app/" },
    { title: "Samurai Game",                    desc: "A browser samurai game adapted from an open-source GitHub template.",        img: "assets/images/projects/samurai.png",     url: "https://samurai-game-three.vercel.app/" },
    { title: "Health Awareness Website",        desc: "A health awareness site built to accompany a client's thesis presentation.", img: "assets/images/projects/health.png",      url: "https://health-webdev.vercel.app/" },
];

/* ── RENDER PREVIEW GRIDS (first 4 only) ── */
function buildPreviews() {
    const certGrid = document.getElementById('certPreviewGrid');
    certs.slice(0, 4).forEach(c => {
        certGrid.innerHTML += `
            <div class="preview-card" onclick="openPanel('certs')">
                <img src="${c.img}" alt="${c.title}" onerror="this.style.background='#2d2d2d';this.style.height='140px'">
                <div class="preview-card-body">
                    <div class="preview-card-title">${c.title}</div>
                    <div class="preview-card-sub">${c.issuer} · ${c.date}</div>
                </div>
            </div>`;
    });

    const projGrid = document.getElementById('projPreviewGrid');
    projects.slice(0, 4).forEach(p => {
        projGrid.innerHTML += `
            <div class="preview-card" onclick="openPanel('projects')">
                <img src="${p.img}" alt="${p.title}" onerror="this.style.background='#2d2d2d';this.style.height='140px'">
                <div class="preview-card-body">
                    <div class="preview-card-title">${p.title}</div>
                    <div class="preview-card-sub">${p.desc.substring(0, 55)}…</div>
                </div>
            </div>`;
    });
}

/* ── PANEL LOGIC ── */
function openPanel(type) {
    const panel  = document.getElementById('slidePanel');
    const overlay= document.getElementById('panelOverlay');
    const title  = document.getElementById('panelTitle');
    const body   = document.getElementById('panelBody');

    body.innerHTML = '';

    if (type === 'certs') {
        title.textContent = 'All Certificates';
        certs.forEach(c => {
            body.innerHTML += `
                <div class="panel-cert-item">
                    <img class="panel-cert-thumb" src="${c.img}" alt="${c.title}" onerror="this.style.background='#2d2d2d'">
                    <div class="panel-cert-info">
                        <div class="panel-cert-title">${c.title}</div>
                        <div class="panel-cert-issuer">${c.issuer}</div>
                        <div class="panel-cert-date">Issued ${c.date}</div>
                    </div>
                </div>`;
        });
    } else if (type === 'projects') {
        title.textContent = 'All Projects';
        projects.forEach(p => {
            body.innerHTML += `
                <div class="panel-project-item">
                    <img class="panel-project-img" src="${p.img}" alt="${p.title}" onerror="this.style.background='#2d2d2d'">
                    <div class="panel-project-body">
                        <div class="panel-project-title">${p.title}</div>
                        <div class="panel-project-desc">${p.desc}</div>
                        <a class="panel-project-link" href="${p.url}" target="_blank">View Project &rarr;</a>
                    </div>
                </div>`;
        });
    }

    panel.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closePanel() {
    document.getElementById('slidePanel').classList.remove('open');
    document.getElementById('panelOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePanel();
});

buildPreviews();
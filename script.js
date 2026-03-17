/* =====================================================
   AHMED MOHAMED — Premium Links Page Scripts
   ===================================================== */

// ── Footer year ──────────────────────────────────────
document.getElementById('year').textContent = `© ${new Date().getFullYear()} Ahmed Mohamed`;

// ── Preloader ─────────────────────────────────────────
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  setTimeout(() => {
    pre.style.opacity = '0';
    setTimeout(() => pre.style.display = 'none', 600);
  }, 600);
});

// ── Aurora Canvas Background ──────────────────────────
(function initAurora() {
  const canvas = document.getElementById('aurora');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0;
  const orbs = [
    { cx: 0.15, cy: 0.2, r: 0.45, color: [79, 142, 247],   speed: 0.0003, ox: 0.06, oy: 0.05 },
    { cx: 0.85, cy: 0.8, r: 0.4,  color: [6, 200, 216],    speed: 0.0004, ox: 0.08, oy: 0.06 },
    { cx: 0.5,  cy: 0.5, r: 0.35, color: [120, 60, 200],   speed: 0.0002, ox: 0.04, oy: 0.07 },
    { cx: 0.7,  cy: 0.2, r: 0.3,  color: [245, 180, 40],   speed: 0.0005, ox: 0.05, oy: 0.04 },
  ];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function draw() {
    ctx.clearRect(0, 0, W, H);
    // Dark base
    ctx.fillStyle = '#080c14';
    ctx.fillRect(0, 0, W, H);

    orbs.forEach(o => {
      const x  = (o.cx + Math.sin(t * o.speed * 1000 + o.cx * 10) * o.ox) * W;
      const y  = (o.cy + Math.cos(t * o.speed * 1000 + o.cy * 10) * o.oy) * H;
      const r  = o.r * Math.min(W, H);
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      const [r0, g0, b0] = o.color;
      grad.addColorStop(0,   `rgba(${r0},${g0},${b0},0.12)`);
      grad.addColorStop(0.5, `rgba(${r0},${g0},${b0},0.04)`);
      grad.addColorStop(1,   `rgba(${r0},${g0},${b0},0)`);
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    });

    // Subtle grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.018)';
    ctx.lineWidth = 0.5;
    const gridSize = 60;
    for (let x = 0; x < W; x += gridSize) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += gridSize) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    t++;
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── Role text cycling ─────────────────────────────────
(function initRoleCycle() {
  const roles = ['Frontend Developer', 'Full-Stack Developer', 'UI Enthusiast', 'Open to Work'];
  let idx = 0;
  const el = document.getElementById('role-text');
  if (!el) return;

  function nextRole() {
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
    setTimeout(() => {
      idx = (idx + 1) % roles.length;
      el.textContent = roles[idx];
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 350);
  }

  el.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
  setInterval(nextRole, 3200);
})();

// ── Staggered card entrance ───────────────────────────
(function staggerCards() {
  const cards = document.querySelectorAll('.link-card, .contact-bar');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease';
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 800 + i * 80);
  });
})();

// ── Magnetic hover effect on cards ───────────────────
document.querySelectorAll('.link-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    card.style.transform = `translateY(-3px) scale(1.005) rotateX(${-dy * 2}deg) rotateY(${dx * 2}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ══════════════════════════════════════════
   COSMIC CLASH AUCTION — app.js
   Vanilla JS equivalent of the React JSX
══════════════════════════════════════════ */

// ── DATA ──────────────────────────────────

const teams = [
  { name: "NOVA",    captain: "CIPHER X", color: "#FF6B35", glow: "#FF6B3566", emoji: "🌟" },
  { name: "VORTEX",  captain: "Mr Ferit", color: "#7B2FFF", glow: "#7B2FFF66", emoji: "🌀" },
  { name: "ZENITH",  captain: "LILESH",   color: "#00D4FF", glow: "#00D4FF66", emoji: "⚡" },
  { name: "TITAN",   captain: "Ayush",    color: "#FFD700", glow: "#FFD70066", emoji: "🏆" },
  { name: "INFERNO", captain: "Emperor",  color: "#FF2D55", glow: "#FF2D5566", emoji: "🔥" },
  { name: "BLAZE",   captain: "Akarsha",  color: "#FF8C00", glow: "#FF8C0066", emoji: "💥" },
  { name: "ECLIPSE", captain: "Vega",     color: "#9D4EDD", glow: "#9D4EDD66", emoji: "🌑" },
  { name: "AURORA",  captain: "Garima",   color: "#00FF88", glow: "#00FF8866", emoji: "🌈" },
];

const slots = [
  {
    id: 1,
    label: "SLOT 1 — ELITE",
    emoji: "🏆",
    base: 25,
    color: "#FFD700",
    bg: "linear-gradient(135deg, #2a1f00, #1a1200)",
    border: "#FFD700",
    players: ["Devil", "Purva", "Arpit", "Prattush", "Navya", "Morco", "Angel", "Felsper Smash"],
    ratings: ["19+","19+","19+","18+","18+","18+","18+","18+"]
  },
  {
    id: 2,
    label: "SLOT 2 — STRONG MID",
    emoji: "⚡",
    base: 20,
    color: "#00D4FF",
    bg: "linear-gradient(135deg, #001a2a, #001220)",
    border: "#00D4FF",
    players: ["Koi to hun","Aspirant","Coolie","Qween","Elvya","Theri","DuskyDynamo","Lavender"],
    ratings: ["18+","18+","18+","18+","17+","17+","16+","16+"]
  },
  {
    id: 3,
    label: "SLOT 3 — CORE",
    emoji: "💪",
    base: 12,
    color: "#00FF88",
    bg: "linear-gradient(135deg, #001a10, #001208)",
    border: "#00FF88",
    players: ["Shree","Batwoman","Ash 🧢","Rocky","Start Alpha","Tonmoy","Piyush","Soul","Eternity","Anu","Rohi","Doraemon","Phantom","Maple","Salu Bhai","Bachira"],
    ratings: ["16+","16+","16+","15+","15+","15+","15+","15+","15+","15+","15+","15+","15+","15+","15+","15+"]
  },
  {
    id: 4,
    label: "SLOT 4 — DEVELOPING",
    emoji: "🌱",
    base: 8,
    color: "#FF6B35",
    bg: "linear-gradient(135deg, #1a0a00, #120800)",
    border: "#FF6B35",
    players: ["Sanam","Kedar","Murari","Navdeep","Elara Elora","Sakura","Mr Tulip","Sharolet"],
    ratings: ["15+","14+","14+","14+","14+","14+","13+","15+"]
  }
];

const groupMessage =
`╔══════════════════════════════════════╗
         🏆 COSMIC CLASH AUCTION 🏆
╚══════════════════════════════════════╝

⚔️ 8 CAPTAINS. 40 PLAYERS. ONE CROWN.

🎯 THE RULES ARE SIMPLE. THE GAME IS NOT.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💼 WALLET: 150 COINS PER CAPTAIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 SLOT STRUCTURE & BASE PRICES:
🏆 SLOT 1 — ELITE        │ Base: 25 🪙
⚡ SLOT 2 — STRONG MID   │ Base: 20 🪙
💪 SLOT 3 — CORE         │ Base: 12 🪙
🌱 SLOT 4 — DEVELOPING   │ Base:  8 🪙

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📜 EACH CAPTAIN MUST PICK:
✅ 1 from SLOT 1
✅ 1 from SLOT 2
✅ 2 from SLOT 3
✅ 1 from SLOT 4
👑 + Captain himself = 6 per Team
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💀 NO MAX BID — NO SAFETY NET
💀 GO GREEDY = GO BANKRUPT
🧠 STRATEGY WINS. GREED KILLS.

Min safe spend = 77 coins
Your flex to fight = 73 coins
One wrong bid = 💸 GAME OVER

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌌 THE 8 COSMIC TEAMS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌟 Team NOVA      — Captain: CIPHER X
🌀 Team VORTEX    — Captain: Mr Ferit
⚡ Team ZENITH    — Captain: LILESH
🏆 Team TITAN     — Captain: Ayush
🔥 Team INFERNO   — Captain: Emperor
💥 Team BLAZE     — Captain: Akarsha
🌑 Team ECLIPSE   — Captain: Vega
🌈 Team AURORA    — Captain: Garima

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎮 MAY THE SMARTEST CAPTAIN WIN 👑
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;


// ── RENDER TEAMS ──────────────────────────

function renderTeams() {
  const grid = document.getElementById('teams-grid');
  grid.innerHTML = '';

  teams.forEach(t => {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.style.background = `linear-gradient(135deg, ${t.color}1a, #0d0d1a)`;
    card.style.border = `1px solid ${t.color}44`;
    card.style.boxShadow = `0 0 18px ${t.glow}`;

    card.innerHTML = `
      <div class="team-emoji">${t.emoji}</div>
      <div class="team-name" style="color:${t.color}">${t.name}</div>
      <div class="team-divider" style="background:${t.color}"></div>
      <div class="team-label">CAPTAIN</div>
      <div class="team-captain">${t.captain}</div>
    `;

    grid.appendChild(card);
  });
}


// ── RENDER SLOTS ──────────────────────────

function renderSlots() {
  const list = document.getElementById('slots-list');
  list.innerHTML = '';

  slots.forEach(s => {
    const card = document.createElement('div');
    card.className = 'slot-card';
    card.style.background = s.bg;
    card.style.border = `1px solid ${s.border}33`;
    card.style.boxShadow = `0 0 12px ${s.border}18`;

    // Header
    const header = document.createElement('div');
    header.className = 'slot-header';
    header.style.borderBottom = `1px solid ${s.border}22`;
    header.innerHTML = `
      <div class="slot-title" style="color:${s.color}">${s.emoji} ${s.label}</div>
      <div class="slot-badge" style="background:${s.color}18;border:1px solid ${s.border}44;color:${s.color}">
        Base ${s.base} 🪙
      </div>
    `;

    // Players grid
    const playersDiv = document.createElement('div');
    playersDiv.className = 'slot-players';

    s.players.forEach((p, i) => {
      const chip = document.createElement('div');
      chip.className = 'player-chip';
      chip.style.border = `1px solid ${s.border}18`;
      chip.innerHTML = `
        <span class="player-name">${p}</span>
        <span class="player-rating" style="color:${s.color}">${s.ratings[i]}</span>
      `;
      playersDiv.appendChild(chip);
    });

    // Footer
    const footer = document.createElement('div');
    footer.className = 'slot-footer';
    footer.textContent = `${s.id === 3 ? 'Pick 2 from this slot' : 'Pick 1 from this slot'} · ${s.players.length} players`;

    card.appendChild(header);
    card.appendChild(playersDiv);
    card.appendChild(footer);
    list.appendChild(card);
  });
}


// ── RENDER MESSAGE ────────────────────────

function renderMessage() {
  document.getElementById('group-message').textContent = groupMessage;
}


// ── TABS ──────────────────────────────────

function initTabs() {
  const buttons = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      buttons.forEach(b => b.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(`tab-${target}`).classList.add('active');
    });
  });
}


// ── COPY BUTTON ───────────────────────────

function initCopyBtn() {
  const btn = document.getElementById('copy-btn');

  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(groupMessage).then(() => {
      btn.textContent = '✅ COPIED! PASTE IN YOUR GROUP NOW!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = '📋 COPY GROUP MESSAGE';
        btn.classList.remove('copied');
      }, 2500);
    }).catch(() => {
      // Fallback for browsers that block clipboard
      const ta = document.createElement('textarea');
      ta.value = groupMessage;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);

      btn.textContent = '✅ COPIED! PASTE IN YOUR GROUP NOW!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = '📋 COPY GROUP MESSAGE';
        btn.classList.remove('copied');
      }, 2500);
    });
  });
}


// ── INIT ──────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderTeams();
  renderSlots();
  renderMessage();
  initTabs();
  initCopyBtn();
});

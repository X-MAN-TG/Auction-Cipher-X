/* ══════════════════════════════════════
   COSMIC CLASH — app.js
   Crown Reapers · March 5–15, 2026
══════════════════════════════════════ */

// ══════════════════════════════════════
// DATA
// ══════════════════════════════════════

const TEAMS = [
  { name:"NOVA",    captain:"CIPHER X",        emoji:"🌟", color:"#FF6B35", glow:"#FF6B3544",
    members:["QUEEN","DEVIL","ROCKY","STAR ALPHA","SANAM"] },
  { name:"VORTEX",  captain:"Mr Ferit (ANSH)",  emoji:"🌀", color:"#7B2FFF", glow:"#7B2FFF44",
    members:["SEYRAN","FELSPR","SOUL","LAVENDER","KEDAR"] },
  { name:"ZENITH",  captain:"LILESH",            emoji:"⚡", color:"#00D4FF", glow:"#00D4FF44",
    members:["KOI TO HU","NAVYA","ETERNITY","SALU BHAI","TULIP"] },
  { name:"TITAN",   captain:"Ayushh",            emoji:"🏆", color:"#FFD700", glow:"#FFD70044",
    members:["PURVA","ELVYA","TONMOY","PIYUSH","MURARI"] },
  { name:"INFERNO", captain:"Emperor (Aagastya)",emoji:"🔥", color:"#FF2D55", glow:"#FF2D5544",
    members:["MARCO","ASPIRANT","DOREMON","PHANTOM","ELARA"] },
  { name:"BLAZE",   captain:"AAKARSH",           emoji:"💥", color:"#FF8C00", glow:"#FF8C0044",
    members:["ROHII","SHAROLET","BACHIRA","DUSKY","ANGEL"] },
  { name:"ECLIPSE", captain:"VEGA",              emoji:"🌑", color:"#9D4EDD", glow:"#9D4EDD44",
    members:["ARPIT","COOKIE","ANU","SHREE","SAKURA"] },
  { name:"AURORA",  captain:"GARIMA",            emoji:"🌈", color:"#00FF88", glow:"#00FF8844",
    members:["PRATTUSH","THERI","ASH","BATWOMAN","NAVDEEP"] },
];

const LEAGUE_SCHEDULE = [
  { day:1, date:"March 5",  matches:[
    ["🌟 NOVA","🌈 AURORA"], ["🌀 VORTEX","🌑 ECLIPSE"],
    ["⚡ ZENITH","💥 BLAZE"], ["🏆 TITAN","🔥 INFERNO"] ]},
  { day:2, date:"March 6",  matches:[
    ["🌟 NOVA","🌑 ECLIPSE"], ["🌀 VORTEX","🔥 INFERNO"],
    ["⚡ ZENITH","🏆 TITAN"], ["💥 BLAZE","🌈 AURORA"] ]},
  { day:3, date:"March 7",  matches:[
    ["🌟 NOVA","💥 BLAZE"], ["🌀 VORTEX","⚡ ZENITH"],
    ["🏆 TITAN","🌈 AURORA"], ["🔥 INFERNO","🌑 ECLIPSE"] ]},
  { day:4, date:"March 8",  matches:[
    ["🌟 NOVA","🔥 INFERNO"], ["🌀 VORTEX","🌈 AURORA"],
    ["⚡ ZENITH","🌑 ECLIPSE"], ["🏆 TITAN","💥 BLAZE"] ]},
  { day:5, date:"March 9",  matches:[
    ["🌟 NOVA","🏆 TITAN"], ["🌀 VORTEX","💥 BLAZE"],
    ["⚡ ZENITH","🔥 INFERNO"], ["🌑 ECLIPSE","🌈 AURORA"] ]},
  { day:6, date:"March 10", matches:[
    ["🌟 NOVA","⚡ ZENITH"], ["🌀 VORTEX","🏆 TITAN"],
    ["🔥 INFERNO","🌈 AURORA"], ["💥 BLAZE","🌑 ECLIPSE"] ]},
  { day:7, date:"March 11", matches:[
    ["🌟 NOVA","🌀 VORTEX"], ["⚡ ZENITH","🌈 AURORA"],
    ["🏆 TITAN","🌑 ECLIPSE"], ["🔥 INFERNO","💥 BLAZE"] ]},
];

const RULES = [
  {
    title: "Focus Duration Rule",
    emoji: "⏱️",
    body: `The maximum continuous focus duration is strictly limited to <span class="rule-highlight">5 hours</span>. If a participant exceeds this limit, only <span class="rule-highlight">50% of the total study time</span> of that session will be counted.`
  },
  {
    title: "Day-Off Policy",
    emoji: "🌙",
    body: `Only <span class="rule-highlight">1 day off</span> is permitted during the entire challenge period. On the approved day off, the participant will receive study hours equal to their <span class="rule-highlight">previous month's average</span> study hours. Any additional or unofficial day off will not be accepted.`
  },
  {
    title: "Result Margin Rule",
    emoji: "⚖️",
    body: `If the difference between the total study time of two competing teams is within <span class="rule-highlight">±5 minutes</span>, the result shall be officially declared a <span class="rule-highlight">Draw</span>. This decision is final and not subject to dispute.`
  },
  {
    title: "Technical Glitches & Record Verification",
    emoji: "🔧",
    body: `In case of technical glitches, missing records, or application errors, only <span class="rule-highlight">clear and verifiable proof</span> submitted by the participant will be considered. The organizers reserve the full right to accept or reject such proof. All decisions made by the organizers will be <span class="rule-highlight">final and binding</span>.`
  },
  {
    title: "Timer Regulation",
    emoji: "🕐",
    body: `All recorded study sessions must be within a <span class="rule-highlight">24-hour period</span>. Any session violating this rule will be considered invalid and removed from the record.`
  },
  {
    title: "Daily Point Update Rule",
    emoji: "📋",
    body: `The team captain or at least one team member must submit the total study hours of their team for the previous day before <span class="rule-highlight">2:00 PM</span>. Failure to submit within the deadline may result in <span class="rule-highlight">disqualification of that day's score</span>.`
  },
  {
    title: "Snap Bonus — Steal Deal 📸",
    emoji: "📸",
    body: `If <span class="rule-highlight">all 6 members</span> of a team send a study snap, the team earns <span class="rule-highlight">+1 bonus point</span> for that day. If even a single member misses the snap, the team receives <span class="rule-highlight">0 bonus points</span>. No partial credit.`
  },
  {
    title: "Point Calculation",
    emoji: "📊",
    body: `Each team can record a maximum of <span class="rule-highlight">120 hours per day</span> (20hrs × 6 members = 120 max). The team with the higher total study hours wins the day and earns <span class="rule-highlight">3 points</span>. A draw earns <span class="rule-highlight">1 point each</span>. A loss earns <span class="rule-highlight">0 points</span>.<br><br>
    Example: Team A = 99:53:57 vs Team B = 107:22:10 → Team B wins and gets 3 points.`
  },
  {
    title: "Duration & Leave Policy",
    emoji: "🚪",
    body: `The challenge runs from <span class="rule-highlight">March 5 – March 15</span>. No participant is allowed to leave mid-challenge. In case of a genuine emergency, the participant must <span class="rule-highlight">submit a replacement member</span> to their team.<br><br>
    <strong style="color:#FF2D55">⚠️ Note:</strong> Participants may study beyond 19:59 hrs, but <span class="rule-highlight">recording beyond this limit is strictly prohibited</span>. Any violation will result in complete nullification of the team's daily score.`
  },
];

const AWARDS = [
  {
    icon: "👑",
    name: "Best Captain Award",
    desc: "The captain whose team punched above their auction value. Made smart bids, rotated members wisely, and kept morale alive till the very last match. Not just about winning — about HOW you led.",
    prize: "🎬 YouTube Premium 1 Month"
  },
  {
    icon: "⚡",
    name: "Best Performer Award",
    desc: "The single player across all 48 with the most consistent high output. Showed up every single day, never had an off day. The name everyone remembers at the end of 11 days.",
    prize: "🎬 YouTube Premium 1 Month"
  },
  {
    icon: "🧠",
    name: "Most Focused Member Award",
    desc: "Highest focus-to-time ratio across the challenge. Completed the most tasks in the least possible time. Quality over quantity — every session was deliberate, sharp, and counted. Smart effort beats long hours.",
    prize: "🎬 YouTube Premium 1 Month"
  },
  {
    icon: "🛡️",
    name: "Most Loyal Warrior Award",
    desc: "Never missed a single day. Present for every match, zero absences across all 11 days. Cheered their team even in losses. The heartbeat nobody noticed but everybody needed. Loyalty over 11 straight days.",
    prize: "🎬 YouTube Premium 1 Month"
  },
  {
    icon: "🌱",
    name: "Best Underdog Award",
    desc: "Lowest expected, highest delivered. Joined as a Slot 3 or 4 player and outperformed Slot 1 elites. Made the biggest gap between expectation and reality. The one who silenced every doubt about them.",
    prize: "🎬 YouTube Premium 1 Month"
  },
  {
    icon: "🎯",
    name: "CIPHER X Wildcard Pick",
    desc: "No parameters. No formula. No voting. Cipher X personally selects one member from all 48 who left a mark that no award category could capture. One moment, one match, one act that stood out beyond everything. Purely instinct. Purely deserved.",
    prize: "🎬 YouTube Premium 1 Month"
  },
];

// ══════════════════════════════════════
// RENDER TEAMS
// ══════════════════════════════════════

function renderTeams() {
  const grid = document.getElementById('teams-grid');
  TEAMS.forEach(t => {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.style.cssText = `
      background: linear-gradient(150deg, ${t.color}18, #0d0d1a 70%);
      border: 1px solid ${t.color}33;
      box-shadow: 0 0 22px ${t.glow};
    `;
    card.innerHTML = `
      <div class="team-emoji">${t.emoji}</div>
      <div class="team-name" style="color:${t.color}">${t.name}</div>
      <div class="team-divider" style="background:${t.color}"></div>
      <div class="captain-label">Captain</div>
      <div class="captain-name">${t.captain}</div>
      <div class="members-list">
        ${t.members.map(m => `<div class="member-chip">• ${m}</div>`).join('')}
      </div>
    `;
    grid.appendChild(card);
  });
}

// ══════════════════════════════════════
// RENDER SCHEDULE
// ══════════════════════════════════════

function renderLeagueSchedule() {
  const wrap = document.getElementById('schedule-content');
  wrap.innerHTML = '';

  const info = document.createElement('div');
  info.className = 'phase-info';
  info.innerHTML = `
    <div class="phase-info-title" style="color:#FFD700">📋 Phase 1 — League Stage</div>
    <div class="phase-info-desc">
      Days 1–7 &nbsp;|&nbsp; March 5–11 &nbsp;|&nbsp; 4 matches/day<br>
      Every team plays every other team exactly once. All 8 teams play daily — zero rest days.<br>
      <strong style="color:#FFD700">Win = 3pts &nbsp;·&nbsp; Draw = 1pt &nbsp;·&nbsp; Loss = 0pts</strong>
    </div>
  `;
  wrap.appendChild(info);

  LEAGUE_SCHEDULE.forEach(d => {
    const block = document.createElement('div');
    block.className = 'day-block';
    block.innerHTML = `
      <div class="day-header">
        <div class="day-title">📅 DAY ${d.day}</div>
        <div class="day-date">${d.date}</div>
      </div>
      ${d.matches.map((m, i) => `
        <div class="match-row">
          <div class="match-num">M${i+1}</div>
          <div class="match-team left">${m[0]}</div>
          <div class="match-vs">VS</div>
          <div class="match-team right">${m[1]}</div>
        </div>
      `).join('')}
    `;
    wrap.appendChild(block);
  });
}

function renderQuarterSchedule() {
  const wrap = document.getElementById('schedule-content');
  wrap.innerHTML = `
    <div class="phase-info">
      <div class="phase-info-title" style="color:#FF2D55">⚔️ Phase 2 — Quarterfinals</div>
      <div class="phase-info-desc">
        Day 8 &nbsp;|&nbsp; March 12 &nbsp;|&nbsp; All 8 teams play<br>
        Seeded by League standings. Close-rank matchups for maximum intensity.<br>
        <strong style="color:#FF2D55">⚠️ Nobody eliminated yet — losers get a second life!</strong>
      </div>
      <div class="phase-bracket">
<span class="bracket-tag tag-win">QF-A</span> Rank 1  ⚔️  Rank 2
<span class="bracket-tag tag-win">QF-B</span> Rank 3  ⚔️  Rank 4
<span class="bracket-tag tag-win">QF-C</span> Rank 5  ⚔️  Rank 6
<span class="bracket-tag tag-win">QF-D</span> Rank 7  ⚔️  Rank 8

<span style="color:#00FF88">✅ Winners</span> → Safe Lane (straight to Second Chance Day Winner bracket)
<span style="color:#FF8C00">😤 Losers</span>  → One more chance on Day 9
<span style="color:#FF2D55">💀 Eliminated</span> → Nobody yet!
      </div>
    </div>
  `;
}

function renderSecondChanceSchedule() {
  const wrap = document.getElementById('schedule-content');
  wrap.innerHTML = `
    <div class="phase-info">
      <div class="phase-info-title" style="color:#9D4EDD">🔁 Phase 3 — Second Chance Day</div>
      <div class="phase-info-desc">
        Day 9 &nbsp;|&nbsp; March 13 &nbsp;|&nbsp; All 8 teams play — last day all 8 together<br>
        Winners lane locks semis. Losers lane is pure survival — win or go home.
      </div>
      <div class="phase-bracket">
<strong style="color:#00FF88">✅ WINNERS LANE — Lock Semis</strong>
<span class="bracket-tag tag-win">W1</span> QF-A Winner  ⚔️  QF-B Winner  → Semis ✅
<span class="bracket-tag tag-win">W2</span> QF-C Winner  ⚔️  QF-D Winner  → Semis ✅

<strong style="color:#FF2D55">💀 LOSERS LANE — Win or Go Home</strong>
<span class="bracket-tag tag-lose">L1</span> QF-A Loser   ⚔️  QF-B Loser
<span class="bracket-tag tag-lose">L2</span> QF-C Loser   ⚔️  QF-D Loser

L1 Winner → Semis ✅   |   L1 Loser → <span class="bracket-tag tag-elim">ELIMINATED 💀</span>
L2 Winner → Semis ✅   |   L2 Loser → <span class="bracket-tag tag-elim">ELIMINATED 💀</span>
W1 Loser  → <span class="bracket-tag tag-elim">ELIMINATED 💀</span>
W2 Loser  → <span class="bracket-tag tag-elim">ELIMINATED 💀</span>

Total eliminated after Day 9: <strong style="color:#FF2D55">4 teams</strong>
      </div>
    </div>
  `;
}

function renderSemisSchedule() {
  const wrap = document.getElementById('schedule-content');
  wrap.innerHTML = `
    <div class="phase-info">
      <div class="phase-info-title" style="color:#FF6B35">🔥 Phase 4 — Semifinals</div>
      <div class="phase-info-desc">
        Day 10 &nbsp;|&nbsp; March 14 &nbsp;|&nbsp; Only 4 teams remain<br>
        Two matches. No mercy. The final 2 are decided here.
      </div>
      <div class="phase-bracket">
<span class="bracket-tag tag-win">SF1</span> W1 Winner  ⚔️  L1 Winner
<span class="bracket-tag tag-win">SF2</span> W2 Winner  ⚔️  L2 Winner

SF1 Winner → Grand Final 👑
SF1 Loser  → <span class="bracket-tag tag-elim">ELIMINATED 💀</span>

SF2 Winner → Grand Final 👑
SF2 Loser  → <span class="bracket-tag tag-elim">ELIMINATED 💀</span>
      </div>
    </div>
  `;
}

function renderFinalSchedule() {
  const wrap = document.getElementById('schedule-content');
  wrap.innerHTML = `
    <div class="phase-info" style="border-color:rgba(255,215,0,0.3);background:linear-gradient(135deg,#1a1400,#0d0d1a)">
      <div class="phase-info-title" style="color:#FFD700;font-size:18px;text-align:center">👑 Phase 5 — GRAND FINAL</div>
      <div class="phase-info-desc" style="text-align:center">
        Day 11 &nbsp;|&nbsp; March 15 &nbsp;|&nbsp; 2 Teams &nbsp;|&nbsp; 1 Match &nbsp;|&nbsp; 1 Champion
      </div>
      <div class="phase-bracket" style="text-align:center;font-size:14px;letter-spacing:2px">

🏆 SF1 Winner  ⚔️  SF2 Winner 🏆

<strong style="color:#FFD700;font-size:13px">THE CROWN IS DECIDED HERE 👑</strong>

🥇 Winner  = COSMIC CLASH CHAMPION
🥈 Runner  = Legendary Finalist

<span style="color:#888;font-size:11px">All individual awards announced after the match</span>
      </div>
    </div>
  `;
}

const scheduleRenderers = {
  league:       renderLeagueSchedule,
  quarters:     renderQuarterSchedule,
  secondchance: renderSecondChanceSchedule,
  semis:        renderSemisSchedule,
  final:        renderFinalSchedule,
};

function initScheduleTabs() {
  const btns = document.querySelectorAll('#phase-tabs .phase-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      scheduleRenderers[btn.dataset.phase]();
    });
  });
  renderLeagueSchedule();
}

// ══════════════════════════════════════
// RENDER STATS
// ══════════════════════════════════════

function renderLeagueTable() {
  const wrap = document.getElementById('stats-content');
  wrap.innerHTML = `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>TEAM</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          ${TEAMS.map((t, i) => `
            <tr class="rank-${i+1}">
              <td><span class="rank-num">${i+1}</span></td>
              <td>${t.emoji} ${t.name}</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td class="pts-val">—</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <div class="stats-note">
      <span class="big">📊</span>
      League is underway!<br>
      Table will update daily after each match day.<br>
      <span style="color:#555;font-size:11px">Last updated: March 5 · Day 1</span>
    </div>
  `;
}

function renderPendingStats(label) {
  const wrap = document.getElementById('stats-content');
  wrap.innerHTML = `
    <div class="stats-note">
      <span class="big">⏳</span>
      ${label} results will appear here<br>once that phase begins.
    </div>
  `;
}

const statsRenderers = {
  standing: () => renderLeagueTable(),
  qf: () => renderPendingStats('Quarterfinal'),
  sc: () => renderPendingStats('Second Chance Day'),
  sf: () => renderPendingStats('Semifinal'),
  gf: () => renderPendingStats('Grand Final'),
};

function initStatsTabs() {
  const btns = document.querySelectorAll('#stats-tabs .phase-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      statsRenderers[btn.dataset.sphase]();
    });
  });
  renderLeagueTable();
}

// ══════════════════════════════════════
// RENDER RULES
// ══════════════════════════════════════

function renderRules() {
  const list = document.getElementById('rules-list');
  list.innerHTML = '<div class="rules-list"></div>';
  const ul = list.querySelector('.rules-list');

  RULES.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'rule-card';
    card.innerHTML = `
      <div class="rule-header">
        <div class="rule-num">${i + 1}</div>
        <div class="rule-title">${r.emoji} ${r.title}</div>
        <div class="rule-arrow">▼</div>
      </div>
      <div class="rule-body">${r.body}</div>
    `;
    card.querySelector('.rule-header').addEventListener('click', () => {
      card.classList.toggle('open');
    });
    ul.appendChild(card);
  });
}

// ══════════════════════════════════════
// RENDER REWARDS
// ══════════════════════════════════════

function renderRewards() {
  const wrap = document.getElementById('rewards-content');
  wrap.innerHTML = `
    <!-- Champion Team Reward -->
    <div class="reward-main">
      <div class="reward-main-icon">🎓</div>
      <div class="reward-main-title">🥇 CHAMPION TEAM REWARD</div>
      <div class="reward-main-sub">
        All 6 members of the Winning Team receive an exclusive<br>
        <strong style="color:#FFD700">Studicon Reward</strong><br>
        Declared &amp; delivered on Final Day — March 15
      </div>
      <div class="reward-sponsor">Sponsored by <span>⚡ LILESH</span></div>
    </div>

    <!-- Individual Awards -->
    <div class="reward-main" style="border-color:rgba(0,212,255,0.25);background:linear-gradient(135deg,#001a2a,#0d0d1a)">
      <div class="reward-main-icon">🌟</div>
      <div class="reward-main-title" style="color:#00D4FF">🌟 INDIVIDUAL STAR AWARDS</div>
      <div class="reward-main-sub">
        5 members from all 48 participants win<br>
        <strong style="color:#00D4FF">🎬 YouTube Premium Standard — 1 Month Each</strong><br>
        <span style="color:#FF8C00">⚠️ Open to ALL 48 — not just the winning team!</span>
      </div>
      <div class="reward-sponsor">Sponsored by <span style="color:#FF6B35">🌟 CIPHER X</span></div>
    </div>

    <div class="awards-title">🏅 THE 5 AWARD CATEGORIES + 1 WILDCARD</div>

    ${AWARDS.map(a => `
      <div class="award-card">
        <div class="award-icon">${a.icon}</div>
        <div class="award-info">
          <div class="award-name">${a.name}</div>
          <div class="award-desc">${a.desc}</div>
          <span class="award-prize">${a.prize}</span>
        </div>
      </div>
    `).join('')}

    <div class="phase-info" style="margin-top:14px;text-align:center">
      <div style="font-size:12px;color:#888;line-height:2">
        📅 All awards revealed LIVE on <strong style="color:#FFD700">March 15</strong><br>
        Right after the Grand Final concludes<br>
        🎓 Studicon + 🎬 YouTube Premium handed on the same day<br><br>
        <strong style="color:#e0e0f0">✨ Win as a team. Shine as an individual.<br>Every match. Every point. Every day — IT ALL COUNTS 👑</strong>
      </div>
    </div>
  `;
}

// ══════════════════════════════════════
// MAIN TABS
// ══════════════════════════════════════

function initMainTabs() {
  const btns = document.querySelectorAll('.tabs .tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
    });
  });
}

// ══════════════════════════════════════
// INIT
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  renderTeams();
  initScheduleTabs();
  initStatsTabs();
  renderRules();
  renderRewards();
  initMainTabs();
});

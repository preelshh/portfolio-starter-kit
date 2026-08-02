// theme toggle
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;

const saved = localStorage.getItem('theme') || 'light';
applyTheme(saved);

if (toggle) {
  toggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  if (toggle) {
    // ○ = light mode icon, ● = dark mode icon
    toggle.textContent = theme === 'dark' ? '●' : '○';
  }
}


// calendar widget — only runs if the calendar exists on this page
(function buildCalendar() {
  const header = document.getElementById('calHeader');
  const grid = document.getElementById('calGrid');
  if (!header || !grid) return;

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();

  const monthName = now.toLocaleString('en-US', { month: 'long' });
  header.textContent = monthName + ' ' + year;

  const dayLabels = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
  dayLabels.forEach(d => {
    const el = document.createElement('div');
    el.className = 'cal-day-label';
    el.textContent = d;
    grid.appendChild(el);
  });

  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDayOfWeek; i++) {
    const empty = document.createElement('div');
    empty.className = 'cal-day empty';
    grid.appendChild(empty);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const cell = document.createElement('div');
    cell.className = 'cal-day' + (d === today ? ' today' : '');
    cell.textContent = d;
    grid.appendChild(cell);
  }
})();


// terminal window close button
(function initTerminal() {
  const closeBtn = document.querySelector('.tl-dot.red');
  const terminal = document.querySelector('.terminal');

  if (closeBtn && terminal) {
    closeBtn.addEventListener('click', () => {
      terminal.style.display = 'none';
    });
  }
})();

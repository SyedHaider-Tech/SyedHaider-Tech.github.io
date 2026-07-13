/* ============================================================
   INSIGHTS PAGE — builds filter pills + article grid from
   window.ARTICLE_INDEX (content/articles.js). No server required.
   ============================================================ */

const FILTERS = [
  { key: 'all',       label: 'All Content' },
  { key: 'technical', label: 'Technical Breakdowns' },
  { key: 'thesis',    label: 'Investment Theses / Deal Memos' },
];

const fmtDate = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

const ALL = (window.ARTICLE_INDEX || []).slice().sort((a, b) => b.date.localeCompare(a.date));
let active = 'all';

function countFor(key) {
  return key === 'all' ? ALL.length : ALL.filter(a => a.category === key).length;
}

function renderFilters() {
  const bar = document.getElementById('filters');
  bar.innerHTML = FILTERS.map(f =>
    `<button class="filter${f.key === active ? ' is-active' : ''}" data-key="${f.key}">
       ${f.label} <span class="filter__count">${countFor(f.key)}</span>
     </button>`
  ).join('');
  bar.querySelectorAll('.filter').forEach(b =>
    b.addEventListener('click', () => { active = b.dataset.key; renderFilters(); renderGrid(); })
  );
}

function renderGrid() {
  const grid = document.getElementById('grid');
  const list = active === 'all' ? ALL : ALL.filter(a => a.category === active);
  grid.innerHTML = list.map(a => `
    <a class="card article" href="articles/${a.slug}.html">
      <div class="article__meta">
        <span class="pill ${a.category === 'thesis' ? 'pill--thesis' : 'pill--technical'}">${a.tag}</span>
        <span class="article__date">${fmtDate(a.date)}</span>
      </div>
      <h3 class="article__title">${a.title}</h3>
      <p class="article__summary justify">${a.summary}</p>
      <span class="article__more">Read Analysis →</span>
    </a>`
  ).join('');
}

document.addEventListener('DOMContentLoaded', () => { renderFilters(); renderGrid(); });

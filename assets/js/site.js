/* ============================================================
   Shared chrome: navbar + footer injected into every page.
   Add or rename a nav link ONCE, here.
   Each page sets <body data-page="insights"> to mark the active tab.
   ============================================================ */

const P = location.pathname.includes('/articles/') ? '../' : '';

const NAV_LINKS = [
  { href: 'about.html',    label: 'About & Framework',  page: 'about'    },
  { href: 'insights.html', label: 'Insights',           page: 'insights' },
  { href: 'venture.html',  label: 'Venture & Advisory', page: 'venture'  },
];

const BRAND_NAME = 'Dr. Syed Haider';
const BRAND_SUB  = 'Technology Commercialization Leader';

function renderChrome() {
  const active = document.body.dataset.page || '';

  // ---- Navbar ----
  const links = NAV_LINKS.map(l =>
    `<a href="${P}${l.href}"${l.page === active ? ' class="is-active"' : ''}>${l.label}</a>`
  ).join('');

  const header = document.createElement('header');
  header.className = 'nav';
  header.innerHTML = `
    <nav class="nav__inner">
      <a class="brand" href="${P}index.html">
        <span class="brand__mark">SH</span>
        <span class="brand__name"><b>${BRAND_NAME}</b><span>${BRAND_SUB}</span></span>
      </a>
      <div class="nav__links">${links}</div>
    </nav>`;
  document.body.prepend(header);

  // ---- Footer ----
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="footer__inner">
      <div>
        <b>${BRAND_NAME}</b>
        <div class="sub">Deep-Tech Techno-Commercial Advisor &amp; Investor</div>
      </div>
      <div class="footer__links">
        <a href="${P}about.html">About</a>
        <a href="${P}insights.html">Insights</a>
        <a href="${P}venture.html">Venture</a>
      </div>
      <span class="copy">© ${new Date().getFullYear()} · All rights reserved</span>
    </div>`;
  document.body.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', renderChrome);

/* =========================================================================
   Goshtasb Shahriari Mehr — portfolio runtime
   ========================================================================= */
(() => {
  'use strict';
  const P = window.PROFILE;
  const root = document.body;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const coarse = matchMedia('(hover: none)');
  const pad = n => String(n).padStart(2, '0');

  /* ---------------- reveal (hoisted: used during first project render) ---------------- */
  let revealObserver;
  function observeReveals(scope = document) {
    revealObserver = revealObserver || new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); }
    }), { threshold: 0.06, rootMargin: '0px 0px -4% 0px' });
    $$('.reveal:not(.in)', scope).forEach(el => revealObserver.observe(el));
  }

  /* ---------------- theme ---------------- */
  try {
    const saved = localStorage.getItem('gsm-theme');
    if (saved) root.dataset.theme = saved;
  } catch (e) { /* private mode */ }
  $$('[data-theme-toggle]').forEach(btn => {
    const sync = () => btn.setAttribute('aria-label', `Switch to ${root.dataset.theme === 'dark' ? 'light' : 'dark'} mode`);
    sync();
    btn.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('gsm-theme', root.dataset.theme); } catch (e) { }
      sync();
    });
  });

  /* ---------------- mobile menu ---------------- */
  $$('[data-menu]').forEach(btn => {
    const nav = document.getElementById(btn.getAttribute('aria-controls'));
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      nav?.classList.toggle('is-open', open);
    });
    nav?.addEventListener('click', e => {
      if (e.target.closest('a')) { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
    });
    document.addEventListener('click', e => {
      if (!e.target.closest('.topbar')) { btn.setAttribute('aria-expanded', 'false'); nav?.classList.remove('is-open'); }
    });
  });

  /* ---------------- hero reels ---------------- */
  const hero = $('[data-hero]');
  if (hero && P.reels?.length) {
    const el = {
      title: $('[data-reel-title]', hero), em: $('[data-reel-em]', hero), body: $('[data-reel-body]', hero),
      label: $('[data-reel-label]', hero), count: $('[data-reel-count]', hero), bar: $('[data-reel-bar]', hero),
      chips: $('[data-reel-chips]', hero)
    };
    const slides = ['coastal-fieldwork.webp', 'hero-ml-documentary.webp', 'hero-abm-jacksonville.webp', 'hero-llm-workstation.webp'];
    const viz = [
      '<path class="draw" d="M70 555C250 490 310 570 470 430S745 260 1110 145"/><g class="nodes"><circle cx="70" cy="555" r="7"/><circle cx="470" cy="430" r="7"/><circle cx="760" cy="250" r="7"/><circle cx="1110" cy="145" r="7"/></g>',
      '<g class="tiles"><path d="M75 90h245v180H75zM340 90h245v180H340zM605 90h245v180H605zM870 90h245v180H870z"/><path d="M75 295h245v180H75zM340 295h245v180H340zM605 295h245v180H605zM870 295h245v180H870z"/></g><path class="draw" d="M90 510C250 360 285 455 430 300s280 50 420-85 170-40 280-120"/>',
      '<g class="network"><path d="M80 570L260 455 430 535 610 340 790 430 965 245 1120 310M260 455L300 230 610 340 690 120 965 245"/></g><g class="agents"><circle cx="80" cy="570" r="8"/><circle cx="260" cy="455" r="8"/><circle cx="430" cy="535" r="8"/><circle cx="610" cy="340" r="8"/><circle cx="790" cy="430" r="8"/><circle cx="965" cy="245" r="8"/><circle cx="1120" cy="310" r="8"/></g>',
      '<g class="network"><path d="M95 345L260 180 450 290 615 125 790 270 970 150 1110 345 970 530 790 430 615 575 450 430 260 535 95 345M260 180L260 535M450 290L450 430M615 125L615 575M790 270L790 430M970 150L970 530"/></g><g class="agents"><circle cx="95" cy="345" r="8"/><circle cx="260" cy="180" r="8"/><circle cx="450" cy="290" r="8"/><circle cx="615" cy="125" r="8"/><circle cx="790" cy="270" r="8"/><circle cx="970" cy="150" r="8"/><circle cx="1110" cy="345" r="8"/></g>'
    ];
    hero.insertAdjacentHTML('afterbegin', '<svg class="hero-viz" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true"></svg>');
    const vizEl = $('.hero-viz', hero);
    let index = 0, timer;
    const schedule = () => {
      clearInterval(timer);
      if (!reduced.matches && !document.hidden) timer = setInterval(() => paint(index + 1, false), 7000);
    };
    const paint = (next, reset = true) => {
      index = (next + P.reels.length) % P.reels.length;
      const r = P.reels[index];
      el.title.textContent = r.title;
      el.em.textContent = r.titleEm;
      el.body.textContent = r.body;
      el.label.textContent = r.label;
      el.count.textContent = `${pad(index + 1)} / ${pad(P.reels.length)}`;
      if (el.chips) el.chips.innerHTML = (r.skills || []).map(s => `<span>${esc(s)}</span>`).join('');
      hero.style.setProperty('--hero-image', `url('${new URL('shared/img/' + slides[index], location.href).href}')`);
      hero.style.setProperty('--reel-accent', r.color);
      vizEl.innerHTML = viz[index];
      el.bar?.style.setProperty('--progress', `${((index + 1) / P.reels.length) * 100}%`);
      $$('[data-reel]', hero).forEach((b, i) => b.setAttribute('aria-current', i === index ? 'true' : 'false'));
      if (reset) schedule();
    };
    $$('[data-reel]', hero).forEach((b, i) => b.addEventListener('click', () => paint(i)));
    $('[data-next]', hero)?.addEventListener('click', () => paint(index + 1));
    hero.addEventListener('pointerenter', () => clearInterval(timer));
    hero.addEventListener('pointerleave', schedule);
    hero.addEventListener('focusin', () => clearInterval(timer));
    hero.addEventListener('focusout', schedule);
    document.addEventListener('visibilitychange', schedule);
    // preload next slide images
    slides.forEach(s => { const i = new Image(); i.src = new URL('shared/img/' + s, location.href).href; });
    paint(0);
  }

  /* ---------------- static content render ---------------- */
  const set = (sel, html) => { const n = $(sel); if (n) n.innerHTML = html; };

  set('#bio', P.bio.map(x => `<p>${esc(x)}</p>`).join(''));

  set('#profile-facts', [
    ['Now', `${esc(P.currentRole.role)}, ${esc(P.currentRole.org)}`],
    ['Based in', esc(P.location)],
    ['Doctorate', 'Defended August 2026'],
    ['Open to', 'ML / AI engineering · geospatial data science']
  ].map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join(''));

  set('#method-list', P.interests.map((x, i) => {
    const d = P.axisDetails[x.label];
    return `<button class="row reveal" data-method="${esc(x.label)}">
      <span class="num">${pad(i + 1)}</span>
      <h3>${esc(x.label)}</h3>
      <p>${esc(d?.one || x.note)}</p>
      <span class="open">Open record ↗</span></button>`;
  }).join(''));

  set('#timeline', '<span class="timeline-cap" aria-hidden="true">↑</span>' + P.education.map(x =>
    `<article class="degree"><span>${esc(x.years)} · ${esc(x.school)}</span><b>${esc(x.degree)}</b><p>${esc(x.note)}</p></article>`
  ).join(''));

  set('#lab-list', P.affiliationsDetailed.map((x, i) =>
    `<button class="row reveal" data-lab="${esc(x.key)}">
      <span class="num">${pad(i + 1)}</span>
      <h3><span class="sub">${esc(x.years)}</span>${esc(x.full)}</h3>
      <p><strong>${esc(x.role)}</strong><br>${esc(x.blurb)}</p>
      <span class="open">Open record ↗</span></button>`
  ).join(''));

  set('#paper-list', P.publications.map((x, i) => {
    const links = [
      x.doi && { label: 'DOI ↗', url: x.doi },
      x.link && { label: (x.linkLabel || 'Link') + ' ↗', url: x.link },
      x.pdfUrl && { label: 'PDF ↓', url: x.pdfUrl }
    ].filter(Boolean);
    return `<article class="paper reveal"><span class="num">${esc(x.year)}</span>
      <h3>${esc(x.title)}</h3>
      <p class="authors">${esc(x.authors)}<em class="venue">${esc(x.venue)}</em></p>
      <div class="links">${links.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${l.label}</a>`).join('')}</div>
    </article>`;
  }).join(''));

  set('#prep-list', P.inPreparation.map(x =>
    `<li>${esc(x.title)}<b>${esc(x.status)}</b></li>`).join(''));

  set('#teaching-list', P.teaching.map(x =>
    `<article class="teach-row"><b>${esc(x.course)}</b><span>${esc(x.school)}<br>${esc(x.terms)}</span></article>`).join(''));

  set('#honor-list', P.honors.map(x =>
    `<div class="honor"><span class="y">${esc(x.year)}</span><div><b>${esc(x.label)}</b><small>${esc(x.detail)}</small></div></div>`).join(''));

  set('#skills-grid', Object.entries(P.skills).map(([group, items]) =>
    `<div class="skill-group reveal"><h3>${esc(group)}</h3><ul>${items.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>`).join(''));

  /* ---------------- projects ---------------- */
  const grid = $('#projects-grid');
  const SPANS = ['wide', 'narrow', 'narrow', 'wide'];
  let activeFilter = 'All';
  let expanded = false;
  const INITIAL = 6;

  const cardHTML = (p, i) => {
    const m = p.media;
    const poster = m ? `shared/media/${m}-poster.webp` : 'shared/img/geoai-studio.webp';
    return `<article class="project-card reveal ${SPANS[i % SPANS.length]}" data-category="${esc(p.category)}" data-key="${esc(p.key)}">
      <div class="project-media">
        ${m ? '<span class="live-cue">Live preview</span>' : ''}
        <img src="${esc(poster)}" alt="Preview of ${esc(p.name)}" loading="lazy" decoding="async">
        ${m ? `<video muted playsinline loop preload="none" aria-hidden="true" poster="${esc(poster)}" data-src-webm="shared/media/${m}.webm" data-src-mp4="shared/media/${m}.mp4"></video>` : ''}
      </div>
      <div class="project-copy">
        <div class="project-meta"><span>${esc(p.category)}</span><span>${esc(p.year)}</span></div>
        <h3>${esc(p.name)}</h3>
        ${p.headline ? `<p class="headline">${esc(p.headline)}</p>` : ''}
        <p class="summary">${esc(p.summary)}</p>
        <div class="project-stack">${(p.stack || []).slice(0, 5).map(s => `<span>${esc(s)}</span>`).join('')}</div>
        <div class="project-foot">
          <span class="status">${esc(p.status)}</span>
          <button data-project="${esc(p.key)}" aria-label="Open the full engineering record for ${esc(p.name)}">Open record ↗</button>
        </div>
      </div>
    </article>`;
  };

  const wireMedia = () => {
    $$('.project-card').forEach(card => {
      const video = $('video', card);
      if (!video || video.dataset.wired) return;
      video.dataset.wired = '1';
      const load = () => {
        if (video.dataset.loaded) return;
        video.dataset.loaded = '1';
        video.innerHTML =
          `<source src="${video.dataset.srcWebm}" type="video/webm"><source src="${video.dataset.srcMp4}" type="video/mp4">`;
        video.load();
      };
      const play = () => { load(); video.play().catch(() => { }); };
      const stop = () => { video.pause(); try { video.currentTime = 0; } catch (e) { } };
      card.addEventListener('pointerenter', play);
      card.addEventListener('pointerleave', stop);
      card.addEventListener('focusin', play);
      card.addEventListener('focusout', stop);
      // Touch devices have no hover: autoplay while the card is the one on screen.
      if (coarse.matches) {
        new IntersectionObserver(([e]) => {
          if (e.isIntersecting) { card.classList.add('is-playing'); play(); }
          else { card.classList.remove('is-playing'); stop(); }
        }, { threshold: 0.6 }).observe(card);
      }
    });
  };

  const visibleProjects = () =>
    P.projects.filter(p => activeFilter === 'All' || p.category === activeFilter);

  const renderProjects = () => {
    if (!grid) return;
    const list = visibleProjects();
    const shown = expanded ? list : list.slice(0, INITIAL);
    grid.innerHTML = shown.map(cardHTML).join('');
    const more = $('#projects-more');
    if (more) {
      more.hidden = list.length <= INITIAL;
      $('button', more).textContent = expanded
        ? `Show fewer ↑`
        : `Show all ${list.length} projects ↓`;
    }
    wireMedia();
    observeReveals(grid);
  };

  const filters = $('#project-filters');
  if (filters) {
    const cats = ['All', ...P.projectCategories];
    filters.innerHTML = cats.map(c => {
      const n = c === 'All' ? P.projects.length : P.projects.filter(p => p.category === c).length;
      return `<button type="button" data-filter="${esc(c)}" aria-pressed="${c === 'All'}">${esc(c)}<span class="count">${n}</span></button>`;
    }).join('');
    filters.addEventListener('click', e => {
      const b = e.target.closest('[data-filter]');
      if (!b) return;
      activeFilter = b.dataset.filter;
      expanded = false;
      $$('button', filters).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      renderProjects();
    });
  }
  $('#projects-more')?.addEventListener('click', e => {
    if (!e.target.closest('button')) return;
    expanded = !expanded;
    renderProjects();
    if (!expanded) $('#projects')?.scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth' });
  });
  renderProjects();

  /* ---------------- dialogs ---------------- */
  const dialog = $('#record-dialog');
  const dialogBody = $('[data-dialog-body]', dialog);
  const openDialog = html => {
    dialogBody.innerHTML = html;
    dialog.scrollTop = 0;
    if (typeof dialog.showModal === 'function') dialog.showModal(); else dialog.setAttribute('open', '');
    $('.dialog-close', dialog)?.focus();
  };
  const closeDialog = () => { if (dialog.open) dialog.close(); else dialog.removeAttribute('open'); };
  $('[data-close]', dialog)?.addEventListener('click', closeDialog);
  dialog.addEventListener('click', e => { if (e.target === dialog) closeDialog(); });

  document.addEventListener('click', e => {
    const pBtn = e.target.closest('[data-project]');
    const mBtn = e.target.closest('[data-method]');
    const lBtn = e.target.closest('[data-lab]');

    if (pBtn) {
      const p = P.projects.find(x => x.key === pBtn.dataset.project);
      if (!p) return;
      const links = [
        p.demoUrl && { label: p.demoLabel || 'Live demo', url: p.demoUrl, primary: true },
        p.url && { label: 'Source code', url: p.url },
        ...(p.links || [])
      ].filter(Boolean);
      openDialog(`
        <div class="eyebrow">${esc(p.category)} · ${esc(p.year)} · ${esc(p.role)}</div>
        <h2>${esc(p.name)}</h2>
        ${p.headline ? `<p class="lead">${esc(p.headline)}</p>` : ''}
        <p>${esc(p.summary)}</p>
        ${(p.metrics || []).length ? `<div class="dialog-metrics">${p.metrics.map(m => `<div><strong>${esc(m.v)}</strong><span>${esc(m.k)}</span></div>`).join('')}</div>` : ''}
        ${(p.detail || []).map(x => `<p>${esc(x)}</p>`).join('')}
        ${(p.highlights || []).length ? `<h3>Engineering evidence</h3><ul>${p.highlights.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
        ${(p.stack || []).length ? `<h3>Stack</h3><div class="dialog-tags">${p.stack.map(x => `<span>${esc(x)}</span>`).join('')}</div>` : ''}
        ${p.note ? `<div class="dialog-note"><b>Scope &amp; honesty note</b>${esc(p.note)}</div>` : ''}
        ${p.previewSource ? `<div class="dialog-note"><b>What the preview shows</b>${esc(p.previewSource)}</div>` : ''}
        ${links.length ? `<div class="dialog-links">${links.map(x => `<a class="${x.primary ? 'primary' : ''}" href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.label)} ↗</a>`).join('')}</div>` : ''}
      `);
    }

    if (mBtn) {
      const label = mBtn.dataset.method;
      const item = P.axisDetails[label];
      if (!item) return;
      openDialog(`
        <div class="eyebrow">Method record · demonstrated capability</div>
        <h2>${esc(label)}</h2>
        <p class="lead">${esc(item.one)}</p>
        ${(item.items || []).length ? `<h3>Where I used it</h3><ol class="detail-timeline">${item.items.map(x => `<li><span>${esc(x.year)}</span><p>${esc(x.what)}</p></li>`).join('')}</ol>` : ''}
        ${(item.stack || []).length ? `<h3>Tools and methods</h3><div class="dialog-tags">${item.stack.map(x => `<span>${esc(x)}</span>`).join('')}</div>` : ''}
      `);
    }

    if (lBtn) {
      const lab = P.affiliationsDetailed.find(x => x.key === lBtn.dataset.lab);
      if (!lab) return;
      openDialog(`
        <div class="eyebrow">Research affiliation · ${esc(lab.years)}</div>
        <h2>${esc(lab.full)}</h2>
        <p class="lead">${esc(lab.blurb)}</p>
        <dl class="detail-facts">
          <div><dt>Role</dt><dd>${esc(lab.role)}</dd></div>
          <div><dt>Institution</dt><dd>${esc(lab.school)}</dd></div>
          ${lab.project ? `<div><dt>Project</dt><dd>${esc(lab.project)}</dd></div>` : ''}
          ${lab.advisor ? `<div><dt>Advisor</dt><dd>${esc(lab.advisor)}</dd></div>` : ''}
        </dl>
        <div class="dialog-links"><a href="${esc(lab.link)}" target="_blank" rel="noopener">Visit ${esc(lab.name)} ↗</a></div>
      `);
    }
  });

  /* ---------------- compact rail ---------------- */
  const compact = $('.compact-profile');
  const profileSection = $('#profile');
  if (compact && profileSection) {
    compact.innerHTML = `
      <img src="${esc(P.photo)}" alt="Goshtasb Shahriari Mehr">
      <div>
        <strong>${esc(P.name)}</strong>
        <p>Ph.D. · ML / AI Engineer<br>Spatial Systems</p>
        <small>LLM agents · GeoAI · Agent-based modeling · Full-stack</small>
        <div class="compact-actions">
          <a href="${esc(P.cvUrl)}" download>Download CV</a>
          <a href="mailto:${esc(P.emails.personal)}">Email</a>
          <a href="${esc(P.social.github)}" target="_blank" rel="noopener">GitHub</a>
          <a href="${esc(P.social.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>`;
    const update = () => compact.classList.toggle('is-visible',
      scrollY > profileSection.offsetTop + profileSection.offsetHeight * 0.7);
    addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update, { passive: true });
    update();
  }

  observeReveals();

  /* ---------------- timeline reveal ---------------- */
  $$('.timeline').forEach(tl => {
    const steps = $$('.degree', tl);
    const ordered = [...steps].sort((a, b) => b.offsetTop - a.offsetTop);
    let timers = [];
    new IntersectionObserver(([entry], obs) => {
      if (!entry.isIntersecting) return;
      tl.classList.add('is-active');
      ordered.forEach((s, i) => timers.push(setTimeout(() => s.classList.add('is-shown'), reduced.matches ? 0 : i * 230)));
      obs.disconnect();
    }, { threshold: 0.12 }).observe(tl);
  });

  /* ---------------- scroll progress + nav state ---------------- */
  const progress = $('[data-page-progress]');
  const navLinks = $$('.topbar nav a[href^="#"]');
  const sections = navLinks.map(a => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress?.style.setProperty('--page-progress', `${(max > 0 ? scrollY / max : 0) * 100}%`);
      const y = scrollY + innerHeight * 0.35;
      let current = -1;
      sections.forEach((s, i) => { if (s.offsetTop <= y) current = i; });
      navLinks.forEach((a, i) => a.classList.toggle('is-active', i === current));
      ticking = false;
    });
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- year stamp ---------------- */
  $$('[data-year]').forEach(n => { n.textContent = new Date().getFullYear(); });
})();

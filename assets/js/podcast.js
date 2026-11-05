(function () {
  var P = window.PODCAST || {}; var eps = P.episodes || [];
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function embed(url) { var m = /open\.spotify\.com\/(episode|show|album)\/([A-Za-z0-9]+)/.exec(url || ''); return m ? 'https://open.spotify.com/embed/' + m[1] + '/' + m[2] + '?theme=0' : ''; }
  function fmt(d) { try { return new Date(d + 'T12:00:00').toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' }); } catch (e) { return d; } }
  // Subscribe buttons
  var subs = document.getElementById('podSubs'), h = '';
  if (P.spotifyShow) h += '<a class="cta cta-primary cta-md" href="' + esc(P.spotifyShow) + '" target="_blank" rel="noopener">Escolta a Spotify<span class="sr-only"> (s\u2019obre en una pestanya nova)</span></a>';
  if (P.youtube) h += '<a class="cta cta-outline cta-md" href="' + esc(P.youtube) + '" target="_blank" rel="noopener">Mira a YouTube<span class="sr-only"> (s\u2019obre en una pestanya nova)</span></a>';
  if (subs) { if (h) subs.innerHTML = h; else subs.hidden = true; }
  // Latest episode / coming soon
  var latest = document.getElementById('podLatest'), soon = document.getElementById('podSoon');
  if (eps.length && latest) {
    var e = eps[0], src = embed(e.spotifyEpisode);
    latest.hidden = false; if (soon) soon.hidden = true;
    latest.querySelector('.pod-latest-title').textContent = 'Episodi ' + e.num + ': ' + e.title;
    var pl = latest.querySelector('.pod-player');
    pl.innerHTML = src ? '<iframe title="Reproductor de l\u2019episodi ' + esc(e.num) + '" src="' + src + '" width="100%" height="152" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" style="border:0;border-radius:12px"></iframe>' : '<p class="pod-audio-soon">\u00c0udio aviat disponible</p><p>' + esc(e.summary) + '</p>';
  } else if (soon && P.launchDate) {
    soon.querySelector('.pod-launch').textContent = 'Primer episodi: ' + fmt(P.launchDate) + '.';
  }
  // Episode list — every episode is collapsible (details/summary)
  var list = document.getElementById('podEpisodes');
  if (list) {
    if (!eps.length) { list.innerHTML = '<li class="pod-ep pod-ep-empty" aria-hidden="true"><div class="radio-disc"></div><p>Properament</p></li>'.repeat(3); }
    else list.innerHTML = eps.map(function (e) {
      var btn = e.spotifyEpisode
        ? '<a class="cta cta-primary cta-sm pod-ep-btn" href="' + esc(e.spotifyEpisode) + '" target="_blank" rel="noopener">Escolta a Spotify<span class="sr-only"> (s\u2019obre en una pestanya nova)</span></a>'
        : '<span class="cta cta-sm pod-ep-btn is-disabled" role="link" aria-disabled="true">Aviat a Spotify</span>';
      var share = '<button type="button" class="cta cta-outline cta-sm pod-ep-btn pod-share" data-ep="' + esc(e.num) + '" aria-label="Copia l\u2019enlla\u00e7 de l\u2019episodi ' + esc(e.num) + '">Copia l\u2019enlla\u00e7</button>';
      var links = btn + (e.youtube ? '<a class="cta cta-outline cta-sm pod-ep-btn" href="' + esc(e.youtube) + '" target="_blank" rel="noopener">YouTube</a>' : '') + share;
      var rec = (e.records || [])[0] || '';
      // Hotlinked album art only (never host covers in the repo)
      var art = '<div class="pod-ep-art">' + (e.albumArt ? '<img src="' + esc(e.albumArt) + '" alt="Portada del disc ' + esc(rec) + '" loading="lazy" width="64" height="64" referrerpolicy="no-referrer" onerror="this.parentNode.innerHTML=\'<div class=&quot;radio-disc&quot;></div>\'">' : '<div class="radio-disc"></div>') + '</div>';
      var recs = rec ? '<div class="pod-ep-disc">' + art + '<div><p class="pod-ep-disc-label">Disc de l\u2019episodi</p>' + (e.albumSpotify ? '<a href="' + esc(e.albumSpotify) + '" target="_blank" rel="noopener">' + esc(rec) + '</a>' : '<p>' + esc(rec) + '</p>') + '</div></div>' : '';
      var head = '<span class="weekly-tag">Ep. ' + esc(e.num) + '</span><h4>' + esc(e.title) + '</h4>' + (e.date ? '<time datetime="' + esc(e.date) + '">' + fmt(e.date) + '</time>' : '');
      var blurb = '<p class="pod-ep-blurb">' + esc(e.summary) + '</p>';
      var audio = e.spotifyEpisode ? '' : '<p class="pod-audio-soon">\u00c0udio aviat disponible</p>';
      return '<li class="pod-ep pod-ep-collapse" id="ep-' + esc(e.num) + '"><details>' +
        '<summary>' +
          '<div class="pod-ep-sum">' + head + blurb + recs +
          '<span class="pod-ep-toggle" aria-hidden="true"><span class="pod-ep-chevron"></span><span class="pod-ep-toggle-closed">Mostra m\u00e9s</span><span class="pod-ep-toggle-open">Mostra menys</span></span>' +
          '</div>' +
        '</summary>' +
        '<div class="pod-ep-extra">' + audio + '<div class="pod-ep-foot"><p class="pod-ep-links">' + links + '</p></div></div>' +
      '</details></li>';
    }).join('');
    // Share: copy page URL with #ep-N (works without Spotify). Open target from hash.
    list.addEventListener('click', function (ev) {
      var b = ev.target.closest('.pod-share');
      if (!b) return;
      ev.preventDefault();
      var n = b.getAttribute('data-ep');
      var url = location.origin + location.pathname.replace(/[^/]*$/, 'radio.html') + '#ep-' + n;
      // When already on radio.html, keep current path
      if (/radio\.html$/i.test(location.pathname) || location.pathname.endsWith('/radio') || /\/radio\/?$/.test(location.pathname)) {
        url = location.origin + location.pathname + location.search + '#ep-' + n;
      }
      var done = function () {
        var prev = b.textContent;
        b.textContent = 'Enlla\u00e7 copiat!';
        b.classList.add('is-copied');
        setTimeout(function () { b.textContent = prev; b.classList.remove('is-copied'); }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done).catch(function () {
          window.prompt('Copia aquest enlla\u00e7:', url); done();
        });
      } else {
        window.prompt('Copia aquest enlla\u00e7:', url); done();
      }
    });
    function openFromHash() {
      var m = /^#ep-(\d+)/i.exec(location.hash || '');
      if (!m) return;
      var li = document.getElementById('ep-' + m[1]);
      if (!li) return;
      var d = li.querySelector('details');
      if (d) d.open = true;
      li.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
  }
  // Disc de la setmana (on radio.html the week pill + car CTA live on the shared pair above)
  var d = P.discDelMes, box = document.getElementById('podDisc');
  if (box && d) {
    var paired = !!document.getElementById('radio-cotxe');
    var tag = paired ? '' : '<span class="weekly-tag">' + esc(d.month || 'Disc de la setmana') + '</span>';
    var carBtn = paired ? '' : '<a class="cta cta-outline cta-sm pod-car-btn" href="cotxes.html">Amb el cotxe de la setmana \u2192</a>';
    box.innerHTML = '<div class="pod-disc-art">' + (d.cover ? '<img src="' + esc(d.cover) + '" alt="Portada de ' + esc(d.album) + '" loading="lazy">' : '<div class="radio-disc"></div>') + '</div><div>' + tag + '<h4>' + esc(d.album) + '</h4><p class="pod-disc-meta">' + esc(d.artist) + (d.year ? ' \u00b7 ' + esc(d.year) : '') + '</p>' + carBtn + '</div>' + (embed(d.spotify) ? '<div class="pod-disc-player"><iframe title="Escolta ' + esc(d.album) + ' a Spotify" src="' + embed(d.spotify) + '" width="100%" height="352" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" style="border:0;border-radius:12px"></iframe></div>' : '');
    if (embed(d.spotify)) box.classList.add('has-player');
  }
})();

(function () {
  var P = window.PODCAST || {}, d = P.discDelMes, e = (P.episodes || [])[0];
  var h = document.getElementById('pairHook');
  var t = (d && d.note) || (e && e.summary ? e.summary.split(/(?<=[.!?])\s/)[0] : '');
  if (h && t) { h.textContent = t; h.hidden = false; }
  var f = document.getElementById('podFollow');
  if (f && P.spotifyShow) { f.querySelector('a').href = P.spotifyShow; f.hidden = false; }
})();

// Disc de la setmana on the home page (next to cotxe de la setmana)
(function () {
  var box = document.getElementById('homeDisc');
  if (!box) return;
  var P = window.PODCAST || {}, d = P.discDelMes;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  if (!d || !d.album) {
    box.innerHTML = '<div class="home-disc-card"><div class="pod-disc-art"><div class="radio-disc"></div></div><div><span class="weekly-tag">Properament</span><h4>Disc de la setmana</h4><p>Cada setmana un vinil amb el cotxe de la setmana.</p><a class="cta cta-outline cta-sm" href="radio.html">Ves a Revolucions FM</a></div></div>';
    return;
  }
  box.innerHTML = '<div class="home-disc-card">' +
    '<div class="pod-disc-art"><div class="radio-disc" aria-hidden="true"></div></div>' +
    '<div>' +
      '<span class="weekly-tag">' + esc(d.month || 'Disc de la setmana') + '</span>' +
      '<h4>' + esc(d.album) + '</h4>' +
      '<p class="pod-disc-meta">' + esc(d.artist) + (d.year ? ' \u00b7 ' + esc(d.year) : '') + '</p>' +
      (d.note ? '<p class="home-disc-note">' + esc(d.note) + '</p>' : '') +
      '<a class="cta cta-primary cta-sm" href="radio.html#podDiscTitle"><span>Escolta a Revolucions FM</span></a>' +
    '</div></div>';
})();

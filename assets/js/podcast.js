(function () {
  var P = window.PODCAST || {}; var eps = P.episodes || [];
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function embed(url) { var m = /open\.spotify\.com\/(episode|show)\/([A-Za-z0-9]+)/.exec(url || ''); return m ? 'https://open.spotify.com/embed/' + m[1] + '/' + m[2] : ''; }
  function fmt(d) { try { return new Date(d + 'T12:00:00').toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' }); } catch (e) { return d; } }
  // Subscribe buttons
  var subs = document.getElementById('podSubs'), h = '';
  if (P.spotifyShow) h += '<a class="cta cta-primary cta-md" href="' + esc(P.spotifyShow) + '" target="_blank" rel="noopener">Escolta a Spotify<span class="sr-only"> (s\u2019obre en una pestanya nova)</span></a>';
  if (P.youtube) h += '<a class="cta cta-outline cta-md" href="' + esc(P.youtube) + '" target="_blank" rel="noopener">Mira a YouTube<span class="sr-only"> (s\u2019obre en una pestanya nova)</span></a>';
  if (subs) { if (h) subs.innerHTML = h; else subs.hidden = true; }
  // Latest episode / coming soon
  var latest = document.getElementById('podLatest'), soon = document.getElementById('podSoon');
  if (eps.length && latest) {
    var e = eps[0], src = embed(e.spotifyEpisode || P.spotifyShow);
    latest.hidden = false; if (soon) soon.hidden = true;
    latest.querySelector('.pod-latest-title').textContent = 'Episodi ' + e.num + ': ' + e.title;
    var pl = latest.querySelector('.pod-player');
    pl.innerHTML = src ? '<iframe title="Reproductor de l\u2019episodi ' + esc(e.num) + '" src="' + src + '" width="100%" height="152" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" style="border:0;border-radius:12px"></iframe>' : '<p>' + esc(e.summary) + '</p>';
  } else if (soon && P.launchDate) {
    soon.querySelector('.pod-launch').textContent = 'Primer episodi: ' + fmt(P.launchDate) + '.';
  }
  // Episode list
  var list = document.getElementById('podEpisodes');
  if (list) {
    if (!eps.length) { list.innerHTML = '<li class="pod-ep pod-ep-empty" aria-hidden="true"><div class="radio-disc"></div><p>Properament</p></li>'.repeat(3); }
    else list.innerHTML = eps.map(function (e) {
      var links = (e.spotifyEpisode ? '<a href="' + esc(e.spotifyEpisode) + '" target="_blank" rel="noopener">Spotify</a>' : '') + (e.youtube ? '<a href="' + esc(e.youtube) + '" target="_blank" rel="noopener">YouTube</a>' : '');
      var recs = (e.records || []).length ? '<details><summary>Discos de l\u2019episodi</summary><ul>' + e.records.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul></details>' : '';
      return '<li class="pod-ep"><span class="weekly-tag">Ep. ' + esc(e.num) + '</span><h4>' + esc(e.title) + '</h4>' + (e.date ? '<time datetime="' + esc(e.date) + '">' + fmt(e.date) + '</time>' : '') + '<p>' + esc(e.summary) + '</p>' + recs + (links ? '<p class="pod-ep-links">' + links + '</p>' : '') + '</li>';
    }).join('');
  }
  // Disc de la setmana
  var d = P.discDelMes, box = document.getElementById('podDisc');
  if (box && d) {
    box.innerHTML = '<div class="pod-disc-art">' + (d.cover ? '<img src="' + esc(d.cover) + '" alt="Portada de ' + esc(d.album) + '" loading="lazy">' : '<div class="radio-disc"></div>') + '</div><div><span class="weekly-tag">' + esc(d.month || 'Disc de la setmana') + '</span><h4>' + esc(d.album) + '</h4><p class="pod-disc-meta">' + esc(d.artist) + (d.year ? ' \u00b7 ' + esc(d.year) : '') + '</p>' + (d.note ? '<p>' + esc(d.note) + '</p>' : '') + '<a class="pod-text-link" href="cotxes.html">Amb el cotxe del mes \u2192</a></div>';
  }
})();

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
  // Episode list — latest stays fully expanded; older episodes are collapsible
  var list = document.getElementById('podEpisodes');
  if (list) {
    if (!eps.length) { list.innerHTML = '<li class="pod-ep pod-ep-empty" aria-hidden="true"><div class="radio-disc"></div><p>Properament</p></li>'.repeat(3); }
    else list.innerHTML = eps.map(function (e, i) {
      var btn = e.spotifyEpisode
        ? '<a class="cta cta-primary cta-sm pod-ep-btn" href="' + esc(e.spotifyEpisode) + '" target="_blank" rel="noopener">Escolta a Spotify<span class="sr-only"> (s\u2019obre en una pestanya nova)</span></a>'
        : '<span class="cta cta-sm pod-ep-btn is-disabled" role="link" aria-disabled="true">Aviat a Spotify</span>';
      var links = btn + (e.youtube ? '<a class="cta cta-outline cta-sm pod-ep-btn" href="' + esc(e.youtube) + '" target="_blank" rel="noopener">YouTube</a>' : '');
      var rec = (e.records || [])[0] || '';
      var art = '<div class="pod-ep-art">' + (e.albumArt ? '<img src="' + esc(e.albumArt) + '" alt="Portada del disc ' + esc(rec) + '" loading="lazy" width="64" height="64" referrerpolicy="no-referrer" onerror="this.parentNode.innerHTML=\'<div class=&quot;radio-disc&quot;></div>\'">' : '<div class="radio-disc"></div>') + '</div>';
      var recs = rec ? '<div class="pod-ep-disc">' + art + '<div><p class="pod-ep-disc-label">Disc de l\u2019episodi</p>' + (e.albumSpotify ? '<a href="' + esc(e.albumSpotify) + '" target="_blank" rel="noopener">' + esc(rec) + '</a>' : '<p>' + esc(rec) + '</p>') + '</div></div>' : '';
      var head = '<span class="weekly-tag">Ep. ' + esc(e.num) + '</span><h4>' + esc(e.title) + '</h4>' + (e.date ? '<time datetime="' + esc(e.date) + '">' + fmt(e.date) + '</time>' : '');
      var blurb = '<p class="pod-ep-blurb">' + esc(e.summary) + '</p>';
      var audio = e.spotifyEpisode ? '' : '<p class="pod-audio-soon">\u00c0udio aviat disponible</p>';
      if (i === 0) {
        return '<li class="pod-ep pod-ep-latest">' + head + blurb + audio + '<div class="pod-ep-foot">' + recs + '<p class="pod-ep-links">' + links + '</p></div></li>';
      }
      return '<li class="pod-ep pod-ep-collapse"><details>' +
        '<summary>' +
          '<div class="pod-ep-sum">' + head + blurb + recs +
          '<span class="pod-ep-toggle"><span class="pod-ep-toggle-closed">Mostra m\u00e9s</span><span class="pod-ep-toggle-open">Mostra menys</span></span>' +
          '</div>' +
        '</summary>' +
        '<div class="pod-ep-extra">' + audio + '<div class="pod-ep-foot"><p class="pod-ep-links">' + links + '</p></div></div>' +
      '</details></li>';
    }).join('');
  }

  // Disc de la setmana (on radio.html the week pill + car CTA live on the shared pair above)
  var d = P.discDelMes, box = document.getElementById('podDisc');
  if (box && d) {
    var paired = !!document.getElementById('radio-cotxe');
    var tag = paired ? '' : '<span class="weekly-tag">' + esc(d.month || 'Disc de la setmana') + '</span>';
    var carBtn = paired ? '' : '<a class="cta cta-outline cta-sm pod-car-btn" href="cotxes.html">Amb el cotxe de la setmana \u2192</a>';
    box.innerHTML = '<div class="pod-disc-art">' + (d.cover ? '<img src="' + esc(d.cover) + '" alt="Portada de ' + esc(d.album) + '" loading="lazy">' : '<div class="radio-disc"></div>') + '</div><div>' + tag + '<h4>' + esc(d.album) + '</h4><p class="pod-disc-meta">' + esc(d.artist) + (d.year ? ' \u00b7 ' + esc(d.year) : '') + '</p>' + (d.note ? '<p>' + esc(d.note) + '</p>' : '') + carBtn + '</div>' + (embed(d.spotify) ? '<div class="pod-disc-player"><iframe title="Escolta ' + esc(d.album) + ' a Spotify" src="' + embed(d.spotify) + '" width="100%" height="352" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" style="border:0;border-radius:12px"></iframe></div>' : '');
    if (embed(d.spotify)) box.classList.add('has-player');
  }
})();

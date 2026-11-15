// Revista de Revolucions: llistat i article (revista.html?id=...).
(function () {
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c];
    });
  };

  function credit(path, cls) {
    if (window.creditHTML) return window.creditHTML(path, cls);
    return '';
  }

  function fig(img, extraClass, caption, illustration) {
    var w = img.width ? ' width="' + img.width + '"' : '';
    var h = img.height ? ' height="' + img.height + '"' : '';
    var cap = caption || img.caption || '';
    var cred = illustration
      ? '<p class="img-credit">Il·lustració original d\u2019AC Classics Montgrí</p>'
      : credit(img.src);
    return '<figure class="rev-figure' + (extraClass ? ' ' + extraClass : '') + '">' +
      '<img src="' + esc(img.src) + '" alt="' + esc(img.alt || '') + '"' + w + h + ' loading="eager" decoding="async">' +
      (cap ? '<figcaption>' + esc(cap) + '</figcaption>' : '') +
      cred +
      '</figure>';
  }

  function embedAlbum(url) {
    var m = /open\.spotify\.com\/(album|episode|show)\/([A-Za-z0-9]+)/.exec(url || '');
    return m ? 'https://open.spotify.com/embed/' + m[1] + '/' + m[2] + '?theme=0' : '';
  }

  function renderBlock(b) {
    if (b.type === 'p') return '<p>' + esc(b.text) + '</p>';
    if (b.type === 'h2') return '<h2>' + esc(b.text) + '</h2>';
    if (b.type === 'pullquote') return '<blockquote class="rev-pull"><p>' + esc(b.text) + '</p></blockquote>';
    if (b.type === 'figure') return fig(b, b.illustration ? 'rev-figure--plan' : '', b.caption, b.illustration);
    if (b.type === 'gallery') {
      var cols = b.images.length === 1 ? ' rev-gallery--one' : (b.images.length === 2 ? ' rev-gallery--two' : '');
      return '<div class="rev-gallery' + cols + '">' + b.images.map(function (im) { return fig(im); }).join('') + '</div>';
    }
    if (b.type === 'specs') {
      var rows = (b.rows || []).map(function (r) {
        return '<div class="rev-spec"><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>';
      }).join('');
      return '<aside class="rev-specs" aria-label="' + esc(b.title || 'Fitxa tècnica') + '">' +
        '<h2>' + esc(b.title || 'Fitxa tècnica') + '</h2>' +
        '<dl>' + rows + '</dl>' +
        '<p class="rev-specs-link"><a href="' + esc(b.link || 'cotxes.html') + '">' + esc(b.linkText || 'Fitxa completa del cotxe') + ' <span aria-hidden="true">→</span></a></p>' +
        '</aside>';
    }
    return '';
  }

  function renderDisc(d) {
    if (!d) return '';
    var src = embedAlbum(d.spotify);
    var player = src
      ? '<iframe title="Escolta ' + esc(d.album) + ' a Spotify" src="' + esc(src) + '" width="100%" height="352" loading="eager" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" style="border:0;border-radius:12px"></iframe>'
      : '';
    return '<section class="rev-disc" aria-labelledby="rev-disc-title">' +
      '<p class="rev-kicker">' + esc(d.kicker || 'Disc de la setmana') + '</p>' +
      '<h2 id="rev-disc-title">' + esc(d.album) + '</h2>' +
      '<p class="rev-disc-meta">' + esc(d.artist) + (d.year ? ' · ' + esc(d.year) : '') + '</p>' +
      (d.song ? '<p class="rev-disc-song">Cançó destacada: «' + esc(d.song) + '»</p>' : '') +
      (d.note ? '<p class="rev-disc-note">' + esc(d.note) + '</p>' : '') +
      player +
      (d.spotify ? '<p class="rev-disc-link"><a href="' + esc(d.spotify) + '" target="_blank" rel="noopener">Obre l\u2019àlbum a Spotify<span class="sr-only"> (s\u2019obre en una pestanya nova)</span></a></p>' : '') +
      '</section>';
  }

  function setMeta(a) {
    if (!a) return;
    document.title = a.title + ' - Revolucions | AC Classics Montgrí';
    var desc = a.standfirst || '';
    var set = function (sel, attr, val) {
      var el = document.querySelector(sel);
      if (el && val) el.setAttribute(attr, val);
    };
    set('meta[name="description"]', 'content', desc);
    set('meta[property="og:title"]', 'content', a.title);
    set('meta[property="og:description"]', 'content', desc);
    if (a.hero && a.hero.src) {
      set('meta[property="og:image"]', 'content', 'https://acclassicsmontgri.es/' + a.hero.src);
    }
  }

  function renderArticle(a) {
    var root = document.getElementById('revistaArticle');
    if (!root || !a) return;
    setMeta(a);
    var crumbs = '<nav class="rev-crumbs" aria-label="Fil d\u2019Ariadna">' +
      '<a href="index.html">Inici</a>' +
      '<span aria-hidden="true"> / </span>' +
      '<a href="radio.html">Revolucions</a>' +
      '<span aria-hidden="true"> / </span>' +
      '<a href="revista.html">Revista</a>' +
      '</nav>';
    var hero = a.hero ? fig(a.hero, 'rev-hero') : '';
    var body = (a.body || []).map(renderBlock).join('');
    root.innerHTML =
      '<article class="rev-article">' +
        '<header class="rev-header">' +
          crumbs +
          (a.kicker ? '<p class="rev-kicker">' + esc(a.kicker) + '</p>' : '') +
          '<h1>' + esc(a.title) + '</h1>' +
          (a.standfirst ? '<p class="rev-dek">' + esc(a.standfirst) + '</p>' : '') +
          (a.byline ? '<p class="rev-byline">' + esc(a.byline) + '</p>' : '') +
        '</header>' +
        hero +
        '<div class="rev-body">' + body + '</div>' +
        renderDisc(a.disc) +
      '</article>';
    root.hidden = false;
    var listing = document.getElementById('revistaListing');
    if (listing) listing.hidden = true;
    var indexWrap = document.getElementById('revistaIndexWrap');
    if (indexWrap) indexWrap.hidden = true;
  }

  function card(a) {
    return '<article class="rev-card">' +
      '<a href="revista.html?id=' + encodeURIComponent(a.id) + '">' +
        (a.hero ? '<img src="' + esc(a.hero) + '" alt="" width="640" height="378" loading="eager" decoding="async">' : '') +
        '<div class="rev-card-body">' +
          '<p class="rev-kicker">Nº ' + String(a.num).padStart(2, '0') + ' · ' + esc(a.dateLabel || '') + '</p>' +
          '<h3>' + esc(a.title) + '</h3>' +
          (a.standfirst ? '<p>' + esc(a.standfirst) + '</p>' : '') +
          '<span class="rev-card-cta">Llegeix l\u2019article <span aria-hidden="true">→</span></span>' +
        '</div>' +
      '</a></article>';
  }

  function renderIndex(into, compact) {
    var list = window.revistaIndex || [];
    if (!into) return;
    if (!list.length) {
      into.innerHTML = '<p>Encara no hi ha articles a la revista.</p>';
      return;
    }
    into.classList.toggle('revista-index--compact', !!compact);
    into.innerHTML = list.map(card).join('');
  }

  function loadArticle(id, cb) {
    var meta = (window.revistaIndex || []).find(function (a) { return a.id === id; });
    if (!meta) { cb(null); return; }
    if (window.revistaArticle && window.revistaArticle.id === id) { cb(window.revistaArticle); return; }
    if (!meta.dataFile) { cb(null); return; }
    var s = document.createElement('script');
    s.src = meta.dataFile;
    s.onload = function () { cb(window.revistaArticle && window.revistaArticle.id === id ? window.revistaArticle : null); };
    s.onerror = function () { cb(null); };
    document.head.appendChild(s);
  }

  function init() {
    var params = new URLSearchParams(location.search);
    var id = params.get('id');
    var articleRoot = document.getElementById('revistaArticle');
    var listing = document.getElementById('revistaListing');

    if (id && articleRoot) {
      loadArticle(id, function (a) {
        if (a) renderArticle(a);
        else {
          articleRoot.hidden = false;
          articleRoot.innerHTML = '<div class="rev-missing"><h1>No hem trobat aquest article</h1><p><a href="revista.html">Torna a la revista</a></p></div>';
        }
      });
    } else {
      renderIndex(listing, listing && listing.classList.contains('revista-index--compact'));
      if (listing) listing.hidden = false;
    }
  }

  window.renderRevistaIndex = renderIndex;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

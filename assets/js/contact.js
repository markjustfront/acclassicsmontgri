// Low-friction contact: builds a mailto: with the form fields (no backend).
(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;
  var note = document.getElementById('contactFormNote');
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var name = (form.name.value || '').trim();
    var email = (form.email.value || '').trim();
    var message = (form.message.value || '').trim();
    if (!name || !email || !message) {
      if (note) {
        note.hidden = false;
        note.textContent = 'Omple el nom, el correu i el missatge.';
      }
      return;
    }
    var subject = 'AC Classics Montgrí: missatge de ' + name;
    var body = 'Nom: ' + name + '\nCorreu: ' + email + '\n\nMissatge:\n' + message + '\n';
    var href = 'mailto:acclassicsmontgri@gmail.com'
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);
    if (note) {
      note.hidden = false;
      note.textContent = 'S’ha obert el teu client de correu. Si no s’obre, escriu a acclassicsmontgri@gmail.com.';
    }
    window.location.href = href;
  });
})();

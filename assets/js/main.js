(function () {
  var toggle = document.querySelector('.nav-toggle');
  var list = document.getElementById('nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && list.classList.contains('open')) {
        list.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      status.className = 'form-status';
      fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.success) {
            form.reset();
            status.textContent = 'Thank you. Your message has been sent and I will reply as soon as I can.';
            status.className = 'form-status show';
          } else {
            throw new Error(data.message || 'Error');
          }
        })
        .catch(function () {
          status.textContent = 'Sorry, something went wrong. Please email or WhatsApp me instead using the links on this page.';
          status.className = 'form-status show error';
        })
        .then(function () { btn.disabled = false; });
    });
  }
})();

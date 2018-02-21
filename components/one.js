var html = require('choo/html');

module.exports = title =>
  html`
    <section class="fl mw6 w-50-m w-third-l pa3">
        <h2>${title}</h2>
        <p>
            Welcome human!
            We're very happy you've made it this far.
        </p>

        <p>
            You're now in control of your own Choo app. The moment you decide to
            deploy it, it'll work offline and on any device.
        </p>

        <br>
    </section>`;

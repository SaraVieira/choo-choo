const html = require('choo/html');
const one = require('../components/one');

const TITLE = 'choo-choo - main';

module.exports = ({ totalTrains, title, events }, emit) => {
  if (title !== TITLE) emit(events.DOMTITLECHANGE, TITLE);

  return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
        ${one('This is the Tile')}
        <section class="fl mw6 w-50-m w-third-l pa3">
          <h2>4.</h2>

          <p>
            Let's now add things to this a bunch of damn trains right?
          </p>

          <p>Trains:</p>

          <p>
            ${[...Array(totalTrains).keys()].map(train => '🚂')}
          </p>

          <button class="dim ph3 ba bw1 pv2 b--black pointer bg-white"
            onclick=${handleClick}>
            Add a train Son
          </button>
          <button class="dim ph3 ba bw1 pv2 b--black pointer bg-white"
            onclick=${handleTwoClick}>
            Add two trains Son
          </button>
          <button class="dim ph3 ba bw1 pv2 b--black pointer bg-white"
            onclick=${remove}>
            Remove a train Son
          </button>
        </section>
      </main>
    </body>
  `;

  function handleClick() {
    emit('clicks:add', 1);
  }

  function handleTwoClick() {
    emit('clicks:add', 2);
  }

  function remove() {
    emit('clicks:remove', 1);
  }
};

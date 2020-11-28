import Main from './js/app/main';

function init() {
  const container = document.getElementById('appContainer');
  (() => new Main(container))();
}

init();

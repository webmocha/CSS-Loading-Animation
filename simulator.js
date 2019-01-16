(function() { 'use strict';

  const TIMEOUT = 5000;

  const simulateLoading = delay => e => {
    // start the initial animation
    container.classList.add('load-animation');

    // start simulated load
    const timer = setTimeout(() =>
      container.classList.add('load-animation-finish') ||
      displayStatus("Loading Completed") ||
      clearTimeout(timeout)
    , parseInt(delay, 10));

    // simulate timeout
    const timeout = setTimeout(() =>
      container.classList.remove('load-animation') ||
      container.classList.add('load-animation-timeout') ||
      displayStatus("Unable to process request") ||
      clearTimeout(timer)
    , TIMEOUT);
  }




  const displayStatus = message => {
    loadStatus.innerText = message;
  };

  const [ container, reset, sim1, sim2, sim3, sim4, sim5, loadStatus ] = [
    'container', 'reset', 'sim1', 'sim2', 'sim3', 'sim4', 'sim5', 'loadStatus'
  ].map(document.getElementById.bind(document));

  [sim1, sim2, sim3, sim4, sim5]
    .forEach(el => el.addEventListener('click', simulateLoading(el.dataset.delay)));

  container.addEventListener("transitionend", () =>
    loadStatus.classList.add('load-complete')
  );

  reset.addEventListener('click', location.reload.bind(location));

})();

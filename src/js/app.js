import showPopover from './popover_funcs';

const btnEl = document.getElementById('btn');

document.addEventListener('click', (evt) => showPopover(evt, btnEl));

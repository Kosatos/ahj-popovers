export default function showPopover(evt, btn) {
  if (evt.target === btn) {
    if (!btn.parentElement.querySelector('.popover')) {
      const popoverEl = createPopover('Notification', `Thank's for click ;)`);
      btn.parentElement.appendChild(popoverEl);

      popoverEl.style.top = `-${
        popoverEl.offsetHeight +
        popoverEl.querySelector('.popover__arrow').offsetHeight
      }px`;
      popoverEl.style.left = `${
        (btn.offsetWidth - popoverEl.offsetWidth) / 2
      }px`;

      return;
    }

    hidePopover(btn);
    return;
  }

  hidePopover(btn);
}

function createPopover(title, content) {
  const popover = document.createElement('div');
  popover.classList.add('popover');

  const popoverContent = document.createElement('div');
  popoverContent.classList.add('popover__content');
  popover.appendChild(popoverContent);

  const popoverTitle = document.createElement('div');
  popoverTitle.classList.add('popover__title');
  popoverTitle.textContent = title;
  popoverContent.appendChild(popoverTitle);

  const popoverInner = document.createElement('div');
  popoverInner.classList.add('popover__inner-content');
  popoverInner.appendChild(document.createElement('p'));
  popoverInner.querySelector('p').textContent = content;
  popoverContent.appendChild(popoverInner);

  const popoverArrow = document.createElement('div');
  popoverArrow.classList.add('popover__arrow');
  popover.appendChild(popoverArrow);

  return popover;
}

function hidePopover(btn) {
  btn.parentElement.querySelector('.popover').remove();
}

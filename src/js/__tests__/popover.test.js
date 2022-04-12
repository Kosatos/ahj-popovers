/**
 * @jest-environment jsdom
 */

import showPopover from '../popover_funcs';

describe('Checking popover: ', () => {
  document.body.innerHTML = `<div class="container">
                                <button class="btn" id="btn">Click</button>
                              </div>`;

  const btn = document.getElementById('btn');

  btn.addEventListener('click', (evt) => {
    showPopover(evt, btn);
  });

  test('btn click should show and hide popover', () => {
    btn.click();

    expect(document.body.querySelector('.popover')).toBeTruthy();
    expect(document.body.querySelector('.popover__content')).toBeTruthy();
    expect(
      document.body.querySelector('.popover__inner-content').querySelector('p')
        .textContent
    ).toBe(`Thank's for click ;)`);

    btn.click();

    expect(document.body.querySelector('.popover')).toBeFalsy();
  });

  test('document click should hide popover', () => {
    document.body.click();

    expect(document.body.querySelector('.popover')).toBeFalsy();
  });
});

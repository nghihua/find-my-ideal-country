/** Scroll affordance for touch devices: mobile overlay scrollbars only appear
 *  while dragging and then auto-hide, so every scrollable surface gets a faded
 *  edge while content remains above or below (masks styled in global.css).
 *  Class toggling is JS-driven because scroll-driven animations are not
 *  supported on every browser the site targets. */
const FADE_EPSILON = 4;

export function updateScrollFade(el: HTMLElement): void {
  const scrollable = el.scrollHeight - el.clientHeight > FADE_EPSILON;
  el.classList.toggle('scroll-fade-top', scrollable && el.scrollTop > FADE_EPSILON);
  el.classList.toggle('scroll-fade-bottom', scrollable && el.scrollHeight - el.scrollTop - el.clientHeight > FADE_EPSILON);
}

export function watchScrollFade(el: HTMLElement): void {
  updateScrollFade(el);
  el.addEventListener('scroll', () => updateScrollFade(el), { passive: true });

  // Rendered content (innerHTML) changes the scrollable height, and the
  // hidden/visible toggle happens on the wrapper around the scroller, so watch
  // class changes on both. updateScrollFade is idempotent, so the class
  // toggles it performs do not loop the observer.
  const observer = new MutationObserver(() => updateScrollFade(el));
  observer.observe(el, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  if (el.parentElement) {
    observer.observe(el.parentElement, { attributes: true, attributeFilter: ['class'] });
  }

  // Late webfont/icon-font loading shifts content without mutating the DOM,
  // and rotation or the dynamic-viewport units resize the container.
  window.addEventListener('load', () => updateScrollFade(el));
  window.addEventListener('resize', () => updateScrollFade(el));
}

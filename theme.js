(() => {
  const key = 'portfolio-theme';
  let theme = 'noir';
  try { if (localStorage.getItem(key) === 'matrix') theme = 'matrix'; } catch {}
  const apply = () => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'matrix' ? '#030a05' : '#101010');
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.hidden = false;
      button.setAttribute('aria-pressed', String(theme === 'matrix'));
    }
  };
  apply();
  document.addEventListener('DOMContentLoaded', () => {
    apply();
    document.querySelector('.theme-toggle')?.addEventListener('click', () => {
      theme = theme === 'matrix' ? 'noir' : 'matrix';
      try { localStorage.setItem(key, theme); } catch {}
      apply();
    });
  });
})();

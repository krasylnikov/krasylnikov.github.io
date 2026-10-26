(() => {
  const key = 'portfolio-theme';
  let theme = 'noir';
  try { const saved = localStorage.getItem(key); if (['noir', 'matrix', 'lego'].includes(saved)) theme = saved; } catch {}
  const apply = () => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', ({ noir: '#101010', matrix: '#030a05', lego: '#ffcf00' })[theme]);
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.hidden = false;
      button.value = theme;
    }
  };
  apply();
  document.addEventListener('DOMContentLoaded', () => {
    apply();
    document.querySelector('.theme-toggle')?.addEventListener('change', (event) => {
      theme = event.target.value;
      try { localStorage.setItem(key, theme); } catch {}
      apply();
    });
  });
})();

(() => {
  const themes = ['noir', 'matrix', 'lego', 'transformers', 'farm', 'newspaper', 'wooden'];
  let theme = themes[Math.floor(Math.random() * themes.length)];
  const apply = () => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', ({ noir: '#101010', matrix: '#030a05', lego: '#ffcf00', transformers: '#101925', farm: '#f8f1df', newspaper: '#f4efdf', wooden: '#302117' })[theme]);
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
      apply();
    });
  });
})();

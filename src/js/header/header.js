export function header() {
  const menu = document.querySelector('.menu-body');
  const menuBtn = document.querySelector('.menu-icon');
  const body = document.body;
  // const heroEl = document.querySelector('.hero-button-container');

  if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
      menuBtn.classList.toggle('active');
      body.classList.toggle('lock');
      // heroEl.style.display = 'none';
    });
  }

  // scroll

  const anchors = document.querySelectorAll('a[href*="#"]');

  anchors.forEach(anchor =>
    anchor.addEventListener('click', event => {
      event.preventDefault();

      const blockID = anchor.getAttribute('href').substring(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      body.classList.remove('lock');
    })
  );

  // Theme

  window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark-theme');
      toggleSwitch.checked = true;
    }
  });

  const toggleSwitch = document.getElementById('switch');
  toggleSwitch.addEventListener('change', function () {
    if (toggleSwitch.checked) {
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  });
}

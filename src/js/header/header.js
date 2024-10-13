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

  const toggleSwitch = document.getElementById('switch');
  toggleSwitch.addEventListener('change', function () {
    if (toggleSwitch.checked) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  });
}

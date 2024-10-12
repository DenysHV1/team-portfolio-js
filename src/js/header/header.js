export function header() {
  const menu = document.querySelector('.menu-body');
  const menuBtn = document.querySelector('.menu-icon');
  const body = document.body;

  if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
      menuBtn.classList.toggle('active');
      body.classList.toggle('lock');
    });
  }

  menu.querySelectorAll('menu-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      body.classList.remove('lock');
    });
  });

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
    })
  );

  // Theme

  const toggleSwitch = document.getElementById('switch');
  toggleSwitch.addEventListener('change', function () {
    if (toggleSwitch.checked) {
      console.log('Switch is ON');
      body.classList.add('dark-theme');
    } else {
      console.log('Switch is OFF');
      body.classList.remove('dark-theme');
    }
  });
}

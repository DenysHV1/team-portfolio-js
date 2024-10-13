export function faq() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  const firstItem = accordionItems[0];
  firstItem.style.borderBottom = 'none'
  if (firstItem) {
    firstItem.classList.add('expanded');
    firstItem.querySelector('.accordion-content').style.maxHeight =
      firstItem.querySelector('.accordion-content').scrollHeight + 'px';
  }
  accordionItems.forEach(item => {
    const content = item.querySelector('.accordion-content');
    const toggleButton = item.querySelector('.accordion-toggle');
    if (!content || !toggleButton) {
      console.error(
        'Не удалось найти один из элементов: content или toggleButton'
      );
      return;
    }

    toggleButton.addEventListener('click', () => {
      if (item.classList.contains('expanded')) {
        item.classList.remove('expanded');
        content.style.maxHeight = '0';
      } else {
        accordionItems.forEach(i => {
          i.classList.remove('expanded');
          i.querySelector('.accordion-content').style.maxHeight = '0';
          i.style.borderBottom = '1px solid #e0e0e0'
        });
        item.classList.add('expanded');
        content.style.maxHeight = content.scrollHeight + 'px';
        item.style.border = 'none'
      }
    });
  });
}

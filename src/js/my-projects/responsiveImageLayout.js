export function responsiveImageLayout(clientWidth, pictures) {
  pictures.forEach(item => {
    if (clientWidth <= 700) {
      item.style.width = '320px';
      item.style.height = '184px';
    }
    if (clientWidth > 700 && clientWidth <= 1000) {
      item.style.width = '704px';
      item.style.height = '404px';
    }
    if (clientWidth > 1000) {
      item.style.width = '1008px';
      item.style.height = '580px';
    }
  });
}

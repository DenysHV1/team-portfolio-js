export default function createMarkup(arr = []) {
  return arr
    .map(
      item =>
        `<li class="swiper-slide list-item">
          <p class="review-text">${item.review}</p>
          <div class="name-and-img">
            <img src="${item.avatar_url}" alt="" class="review-img" />
            <p class="review-name">${item.author}</p>
          </div>
        </li>`
    )
    .join('');
}
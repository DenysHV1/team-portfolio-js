export default function createMarkup(arr = []) {
  return arr
    .map(
      item =>
        `<li class="list-item swiper-slide">
          <p class="review-text">${item.review}</p>
          <div class="name-and-img">
            <img src="${item.avatar_url}" alt="${item.author}" class="review-img" />
            <p class="review-name">${item.author}</p>
          </div>
        </li>`
    )
    .join('');
}

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function projectsGallery() {
  return new SimpleLightbox('.my-projects-list-js .project-link', {
    sourceAttr: 'href',
    overlay: true,
    nav: true,
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    isAnimating: true,
  });
}

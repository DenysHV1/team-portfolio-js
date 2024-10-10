import { projectsRefs } from './project-refs';
import { contentArr } from './content-arr';
import sprite from '../../img/sprite.svg';

console.log(sprite)

export function myProjects() {
  const { projectsListEl, showMoreBtnEl } = projectsRefs;
  let num = 3;

  const projectsMarkup = (projects, items) => {
    return projects
      .map(({ img1x, img2x, title, technologies,btnLink, id }, _, arr) =>
        id <= items && arr.length > 0
          ? `
<li class="project-item">
  <a class="project-link" width='1112px' height = '640px' href="${img2x}">
    <picture class="project-img">
      <source
        srcset="
          ${img1x} 1x,
          ${img2x} 2x
        "/>
      <img src="${img1x}" alt="${title}" />
    </picture>
  </a>
  	  <p class="project_technologies">${technologies}</p>
	  <div class="project-name-btn-container">
	  	  <h3 class="project_name">${title}</h3>
	  <a class="project-btn" href="${btnLink}">VISIT <span><svg width="24" height="24"><use href="${sprite}#projects-arrow"></use></svg></span></a>
	  </div>
</li>`
          : ''
      )
      .join('');
  };
  projectsListEl.insertAdjacentHTML(
    'beforeend',
    projectsMarkup(contentArr, num)
  );

  const onClick = () => {
    num += 3;
    projectsListEl.innerHTML = '';
    projectsListEl.insertAdjacentHTML(
      'beforeend',
      projectsMarkup(contentArr, num)
    );
    if (projectsListEl.children.length >= contentArr.length) {
      showMoreBtnEl.classList.add('visually-hidden');
    }
  };
  showMoreBtnEl.addEventListener('click', onClick);
}

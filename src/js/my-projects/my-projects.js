import { projectsRefs } from './project-refs';
import { contentArr } from './content-arr';
import { responsiveImageLayout } from './responsiveImageLayout';
import { projectsGallery } from './gallery';
import sprite from '../../img/sprite.svg';

export function myProjects() {
  const { projectsListEl, showMoreBtnEl } = projectsRefs;
  let num = 3;
  //generate markup
  const projectsMarkup = (projects, items) => {
    return projects
      .map(({ img1x, img2x, title, technologies, btnLink, id }, _, arr) =>
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
      <img class="project-img-inner" src="${img1x}" alt="${title}" />
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
  //set image layout
  const pictures = projectsListEl.querySelectorAll('.project-img-inner');
  
setInterval(() => {
  const clientWidth = projectsListEl.clientWidth;
  responsiveImageLayout(clientWidth, pictures);
},1000)


  //add gallery for first 3 pictures
  projectsGallery();

  //load more button settings
  const btnSpan = showMoreBtnEl.querySelector('span');
  const onClick = () => {
    btnSpan.textContent = 'LOAD MORE';
    if (projectsListEl.children.length < contentArr.length) {
      num += 3;
      projectsListEl.innerHTML = '';
      projectsListEl.insertAdjacentHTML(
        'beforeend',
        projectsMarkup(contentArr, num)
      );
      if (projectsListEl.children.length >= contentArr.length) {
        btnSpan.textContent = 'hide';
      }
    } else {
      num = 3;
      projectsListEl.innerHTML = '';
      projectsListEl.insertAdjacentHTML(
        'beforeend',
        projectsMarkup(contentArr, num)
      );

      document
        .getElementById('my-projects')
        .scrollIntoView({ behavior: 'smooth' });
    }

    //add gallery for next pictures
    projectsGallery();
  };
  showMoreBtnEl.addEventListener('click', onClick);
}

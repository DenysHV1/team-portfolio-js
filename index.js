import{S as u}from"./assets/vendor-CgTBfC_f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function h(){console.log("hello world from faq")}function v(){console.log("hello world from header")}const w={projectsListEl:document.querySelector(".my-projects-list-js"),showMoreBtnEl:document.querySelector(".projects-btn-js")},S="/team-portfolio-js/assets/project-1-1x-B1HZIuYL.jpg",y="/team-portfolio-js/assets/project-1-2x-Bje55MHr.jpg",b="/team-portfolio-js/assets/project-2-1x-JhmGoZut.jpg",J="/team-portfolio-js/assets/project-2-2x-BKKFpGsW.jpg",L="/team-portfolio-js/assets/project-3-1x-DCuG7ItC.jpg",G="/team-portfolio-js/assets/project-3-2x-D_UCmZD9.jpg",N="/team-portfolio-js/assets/project-4-1x-Fww95F1J.jpg",M="/team-portfolio-js/assets/project-4-2x-mywvv0cJ.jpg",R="/team-portfolio-js/assets/project-5-1x-DxN2odVS.jpg",E="/team-portfolio-js/assets/project-5-2x-Cda9-ebG.jpg",A="/team-portfolio-js/assets/project-6-1x-CEcGoooa.jpg",D="/team-portfolio-js/assets/project-6-2x-DPoVSB5Q.jpg",T="/team-portfolio-js/assets/project-7-1x-DAPApIl8.jpg",q="/team-portfolio-js/assets/project-7-2x-qMfuGWzT.jpg",H="/team-portfolio-js/assets/project-8-1x-8UPNHidz.jpg",P="/team-portfolio-js/assets/project-8-2x-135sHb3J.jpg",$="/team-portfolio-js/assets/project-9-1x-xkayJYwa.jpg",B="/team-portfolio-js/assets/project-9-2x-MzqbzosW.jpg",C="/team-portfolio-js/assets/project-10-1x-Bna-RX6I.jpg",O="/team-portfolio-js/assets/project-10-2x-DfQwEs-w.jpg",n=[{img1x:S,img2x:y,title:"Wallet webservice ",technologies:"React, JavaScript, Node JS, Git",btnLink:"#",id:1},{img1x:b,img2x:J,title:"Green harvest webservice",technologies:"React, JavaScript, Node JS, Git",id:2},{img1x:L,img2x:G,title:"English Exellence webservice",technologies:"React, JavaScript, Node JS, Git",id:3},{img1x:N,img2x:M,title:"power pulse webservice",technologies:"React, JavaScript, Node JS, Git",id:4},{img1x:R,img2x:E,title:"mimino website",technologies:"React, JavaScript, Node JS, Git",id:5},{img1x:A,img2x:D,title:"vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",id:6},{img1x:T,img2x:q,title:"chego jewelry website",technologies:"React, JavaScript, Node JS, Git",id:7},{img1x:H,img2x:P,title:"energy flow webservice",technologies:"React, JavaScript, Node JS, Git",id:8},{img1x:$,img2x:B,title:"fruitbox online store",technologies:"React, JavaScript, Node JS, Git",id:9},{img1x:C,img2x:O,title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",id:10}];function j(){return new u(".my-projects-list-js .project-link",{sourceAttr:"href",overlay:!0,nav:!0,captions:!0,captionsData:"alt",captionDelay:250,isAnimating:!0})}const I="/team-portfolio-js/assets/sprite-B4v8_FLq.svg";function k(){const{projectsListEl:o,showMoreBtnEl:r}=w;let s=3;const c=(i,d)=>i.map(({img1x:a,img2x:p,title:l,technologies:g,btnLink:m,id:f},z,x)=>f<=d&&x.length>0?`
<li class="project-item">
  <a class="project-link" width='1112px' height = '640px' href="${p}">
    <picture class="project-img">
      <source
        srcset="
          ${a} 1x,
          ${p} 2x
        "/>
      <img class="project-img-inner" src="${a}" alt="${l}" />
    </picture>
  </a>
  	  <p class="project_technologies">${g}</p>
	  <div class="project-name-btn-container">
	  	  <h3 class="project_name">${l}</h3>
	  <a class="project-btn" href="${m}">VISIT <span><svg width="24" height="24"><use href="${I}#projects-arrow"></use></svg></span></a>
	  </div>
</li>`:"").join("");o.insertAdjacentHTML("beforeend",c(n,s)),j();const e=r.querySelector("span"),t=()=>{e.textContent="LOAD MORE",o.children.length<n.length?(s+=3,o.innerHTML="",o.insertAdjacentHTML("beforeend",c(n,s)),o.children.length>=n.length&&(e.textContent="hide")):(s=3,o.innerHTML="",o.insertAdjacentHTML("beforeend",c(n,s)),window.scrollTo({top:"#my-projects",behavior:"smooth"})),j()};r.addEventListener("click",t)}function F(){console.log("hello world from reviews")}function _(){console.log("hello world from workTogether")}h();v();k();F();_();
//# sourceMappingURL=index.js.map

import{S as v}from"./assets/vendor-CgTBfC_f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function w(){console.log("hello world from faq")}function y(){console.log("hello world from header")}const S={projectsListEl:document.querySelector(".my-projects-list-js"),showMoreBtnEl:document.querySelector(".projects-btn-js")},b="/team-portfolio-js/assets/project-1-1x-B1HZIuYL.jpg",J="/team-portfolio-js/assets/project-1-2x-Bje55MHr.jpg",L="/team-portfolio-js/assets/project-2-1x-JhmGoZut.jpg",G="/team-portfolio-js/assets/project-2-2x-BKKFpGsW.jpg",N="/team-portfolio-js/assets/project-3-1x-DCuG7ItC.jpg",M="/team-portfolio-js/assets/project-3-2x-D_UCmZD9.jpg",R="/team-portfolio-js/assets/project-4-1x-Fww95F1J.jpg",E="/team-portfolio-js/assets/project-4-2x-mywvv0cJ.jpg",A="/team-portfolio-js/assets/project-5-1x-DxN2odVS.jpg",q="/team-portfolio-js/assets/project-5-2x-Cda9-ebG.jpg",D="/team-portfolio-js/assets/project-6-1x-CEcGoooa.jpg",T="/team-portfolio-js/assets/project-6-2x-DPoVSB5Q.jpg",H="/team-portfolio-js/assets/project-7-1x-DAPApIl8.jpg",P="/team-portfolio-js/assets/project-7-2x-qMfuGWzT.jpg",$="/team-portfolio-js/assets/project-8-1x-8UPNHidz.jpg",B="/team-portfolio-js/assets/project-8-2x-135sHb3J.jpg",C="/team-portfolio-js/assets/project-9-1x-xkayJYwa.jpg",I="/team-portfolio-js/assets/project-9-2x-MzqbzosW.jpg",O="/team-portfolio-js/assets/project-10-1x-Bna-RX6I.jpg",k="/team-portfolio-js/assets/project-10-2x-DfQwEs-w.jpg",n=[{img1x:b,img2x:J,title:"Wallet webservice ",technologies:"React, JavaScript, Node JS, Git",btnLink:"#",id:1},{img1x:L,img2x:G,title:"Green harvest webservice",technologies:"React, JavaScript, Node JS, Git",id:2},{img1x:N,img2x:M,title:"English Exellence webservice",technologies:"React, JavaScript, Node JS, Git",id:3},{img1x:R,img2x:E,title:"power pulse webservice",technologies:"React, JavaScript, Node JS, Git",id:4},{img1x:A,img2x:q,title:"mimino website",technologies:"React, JavaScript, Node JS, Git",id:5},{img1x:D,img2x:T,title:"vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",id:6},{img1x:H,img2x:P,title:"chego jewelry website",technologies:"React, JavaScript, Node JS, Git",id:7},{img1x:$,img2x:B,title:"energy flow webservice",technologies:"React, JavaScript, Node JS, Git",id:8},{img1x:C,img2x:I,title:"fruitbox online store",technologies:"React, JavaScript, Node JS, Git",id:9},{img1x:O,img2x:k,title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",id:10}];function F(t,r){r.forEach(o=>{t<=700&&(o.style.width="320px",o.style.height="184px"),t>700&&t<=1e3&&(o.style.width="704px",o.style.height="404px"),t>1e3&&(o.style.width="1008px",o.style.height="580px")})}function j(){return new v(".my-projects-list-js .project-link",{sourceAttr:"href",overlay:!0,nav:!0,captions:!0,captionsData:"alt",captionDelay:250,isAnimating:!0})}const _="/team-portfolio-js/assets/sprite-B4v8_FLq.svg";function z(){const{projectsListEl:t,showMoreBtnEl:r}=S;let o=3;const i=(g,f)=>g.map(({img1x:a,img2x:p,title:l,technologies:m,btnLink:x,id:h},W,u)=>h<=f&&u.length>0?`
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
  	  <p class="project_technologies">${m}</p>
	  <div class="project-name-btn-container">
	  	  <h3 class="project_name">${l}</h3>
	  <a class="project-btn" href="${x}">VISIT <span><svg width="24" height="24"><use href="${_}#projects-arrow"></use></svg></span></a>
	  </div>
</li>`:"").join("");t.insertAdjacentHTML("beforeend",i(n,o));const e=t.querySelectorAll(".project-img-inner"),s=t.clientWidth;F(s,e),j();const c=r.querySelector("span"),d=()=>{c.textContent="LOAD MORE",t.children.length<n.length?(o+=3,t.innerHTML="",t.insertAdjacentHTML("beforeend",i(n,o)),t.children.length>=n.length&&(c.textContent="hide")):(o=3,t.innerHTML="",t.insertAdjacentHTML("beforeend",i(n,o)),window.scrollTo({top:"#my-projects",behavior:"smooth"})),j()};r.addEventListener("click",d)}function K(){console.log("hello world from reviews")}function V(){console.log("hello world from workTogether")}w();y();z();K();V();
//# sourceMappingURL=index.js.map

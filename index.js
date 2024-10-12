import{S as b,a as S,b as L,N as J,K as F,M as N,i as g}from"./assets/vendor-CMRcTFCX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();function E(){console.log("hello world from faq")}function M(){console.log("hello world from header")}const G={projectsListEl:document.querySelector(".my-projects-list-js"),showMoreBtnEl:document.querySelector(".projects-btn-js")},T="/team-portfolio-js/assets/project-1-1x-B1HZIuYL.jpg",D="/team-portfolio-js/assets/project-1-2x-Bje55MHr.jpg",R="/team-portfolio-js/assets/project-2-1x-JhmGoZut.jpg",$="/team-portfolio-js/assets/project-2-2x-BKKFpGsW.jpg",P="/team-portfolio-js/assets/project-3-1x-DCuG7ItC.jpg",k="/team-portfolio-js/assets/project-3-2x-D_UCmZD9.jpg",A="/team-portfolio-js/assets/project-4-1x-Fww95F1J.jpg",C="/team-portfolio-js/assets/project-4-2x-mywvv0cJ.jpg",H="/team-portfolio-js/assets/project-5-1x-DxN2odVS.jpg",q="/team-portfolio-js/assets/project-5-2x-Cda9-ebG.jpg",B="/team-portfolio-js/assets/project-6-1x-CEcGoooa.jpg",I="/team-portfolio-js/assets/project-6-2x-DPoVSB5Q.jpg",O="/team-portfolio-js/assets/project-7-1x-DAPApIl8.jpg",_="/team-portfolio-js/assets/project-7-2x-qMfuGWzT.jpg",z="/team-portfolio-js/assets/project-8-1x-8UPNHidz.jpg",K="/team-portfolio-js/assets/project-8-2x-135sHb3J.jpg",V="/team-portfolio-js/assets/project-9-1x-xkayJYwa.jpg",U="/team-portfolio-js/assets/project-9-2x-MzqbzosW.jpg",W="/team-portfolio-js/assets/project-10-1x-Bna-RX6I.jpg",Z="/team-portfolio-js/assets/project-10-2x-DfQwEs-w.jpg",a=[{img1x:T,img2x:D,title:"Wallet webservice ",technologies:"React, JavaScript, Node JS, Git",btnLink:"#",id:1},{img1x:R,img2x:$,title:"Green harvest webservice",technologies:"React, JavaScript, Node JS, Git",id:2},{img1x:P,img2x:k,title:"English Exellence webservice",technologies:"React, JavaScript, Node JS, Git",id:3},{img1x:A,img2x:C,title:"power pulse webservice",technologies:"React, JavaScript, Node JS, Git",id:4},{img1x:H,img2x:q,title:"mimino website",technologies:"React, JavaScript, Node JS, Git",id:5},{img1x:B,img2x:I,title:"vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",id:6},{img1x:O,img2x:_,title:"chego jewelry website",technologies:"React, JavaScript, Node JS, Git",id:7},{img1x:z,img2x:K,title:"energy flow webservice",technologies:"React, JavaScript, Node JS, Git",id:8},{img1x:V,img2x:U,title:"fruitbox online store",technologies:"React, JavaScript, Node JS, Git",id:9},{img1x:W,img2x:Z,title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",id:10}];function Q(e,t){t.forEach(o=>{e<=700&&(o.style.width="320px",o.style.height="184px"),e>700&&e<=1e3&&(o.style.width="704px",o.style.height="404px"),e>1e3&&(o.style.width="1008px",o.style.height="580px")})}function u(){return new b(".my-projects-list-js .project-link",{sourceAttr:"href",overlay:!0,nav:!0,captions:!0,captionsData:"alt",captionDelay:250,isAnimating:!0})}const Y="/team-portfolio-js/assets/sprite-B4v8_FLq.svg";function X(){const{projectsListEl:e,showMoreBtnEl:t}=G;let o=3;const n=(m,x)=>m.map(({img1x:l,img2x:d,title:j,technologies:h,btnLink:w,id:v},re,y)=>v<=x&&y.length>0?`
<li class="project-item">
  <a class="project-link" width='1112px' height = '640px' href="${d}">
    <picture class="project-img">
      <source
        srcset="
          ${l} 1x,
          ${d} 2x
        "/>
      <img class="project-img-inner" src="${l}" alt="${j}" />
    </picture>
  </a>
  	  <p class="project_technologies">${h}</p>
	  <div class="project-name-btn-container">
	  	  <h3 class="project_name">${j}</h3>
	  <a class="project-btn" href="${w}">VISIT <span><svg width="24" height="24"><use href="${Y}#projects-arrow"></use></svg></span></a>
	  </div>
</li>`:"").join("");e.insertAdjacentHTML("beforeend",n(a,o));const s=e.querySelectorAll(".project-img-inner"),r=e.clientWidth;Q(r,s),u();const c=t.querySelector("span"),f=()=>{c.textContent="LOAD MORE",e.children.length<a.length?(o+=3,e.innerHTML="",e.insertAdjacentHTML("beforeend",n(a,o)),e.children.length>=a.length&&(c.textContent="hide")):(o=3,e.innerHTML="",e.insertAdjacentHTML("beforeend",n(a,o)),window.scrollTo({top:"#my-projects",behavior:"smooth"})),u()};t.addEventListener("click",f)}async function ee(){const e="https://portfolio-js.b.goit.study/api",t="/reviews";try{return(await S.get(`${e}${t}`)).data}catch(o){return console.error(o),null}}function te(e=[]){return e.map(t=>`<li class="list-item swiper-slide">
          <p class="review-text">${t.review}</p>
          <div class="name-and-img">
            <img src="${t.avatar_url}" alt="${t.author}" class="review-img" />
            <p class="review-name">${t.author}</p>
          </div>
        </li>`).join("")}const p=document.querySelector(".list-reviews");let i;document.addEventListener("DOMContentLoaded",()=>{i=new L(".swiper",{modules:[J,F,N],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",disabledClass:"disabled"},slidesPerView:1,spaceBetween:20,keyboard:{enabled:!0},mousewheel:{enabled:!0,sensitivity:2},speed:350,breakpoints:{1280:{slidesPerView:"auto",spaceBetween:32}}})});document.addEventListener("keydown",e=>{if(e.key==="Tab"){e.preventDefault();const t=i.activeIndex;e.shiftKey?i.slideTo(t>0?t-1:i.slides.length-1):i.slideTo(t<i.slides.length-1?t+1:0)}});async function oe(){console.log("Loading reviews...");try{const e=await ee();e?(p.innerHTML=te(e),i.update()):(g.error({title:"Error",message:"No reviews found",position:"topRight",timeout:5e3,backgroundColor:"#FF4D4D",color:"#FFFFFF",zindex:9999}),p.innerHTML='<p class="notFound">Not found</p>')}catch(e){console.error(e),g.error({title:"Error",message:"No reviews found",position:"topRight",timeout:5e3,backgroundColor:"#FF4D4D",color:"#FFFFFF",zindex:9999}),p.innerHTML='<p class="notFound">Not found</p>'}}function se(){console.log("hello world from workTogether")}E();M();X();oe();se();
//# sourceMappingURL=index.js.map

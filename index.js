import{S as b,a as S,b as L,N as E,K as J,M as k,i as m}from"./assets/vendor-CMRcTFCX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();function F(){const e=document.querySelectorAll(".accordion-item"),t=e[0];t.style.borderBottom="none",t&&(t.classList.add("expanded"),t.querySelector(".accordion-content").style.maxHeight=t.querySelector(".accordion-content").scrollHeight+"px"),e.forEach(o=>{const i=o.querySelector(".accordion-content"),s=o.querySelector(".accordion-toggle");if(!i||!s){console.error("Не удалось найти один из элементов: content или toggleButton");return}s.addEventListener("click",()=>{o.classList.contains("expanded")?(o.classList.remove("expanded"),i.style.maxHeight="0"):(e.forEach(r=>{r.classList.remove("expanded"),r.querySelector(".accordion-content").style.maxHeight="0",r.style.borderBottom="1px solid #e0e0e0"}),o.classList.add("expanded"),i.style.maxHeight=i.scrollHeight+"px",o.style.border="none")})})}function N(){const e=document.querySelector(".menu-body"),t=document.querySelector(".menu-icon"),o=document.body;e&&t&&t.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("active"),o.classList.toggle("lock")}),e.querySelectorAll("menu-link").forEach(r=>{r.addEventListener("click",()=>{e.classList.remove("active"),t.classList.remove("active"),o.classList.remove("lock")})}),document.querySelectorAll('a[href*="#"]').forEach(r=>r.addEventListener("click",n=>{n.preventDefault();const l=r.getAttribute("href").substring(1);document.getElementById(l).scrollIntoView({behavior:"smooth",block:"start"})}));const s=document.getElementById("switch");s.addEventListener("change",function(){s.checked?o.classList.add("dark-theme"):o.classList.remove("dark-theme")})}const q={projectsListEl:document.querySelector(".my-projects-list-js"),showMoreBtnEl:document.querySelector(".projects-btn-js")},M="/team-portfolio-js/assets/project-1-1x-B1HZIuYL.jpg",B="/team-portfolio-js/assets/project-1-2x-Bje55MHr.jpg",D="/team-portfolio-js/assets/project-2-1x-JhmGoZut.jpg",I="/team-portfolio-js/assets/project-2-2x-BKKFpGsW.jpg",G="/team-portfolio-js/assets/project-3-1x-DCuG7ItC.jpg",H="/team-portfolio-js/assets/project-3-2x-D_UCmZD9.jpg",R="/team-portfolio-js/assets/project-4-1x-Fww95F1J.jpg",T="/team-portfolio-js/assets/project-4-2x-mywvv0cJ.jpg",A="/team-portfolio-js/assets/project-5-1x-DxN2odVS.jpg",$="/team-portfolio-js/assets/project-5-2x-Cda9-ebG.jpg",P="/team-portfolio-js/assets/project-6-1x-CEcGoooa.jpg",C="/team-portfolio-js/assets/project-6-2x-DPoVSB5Q.jpg",O="/team-portfolio-js/assets/project-7-1x-DAPApIl8.jpg",_="/team-portfolio-js/assets/project-7-2x-qMfuGWzT.jpg",z="/team-portfolio-js/assets/project-8-1x-8UPNHidz.jpg",V="/team-portfolio-js/assets/project-8-2x-135sHb3J.jpg",K="/team-portfolio-js/assets/project-9-1x-xkayJYwa.jpg",U="/team-portfolio-js/assets/project-9-2x-MzqbzosW.jpg",W="/team-portfolio-js/assets/project-10-1x-Bna-RX6I.jpg",Z="/team-portfolio-js/assets/project-10-2x-DfQwEs-w.jpg",a=[{img1x:M,img2x:B,title:"Wallet webservice ",technologies:"React, JavaScript, Node JS, Git",btnLink:"#",id:1},{img1x:D,img2x:I,title:"Green harvest webservice",technologies:"React, JavaScript, Node JS, Git",id:2},{img1x:G,img2x:H,title:"English Exellence webservice",technologies:"React, JavaScript, Node JS, Git",id:3},{img1x:R,img2x:T,title:"power pulse webservice",technologies:"React, JavaScript, Node JS, Git",id:4},{img1x:A,img2x:$,title:"mimino website",technologies:"React, JavaScript, Node JS, Git",id:5},{img1x:P,img2x:C,title:"vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",id:6},{img1x:O,img2x:_,title:"chego jewelry website",technologies:"React, JavaScript, Node JS, Git",id:7},{img1x:z,img2x:V,title:"energy flow webservice",technologies:"React, JavaScript, Node JS, Git",id:8},{img1x:K,img2x:U,title:"fruitbox online store",technologies:"React, JavaScript, Node JS, Git",id:9},{img1x:W,img2x:Z,title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",id:10}];function Q(e,t){t.forEach(o=>{e<=700&&(o.style.width="320px",o.style.height="184px"),e>700&&e<=1e3&&(o.style.width="704px",o.style.height="404px"),e>1e3&&(o.style.width="1008px",o.style.height="580px")})}function j(){return new b(".my-projects-list-js .project-link",{sourceAttr:"href",overlay:!0,nav:!0,captions:!0,captionsData:"alt",captionDelay:250,isAnimating:!0})}const Y="/team-portfolio-js/assets/sprite-B4v8_FLq.svg";function X(){const{projectsListEl:e,showMoreBtnEl:t}=q;let o=3;const i=(f,h)=>f.map(({img1x:d,img2x:g,title:u,technologies:x,btnLink:v,id:y},re,w)=>y<=h&&w.length>0?`
<li class="project-item">
  <a class="project-link" width='1112px' height = '640px' href="${g}">
    <picture class="project-img">
      <source
        srcset="
          ${d} 1x,
          ${g} 2x
        "/>
      <img class="project-img-inner" src="${d}" alt="${u}" />
    </picture>
  </a>
  	  <p class="project_technologies">${x}</p>
	  <div class="project-name-btn-container">
	  	  <h3 class="project_name">${u}</h3>
	  <a class="project-btn" href="${v}">VISIT <span><svg width="24" height="24"><use href="${Y}#projects-arrow"></use></svg></span></a>
	  </div>
</li>`:"").join("");e.insertAdjacentHTML("beforeend",i(a,o));const s=e.querySelectorAll(".project-img-inner"),r=e.clientWidth;Q(r,s),j();const n=t.querySelector("span"),l=()=>{n.textContent="LOAD MORE",e.children.length<a.length?(o+=3,e.innerHTML="",e.insertAdjacentHTML("beforeend",i(a,o)),e.children.length>=a.length&&(n.textContent="hide")):(o=3,e.innerHTML="",e.insertAdjacentHTML("beforeend",i(a,o)),document.getElementById("my-projects").scrollIntoView({behavior:"smooth"})),j()};t.addEventListener("click",l)}async function ee(){const e="https://portfolio-js.b.goit.study/api",t="/reviews";try{return(await S.get(`${e}${t}`)).data}catch(o){return console.error(o),null}}function te(e=[]){return e.map(t=>`<li class="list-item swiper-slide">
          <p class="review-text">${t.review}</p>
          <div class="name-and-img">
            <img src="${t.avatar_url}" alt="${t.author}" class="review-img" />
            <p class="review-name">${t.author}</p>
          </div>
        </li>`).join("")}const p=document.querySelector(".list-reviews");let c;document.addEventListener("DOMContentLoaded",()=>{c=new L(".swiper",{modules:[E,J,k],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",disabledClass:"disabled"},slidesPerView:1,spaceBetween:20,keyboard:{enabled:!0},mousewheel:{enabled:!0,sensitivity:2},speed:350,breakpoints:{1280:{slidesPerView:"auto",spaceBetween:32}}})});document.addEventListener("keydown",e=>{if(e.key==="Tab"){e.preventDefault();const t=c.activeIndex;e.shiftKey?c.slideTo(t>0?t-1:c.slides.length-1):c.slideTo(t<c.slides.length-1?t+1:0)}});async function oe(){try{const e=await ee();e?(p.innerHTML=te(e),c.update()):(m.error({title:"Error",message:"No reviews found",position:"topRight",timeout:5e3,backgroundColor:"#FF4D4D",color:"#FFFFFF",zindex:9999}),p.innerHTML='<p class="notFound">Not found</p>')}catch(e){console.error(e),m.error({title:"Error",message:"No reviews found",position:"topRight",timeout:5e3,backgroundColor:"#FF4D4D",color:"#FFFFFF",zindex:9999}),p.innerHTML='<p class="notFound">Not found</p>'}}function se(){console.log("hello world from workTogether")}F();N();X();oe();se();
//# sourceMappingURL=index.js.map
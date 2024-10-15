import{S as L,a as h,b as S,N as w,K as k,M as F,i as m}from"./assets/vendor-CMRcTFCX.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();function D(){const t=document.querySelectorAll(".accordion-item"),e=t[0];e.style.borderBottom="none",e&&(e.classList.add("expanded"),e.querySelector(".accordion-content").style.maxHeight=e.querySelector(".accordion-content").scrollHeight+"px"),t.forEach(o=>{const n=o.querySelector(".accordion-content"),s=o.querySelector(".accordion-toggle");if(!n||!s){console.error("Не удалось найти один из элементов: content или toggleButton");return}s.addEventListener("click",()=>{o.classList.contains("expanded")?(o.classList.remove("expanded"),n.style.maxHeight="0"):(t.forEach(r=>{r.classList.remove("expanded"),r.querySelector(".accordion-content").style.maxHeight="0",r.style.borderBottom="1px solid #e0e0e0"}),o.classList.add("expanded"),n.style.maxHeight=n.scrollHeight+"px",o.style.border="none")})})}function E(){const t=document.querySelector(".menu-body"),e=document.querySelector(".menu-icon"),o=document.body;t&&e&&e.addEventListener("click",()=>{t.classList.toggle("active"),e.classList.toggle("active"),o.classList.toggle("lock")}),document.querySelectorAll('a[href*="#"]').forEach(r=>r.addEventListener("click",i=>{i.preventDefault();const l=r.getAttribute("href").substring(1);document.getElementById(l).scrollIntoView({behavior:"smooth",block:"start"}),t.classList.remove("active"),e.classList.remove("active"),o.classList.remove("lock")})),window.addEventListener("load",()=>{localStorage.getItem("theme")==="dark"&&(o.classList.add("dark-theme"),s.checked=!0)});const s=document.getElementById("switch");s.addEventListener("change",function(){s.checked?(o.classList.add("dark-theme"),localStorage.setItem("theme","dark")):(o.classList.remove("dark-theme"),localStorage.setItem("theme","light"))})}const H={projectsListEl:document.querySelector(".my-projects-list-js"),showMoreBtnEl:document.querySelector(".projects-btn-js")},J="/team-portfolio-js/assets/project-1-1x-B1HZIuYL.jpg",I="/team-portfolio-js/assets/project-1-2x-Bje55MHr.jpg",N="/team-portfolio-js/assets/project-2-1x-JhmGoZut.jpg",q="/team-portfolio-js/assets/project-2-2x-BKKFpGsW.jpg",M="/team-portfolio-js/assets/project-3-1x-DCuG7ItC.jpg",B="/team-portfolio-js/assets/project-3-2x-D_UCmZD9.jpg",T="/team-portfolio-js/assets/project-4-1x-Fww95F1J.jpg",R="/team-portfolio-js/assets/project-4-2x-mywvv0cJ.jpg",G="/team-portfolio-js/assets/project-5-1x-DxN2odVS.jpg",$="/team-portfolio-js/assets/project-5-2x-Cda9-ebG.jpg",A="/team-portfolio-js/assets/project-6-1x-CEcGoooa.jpg",C="/team-portfolio-js/assets/project-6-2x-DPoVSB5Q.jpg",V="/team-portfolio-js/assets/project-7-1x-DAPApIl8.jpg",O="/team-portfolio-js/assets/project-7-2x-qMfuGWzT.jpg",P="/team-portfolio-js/assets/project-8-1x-8UPNHidz.jpg",z="/team-portfolio-js/assets/project-8-2x-135sHb3J.jpg",_="/team-portfolio-js/assets/project-9-1x-xkayJYwa.jpg",K="/team-portfolio-js/assets/project-9-2x-MzqbzosW.jpg",U="/team-portfolio-js/assets/project-10-1x-Bna-RX6I.jpg",W="/team-portfolio-js/assets/project-10-2x-DfQwEs-w.jpg",d=[{img1x:J,img2x:I,title:"Wallet webservice ",technologies:"React, JavaScript, Node JS, Git",btnLink:"#",id:1,btnLink:"https://github.com/DenysHV1/team-portfolio-js"},{img1x:N,img2x:q,title:"Green harvest webservice",technologies:"React, JavaScript, Node JS, Git",id:2,btnLink:"https://github.com/DenysHV1/team-portfolio-js"},{img1x:M,img2x:B,title:"English Exellence webservice",technologies:"React, JavaScript, Node JS, Git",id:3,btnLink:"https://github.com/DenysHV1/team-portfolio-js"},{img1x:T,img2x:R,title:"power pulse webservice",technologies:"React, JavaScript, Node JS, Git",id:4,btnLink:"https://github.com/DenysHV1/team-portfolio-js"},{img1x:G,img2x:$,title:"mimino website",technologies:"React, JavaScript, Node JS, Git",id:5,btnLink:"https://github.com/DenysHV1/team-portfolio-js"},{img1x:A,img2x:C,title:"vyshyvanka vibes Landing Page",technologies:"React, JavaScript, Node JS, Git",id:6,btnLink:"https://github.com/DenysHV1/team-portfolio-js"},{img1x:V,img2x:O,title:"chego jewelry website",technologies:"React, JavaScript, Node JS, Git",id:7,btnLink:"https://github.com/DenysHV1/team-portfolio-js"},{img1x:P,img2x:z,title:"energy flow webservice",technologies:"React, JavaScript, Node JS, Git",id:8,btnLink:"https://github.com/DenysHV1/team-portfolio-js"},{img1x:_,img2x:K,title:"fruitbox online store",technologies:"React, JavaScript, Node JS, Git",id:9,btnLink:"https://github.com/DenysHV1/team-portfolio-js"},{img1x:U,img2x:W,title:"starlight studio landing page",technologies:"React, JavaScript, Node JS, Git",id:10,btnLink:"https://github.com/DenysHV1/team-portfolio-js"}];function f(){return new L(".my-projects-list-js .project-link",{sourceAttr:"href",overlay:!0,nav:!0,captions:!0,captionsData:"alt",captionDelay:250,isAnimating:!0})}const j="/team-portfolio-js/assets/sprite-B4v8_FLq.svg";function Z(){const{projectsListEl:t,showMoreBtnEl:e}=H;let o=3;const n=(i,l)=>i.map(({img1x:p,img2x:a,title:u,technologies:v,btnLink:x,id:y},ie,b)=>y<=l&&b.length>0?`
<li class="project-item">
  <a class="project-link" width='1112px' height = '640px' href="${a}">
    <picture class="project-img">
      <source
        srcset="
          ${p} 1x,
          ${a} 2x
        "/>
      <img class="project-img-inner" src="${p}" alt="${u}" />
    </picture>
  </a>
  	  <p class="project_technologies">${v}</p>
	  <div class="project-name-btn-container">
	  	  <h3 class="project_name">${u}</h3>
	  <a class="project-btn" href="${x}">VISIT <span><svg width="24" height="24"><use href="${j}#projects-arrow"></use></svg></span></a>
	  </div>
</li>`:"").join("");t.insertAdjacentHTML("beforeend",n(d,o)),t.querySelectorAll(".project-img-inner"),f();const s=e.querySelector("span"),r=()=>{s.textContent="LOAD MORE",t.children.length<d.length?(o+=3,t.innerHTML="",t.insertAdjacentHTML("beforeend",n(d,o)),t.children.length>=d.length&&(s.textContent="hide")):(o=3,t.innerHTML="",t.insertAdjacentHTML("beforeend",n(d,o)),document.getElementById("my-projects").scrollIntoView({behavior:"smooth"})),f()};e.addEventListener("click",r)}async function Q(){const t="https://portfolio-js.b.goit.study/api",e="/reviews";try{return(await h.get(`${t}${e}`)).data}catch(o){return console.error(o),null}}function Y(t=[]){return t.map(e=>`<li class="list-item swiper-slide">
          <p class="review-text">${e.review}</p>
          <div class="name-and-img">
            <img src="${e.avatar_url}" alt="${e.author}" class="review-img" />
            <p class="review-name">${e.author}</p>
          </div>
        </li>`).join("")}const g=document.querySelector(".list-reviews");let c;document.addEventListener("DOMContentLoaded",()=>{c=new S(".swiper",{modules:[w,k,F],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",disabledClass:"disabled"},slidesPerView:1,spaceBetween:20,keyboard:{enabled:!0},mousewheel:{enabled:!0,sensitivity:2},speed:350,breakpoints:{1280:{slidesPerView:"auto",spaceBetween:32}}})});document.addEventListener("keydown",t=>{if(t.key==="Tab"){t.preventDefault();const e=c.activeIndex;t.shiftKey?c.slideTo(e>0?e-1:c.slides.length-1):c.slideTo(e<c.slides.length-1?e+1:0)}});async function X(){try{const t=await Q();t?(g.innerHTML=Y(t),c.update()):(m.error({title:"Error",message:"No reviews found",position:"topRight",timeout:5e3,backgroundColor:"#FF4D4D",color:"#FFFFFF",zindex:9999}),g.innerHTML='<p class="notFound">Not found</p>')}catch(t){console.error(t),m.error({title:"Error",message:"No reviews found",position:"topRight",timeout:5e3,backgroundColor:"#FF4D4D",color:"#FFFFFF",zindex:9999}),g.innerHTML='<p class="notFound">Not found</p>'}}const ee={form:document.querySelector(".form-list"),inputEmail:document.querySelector("#emailInput"),messageInput:document.querySelector("#messageInput"),modalOverlay:document.querySelector(".modal-overlay")},te="https://portfolio-js.b.goit.study/api/requests";async function oe(t){try{const e=await h.post(te,t,{headers:{"Content-Type":"application/json"}});return console.log("Success:",e.data),e.data}catch(e){return console.error("Error:",e.response?e.response.data:e.message),null}}function se(t,e,o){return o.innerHTML="",o.classList.remove("visually-hidden"),o.addEventListener("click",n=>{n.target===n.currentTarget&&o.classList.add("visually-hidden")}),o.insertAdjacentHTML("beforeend",`<div class="together-modal">
		<button type="button" class="modal-close-button">
			<svg width="24" height="24" class="close-modal-svg">
				<use href="${j}#close-modal"></use>
			</svg>
		</button>
	  <h2 class="together-modal-title">
		${t}
	  </h2>
	  <p class="together-modal-text">
		${e}
	  </p>
	</div>`)}function re(t,e){const o=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""};t.value=o.email,e.value=o.message,t.addEventListener("input",()=>{n("email",t.value)}),e.addEventListener("input",()=>{n("message",e.value)});function n(s,r){const i=JSON.parse(localStorage.getItem("feedback-form-state"))||{};i[s]=r,localStorage.setItem("feedback-form-state",JSON.stringify(i))}}function ne(){const{form:t,inputEmail:e,messageInput:o,modalOverlay:n}=ee;t.addEventListener("submit",s);async function s(r){r.preventDefault();const i=r.target.elements.email.value.trim().toLowerCase(),l=r.target.elements.message.value.trim();if(!i||!l){m.error({title:"Error",message:"Please fill in all fields",position:"topRight",timeout:5e3,backgroundColor:"#FF4D4D",color:"#FFFFFF",zindex:9999});return}const p={email:i,comment:l};try{const a=await oe(p);a&&(se(a.title,a.message,n),document.querySelector(".modal-close-button").addEventListener("click",()=>{n.classList.add("visually-hidden")}),t.reset(),localStorage.removeItem("feedback-form-state"))}catch(a){m.error({title:"Error",message:a,position:"topRight",timeout:5e3,backgroundColor:"#FF4D4D",color:"#FFFFFF",zindex:9999})}}re(e,o)}D();E();Z();X();ne();
//# sourceMappingURL=index.js.map

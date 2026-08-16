const loader=document.querySelector(".loader");setTimeout(()=>loader.classList.add("done"),2800);
const scenes=[...document.querySelectorAll(".scene")],hud=document.querySelector("#hudPage"),bar=document.querySelector(".progress");
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){hud.textContent=e.target.dataset.page;e.target.classList.add("seen")}}),{threshold:.55});scenes.forEach(s=>obs.observe(s));
addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(scrollY/h*100)+"%"});

const toast=document.querySelector("#toast");function msg(t){toast.textContent=t;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1600)}
document.querySelectorAll(".floatingPhotos img").forEach(im=>im.onclick=()=>{document.querySelector("#lightbox img").src=im.src;document.querySelector("#lightbox").classList.add("show")});
document.querySelector("#lightbox button").onclick=()=>document.querySelector("#lightbox").classList.remove("show");
document.querySelector("#lightbox").onclick=e=>{if(e.target.id==="lightbox")e.currentTarget.classList.remove("show")};

document.querySelectorAll(".box").forEach(b=>b.onclick=()=>{
 b.classList.add("open");
 if(b.dataset.good==="true"){document.querySelector("#gameResult").textContent="🎉 YOU FOUND THE GIFT! SCROLL FOR THE FINAL CHAPTER";msg("Correct! The secret gift is yours ✦")}
 else{document.querySelector("#gameResult").textContent="😈 NICE TRY... PICK ANOTHER";msg("Not this one 😈")}
});

document.querySelector("#celebrate").onclick=()=>{
 for(let i=0;i<200;i++){let e=document.createElement("i");e.className="conf";e.style.left=Math.random()*100+"vw";e.style.background=["#e87932","#f8ead6","#d9ae68","#fff"][Math.floor(Math.random()*4)];e.style.animationDelay=Math.random()*1.5+"s";document.body.appendChild(e);setTimeout(()=>e.remove(),4500)}
 msg("HAPPY BIRTHDAY NIKESH! 🎉❤️");

 const overlay=document.createElement("div");
 overlay.id="ultimateTransition";
 overlay.innerHTML='<div class="transitionParticles"></div><div class="transitionContent"><div class="transitionCake">🎂</div><p>ONE LAST SURPRISE...</p><h2>READY, NIKESH?</h2><div class="transitionLoader"></div></div>';
 document.body.appendChild(overlay);

 setTimeout(()=>{
   window.location.href="https://ay017654-creator.github.io/NikeshBirthday-Ultimate/";
 },2800);
};
/* ===== YOUR PROJECTS: edit this list =====
   cat: "3d", "unreal", "video" or "graphic"
   image: path to picture, e.g. "assets/projects/city.jpg" ("" = placeholder)
   video: optional path to .mp4 in assets/videos/ (shown in the popup)
   link:  optional URL (ArtStation, YouTube...), "" hides the button */
const projects = [
  {title:"Project Title 1", cat:"3d", software:"Blender", desc:"[REPLACE] Short description of this 3D model or scene.", image:"", video:"", link:""},
  {title:"Project Title 2", cat:"3d", software:"Blender", desc:"[REPLACE] Product visualisation or wireframe showcase.", image:"", video:"", link:""},
  {title:"BedRoom Interior", cat:"unreal", software:"Unreal Engine 5", desc:"[Interior] Real-time environment or cinematic scene.", image:"assets/project/I_BR_UE2.png", video:"assets/video/I_BR_UE_VID.mp4", link:""},
  {title:"Project Title 4", cat:"unreal", software:"Unreal Engine 5, Blender", desc:"[REPLACE] Describe your Unreal Engine project.", image:"", video:"", link:""},
  {title:"Project Title 5", cat:"video", software:"Premiere Pro", desc:"[REPLACE] Cinematic video, reel or motion graphic.", image:"", video:"", link:""},
  {title:"Project Title 6", cat:"graphic", software:"Photoshop", desc:"[REPLACE] Poster, social media design or artwork.", image:"", video:"", link:""}
];
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

// Gallery cards
function media(p){return p.image?`<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy">`:`<span>Add image<br>assets/projects/</span>`}
$$(".grid").forEach(g=>{
  const list=projects.filter(p=>g.dataset.cat==="all"||p.cat===g.dataset.cat);
  g.innerHTML=list.map(p=>`<button class="card reveal" data-i="${projects.indexOf(p)}"><div class="thumb">${media(p)}</div><div class="info"><h3>${esc(p.title)}</h3><small>${esc(p.software)}</small></div></button>`).join("")||"<p class='sub'>Projects coming soon.</p>";
});

// Popup
const modal=$("#modal");let lastBtn;
function openM(i){const p=projects[i];lastBtn=document.activeElement;
  $("#mMedia").innerHTML=p.video?`<video src="${esc(p.video)}" controls playsinline poster="${esc(p.image)}"></video>`:media(p);
  $("#mTitle").textContent=p.title;$("#mSoft").textContent="Software: "+p.software;$("#mDesc").textContent=p.desc;
  const l=$("#mLink");p.link?(l.href=p.link,l.hidden=false):l.hidden=true;
  modal.hidden=false;document.body.style.overflow="hidden";$("#mClose").focus()}
function closeM(){const v=$("video",modal);v&&v.pause();modal.hidden=true;document.body.style.overflow="";lastBtn&&lastBtn.focus()}
document.addEventListener("click",e=>{const c=e.target.closest(".card");if(c)openM(c.dataset.i);if(e.target===modal||e.target.id==="mClose")closeM()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!modal.hidden)closeM()});

// Hero name letters (one orchestrated entrance)
const hn=$("#heroName");hn.innerHTML=[..."Barath"].map((c,i)=>`<i style="animation-delay:${.7+i*.09}s">${c}</i>`).join("");
// Loader
addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("done"),500));
// Typing roles
const roles=["3D worlds","cinematic edits","Unreal Engine scenes","bold graphic design"];let r=0,c=0,d=false;
const typed=$("#typed");
if(matchMedia("(prefers-reduced-motion:reduce)").matches){typed.textContent=roles[0]}else(function t(){
  const w=roles[r];c+=d?-1:1;typed.textContent=w.slice(0,c);let s=d?35:70;
  if(!d&&c===w.length){d=true;s=1600}else if(d&&c===0){d=false;r=(r+1)%roles.length;s=300}setTimeout(t,s)})();
// Reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});
$$(".reveal").forEach(el=>io.observe(el));
// Nav
const nav=$("#nav"),menu=$("#menu"),btn=$("#menuBtn");
addEventListener("scroll",()=>nav.classList.toggle("solid",scrollY>40),{passive:true});
btn.onclick=()=>{const o=menu.classList.toggle("open");btn.setAttribute("aria-expanded",o);btn.textContent=o?"Close":"Menu"};
$$("a",menu).forEach(a=>a.onclick=()=>{menu.classList.remove("open");btn.textContent="Menu";btn.setAttribute("aria-expanded","false")});
const secs=$$("main section[id]"),links=$$("a",menu);
new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.hash==="#"+x.target.id))}),{rootMargin:"-45% 0px -50% 0px"}).observe&&secs.forEach(s=>new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.hash==="#"+s.id))}),{rootMargin:"-45% 0px -50% 0px"}).observe(s));
// Contact form: opens visitor's email app (no backend needed)
$("#form").addEventListener("submit",e=>{e.preventDefault();const f=new FormData(e.target);
  location.href=`mailto:youremail@example.com?subject=${encodeURIComponent("Portfolio enquiry from "+f.get("name"))}&body=${encodeURIComponent(f.get("message")+"\n\nFrom: "+f.get("name")+" ("+f.get("email")+")")}`;
  $("#formMsg").textContent="Opening your email app. Please press Send there."});
// Footer year
$("#yr").textContent=new Date().getFullYear();
// Custom cursor (desktop only)
if(matchMedia("(hover:hover) and (pointer:fine)").matches){const cur=$("#cur");cur.classList.add("on");
  addEventListener("mousemove",e=>{cur.style.left=e.clientX+"px";cur.style.top=e.clientY+"px"});
  document.addEventListener("mouseover",e=>cur.classList.toggle("big",!!e.target.closest("a,button,.card")))}
(() => {
  const wall = document.querySelector('.logo-wall');
  if (!wall) return;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (still || !fine) return;               // no parallax on touch or reduced motion

  const scene = wall.querySelector('.scene');
  const area = wall.closest('section, header') || wall;  // listens across the hero
  let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;

  const tick = () => {
    cx += (tx - cx) * 0.06;                 // easing = no sudden movement
    cy += (ty - cy) * 0.06;
    scene.style.setProperty('--px', cx.toFixed(2) + 'deg');
    scene.style.setProperty('--py', cy.toFixed(2) + 'deg');
    raf = (Math.abs(tx - cx) > 0.02 || Math.abs(ty - cy) > 0.02) ? requestAnimationFrame(tick) : null;
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };

  area.addEventListener('pointermove', e => {
    const r = area.getBoundingClientRect();
    tx = ((e.clientX - r.left) / r.width  - 0.5) * 14;   // max ±7° left/right
    ty = ((e.clientY - r.top)  / r.height - 0.5) * -10;  // max ±5° up/down
    kick();
  });
  area.addEventListener('pointerleave', () => { tx = ty = 0; kick(); });
})();
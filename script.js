const $=id=>document.getElementById(id);
$("brand").textContent=SITE.brand;$("footBrand").textContent=SITE.brand;$("tagline").textContent=SITE.tagline;$("footTag").textContent=SITE.tagline;
$("intro").textContent=SITE.intro;$("email").textContent=SITE.email;$("location").textContent=SITE.location;$("year").textContent=new Date().getFullYear();
const phone=(SITE.whatsapp||"").replace(/\D/g,"");const wa=phone&&!phone.includes("XXXXXXXX")?`https://wa.me/${phone}?text=${encodeURIComponent("Hola, quiero consultar por un servicio de Buen Vivir TEC.")}`:"#";
["topWA","heroWA","ctaWA"].forEach(id=>{const a=$(id);a.href=wa;a.target="_blank";a.rel="noopener";if(wa==="#")a.onclick=e=>{e.preventDefault();alert("Edita tu número de WhatsApp en content.js para activar este botón.");}});
$("services").innerHTML=SITE.services.map((s,i)=>`<article class="card"><div class="card-num">${String(i+1).padStart(2,"0")}</div><h3>${s.title}</h3><p>${s.text}</p><ul>${s.items.map(x=>`<li>${x}</li>`).join("")}</ul><a class="ask" href="${wa}" target="_blank" rel="noopener">Consultar este servicio →</a></article>`).join("");
document.querySelector(".hamb").onclick=()=>document.querySelector(".nav").classList.toggle("open");

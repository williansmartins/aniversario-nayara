const gifts = [
  ["☕","Um café durante a viagem",25,"Um pequeno momento para começar o dia juntos."],
  ["🍦","Um mimo para a família",40,"Um carinho para deixar a viagem ainda mais gostosa."],
  ["🍽️","Uma refeição em família",75,"Ajude a tornar uma noite da nossa viagem ainda mais especial."],
  ["🚗","Ajuda para o transporte",100,"Uma mãozinha para chegarmos a cada nova aventura."],
  ["📸","Uma lembrança para registrar a viagem",125,"Para guardar em fotos um momento que não queremos esquecer."],
  ["🎟️","Uma experiência especial",150,"Ajude a transformar um dia comum em uma história para contar."],
  ["🌅","Um passeio em família",200,"Uma nova paisagem, boas conversas e uma memória para sempre."],
  ["🏨","Uma noite de hospedagem",250,"Um cantinho confortável para descansar durante a aventura."],
  ["🧳","Uma parte da hospedagem",300,"Sua contribuição ajuda a levar a família ainda mais longe."],
  ["✨","Um dia de aventuras em família",350,"Um dia inteiro para descobrir, rir e criar memórias."],
  ["🥂","Uma experiência inesquecível",400,"Para aquela experiência que vira história de família."],
  ["❤️","Um presente especial para nossa viagem",500,"Uma contribuição especial para tornar essa aventura possível."],
  ["✈️","Ajuda para as passagens",750,"Ajude a nos levar até o próximo capítulo da nossa história."],
  ["🌎","Uma grande contribuição para nossa aventura",1000,"Uma grande ajuda para uma grande aventura em família."]
];

const state = { cart: JSON.parse(localStorage.getItem("nayaraCart") || "[]"), total: 0 };
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function money(n){ return "$" + Number(n).toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}); }
function saveCart(){ localStorage.setItem("nayaraCart", JSON.stringify(state.cart)); updateCartCount(); }
function updateCartCount(){ $("#cartCount").textContent = state.cart.reduce((a,x)=>a+x.qty,0); }
function toast(msg){ const t=$("#toast"); t.textContent=msg; t.classList.add("show"); clearTimeout(window.toastTimer); window.toastTimer=setTimeout(()=>t.classList.remove("show"),2400); }

function renderGifts(){
  $("#giftGrid").innerHTML = gifts.map((g,i)=>`
    <article class="gift-card">
      <div><div class="gift-icon">${g[0]}</div><h3>${g[1]}</h3><div class="price">${money(g[2])}</div></div>
      <div><p>${g[3]}</p><button class="add-btn" onclick="addGift(${i})">Adicionar ao carrinho</button></div>
    </article>`).join("");
}
function addGift(i){
  const g=gifts[i], existing=state.cart.find(x=>x.id==="g"+i);
  if(existing) existing.qty++; else state.cart.push({id:"g"+i,name:g[1],price:g[2],qty:1});
  saveCart(); toast(`${g[1]} adicionado ao carrinho!`); location.hash="carrinho";
}
function addCustom(){
  const val=Number($("#customAmount").value);
  if(!val || val<1){toast("Digite um valor válido.");return}
  state.cart.push({id:"custom-"+Date.now(),name:"Meu próprio valor",price:val,qty:1});
  $("#customAmount").value=""; saveCart(); toast("Seu valor foi adicionado!"); location.hash="carrinho";
}
function renderCart(){
  const box=$("#cartItems");
  if(!state.cart.length){
    box.innerHTML=`<div class="cart-empty"><div style="font-size:42px">🎁</div><h3>Seu carrinho está vazio.</h3><p>Escolha uma memória para fazer parte dessa aventura.</p><a class="btn primary" href="#presentes">Escolher presente</a></div>`;
  } else {
    box.innerHTML=state.cart.map((x,i)=>`
      <div class="cart-row">
        <div><h3>${x.name}</h3><p>${money(x.price)} cada</p></div>
        <div class="qty"><button onclick="changeQty(${i},-1)">−</button><strong>${x.qty}</strong><button onclick="changeQty(${i},1)">+</button></div>
        <strong class="row-price">${money(x.price*x.qty)}</strong>
        <button class="remove" onclick="removeItem(${i})" title="Remover">×</button>
      </div>`).join("");
  }
  const total=state.cart.reduce((a,x)=>a+x.price*x.qty,0); state.total=total;
  $("#subtotal").textContent=money(total); $("#cartTotal").textContent=money(total);
  $("#zelleTotal").textContent=money(total); $("#confirmTotal").textContent=money(total); $("#formAmount").value=total||"";
}
function changeQty(i,d){state.cart[i].qty+=d;if(state.cart[i].qty<=0)state.cart.splice(i,1);saveCart();renderCart()}
function removeItem(i){state.cart.splice(i,1);saveCart();renderCart();toast("Item removido.")}
function navigate(page){
  $$(".page").forEach(x=>x.classList.remove("active"));
  const el=$("#"+page); if(el) el.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  if(page==="carrinho")renderCart();
  if(page==="zelle" && !state.cart.length){location.hash="presentes";return}
}
function handleHash(){
  let p=location.hash.replace("#","")||"home";
  if(p==="historia") {navigate("home");setTimeout(()=>$("#historia").scrollIntoView({behavior:"smooth"}),50);return}
  navigate(p);
}
function records(){return JSON.parse(localStorage.getItem("nayaraRecords")||"[]")}
function saveRecord(r){const arr=records();arr.unshift(r);localStorage.setItem("nayaraRecords",JSON.stringify(arr))}
function renderAdmin(){
  const rows=$("#adminRows"), arr=records();
  $("#statPeople").textContent=arr.length;
  $("#statTotal").textContent=money(arr.reduce((a,r)=>a+Number(r.amount||0),0));
  $("#statPending").textContent=arr.filter(r=>r.status!=="Pago").length;
  rows.innerHTML=arr.length?arr.map(r=>`<tr><td>${r.date}</td><td>${r.anonymous?"Anônimo":r.name}</td><td>${money(r.amount)}</td><td>${r.items||"-"}</td><td>${r.status}</td><td>${r.message||""}</td></tr>`).join(""):`<tr><td colspan="6">Nenhum presente registrado neste navegador.</td></tr>`;
}

$$("[data-page]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();location.hash=a.dataset.page}));
$("#addCustom").addEventListener("click",addCustom);
$("#toZelle").addEventListener("click",()=>{if(!state.cart.length){toast("Adicione um presente primeiro.");return}location.hash="zelle"});
$("#paymentDone").addEventListener("click",()=>location.hash="confirmar");
$("#copyZelle").addEventListener("click",async()=>{const value=$("#zelleContact").textContent;try{await navigator.clipboard.writeText(value);toast("Contato Zelle copiado!")}catch{toast(value)}});

$("#giftForm").addEventListener("submit",e=>{
  e.preventDefault();
  const fd=new FormData(e.target);
  const itemText=state.cart.map(x=>`${x.name} x${x.qty}`).join(" • ");
  saveRecord({
    date:new Date().toLocaleString("pt-BR"),
    name:fd.get("name"),email:fd.get("email"),phone:fd.get("phone"),
    amount:Number(fd.get("amount")),message:fd.get("message"),
    anonymous:fd.get("anonymous")==="on",items:itemText,status:"Aguardando confirmação"
  });
  state.cart=[];saveCart();e.target.reset();location.hash="obrigado";
});

$("#shareBtn").addEventListener("click",async()=>{
  const data={title:"Nayara — 40 anos",text:"40 Years, Countless Memories ✨",url:location.href};
  if(navigator.share){try{await navigator.share(data)}catch{}}
  else {try{await navigator.clipboard.writeText(location.href);toast("Link copiado!")}catch{toast("Copie o endereço desta página.")}}
});

$("#adminEnter").addEventListener("click",()=>{
  // CHANGE THIS PASSWORD BEFORE PUBLISHING.
  if($("#adminPassword").value==="nayara40"){
    $("#adminLogin").classList.add("hidden");$("#adminPanel").classList.remove("hidden");renderAdmin();
  } else toast("Senha incorreta.");
});
$("#clearRecords").addEventListener("click",()=>{
  if(confirm("Apagar todos os registros deste navegador?")){localStorage.removeItem("nayaraRecords");renderAdmin();}
});
$("#anonymous").addEventListener("change",e=>{if(e.target.checked) toast("Seu nome ficará anônimo no painel.");});

renderGifts();updateCartCount();handleHash();window.addEventListener("hashchange",handleHash);

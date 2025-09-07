(function(){
  const flames = document.querySelectorAll('.flame');
  const intro = document.getElementById('intro');
  const celebrate = document.getElementById('celebrate');
  const envelopeStage = document.getElementById('envelopeStage');
  const envelope = document.getElementById('envelope');
  const cardText = document.getElementById('cardText');
  const confetti = document.getElementById('confetti');
  const petalParent = document.getElementById('petals');

  const messageLines = [
    "My dearest love,",
    "Every sunrise with you feels like a fairytale — warm and full of hope.",
    "You hold my laughter, my peace, and all the little joys of life.",
    "Today I celebrate the gift of you — your heart, your smile, your light.",
    "May this year bring you happiness, adventures, and fulfilled dreams.",
    "You’re my home, my comfort, my endless reason to smile.",
    "Happy Birthday, my forever — always and endlessly.",
    "With all my love, forever yours ♥️"
  ];
  cardText.innerHTML = messageLines.join("<br><br>");

  let startX = null;
  document.addEventListener("touchstart", e => { startX = e.touches[0].clientX; });
  document.addEventListener("touchend", e => {
    if(startX === null) return;
    if(Math.abs(e.changedTouches[0].clientX - startX) > 50) blowOut();
    startX = null;
  });
  document.getElementById("cakeWrap").addEventListener("click", blowOut);

  let blown = false;
  function blowOut(){
    if(blown) return;
    blown = true;
    flames.forEach(f=>f.style.opacity=0);
    setTimeout(()=>{ intro.classList.add("hidden"); celebrate.classList.remove("hidden"); dropPetals(); launchConfetti(); },700);
    setTimeout(()=>{ celebrate.classList.add("hidden"); envelopeStage.classList.remove("hidden"); },3000);
  }

  function dropPetals(){
    for(let i=0;i<12;i++){
      const p=document.createElement("div");
      p.className="petal"; p.style.left=(10+Math.random()*80)+"%"; p.style.animationDelay=(i*60)+"ms";
      petalParent.appendChild(p);
      setTimeout(()=>p.remove(),2000);
    }
  }
  function launchConfetti(){
    const colors=["#ff6fa3","#ffd166","#9ad3bc","#a0c4ff","#ffcccb"];
    for(let i=0;i<30;i++){
      const el=document.createElement("div");
      el.style.cssText="position:absolute;width:10px;height:14px;top:-10%;";
      el.style.left=Math.random()*100+"%";
      el.style.background=colors[Math.floor(Math.random()*colors.length)];
      el.style.animation=`drop ${1500+Math.random()*1500}ms forwards`;
      confetti.appendChild(el);
      setTimeout(()=>el.remove(),3500);
    }
  }
  envelope.addEventListener("click", ()=> envelope.classList.toggle("open"));
  const style=document.createElement("style");
  style.innerHTML="@keyframes drop{100%{transform:translateY(110vh) rotate(720deg)}}";
  document.head.appendChild(style);
})();

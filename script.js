document.addEventListener("DOMContentLoaded", () => {

  const body = document.body;
  const toggle = document.getElementById("themeToggle");
  const navbar = document.querySelector(".navbar");
  const particleContainer = document.getElementById("particles");



/* ================= DARK / LIGHT MODE ================= */

  const savedTheme = localStorage.getItem("theme");

  if(savedTheme === "dark"){
    body.classList.add("dark-mode");
    if(toggle) toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  if(toggle){
    toggle.addEventListener("click", () => {

      body.classList.toggle("dark-mode");

      if(body.classList.contains("dark-mode")){

        toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("theme","dark");

      }else{

        toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("theme","light");

      }

    });
  }



/* ================= STICKY NAVBAR ================= */

  window.addEventListener("scroll", () => {

    if(!navbar) return;

    if(window.scrollY > 60){

      navbar.style.background = "rgba(15,23,42,0.95)";
      navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.35)";

    }else{

      navbar.style.background = "rgba(15,23,42,0.65)";
      navbar.style.boxShadow = "none";

    }

  });



/* ================= SMOOTH SCROLL ================= */

  const navLinks = document.querySelectorAll(".navbar__links a");

  navLinks.forEach(link => {

    link.addEventListener("click", e => {

      const targetId = link.getAttribute("href");

      if(targetId.startsWith("#")){

        e.preventDefault();

        const target = document.querySelector(targetId);

        if(target){
          target.scrollIntoView({
            behavior:"smooth"
          });
        }

      }

    });

  });



/* ================= PARTICLE SYSTEM ================= */

  function createParticle(){

    if(!particleContainer) return;

    const particle = document.createElement("div");
    particle.classList.add("particle");

    const size = Math.random()*6+3;
    const posX = Math.random()*window.innerWidth;
    const duration = Math.random()*5+5;

    particle.style.left = posX + "px";
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.opacity = Math.random();
    particle.style.animationDuration = duration + "s";

    particleContainer.appendChild(particle);

    setTimeout(()=>{
      particle.remove();
    }, duration * 1000);

  }

  function startParticles(){

    setInterval(createParticle,120);

  }



/* ================= SHOOTING STAR ================= */

  function shootingStar(){

    if(!particleContainer) return;

    const star = document.createElement("div");
    star.classList.add("shooting-star");

    const posX = Math.random()*window.innerWidth;

    star.style.left = posX + "px";
    star.style.top = "-100px";

    particleContainer.appendChild(star);

    setTimeout(()=>{
      star.remove();
    },1000);

  }

  function startMeteor(){

    setInterval(()=>{

      if(Math.random() < 0.6){
        shootingStar();
      }

    },4000);

  }



/* ================= START EFFECTS ================= */

  startParticles();
  startMeteor();

});

/* ================= CONTACT FORM ================= */

const form = document.getElementById("contactForm");
const successText = document.getElementById("formSuccess");

if(form){

  form.addEventListener("submit",function(e){

    e.preventDefault();

    const btn = form.querySelector(".send-btn");

    btn.classList.add("loading");

    setTimeout(()=>{

      btn.classList.remove("loading");

      successText.textContent = "Message sent successfully!";

      form.reset();

    },2000);

  });

}

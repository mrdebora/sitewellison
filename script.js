// GSAP Animation
const heroTextTitle = document.querySelectorAll(".hero_text_title li");

gsap.from(heroTextTitle, {
  duration: 1.2,
  opacity: 0,
  ease: "power4.out",
  transform: "translateY(100%)",
  stagger: 0.1
});

function mudarImagem(caminho) {
  const container = document.getElementById('photo-container');
  container.innerHTML = `<img src="${caminho}" alt="foto" style="max-width:420px;border-radius:10px;">`;
}

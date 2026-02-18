document.querySelectorAll(".gallery-wrapper").forEach(wrapper => {

  const track = wrapper.querySelector(".gallery-track");
  const nextBtn = wrapper.querySelector(".right");
  const prevBtn = wrapper.querySelector(".left");

  const images = track.children;
  const imgWidth = 270; // 250 + gap
  let index = 0;

  /* ===== GOMBOS NAV (NEM VÉGTELEN) ===== */
  function update() {
    track.scrollTo({
      left: index * imgWidth,
      behavior: "smooth"
    });
  }

  nextBtn.addEventListener("click", () => {
    if (index < images.length - 1) {
      index++;
      update();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      update();
    }
  });

  /* ===== DRAG & MOVE DESKTOP ===== */
  let isDown = false;
  let startX;
  let scrollStart;

  track.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX;
    scrollStart = track.scrollLeft;
  });

  window.addEventListener("mouseup", () => {
    isDown = false;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    e.preventDefault();
    const walk = (e.pageX - startX) * 1.2;
    track.scrollLeft = scrollStart - walk;
  });

});


document.addEventListener("DOMContentLoaded", function () {

  const banner = document.getElementById("cookie-banner");

  if (!localStorage.getItem("cookieChoice")) {
    banner.style.display = "block";
  }

  document.getElementById("cookie-accept").addEventListener("click", function () {
    localStorage.setItem("cookieChoice", "accepted");
    banner.style.display = "none";
  });

  document.getElementById("cookie-decline").addEventListener("click", function () {
    localStorage.setItem("cookieChoice", "declined");
    banner.style.display = "none";
  });

});




  const reveals = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();










const artistRail = document.querySelector('.artist-track');
const artistSlides = document.querySelectorAll('.artist-slide');
const artistNext = document.querySelector('.artist-next');
const artistPrev = document.querySelector('.artist-prev');

let artistIndex = 0;

function updateArtistCarousel() {
  artistRail.style.transform = `translateX(-${artistIndex * 100}%)`;
}

artistNext.addEventListener('click', () => {
  artistIndex++;
  if (artistIndex >= artistSlides.length) {
    artistIndex = 0;
  }
  updateArtistCarousel();
});

artistPrev.addEventListener('click', () => {
  artistIndex--;
  if (artistIndex < 0) {
    artistIndex = artistSlides.length - 1;
  }
  updateArtistCarousel();
});












const items = document.querySelectorAll(".flow-item");

const radius = Math.min(window.innerWidth, window.innerHeight) * 0.25;
const angleStep = (Math.PI * 2) / items.length;

items.forEach((item, i) => {
  const angle = i * angleStep;

  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const scale = 0.9 + (i % 5) * 0.05;
  const rotate = -8 + i * 2;

  item.style.transform = `
    translate(-50%, -50%)
    translate(${x}px, ${y}px)
    scale(${scale})
    rotate(${rotate}deg)
  `;

  item.style.zIndex = i;
});

/* resize fix */
window.addEventListener("resize", () => location.reload());



document.querySelectorAll(".gallery-wrapper").forEach(wrapper => {

  const track = wrapper.querySelector(".gallery-track");
  const nextBtn = wrapper.querySelector(".right");
  const prevBtn = wrapper.querySelector(".left");

  const images = track.children;
  const imgWidth = 270; // 250 + gap
  let index = 0;

  function isDesktop() {
    return window.innerWidth > 1070;
  }

  function update() {
    track.scrollTo({
      left: index * imgWidth,
      behavior: "smooth"
    });
  }

  nextBtn.addEventListener("click", () => {
    if (!isDesktop()) return;

    index++;
    if (index >= images.length) index = 0;
    update();
  });

  prevBtn.addEventListener("click", () => {
    if (!isDesktop()) return;

    index--;
    if (index < 0) index = images.length - 1;
    update();
  });

  window.addEventListener("resize", () => {
    if (!isDesktop()) {
      index = 0;
      track.scrollTo({ left: 0 });
    }
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

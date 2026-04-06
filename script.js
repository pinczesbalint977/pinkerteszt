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
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list a");

  if (banner && !localStorage.getItem("cookieChoice")) {
    banner.style.display = "block";
  }

  if (navToggle && navList) {
    navToggle.addEventListener("click", function () {
      const isOpen = navList.classList.toggle("is-open");
      navToggle.classList.toggle("is-active", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        navList.classList.remove("is-open");
        navToggle.classList.remove("is-active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const acceptBtn = document.getElementById("cookie-accept");
  const declineBtn = document.getElementById("cookie-decline");

  if (banner && acceptBtn) {
    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookieChoice", "accepted");
      banner.style.display = "none";
    });
  }

  if (banner && declineBtn) {
    declineBtn.addEventListener("click", function () {
      localStorage.setItem("cookieChoice", "declined");
      banner.style.display = "none";
    });
  }

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
  if (!artistRail) return;
  artistRail.style.transform = `translateX(-${artistIndex * 100}%)`;
}

if (artistRail && artistSlides.length && artistNext && artistPrev) {
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
}















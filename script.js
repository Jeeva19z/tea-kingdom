document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 40));

  const menuSwiper = new Swiper(".menuSwiper", {
    slidesPerView: 1,
    spaceBetween: 18,
    loop: true,
    autoplay: { delay: 3200, disableOnInteraction: false },
    pagination: { el: ".menuSwiper .swiper-pagination", clickable: true },
    navigation: { nextEl: ".menuSwiper .swiper-button-next", prevEl: ".menuSwiper .swiper-button-prev" },
    breakpoints: { 600: { slidesPerView: 2 }, 992: { slidesPerView: 3 }, 1200: { slidesPerView: 3.4 } }
  });

  const reviewSwiper = new Swiper(".reviewSwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: { delay: 4500, disableOnInteraction: false },
    navigation: { nextEl: ".review-controls .swiper-button-next", prevEl: ".review-controls .swiper-button-prev" }
  });

  // Mobile nav closes after selecting a section.
  document.querySelectorAll("#mainNav .nav-link, #mainNav .btn").forEach(link => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("mainNav");
      if (nav.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(nav).hide();
    });
  });

  // Gallery lightbox
  document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      document.getElementById("lightboxImage").src = item.dataset.image;
    });
  });

  // Demo form
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMessage");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }
    msg.style.display = "block";
    msg.innerHTML = '<i class="bi bi-check-circle-fill"></i> Thanks! Your enquiry is ready to be connected to email/API.';
    form.reset();
    bootstrap.Toast.getOrCreateInstance(document.getElementById("liveToast"), { delay: 3500 }).show();
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});

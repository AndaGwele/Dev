// ===== Mobile Navigation Toggle =====
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("navbar-toggle");
  const mobileMenu = document.getElementById("navbar-mobile");

  if (toggle && mobileMenu) {
    toggle.addEventListener("click", function () {
      const isOpen = mobileMenu.classList.contains("open");
      mobileMenu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", !isOpen);

      // Swap icon
      const icons = toggle.querySelectorAll("svg");
      icons[0].style.display = isOpen ? "block" : "none"; // menu icon
      icons[1].style.display = isOpen ? "none" : "block"; // close icon
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        const icons = toggle.querySelectorAll("svg");
        icons[0].style.display = "block";
        icons[1].style.display = "none";
      });
    });
  }

  // ===== Active nav link highlight =====
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  const navLinks = document.querySelectorAll(
    ".navbar-links a, .navbar-mobile a:not(.navbar-mobile-cta)"
  );
  navLinks.forEach(function (link) {
    const href = link.getAttribute("href").replace(/\/$/, "") || "/";
    // Normalize: index.html -> /
    const normalizedHref = href
      .replace(/index\.html$/, "")
      .replace(/\.html$/, "")
      .replace(/\/$/, "") || "/";
    const normalizedPath = currentPath
      .replace(/index\.html$/, "")
      .replace(/\.html$/, "")
      .replace(/\/$/, "") || "/";

    if (normalizedHref === normalizedPath) {
      link.classList.add("active");
    }
  });

  // ===== Contact Form Handling =====
  const form = document.getElementById("contact-form");
  const formContainer = document.getElementById("form-container");
  const successMessage = document.getElementById("form-success");
  const resetBtn = document.getElementById("form-reset");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      formContainer.style.display = "none";
      successMessage.style.display = "flex";
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      form.reset();
      successMessage.style.display = "none";
      formContainer.style.display = "block";
    });
  }

  // ===== Copyright year =====
  const yearEl = document.getElementById("copyright-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

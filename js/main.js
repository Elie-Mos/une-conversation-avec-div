// ============================================
// main.js — Scroll Animations: Fade + Slide Up
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom && sectionTop > -section.offsetHeight) {
        section.classList.add("reveal");
      } else {
        section.classList.remove("reveal");
      }
    });
  };

  // Run on scroll
  window.addEventListener("scroll", revealOnScroll);
  // Run once on load
  revealOnScroll();
});

let yearFooter = document.getElementById("year");
let parag = document.createElement("p");
let theDate = new Date();

parag.textContent = `Copyright © ${theDate.getFullYear()}`;
yearFooter.appendChild(parag);

// ========================= PARTICLES.JS INITIALIZATION =========================
window.onload = function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 45,
        density: { enable: true, value_area: 800 },
      },
      color: { value: "#F0F4F8" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
      },
      opacity: { value: 0.8, random: false },
      size: { value: 10, random: true },
      line_linked: {
        enable: true,
        distance: 220,
        color: "#F0F4F8",
        opacity: 0.4,
        width: 1.8,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });
};

// Preloader hide after page load
window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";
    setTimeout(() => (preloader.style.display = "none"), 500);
  }, 500);
});
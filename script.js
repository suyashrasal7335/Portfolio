const nav = document.querySelector(".nav");
const toggle = document.querySelector(".menu-toggle");
toggle.addEventListener("click", () => nav.classList.toggle("open"));
document
  .querySelectorAll(".nav a")
  .forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open")),
  );

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

document.querySelectorAll(".magnetic").forEach((btn) => {
  btn.addEventListener("pointermove", (e) => {
    const r = btn.getBoundingClientRect();
    btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.08}px, ${(e.clientY - r.top - r.height / 2) * 0.08}px)`;
  });
  btn.addEventListener("pointerleave", () => (btn.style.transform = ""));
});

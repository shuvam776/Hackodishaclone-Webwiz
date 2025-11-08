document.addEventListener("DOMContentLoaded", () => {
  const applyBtn = document.querySelector(".apply-btn");
  const hand = document.getElementById("hand");

  // GSAP timeline for entrance animations
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  // --- Entrance sequence ---
  tl.from(".topbar", { y: -50, opacity: 0, duration: 0.6 })
    .from(".hero h1", { y: -80, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.2")
    .from(".date", { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")

    // Hand and button rise together from below
    .from(["#hand", ".apply-btn"], {
      y: 80,
      ease: "back.out(1.8)",
      stagger: 0.1,
    }, "-=0.3")

    // Bottom elements fade in
    .to(".dev-stamp", { opacity: 1, y: -5, duration: 0.8, ease: "power3.out" }, "-=0.3")
    .to(".svg-mascot", { opacity: 1, y: -5, duration: 0.8, ease: "power3.out" }, "-=0.5");

  // --- Button press effect (manual click only) ---
  applyBtn.addEventListener("click", () => {
    applyBtn.classList.add("clicked");
    hand.classList.add("pressed");

    setTimeout(() => {
      applyBtn.classList.remove("clicked");
      hand.classList.remove("pressed");
    }, 500);
  });

  // --- Subtle idle float for the hand ---
  gsap.to("#hand", {
    y: "+=6",
    duration: 1.4,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    repeatDelay: 3,
  });

  // --- Optional idle bounce for the button too ---
  gsap.to(".apply-btn", {
    y: "+=3",
    duration: 1.4,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    repeatDelay: 3,
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({ delay: 1 })
    .to(".blind_top", { height: "0" })
    .to(".blind_bottom", { height: "0" }, "<");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".introduce",
        start: "0% 0%",
        end: "100%, 100%",
        scrub: true,
      },
    })
    .fromTo(".menu_tab", { x: "300px" }, { x: "0" });
});

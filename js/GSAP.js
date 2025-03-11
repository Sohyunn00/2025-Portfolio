document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // 🥦🥦 인트로 빨간 박스 올라감
  gsap
    .timeline({ delay: 1 })
    .to(".blind_top", { height: "0" })
    .to(".blind_bottom", { height: "0" }, "<");

  // 🥦🥦 메뉴 탭 나타내기
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".introduce",
        start: "-300px, 0%",
        end: "100%, 100%",
        scrub: true,
      },
    })
    .to(".menu_tab", { right: "0" });

  // 🥦🥦 영역별 메뉴 글자색 변경
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".introduce",
        start: "-300px, 0%",
        end: "100%, 100%",
        scrub: true,
      },
    })
    .to(".menu1 a", { color: "#c8000a", fontWeight: "800" })
    .to(".menu2 a", { color: "#eeeeee", fontWeight: "300" })
    .to(".menu3 a", { color: "#eeeeee", fontWeight: "300" });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".work",
        start: "0% 0%",
        end: "100%, 100%",
        scrub: true,
      },
    })
    .to(".menu1 a", { color: "#eeeeee", fontWeight: "300" })
    .to(".menu2 a", { color: "#29a5fe", fontWeight: "800" })
    .to(".menu3 a", { color: "#eeeeee", fontWeight: "300" });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".contact",
        start: "-10% 0%",
        end: "100%, 100%",
        scrub: true,
      },
    })
    .to(".menu1 a", { color: "#eeeeee", fontWeight: "300" })
    .to(".menu2 a", { color: "#eeeeee", fontWeight: "300" })
    .to(".menu3 a", { color: "#91ea91", fontWeight: "800" });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".introduce",
        start: "top 10%",
        end: "bottom top",
        endTrigger: ".visual2",
        scrub: true,
        pin: true,
      },
    })
    .fromTo(
      ".card1",
      { y: -600, opacity: 0 },
      { y: -100, opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(
      ".card2",
      { y: -600, opacity: 0 },
      { y: -100, opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(
      ".card3",
      { y: -600, opacity: 0 },
      { y: -100, opacity: 1, duration: 1, ease: "power2.out" }
    );
});

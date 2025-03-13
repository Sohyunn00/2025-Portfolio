document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // 🥦🥦 인트로 빨간 박스 올라감
  gsap
    .timeline({ delay: 0.8 })
    .to(".blind_top", { height: "0" })
    .to(".blind_bottom", { height: "0" }, "<")
    .to(".img_box h2", { y: 0, opacity: 1, duration: 2 });

  // 🥦🥦 메뉴 탭 나타내기
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".introduce",
        start: "0%, 0%",
        end: "10%, 100%",
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
        markers: true,
      },
    })
    .to(".menu1 a", { color: "#c8000a", fontWeight: "800" })
    .to(".menu2 a", { color: "#eeeeee" })
    .to(".menu3 a", { color: "#eeeeee" });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".work",
        start: "-300px, 0%",
        end: "5%, 100%",
        scrub: true,
      },
    })
    .to(".menu1 a", { color: "#eeeeee" })
    .to(".menu2 a", { color: "#29a5fe", fontWeight: "800" })
    .to(".menu3 a", { color: "#eeeeee" });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".contact",
        start: "-10% 0%",
        end: "100%, 100%",
        scrub: true,
      },
    })
    .to(".menu1 a", { color: "#eeeeee" })
    .to(".menu2 a", { color: "#eeeeee" })
    .to(".menu3 a", { color: "#91ea91", fontWeight: "800" });

  ScrollTrigger.matchMedia({
    "(min-width: 769px)": function () {
      // 🥦🥦 introduce 카드 올라옴
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".introduce",
            start: "top top",
            end: "-10% bottom",
            endTrigger: ".visual2",
            scrub: true,
          },
        })
        .fromTo(
          ".card1",
          { y: -500, opacity: 0 },
          { y: 0, opacity: 1, ease: "power2.out" }
        )
        .fromTo(
          ".card2",
          { y: -500, opacity: 0 },
          { y: 0, opacity: 1, ease: "power2.out" }
        )
        .fromTo(
          ".card3",
          { y: -500, opacity: 0 },
          { y: 0, opacity: 1, ease: "power2.out" }
        );

      // 🥦🥦 work 올라옴
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".work",
            start: "5% 0%",
            end: "95% 100%",
            scrub: true,
            duration: 3,
            ease: "power3.out",
          },
        })
        .to(".work2", { y: 0, display: "flex" })
        .to(".work3", { y: 0, display: "flex" })
        .to(".work4", { y: 0, display: "flex" });
    },
  });

  // 🥦🥦 visual2 텍스트 애니메이션
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".visual2",
        start: "0% 0%",
        end: "100% 100%",
        scrub: true,
        duration: 2,
      },
    })
    .to(".text1 span:nth-child(1)", { y: 0, opacity: 1 })
    .to(".text2 span:nth-child(8)", { y: 0, opacity: 1 }, "<")
    .to(".text1 span:nth-child(2)", { y: 0, opacity: 1 })
    .to(".text2 span:nth-child(7)", { y: 0, opacity: 1 }, "<")
    .to(".text1 span:nth-child(3)", { y: 0, opacity: 1 })
    .to(".text2 span:nth-child(6)", { y: 0, opacity: 1 }, "<")
    .to(".text1 span:nth-child(4)", { y: 0, opacity: 1 })
    .to(".text2 span:nth-child(5)", { y: 0, opacity: 1 }, "<")
    .to(".text1 span:nth-child(5)", { y: 0, opacity: 1 })
    .to(".text2 span:nth-child(4)", { y: 0, opacity: 1 }, "<")
    .to(".text1 span:nth-child(6)", { y: 0, opacity: 1 })
    .to(".text2 span:nth-child(3)", { y: 0, opacity: 1 }, "<")
    .to(".text1 span:nth-child(7)", { y: 0, opacity: 1 })
    .to(".text2 span:nth-child(2)", { y: 0, opacity: 1 }, "<")
    .to(".text1 span:nth-child(8)", { y: 0, opacity: 1 })
    .to(".text2 span:nth-child(1)", { y: 0, opacity: 1 }, "<")
    //
    .to(".text3 span:nth-child(1)", { y: 0, opacity: 1 })
    .to(".text4 span:nth-child(6)", { y: 0, opacity: 1 }, "<")
    .to(".text3 span:nth-child(2)", { y: 0, opacity: 1 })
    .to(".text4 span:nth-child(5)", { y: 0, opacity: 1 }, "<")
    .to(".text3 span:nth-child(3)", { y: 0, opacity: 1 })
    .to(".text4 span:nth-child(4)", { y: 0, opacity: 1 }, "<")
    .to(".text3 span:nth-child(4)", { y: 0, opacity: 1 })
    .to(".text4 span:nth-child(3)", { y: 0, opacity: 1 }, "<")
    .to(".text3 span:nth-child(5)", { y: 0, opacity: 1 })
    .to(".text4 span:nth-child(2)", { y: 0, opacity: 1 }, "<")
    .to(".text3 span:nth-child(6)", { y: 0, opacity: 1 })
    .to(".text4 span:nth-child(1)", { y: 0, opacity: 1 }, "<")
    .to(".text3 span:nth-child(7)", { y: 0, opacity: 1 })
    //
    .to(".visual2 .text", {
      transform: "rotate(-45deg) scale(2)",
      duration: 3,
    })
    //
    .to(".visual2 img", { opacity: 0, duration: 4 }, "<")
    .to(".text1", { x: "-80vw", duration: 4 })
    .to(".text2", { x: "80vw", duration: 4 }, "<")
    .to(".text3", { x: "-80vw", duration: 4 }, "<")
    .to(".text4", { x: "80vw", duration: 4 }, "<");
});

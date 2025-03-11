"use strict";

// 부드러운 스크롤 ------------------------------
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 타이핑 애니메이션 ------------------------------
const content = "- 김소현, 2025, 퍼블리셔 포트폴리오.";
const text = document.querySelector(".typing_box p");
let i = 0;

function typing() {
  if (i < content.length) {
    text.innerHTML += content[i++];
    setTimeout(typing, 140); // 다음 글자 출력
  }
  cusor.style.display = "none";
}
setTimeout(typing, 3000);

// 타이핑 커서 숨기기
function cusorNone() {
  const cusor = document.querySelector(".typing_box .blink");
  cusor.style.visibility = "hidden";
}
setTimeout(cusorNone, 7000);

gsap.registerPlugin(ScrollTrigger);

const text1 = document.querySelectorAll(".text1 span");
const text2 = document.querySelectorAll(".text2 span");
const text3 = document.querySelectorAll(".text3 span");
const text4 = document.querySelectorAll(".text4 span");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".visual2",
    start: "0%, 0%",
    end: "100% 100%",
    scrub: true,
    pin: true,
    markers: true,
    pinSpacing: true,
  },
});

function animateText(elements, reverse = false) {
  const chars = reverse ? [...elements].reverse() : elements;
  tl.to(chars, {
    y: 0,
    opacity: 1,
    duration: 0.2,
    stagger: 0.1,
    ease: "power2.out",
  });
}

// 1, 3번 앞에서부터 / 2, 4번 뒤에서부터
animateText(text1, false);
animateText(text2, true);
animateText(text3, false);
animateText(text4, true);

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
setTimeout(typing, 3500);

// 타이핑 커서 숨기기
function cusorNone() {
  const cusor = document.querySelector(".typing_box .blink");
  cusor.style.visibility = "hidden";
}
setTimeout(cusorNone, 7000);

// 마우스커스텀 ------------------------------

document.addEventListener("mousemove", (e) => {
  gsap.to(".cursor", {
    x: e.clientX,
    y: e.clientY,
    // duration: 1,
    scrub: 1,
  });
});

document.addEventListener("mousemove", (e) => {
  gsap.to(".work_cursor", {
    x: e.clientX + 70,
    y: e.clientY + 40,
  });
});

$(".work .book").mouseover(function () {
  gsap.to(".work_cursor", {
    opacity: 1,
    scale: 1,
    duration: 0.3,
  });
});

$(".work .book").mouseleave(function () {
  gsap.to(".work_cursor", {
    opacity: 0,
    scale: 0,
    duration: 0.3,
  });
});

// 네비게이션 버튼 클릭시 화면 이동 ------------------------------
document.querySelector(".menu1").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".introduce").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".menu2").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".work").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".menu3").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".contact").scrollIntoView({ behavior: "smooth" });
});

let box = document.querySelector(".sticky_box");

$(".sticky_box").css("height", box.offsetHeight + "px");

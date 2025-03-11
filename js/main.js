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

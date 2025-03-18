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

// 새로고침하면 스크롤 맨 위로 ------------------------------

$(function () {
  $("html, body").animate({ scrollTop: 0 }, "fast");
});

// 타이핑 애니메이션 ------------------------------
const content = "- 김소현, 2025, 퍼블리셔 포트폴리오.";
const text = document.querySelector(".typing_box p");
const cursor = document.querySelector(".typing_box .blink");
let i = 0;

function typing() {
  if (i < content.length) {
    text.innerHTML += content[i++];
    setTimeout(typing, 140); // 다음 글자 출력
  }
  cursor.style.display = "none";
}
setTimeout(typing, 3500);

// 타이핑 커서 숨기기
function cusorNone() {
  cursor.style.visibility = "hidden";
}
setTimeout(cusorNone, 7000);

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

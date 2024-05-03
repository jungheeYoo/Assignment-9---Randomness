const colors = [
  '#ef5777',
  '#575fcf',
  '#4bcffa',
  '#34e7e4',
  '#0be881',
  '#f53b57',
  '#3c40c6',
  '#0fbcf9',
  '#00d8d6',
  '#05c46b',
  '#ffc048',
  '#ffdd59',
  '#ff5e57',
  '#d2dae2',
  '#485460',
  '#ffa801',
  '#ffd32a',
  '#ff3f34',
];

const btn = document.querySelector('button');
const body = document.querySelector('body');

// 랜덤 색상 만들고 출력
function printGradientColor() {
  const randomIndex1 = colors[Math.floor(Math.random() * colors.length)];
  const randomIndex2 = colors[Math.floor(Math.random() * colors.length)];
  console.log(randomIndex1, randomIndex2);

  // 색성 겹침 방지
  if (randomIndex1 === randomIndex2) {
    return printGradientColor();
  }

  body.style.background = `linear-gradient(90deg, ${randomIndex1}, ${randomIndex2})`;
}

btn.addEventListener('click', printGradientColor);

// // 리팩토링

// // 랜덤 컬러 생성
// function generateRandomGradient(colors, direction) {
//   const randomIndex1 = colors[Math.floor(Math.random() * colors.length)];
//   const randomIndex2 = colors[Math.floor(Math.random() * colors.length)];
//   return `linear-gradient(${direction}, ${randomIndex1}, ${randomIndex2})`;
// }

// function printGradientColor(body, colors, direction) {
//   const gradientColor = generateRandomGradient(colors, direction);
//   body.style.background = gradientColor;
// }

// const btn = document.querySelector('button');
// const body = document.querySelector('body');

// btn.addEventListener('click', () => {
//   printGradientColor(body, colors, '90deg');
// });
